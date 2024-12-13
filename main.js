function open_present(present_index) {
    const contents = document.querySelectorAll(".content");
    if (contents[present_index]) {
        contents[present_index].style.display = "block";
    }
    const gifts = document.querySelectorAll(".gift");
    const gift = gifts[present_index];
    const img = gift.querySelector("img");
    gift.classList.add("opened");
    gift.classList.remove("closed");
    img.src = 'present_opened.png';
    img.style.width = '100px';
    img.style.height = '120px';
}

document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        content.style.display = "none";
    });
});
