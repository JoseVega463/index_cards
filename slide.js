<script>
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(index) {
    // Remove the "active" class from all slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

    // Add the "active" class to the current slide
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Call nextSlide function every 3 seconds (adjust timing as needed)
  setInterval(nextSlide, 3000);
</script>
