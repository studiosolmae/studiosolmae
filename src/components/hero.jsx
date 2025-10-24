export default function Hero() {
    return (
        <section className="hero" style={{ background: "#e3d7cb" }}>
        <img
          src="public/p1.jpg"
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3, // Change this value (0 = invisible, 1 = fully opaque)
            zIndex: 1
          }}
        />
        <div className="overlay hero-title" data-aos="fade-up" style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            position: "relative",
            zIndex: 2
          }}>
          <img src="/logo2.png" alt="Studio Solmae Logo" style={{height:'250px', marginBottom:'16px'}} />
        </div>
      </section>
      
    );
  }
  
