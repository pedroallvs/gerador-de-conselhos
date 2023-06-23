const botao = document.getElementById('botaoDado')
const numeroConselho = document.getElementById('campo_id')
const campoConselho = document.getElementById('campo_conselho')
botao.addEventListener('click', geradorDeConselho)
async function geradorDeConselho() {
    const urlApi = await fetch('https://api.adviceslip.com/advice')
    const respostaApi = await urlApi.json()
    const conselhoTexto = await respostaApi.slip.advice
    const conselhoId = await respostaApi.slip.id
    numeroConselho.innerHTML = `<P>ADVICE # ${conselhoId}</P>`
    campoConselho.innerHTML = `<P>${conselhoTexto}</P>`
}
geradorDeConselho()


