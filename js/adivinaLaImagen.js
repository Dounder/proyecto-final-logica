(async function loadImages(){

    //-----------------------------------------------getAnime

    async function getAnimes(url){
        const response = await fetch(url);
        const animes = await response.json();

        return animes
    }

    const BASE_URL = 'https://api.jikan.moe/v3/search/anime';

    //-----------------------------------------------OtherFunctions



    function animeImageTemplate(anime){
        return `
            <img id="game-image" src="${anime.image_url}" alt="">
        `
      }

      function optionAnimeTemplate(anime){
        return `
            <p>${anime.title}</p>
        `
      }
      function optionAnimeGenericTemplate(anime){
        return `
            <p>${anime}</p>
        `
      }

    function createTemplate(HTMLString) {
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString
        return html.body.children[0];
    }

    function generateRandomNumber(limit) {
        return Math.floor(Math.random() * limit);
    }

    function generate3diferentRandomNumbers() {
        let bandera = 0;
        while (bandera === 0) {
            let number_a = generateRandomNumber(30);
            let number_b = generateRandomNumber(30);
            let number_c = generateRandomNumber(30);   
            if ((number_a != number_b) && (number_a != number_c) && (number_b != number_c)) {
                bandera = 1
                const newArray = [number_a, number_b, number_c];
                return newArray
            } 
        }
    }

    function generateName(index){
        const animes = ['Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono', 'Hunter x Hunter', 'Attack on titan', 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka', 'Oregairu', 'Evangelion', 'Dragon Ball: Episode of Bardock', '	Fullmetal Alchemis', '	Yu☆Gi☆Oh! (Movie)', 'Boku no pico', 'Haikyu!!', 'Kaguya sama', 'Tate no Yuusha no Nariagari', 'Darling in the Franxx', 'Clannad', 'Toradora!', 'Kimi ni todoke', 'Rosario to Vampire', 'Akame ga Kill!', 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai', 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)', 'Yakusoku no Neverland', 'Kono Subarashii Sekai ni Shukufuku wo!', 'Kishuku Gakkou no Juliet', 'Another', 'Shokugeki no Souma', 'Gintama', 'Tengen Toppa Gurren Lagann', 'Death Note', 'Plastic Memories', 'One punch man', 'Fairy tail 2', 'Domestic no kanojo', 'Hyouka', 'Shigatsu Wa kimi no uso', 'Oresuki', 'Bleach', 'Mirai nikki', 'Elfed lied', '	Yamada-kun to 7-nin no Majo (TV)', 'Golden Time', 'dororo', 'Fire force', 'Blue exorcist', 'Dr. Stone', 'Angel beats!', 'Charlotte','Highschool DXD','Kami nomi zo shiru sekai']
        return animes[index];
    }

    function reloadGame() {
        location.reload();
    }
    function showAlert() {
        alert("Oooooops \nFallaste, ese no era el nombre del Anime \nSe reiniciara el juego");    }
    function addEventClickError($element) {
        $element.addEventListener('click', () => {
            swal("Tu respuesta es incorrecta!", "Se reiniciara el juego en breve", "error");
            reloadGame()
            showAlert()
        })        
    }
    function addEventClickSuccess($element, index) {
        $element.addEventListener('click', () => {
            index++
            if (index === 50) {
                swal("Felicidades!!!!!!!", "Juego terminado, se nota que no te bañas", "Success");
            }else{
                inicialiar(index)
            }
        })        
    }

    function fillEachOption($element, index){
        const randomAnimes = ['Digimon adventure (2020)', 'Gundaman build divers', 'Orange', 'Apare Ranma', 'House of cards', 'Ahiru no sora', 'Apocalipsis minecraft', 'Drake & Josh', 'The rising of the shield hero', 'Highschool Musical', 'Kill la kill', 'Angels of death', 'Karmaland', 'Blend-s', 'Keep your hands off eizouken!', 'Big order', 'Nanbaka', 'Inuyasha', 'Nisekoi', 'Gate', 'Yamada Kun to 7-nin no majo', 'Tsugumomo', 'Hundred', 'Fairy tail', 'Himouto! Umaru-chan', 'Berserk', 'A certain magical index', 'Akatsuki no yona', 'Gamers', 'Isekai cheat magician', 'Free!'];
        $element.children[0].remove();
        const HTMLString_optionTitle = optionAnimeGenericTemplate(randomAnimes[index]);
        const optionTitle = createTemplate(HTMLString_optionTitle);
        $element.append(optionTitle);

        addEventClickError(optionTitle);
    }

        


    function fillAllOptions(options, anime, index){
        const optionsLength = options.length;
        const random = generateRandomNumber(optionsLength);
        
        //DOM random element (option)
        const $randomOption = options[random]
        $randomOption.children[0].remove();
        const HTMLString_animeTitle = optionAnimeTemplate(anime);
        const animeTitle = createTemplate(HTMLString_animeTitle);
        $randomOption.append(animeTitle);
        addEventClickSuccess(animeTitle, index);

        let uniqueNumbers = generate3diferentRandomNumbers();
        //llenar las opciones restantes
        switch (random) {
            case 0:
                //random es la opcion 1
                fillEachOption(options[1], uniqueNumbers[0])
                fillEachOption(options[2], uniqueNumbers[1])
                fillEachOption(options[3], uniqueNumbers[2])
                break;
            case 1:
                //random es la opcion 2
                fillEachOption(options[0], uniqueNumbers[0])
                fillEachOption(options[2], uniqueNumbers[1])
                fillEachOption(options[3], uniqueNumbers[2])
                break;
            case 2:
                //random es la opcion 3
                fillEachOption(options[0], uniqueNumbers[0])
                fillEachOption(options[1], uniqueNumbers[1])
                fillEachOption(options[3], uniqueNumbers[2])
                break;
            case 3:
                //random es la opcion 4
                fillEachOption(options[0], uniqueNumbers[0])
                fillEachOption(options[1], uniqueNumbers[1])
                fillEachOption(options[2], uniqueNumbers[2])
                break;
            default:
                alert('Hola yo soy el dafaul, si estas viendome algo salio mal :(')
                break;
        }

    }


    function renderAnime(anime, $element, options, index){
        $element.children[0].remove();
        const HTMLString_animeImage = animeImageTemplate(anime);
        const animeImage = createTemplate(HTMLString_animeImage);
        $element.append(animeImage);

        fillAllOptions(options, anime, index);
    }

    function counterItemTemplate(index){
        return`
            <h3>${index}/50</h3>
        `    
    }

    function renderNumber($element, index){
        $element.children[0].remove();
        const HTMLString_counter = counterItemTemplate(index);
        const counter = createTemplate(HTMLString_counter);
        $element.append(counter);
    }
    
    const $gameImageContainer = document.getElementById('game-image-container');
    const $option1 = document.getElementById('option-1');
    const $option2 = document.getElementById('option-2');
    const $option3 = document.getElementById('option-3');
    const $option4 = document.getElementById('option-4');
    const $countercontainer = document.getElementById('counter-container');
    const options_array = [$option1, $option2, $option3, $option4]
        
    
    async function inicialiar(index){
        let number = index + 1
        renderNumber($countercontainer, number)
        const animeName = generateName(index)
        const {results: { 0: anime}} = await getAnimes(`${BASE_URL}?q=${animeName}&page=1&limit=1`);
        renderAnime(anime, $gameImageContainer, options_array, index);
    }
    
    inicialiar(0)    
    
})()
