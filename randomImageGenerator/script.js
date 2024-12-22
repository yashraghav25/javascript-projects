import { createApi } from "https://cdn.jsdelivr.net/npm/unsplash-js@7.0.19/+esm";

const unsplash = createApi({
  accessKey:API_KEY,
});
const body = document.body;
const htwo = document.querySelector("h2");
const input = document.getElementById("search");
const btn = document.getElementById("btn");
const tryAgain = document.getElementById("try-again");
const photosContainer = document.getElementById("photos");
tryAgain.hidden = true;

btn.addEventListener("click", async () => {
  input.hidden = true;
  btn.hidden = true;
  tryAgain.hidden = false;
  tryAgain.textContent = "Search Again";
  try {
    const query = input.value.trim();
    if (query === "") {
      body.style.backgroundColor = "#ba4343";
      htwo.textContent = "Please enter a search query";
      console.error("Please enter a search query.");
      return;
    }

    const response = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: 18,
    });
    const photos = response.response.results;
    photosContainer.innerHTML = ``;
    if (photos.length === 0) {
      body.style.backgroundColor = "#ba4343";
      htwo.textContent = "No results found. Please enter a valid search query.";
      return;
    }

    body.style.backgroundColor = "#52d149";
    photos.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.urls.regular;
      img.style.width = "10vw";
      img.style.height = "20vh";
      photosContainer.appendChild(img);
    });
  } catch (error) {
    body.style.backgroundColor = "#ba4343";
    htwo.textContent = "Error occurred while fetching photos.";
    console.error("Error fetching photos:", error);
  }
});

tryAgain.addEventListener("click", asyncRestart);

async function asyncRestart() {
  btn.hidden = false;
  input.hidden = false;
  tryAgain.hidden = true;
  photosContainer.innerHTML = ``; // Clear images
  htwo.textContent = "Image generator"; // Clear the message
  body.style.backgroundColor = "#232121"; // Reset background color
}
