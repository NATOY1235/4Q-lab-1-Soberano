const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData() {
    let student = PARAMS.get("student");
    document.getElementById("greetings").innerText=`Hello, ${student}!`;

    let socks = PARAMS.get("socks");
    document.getElementById("socks").innertext =`how many socks do you want ${socks}`;

    let ball = PARAMS.get("ball");
    document.getElementById("ball").innertext =`how many balls do you want ${ball}`;
}