import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import ChatParticleBackground from "./ChatParticleBackground";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const chatWindowRef = useRef(null);

  const sendMessage = useCallback(
    async (content, isInit = false) => {
      setIsLoading(true);
      try {
        const conversation = isInit
          ? [{ role: "user", content: "INIT" }]
          : [...messages, { role: "user", content }].map((msg) => ({
              role: msg.role,
              content: msg.text || msg.content,
            }));

        const response = await axios.post("/.netlify/functions/chat", {
          messages: conversation,
        });
        const botReply = response.data.message;

        setMessages((prev) => [
          ...prev,
          ...(isInit ? [] : [{ role: "user", text: content }]),
          { role: "assistant", text: botReply },
        ]);

        return botReply;
      } catch (error) {
        console.error(
          `Error ${isInit ? "initializing" : "sending message"}:`,
          error
        );
        return "I apologize, but I'm having trouble processing your request. Could you please try again?";
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  useEffect(() => {
    sendMessage(null, true);
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
    setMessages((prev) => [...prev, { role: "user", text: userInput }]);
    await sendMessage(userInput);
  };

  return (
    <section className="chat-section">
      <ChatParticleBackground />
      <div className="chat-content">
        <div className="chat-window" ref={chatWindowRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="chat-bubble">
                <p>{msg.text}</p>
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
