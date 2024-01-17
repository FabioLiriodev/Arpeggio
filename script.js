async function realizarBusca() {
    var buscaInput = document.getElementById('busca-input');
    var artistaNome = buscaInput.value;

    try {
      // Construa a URL com o nome do artista
      var url = `https://arpejo.up.railway.app/v1/artista?nome=${encodeURIComponent(artistaNome)}`;

      // Faça uma solicitação fetch para a URL
      var response = await fetch(url);

      // Verifique se a solicitação foi bem-sucedida (código de status 200)
      if (response.ok) {
        // Converte a resposta para JSON
        var json = await response.json();

        // Exibe os resultados na tela
        exibirResultados(json);

        buscaInput.value = '';

      } else {
        // Exibe um erro se a resposta não for bem-sucedida
        console.error('Erro ao realizar a busca:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na solicitação fetch:', error.message);
    }
       
  }

  function exibirResultados(json) {
    var errosDiv = document.getElementById('erros');
    var streamingContainers = document.getElementById('streaming-containers');
    document.getElementById('streaming-containers').style.display = 'flex'
        
    errosDiv.innerHTML = '';
    streamingContainers.innerHTML = '';

    if (json.erroApi) {
      // Se houver um erro na API, exiba uma mensagem de alerta
      alert(json.erroApi);
    }
    else if (json.resultados.length > 0 || json.erros.length > 0) {
      // Se houver resultados ou erros, mostre-os juntos
      streamingContainers.innerHTML += '<h3 class="artista-titulo">O melhor streaming para ouvir o(a) artista é: </h3>';
            
      json.resultados.forEach(function(resultado) {
        var streamingContainer = document.createElement('div');
            streamingContainer.classList.add('streaming-container');
            
                       
            var imagemStreaming = document.createElement('img');
            imagemStreaming.src = `img/${resultado.streaming}.png`; // Assumindo que você tem imagens com nomes correspondentes aos nomes dos streamings
            imagemStreaming.alt = `${resultado.streaming} Logo`;
            imagemStreaming.classList.add('streaming-imagem');

            var infoContainer = document.createElement('div');
            infoContainer.classList.add('info-container');

            var streamingInfo = document.createElement('p');
        streamingInfo.classList.add('streaming-info');
        
        if (resultado.erro) {
          // Se houver erro, exibe a mensagem de erro
          streamingInfo.textContent = `erro: ${resultado.erro}`;
        } else {
          // Senão, exibe o número de álbuns
          if (resultado.albuns > 1) {
            streamingInfo.textContent = `${resultado.albuns} álbuns`;
          }
          else {
          streamingInfo.textContent = `${resultado.albuns} álbum`;
        }
      }
        // Adiciona elementos à estrutura HTML
        infoContainer.appendChild(imagemStreaming);
        infoContainer.appendChild(streamingInfo);
        streamingContainer.appendChild(infoContainer);

        streamingContainers.appendChild(streamingContainer);
      });

      json.erros.forEach(function(erro) {
        streamingContainers.innerHTML += `<div class="streaming-container"><p class="erro">${erro.streaming}: ${erro.erro}</p></div>`;
      });
    } else {
      // Se não houver resultados nem erros, mostre uma mensagem
      errosDiv.innerHTML = '<p class="erro">Nenhum resultado encontrado.</p>';
    }
}