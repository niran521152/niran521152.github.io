
        // Array of the quotes
        const quotes = [
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Believe you can and you're halfway there.",
            "Your time is limited, don't waste it living someone else's life.",
            "It always seems impossible until it's done.",
            "Life is what happens when you're busy making other plans.",
			"Success is not in never failing, but in rising every time we fall.",
            "Each mistake teaches us something new. Embrace failure as a stepping stone to success.",
            "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
            "It's not whether you get knocked down, it's whether you get up.",
			"Failure is the opportunity to begin again more intelligently.",
			"Success is stumbling from failure to failure with no loss of enthusiasm.",
			"Don't watch the clock; do what it does. Keep going.",
			"Perseverance is not a long race; it's many short races one after another.",
			"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
			"The only limit to our realization of tomorrow will be our doubts of today."
        ];

        // Function to generate and display a random quote
        function generateQuote() {
            const quoteElement = document.getElementById("quote");
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomIndex];
        }
