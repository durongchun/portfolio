// Page Favs

import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";

function PageAbout() {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <main>
      <section className="about timeline">
        <h2>About Me.</h2>
        <div className="timeline-item">
          <p> Heymate - BCIT Industry Client Project</p>
          <p>
            Led a team of 3 students through the full SDLC—from requirement
            gathering to development, testing, and delivery.
          </p>
          <p>
            . Developed the shopping cart backend, implementing 12 RESTful API
            endpoints across three controllers: RetailStoreController,
            RetailCartController, and RetailProductController.
          </p>
          <p>
            . Designed and created two SQL Server tables: RetailCart and
            RetailCartItem, and implemented two stored procedures to handle core
            operations.
          </p>
          <p>
            . Applied the DTO pattern to ensure clean separation between data
            models and API contracts.
          </p>
          <p>
            . Collaborated with the frontend team during integration testing,
            resolving issues and verifying data flow across components. 
            Managed version control using Bitbucket, handling branch strategy,
            code reviews, merges.
          </p>
        </div>
        <div className="timeline-item">
          <p>Foggix - Real-time Elevator Monitoring Platform</p>
          <p>
            . Contributed to the development of a real-time elevator monitoring
            platform, enhancing system reliability and performance.
          </p>
          <p>
            . Developed the frontend using Vue.js, integrating with a PostgreSQL
            database and Node.js backend.
          </p>
          <p>
            . Implemented automated fault detection algorithms, improving
            maintenance efficiency by 30%.
          </p>
        </div>
        <div className="timeline-item">
          <p>Holinova - System Integration and Automation Testing</p>
          <p>
            . Worked on system integration for a large-scale software project,
            ensuring seamless communication between components.
          </p>
          <p>
            . Developed an automation testing framework using Python and
            Selenium, enhancing software reliability and reducing manual testing
            time by 40%.
          </p>
        </div>
      </section>
    </main>
  );
}

export default PageAbout;
