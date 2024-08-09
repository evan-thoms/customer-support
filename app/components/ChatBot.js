import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    if (!document.querySelector('link[href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.async = true;
      script.onload = () => {
        console.log('Dialogflow Messenger script loaded successfully.');
      };
      script.onerror = (error) => {
        console.error('Error loading Dialogflow Messenger script:', error);
      };
      document.body.appendChild(script);
    }

    return () => {
    };
  }, []);

  return (
    <>
      <df-messenger
        project-id="customer-service-431816"
        agent-id="1fb8d8ae-579a-40a2-a927-58df5a94aa19"
        language-code="en"
        max-query-length="-1"
        style={{ zIndex: 999, position: 'fixed', bottom: '16px', right: '16px' }}
      >
        <df-messenger-chat-bubble chat-title="Customer-Service">
        </df-messenger-chat-bubble>
      </df-messenger>
      <style jsx global>{`
        df-messenger {
            z-index:999;
            position: fixed;

          --df-messenger-font-color: #333;
          
            --df-messenger-font-family: Roboto Mono;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #bcc9b7;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
        }
        df-messenger-chat-bubble {
            --df-messenger-chat-window-width: 400px;
        }
      `}</style>
    </>
  );
};

export default ChatBot;

