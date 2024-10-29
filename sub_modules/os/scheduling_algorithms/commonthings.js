
const fcfs = document.createElement("div");
fcfs.style.border = "1px solid red";
fcfs.style.padding = "0px 12px";

fcfs.innerHTML = `

    <h2>What Is FCFS Scheduling Algorithm in Operating System ?</h2>
    <p>FCFS (First Come First Serve) is one of the simplest scheduling algorithms in operating systems. It schedules processes based on their arrival time. The process that arrives first gets executed first, and others wait in a queue.</p>

    <h2>Method to Solve FCFS Scheduling Algorithm</h2>
    <ul>
        <li>Step 1: List all the processes and their arrival times in the order they arrive.</li>
        <li>Step 2: Assign CPU to the process that arrives first and continue until it completes execution.</li>
        <li>Step 3: After completion, check if the next process is ready to execute.</li>
        <li>Step 4: Repeat the process for all other processes in the queue based on arrival time.</li>
        <li>Step 5: Calculate the waiting time for each process as:
            <ul>
                <li>Waiting Time (WT) = Turn Around Time (TAT) - Burst Time (BT)</li>
            </ul>
        </li>
        <li>Step 6: Calculate the turnaround time for each process as:
            <ul>
                <li> Turn Around Time (TAT) = Completion Time (CT) - Arrival Time (AT)</li>
            </ul>
        </li>
        <li>Step 7: Sum up the total waiting time and turnaround time for performance evaluation.</li>
    </ul>

    <h2>Advantages and Disadvantages of FCFS Scheduling</h2>
     <table border="1" class="table table-bordered">
        <tr>
            <th>Advantages</th>
            <th>Disadvantages</th>
        </tr>
        <tr>
            <td>Simple and easy to implement.</td>
            <td>Long waiting times for processes with long burst times (convoy effect).</td>
        </tr>
        <tr>
            <td>No starvation, as every process gets a turn.</td>
            <td>Poor response time for time-critical processes.</td>
        </tr>
        <tr>
            <td>Fair for long-running processes.</td>
            <td>Not optimal for a multi-user or real-time system.</td>
        </tr>
    </table>
`;
var appd = document.getElementById("samethings");
appd.appendChild(fcfs);
