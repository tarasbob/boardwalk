import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatParticleBackground from "./ChatParticleBackground";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeChat();
  }, []);

  const initializeChat = async () => {
    try {
      const response = await axios.post("/.netlify/functions/chat", {
        messages: [{ role: "user", content: "INIT" }],
      });
      const botReply = response.data.message;
      setMessages([{ role: "assistant", text: botReply }]);
    } catch (error) {
      console.error("Error initializing chat:", error);
      setMessages([
        {
          role: "assistant",
          text: "Hello! I'm here to assist you with any questions about our company. How can I help you today?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setIsLoading(true);

    const conversation = [...messages, newMessage].map((msg) => ({
      role: msg.role,
      content: msg.text,
    }));

    try {
      const response = await axios.post("/.netlify/functions/chat", {
        messages: conversation,
      });
      const botReply = response.data.message;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", text: botReply },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          text: "I apologize, but I'm having trouble processing your request. Could you please try again?",
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
            <div key={idx} className={`chat-message ${msg.role}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message assistant">
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
            onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
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
