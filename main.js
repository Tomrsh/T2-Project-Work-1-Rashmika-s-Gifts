const name = "RASHMI"; // Change name here
    const container = document.getElementById('nameContainer');

    // Create letter spans
    name.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;
      container.appendChild(span);
    });

    const letters = document.querySelectorAll('.letter');

    async function animateName() {
      await new Promise(resolve => setTimeout(resolve, 800)); // Delay before first letter
      for (let i = 0; i < letters.length; i++) {
        letters.forEach((el, idx) => {
          el.classList.remove('active');
          el.style.opacity = idx === i ? '1' : '0.2';
        });
        letters[i].classList.add('active');
        await new Promise(resolve => setTimeout(resolve, 900));
      }

      // Highlight all at end with spacing and proper size
      letters.forEach(el => {
        el.classList.remove('active');
        el.classList.add('final');
        el.style.opacity = '1';
      });
    }

    function goToNextPage() {
      window.location.href = "/gift/gift.html"; // Replace with your next page URL
    }

    animateName();