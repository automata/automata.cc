<carnaval>

voltando a alguns delírios e realidades...

Carnaval é um desejo de tornar a caixa preta da tecnologia um tanto mais fluida. o natural não é uma caixa. não tem cantos, de tanto rolar.

a volta de algo mais orgânico na rigidez do metal.

combinação de mídias, várias delas, código, imagem, filme, tabela, linha do tempo, texto, caractere, palavra, frase, parágrafo.

posso começar a escrever código agora, em um repositório qualquer chamado carnaval. mas do que adianta?

quero escrever quando tenho vontade e quero que outros possam escrever, quando a tenham, a vontade.

penso então que precisamos de um editor dessas mídias, que seja colaborativo, aberto, desnudo, que permita questionar "o que é o caractere?".

algo como hotglue.me

algo como meemoo.

algo como vivace.

algo como pad.

esse pad não roda código. gosto de como é colaborativo, mas ele não roda código, não permite editar imagens. e tem outras limitações. é rígido. quadrado. em caixa.

precisamos começar o Carnaval, esse editor, em algum lugar. precisamos de um bootstrap. começar em algum lugar. pois do zero não há como. nada começa do zero.

precisamos desse editor colaborativo. um que permita editar código de galera. nele construiremos o Carnaval. ele próprio será o Carnaval.

comecemos agora, semanas antes do carnaval, da data. da primeira semana de março.

o código é livre, é aberto, mas é colaborativo? é fácil? é acessível para todos? é poético? ou é só código? amontoado de caracteres que ninguém entende... rigidez da máquina contra a fluidez humana.

essa mídia http://i.imgur.com/zewAEBo.png não se comunica com esse pad, porque???

como é preciso começar em algum lugar, rascunhemos o editor colaborativo mais simples: vou usar apenas o browser. vou usar um editor que já existe, o jsbin: http://jsbin.com mas ele é complexo demais, gostaria de entender o que se passa, encontrar dificuldades, e ir construindo aos poucos, juntos. mas rascunho no jsbin algumas linhas para ter um editor. a linguagem que uso é HTML, uma linguagem de marcação. http://jsbin.com/OFUrUtU/1/edit é o código em HTML que implementa o primeiro editor, que esta aqui http://jsbin.com/OFUrUtU/1 que é esse:

http://i.imgur.com/t19G9gz.png

é possível editar texto nele, caberia uma poesia concreta nele?? não sou poeta mas posso desenhar:

http://i.imgur.com/cHtjBzC.png

vc também pode usar esse editor. acesse essa url  http://jsbin.com/OFUrUtU/1  e edite aa vontade, puxe no canto direito inferior do editor que ele muda seu tamanho. tire uma foto da sua tela (tecla print do seu teclado em linux/windows, ou command + shift + 4 no mac) e mande ela para o http://imgur.com e cole a url da imagem enviada aqui.

difícil né? pois é. o editor funciona, mas não consigo ver o que vc está escrevendo daqui. não é fácil de guardar o que vc fez para mostrar para outro ou para vc no futuro.

o editor não é colaborativo. como torná-lo colaborativo?

por enquanto estamos usando HTML, bastou um comando para fazer esse editor: <textarea></textarea>. mas HTML é uma linguagem dura, rígida, como todas as outras linguagens digitais, ela é feita para um propósito específico: marcação. formatação. apresentar o texto e outras mídias em um documento. para tornarmos o editor colaborativo, HTML somente não é suficiente. precisamos de uma linguagem que comunique dois ou mais editores entre si e compartilhe o texto que está nele. esse é nosso problema de agora.

para isso precisamos de JS, ou JavaScript, uma linguagem que consegue fazer isso que precisamos: manipular a mídia que é formatada em HTML.

queremos isso:

http://i.imgur.com/p685jXk.png

que eu, você e el@ possamos editar o mesmo carnaval. precisamos salvar esse carnaval para outros e para o futuro. JS vai nos ajudar a criar isso.

(continua ...)

http://archives.chbooks.com/online_books/carnival/ GEAR GERAAAAAAAA

SOBRE PERMISSÕES

Fiquei refletindo bastante para achar uma solução para a ideia de como funcionária a questão dos usuários no Carnaval.

Parti da premissa que uma das coisas mais interessantes do Vivace é que basta você acessar o endereço para usar. É isso que faz do Vivace completamente colaborativo. 

No caso do Carnaval, a questão é que temos dois tipos de usuários: 1- aquele(s) que é o 'dono' de sua plataforma Carnaval; 2 - Todos os outros.

