

const imageBox = document.getElementById('imageBox');
    const images = [
      '/images/r1.png',
      '/images/r10.png',
      '/images/r4.jpg',
      '/images/r5.jpg',
      '/images/r6.png'
    ];

    let currentIndex = 0;

    function setImage(index) {
      imageBox.style.backgroundImage = `url('${images[index]}')`;
    }

    function changeImage() {
      imageBox.classList.add('explode');
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        setImage(currentIndex);
        imageBox.classList.remove('explode');
      }, 600);
    }

    // Initial image
    setImage(currentIndex);
    
  function goToNextPage() {
  window.location.href = "/Last Gift/lastgift.html"; // Replace with your next page URL
}