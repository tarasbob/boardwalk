import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import supabase from "../supabaseClient";
import ChatParticleBackground from "./ChatParticleBackground";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [conversationId, setConversationId] = useState(null);
  const chatWindowRef = useRef(null);

  const sendMessage = useCallback(
    async (content, currentConversationId, isInit = false) => {
      setIsLoading(true);
      try {
        let conversation;

        if (isInit) {
          conversation = [{ role: "user", content: "INIT" }];
        } else {
          // Add the user's message to the state immediately
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", text: content },
          ]);

          // Save user's message to Supabase
          if (currentConversationId) {
            const { error: userError } = await supabase
              .from("messages")
              .insert({
                conversation_id: currentConversationId,
                sender: "user",
                content,
              });

            if (userError) {
              console.error("Error saving user message:", userError);
            }
          }

          // Build the conversation including the user's message
          conversation = [
            ...messages.map((msg) => ({
              role: msg.role,
              content: msg.text,
            })),
            { role: "user", content },
          ];
        }

        const response = await axios.post("/.netlify/functions/chat", {
          messages: conversation,
        });
        const botReply = response.data.message;

        // Add the assistant's reply to the messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", text: botReply },
        ]);

        // Save assistant's message to Supabase
        if (currentConversationId) {
          const { error: assistantError } = await supabase
            .from("messages")
            .insert({
              conversation_id: currentConversationId,
              sender: "assistant",
              content: botReply,
            });

          if (assistantError) {
            console.error("Error saving assistant message:", assistantError);
          }
        }

        return botReply;
      } catch (error) {
        console.error(
          `Error ${isInit ? "initializing" : "sending message"}:`,
          error
        );
        // Add an error message to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            text: "I apologize, but I'm having trouble processing your request. Could you please try again?",
          },
        ]);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  useEffect(() => {
    const initChat = async () => {
      // Create a new conversation every time the page loads
      const { data, error } = await supabase
        .from("conversations")
        .insert({})
        .select("id")
        .single();

      if (error) {
        console.error("Error creating conversation:", error);
        return;
      }

      const newConversationId = data.id;
      setConversationId(newConversationId);

      // Clear previous messages
      setMessages([]);

      await sendMessage(null, newConversationId, true);
    };
    initChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;

    const userInput = input;
    setInput("");
    await sendMessage(userInput, conversationId);
  };

  return (
    <section className="chat-section">
      <ChatParticleBackground />
      <div className="chat-content">
        <div className="chat-window" ref={chatWindowRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="chat-bubble">
                <pre>{msg.text}</pre>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message assistant">
              <div className="chat-bubble loading">
                <span className="dot-one">.</span>
                <span className="dot-two">.</span>
                <span className="dot-three">.</span>
              </div>
            </div>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatSection;
