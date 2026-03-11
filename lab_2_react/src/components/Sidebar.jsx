function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="star-container">
        <div className="star-icon">
          <img src="/star.svg" alt="Star" />
        </div>
      </div>

      <section className="section contacts">
        <h2 className="section-title">CONTACTS<span className="number">01</span></h2>
        <ul className="contact-list">
          <li><a href="mailto:viktoriia.zahoruiko@gmail.com">VIKTORIIA.ZAHORUIKO@GMAIL.COM</a></li>
          <li><a href="tel:+380989068937">+38 (098) 906 8937</a></li>
          <li><a href="https://t.me/zagoruika">TELEGRAM</a></li>
          <li><a href="https://www.linkedin.com/in/viktoriia-zahoruiko-723188323/">LINKEDIN</a></li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;