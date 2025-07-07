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
          <p> Heymate - BCIT Industry Client Project (Co-op)</p>
          <p>
            . Led a team of 3 students through the full SDLC—from requirement
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
            resolving issues and verifying data flow across components.
          </p>
          <p>
            . Managed version control using Bitbucket, handling branch strategy,
            code reviews, merges.
          </p>
        </div>
        <div className="timeline-item">
          <p>Movie - BCIT Internal Project</p>
          <p>
            . Developed and deployed a full-stack movie web application using
            React.js for the frontend and Node.js/Express.js for the backend.
          </p>
          <p>
            . Implemented dynamic movie filtering features, including: Popular,
            Top Rated, Now Playing, Upcoming.. and Filter by Year
          </p>
          <p>
            . Enabled users to add movies to Favorites and Watch Later lists,
            with persistent data storage using DynamoDB.
          </p>
          <p>
            . Deployed the app using AWS Elastic Beanstalk, integrated with EC2
            instances, and managed media storage with S3.
          </p>
          <p>
            . Styled the frontend with Sass, ensuring a clean, responsive, and
            engaging UI.
          </p>
        </div>
        <div className="timeline-item">
          <p>PeakMotion - BCIT Internal Project</p>
          <p>
            . Developed a full-featured e-commerce website for selling
            sportswear using ASP.NET Core MVC for the backend, and Bootstrap
            with custom CSS for a responsive and modern frontend design.
          </p>
          <p>
            . Designed system flow through detailed use case diagrams and Entity
            Relationship Diagram (ERD).
          </p>
          <p>
            . Implemented essential user features: Product display, checkout,
            place order, and payment pages.....
          </p>
          <p>
            . Developed admin functionality to edit product details, including
            name, description, images, categories, colors, and sizes.
          </p>
          <p>
            . Integrated SendGrid for automated email notifications (e.g., order
            confirmation, welcome emails).
          </p>
          <p>. Implemented PayPal for secure online payment processing.</p>
        </div>

        <div className="timeline-item">
          <p>Foggix - Real-time Elevator Monitoring Platform</p>
          <p>
            . Reporting to Project Manager, accountable for code development for
            supporting the operation of over 200 elevators to ensure efficient
            and reliable vertical transportation.
          </p>
          <p>
            . Developed and maintained a full-stack elevator monitoring platform
            to enhance operational efficiency, using Vue.js for the front end,
            PostgreSQL for data storage, and Node.js for backend services,
            delivering a scalable, real-time monitoring solution.
          </p>
          <p>
            . Built an automated fault detection and work order system, reducing
            maintenance response time.
          </p>
          <p>
            . Integrated real-time alerting via Message Queuing (MQ) to automate
            issue resolution workflows.
          </p>
        </div>
        <div className="timeline-item">
          <p>Holinova - System Integration and Automation Testing</p>
          <p>
            . Reporting to Project Manager, worked on integrating Odoo CRM and
            Inventory with the Holinova system to ensure smooth data syncing and
            system reliability.
          </p>
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
