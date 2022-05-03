
let campoImagem = document.querySelector(".campo-imagem");
let bolinhas = document.querySelectorAll(".bola");

let imagens= [
    {
        img: "images/paisagem-1.jpg"
    },
    {
        img: "images/paisagem-2.jpg"
    },
    {
        img: "images/paisagem-3.jpg"
    },
];



function alterarImagens(){
    let position = 0
    let img = document.createElement("img");
    img.classList.add("imagem-scrool")
    setInterval(() => {
        if(position == 3){
            position = 0
        }else{
            img.classList.remove("desaparecer");
            bolinhas[position].classList.add("bolinha-escolhida");
            img.src = imagens[position].img;
            campoImagem.appendChild(img);
            setInterval(() => {
                img.classList.add("desaparecer");
                if(position == 0){
                    bolinhas[position].classList.remove("bolinha-escolhida");
                }else{
                    bolinhas[position - 1].classList.remove("bolinha-escolhida");
                };
                
            }, 2500);
            
            position = position + 1;
        }
    },4500)
}

alterarImagens();