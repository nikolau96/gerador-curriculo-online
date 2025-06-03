function gerarCurriculo(){
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let ddd = document.getElementById('ddd').value;
    let phone = document.getElementById('phone').value;
    let telefone = mascaraTelefone(ddd, phone);
    let cep = document.getElementById('postal-code').value;
    let cep2 = mascaraCep(cep);
    let endereco = document.getElementById('address').value;
    let numero = document.getElementById('number-address').value;
    let complemento = document.getElementById('number2').value;
    let bairro = document.getElementById('area').value;
    let cidade = document.getElementById('city').value;
    let uf = document.getElementById('state').value;
    let linkedin = document.getElementById('linkedin').value;
    let site = document.getElementById('site').value;
    let portfolio = document.getElementById('portfolio').value;
    let resumo = document.getElementById('resumo').value;
    let objetivo = document.getElementById('objetivo').value;
    let faculdade = document.getElementById('faculdade').value;
    let cursos = document.getElementById('certificacao').value;
    let habilidades = document.getElementById('habilidades').value;
    let idiomas = document.getElementById('idiomas').value;
    let experiencia = document.getElementById('xp').value;
    let info_complementar = document.getElementById('extras').value;
    let array_curriculo = [nome, email, telefone, cep2, endereco, numero, complemento, bairro, cidade, uf, linkedin, site, portfolio, resumo, objetivo, faculdade, cursos, habilidades, idiomas, experiencia, info_complementar];
    console.log('Dados: ', array_curriculo);
    for(var i = 0; i < array_curriculo.length; i++){
        if(i === ""){
            alert('Atenção! Preencha todos os campos');
            return;
        }
    }
}

function mascaraTelefone(codigo, numero){
    if(numero.length > 9 && numero.length < 8){
        alert('Erro! N\u00famero de telefone inv\u00e1lido');
    }
    if(codigo.length > 3){
        alert('Erro! DDD inv\u00e1lido');
    }
    if(numero.length == 8){
        const n_tel1 = numero.slice(0,4);
        const n_tel2 = numero.slice(4,8);
        const telefone = `(${codigo}) ${n_tel1}-${n_tel2}`;
        return telefone;
    }else{
        const n_tel1 = numero.slice(0,5);
        const n_tel2 = numero.slice(5,9);
        const telefone = `(${codigo}) ${n_tel1}-${n_tel2}`;
        return telefone;
    }
}

function mascaraCep(codigo){
    if(codigo.length < 8 && codigo.length > 8){
        alert('Erro! CEP inv\u00e1lido');
    }
    const cep_p1 = codigo.slice(0,5);
    const cep_p2 = codigo.slice(5,8);
    const cep2 = `${cep_p1}-${cep_p2}`;
    return cep2;
}