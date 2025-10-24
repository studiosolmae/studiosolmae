export default function Contact() {
    return(
        <section id="contact" className="contact" data-aos="fade-up">
        <h2>CONTACT</h2>
        <p>Have a Question? Just ask us, we're happy to answer!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
        <div className="contact-links">
  <a href="mailto:studiosolmae@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
    {/* Mail SVG Icon */}
    <svg viewBox="0 0 24 24" width="32" height="32" fill="#4e3327">
      <path d="M19.99 4H4c-1.1 0-2 .89-2 1.99v12.02C2 20.1 2.89 21 4 21h15.99c1.09 0 1.98-.89 1.98-1.99V5.99C21.97 4.9 21.08 4 19.99 4zM20 8.41l-7.35 4.73a.995.995 0 01-1.3 0L4 8.41V6l8 5.01L20 6v2.41z"></path>
    </svg>
  </a>
  <a href="https://www.instagram.com/studiosolmae/" title="Instagram" target="_blank" rel="noopener noreferrer">
    {/* Instagram SVG Icon */}
    <svg viewBox="0 0 24 24" width="32" height="32" fill="#4e3327">
      <path d="M7.75 2h8.5A5.77 5.77 0 0122 7.75v8.5A5.77 5.77 0 0116.25 22h-8.5A5.77 5.77 0 012 16.25v-8.5A5.77 5.77 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5zm4.25 2.75a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm6.13 1.37a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z"></path>
    </svg>
  </a>
</div>

      </section>
      
    );
  }
  