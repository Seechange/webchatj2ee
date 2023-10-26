closeBoxUpdate = () => {
    const modalBoxes = document.getElementsByClassName("modal_box")
    if(modalBoxes.length > 0){
        modalBoxes[0].style.display = "none"
    }
}   

openBoxUpdate = () => {
    const modalBoxes = document.getElementsByClassName("modal_box")
    if(modalBoxes.length > 0){
        modalBoxes[0].style.display = "flex"
    }
}
// update ảnh bìa + nền
updateImage = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                displayImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    })
}

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