let simpsonFav= prompt("Ingresa tu Simpson favorito");

if(simpsonFav==""){
    let simpsonFav= prompt("Dale, ingresa tu Simpson favorito")
}else if(simpsonFav == "Homero") {
    alert("Obvio, es el mejor");
}else if (simpsonFav == "Bart") {
    alert("Si, es copado...")
}else if (simpsonFav == "Lisa") {
    alert("Enserio? No te juzgo pero es aburrida")
}else if(simpsonFav == "Maggie") {
    alert("Dale, dejate de joder, elegí otro")
}else if(simpsonFav == "Marge") {
    alert("wtf, chau no juego más")
}
else {
    alert("Aguante Homero, careta, ERROR");
}



