function Jogo(nome, desenvolvedora) {
    this.nome = nome;
    this.desenvolvedora = desenvolvedora;
    
    this.iniciar = function() {
      console.log(`Iniciando o jogo ${this.nome}...`);
    }
    
    this.encerrar = function() {
      console.log(`Encerrando o jogo ${this.nome}...`);
    }
  }

  function JogoDeTiro(nome, desenvolvedora, multiplayer) {
    Jogo.call(this, nome, desenvolvedora);
    
    this.multiplayer = multiplayer;
    
    this.iniciar = function() {
      console.log(`Iniciando o jogo de tiro ${this.nome}...`);
    }
    
    this.encerrar = function() {
      console.log(`Encerrando o jogo de tiro ${this.nome}...`);
    }
    
    this.modoMultiplayer = function() {
      console.log(`O jogo ${this.nome} possui modo multiplayer: ${this.multiplayer}`);
    }
  }
  
  function JogoDeAventura(nome, desenvolvedora, mundoAberto) {
    Jogo.call(this, nome, desenvolvedora);
    
    this.mundoAberto = mundoAberto;
    
    this.iniciar = function() {
      console.log(`Iniciando o jogo de aventura ${this.nome}...`);
    }
    
    this.encerrar = function() {
      console.log(`Encerrando o jogo de aventura ${this.nome}...`);
    }
    
    this.mundoAberto = function() {
      console.log(`O jogo ${this.nome} possui mundo aberto: ${this.mundoAberto}`);
    }
  }
  
  const counterStrike = new JogoDeTiro("Counter-Strike", "Bungie", true);
  counterStrike.iniciar();
  counterStrike.modoMultiplayer();
  
  const uncharted = new JogoDeAventura("Uncharted", "Naughty Dog", true);
  uncharted.iniciar();
  uncharted.mundoAberto();
  
  const residentEvil = new Jogo("Resident Evil", "Capcom");
  residentEvil.iniciar();