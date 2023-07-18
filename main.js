const parrafo = document.getElementById("contar");
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");
const btn4 = document.getElementById("b4");
const btn5 = document.getElementById("b5");
const btn6 = document.getElementById("b6");
const btn7 = document.getElementById("b7");
const btn8 = document.getElementById("b8");
const btn9 = document.getElementById("b9");
const btn10 = document.getElementById("b10");
let contador = 0;

    btn1.addEventListener("click", () => {
        if (contador==0 ){
            alert("Agregue la siguiente letra")
            document.getElementById("letras").innerHTML = "A";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==10){
            alert("Agregue el siguiente número")
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "1";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
        
    });
    
    btn2.addEventListener("click", () => {
        if (contador == 1){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "AB";
            contador++;
            parrafo.textContent = contador;
            
        }
        else if(contador==11){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "12";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    
    btn3.addEventListener("click", () => {
        if (contador == 2){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABC";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==12){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "123";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    
    btn4.addEventListener("click", () => {
        if (contador == 3){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCD";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==13){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "1234";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn5.addEventListener("click", () => {
        if (contador == 4){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDE";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==14){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "12345";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn6.addEventListener("click", () => {
        if (contador == 5){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDEF";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==15){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "123456";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn7.addEventListener("click", () => {
        if (contador == 6){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDEFG";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==16){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "1234567";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn8.addEventListener("click", () => {
        if (contador == 7){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDEFGH";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==17){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "12345678";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn9.addEventListener("click", () => {
        if (contador == 8){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDEFGHI";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==18){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "123456789";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });
    btn10.addEventListener("click", () => {
        if (contador == 9){
            alert("Agregue la siguiente letra");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            contador++;
            parrafo.textContent = contador;
        }
        else if(contador==19){
            alert("Agregue el siguiente número");
            document.getElementById("letras").innerHTML = "ABCDEFGHIJ";
            document.getElementById("numeros").innerHTML = "1234567890";
            contador++;
            parrafo.textContent = contador;
        }
        else{
            alert("Faltan letras o su letra esta repetida");
        }
    });

    





