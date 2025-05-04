function getBotResponse(input) {
    const text = input.toLowerCase();
  
    // Basic keyword responses
    if (text.includes("hello") || text.includes("hi")) return "Hello! How can I help you today?";
    if (text.includes("help")) return "You can ask me about our services or even math problems!";
    if (text.includes("bye")) return "Goodbye! Have a great day.";
  
    // Basic math evaluator
    try {
      // Allow only safe characters
      if (/^[0-9+\-*/().\s]+$/.test(text)) {
        const result = Function(`return (${text})`)();
        if (!isNaN(result)) return `The answer is ${result}`;
      }
    } catch (e) {
      return "Hmm, I couldn't compute that.";
    }
  
    return "I'm not sure how to answer that yet.";
  }
  