A resposta para esta questão é bem simples: cadastro de usuários. Mas aí perderíamos totalmente a liberdade de 'todos' poderem colaborar. Cadastro de usuários  simplesmente não é a solução que eu busco.

O segundo ponto é que diferente do Vivace gostaria que fosse possível liberar partes do Carnaval para todos colaborarem enquanto outras partes apenas o carneowner (inventei essa palavra rsrs) poderia mexer. É importante lembrar que umas das características do Carnaval é que mais que colaborativo ele é um canal individual (podemos entender um coletivo como um individuo) interativo colaborativo.

Cheguei a um modelo de permissões que fucnionará da seguinte forma - antes tenho que esclarecer que esse é um modelo teórico, não sei o quanto ele é tecnicamente possível, apesar de que acredito ser possível - assim como existe um documento no Vivace que você modifica para incluir vídeos, no Carnaval, além desse documento, e vários outros rsrs, existirá um que o carneowner preencherá com senhas para liberar cada estágio de permissão. 

No final do texto abaixo, depois de explicar o code do Carnaval digo "Do lado direito...", é um comentário bem sucinto no qual vou retornar em breve, de forma mais focada. O principal é que proponho uma caixa de efeitos (do tipo que o Cravo propos pro Vivace) e um tipo de pad. Podemos dizer que temos 3 quadrantes (a principio) no Carnaval: 1 - o code do lado esquerdo; 2- a caixa de efeitos; 3- o pad. O que eu busco é a possibilidade do carneowner poder liberar cada um desses quadrantes (ou dois deles ou todos) em tempo real igualmente via code.

por exemplo

perma 1: *****

(isso libera todos usuários a escreverem no pad)

perma 2: *****

(isso libera todos usuários a escrevem no pad e controlarem a caixa de efeitos)

perma 3: *****

(isso libera todos usuários a escreverem no pad, controlarem a caixa de efeitos e mexerem no code do lado esquerdo)

nesse documento o carneowner poderia incluir uma perma diferente, tipo:

perma 4:*****

(libera todos usuários a escreverem no pad e no code do lado esquerdo, mas não na caixa de efeitos)

O mais interessante desse processo é essa inversão no processo de acesso. Não sei se é nova, mas é bem legal.

TIPO O CÓDIGO

Cheguei a conclusão que o carnaval é na realidade um vivace mais simples, então pensei um código assim:

//carnaval

//o código escrito será apenas usado para inserir e mudar vídeos, imagens e músicas. 

//o tempo funciona assim: 1 é um minuto; 1.5 são um minuto e cinco segundos; 1.50.20 são um minuto, cinquenta segundos e 20 fps; 70.40.10 são uma hora, 10 minutos, quarenta segudos e 10 fps; 0.10.10 são dez segundos e 10 fps (pode ser?)

//transição irá agir apenas no quer for mudado no código e depois que for dado o crtl x, não precisa escrever transição para cada entrada e saida, seja vídeo ou áudio.

transição: (0.0.15)

//no comando vídeo deve ser colocado o link (youtube ou vimeo), o arquivo .mp4, .ogv, e assim por diante, imagem estática .jpg, .png (?), e uma tag radio (caso queira usar como rádio, sem vídeo ou imagem estática). Para mudar o vídeo basta sobrescrever sobre vídeo anterior, ou deixá-lo escrito e depois apagar o anterior. 

video: eyes.mp4

//video: www.youtube.com/FDc6g1

//no comando inicio o minuto, segundo, frame que o vídeo começará

inicio: 1

//em volume deverá ser colocado um numero de zero a dez para especificar o volume do áudio do vídeo.

//colocar um valor de 0 a 10

volume: 5

//Para fazer sobreposição basta inserir outra tag video e a opacidade.

video1: war.mp4
inicio1: 4.4.3
volume: 0

//para definir a opacidade escolha um numero de zero a dez

opacidade: 5

//áudio segue a mesma lógica de vídeo, mas áudio podem ter vários.

audio1: samba.wav
inicio1: 2.32
volume1: 4

audio2: www.audioshark.com/beatles
inicio: 1.1
volume: 6

//audio2: rock.wav
//inicio: 2.3
//volume: 6

do lado direito, a gente usa uma caixinha daquelas que o gcravista propos, para todos os outros efeitos de vídeo e áudio, inserção de textos e acopla um pad, que vai servir tanto como recurso pra anotações, tipo os links que entrarão a seguir ou áudio, tempos e assim por diante, mas também para comunicação, como chat, não que terá um chat acoplado ao pad, o pad é o chat

