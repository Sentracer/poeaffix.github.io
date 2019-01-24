// JavaScript Document
console.log("loading closemodal.js");
function modalClose() {
        location.hash = 'id';
}
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});
document.addEventListener('click', function(e){
    modalClose();
});
var setupModal = document.querySelectorAll("[id^='#openModal']").forEach(x =>
    {
        if (x == null) throw "bad href?"
        x.addEventListener('click',_ => modalClose());
        if (x.children == null) throw "bad children"
        if (x.children[0] == null){
            console.error("href had no children",x);
        } else{
            x.children[0].addEventListener('click', function(e) {
                e.stopPropagation();
            }, false);
        }
    });
