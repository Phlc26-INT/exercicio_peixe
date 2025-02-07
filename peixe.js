
// Esse bloco vai definir as configurações básicas do jogo. 
var config = {
    type: Phaser.AUTO, // Significa que o navegador irá definir o renderizador da página web.
    //Essas duas linhas abaixo são as dimensões da tela do jogo.
    width: 1920,   
    height: 945,

    // Essa parte to código vai rodar a cena do jogo, separada em seus diferentes ciclos.
    scene: {
        preload: preload, 
        create: create,
        update: update,
    }
    
};

//Essa linha vai criar a instância do jogo Phaser utilizando as configurações que criamos.
var game = new Phaser.Game(config);

//Cria a variável da tartaruga que logo vai receber o sprite.
var tartaruguinha;

// Essa função vai fazer o carregamento dos assets do jogo.
function preload () {
    this.load.image('mar', 'assets/bg_azul-escuro_2.png'); //Aqui a o mar será carregado
    this.load.image('logo', 'assets/logo-inteli_branco.png'); //Aqui a logo do inteli será carregada
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png'); //Aqui a tartaruga será carregada
    this.load.image('concha', 'assets/concha.png');//Aqui a tartaruga será carregada
    this.load.image('alga', 'assets/alga.png');//Aqui a alga será carregada
    this.load.image('crustaceo', 'assets/crustaceo.png');//Aqui o crustaceo será carregado
}
// Essa função vai "pegar" o que foi pré-carregado e colocar na tela do jogo.
function create () {
    this.add.image(959, 500, 'mar'); //Aqui o mar será adicionado 
    this.add.image(960, 100, 'logo'); //Aqui a logo do inteli será adicionada
    this.add.image(40, 850, 'concha');//Aqui está a concha sendo adicionada
    this.add.image(200,600, 'alga');//Aqui está a alga sendo adicionada
    this.add.image(195,860, 'crustaceo');//Aqui está o crustaceo sendo adicionado
    tartaruguinha = this.add.image(400, 300, 'tartaruga');  //Aqui a tartaruga será adicionada
}

// Essa função vai fazer os updates dinâmicos do que vai acontecer com os elementos carregados na tela do jogo.
function update () {
    tartaruguinha.x = this.input.x; //Atribui a posição no eixo X da tartaruga à posição do eixo x do cursor.
    tartaruguinha.y = this.input.y; //Atribui a posição no eixo y da tartaruga à posição do eixo y do cursor.
   
    //Esse bloco é uma condicional para a tartaruga virar para direita ou para a esquerda assim que o centro definido do sprite passar da metade da tela do jogo (width/2).
    if (this.input.x > 960){
        tartaruguinha.setFlip(true);
    }
    else{
        tartaruguinha.setFlip(false);
    }

}
