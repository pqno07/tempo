


const key = "0aec3b50c189832b0a4d72644d0eb5ee"

function onclickbtn() {
    const cidade = document.querySelector(".busca").value

    BuscarCidade(cidade)
}

async function BuscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    MostrarDados(dados)

}

function MostrarDados(dados){
   
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".previsaotxt").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Humidade " + dados.main.humidity + "%"
    document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

