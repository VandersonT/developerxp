//Note: Each quiz must have at least 3 questions.

let quizzes = [
    {
        id:1,
        name:'JavaScript',
        description: 'Teste Agora os seus conhecimentos na linguagem de programação javaScript.',
        img: 'javaScript.jpg',
        questions:[
            {
                question: 'O que “1” + 2 + 4 retorna?',
                options: [
                    '6',
                    '7',
                    '124',
                    '24'
                ],
                rightAnswer: 2
            },
            {
                question: 'O que é NaN?',
                options: [
                    'Not a Name',
                    'Not a Number',
                    'Not a New',
                    'Nenhuma opção acima'
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual seria o resultado de 3 + 2 + ”7 ″?',
                options: [
                    '57',
                    '327',
                    '12',
                    '32'
                ],
                rightAnswer: 0
            },
            {
                question: 'Dentro de qual elemento HTML colocamos o JavaScript?',
                options: [
                    '<javascript>',
                    '<js>',
                    '<script>',
                    '<scripting>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual é a sintaxe correta do JavaScript para alterar o conteúdo do elemento HTML a seguir: <p id = "demo"> Esta é uma demonstração. </p>',
                options: [
                    'document.getElementById("demo").innerHTML = "Hello World"',
                    'document.getElementByName("p").innerHTML = "Hello World"',
                    '#demo.innerHTML = "Hello World"',
                    'document.getElement("p").innerHTMl = "Hello World"'
                ],
                rightAnswer: 0
            },
            {
                question: 'Onde é o lugar correto para inserir um JavaScript?',
                options: [
                    'The <head> section',
                    'The <body> section',
                    'Both the <head> section and the <body> section are correct'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"?',
                options: [
                    '<script href="xxx.js">',
                    '<script name="xxx.js">',
                    '<script src="xxx.js">'
                ],
                rightAnswer: 2
            },
            {
                question: 'Como você escreve "Hello World" em uma caixa de alerta?',
                options: [
                    'alertBox("Hello World")',
                    'alert("Hello World");',
                    'msg("Hello World")',
                    'msgBox("Hello World")'
                ],
                rightAnswer: 1
            },
            {
                question: 'Como você cria uma função em JavaScript?',
                options: [
                    'function myFunction()',
                    'function = myFunction',
                    'function:myFunction',
                    'myFunction()'
                ],
                rightAnswer: 0
            },
            {
                question: 'Como você chama uma função chamada "myFunction"?',
                options: [
                    'call myFunction()',
                    'call function myFunction()',
                    'myFunction',
                    'myFunction()'
                ],
                rightAnswer: 3
            },
            {
                question: 'Como escrever uma instrução IF em JavaScript?',
                options: [
                    'if i = 5',
                    'if(i == 5)',
                    'if i == 5 then',
                    'if i = 5 then'
                ],
                rightAnswer: 1
            },
            {
                question: 'Como escrever uma instrução IF para executar algum código se "i" NÃO for igual a 5?',
                options: [
                    'if(i != 5)',
                    'if i <> 5',
                    'if(i <> 5)',
                    'if i =! 5 then'
                ],
                rightAnswer: 0
            },
            {
                question: 'Como um loop WHILE começa?',
                options: [
                    'while(i <= 10; i++)',
                    'while(i <= 10)',
                    'while i = 1 to 10',
                    'while(let i = 0; i < 10; i++)'
                ],
                rightAnswer: 1
            },
            {
                question: 'Como você pode adicionar um comentário em um JavaScript?',
                options: [
                    '#This is a comment',
                    '<!--This is a comment-->',
                    '"This is a comment"',
                    '//This is a comment'
                ],
                rightAnswer: 3
            },
            {
                question: 'Como inserir um comentário com mais de uma linha?',
                options: [
                    '/*This is a comment*/',
                    '<!--This is a comment-->',
                    '"This is a comment"',
                    '//This is a comment//'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é a maneira correta de escrever um array JavaScript?',
                options: [
                    'var colors = "red","green","blue"',
                    'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                    'var colors = (1:"red", 2:"green",3:"blue")',
                    'var colors = ["red", "green", "blue"]'
                ],
                rightAnswer: 3
            },
            {
                question: 'Como você arredonda o número 7,25 para o inteiro mais próximo?',
                options: [
                    'math.round(7.25)',
                    'round(7.25)',
                    'Math.rnd(7.25)',
                    'rnd(7.25)'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é a sintaxe correta do JavaScript para abrir uma nova janela chamada "w2"?',
                options: [
                    'w2 = window.new("http://www.w3schools.com")',
                    'w2 = window.open("http://www.w3schools.com")',
                    'w2 = window.window("http://www.w3schools.com")',
                    'w2 = window.newWindow("http://www.w3schools.com")'
                ],
                rightAnswer: 1
            },
            {
                question: 'JavaScript é igual a Java.',
                options: [
                    'Falso',
                    'Verdade'
                ],
                rightAnswer: 0
            },
            {
                question: 'Como você pode detectar o nome do navegador do cliente?',
                options: [
                    'navigator.appName',
                    'client.navName',
                    'browser.name'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual evento ocorre quando o usuário clica em um elemento HTML?',
                options: [
                    'onmouseover',
                    'onclick',
                    'onchange',
                    'onmouseclick'
                ],
                rightAnswer: 1
            },
            {
                question: 'Como você declara uma variável JavaScript?',
                options: [
                    'v carName;',
                    'new var carName',
                    'var carName',
                    'variable carName'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual operador é usado para atribuir um valor a uma variável?',
                options: [
                    'x',
                    '==',
                    '==',
                    '='
                ],
                rightAnswer: 3
            },
            {
                question: 'O que o código a seguir retornará: Boolean (10> 9)',
                options: [
                    'true',
                    'NaN',
                    'false'
                ],
                rightAnswer: 0
            },
            {
                question: 'O JavaScript diferencia maiúsculas de minúsculas?',
                options: [
                    'true',
                    'false'
                ],
                rightAnswer: 0
            },
            {
                question: 'Como você encontra o número com o maior valor de x e y?',
                options: [
                    'ceil(x,y)',
                    'Math.max(x,y)',
                    'top(x,y)',
                    'Math.ceil(x,y)'
                ],
                rightAnswer: 1
            }
        ]
    },
    {
        id:2,
        name:'Html',
        description: 'Teste Agora os seus conhecimentos na linguagem de marcação html.',
        img: 'html.jpg',
        questions:[
            {
                question: 'O que quer dizer a sigla HTML?',
                options: [
                    'Hyper Text Markup Language',
                    'Não é uma sigla e sim o próprio nome',
                    'Hyper Text Make Language',
                    'Host Text Make Language'
                ],
                rightAnswer: 0
            },
            {
                question: 'Html é uma linguagem de...',
                options: [
                    'Estilização',
                    'Programação',
                    'Exclusão',
                    'Marcação'
                ],
                rightAnswer: 3
            },
            {
                question: 'Para criar um link entre uma página e outra, usa-se a tag',
                options: [
                    '<href a="pagina.html"></a>',
                    '<a="pagina.html"></a>',
                    '<a href="pagina.html"></a>',
                    '<a href=pagina_html></a>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Como deve ser declarado um título da página?',
                options: [
                    '<title title="titulo">',
                    '<title>Título aqui</title>',
                    '<html title="Título aqui"></html>',
                    '<pageTitle>Titulo</pageTitle>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Em uma página HTML, para que é utilizada a tag <a></a>?',
                options: [
                    'Inserção de imagem',
                    'Inserção de link.',
                    'Definição de parágrafo.',
                    'Definição de tabela.'
                ],
                rightAnswer: 1
            },
            {
                question: 'No contexto do HTML, a sintaxe correta para um comentário, delimitando um trecho que NÃO deve ser exibido pelo browser, é:',
                options: [
                    '<-- Texto do comentário --> ',
                    '!--Texto do comentário >',
                    '<-Texto do comentário -> ',
                    '<!--Texto do comentário -->'
                ],
                rightAnswer: 3
            },
            {
                question: 'Quem está criando os padrões da Web?',
                options: [
                    'The world Wide Web Consortium',
                    'Google',
                    'Mozilla',
                    'Microsoft'
                ],
                rightAnswer: 0
            },
            {
                question: 'Escolha o elemento HTML correto para o título maior:',
                options: [
                    '<head>',
                    '<h6>',
                    '<h1>',
                    '<heading>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual é o elemento HTML correto para inserir uma quebra de linha?',
                options: [
                    '<break>',
                    '<br>',
                    '<hr>',
                    '<lb>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual é o HTML correto para adicionar uma cor de fundo?',
                options: [
                    '<background>yellow</background>',
                    '<body bg="yellow"></body>',
                    '<body style="background-color:yellow"></body>',
                    '<body background="yellow"></body>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual caractere é usado para indicar uma tag final?',
                options: [
                    '*',
                    '/',
                    '<',
                    '>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Como você pode abrir um link em uma nova guia / janela do navegador?',
                options: [
                    '<a href="url" new>',
                    '<a href="url" target="new">',
                    '<a href="url" target="_blank">',
                    '<a href="url" target="new">'
                ],
                rightAnswer: 2
            },
            {
                question: 'Quais desses elementos são todos elementos <table>?',
                options: [
                    '<table><tr><tt>',
                    '<table><tr><td>',
                    '<table><head><ifoot>',
                    '<thead><body><tr>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual é o HTML correto para marcar uma caixa de seleção?',
                options: [
                    '<input type="checkbox">',
                    '<check>',
                    '<checkbox>',
                    '<input type="check">'
                ],
                rightAnswer: 0
            },
            {
                question: 'Como você pode fazer uma lista numerada?',
                options: [
                    '<list>',
                    '<dl>',
                    '<ul>',
                    '<ol>'
                ],
                rightAnswer: 3
            },
            {
                question: 'Qual é o HTML correto para criar um campo de entrada de texto?',
                options: [
                    '<input type="textfield">',
                    '<input type="text">',
                    '<input type="field">',
                    '<textinput type="text">'
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual é o HTML correto para fazer uma lista suspensa?',
                options: [
                    '<select>',
                    'input type="dropdown"',
                    '<list>',
                    '<input type="list">'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é o HTML correto para criar uma área de texto?',
                options: [
                    '<textarea>',
                    'input type="textbox">',
                    'input type="textarea">',
                    '<textField>'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é o HTML correto para inserir uma imagem?',
                options: [
                    '<img href="imagem.jpg" alt="myImage">',
                    '<img alt="myImage">image.jpg</img>',
                    '<image src="image.jpg" alt="myImage"></img>',
                    '<image href="image.jpg" alt="myImage"></image>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual é o HTML correto para inserir uma imagem de fundo?',
                options: [
                    '<background bg="background.jpg">',
                    '<background>background.jpg</background>',
                    '<body style="background-image:url(background.jpg)">',
                    '<background bg="true">background.jpg</background>'
                ],
                rightAnswer: 2
            },
            {
                question: 'Um <iframe> é usado para exibir uma página da web dentro de uma página da web.',
                options: [
                    'true',
                    'Não existe <iframe>',
                    'false',
                    '<iframe> é para mostrar graficos'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual elemento HTML define o título de um documento?',
                options: [
                    '<meta>',
                    '<title>',
                    '<head>',
                    '<pageTitle>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual atributo HTML especifica um texto alternativo para uma imagem, se a imagem não puder ser exibida?',
                options: [
                    'title',
                    'src',
                    'alt',
                    'longdesc'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual doctype é correto para HTML5?',
                options: [
                    '<!DOCTYPE HTML5>',
                    '<!DOCTYPE html>',
                    '<DOCTYPE html>',
                    '<DOCTYPE HTML5>',
                ],
                rightAnswer: 1
            },
            {
                question: 'Qual elemento HTML é usado para especificar um rodapé para um documento ou seção?',
                options: [
                    '<footer>',
                    '<bottom>',
                    '<section>',
                    '<article>',
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é o elemento HTML correto para reproduzir arquivos de áudio?',
                options: [
                    '<sound>',
                    '<aud>',
                    '<mp3>',
                    '<audio>'
                ],
                rightAnswer: 3
            },
            {
                question: 'O atributo global HTML, "contenteditable" é usado para:',
                options: [
                    'Atualiza o conteudo do servidor',
                    'Define se o coteudo fica visivel ou não',
                    'Define se o conteudo é editavel ou não',
                    'Somente garante que o conteudo nunca seja edivel'
                ],
                rightAnswer: 2
            },
            {
                question: 'Em HTML, qual atributo é usado para especificar que um campo de entrada deve ser preenchido?',
                options: [
                    'formvalidate',
                    'required',
                    'validate',
                    'isRequired'
                ],
                rightAnswer: 1
            },
            {
                question: 'Escolha o elemento HTML correto para definir o texto importante',
                options: [
                    '<i>',
                    '<strong>',
                    '<b>',
                    '<important>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Escolha o elemento HTML correto para definir o texto enfatizado',
                options: [
                    '<br>',
                    '<italic>',
                    '<i>',
                    '<em>'
                ],
                rightAnswer: 3
            },
            {
                question: 'Os elementos embutidos são normalmente exibidos sem iniciar uma nova linha.',
                options: [
                    'Verdade',
                    'Falso'
                ],
                rightAnswer: 0
            },
            {
                question: 'Os comentários HTML começam com <! - e terminam com ->',
                options: [
                    'Verdade',
                    'Falso'
                ],
                rightAnswer: 0
            },
            {
                question: 'Os elementos do bloco são normalmente exibidos sem iniciar uma nova linha.',
                options: [
                    'Verdade',
                    'Falso'
                ],
                rightAnswer: 1
            },
            {
                question: 'Em HTML, você pode incorporar elementos SVG diretamente em uma página HTML.',
                options: [
                    'Verdade',
                    'Falso'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual é o elemento HTML correto para reproduzir arquivos de vídeo?',
                options: [
                    '<filme>',
                    '<video>',
                    '<media>'
                ],
                rightAnswer: 1
            },
            {
                question: 'Em HTML, onblur e onfocus são:',
                options: [
                    'Atributo de estilo',
                    'Elemento Html',
                    'Atributo do evento'
                ],
                rightAnswer: 2
            },
            {
                question: 'Os gráficos definidos por SVG estão em qual formato?',
                options: [
                    'Html',
                    'Xml',
                    'Css',
                    'Svg'
                ],
                rightAnswer: 1
            },
            {
                question: 'O elemento HTML <canvas> é usado para:',
                options: [
                    'Criar elementos arrastaveis',
                    'Manipular dados em MySQL',
                    'Exibir registros de banco de dados',
                    'Desenhar gráficos'
                ],
                rightAnswer: 3
            },
            {
                question: 'Qual elemento HTML é usado para exibir uma medida escalar dentro de um intervalo?',
                options: [
                    '<measure>',
                    '<range>',
                    '<gauge>',
                    '<meter>'
                ],
                rightAnswer: 3
            },
            {
                question: 'Qual elemento HTML define os links de navegação?',
                options: [
                    '<nav>',
                    '<navegar>',
                    '<navigation>',
                    '<na>'
                ],
                rightAnswer: 0
            },
            {
                question: 'Em HTML, o que o elemento <aside> define?',
                options: [
                    'Uma lista de navegação a ser mostrada no lado esquerdo da página',
                    'O conjunto de caracteres ASCII; para enviar informações entre computadores na internet',
                    'Conteúdo além do contéudo da página'
                ],
                rightAnswer: 2
            },
            {
                question: 'Qual elemento HTML é usado para especificar um cabeçalho para um documento ou seção?',
                options: [
                    '<header>',
                    '<section>',
                    '<head>',
                    '<h1>'
                ],
                rightAnswer: 0
            },
            {
                question: 'Qual tipo de entrada define um controle deslizante?',
                options: [
                    'controls',
                    'range',
                    'search',
                    'slider'
                ],
                rightAnswer: 1
            }
        ]
    },
    {
        id:3,
        name:'Php',
        description: 'Teste Agora os seus conhecimentos na linguagem de programação php.',
        img: 'php.png',
        questions:[
            {
                question: 'O que quer dizer a sigla php?',
                options: [
                    'Hyper Text Markup Language',
                    'Não é uma sigla e sim o próprio nome',
                    'Hyper Text Make Language',
                    'Host Text Make Language'
                ],
                rightAnswer: 0
            },
        ]
    },
    {
        id:4,
        name:'Css',
        description: 'Teste Agora os seus conhecimentos em css.',
        img: 'css.png',
        questions:[
            {
                question: 'O que quer dizer a sigla css?',
                options: [
                    'Hyper Text Markup Language',
                    'Não é uma sigla e sim o próprio nome',
                    'Hyper Text Make Language',
                    'Host Text Make Language'
                ],
                rightAnswer: 0
            },
        ]
    },
    {
        id:5,
        name:'Sass',
        description: 'Teste Agora os seus conhecimentos em css.',
        img: 'sass.png',
        questions:[
            {
                question: 'O que quer dizer a sigla css?',
                options: [
                    'Hyper Text Markup Language',
                    'Não é uma sigla e sim o próprio nome',
                    'Hyper Text Make Language',
                    'Host Text Make Language'
                ],
                rightAnswer: 0
            },
        ]
    },
];