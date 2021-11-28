
window.onload = () => {
    carregaJSON();
    var contingut = document.getElementById("contingut");
}

function carregaJSON() {
    let peticio = new XMLHttpRequest();
    peticio.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resposta = peticio.responseText;
            ajaxOK(resposta);
        }
    }
    peticio.open("GET", "https://pauasensi.github.io/PauAsensi/datos.json", true);
    peticio.send();
}

function ajaxOK(resp) {
    var v = JSON.parse(resp);
    mostrarInicials(v);
    var filtroTipo=document.getElementsByName("viviendas");
 
    var mostrarTot=document.getElementById("mostrartodo");
    comprobarSeleccionats(filtroTipo,v);
    mostrarTot.addEventListener("click",()=>{
        var titulo=document.getElementById("titul");
        titulo.innerHTML="Todos"
        mostrarTots(v,filtroTipo);
    });

}

function getTipo(palabra){
    let array= palabra.split("_");
    return array[0];
}

function getNR(palabra){
    let array= palabra.split("_");
    return array[1];
}

function mostrarTots(tots,filtroTipo){
    contingut.innerHTML="";
    var cases=tots.viviendas[0].casas;
    var piso=tots.viviendas[1].pisos;
    var locals=tots.viviendas[2].locales;
    var garajes=tots.viviendas[3].garajes;
    filtroTipo.selected=true;
    for(let i=0;i<filtroTipo.length;i++){
        filtroTipo[i].selected=true;
    }


    mostrarCases(cases);
    mostrarPisos(piso);
    mostrarLocals(locals);
    mostrarGaratjes(garajes);
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Todos"
}

function mostrarInicials(tots) {
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Destacados"
    let rep=tots.viviendas.length;

    let casa=tots.viviendas[0].casas[0];
    let piso=tots.viviendas[1].pisos[0];
    let local=tots.viviendas[2].locales[0];
    let garatj=tots.viviendas[3].garajes[0];

    let carta_casa=crearCartaExtend(casa.imagen,casa.direccion,casa.precio,casa.metros,casa.descripcion,casa.numero_referencia,"Casa");
    let carta_piso=crearCartaExtend(piso.imagen,piso.direccion,piso.precio,piso.metros,piso.descripcion,piso.numero_referencia,"Piso");
    let carta_local=crearCartaExtend(local.imagen,local.direccion,local.precio,local.metros,local.descripcion,local.numero_referencia,"Local");
    let carta_garatj=crearCartaExtend(garatj.imagen,garatj.direccion,garatj.precio,garatj.metros,garatj.descripcion,garatj.numero_referencia,"Garaje");


    for(let i=0;i<rep;i++){
        let div=document.createElement("div");
        div.setAttribute("class","general");

        if(i==0){
            div.appendChild(carta_casa);
        }else if(i==1){
            div.appendChild(carta_piso);
        }else if(i==2){
            div.appendChild(carta_local);
        }else{
            div.appendChild(carta_garatj);
        }

        contingut.appendChild(div);
    }


}

function mostrarCases(cases) {
    
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Casas"
    for (let i = 0; i < cases.length; i++) {
        //div per a cada casa
        let div = document.createElement("div");
        div.setAttribute("class", "general");

        //AGAFAR VALORS Y GAURDAR EN VARIABLES
        let direccio = cases[i].direccion;
        let n_r = cases[i].numero_referencia;
        let imagen = cases[i].imagen;
        let descripcion = cases[i].descripcion;
        let preu=cases[i].precio;
        let m2=cases[i].metros;
        //crear carta
        let proba=crearCartaExtend(imagen,direccio,preu,m2,descripcion,n_r,"Casa");
        div.appendChild(proba);
        contingut.appendChild(div);
    }

}

function mostrarCasa(imagen,direccio,preu,m2,descripcion,n_r){

    var titul=document.getElementById("titul");
    titul.innerHTML="Casas"

    let div = document.getElementById("ficha");

    //AGAFAR VALORS Y GAURDAR EN VARIABLES
    
    //crear carta
    let proba=crearCartaExtend2(imagen,direccio,preu,m2,descripcion,n_r,"Casa");
    div.appendChild(proba);
    contingut.appendChild(div);
    
}

function mostrarPiso(imagen,direccio,preu,m2,descripcion,n_r){

    var titul=document.getElementById("titul");
    titul.innerHTML="Piso"

    let div = document.getElementById("ficha");

    //AGAFAR VALORS Y GAURDAR EN VARIABLES

    //crear carta
    let proba=crearCartaExtend2(imagen,direccio,preu,m2,descripcion,n_r,"Piso");
    div.appendChild(proba);
    contingut.appendChild(div);
    
}

