
  vetorCores = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
    'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk',
    'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki',
    'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
    'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey',
    'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod',
    'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender',
    'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
    'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray',
    'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine',
    'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
    'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy',
    'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise',
    'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown',
    'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue',
    'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato',
    'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
  ];

  function obterCoresAleatorias(quantidade) {
    const copiaCores = vetorCores.slice(); 
    const coresAleatorias = [];
  
    for (let i = 0; i < quantidade; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaCores.length);
      const corSelecionada = copiaCores.splice(indiceAleatorio, 1)[0];
      coresAleatorias.push(corSelecionada);
    }
  
    return coresAleatorias;
  }

  function obterCoresAleatorias(quantidade) {
    const copiaCores = vetorCores.slice(); 
    const coresAleatorias = [];
  
    for (let i = 0; i < quantidade; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaCores.length);
      const corSelecionada = copiaCores.splice(indiceAleatorio, 1)[0];
      coresAleatorias.push(corSelecionada);
    }
  
    return coresAleatorias;
  }
  

  function aplicarCoresNosBotoes(cores) {
    for (let i = 1; i <= 10; i++) {
      const botao = document.getElementById(`botao${i}`);
      botao.style.backgroundColor = cores[i - 1];
      
    }
  }

function escolherCorAleatoria(coresAleatorias) {
  const indiceCorEscolhida = Math.floor(Math.random() * coresAleatorias.length);
  const corEscolhida = coresAleatorias[indiceCorEscolhida];
  return corEscolhida;
}

corEscolhida ='';
tentativas = 3;

function compararCores(event) {
  
  const corBotaoClicado = event.target.style.backgroundColor;

  if (corBotaoClicado !== corEscolhida) {
    tentativas--;
    alert('As cores são diferentes. Tentativas restantes: ' + tentativas);
  } else {
    alert('Parabéns! As cores são iguais.');
    document.body.style.backgroundColor = corEscolhida;
    reiniciarJogo();
  }

  if (tentativas === 0) {
    alert('Suas tentativas acabaram. A cor escolhida era: '+ corEscolhida);
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  const coresAleatorias = obterCoresAleatorias(10);
  aplicarCoresNosBotoes(coresAleatorias);
  corEscolhida = escolherCorAleatoria(coresAleatorias);
  tentativas = 3;
}

for (let i = 1; i <= 10; i++) {
  const botao = document.getElementById(`botao${i}`);
  botao.addEventListener('click', compararCores);
}

window.onload = function () {
  const coresAleatorias = obterCoresAleatorias(10);
  aplicarCoresNosBotoes(coresAleatorias);
  corEscolhida = escolherCorAleatoria(coresAleatorias); 
};



