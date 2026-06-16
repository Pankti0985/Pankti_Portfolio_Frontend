import { useState } from "react";
import "./styles/Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "shahpankti985@gmail.com",
    href: "mailto:shahpankti985@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/panktishah",
    href: "https://github.com",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/panktishah",
    href: "https://linkedin.com",
    icon: "⬡",
  },
  {
    label: "Phone",
    value: "+91 83201 44714",
    href: "tel:+918320144714",
    icon: "◎",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <section className="contact">
      <div className="contact__header">
        <p className="contact__eyebrow">Let's talk</p>
        <h2 className="contact__heading">Get in Touch</h2>
        <p className="contact__subtext">
          I'm open to full-time roles, freelance projects, and interesting
          collaborations. Reach out through any channel below or drop a message
          directly.
        </p>
      </div>

      <div className="contact__body">
        {/* ── Links ── */}
        <div className="contact__links">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="contact__link-card"
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className="contact__link-icon" aria-hidden="true">
                {c.icon}
              </span>
              <div>
                <p className="contact__link-label">{c.label}</p>
                <p className="contact__link-value">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Form ── */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <p className="contact__success-title">Message sent!</p>
              <p className="contact__success-sub">
                Thanks for reaching out — I'll reply within a day or two.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label className="contact__field-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__field-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__field-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="What would you like to discuss?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;