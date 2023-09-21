function persona2() {
    fetch('https://randomuser.me/api/') 
        .then(response => response.json())
        .then(persona => {console.log(persona.results[0].gender) + console.log(persona.results[0].name.title)
        + console.log(persona.results[0].name.first) 
        + console.log(persona.results[0].name.last) 
        + console.log(persona.results[0].registered.age)  
        + console.log(persona.results[0].registered.date); // display por consola para control
        var nombrePers = persona.results[0].name.first; 
        var tituloPers = persona.results[0].name.title;
        var apellidoPers = persona.results[0].name.last;
        var emailPers = persona.results[0].email; 
        var celularPers = persona.results[0].cell;
        var edadPers = persona.results[0].dob.age;
        var fechaNacPers = persona.results[0].dob.date;
        var generoPers = persona.results[0].gender;
        var ciudadPers = persona.results[0].location.city;
        var paiscPers = persona.results[0].location.country;
        var postalPers = persona.results[0].location.postcode;
        var provinciaPers = persona.results[0].location.state;
        var callePers = persona.results[0].location.street.name;
        var numeroPers = persona.results[0].location.street.number;
        var telefonoPers = persona.results[0].phone;
        var fotoPers = persona.results[0].picture.large;

        var individuo = document.getElementById("persona");
        individuo.innerHTML = (tituloPers + " " + nombrePers + " " + apellidoPers);

        let domicilioPersona = document.getElementById("domicilio");
        domicilioPersona.innerHTML = ("Domicilio: " + callePers + " " + numeroPers + ", " + ciudadPers + " (" + postalPers + ") " + provinciaPers + ", " + paiscPers);
        let telefonoPersona = document.getElementById("telefono");
        telefonoPersona.innerHTML = ("Celular: " + celularPers + " Teléfono: " + telefonoPers);
        let emailPersona = document.getElementById("email");
        emailPersona.innerHTML = ("email: " + emailPers);
        let generoPersona = document.getElementById("genero");
        if (generoPers == "male") {
            generoPersona.innerHTML = ("Género: Masculino")
        }
        else {
            generoPersona.innerHTML = ("Género: Femenino")
        }
        let edadPersona = document.getElementById("edad");
        edadPersona.innerHTML = ("Edad: " + edadPers);

        var fechaNacPers1 = fechaNacPers.toString();
        fecha(fechaNacPers1);

        let foto = document.getElementById("foto");
        foto.src = fotoPers;


 // Utilizando el dato proporcionado por el archivo JSON parseado como (persona.results[0].registered.age) 
 // se definen algunas características de los titulares, tales como datos de "Formación", "Aptitudes" e
 // "Historial Laboral".  Existen básicamente tres combinaciones, que van siendo asignadas según el resultado
 // procesado para cada persona de la mencionada variable.
 // Dichos datos son manipulados por Java Script y luego modificados en el HTML original.      

        let formacionPersona = document.getElementById("formacion");
        let formacionPersona2 = document.getElementById("formacion2");
        let aptitudesPersona = document.getElementById("aptitudes");
        let aptitudesPersona2 = document.getElementById("aptitudes2");
        let aptitudesPersona3 = document.getElementById("aptitudes3");
        var aptitudesPersona4 = document.getElementById("aptitudes4");
        var aptitudesPersona5 = document.getElementById("aptitudes5");
        var aptitudesPersona6 = document.getElementById("aptitudes6");

        if ((persona.results[0].registered.age % 5) === 0) {
            formacionPersona.innerHTML = ("Escuela de negocios Harvard, Cambridge, 2010");
            formacionPersona2.innerHTML = ("Grado Universitario: Programa MBA");
            aptitudesPersona.innerHTML = ("Actitud positiva");
            aptitudesPersona2.innerHTML = ("Capacidad de liderazgo");
            aptitudesPersona3.innerHTML = ("Comunicación");
            aptitudesPersona4.innerHTML = ("Habilidades interpersonales");
            aptitudesPersona5.innerHTML = ("Resolución de problemas");
            aptitudesPersona6.innerHTML = ("Control del estrés");
        }
        else if ((persona.results[0].registered.age % 2) === 0) {
            formacionPersona.innerHTML = ("Universidad de Oxford, Oxford, 2009");
            formacionPersona2.innerHTML = ("Grado Universitario: Maestría en Administración y Dirección de Empresas");
            aptitudesPersona.innerHTML = ("Inteligencia emocional");
            aptitudesPersona2.innerHTML = ("Creatividad");
            aptitudesPersona3.innerHTML = ("Iniciativa");
            aptitudesPersona4.innerHTML = ("Trabajo en equipo");
            aptitudesPersona5.innerHTML = ("Capacidad de liderazgo");
            aptitudesPersona6.innerHTML = ("Resiliencia");
        }
            else { formacionPersona.innerHTML = ("Universidad de Westminister, Madrid, 2006");
            formacionPersona2.innerHTML = ("Grado Universitario con matrícula de honor: Administración y Gestión de Empresas") 
            aptitudesPersona.innerHTML = ("Habilidades de comunicación");
            aptitudesPersona2.innerHTML = ("Conocimientos de gestión de resultados multimillonarios en la región del Sudeste Asiático");
            aptitudesPersona3.innerHTML = ("Relaciones con clientes y proveedores");
            aptitudesPersona4.innerHTML = ("Desarrollo de líneas de productos y campañas de márketing");
            aptitudesPersona5.innerHTML = ("Desarrollo de políticas de formación y RR.HH.");
            aptitudesPersona6.innerHTML = ("Optimización de procesos");
            }         
        }
        );                
}

