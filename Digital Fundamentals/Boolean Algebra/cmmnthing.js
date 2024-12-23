const repetetive = document.createElement("div");
repetetive.style.border="1px solid red";
repetetive.style.padding="0px 12px"

repetetive.innerHTML = `
    <h2>Methods to Solve Boolean Algebra</h2>
    
    <h3>1. Truth Tables</h3>
    <p>
        A truth table shows all possible input combinations and their corresponding output for a Boolean expression.
        <ol>
            <li>List all possible values of inputs.</li>
            <li>Calculate the output for each combination.</li>
            <li>The final column represents the result of the Boolean expression.</li>
        </ol>
    </p>

    <h3>2. Boolean Laws</h3>
    <p>
        Use the Boolean algebra laws to simplify the expressions:
        <ul>
            <li><b>Commutative Law</b>: A + B = B + A, AB = BA</li>
            <li><b>Associative Law</b>: (A + B) + C = A + (B + C)</li>
            <li><b>Distributive Law</b>: A(B + C) = AB + AC</li>
            <li><b>Identity Law</b>: A + 0 = A, A1 = A</li>
            <li><b>Negation Law</b>: A + A' = 1, AA' = 0</li>
        </ul>
    </p>

    <h3>3. Karnaugh Maps (K-Maps)</h3>
    <p>
        A K-map provides a visual method to simplify Boolean expressions:
        <ol>
            <li>Draw a K-map with cells representing all possible input combinations.</li>
            <li>Fill in the cells with the output values from the truth table.</li>
            <li>Group the adjacent cells that contain 1s.</li>
            <li>Write the simplified expression based on the groups.</li>
        </ol>
    </p>

    <h3>4. Algebraic Manipulation</h3>
    <p>
        You can simplify Boolean expressions by applying algebraic manipulation:
        <ol>
            <li>Start with the original expression.</li>
            <li>Use the laws of Boolean algebra to combine and reduce terms.</li>
            <li>Continue simplifying until no further reductions are possible.</li>
        </ol>
    </p>

    <h3>5. Quine-McCluskey Method</h3>
    <p>
        A tabular method used for minimization of Boolean functions:
        <ol>
            <li>List all minterms in binary format.</li>
            <li>Group them based on the number of 1s.</li>
            <li>Combine terms with a difference of one bit, reducing them.</li>
            <li>Continue until no more combinations are possible.</li>
            <li>Select the essential prime implicants to cover all minterms.</li>
        </ol>
    </p>
`;
var appd=document.getElementById("samethings");
appd.appendChild(repetetive);