function mostrarLocal(imagen,direccio,preu,m2,descripcion,n_r){

    var titul=document.getElementById("titul");
    titul.innerHTML="Local"

    let div = document.getElementById("ficha");

    //AGAFAR VALORS Y GAURDAR EN VARIABLES

    //crear carta
    let proba=crearCartaExtend2(imagen,direccio,preu,m2,descripcion,n_r,"Local");
    div.appendChild(proba);
    contingut.appendChild(div);
    
}

function mostrarGaraje(imagen,direccio,preu,m2,descripcion,n_r){

    var titul=document.getElementById("titul");
    titul.innerHTML="Garaje"

    let div = document.getElementById("ficha");


    //AGAFAR VALORS Y GAURDAR EN VARIABLES

    //crear carta
    let proba=crearCartaExtend2(imagen,direccio,preu,m2,descripcion,n_r,"Garaje");
    div.appendChild(proba);
    contingut.appendChild(div);
    
}

function mostrarPisos(pisos) {
    
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Pisos";
    for (let i = 0; i < pisos.length; i++) {
        //div per a cada casa
        let div = document.createElement("div");
        div.setAttribute("class", "general");

        //AGAFAR VALORS Y GAURDAR EN VARIABLES
        let direccio = pisos[i].direccion;
        let n_r = pisos[i].numero_referencia;
        let imagen = pisos[i].imagen;
        let descripcion = pisos[i].descripcion;
        let preu=pisos[i].precio;
        let m2=pisos[i].metros;
        //crear carta
        let proba=crearCartaExtend(imagen,direccio,preu,m2,descripcion,n_r,"Piso");
        div.appendChild(proba);
        contingut.appendChild(div);
    }

}

function mostrarLocals(locals) {
    
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Locales";
    for (let i = 0; i < locals.length; i++) {
        //div per a cada casa
        let div = document.createElement("div");
        div.setAttribute("class", "general");

        //AGAFAR VALORS Y GAURDAR EN VARIABLES
        let direccio = locals[i].direccion;
        let n_r = locals[i].numero_referencia;
        let imagen = locals[i].imagen;
        let descripcion = locals[i].descripcion;
        let precio=locals[i].precio;
        let m2=locals[i].metros;

        //crear carta
        let proba=crearCartaExtend(imagen,direccio,precio,m2,descripcion,n_r,"Local");
        div.appendChild(proba);
        contingut.appendChild(div);
    }

}

function mostrarGaratjes(garajes) {
   
    var titulo=document.getElementById("titul");
    titulo.innerHTML="Garajes";
    for (let i = 0; i < garajes.length; i++) {
        //div per a cada casa
        let div = document.createElement("div");
        div.setAttribute("class", "general");

        //AGAFAR VALORS Y GAURDAR EN VARIABLES
        let direccio = garajes[i].direccion;
        let n_r = garajes[i].numero_referencia;
        let imagen = garajes[i].imagen;
        let descripcion = garajes[i].descripcion;
        let precio=garajes[i].precio;
        let m2=garajes[i].metros;
        //crear carta
        let proba=crearCartaExtend(imagen,direccio,precio,m2,descripcion,n_r,"Garaje");
        div.appendChild(proba);
        contingut.appendChild(div);
    }

}

