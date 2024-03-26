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


/// Function to open modal
function openModal(modal) {
  modal.style.display = "block";
}

// Function to close modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Get the "View Certificate" modal and button
var certificateModal = document.getElementById("myModal");
var certificateBtn = document.getElementById("viewCertificate");
var certificateSpan = certificateModal.getElementsByClassName("close")[0];

// Get the "View Internship Certificate" modal, button, and close button
var internshipModal = document.getElementById("InternModal");
var internshipBtn = document.getElementById("viewInternCertificate");
var internshipSpan = internshipModal.getElementsByClassName("close")[0];

// Event listeners for opening modals
certificateBtn.onclick = function() {
  openModal(certificateModal);
}

internshipBtn.onclick = function() {
  openModal(internshipModal);
}

// Event listeners for closing modals
certificateSpan.onclick = function() {
  closeModal(certificateModal);
}

internshipSpan.onclick = function() {
  closeModal(internshipModal);
}

// Event listener for closing modals when clicking outside of them
window.onclick = function(event) {
  if (event.target == certificateModal) {
    closeModal(certificateModal);
  }
  if (event.target == internshipModal) {
    closeModal(internshipModal);
  }
}

