var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('change', function(myCheckBox) {
    if (this.checked) {
        myCheckBox.target.classList.toggle('checked');
    }
});
let checked = document.getElementsByClassName("highcheckbox");
let j;
for(j = 0;j<checked.length;j++){
    checked[i].onclick = function(){
        var div = this.parentElement;
        div.target.classList.toggle('checked');
    }
}
function newElement(){
    let item = document.createElement('li');
    let inputVal = document.getElementById("userInput").value;
    let temp = document.createTextNode(inputVal);
    let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.className = "highcheckbox"
    item.appendChild(checkbox);
    item.appendChild(temp);
    if(inputVal===''){
        alert("Write something!!!");
    }
    else{
        document.getElementById("myUL").appendChild(item);
    }
    document.getElementById("userInput").value="";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("🗑");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}