upper: curtiu, automata?

muito!!! ;-) :** bora implementar!!!


Carnaval

Carnaval é uma linguagem de Live Coding que permite encadeamento de vídeos em tempo real, permitindo também sobreposição de musicas 

http://happyworm.com/screencams/hyperaudiopad/2013-04-04/demo1-standard.m4v
http://happyworm.com/blog/2013/04/05/the-hyperaudio-pad-next-steps-and-media-literacy/

;-) http://pulapirata.com/skills/vivace/ <<< inspiração ou a própria
:)

//// linguagem

gera, detona aqui no que vc acha que seria uma lingaugem massa para isso... qualquer caractere que quiser, a gente faz um parser que dá conta, tipo parque de diversões mesmo :-)

:)

//// coisas para checar no chrome/firefox

-possível colocar um vídeo depois do outro? com a possibilidade de transição entre eles? (to começando do começo, a gente já falou sobre isso) oka
é possível, http://maker.mozillapopcorn.org/

Agora, depois de ver o mozzilapopcorn e me parece que provavelmente podemos usar o que ele tem, as ideias abaixo estão praticamente solucionadas, as bem aqui em baixo, não as muito embaixo, agora é inventar um código. Então, nesse momento (16:16, 091112) uma mudança de foco se faz possível. O que está 'emergindo' (rsrsrs) aqui? Basicamente uma forma de em tempo real concatenar imagens e dar sentido a elas. Isto é, a imagem subsequente soma sentido a imagem anterior, o áudio soma sentido às imagens. O texto soma sentido às imagens e o áudio. Tudo isso transmitido ao vivo, tanto em algum lugar físico quanto pela internet.

-possível ao invés de pensar áudios e vídeos pensar urls?

Quais possibilidades temos aqui? 

-possível criar sentido a partir de x webcams, alterando de uma para outra?

-possivel x pessoas abilitarem suas webcams pessoais e alterarmos de uma para outra em uma única transmissão?

(hora de uma urgência definitiva)

resumindo

-possível concatenar informações de diferentes fontes (urls, vídeos de um computador, streams) em tempo real no formato de um audiovisual continuo?

---

-possível criar um bloco de cor sólida ou texturas? (tipo o black, quando não tem vídeo selecionado).

solid color=red (40%)

-possível incluir texto?

-possível usar arquivos de imagem(no caso de textura)?

-possível incluir arquivos durante a exibição? ou link?

-possivel dividir a tela em mais de uma parte? 

video1=(30)
videoposition=right

video2=(50)
videoposition=left


-possível eu ver o código, mas poder controlar quando quem está assistindo vê?
sim, joga o código em uma janela e o resultado em outra (window detach)

- possível extrair audio em tempo real de uma tag <video> e manipular esse audio?
  na pior das hipóteses, a gente extrai o áudio na mão e toca video e audio sincronizados
-possivel extrair o audio de um video e tocar o video sem o audio, usando outro audio no lugar do anterior?

isso acho que rola, só brincar com os volumes de cada video e de cada audio, dá para fazer
mixagem :)
:)
-se possivel extrair o audio de uma tag <video> o vídeo ser trocado e o audio continuar?
ahh, dá para fazer sim, audio e video ficam total independentes, no vivace já rola isso,
a maior treta na verdade é extrair o audio de um video, mas se a gente fizer isso na mão
(com ffmpeg da vida) o negócio já funciona...

massa, vou continuar colocando aqui o que acho legal ter, mesmo que você já tenha dito que pode

isso!!! por favor!!

- possível capturar webcam e selecionar outra cam usb? acho que chrome canary sim.

