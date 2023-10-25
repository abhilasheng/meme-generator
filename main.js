const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (imgurl, title, author) => {
    memeImage.setAttribute("src",imgurl);
    memeTitle.innerHTML = `title: ${title}`;
    memeAuthor.innerHTML = `meme by: ${author}`;
    
};

//call api in generate meme function
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()) //convert response to json
    .then((data) => {
        updateDetails(data.url,data.title,data.author)
    }); //pull img, title, author from json
};

generateMemeBtn.addEventListener('click',generateMeme);

generateMeme();
