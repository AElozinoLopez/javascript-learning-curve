let myImage = document.querySelector ('img');

myImage . onclick = function () {
    let mySrc = myImage . getAttribute('src');
    if(mySrc === 'images/elitebook.jpg'); {
        myImage . SetAttribute ('src', 'images/elitebook2.jpg');
    } else {
        myImage . setAttribute ('src', 'images/elitebook.jpg');
    }
}