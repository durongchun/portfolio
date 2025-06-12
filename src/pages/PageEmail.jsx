// Page Not Found

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";

function PageEmail() {
  useEffect(() => {
    document.title = `${appTitle} - Page Not Found`;
  }, []);

  return (
    <main>
      <section className="contact">
        <h2>Contact.</h2>
        <p>
          Get in touch or shoot me an email directly on durongchun@hotmail.com
        </p>
        <form action="">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Name"
              aria-required="true"
              required=""
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Email"
              aria-required="true"
              required=""
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="5"
              class="form-control"
              placeholder="Message"
              aria-required="true"
              required=""
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

export default PageEmail;