-possivel criar transições entre os videos e sobreposições de mais de um video? (me parece que uma sobre posição de mais de um video é uma transição com mais tempo, mas de fade in ou fade out. Tipo se quando está assim #video1 o vídeo não aparece, se eu tiver 

#video1
#video2

nenhum dos dois aparece

se eu tiver

video1
video2

os dois aparecem

ou

video1 (14)
sobrepor (10)
video2 (10)

Tipo o video2 vai ficar 10 (frames?) sobre o 1

para sobrepor teria que aplicar um filtro de transparência em um dos vídeos, ou em ambos.
talvez seja possível: http://seriouslyjs.org/ -> isso eh tranquilo com Processing JS? podemos usar ambos

Nesse Seriouslyjs.org no codigo tem um monte de efeitos... pois, daria para aproveitar esses efeitos...

video1.efeito = monocromático

video1.efeito=transparencia (40%) 

creio que seria interessante criar a possibilidade de uma corrente de efeitos, assim como eh feito no webaudio api:

video1.efeitos = monocromatic(true) -> transparente(40%) -> blur(XdaQuestao)

-possivel controle do efeito? sim

algo nesse sentido...

-possivel gravar o que está sendo transmitido? deixar o que foi editado rolando em loop? reutilizar o que acabou de ser gravado?

teria que ver se é possível pegar a saída e jogar em outra tag <video> Sim, uma vez usamos em brasilia, no teia, o ffmepg pra streamar e gravar no computador ao mesmo tempo, teria que ter uma saida que jogasse de volta o video que esta sendo exibido pra uma tag <video> , entendi rsrsrs :-D

-possivel trabalhar com mais de uma saída e mais de uma entrada? (saida que ta sendo vista, saida que está sendo gravada, saida que volta pra tag <video>, entrada de um arquivo, uma webcam, um celular...)

isso lembra bastante o meemoo. o que dá para fazer é ter várias janelas pipocando, cada uma com uma ou mais <video>. gravar precisaria de codificação, talvez seja possível.

o Forrest, criador do Meemoo, irá fazer vjing em uma festa do mozilla festival amanhã, em londres. ele vai usar basicamente o Meemoo. podemos trocar ideia com ele sobre isso também.

Tem umas questões aí que o termo vjing talvez não seja o melhor para expressar o que eu estou buscando como ferramenta (ou o tipo de ferramenta que eu acho que seria legal estar disponível). A ideia gira muito em torna da função e da linguagem, mais do que da capacidade da ferramenta. O termo Vj serve para fazer aquilo que eu to afim de fazer, de acordo com a wikipedia, mas pode confundir na hora de desenvolver a ferramenta. Digamos assim, a experiência que eu estou buscando é menos abstrata e mais narrativa (apesar de continuar sinestésica), daí a proximidade com um tipo de cinema experimental. 

https://www.youtube.com/watch?v=ZGKLw5kbz00&feature=plcp du caralho!!!

a experiência é muito menos centrada na repetição e muito mais na concatenação de vídeos diferentes. Assim como a experiência é muito menos centrada em criar um ambiente visual para musicas e sim usar musicas para criar paisagens para o vídeo. Apesar da ferramenta ser capaz de fazer ambas as coisas isso muda um pouco a 'experiência do usuário'. Por exemplo, nesse caso, o mais importante não é a facilidade em usar efeitos, mas que a concatenação dos vídeos seja o mais simples possível, com a transição funcionando também de forma simples. O áudio também, concatenado e sobreposto, mais o do vídeo.
Eu acho o jeito que o vivace é extremamente no caminho para chegar nisso, vou continuar escrevendo aqui algumas funções que eu acho legal se tiver e vou dar uma pirada nesse código. :) que eu to pensando aqui, código é poesia rsrs

ótimas confluências gera, acho realmente que o lance é pensar em uma linguagem que represente isso que queres. 

//// ideias

daria para essa página html receber parametros (nome do video, tempo que começa, tempo de duração, ...) e dessa forma seria fácil de tornar ela um módulo meemoo.

Depois dessa minha pesquisa sobre SLs pra vj eu percebi que a maioria das coisas em SL não é pra usuário primário, depois que instala até é, mas é bem dificil, então o que for mais facil pro usuário final é o melhor. eu acho o jeito do vivace do caralho

nota ot mas nem tanto: qualquer coisa começa de ideias jogadas. ter um pad que possa ter essas ideias e código/imagens/videos editáveis colaborativamente com cópias salvas em repositórios parece ser uma nova releitura da liberdade de código. a liberdade da criação.

http://www.scoop.it/t/ascii-art

Ideia do automata: rede social com live coding:permitir que feeds como tweeter e face e outros possam ser lidos dentro do carnaval

Opcao 1

face/twiiter contem:

1)um short link para video 
+
2) outro feed do face/tweeter tem um codigo abstrato para qq video
     |
    V
    Carnaval le os feeds atraves do JISON
     |
    V
    Video processado (seriously, processing, etc.)
    
Acho super legal as pessoas verem codigos estranghos nos seus feeds, e depois se perguntarem, o que eh isso? ai tiram a duvida no carnaval :)
