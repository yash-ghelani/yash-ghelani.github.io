// $(document).ready(function(){
//     $("#myModal").modal('show');
// });

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

function chooseChar(){
    var files = ['al', 'amy', 'ben', 'carmen', 'daniel', 'david', 'emma', 'eric', 'farah', 'gabe', 'joe', 'jordan', 'katie', 'laura', 'leo', 'lily', 'liz', 'mia', 'mike', 'nick', 'olivia', 'rachel', 'sam', 'sofia'];
    var image = files[Math.floor(Math.random()*files.length)];
    var character = document.getElementById('character');
    character.src = "images/"+image+".jpg";
}