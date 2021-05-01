function MostrarAlerta(){
    alert("Hizo Click!");
}

function HacerClick(){
    document.getElementById('box-input-submit').onclick = MostrarAlerta();
}