function crearCarta(imagen, titulo, descripcio,n_refernecia,tipo) {
    //creacio del div general per a la carta
    let div_c = document.createElement("div");
    div_c.setAttribute("class", "card");
    div_c.style.width = "18rem";
    div_c.setAttribute("id", tipo + n_refernecia);


    //creacio de la imatje de previsualizacio
    let img = document.createElement("img");
    img.src = imagen;
    img.style="width:286px;height:286px;";
    img.setAttribute("class", "card-img-top");


    //crearcio del div per a mostrar els valors
    let div_card_body = document.createElement("div");
    div_card_body.setAttribute("class", "card-body");

    //crear el titul
    let titul = document.createElement("h5");
    titul.setAttribute("class", "card-title");
    titul.innerHTML = tipo+" en " + titulo;

    //crear descripcio
    let desc_mostrar = document.createElement("p");
    desc_mostrar.setAttribute("class", "card-text");
    desc_mostrar.innerHTML = descripcio;

    //crear boto saber mas
    let boto = document.createElement("a");
    boto.setAttribute("href", "#");
    boto.setAttribute("class", "btn btn-primary");
    boto.innerHTML = "Saber mas...";


    //asignar fills
    div_card_body.appendChild(titul);
    div_card_body.appendChild(desc_mostrar);
    div_card_body.appendChild(boto);
    div_c.appendChild(img);
    div_c.appendChild(div_card_body);
    
    return div_c;
}
function random(){
   return (Math.random()*(3-0)+0).toFixed(0);
}
function crearCartaExtend2(imagen, titulo,preu,metros, descripcio,n_refernecia,tipo) {
    //creacio del div general per a la carta
    let div_c = document.createElement("div");
    div_c.setAttribute("class", "card");
    div_c.style.width = "18rem";
    div_c.setAttribute("id", tipo +"_"+ n_refernecia);


    //creacio de la imatje de previsualizacio
    let img = document.createElement("img");
    img.src = imagen;
    img.style="width:286px;height:286px;";
    img.setAttribute("class", "card-img-top");

    setInterval(()=>{
        img.src="imgs/"+tipo+"/"+random()+".jpg";
    },2000);
    //crearcio del div per a mostrar els valors
    let div_card_body = document.createElement("div");
    div_card_body.setAttribute("class", "card-body");

    //crear el titul
    let titul = document.createElement("h5");
    titul.setAttribute("class", "card-title");
    titul.innerHTML = tipo+" en " + titulo;

    //crear descripcio
    let desc_mostrar = document.createElement("p");
    desc_mostrar.setAttribute("class", "card-text");
    desc_mostrar.innerHTML = descripcio;

    //crear llista de atributs extres
    let list_grup=document.createElement("ul");
    list_grup.setAttribute("class","list-group list-group-flush");
    let m2=document.createElement("li");
    m2.setAttribute("class","list-group-item");
    let precio=document.createElement("li");
    precio.setAttribute("class","list-group-item");
    


    m2.innerHTML=metros;
    precio.innerHTML=preu+"€";

    

    //asignar fills
    div_card_body.appendChild(titul);
    div_card_body.appendChild(desc_mostrar);
    list_grup.appendChild(m2);
    list_grup.appendChild(precio);
    div_c.appendChild(img);
    div_c.appendChild(div_card_body);
    div_c.appendChild(list_grup);

    
    return div_c;
}

function crearCartaExtend(imagen, titulo,preu,metros, descripcio,n_refernecia,tipo) {
    //creacio del div general per a la carta
    let div_c = document.createElement("div");
    div_c.setAttribute("class", "card");
    div_c.style.width = "18rem";
    div_c.setAttribute("id", tipo +"_"+ n_refernecia);


    //creacio de la imatje de previsualizacio
    let img = document.createElement("img");
    img.src = imagen;
    img.style="width:286px;height:286px;";
    img.setAttribute("class", "card-img-top");


    //crearcio del div per a mostrar els valors
    let div_card_body = document.createElement("div");
    div_card_body.setAttribute("class", "card-body");

    //crear el titul
    let titul = document.createElement("h5");
    titul.setAttribute("class", "card-title");
    titul.innerHTML = tipo+" en " + titulo;

    //crear descripcio
    let desc_mostrar = document.createElement("p");
    desc_mostrar.setAttribute("class", "card-text");
    desc_mostrar.innerHTML = descripcio;

    //crear llista de atributs extres
    let list_grup=document.createElement("ul");
    list_grup.setAttribute("class","list-group list-group-flush");
    let m2=document.createElement("li");
    m2.setAttribute("class","list-group-item");
    let precio=document.createElement("li");
    precio.setAttribute("class","list-group-item");
    let linia_boto=document.createElement("div");
    linia_boto.setAttribute("class","card-body");


    m2.innerHTML=metros;
    precio.innerHTML=preu+"€";

    //crear boto saber mas
    let boto = document.createElement("button");
  
    boto.setAttribute("class", "btn btn-primary");
    boto.addEventListener("click",()=>{mostrarFicha(imagen,titulo, preu, metros,descripcio ,tipo,n_refernecia,tipo);})

    boto.innerHTML = "Saber mas...";


    //asignar fills
    div_card_body.appendChild(titul);
    div_card_body.appendChild(desc_mostrar);
    linia_boto.appendChild(boto);
    list_grup.appendChild(m2);
    list_grup.appendChild(precio);

    div_c.appendChild(img);
    div_c.appendChild(div_card_body);
    div_c.appendChild(list_grup);
    div_c.appendChild(linia_boto);
    
    return div_c;
}

function mostrarFicha(imagen,titulo,preu,metros,descripcio,tipo,n_r,tipo){
    contingut.innerHTML="";
    contingut.innerHTML+="<div id=\"ficha\"></div><div id=\"formulario\"></div>";
    crearFormulari(tipo,titulo);

    let formulario=document.getElementById("form");
    formulario.addEventListener("change", () => {document.getElementById("boton_enviar").disabled = !formulario.checkValidity()});
    validarFormulario();

    switch(tipo){
        case "Casa":
            mostrarCasa(imagen,titulo,preu,metros,descripcio,n_r);
            break;
        case "Piso":
            mostrarPiso(imagen,titulo,preu,metros,descripcio,n_r);
            break;
        case "Local":
            mostrarLocal(imagen,titulo,preu,metros,descripcio,n_r);
            break;
        case "Garaje":
            mostrarGaraje(imagen,titulo,preu,metros,descripcio,n_r);
            break;
    }
    
    

}

