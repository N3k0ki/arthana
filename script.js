document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    // Dados dos momentos (pode vir de uma API, JSON, etc.)
    const momentsData = [
        {
            id: 1,
            image: '../img/junimo.jpg',
            date: '04/04/2025',
            text: 'Arthur, essa foto é uma das minhas favoritas suas ja que você tá parecendo um Junimo, e isso me faz rir toda vez que vejo. Foi um momento engraçado e fofo demais... mesmo que eu tenha sentido um pouquinho de ciúmes da Mota naquele dia. 💚'
        },
        {
            id: 2,
            image: '../img/espelho.jpg',
            date: '04/07/2025',
            text: 'Não gostei muito das minhas unhas nessa foto, mas o seu abraço… ele apaga qualquer detalhe bobo. É o tipo de abraço que faz tudo parar, que me acalma, que me faz sentir em casa. Você tem esse efeito em mim.'
        },
        {
            id: 3,
            image: '../img/kj.jpg',
            date: '01/06/2025',
            text: ' lembra desse dia? A gente assistiu o jogo do Cruzeiro e Palmeiras aqui em casa, e o Kaio Jorge meteu logo dois gols em menos de 15 minutos! Cruzeiro ganhou de 2x1, e olha que até agora você tá me devendo aquela aposta'
        },
        {
            id: 4,
            image: '../img/pokemon.jpg',
            date: '21/04/2025',
            text: 'Pode não ser nada grandioso, mas foi feito pensando em você do início ao fim cada traço, cada detalhe. Foi meu jeitinho de dizer o quanto você é importante pra mim. Foi um bom presente? Porque pra mim, ele carrega tudo o que eu sinto.'
        },
        {
            id: 5,
            video: '../img/tutu.mp4',
            date: '02/05/2025',
            text: 'Eu amo demais o seu jeito bobão. Sério, desde aquele seu humor que às vezes é tão questionável que só eu entendo, até aqueles gestos bobinhos que você faz. sla tudo isso me derrete.'
        },
        {
            id: 6,
            image: '../img/foto.jpg',
            date: '04/04/2025',
            text: 'Essa aqui foi a nossa primeira foto juntos. Foi legal! Um dos primeiros intervalos que passamos juntos, e foi quando eu comecei a me soltar mais, me sentir mais à vontade com você. Tem algo especial nessa imagem porque marca o começo de tantas coisas boas que a gente ainda vai viver. '
        },
        {
            id: 7,
            image: '../img/carro.jpg',
            date: '10/05/2025',
            text: 'Larry face! Sally face! Só que ao invés disso... Aninha balacobaco! Arthur Daora!'
        },
        {
            id: 8,
            image: '../img/palmeiras.jpg',
            date: 'não lembro a data',
            text: 'Não tem como eu não lembrar de você quando vejo qualquer coisa do Palmeiras. Mas, claro, isso não te define só como palmeirense, porque você é muito mais do que isso. Vi aquele broche e já pensei em você na hora, como pode? Kkkk, até nisso você tá sempre presente no meu dia.'
        },
        {
            id: 9,
            image: '../img/escola.jpg',
            date: '15/05/2025',
            text: 'Não lembro muito desse dia, mas tá ai. Uma foto legal :)'
        },
        {
            id: 10,
            image: '../img/kindred.jpg',
            date: '04/07/2025',
            text: '"Nunca um sem o outro" é a frase do meu campeão favorito no LoL, os Kindred.  o Lobo e a Ovelha. Essa frase define demais a relação deles, que é inseparável, e me faz pensar na gente. Porque, assim como eles, a gente também é assim.'
        },
        {
            id: 10,
            image: '../img/goku.png',
            date: '04/07/2025',
            text: 'Eu amo ver você feliz. Mesmo que aquela bala tivesse um gosto super duvidoso, foi legal compartilhar aquele momento com você. Essas pequenas coisas, meio estranhas até, ficam especiais porque a gente tá junto. Quero sempre mais momentos assim com você.'
        },
        {
            id: 11,
            image: '../img/igreja.jpg',
            date: '06/07/2025',
            text: '"A gente preferiu andar pelo citro doq ficar na igreja" - Arthur'
        },
        {
            id: 12,
            image: '../img/igreja.jpg',
            date: '06/07/2025',
            text: '"A gente preferiu andar pelo citro doq ficar na igreja" - Arthur'
        },
        {
            id: 13,
            image: '../img/igreja.jpg',
            date: '06/07/2025',
            text: '"A gente preferiu andar pelo citro doq ficar na igreja" - Arthur'
        },
           
        // Adicione mais momentos conforme necessário
    ];

    let currentIndex = 0;
    let cardsPerView = 3; // Padrão para desktop
    let isMobile = false;

    // Função para renderizar os cards no carrossel
    function renderCards() {
        carousel.innerHTML = ''; // Limpa o carrossel

        // Determine quais cards devem ser exibidos
        let startIndex;
        let endIndex;

        if (isMobile) {
            // Em mobile, renderizamos todos os cards e deixamos o CSS/scroll snap fazer a paginação
            startIndex = 0;
            endIndex = momentsData.length;
        } else {
            // Em desktop, exibimos apenas 3 cards por vez e "avançamos" o conteúdo
            // A lógica de `currentIndex` controla qual é o primeiro dos 3 visíveis
            startIndex = currentIndex;
            endIndex = currentIndex + cardsPerView;

            // Se chegarmos ao final e não houver 3 cards completos, ajusta para mostrar os últimos 3
            if (endIndex > momentsData.length) {
                startIndex = momentsData.length - cardsPerView;
                if (startIndex < 0) startIndex = 0; // Garante que não seja negativo
                endIndex = momentsData.length;
            }
        }

        // Cria e adiciona os cards ao DOM
        momentsData.slice(startIndex, endIndex).forEach(moment => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');
            // No mobile, todos os cards são visíveis e roláveis. No desktop, a classe hidden-desktop pode ser removida se o slice já gerencia isso.
            // Para simplicidade e garantir que todos os cards sejam sempre criados no HTML e só o CSS/scroll se encarregue do "esconder", não usaremos hidden-desktop aqui.

            cardContainer.innerHTML = `
                <div class="card">
                    <div class="card-front">
                        ${moment.video
                                ? `<video controls width="250" class="video-element">
                                    <source src="${moment.video}" type="video/mp4">
                                    Seu navegador não suporta vídeo.
                                </video>`
                                : `<div class="image-placeholder" style="background-image: url('${moment.image}');"></div>`
                            }
                        <div class="card-date">${moment.date}</div>
                    </div>
                    <div class="card-back">
                        <p>${moment.text}</p>
                    </div>
                </div>
            `;
            carousel.appendChild(cardContainer);

            // Adiciona o evento de clique para virar o card
            const cardElement = cardContainer.querySelector('.card');
            cardContainer.addEventListener('click', () => {
                cardElement.classList.toggle('flipped');
            });
        });

        // Para mobile, renderizamos todos os cards, a rolagem nativa cuida da visualização
        // Para desktop, precisamos garantir que o scroll esteja na posição correta se a página foi redimensionada
        if (!isMobile) {
            carousel.scrollLeft = 0; // Garante que o scroll esteja no início do bloco de 3 cards visíveis
        }

        updateNavButtons();
    }

    // Função para atualizar os botões de navegação (visibilidade/estado)
    function updateNavButtons() {
        // Os botões são visíveis apenas em desktop (definido no CSS)
        // Apenas habilita/desabilita para a navegação por clique
        if (!isMobile) {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex + cardsPerView >= momentsData.length;
        }
    }

    // Função para navegar para o próximo conjunto de cards (usado por botões em desktop)
    function showNextCards() {
        if (!isMobile) { // Apenas para desktop
            if (currentIndex + cardsPerView < momentsData.length) {
                currentIndex++;
                renderCards();
            }
        }
    }

    // Função para navegar para o conjunto anterior de cards (usado por botões em desktop)
    function showPrevCards() {
        if (!isMobile) { // Apenas para desktop
            if (currentIndex > 0) {
                currentIndex--;
                renderCards();
            }
        }
    }

    // Event Listeners para os botões de navegação (apenas relevantes para desktop)
    nextButton.addEventListener('click', showNextCards);
    prevButton.addEventListener('click', showPrevCards);

    // Função para verificar se é mobile e ajustar a exibição
    function checkScreenSize() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768; // Defina seu breakpoint mobile aqui

        if (isMobile !== wasMobile) { // Se o modo mudou (desktop <-> mobile)
            currentIndex = 0; // Reseta o índice ao mudar de modo
            // No mobile, `cardsPerView` é logicamente 1 (um por tela) para o snap-scroll
            // No desktop, é 3.
            cardsPerView = isMobile ? 1 : 3;
            renderCards();
        } else if (!isMobile) { // Se ainda em desktop, apenas re-renderiza para ajustar o layout
            renderCards();
        }
        updateNavButtons(); // Atualiza visibilidade/estado dos botões
    }

    // Event listener para redimensionamento da janela
    window.addEventListener('resize', checkScreenSize);

    // Inicializa o carrossel na carga da página
    checkScreenSize();
});
