const estados = [
    {
        sigla: '',
        nome: 'Selecione'
    }, {
        sigla: 'AC',
        nome: 'Acre'
    }, {
        sigla: 'AL',
        nome: 'Alagoas'
    }, {
        sigla: 'AP',
        nome: 'Amap\u00e1'
    }, {
        sigla: 'AM',
        nome: 'Amazonas'
    }, {
        sigla: 'BA',
        nome: 'Bahia'
    }, {
        sigla: 'CE',
        nome: 'Cear\u00e1'
    }, {
        sigla: 'DF',
        nome: 'Distrito Federal'
    }, {
        sigla: 'ES',
        nome: 'Esp\u00edrito Santo'
    }, {
        sigla: 'GO',
        nome: 'Goi\u00e1s'
    }, {
        sigla: 'MA',
        nome: 'Maranh\u00e3o'
    }, {
        sigla: 'MT',
        nome: 'Mato Grosso'
    }, {
        sigla: 'MS',
        nome: 'Mato Grosso do Sul'
    }, {
        sigla: 'MG',
        nome: 'Minas Gerais'
    }, {
        sigla: 'PA',
        nome: 'Par\u00e1'
    }, {
        sigla: 'PB',
        nome: 'Para\u00edba'
    }, {
        sigla: 'PR',
        nome: 'Paran\u00e1'
    }, {
        sigla: 'PE',
        nome: 'Pernambuco'
    }, {
        sigla: 'PI',
        nome: 'Piau\u00ed'
    }, {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    }, {
        sigla: 'RN',
        nome: 'Rio Grande do Norte'
    }, {
        sigla: 'RS',
        nome: 'Rio Grande do Sul'
    }, {
        sigla: 'RO',
        nome: 'Rond\u00f4nia'
    }, {
        sigla: 'RR',
        nome: 'Roraima'
    }, {
        sigla: 'SC',
        nome: 'Santa Catarina'
    }, {
        sigla: 'SP',
        nome: 'S\u00e3o Paulo'
    }, {
        sigla: 'SE',
        nome: 'Sergipe'
    }, {
        sigla: 'TO',
        nome: 'Tocantins'
    }
];

function gerarEstado(){
    console.log('ma oi');
    var estado = document.getElementById('state');
    var json_estado = estados;
    console.log(estados);
    console.log(json_estado);
    estado.innerHTML = '';
    for(var i = 0; i < json_estado.length; i++){
        let estado2 = document.createElement('option');
        estado2.text = estados.nome;
        estado2.value = estados.sigla;
        estado.appendChild(estado2);
    }
    //estado.innerHTML = estado2;
    console.log('saiu!');
}