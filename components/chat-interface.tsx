"use client"

import { useState } from "react"
import MessageInput from "@/components/message-input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "This is a simulated response from the assistant.",
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg">Start a new conversation</p>
                <p className="text-sm mt-2">Ask anything to get started</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto">
          <MessageInput value={inputValue} onChange={setInputValue} onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}
