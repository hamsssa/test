function maFunction() {
    var val = document.getElementById('colors').value; 
    var div = document.getElementById('test1'); 
    div.style.color = val; 
}

document.getElementById('colors').addEventListener('change', maFunction); 
