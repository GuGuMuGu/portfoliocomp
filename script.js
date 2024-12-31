// Dynamic Typing Animation for Hero Section
const typeWriter = (element, words, speed) => {
    let i = 0;
    let isDeleting = false;
    let currentWord = '';
    
    function type() {
        // Skip if paused
        if (i < words.length) {
            if (isDeleting) {
                currentWord = words[i].substring(0, currentWord.length - 1);
            } else {
                currentWord = words[i].substring(0, currentWord.length + 1);
            }

            element.textContent = currentWord;

            if (!isDeleting && currentWord === words[i]) {
                // Pause after finishing the word
                setTimeout(() => {
                    if (i === words.length - 1) {
                        // Stop after the last word
                        return;
                    }
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (isDeleting && currentWord === '') {
                isDeleting = false;
                i++;
                setTimeout(() => {
                    type();
                }, 500);
            } else {
                setTimeout(() => {
                    type();
                }, speed);
            }
        }
    }

    type();
};

// Initializing Typing Animation on Hero Section
const heroTextElement = document.querySelector('.hero .text h1');
const words = ['Welcome to My Website',"Hi! I'm Adarsh"];
if (heroTextElement) {
    typeWriter(heroTextElement, words, 100);
}
