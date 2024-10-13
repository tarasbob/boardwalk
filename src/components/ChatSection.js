import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatParticleBackground from "./ChatParticleBackground";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch initial AI message on mount
  useEffect(() => {
    const fetchInitialMessage = async () => {
      const conversation = [
        {
          role: "system",
          content:
            "You are an AI assistant representing our company. Start the conversation by introducing the company and explaining why it's a great investment opportunity. Ask the user if they have any questions or concerns.",
        },
      ];

      try {
        const response = await axios.post("/.netlify/functions/chat", {
          messages: conversation,
        });
        const botReply = response.data.reply;

        setMessages([
          {
            sender: "bot",
            text: botReply,
          },
        ]);
      } catch (error) {
        console.error(error);
        setMessages([
          {
            sender: "bot",
            text: "Hello! I'm here to answer any questions you have about our business.",
          },
        ]);
      }
    };

    fetchInitialMessage();
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    // Prepare the conversation history for the API
    const conversation = updatedMessages.map((msg) => {
      return {
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      };
    });

    conversation.unshift({
      role: "system",
      content:
        "You are an AI assistant representing our company. Provide clear and helpful answers to investor inquiries.",
    });

    try {
      const response = await axios.post("/.netlify/functions/chat", {
        messages: conversation,
      });
      const botReply = response.data.reply;

      setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="chat-section">
      <ChatParticleBackground />
      <div className="chat-content">
        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message bot">
              <p>
                Typing
                <span className="dot-one">.</span>
                <span className="dot-two">.</span>
                <span className="dot-three">.</span>
              </p>
            </div>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </section>
  );
}

export default ChatSection;
