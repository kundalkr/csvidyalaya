import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <section>
      <div className="container" style={{backgroundColor:"#FFD1DC"}}>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
          <div className="col mb-3">
            <p className="text-muted">
              © 2025 <span className="navbar-bran">csvidyalaya.com</span>
            </p>
            <p>
              Here student can practice university core subject question like
              OS, DSA , any programming language
            </p>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">HOME</li>
              <li className="nav-item mb-2">
                <a
                  href="/index.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/anotherpage/FAQs.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/sitemap.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Sitemap
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/About-us.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/privacy-policy.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Privacy policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/contact-us.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">DBMS</li>
              <li className="nav-item mb-2">
                <a
                  href="/DBMS/dbms_topic.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  DBMS topic
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DBMS/how_we_install_mysql_2025.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  how to install mysql
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DBMS/DBMS_topics/Relational_algebra_topics.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Relational Algebra Topics
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DBMS/DBMS_topics/relational_calculus_topic.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Relational Calculus question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="DBMS/DBMS_topics/relational_algebra/relational_algebra_question.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Relational Algebra Question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="DBMS/DBMS_topics/relational_algebra/relational_algebra_question.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Tuple relational calculus question
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">
                Previous Year Question(PYQs)
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/previous_year_question(PYQ)/PYQ.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="computer science previous year question"
                >
                  CS (Previous Year Question)
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/previous_year_question(PYQ)/OS_question.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="operating system question"
                >
                  OS PYQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/previous_year_question(PYQ)/software_engineering.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="all types of software engineering question"
                >
                  software engineering question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/WSN/wireless_sensor_network.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="question related to wireless sensor network"
                >
                  Wireless sensor networks (WSN)
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">Operating System </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/operating-System-Topics.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Operating System Topic
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/Scheduling-Alorithms-topic.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Cpu Scheduling algorithm questions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/first-come-first-serve.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  First Come First Serve (FCFS) Scheduling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/shortest-job-first.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Shortest Job First (SJF) Scheduling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Shortest Remaining Time First (Preemptive SJF or SRTF)
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/priority-scheduling.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Priority Scheduling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Preemptive Priority Scheduling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/round-robin.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Round Robin Scheduling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Multilevel Feedback Queue Scheduling (MLFQ)
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Multilevel Queue (MLQ) Scheduling
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">What Is</li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/what-is/operating-system.html#osystem"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="what is operating system"
                >
                  Operating System
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/what-is/operating-system.html#how_os_work"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="how operating system work"
                >
                  how OS work
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/what-is/operating-system.html#process_management"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="what is process management"
                >
                  Process Management
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/what-is/operating-system.html#future_of_os"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  title="what are future of operating system ?"
                >
                  Future Of Os
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">Deadlock</li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/Deadlocks/deadlock-topics.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Deadlock All Topic
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/Deadlocks/Bankers-Algorithms.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Banker's Algorithm
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">Memory Management </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/memory-management/memory-management-topics.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  memory management topics
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/memory-management/Fit-algorithms.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  fit algorithms
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/memory-management/Buddy-system.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Buddy System
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Operating-system/memory-management/page-replacement-algorithms.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Page replacement Algorithms
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">DSA QUESTION</li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/Arrays.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Arrays
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/infixtopostfix.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Infix And Postfix Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/infixtoprefix.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Infix To Prefix Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/stack2.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Infix And Prefix Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/postfixprefixofinfix.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Infix To Postfix and Prefix Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/prefixtopostfix.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Prefix And Postfix Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/linkedlist1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Linkedlist Question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/queue1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Queue Question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/DSA/stack1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  stack Question
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">
                Digital Fundamentals Questions
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Dgital_funda_topic.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Digital Fundamentals Question
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Boolean Algebra Question
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">Number System Questions</li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Number_System/decimaltobinary.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Decimal And Binary Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Number_System/decimaltohexadecimal1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Decimal And Hexadecimal Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Number_System/decimaltoOctal1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Decimal And Octal Conversion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Digital_Fundamentals/Number_System/octaltohexadecimal1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Octal And Hexadecimal Conversion
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" id="foot">
            <ul className="nav flex-column">
              <li className="nav-item mb-2 fw-bolder text-primary">CUSB assignment template</li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/colourfull-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB colourfull template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/corner-border-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB corner border template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/old-style-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB old style Template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/different-side-flower-4.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB Different side flower teplate
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/corner-border-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB corner border template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/right-bottom-flower-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB right bottom template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/corner-flower.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB corner flower template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/first-template.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB first template
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/flower-background.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB flower background
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/flower-in-bottom-1.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB flower in bottom
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/TOOLS/Assignment-templates/side-flower-2.html"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  CUSB side flower template
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
