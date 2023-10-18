let mangas;

async function fetchAndLogJson(url) {
    const response = await fetch(url);
    mangas = await response.json();
    console.log(mangas);
    return mangas;
}

fetchAndLogJson("https://raw.githubusercontent.com/Niivas/Niivas/main/assets/Mangas.json")
    .then(mangas => {
        console.log(mangas);
    })
    .catch(error => {
        console.error(error);
    });