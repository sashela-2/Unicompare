const images = [
  "src/Images/Waikato-Photos/University_of_Waikato_Official_Opening_1965.jpg",
  "src/Images/Waikato-Photos/Waikato-Student-Centre.png",
  "src/Images/Waikato-Photos/University_of_Waikato_Official_Opening_1965.jpg"
];

let current = 0;
const img = document.getElementById("carouselImage");

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  img.src = images[current];
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  img.src = images[current];
});