function calculatelove() {
  const name1 = document.getElementById("Name1").value.trim();
  const name2 = document.getElementById("Name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2}'s LovePercentage: ${lovePercentage} `;

    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a great match. Keep loving!";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML += "<br>There is potential.Give it Try!";
    } else {
      result.innerHTML += "<br>Great match.Love is high!";
    }
  }
}
