const cardImage1 = document.getElementById("card-image-1");
const cardImage2 = document.getElementById("card-image-2");
const modal1 = document.getElementById("image-modal-1");
const modal2 = document.getElementById("image-modal-2");
const modalImage1 = document.getElementById("modal-image-1");
const modalImage2 = document.getElementById("modal-image-2");
const closeModal1 = document.getElementById("close-modal-1");
const closeModal2 = document.getElementById("close-modal-2");

cardImage1.addEventListener("click", () => {
    modal1.style.display = "block";
    modalImage1.src = cardImage1.src;
});

cardImage2.addEventListener("click", () => {
    modal2.style.display = "block";
    modalImage2.src = cardImage2.src;
});

closeModal1.addEventListener("click", () => {
    modal1.style.display = "none";
});

closeModal2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});
