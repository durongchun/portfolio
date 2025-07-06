import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";
import emailjs from "emailjs-com";

function PageEmail() {
  useEffect(() => {
    document.title = `${appTitle} - Email`;
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9qh6mb9",
        "template_qbuu0ea",
        e.target,
        "BkixjSpZH3z8-od7x"
      )
      .then(
        () => {
          alert("Message sent!");
        },
        () => {
          alert("Failed to send message.");
        }
      );
    e.target.reset();
  };

  return (
    <main>
      <section className="contact">
        <h2>Contact.</h2>
        <p>
          Get in touch or shoot me an email directly at{" "}
          <a href="mailto:durongchun@hotmail.com" className="email">
            durongchun@hotmail.com
          </a>
        </p>
        <form onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              className="form-control"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default PageEmail;
