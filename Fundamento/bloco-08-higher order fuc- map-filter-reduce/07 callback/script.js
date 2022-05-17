// O que é Callback ?
//>é uma função que tem como PARAMETRO outra função e isso é chamado de "função passada como ARGUMENTO".
//>geralmente visto em momentros assincronos como quando usanmos a função (((setTimeout))) 
//ou seja, voce vai dizer quanto tempo o sistema vai esperar e depois de x segundos, ele aciona a outra função
//abaixco tem 2  exemplos
                               


// exemplo01 - neste tem que descomentar os codigos do html tambem
                                                
                                                
                                                
                                               
                                                setTimeout( ()=>{ document.getElementById("demo").innerHTML = "I love You !!"}, 3000);

                                                function myFunction() {
                                                    
                                                  document.getElementById("demo").innerHTML = "I love You !!";
                                                }



// exemplo02

 let time = 6000;         

let x = document.getElementById("txt");
setTimeout(function(){ x.value="2 seconds" }, 2000);
setTimeout(function(){ x.value="4 seconds" }, 4000);
timeString = String(time/1000);
setTimeout(function(){ x.value=timeString+ "esse 6 é uma string pq d alinha acima"  }, time);



//exemplo03

                                setInterval(myFunction, 1000);

                                function myFunction() {
                                let d = new Date();
                                document.getElementById("demoTwo").innerHTML=
                                d.getHours() + ":" +
                                d.getMinutes() + ":" +
                                d.getSeconds();
                                }