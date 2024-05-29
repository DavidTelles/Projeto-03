const btn = document.querySelector('#btn');

btn.addEventListener("click", function(e) {
    const nome = document.querySelector('#nome-evento');
    const nomeValue = nome.value;
    console.log("Nome:", nomeValue);

    const link = document.querySelector('#link-evento');
    const linkValue = link.value;
    console.log("Link:", linkValue);

    const zap = document.querySelector('#zap-evento');
    const zapValue = zap.value;
    console.log("Zap:", zapValue);

    const extra = document.querySelector('#extra-evento');
    const extraValue = extra.value;
    console.log("Extra:", extraValue);

    const categoria = document.querySelector('#categoria-evento');
    const categoriaValue = categoria.value;
    console.log("Categoria:", categoriaValue);

    const email = document.querySelector('#email-evento');
    const emailValue = email.value;
    console.log("Email:", emailValue);

    const password = document.querySelector('#password-evento');
    const passwordValue = password.value;
    console.log("Password:", passwordValue);

    const data = document.querySelector('#data-evento');
    const dataValue = data.value;
    console.log("Data:", dataValue);

    const hora = document.querySelector('#hora-evento');
    const horaValue = hora.value;
    console.log("Hora:", horaValue);

    const hora1 = document.querySelector('#hora1-evento');
    const hora1Value = hora1.value;
    console.log("Hora1:", hora1Value);
});
