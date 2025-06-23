import React, { useState } from "react";

const TempleEvents = () => {
  // Track which video is playing by id (for live and past recordings)
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // LIVE EVENTS with images and video URLs
  const liveEvents = [
    {
      id: 1,
      title: "🔴 Live Now: Rath Yatra – Puri",
      liveUrl:
        "https://videocdn.cdnpk.net/videos/439dc7db-4823-584c-b98b-805d9638ad07/horizontal/previews/watermarked/small.mp4",
      image:
        "https://img.freepik.com/premium-photo/painting-temple-with-large-golden-temple-background_916191-374849.jpg?w=740",
    },
    {
      id: 2,
      title: "🔴 Live: Diwali Evening Aarti",
      liveUrl:
        "https://media.istockphoto.com/id/1147711665/video/dolly-shot-navratri-or-diwali-festival-india.mp4?b=1&s=mp4-640x640-is&k=20&c=Q3xYKo29T9j2sWi3VZiqFZgpchxt4WZbNM8lyyqAHRA=",
      image:
        "https://img.freepik.com/premium-photo/table-with-buddha-statue-surrounded-by-candles-other-items_1190007-7241.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      title: "🔴 Live: Maha Shivaratri Night",
      liveUrl:
        "https://videocdn.cdnpk.net/videos/a72bddf7-2770-4c62-97f9-63d4538df5c5/horizontal/previews/watermarked/small.mp4",
      image:
        "https://img.freepik.com/premium-photo/poster-with-statue-deity-candles_1213593-1174.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 4,
      title: "🔴 Live: Kumbh Mela Ritual",
      liveUrl:
        "https://media.istockphoto.com/id/1474887997/video/aerial-view-of-the-varanasi-ghats-on-the-banks-of-the-sacred-ganges-river-at-sunrise-in.mp4?s=mp4-640x640-is&k=20&c=dHUHGaM_g50mDmFjkfQSKBK_s8tNVgc8UXxa4Q1pQV8=",
      image:
        "https://img.freepik.com/premium-photo/group-monks-are-standing-water-with-their-hands-together_1190007-6737.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 5,
      title: "🔴 Live: Navratri Celebrations",
      liveUrl:
        "https://media.istockphoto.com/id/1773708609/video/durga-puja-is-the-biggest-festival-of-india-and-west-bengal-this-puja-has-been-declared-a.mp4?s=mp4-640x640-is&k=20&c=Ge4GJC-AvGQc0MKzUEecm6wJiMdvupEaoe97UVgF7t0=",
      image:
        "https://img.freepik.com/premium-photo/poster-navigori-woman-dancing-colorful-traditional-attire_1052642-8986.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
  ];

  // Past recordings with same play-on-click video behavior
  const pastRecordings = [
    {
      id: 101,
      title: "🎥 Ram Navami Aarti",
      videoUrl:
        "https://media.istockphoto.com/id/1360504100/video/ganga-aarti-means-prayer-for-the-river-ganga-the-ganga-is-holy-river-in-india-it-is.mp4?s=mp4-640x640-is&k=20&c=oKmYbcprW4BjtfZZHs-cvCMR_GvJZ1fzuDquBQXM0I8=",
      image:
        "https://img.freepik.com/free-photo/fantasy-rama-navami-celebration_23-2151400269.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 102,
      title: "🎥 Hanuman Jayanti Celebrations",
      videoUrl:
        "https://media.istockphoto.com/id/2016810023/video/statue-of-lord-hanuman-the-lord-of-monkeys-and-devotee-of-lord-rama.mp4?s=mp4-640x640-is&k=20&c=-i1c5OrIOKlwCikWRU4T-0LJ5m5ff0XXkt8DEvfryY0=",
      image:
        "https://img.freepik.com/premium-photo/hanuman-hindu-god-illustration-design-hd-image_1292386-6.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 103,
      title: "🎥 Navratri Garba Night",
      videoUrl:
        "https://videocdn.cdnpk.net/videos/f9c4e13e-c4f4-4214-8fac-2b82c7655f34/horizontal/previews/watermarked/small.mp4",
      image:
        "https://img.freepik.com/premium-photo/vibrant-sunset-dancers-traditional-attire-gather-dusty-village-square-skillfully_1176614-73363.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 104,
      title: "🎥 Janmashtami Celebrations",
      videoUrl:
        "https://media.istockphoto.com/id/1265202757/video/india-holy-festival.mp4?s=mp4-640x640-is&k=20&c=opYl3-i-hbceCyU1dEZM3nb2P_qfWpXZBe_8Aa-Cdfw=",
      image:
        "https://img.freepik.com/premium-photo/poster-that-says-koh-koh-koh-kola-is-displayed_1165863-6863.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 105,
      title: "🎥 Ganesh Chaturthi Visarjan",
      videoUrl:
        "https://media.istockphoto.com/id/1741068616/video/worship-of-hindu-lord-ganesha.mp4?s=mp4-640x640-is&k=20&c=yNP2f9A7rGzK4R_RbSeCO8jhK3jEqCzoGKYbkxujb8w=",
      image:
        "https://img.freepik.com/premium-photo/lord-ganesh_1299780-6359.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
  ];

  // Upcoming event cards
  const upcomingEvents = [
    {
      id: 201,
      title: "🌸 Holi Utsav – Vrindavan",
      date: "2025-03-25",
      time: "11:00 AM",
      location: "Banke Bihari Temple",
      image:
        "https://img.freepik.com/premium-photo/vibrant-traditional-holi-festival-scene_903142-3648.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 202,
      title: "🎵 Guru Purnima Bhajan",
      date: "2025-07-21",
      time: "06:30 PM",
      location: "Kashi Vishwanath",
      image:
        "https://img.freepik.com/premium-photo/picture-man-crowd-people-with-large-buddha-statue-guru-purnima_1253667-290.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 203,
      title: "🌟 Maha Shivaratri Abhishek",
      date: "2026-02-18",
      time: "12:00 AM",
      location: "Kedarnath Temple",
      image:
        "https://img.freepik.com/premium-photo/shiva-linga-decorated-with-flowers-bel-patra-leaf-haldi-kumkum-pooja-worshipping-lord-shiva-shankar-bhagwan_466689-8303.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 204,
      title: "🔥 Diwali Night Fireworks",
      date: "2025-11-02",
      time: "08:00 PM",
      location: "Golden Temple",
      image:
        "https://img.freepik.com/free-photo/ramadan-celebration-digital-art_23-2151358117.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 205,
      title: "🙏 Makar Sankranti Festival",
      date: "2026-01-14",
      time: "09:00 AM",
      location: "Sangam",
      image:
        "https://img.freepik.com/premium-photo/joyous-scene-basant-festival-with-colorful-kites-celebrations_1177187-120224.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
  ];

  // Past event cards (without video)
  const pastEvents = [
    {
      id: 301,
      title: "🌻 Tulsi Vivah",
      date: "2025-11-18",
      location: "Radha Raman Temple",
      image:
        "https://img.freepik.com/premium-photo/table-with-figurine-flowers-it_1190007-6134.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 302,
      title: "🕯️ Deepawali Morning Aarti",
      date: "2024-11-15",
      location: "Vaishno Devi",
      image:
        "https://img.freepik.com/premium-photo/flowers-flames-aarti-ceremony-varanasi_28914-71749.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 303,
      title: "🌿 Cath Puja",
      date: "2024-10-10",
      location: "Bihar",
      image:
        "https://media.istockphoto.com/id/1650873691/photo/women-devotee-standing-in-river-and-praying-with-religious-offerings-for-sun-god-in-chhath.jpg?b=1&s=612x612&w=0&k=20&c=5faS13BFxrs48boQsTJ8odZpCuyDZisrcQl8Rc8g8cw=",
    },
    {
      id: 304,
      title: "🍂 Dussehra Festival",
      date: "2024-10-05",
      location: "Vijayadashami Ground",
      image:
        "https://img.freepik.com/premium-photo/happy-dussehra_1037680-46862.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
    {
      id: 305,
      title: "🎉 Ganesh Chaturthi",
      date: "2024-09-12",
      location: "Mumbai Ganesh Mandal",
      image:
        "https://img.freepik.com/premium-photo/temple-temple_1048944-6165322.jpg?ga=GA1.1.891616922.1745318051&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🛕 Temple Events Portal</h1>
      </header>

      {/* Main content with background and padding */}
      <main style={styles.page}>
        <section style={styles.liveSection}>
          <h2 style={styles.sectionHeading}>🔴 Live Streaming Events</h2>
          <div style={styles.videoGrid}>
            {liveEvents.map((event) => (
              <div key={event.id} style={styles.videoBox}>
                <h3 style={styles.videoTitle}>{event.title}</h3>
                {playingVideoId === event.id ? (
                  <div style={styles.videoContainer}>
                    <iframe
                      src={event.liveUrl}
                      title={event.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={styles.iframe}
                    />
                  </div>
                ) : (
                  <div
                    style={styles.thumbnailWrapper}
                    onClick={() => setPlayingVideoId(event.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setPlayingVideoId(event.id);
                      }
                    }}
                    aria-label={`Play live video for ${event.title}`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      style={styles.thumbnail}
                      loading="lazy"
                    />
                    <div style={styles.playOverlay}>▶️</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PAST RECORDINGS */}
        <section style={styles.recordingSection}>
          <h2 style={styles.sectionHeading}>📼 Past Event Recordings</h2>
          <div style={styles.videoGrid}>
            {pastRecordings.map((event) => (
              <div key={event.id} style={styles.videoBox}>
                <h4 style={styles.videoTitle}>{event.title}</h4>
                {playingVideoId === event.id ? (
                  <div style={styles.videoContainer}>
                    <iframe
                      src={event.videoUrl}
                      title={event.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={styles.iframe}
                    />
                  </div>
                ) : (
                  <div
                    style={styles.thumbnailWrapper}
                    onClick={() => setPlayingVideoId(event.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setPlayingVideoId(event.id);
                      }
                    }}
                    aria-label={`Play recording for ${event.title}`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      style={styles.thumbnail}
                      loading="lazy"
                    />
                    <div style={styles.playOverlay}>▶️</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section>
          <h2 style={styles.sectionHeading}>📅 Upcoming Events</h2>
          <div style={styles.grid}>
            {upcomingEvents.map((event) => (
              <div key={event.id} style={styles.card}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={styles.image}
                  loading="lazy"
                />
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{event.title}</h3>
                  <p style={styles.cardText}>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p style={styles.cardText}>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p style={styles.cardText}>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAST EVENTS */}
        <section>
          <h2 style={styles.sectionHeading}>📜 Past Events</h2>
          <div style={styles.grid}>
            {pastEvents.map((event) => (
              <div key={event.id} style={styles.card}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={styles.image}
                  loading="lazy"
                />
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{event.title}</h3>
                  <p style={styles.cardText}>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p style={styles.cardText}>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#b56334",
    padding: "1rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
  },
  headerTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    margin: 0,
    fontWeight: "bold",
    fontFamily: "'Times New Roman', serif",
  },
  page: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "black",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/flowers.png")',
    padding: "1.5rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    marginBottom: "1.5rem",
    color: "white",
    borderBottom: "3px solid #c59d5f",
    paddingBottom: "0.3rem",
    fontFamily: "'Times New Roman', serif",
    textAlign: "center",
    fontWeight: "800",
  },
  liveSection: {
    marginBottom: "3rem",
  },
  recordingSection: {
    marginBottom: "3rem",
    backgroundColor: "gray",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/gray-floral.png")',
    padding: "1rem",
    borderRadius: "12px",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
    gap: "1.5rem",
  },
  videoBox: {
    textAlign: "center",
    background: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },
  videoTitle: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    margin: "0.5rem 0",
    color: "#333",
  },
  videoContainer: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    borderRadius: "8px",
    margin: "0.5rem 0",
  },
  thumbnailWrapper: {
    position: "relative",
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    outline: "none",
    margin: "0.5rem 0",
  },
  thumbnail: {
    width: "100%",
    height: "auto",
    aspectRatio: "16/9",
    objectFit: "cover",
    display: "block",
    borderRadius: "8px",
    userSelect: "none",
  },
  playOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    color: "rgba(255, 255, 255, 0.85)",
    textShadow: "0 0 8px rgba(0,0,0,0.7)",
    pointerEvents: "none",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "1.5rem",
    marginBottom: "3rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
    overflow: "hidden",
    cursor: "default",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "1rem",
    fontFamily: "'Arial', sans-serif",
    color: "#4a2e0f",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    margin: "0.5rem 0",
    color: "#333",
  },
  cardText: {
    fontSize: "0.9rem",
    margin: "0.3rem 0",
    lineHeight: "1.4",
  },
};

export default TempleEvents;
