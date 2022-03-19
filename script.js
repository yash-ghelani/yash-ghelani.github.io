function flipImage(image) {
    var id = image.id
    var Image_Id = document.getElementById(id);
    if (Image_Id.src.match(id+".jpg")) {
        Image_Id.src = "images/back.jpg";
    }
    else {
        Image_Id.src = "images/"+id+".jpg";
    }
}     