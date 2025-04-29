
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Send, Lock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
};

const AgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello John! I hope you\'re having a good day. Is there anything I can help you with today?',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      sender: 'agent',
      text: 'Your cleaning team is scheduled to arrive at 2 PM today.',
      timestamp: new Date(Date.now() - 1800000)
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);
  
  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      let responseText = '';
      
      if (inputMessage.toLowerCase().includes('confirm')) {
        responseText = 'Great! I\'ve confirmed the cleaning appointment for 2 PM today. The team has been notified.';
      } else if (inputMessage.toLowerCase().includes('cancel')) {
        responseText = 'I\'ve cancelled the cleaning appointment for today. Would you like to reschedule?';
      } else if (inputMessage.toLowerCase().includes('time') || inputMessage.toLowerCase().includes('when')) {
        responseText = 'The cleaning team is scheduled to arrive at 2 PM today.';
      } else if (inputMessage.toLowerCase().includes('help') || inputMessage.toLowerCase().includes('assistance')) {
        responseText = 'I can help you with scheduling services, checking appointment times, or answering questions about your home care. What would you like assistance with?';
      } else {
        responseText = 'Thank you for your message. Is there anything specific you need help with regarding your scheduled services?';
      }
      
      const newAgentMessage: Message = {
        id: Date.now() + 1,
        sender: 'agent',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newAgentMessage]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <section className="py-6">
      <div className="container-elder">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="bg-elderease-blue p-3 flex items-center justify-between border-b">
            <h3 className="font-medium">AI Service Agent</h3>
            <div className="flex items-center text-sm text-primary-foreground">
              <Lock className="h-3 w-3 mr-1" />
              <span>Encrypted</span>
            </div>
          </div>
          
          <div className="h-[400px] flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-elderease-purple text-gray-800 rounded-br-none'
                          : 'bg-elderease-gray text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="break-words">{message.text}</p>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-right' : ''
                        } text-gray-500`}
                      >
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="border-t p-3">
              <div className="flex space-x-2">
                <textarea
                  className="flex-1 min-h-10 p-2 border rounded-lg resize-none"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  rows={1}
                />
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={!inputMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentChat;
