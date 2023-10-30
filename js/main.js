
closeBoxUpdate = () => {
    const modalBoxes = document.getElementsByClassName("modal_box")
    if(modalBoxes.length > 0){
        modalBoxes[0].style.display = "none"
    }
}   


// update ảnh bìa + nền

updateMainImage =() => {
    const fileInput = document.getElementById("fileMainInput");
    fileInput.click();
    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                displayMainImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    })
}


