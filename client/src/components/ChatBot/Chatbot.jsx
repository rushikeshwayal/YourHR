import  { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Dynamically add the chatbot script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'ZQ-d1RsRaFXkpuGC_QIhv');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="chatbot-container" style={styles.chatbotContainer}>
      {/* The chatbot will be automatically embedded by the script */}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',  // Adjust as needed
    right: '20px',   // Adjust as needed
    zIndex: 1000,    // Ensure it stays above other content
  },
};

export default Chatbot;
