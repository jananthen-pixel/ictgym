function toggleMenu() {
    var menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
}

function openModal(title, description) {
    var modal = document.getElementById("detailModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");
    var mainContent = document.getElementById("mainContent");


    modalTitle.innerText = title;
    modalDesc.innerText = description;

   
    modal.style.display = "block";
    
    
    mainContent.classList.add("blur-bg");
}
function closeModal() {
    var modal = document.getElementById("detailModal");
    var mainContent = document.getElementById("mainContent");

    
    modal.style.display = "none";
    
   
    mainContent.classList.remove("blur-bg");
}