const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Developer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "YouTuber";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);