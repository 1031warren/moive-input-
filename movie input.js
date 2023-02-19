var arrMovie = []; 

for (var i=0; i<4; i++ ){
    arrMovie.push(prompt("Enter a movie: ",""));

}

arrMovie.sort(); 

for(var i=0; i<arrMovie.length; i++){
    document.getElementById("test").innerHTML += arrMovie[i] + "<BR>";
  
} 

function clearList(){ document.getElementById("test").innerHTML = "";   
}

