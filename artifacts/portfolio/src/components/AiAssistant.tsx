import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hi! I'm Savani's AI portfolio assistant. Ask me anything about her projects, skills, or experience.",
  },
];

const SUGGESTED_QUERIES = [
  "What projects have you built?",
  "What are your skills?",
  "Tell me about RAG system",
  "What is your experience in AI?",
  "Contact",
];

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let response = '';
      const lowerInput = text.toLowerCase();

      if (lowerInput.includes('project')) {
        response = "Savani has built three main projects:\n1. RAG-Based Document Q&A System (85%+ accuracy)\n2. AI Voice Agent for Insurance (Reduced follow-ups by 40%)\n3. TravelEval LLM Evaluation System (End-to-end framework)";
      } else if (lowerInput.includes('skill')) {
        response = "Top skills include Python, React, FastAPI, LangChain, PyTorch, and Docker. She specializes in building AI Agents, RAG systems, and scalable backend architectures.";
      } else if (lowerInput.includes('rag')) {
        response = "The RAG-Based Document Q&A System uses LangChain, FAISS, and Gemini to provide semantic document search and QA with 85%+ answer relevance on domain-specific queries.";
      } else if (lowerInput.includes('experience') || lowerInput.includes('internship') || lowerInput.includes('skyflo')) {
        response = "Savani interned as a Technical Manager at Skyflo, where she triaged GitHub issues, analyzed ecosystems, and created architecture diagrams for AI solutions.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        response = "You can reach Savani at bhimellu.savani@gmail.com or via LinkedIn (linkedin.com/in/savanibhimellu).";
      } else {
        response = "I'm a simple AI assistant without a backend connection right now! Try asking me about Savani's projects, skills, experience, or contact info.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: response },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground">Always online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                      msg.role === 'user'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-secondary text-white rounded-tr-none'
                        : 'bg-white/5 border border-white/10 text-foreground rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {SUGGESTED_QUERIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-black/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_hsla(260,100%,60%,0.4)]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
