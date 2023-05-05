const weeks = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

let monthPosition = 1;

// take values of the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const monthSelected = urlParams.get("monthSelected");
const yearSelected = urlParams.get("yearSelected");

let spanMonth = document.getElementById("month");
spanMonth.innerText = monthSelected;

let spanYear = document.getElementById("year");
spanYear.innerText = yearSelected;

function render(monthSelected, yearSelected) {
  let output = "";
  let active = "";
  const currentMonth = months[new Date().getMonth()];
  const currentYear = new Date().getFullYear();
  const currentDay = new Date().getDay();

  // select the position of month on the months vector
  for (let i = 0; i < 12; i++) {
    if (monthSelected === months[i]) {
      monthPosition = i;
      break;
    }
  }

  // add days of week
  for (let week of weeks) {
    output += `<div class="weekdays">${week}</div>`;
  }

  const daysInMonth = new Date(yearSelected, monthPosition, 0).getDate();
  const firstDayOfWeek = new Date(yearSelected, monthPosition - 1, 1).getDay();

  // Add blank cells for days before the first of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    output += `<div></div>`;
  }

  // Add cells for each day of the month
  for (let y = 1; y <= daysInMonth; y++) {
    if (yearSelected == currentYear && monthSelected == currentMonth) {
      active = y == currentDay ? "active" : "";
      //console.log(active)
    }
    else{
        active = "";
    }
    output += `<div class="day ${active}">${y}</div>`;
  }

  // Add blank cells for days after the last day of the month to complete the grid
  const numBlankCells = 42 - firstDayOfWeek - daysInMonth;
  for (let i = 0; i < numBlankCells; i++) {
    output += `<div></div>`;
  }

  let spanMonth = document.getElementById("month");
  spanMonth.innerText = monthSelected;

  let spanYear = document.getElementById("year");
  spanYear.innerText = yearSelected;
  return output;
}

app.querySelector("main").innerHTML = render(monthSelected, yearSelected);

function handlePreviewYear() {
  let year = document.getElementById("year");
  let month = document.getElementById("month");

  for (let i = 0; i < 12; i++) {
    if (month.innerText === months[i]) {
      monthPosition = i;
      break;
    }
  }

  if (months[monthPosition] === "Jan") {
    let previewYear = parseInt(year.innerText) - 1;
    year.innerText = previewYear;
    app.querySelector("main").innerHTML = render(months[11], previewYear);
    return;
  }

  app.querySelector("main").innerHTML = render(
    months[monthPosition - 1],
    year.innerText
  );
}

function handleNextYear() {
  let year = document.getElementById("year");
  let month = document.getElementById("month");

  for (let i = 0; i < 12; i++) {
    if (month.innerText === months[i]) {
      monthPosition = i;
      break;
    }
  }

  if (months[monthPosition] === "Dez") {
    let nextYear = parseInt(year.innerText) + 1;
    year.innerText = nextYear;
    app.querySelector("main").innerHTML = render(months[0], nextYear);
    return;
  }

  app.querySelector("main").innerHTML = render(
    months[monthPosition + 1],
    year.innerText
  );
}

