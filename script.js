
const click = document.querySelector('.clickedIcons');
const shareBtn = document.querySelector('.share');

shareBtn.addEventListener('click', ifClicked);

function ifClicked() {
    if(click.style.display === "none") {
        click.style.display = "grid";
    } else {
        click.style.display = "none";
    }
}






  

