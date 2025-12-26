import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import LinkList from "./src/components/linkedlist";
import { newlyAdded, upcoming } from "./js/src/index.min";

const Mainpage = () => {
  return (
    <>
      <Header />
      <br />
      <div id="headinger">
        <h1>CSvidyalaya.com</h1>
        <div>Computer Science Vidyalaya</div>
      </div>
      <div className="container">
        <div className="all-cards">
          <div className="card bg-primary-subtle" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Operating System</h5>
              <p className="card-text">
                Definition, functions, Process scheduling algorithms, file
                system, disk system, I/O system, Definition and functions and
                many more related question available
              </p>
              <a
                // href="/Operating-system/operating-System-Topics.html"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "/Operating-system/operating-System-Topics.html";
                }}
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-warning" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">DSA</h5>
              <p className="card-text">
                You can practice here Array question, stack, linkedlist, Queue
                and all other data structure question .....
              </p>
              <a href="DSA/dsa-topic.html" className="btn btn-success">
                practice here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-secondary-subtle" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Digital Fundamentals</h5>
              <p className="card-text">
                Question related to Number Systems and Conversion, complements,
                Computer Arithmetic, Logic Gates, Boolean Algebra and all others
                ......
              </p>
              <a
                href="/Digital_Fundamentals/Dgital_funda_topic.html"
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-info" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Software Engineering</h5>
              <p className="card-text">
                you can practice here software engineering related questions.
              </p>
              <a
                href="/Software-Engineering/software-engineering-topic.html"
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="all-cards">
          <div className="card bg-success-subtle" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Wireless Sensor Network (WSN)</h5>
              <p className="card-text">
                you can find here previous year question of Wireless Sensor
                Network.
              </p>
              <a
                href="/WSN/wireless_sensor_network.html"
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-danger-subtle" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Database Management System (DBMS)</h5>
              <p className="card-text">
                you can find here Database Management System (DBMS) question +
                theory
              </p>
              <a href="/DBMS/dbms_topic.html" className="btn btn-success">
                click here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-danger" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Previous Year Question (PYQ)</h5>
              <p className="card-text">
                you can find here previous year question of computer science.
              </p>
              <a
                href="/previous_year_question(PYQ)/PYQ.html"
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
          <div className="card bg-warning-subtle" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Previous Year Question (PYQ)</h5>
              <p className="card-text">
                you can find here previous year question of computer science.
              </p>
              <a
                href="/previous_year_question(PYQ)/PYQ.html"
                className="btn btn-success"
              >
                practice here -&gt;
              </a>
            </div>
          </div>
          <div
            className="card bg-warning-subtle mt-3"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">CUSB university assignment tools</h5>
              <p className="card-text">you create assignment first page</p>
              <a
                href="/TOOLS/Assignment-templates/CUSB-assignment-template.html"
                className="btn btn-success"
              >
                click here -&gt;
              </a>
            </div>
          </div>
        </div>
        <div id="al_card">
          <div className="container">
            <div id="al_card" className="d-flex gap-3">
              <LinkList title="Newly Added" links={newlyAdded.all_links} />

              <LinkList title="Upcoming" links={upcoming.all_links} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Mainpage;
