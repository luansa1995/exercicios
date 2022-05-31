//peguei exemplo do w3school e resolvi substituir o reject pelo catch e fazer ele tomar ação pelo catch


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 10;

  // some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error, Deu ruim!");
  }
});

myPromise.then(
  function (value) { myDisplayer(value); },
  //  function(error) {myDisplayer(error);}
).catch(error => myDisplayer(error)
);



// exemplo original do w3school , abaixo:    //sem o catch

          // function myDisplayer(some) {
          //   document.getElementById("demo").innerHTML = some;
          // }

          // let myPromise = new Promise(function(myResolve, myReject) {
          //   let x = 0;

          // // The producing code (this may take some time)

          //   if (x == 0) {
          //     myResolve("OK");
          //   } else {
          //     myReject("Error");
          //   }
          // });

          // myPromise.then(
          //   function(value) {myDisplayer(value);},
          //   function(error) {myDisplayer(error);}
          // );



