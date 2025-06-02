import {add_body} from "/js/src/utilities.min.js";

let modal2 = document.createElement("div");
modal2.innerHTML = `
     <div
      class="modal fade"
      id="wholepageModal"
      tabindex="-1"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">
              Try Our Different Subjects Questions
            </h1>
            <button
              type="button"
              id="btn_closeder"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-9">
                  <h2>Subjects Are :-</h2>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <a
                        href="/os/operating_System_Topics.html"
                          class="btn btn-primary"
                        role="button"
                        >Operating System</a
                      >
                    </div> 
                     <div class="col-4 col-sm-6">
                      <a
                        href="/dsa_in_c/dsa_in_c_topic.html"
                        class="btn btn-secondary"
                        role="button"
                        >Data Structure And Algorithms</a
                      >
                    </div>         
                    <br />     <br />
                    <div class="col-8 col-sm-6">
                     <a
                        href="/Digital_Fundamentals/Dgital_funda_topic.html"
                        class="btn btn-danger "
                        role="button"
                        >Digital Fundamentals</a
                      >
                    </div>
                    <div class="col-4 col-sm-6">
                    <a
                        href="/Software_Engineering/software_engineering_topic.html"
                        class="btn btn-success"
                        role="button"
                        >Software Engineering</a
                      >
                    </div>
                    <br /><br />
                    <div class="col-4 col-sm-6">
                        <a
                          href="/WSN/wireless_sensor_network.html"
                          class="btn btn-warning "
                          role="button"
                          >wireless sensor network(WSN)</a
                        >
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
add_body(modal2);

let modal_script2 = document.createElement("script");
modal_script2.innerHTML = ` 
          function openModal() {
              var wholepageModal = new bootstrap.Modal(document.getElementById('wholepageModal'));
              wholepageModal.show();
          }
              setTimeout(openModal, 15000);
              document.getElementById('btn_closeder').addEventListener('click',() => setTimeout(openModal, 12 * 60 * 1000));
     `;
add_body(modal_script2);
