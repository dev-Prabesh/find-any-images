const input = document.querySelector(".inputfield")
const button = document.querySelector(".search-btn")
const showMore = document.querySelector(".show-more")
const dataContents = document.querySelector(".data-contents")
const content = document.querySelector(".content")

const id = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw"

function fetchData() {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
        let result = data.results
        for(let i = 0; i < result.length; i++){
        let content = document.createElement("div")
        content.classList.add("content")
        content.innerHTML = `
              <img src="${result[i].urls.regular}" alt="img">
              <a target="blank" href="${result[i].links.html}">${result[i].alt_description}</a>
        `
        dataContents.append(content)
        }
    })
    showMore.style.display = "block"
}

button.addEventListener("click", () => {
    dataContents.innerHTML = " ";
    fetchData();
})

let count = 1;
showMore.addEventListener("click", () => {
    count++;
    fetchData();
})







































// const url = 'https://your-api-endpoint.rapidapi.com';

// const options = {
//     method: 'GET', // or POST, PUT, DELETE based on the API requirement
//     headers: {
//         'X-RapidAPI-Key': 'be791fa77emshc51babf88499d5ap176175jsnb5776b8f77cf',
//         'X-RapidAPI-Host': 'your-api-host.rapidapi.com' // Check the host in documentation
//     }
// };

// fetch(`https://your-api-endpoint.rapidapi.com`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
