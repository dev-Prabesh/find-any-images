const input = document.querySelector(".inputfield");
const button = document.querySelector(".search-btn");
const showMore = document.querySelector(".show-more");
const dataContents = document.querySelector(".data-contents");

const id = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

let count = 1;

function fetchData(page) {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${input.value}&client_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
        let result = data.results;
        for(let i = 0; i < result.length; i++){
            let content = document.createElement("div");
            content.classList.add("content");
            content.innerHTML = `
                <img src="${result[i].urls.regular}" alt="img">
                <a target="blank" href="${result[i].links.html}">${result[i].alt_description}</a>
            `;
            dataContents.append(content);
        }
    });
    showMore.style.display = "block";
}

button.addEventListener("click", () => {
    dataContents.innerHTML = "";
    count = 1; // Reset the page count when a new search is initiated
    fetchData(count);
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        dataContents.innerHTML = "";
        count = 1; // Reset the page count when a new search is initiated
        fetchData(count);
    }
});

showMore.addEventListener("click", () => {
    count++;
    fetchData(count);
});
