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
          --df-messenger-bot-message-color: #000; /* Bot message text color */
          --df-messenger-user-message-color: #000; /* User message text color */
          --df-messenger-chat-background-color: #f3f6fc; /* Chat background color */
          --df-messenger-font-family: 'Google Sans', sans-serif; /* Font family */
          --df-messenger-bot-message: { /* Bot message styling */
            background-color: #ffffff;
            color: #000000;
          };
          --df-messenger-user-message: { /* User message styling */
            background-color: #d3e3fd;
            color: #000000;
          };
          --df-messenger-chat: {
            height: 400px;
            width: 300px;
            border: 1px solid #ddd;
          };
        }
      `}</style>
    </>
  );
};

export default ChatBot;
