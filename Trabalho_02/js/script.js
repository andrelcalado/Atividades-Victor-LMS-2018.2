let conversas = [
    {
        grupo:"Grupo da Família",
        mensagens: [
            {
                usuario: "Joao Marcos",
                text: "Bom Dia Familia!",
            },

            {
                usuario: "Almeida José",
                text: "Opa, Bom Dia!",
            },

            {
                usuario: "Francisco Junior",
                text: "Coé Rapaziada",
            },
        ]


    },

    {
        grupo: "Galera da UFC",
        mensagens: [
            {
                usuario:"Ismael Almeida",
                text:"O que tem pra entregar hoje?",
            },

            {
                usuario:"Pedro Italo",
                text:"Não sei, no momento estou com dor de cabeça",
            },

            {
                usuario:"Igo Marinvalho",
                text:"Faz tempo que não vou a aula",
            }
        ]
    },

    {
        grupo:"Férias em Dubai",
        mensagens:
        [
            {
                usuario: "Caio Cezar",
                text: "Iai, vdc mesmo?",
            },

            {
                usuario: "Icaro Junior",
                text: "Já estamos lá boy",
            },

            {
                usuario: "Isabele Feitosa",
                text: "Será que vai gerar?",
            },            
        ]
    }
]

function load_name_cvs(conversa){
    let elt_menssagem = document.querySelector(".cvs-autor");
    let cvs_autor_msg = document.createElement("div");
    let cvs_img = document.createElement("div");

    elt_menssagem.innerHTML = "";
    cvs_autor_msg.innerHTML = conversa.childNodes[1].innerHTML;

    cvs_img.className="cvs-img2";
    cvs_autor_msg.className = "cvs-autor-msg";
    elt_menssagem.appendChild(cvs_autor_msg);
    cvs_autor_msg.appendChild(cvs_img);
}

function load_1cvs(conversa){
    active_cvs(conversa);
    load_name_cvs(conversa);
    let msg_content = document.querySelector(".msg-content");

    for(let elemento of conversas){
        if(elemento.grupo == conversa.childNodes[1].innerHTML){
            msg_content.innerHTML = "";
            for(let menssagem of elemento.mensagens){
                let msg = document.createElement("div");
                let msg_autor = document.createElement("div");
                let msg_text = document.createElement("div");
                let msg_autor_text = document.createTextNode(menssagem.usuario);
                let msg_text_text = document.createTextNode(menssagem.text);

                msg.className = "msg";
                msg_autor.className = "msg-autor";
                msg_text.className = "msg-text";

                msg_autor.appendChild(msg_autor_text);
                msg_text.appendChild(msg_text_text);
                msg.appendChild(msg_autor);
                msg.appendChild(msg_text);

                msg_content.appendChild(msg);
            }            
        }
    }
}

function active_cvs(conversa){
    if(!conversa.classList.contains("cvs-ativa2")){
        conversa.classList.toggle("cvs-ativa2");
    }

    let conversas_div = document.querySelectorAll(".conversa");

    for(let conversa_div of conversas_div){
        if(conversa_div.classList.contains("cvs-ativa2") && conversa_div.childNodes[1].innerHTML != conversa.childNodes[1].innerHTML){
            conversa_div.classList.toggle("cvs-ativa2");
        }
    }

    let cvs_ativa = document.createElement("div");
    cvs_ativa.innerHTML="&gt";
    cvs_ativa.className="cvs-ativa";

    if(conversa.childNodes.length <= 2){
        conversa.appendChild(cvs_ativa);
    }

    for(let conversa_div of conversas_div){
        if(conversa_div.childNodes.length > 2 && conversa_div.childNodes[1].innerHTML != conversa.childNodes[1].innerHTML){
            conversa_div.removeChild(conversa_div.childNodes[2]);
        }
    }
    
}

function load_conversas(){
    let xhttp2 = new XMLHttpRequest();
    let url = "http://rest.learncode.academy/api/talkwithme/grupos";
    let grupos = {};

    xhttp2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            grupos = JSON.parse(this.responseText);
            console.log(grupos);
            for(let grupo of grupos){
                let conversa = document.createElement("div");
                let cvs_img = document.createElement("div");
                let cvs_nome = document.createElement("div");
                let cvs_nome_text = document.createTextNode(grupo.grupo);
        
                conversa.className="conversa";
                cvs_img.className="cvs-img";
                cvs_nome.className="cvs-nome";
        
                cvs_content.appendChild(conversa);
                conversa.appendChild(cvs_img);
                conversa.appendChild(cvs_nome);
                cvs_nome.appendChild(cvs_nome_text);
                console.log("tudo zen")
            }

            // Carregar Menssagens de Cada Grupo
            let conversas_div = document.querySelectorAll(".conversa");
            for(let conversa_div of conversas_div){
                conversa_div.addEventListener("click", function(){load_1cvs(conversa_div)});
            }
        }
    }

    xhttp2.open("GET", "./js/teste.json", true);
    xhttp2.send();

    console.log(grupos);
    let cvs_content = document.querySelector(".conversas-content");
}

function add_event_cvs(){
    let conversas = document.querySelectorAll(".conversa");
    for(let conversa of conversas){
        console.log(conversa);
        conversa.addEventListener("click", load_cvs);
    }
}

load_conversas();