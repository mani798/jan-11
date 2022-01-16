var n = prompt("Enter a Number");
n = parseInt(n);
var x = " ";
for(var i=0 ; i<=n; i++){
    for(var j=1 ; j<=i; j++){
        x+="*";
    }
    x+="<br>";
}
document.write(x);