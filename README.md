<h1 align="center"> 🎧 Arpeggio - Comparador de streaming de músicas 🎧 </h1>

<div align="center">

![Logo do Arpeggio](https://github.com/FabioLiriodev/Arpeggio/assets/140852220/f0cebc80-3024-4896-9778-94afe7eaf6ff)
</div>

<h2> 📖 Índice 📖 </h2>

- Descrição do projeto

- Estilização do projeto

- Tecnologias
  
- Status do projeto

- Funcionalidades

- Como usar o aplicativo?

- Desafios encontrados durante a execução do projeto
  
- Pessoas desenvolvedoras do projeto

- Perspectivas futuras



<h2> 🖋️ Descrição do projeto 🖋️ </h2>

>>**Arpeggio** é um aplicativo de comparação de streaming de músicas em que o usuário pode analisar previamente o número de álbuns (singles e EPs) de seu artista banda, ou podcast favoritos antes de fazer a assinatura de um serviço de streaming musical.Este aplicativo funciona usando as APIs dos principais serviços de streaming de música disponíveis (Spotify, Deezer, Tidal e Youtube Music).</p>

<h2> 🖌️  Estilização do projeto 🖌️ </h2>

Inicialmente, o projeto foi prototipado no Figma considerando o desenvolvimento de 3 frames para cada uma das páginas do HTML. As dimensões usadas na prototipagem foram:

- Telas pequenas (mobile): 360px de largura;

- Telas médias (tablet): 768px de largura;

- Telas grandes (desktop): 1440px de largura;

O protótipo do Arpeggio pode ser acessado no Figma através do link: 

<h3> 	💭 Concepção do produto 	💭 </h3>

O Arpeggio é um aplicativo que tem como principal característica a modernidade derivada do rápido avanço tecnológico da indústria musical nos últimos 40 anos. Contudo, o avanço tecnológico experimentado em muitos segmentos gerou uma grande dificuldade de seleção de serviços de streaming de música justamente pela diversidade de opções disponíveis para consumo de músicas e podcasts.

Tendo em vista este cenário, o desenvolvedor optou por escolher uma temática futurística relacionada à cultura cyberpunk como pode ser observada em clássicos do cinema como o filme Blade Runner, ou em gêneros musicais como o synthwave, marcados por músicas futurísticas com sintetizadores.

<h4> 🤔 Logotipo 🤔 </h4>

O logotipo do Arpeggio foi desenvolvido no aplicativo Canva através de elementos previamente disponíveis na biblioteca do aplicativo. O logotipo foi idealizado para que o produto tivesse a imagem de um seletor de música, diferente de um reprodutor musical. Dessa maneira, a nota musical representa seu tema principal e o círculo tracejado ao fundo remete a capa de álbuns e playlists do estilo synthwave disponíveis no Spotify, como representado na figura a seguir.

<div align="center">

![synthwave](https://github.com/user-attachments/assets/27d18740-578a-4eca-adb3-e48dc929e2dd)


</div>

<h4> 🤔 Paleta de cores 🤔 </h4>

A paleta de cores selecionada para o projeto foi obtida com o auxílio do site https://coolors.co/, mas cada cor foi individualmente ponderada pelo desenvolvedor Front-End. Esta paleta de cores pode ser observada na figura abaixo.

<picture>![Figura 1.Paleta de cores do Arpeggio](https://github.com/user-attachments/assets/bd7f6157-c786-44da-a533-82af1a022ecd)</picture>

É importante reforçar que a paleta de cores envolve a seleção de cores mais frias como roxo e rosa, mas em tons mais fortes o que está de acordo com a referência que no caso é a iluminação das cidades cyberpunk com letreiros de neon, tanto com cores frias quanto cores quentes em tons mais fortes. Também foram usadas cores mais tradicionais como tons de cinza, preto e branco para completar a paleta de cores.

<h4> 🤔 Tipografia 🤔 </h4>

Com o objetivo de transmitir uma imagem mais futurística foi feita uma varredura de possibilidades de tipografias que representassem fontes mais modernas, porém com uma alta legibilidade, característica fundamental sobretudo em telas menores como dispositivos mobile. O ChatGPT foi usado como ferramenta para sugerir estilos de fontes possíveis.

Após a varredura, o desenvolvedor analisou criteriosamente os dados obtidos pelo ChatGPT e selecionou as seguintes fontes para manter a identidade futurística cyberpunk relacionada ao Arpeggio:

- Fonte dos títulos: **"Roboto Condensed", sans-serif**;
- Fonte dos textos: **"Lexend", sans-serif**;

As demonstrações das tipografias podem ser visualizadas na imagem abaixo:

![image](https://github.com/user-attachments/assets/e0449f26-242e-4a06-be8d-41b94eaeb21d)

![image](https://github.com/user-attachments/assets/34a38283-157e-4ca3-b3d4-e5ec5a67ea8b)


<h4> 🤔 Imagens 🤔 </h4>

As imagens usadas no projeto foram obtidas através de engenharia de prompt com uso das Inteligências Artificiais Gencraft e Microsoft Copilot. Todas as imagens seguem a temática cyberpunk com cores de fundo que remetem a paleta de cores selecionada pelo desenvolvedor. 

Primeiramente, as imagens foram geradas em resoluções de 1024px x 1024px e foram posteriormente convertidas em dimensões mais adequadas para cada tamanho de tela, considerando os breakpoints principais. A conversão das imagens foi executada no site https://nsimage.brosteins.com/ .

<h2> 🚀 Tecnologias 🚀</h2>

<div>

<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS-blue?&style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/OpenAI-white?style=for-the-badge&logo=openai&logoColor=black">
<img src="https://img.shields.io/badge/Figma-gray?style=for-the-badge&logo=figma&logoColor=white">
  
</div>

<h2> 🚧 Status do projeto 🚧 </h2>

<div>
  
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
  
</div>

<h2> 🎵 Funcionalidades 🎵 </h2>

:heavy_check_mark: Busca seletiva de artistas, bandas ou podcasts favoritos do usuário através do retorno das APIs dos serviços de streaming musical disponíveis.

:heavy_check_mark: Filtro de respostas baseados nos critérios de localidade (Brasil ou Estados Unidos) e tipo de arquivos musicais (artistas ou podcasts).

:heavy_check_mark: Retorno das requisições das APIs em tela para que o usuário identifique os resultados da busca.

:heavy_check_mark: Tratamento de erros relacionados ao retorno das requisições via API.

:heavy_check_mark: Implementação de responsividade para os principais tamanhos de tela e seus respectivos breakpoints (em execução).


<h2> Como usar o aplicativo? 💨 </h2>

Ao acessar a página principal do aplicativo, o usuário poderá clicar no link do botão da primeira sessão da página do aplicativo para acessar a página da ferramenta. O mesmo procedimento pode ser feito pela navbar da versão para telas acima de 768px, ou pelo link presente no menu hambúrguer em resoluções de tela inferiores a 768px.

Uma vez na página da ferramenta, o usuário terá a seguinte tela:

<div align="center">

![image](https://github.com/user-attachments/assets/fb089e7c-a714-4957-9bc7-12e40105632a)
</div>

No primeiro input, o usuário deve digitar o nome da sua banda, artista ou podcast favorito, sendo obrigatório o usuário digitar um nome no campo, pois caso contrário o aplicativo não retornará resposta.

Os inputs do tipo rádio (tipo e região) deverão ser assinalados pelo usuário para que a busca funcione adequadamente. Após o usuário preencher as informações, basta clicar no botão Buscar e aguardar o resultado da busca.

Na versão mobile, o resultado será exibido abaixo do formulário de busca e nas versões de tablet e desktop o resultado será exibido ao lado do formulário de busca.

<h2> 🧗‍♂️ Desafios encontrados na execução do projeto 🧗‍♂️ </h2>

Este foi o primeiro projeto real que tive a oportunidade de desenvolver como desenvolvedor Front-end. Antes, só havia executado projetos guiados nos cursos da Escola de Tecnologia da Alura e alguns challenges que me trouxeram um panorama um pouco mais real do que é o desenvolvimento Front-end.

Certamente, o maior desafio existente no desenvolvimento do Arpeggio foi na integração entre o Back-end e o Front-end através do uso das APIs de cada serviço de streaming musical. No início, tive dificuldades com Javascript, pois ainda não havia aprofundado meus estudos nesta linguagem de programação. Depois de algum tempo de estudo e usando ferramentas de Inteligência Artificial para me ajudar a entender a lógica de programação mais avançada, consegui vencer a barreira e executar a integração, de modo a exibir os resultados provenientes no JSON no aplicativo.


<h2> 💻 Pessoas desenvolvedoras do projeto 💻</h2>

[<img src="https://avatars.githubusercontent.com/u/45768087?v=4" width=100><br><sub>Felipe Mattos</sub>](https://github.com/fabramattos) 

[<img src="https://avatars.githubusercontent.com/u/140852220?s=400&u=c03075cdb745198fe290f16fd7a345907cae4c89&v=4" width=100><br><sub>Fábio Lirio</sub>](https://github.com/FabioLiriodev)

<h2> 🔭 Perspectivas futuras 🔭 </h2>

O desenvolvimento do Arpeggio contribuiu de forma direta para o aprendizado de HTML, CSS e JS, principalmente no sentido de resolução de desafios ligados a lógica de programação. Além disso, o projeto proporcionou uma ampliação do potencial criativo que todo desenvolvedor Front-end deve apresentar.

Como perspectivas futuras, penso que o projeto trouxe novas ideias de aplicativos que resultem em soluções tecnológicas interessantes e que contribuam para minha formação na área de programação e desenvolvimento Front-end.

