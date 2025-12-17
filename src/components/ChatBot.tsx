import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Load the n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize the branded chat
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n.coachshwetagupta.com/webhook/7e8ccaff-7542-41df-b116-1d4c478d67fa/chat',
        chatTitle: 'YESBEE AI Assistant',
        chatSubtitle: 'Ask me about AI Automation for your business',
        theme: {
          primaryColor: '#0b1c8f',
          secondaryColor: '#caff33'
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBot;
