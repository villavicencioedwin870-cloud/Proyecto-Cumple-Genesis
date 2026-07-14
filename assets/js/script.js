/*====================================
    PROYECTO GÉNESIS MISHELLE
====================================*/

const loader = document.getElementById("loader");
const btnComenzar = document.getElementById("btnComenzar");

const musica = document.getElementById("musica");

const introMovie = document.getElementById("introMovie");

const gallery = document.getElementById("gallery");

const envelopeSection = document.getElementById("envelopeSection");

const letterSection = document.getElementById("letterSection");

const transitionSection = document.getElementById("transitionSection");

const videoSection = document.getElementById("videoSection");

const finalSection = document.getElementById("finalSection");

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);

    },2000);

});

btnComenzar.addEventListener("click",()=>{

    musica.play().catch(()=>{

        console.log("La música iniciará cuando el usuario interactúe.");

    });

    introMovie.style.display="none";

    gallery.style.display="flex";

});


/*====================================
        CARRUSEL DE FOTOS
====================================*/

const imagenes = [
    "assets/fotos/foto1.jpg",
    "assets/fotos/foto2.jpg",
    "assets/fotos/foto3.jpg",
    "assets/fotos/foto4.jpg",
    "assets/fotos/foto5.jpg",
    "assets/fotos/foto6.jpg",
    "assets/fotos/foto7.jpg",
    "assets/fotos/foto8.jpg",
    "assets/fotos/foto9.jpg",
    "assets/fotos/foto10.jpg",
    "assets/fotos/foto11.jpg",
    "assets/fotos/foto12.jpg"
];

const frases = [

{
titulo:"Nuestro primer recuerdo ❤️",
texto:"Ese día comenzó una historia que jamás imaginé vivir."
},

{
titulo:"Tu sonrisa",
texto:"Descubrí que una sonrisa podía alegrarme completamente el día."
},

{
titulo:"Gracias por existir",
texto:"No sabes cuánto cambió mi vida desde que llegaste a ella."
},

{
titulo:"Siempre tú",
texto:"Cada momento contigo terminó convirtiéndose en uno de mis favoritos."
},

{
titulo:"Mi paz",
texto:"En medio del caos siempre encuentro tranquilidad cuando estoy contigo."
},

{
titulo:"Mi lugar favorito",
texto:"Mi lugar favorito nunca fue un sitio... siempre fue estar a tu lado."
},

{
titulo:"Mi persona favorita",
texto:"Entre millones de personas, volvería a escogerte una y otra vez."
},

{
titulo:"Más recuerdos",
texto:"Y todavía quiero seguir creando muchísimos más contigo."
},

{
titulo:"Gracias",
texto:"Gracias por creer en nosotros incluso en los días difíciles."
},

{
titulo:"Mi felicidad",
texto:"Tu felicidad también se convirtió en la mía."
},

{
titulo:"Nuestro presente",
texto:"Cada fotografía guarda un pedacito de nuestra historia."
},

{
titulo:"Lo mejor aún viene ❤️",
texto:"Porque todavía quedan muchísimos recuerdos hermosos por vivir juntos."
}

];

let indice = 0;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

function actualizarCarrusel(){

    slideImage.style.opacity = "0";

    slideTitle.style.opacity = "0";

    slideText.style.opacity = "0";

    setTimeout(()=>{

        slideImage.src = imagenes[indice];

        slideTitle.textContent = frases[indice].titulo;

        slideText.textContent = frases[indice].texto;

        slideImage.style.opacity = "1";

        slideTitle.style.opacity = "1";

        slideText.style.opacity = "1";

    },300);

}

next.addEventListener("click",()=>{

    indice++;

    if(indice >= imagenes.length){

        gallery.style.display="none";

        envelopeSection.style.display="flex";

        return;

    }

    actualizarCarrusel();

});

prev.addEventListener("click",()=>{

    indice--;

    if(indice < 0){

        indice = 0;

    }

    actualizarCarrusel();

});


/*====================================
        SOBRE Y CARTA
====================================*/

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const typingText = document.getElementById("typingText");

const carta = [

"Feliz cumpleaños, mi amor. ❤️",

"Hoy no solo celebramos tus 21 años.",

"Hoy también celebro el día en que nació la mujer que cambió mi vida para siempre.",

"Gracias por cada sonrisa.",

"Gracias por cada abrazo.",

"Gracias por cada palabra de apoyo cuando más la necesitaba.",

"Desde que llegaste, aprendí que el amor verdadero se demuestra en los pequeños detalles.",

"Este regalo es solamente una pequeña parte de todo lo que siento por ti.",

"Espero que cada vez que recuerdes este día también recuerdes cuánto te amo.",

"Y deseo de todo corazón que podamos seguir escribiendo nuestra historia durante muchísimos años más.",

"Feliz cumpleaños, Génesis Mishelle.",

"Con todo mi amor...",

"❤️ Edwin ❤️"

];

openLetter.addEventListener("click", abrirCarta);

envelope.addEventListener("click", abrirCarta);

function abrirCarta(){

    envelope.classList.add("open");

    setTimeout(()=>{

        envelopeSection.style.display="none";

        letterSection.style.display="flex";

        escribirCarta();

    },1200);

}

function escribirCarta(){

    typingText.innerHTML="";

    let parrafo=0;

    function escribirParrafo(){

        if(parrafo>=carta.length){

            setTimeout(mostrarTransicion,3000);
            return;

        }

        const p=document.createElement("p");

        typingText.appendChild(p);

        let letra=0;

        function escribirLetra(){

            if(letra<carta[parrafo].length){

                p.innerHTML+=carta[parrafo].charAt(letra);

                letra++;

                setTimeout(escribirLetra,35);

            }else{

                parrafo++;

                setTimeout(escribirParrafo,800);

            }

        }

        escribirLetra();

    }

    escribirParrafo();

}



/*====================================
    TRANSICIÓN - VIDEO - FINAL
====================================*/

const birthdayVideo = document.getElementById("birthdayVideo");
const restartStory = document.getElementById("restartStory");

function mostrarTransicion(){

    letterSection.style.display="none";

    transitionSection.style.display="flex";

    setTimeout(()=>{

    transitionSection.style.display="none";

    videoSection.style.display="flex";

    musica.pause();
    musica.currentTime = 0;

    birthdayVideo.play().catch(()=>{});

},5000);

}

birthdayVideo.addEventListener("ended",()=>{

    videoSection.style.display="none";

    finalSection.style.display="flex";

    iniciarPetalos();

});

restartStory.addEventListener("click",()=>{

    location.reload();

});


/*====================================
        PÉTALOS
====================================*/

function crearPetalo(){

    const petalo=document.createElement("div");

    petalo.className="petal";

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.animationDuration=(6+Math.random()*5)+"s";

    petalo.style.opacity=Math.random();

    petalo.style.transform=`scale(${0.6+Math.random()})`;

    document.body.appendChild(petalo);

    petalo.addEventListener("animationend",()=>{

        petalo.remove();

    });

}

let lluviaPetalos;

function iniciarPetalos(){

    lluviaPetalos=setInterval(crearPetalo,350);

}


/*====================================
        EFECTOS
====================================*/

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

document.addEventListener("dragstart",(e)=>{

    if(e.target.tagName==="IMG"){

        e.preventDefault();

    }

});

window.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

});