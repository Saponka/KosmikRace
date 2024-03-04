/* funcion showAlert */

function showAlert() {

  let timerInterval;

  Swal.fire({
      title: '¡Corredores Preparados, Listos en <b></b>! ',
      icon: 'warning',
      showConfirmButton: false,
      timer: 10000,
     
      width:600,

      didOpen: () => {
      Swal.showLoading();

      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
          const tiempoRestanteEnMilisegundos = Swal.getTimerLeft(); // Obtener tiempo restante en milisegundos
          const tiempoRestanteEnSegundos = Math.ceil(tiempoRestanteEnMilisegundos / 1000); // Convertir a segundos y redondear hacia arriba
          timer.textContent = `${tiempoRestanteEnSegundos} s`;
      }, 100); 
     },
     willClose: () => {
       clearInterval(timerInterval);
     }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire({
          title: 'A Correr!!! ',
          showConfirmButton: false,
          imageUrl:"img/race-flag-16.gif",
          timer:1500,
          width:250
      });
      console.log("I was closed by the timer");
    }
    });
};

showAlert();

/* Nombres opcionales */
//let inputPink =  document.querySelector(".inputPink");
//let inputBlue = document.querySelector(".inputBlue");

//let botonAgregar = document.querySelector(".boton");

/* evento click en boton */
//botonAgregar.addEventListener("click",chequearInput); 

/* function */
/* function chequearInput(){
  if (input.value == "") {                        
      
      Swal.fire({
          title: 'Agrega una Nombre',
          icon:'warning',
          confirmButtonColor:'teal',
          footer:'<span class= "footerAlert">Es necesario escribir un Nombre </span>',
          timer:"4000",
          timerProgressBar: true
      });
     
  } else {    
                                        
      new Item (input.value);
      Swal.fire({
          title: 'Nombre Agregado!',
          icon:'success',
          padding:'3rem',
          timer:"2000",
          timerProgressBar: true,
          showConfirmButton: false,
      });
      localStorage.setItem("nombre",input.value)
      input.value = "";

      
  }
} */

/* autos */

const redCar = document.getElementById("red")
const blueCar = document.getElementById("blue");

/* fin */

const fin = document.getElementById("endGame");
let boton = document.createElement("button");

/* acumuladores */
let acumRed = 0;
let acumBlue = 0;

 // Booleano para verificar si ya se mostró el mensaje de ganador
 let ganadorMostrado = false;

/* Evento */
window.addEventListener("keyup", (event) => {

    /* event keys */
    if (event.key === 'a' && acumRed !== 1000) {
        acumRed += 20;
        redCar.style.marginLeft = `${acumRed}px`; 
      };

   if (event.key === 'l' && acumBlue !== 1000){
        acumBlue +=20;
        blueCar.style.marginLeft=`${acumBlue}px`;    
    };

    /* 1000px rojo*/
    if (!ganadorMostrado) {
        
        if( acumRed >= 1000  ){
    
            let h2 = document.createElement("h2");          
            fin.appendChild(h2);
            fin.style.backgroundColor = "pink";
            h2.style.color = "black";                         
            h2.textContent = " Ganador auto Rosa Suki Sukiny";
            /* fin */
            mostrarGanador();

          }else if( acumBlue >= 1000  ){   /* 1000px blue  */
                
            let h2 = document.createElement("h2");          
            fin.appendChild(h2); 
            fin.style.backgroundColor = "blue";
            h2.style.color = "white";                         
            h2.textContent = " Ganador auto AZUL Brain O'cotter";
            /* fin */
            mostrarGanador()
          }
    }

   

       // Función para mostrar el mensaje de ganador y el botón de volver a jugar
  function mostrarGanador() {
    ganadorMostrado = true;
    boton.style.borderRadius = "25px";
    boton.style.width ="140px";
    boton.style.height="40px";
    boton.style.fontWeight ="bold";
    fin.appendChild(boton);
    boton.textContent = "Volvér a Jugar";
    boton.addEventListener("click", () => {
      location.reload();
    });
  }

})

