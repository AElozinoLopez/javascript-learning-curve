let myImage = document.querySelector ('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/elitebook.jpg'); {
        myImage.SetAttribute ('src', 'images/second-elitebook.png');
    } else {
        myImage.setAttribute ('src', 'images/elitebook.jpg');
    }
}