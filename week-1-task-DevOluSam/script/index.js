let fetchedData = null;

function fetchData(index) {
  if (fetchedData) {
    displayData(index);
  } else {
    fetch("https://swapi.dev/api/people")
      .then(response => response.json())
      .then(data => {
        fetchedData = data.results;
        displayData(index);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

function displayData(index) {
  const peopleContainer = document.getElementById(`people-container${index}`);
  const heightContainer = document.getElementById(`height-container${index}`);
  const genderContainer = document.getElementById(`gender-container${index}`);
  peopleContainer.innerHTML = `Name: ${fetchedData[index].name}`;
  heightContainer.innerHTML = `Height: ${fetchedData[index].height}`;
  genderContainer.innerHTML = `Gender: ${fetchedData[index].gender}`;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    fetchData(index);
  });
});







// function main() {}

// module.exports = { main }