// La función "fecha" toma el dato del archivo JSON parseado como persona.results[0].dob.date, y lo convierte
// en un string con el formato DD/MM/AAAA para ser cambiado en el HTML original brindando la información para cada
// persona de su "Fecha de Nacimiento" en formato Español.

function fecha(fechaCompleta) {
    var anio = fechaCompleta.substr(0, 4);
    var mesDia = fechaCompleta.substr(5, 6);
    var mes = mesDia.substr(0, 2);
    var dia = mesDia[3] + mesDia[4];
    fechaCompleta = (dia + "/" + mes + "/" + anio);
    let fechaNacPersona = document.getElementById("fechaNac");
    fechaNacPersona.innerHTML = "Fecha de Nacimiento: " + fechaCompleta;
}

// Mediante la barra de navegación, ante el evento click en los elementos, se dispara function que modifica
// atributos de documentos HTML mediante .JS

const enlace1 = document.getElementById("informacionContacto");
const enlace2 = document.getElementById("OtraInformacionPersonal");
const enlace3 = document.getElementById("fContacto");
const enlace4 = document.getElementById("form");
const enlace5 = document.getElementById("hLaboral");
const enlace6 = document.getElementById("apti");

enlace1.addEventListener("click", function() {
    resaltarParrafo("infoContacto");
});

enlace2.addEventListener("click", function() {
    resaltarParrafo("otraInfoPersonal");
});

enlace3.addEventListener("click", function() {
    resaltarParrafo("formContacto");
});

enlace4.addEventListener("click", function() {
    resaltarParrafo("formacion1");
});

enlace5.addEventListener("click", function() {
    resaltarParrafo("historialLaboral");
});

enlace6.addEventListener("click", function() {
    resaltarParrafo("aptitud");
});

function resaltarParrafo(idParrafo) {
    const parrafo = document.getElementById(idParrafo);
    parrafo.style.backgroundColor = "mediumslateblue";
}

document.addEventListener("DOMContentLoaded", function() {
    const botonDeCambio = document.getElementById("envio");
    botonDeCambio.addEventListener("click", persona2()); 
    location.reload();
});

// document.addEventListener("DOMContentLoaded", function() {
//    const botonDeCambio = document.getElementById("envio");
//        if (botonDeCambio) {
//            botonDeCambio.addEventListener("click", persona2()); 
//        } else {
//            console.error("El botón no se encontró en el DOM.");
//            }
// });
