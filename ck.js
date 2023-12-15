
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
			"The only limit to our realization of tomorrow will be our doubts of today.",
			"Perseverance is not a long race; it's many short races one after the other. Keep trying, and success will be yours." ,
			"The only real failure is the failure to try. Every effort brings you one step closer to your goals.",
			"Success is stumbling from failure to failure with no loss of enthusiasm." ,
			"Don't be discouraged by a failure. It can be a positive experience. Failure is, in a sense, the highway to success, inasmuch as every discovery of what is false leads us to seek earnestly after what is true, and every fresh experience points out some form of error which we shall afterward carefully avoid." ,
			"It's not whether you get knocked down, it's whether you get up." ,
			"Many of life's failures are people who did not realize how close they were to success when they gave up." ,
			"The master has failed more times than the beginner has even tried." ,
			"Choose love over hate, kindness over cruelty, and hope over fear. In the end, love will conquer war.",
			"The power of love is greater than the love of power. Let love be your guiding force in a world too often driven by conflict." ,
			"In the battle between love and war, choose love. It has the strength to heal wounds that war can only create." ,
			"Love is the only force capable of transforming an enemy into a friend." ,
			"Where there is love, there is no room for war. Let love be the anthem of your heart." ,
			"The greatest warrior is one who fights for love, not for conquest." ,
			"Love is the bridge between you and everything. It's the force that transcends the need for war." ,
			"In the face of adversity, let love be your weapon. It has the power to disarm even the fiercest of conflicts.",
			"Hatred darkens life; love illuminates it. Let love be the guiding light in a world too often overshadowed by war." ,
			"In the grand theater of life, love is the masterpiece that outshines the drama of war." 
        ];

        // Function to generate and display a random quote
        function generateQuote() {
            const quoteElement = document.getElementById("quote");
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomIndex];
        }
