const text = [
    `eu su u milior si naum pensarmos assim, u ser umano, si vuce naum pensar ki na sua profissaum vuze é u milior.`,
    `si eli não pensar ki na sua profissau é o milior camrame si eli naum pensa ki é u melhor representante da naiqu naum temus ambissaum.`,
    `eu su u milior, u melhor representante da naiqu, si vuce naum pensar assimo u ser umano naum tems ambissaum.`,
    `fuuuuuuuuuuuuuuuuuuuuu, eu su i milior`,
    `possu num ser mas niminha cabessa, eu su u milior`,
    `si eli não pensar ki na sua profissau é o milior camrame si eli naum pensa ki é u melhor representante da naiqu naum temus ambissaum.`, `si naum pensarmos assim, u ser umano, si vuce naum pensar ki na sua profissaum vuze é u milior.`,
    `eu su u milior, u melhor representante da naiqu, si vuce naum pensar assimo u ser umano naum tems ambissaum.`,
    `eu su u portuguis, es piquenu, es u milor`,
    `eu su u fuuuuuuuuuuuuuuuuuuuuu, eu su i milior ipsum dolor`,
    `si eli não pensar ki na sua profissau é o milior camrame si eli naum pensa ki é u melhor representante da naiqu naum temus ambissaum.`, `si naum pensarmos assim, u ser umano, si vuce naum pensar ki na sua profissaum vuze é u milior.`,
    `eu su u milior ipsum dolor si naum pensarmos assim, u ser umano, si vuce naum pensar ki na sua profissaum vuze é u milior.`,
    `si eli não pensar ki na sua profissau é o milior camrame si eli naum pensa ki é u melhor representante da naiqu naum temus ambissaum.`,
    `eu su u milior, u melhor representante da naiqu, si vuce naum pensar assimo u ser umano naum tems ambissaum.`,
    `fuuuuuuuuuuuuuuuuuuuuu, eu su i milior`
];

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
    const value = e.target.value;
    numofpara.value = value;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(numofpara.value);

    let array2 = [];
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * text.length);
        array2.push(text[randomIndex]);
    }
    let tempText = array2.slice(0, value);

    tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
});

numofpara.addEventListener("input", syncParaNumbers);