function validarFormulario(){
    var inputs=document.getElementsByTagName("input");

    for(let i=0;i<inputs.length;i++){
        inputs[i].required=true;
        inputs[i].addEventListener("input",validarInputs,false);
    }

}

function validarInputs(){
    
    if(this.type=="text"){
        if (this.value.length > 2 ) {
            this.setCustomValidity("");
            this.style.outline = "1px solid green";
        }else {
            this.setCustomValidity("Minimo de 3 caracteres");
            this.style.outline = "1px solid red";
        }
    }else if(this.type=="checkbox"){
        var inputs=document.getElementsByTagName("input");
        var checkbox=[];
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].type=="checkbox"){
                checkbox.push(inputs[i]);
            }
        }
        let contador=0;
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].checked){
                contador++;
            }
        }
        if(contador>=2){
            for(let i=0;i<checkbox.length;i++){
                if(!checkbox[i].checked){
                    checkbox[i].required=false;
                }
            }
            for(let i=0;i<checkbox.length;i++){
                checkbox[i].setCustomValidity("");
            }
        }else{
            for(let i=0;i<checkbox.length;i++){
                checkbox[i].setCustomValidity("Selecciona almenos dos");
            }
        }
        
    }
}

function crearFormulari(tipo,direccio){
    //div
    let div=document.getElementById("formulario");
    let form=document.createElement("form");
    form.setAttribute("id","form");
    let nombre=document.createElement("input");
    
    nombre.setAttribute("type","text");
    nombre.setAttribute("placeholder","Paco..");
    nombre.setAttribute("id","nombre");

    let textarea=document.createElement("textarea");
    textarea.setAttribute("id","comentario");
    let frasetextarea="Estic interesat en "+tipo+" de "+direccio+"...";
    textarea.innerHTML=frasetextarea;
    textarea.style="width:250px;height:50px;"

    let tipocasa=document.createElement("input");
    tipocasa.setAttribute("type","checkbox");
    tipocasa.setAttribute("name","tipo");
    tipocasa.setAttribute("value","casa")

    let tipopiso=document.createElement("input");
    tipopiso.setAttribute("type","checkbox");
    tipopiso.setAttribute("name","tipo");
    tipopiso.setAttribute("value","piso");

    let tipolocal=document.createElement("input");
    tipolocal.setAttribute("type","checkbox");
    tipolocal.setAttribute("name","tipo");
    tipolocal.setAttribute("value","local")

    let tipogaraj=document.createElement("input");
    tipogaraj.setAttribute("type","checkbox");
    tipogaraj.setAttribute("name","tipo");
    tipogaraj.setAttribute("value","garaje")

    let pcasa=document.createElement("p");
    pcasa.innerHTML+="Tipos : ";
    pcasa.innerHTML+="Casa ";
    pcasa.appendChild(tipocasa);
    pcasa.innerHTML+=" Piso ";
    pcasa.appendChild(tipopiso);
    pcasa.innerHTML+=" Local ";
    pcasa.appendChild(tipolocal);
    pcasa.innerHTML+=" Garaje ";
    pcasa.appendChild(tipogaraj);


    let p_submit=document.createElement("p");
    let submit=document.createElement("input");
    submit.setAttribute("type","submit");
    submit.value="Enviar";
    submit.id="boton_enviar";
    submit.disabled=true;
    p_submit.appendChild(submit);


    let pnom=document.createElement("p");
    pnom.innerHTML="Nombre : ";
    pnom.appendChild(nombre);

    form.appendChild(pnom);
    form.appendChild(pcasa);
    form.appendChild(textarea);
    form.appendChild(p_submit);

    div.appendChild(form);
    


    
}

function comprobarSeleccionats(opcions,v){
   
    for(let i=0;i<opcions.length;i++){
        
        opcions[i].addEventListener("change",()=>{mostrarSeleccionat(opcions[i].value,v);});
    }
}

function mostrarSeleccionat(seleccionat,v){
    console.log("ola")
    switch(seleccionat){
        case "casas":
            console.log("ola")
            contingut.innerHTML = "";
            mostrarCases(v.viviendas[0].casas);
        break;

        case "pisos":
            contingut.innerHTML = "";
            mostrarPisos(v.viviendas[1].pisos);
        break;

        case "locales":
            contingut.innerHTML = "";
            mostrarLocals(v.viviendas[2].locales);
        break;

        case "garajes":
            contingut.innerHTML = "";
            mostrarGaratjes(v.viviendas[3].garajes);
        break;
        
        case "destacados":
            contingut.innerHTML = "";
            mostrarInicials(v);
            break;
    }
}