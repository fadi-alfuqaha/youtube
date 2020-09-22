const thumbnail = function (src) {
    const div = document.createElement("div");
    div.setAttribute("class", "thumbnail");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    div.appendChild(img);
    return div;
}

const info = function (textHead, textp) {
    const div = document.createElement("div");
    div.setAttribute("class", "info");
    const head = document.createElement("h3");
    textHeader = document.createTextNode(textHead)
    head.appendChild(textHeader);
    div.appendChild(head);
    const paragraph = document.createElement("p");
    textParagraph = document.createTextNode(textp);
    paragraph.appendChild(textParagraph);
    div.appendChild(paragraph);
    return div;
}

const videoItem = function (obj) {
    rightDiv = document.querySelector(".rightSide");
    const div = document.createElement("div");
    div.setAttribute("class", "selectedVedio");
    div.setAttribute("id", obj.id);
    div.setAttribute("title", obj.title);
    div.appendChild(thumbnail(obj.thumbnail));
    div.appendChild(info(obj.title, obj.title));
    rightDiv.appendChild(div);
}



videos.forEach(element => {
    videoItem(element);
});


videoShow = document.getElementsByTagName("iframe");
videoShow[0].setAttribute("src", "https://www.youtube.com/embed/rS6cvjFXg9s");
titleDiv = document.querySelector(".rightSide .description");
titleDiv.innerText = "Cute kitten named Garfield washes its paws and prepares to sleep.";
channelDiv = document.querySelector(".title div h4");
channelDiv.innerText = "Cute kitten named Garfield washes its paws and prepares to sleep."

const selectedItems = document.querySelectorAll(".selectedVedio");
selectedItems.forEach((element, index) => {

    element.addEventListener("click", function () {
        videoShow = document.getElementsByTagName("iframe");
        videoShow[0].setAttribute("src", "https://www.youtube.com/embed/" + this.id);
        titleDiv = document.querySelector(".rightSide .description");
        titleDiv.innerText = this.title;
        channelDiv = document.querySelector(".title div h4");
        channelDiv.innerText = this.title;
        console.log(this.id);
        showHide(this.id)
    });


});

const showHide = function (id) {
    const items = document.querySelectorAll(".selectedVedio");
    items.forEach(element => {
        console.log(element.id)
        if (element.id === id) {
            element.style.display = "none";
        }
        else {
            element.style.display = "flex";
        }
    });

}




