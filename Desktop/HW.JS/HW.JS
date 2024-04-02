
var age = 125;
if ( age % 10 == 2 || age % 10 == 3 || age % 10 == 4 || age == 2 || age == 3 || age == 4) {
    console.log ( "Роки")
}
else if ( age % 10 == 1 || age % 1 == 1) {
    console.log ( "Рік" )
}
else if ( age % 10 == 5 || age % 10 == 6 || age % 10 == 7 || age % 10 == 8 || age % 10 == 9 ) {
    console.log ( "Років" )
}
else if ( age <= 0 ) {
    console.log ( "Невалідний вік" )
}