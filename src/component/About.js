import React from "react";
import "./about.css";

const sections = [
  {
    text: `India is a land steeped in spirituality and tradition, home to thousands of temples that embody centuries of devotion, art, and culture. Our website, Divine Temple, is dedicated to bringing you closer to the spiritual heart of India by showcasing 30 of its most revered and architecturally stunning temples.`,
    image: "https://img.freepik.com/free-photo/colorful-vibrant-indian-landscape_23-2151893918.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    alt: "Spiritual Temple",
  },
  {
    text: `Each temple featured on our homepage represents a unique story — from ancient legends and mythological significance to architectural brilliance and community traditions. Whether you are a devotee, a traveler, a history enthusiast, or simply curious, our site offers you a gateway to explore India’s diverse spiritual heritage.`,
    image: "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297158.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    alt: "Temple Architecture",
  },
  {
    text: `We believe that temples are not just places of worship but living museums that connect us with India’s past and present. This website aims to educate, inspire, and guide you through a virtual pilgrimage that highlights the beauty and sanctity of these divine places.`,
    image: "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297211.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    alt: "Temple Heritage",
  },
  {
    text: `Our curated selection of temples includes well-known pilgrimage sites such as the Vaishno Devi Temple in Jammu, the iconic Golden Temple in Amritsar, the magnificent Meenakshi Temple in Tamil Nadu, and the sacred Tirupati Balaji Temple, among others.`,
    image: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823131.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    alt: "Famous Temples",
  },
  {
    text: `Beyond visuals and stories, our goal is to foster a deeper connection with India’s spiritual traditions and promote cultural awareness. Whether you plan to visit these temples in person or wish to learn about them from the comfort of your home, Divine Temple is your trusted companion on this sacred journey.`,
    image: "https://img.freepik.com/free-photo/fantasy-astral-wallpaper-composition_23-2150248013.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    alt: "Spiritual Journey",
  },
];

function About() {
  return (
    <section className="about-page">
      <h2>About Divine Temple</h2>
      {sections.map(({ text, image, alt }, index) => (
        <div
          key={index}
          className={`about-section ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
        >
          <div className="about-text">
            <p>{text}</p>
          </div>
          <div className="about-image">
            <img src={image} alt={alt} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
