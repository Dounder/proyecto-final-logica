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
                console.log('todos son diferentes');
                const newArray = [number_a, number_b, number_c];
                return newArray
            } 
        }
    }

    function fillEachOption($element, index){
        const randomAnimes = ['Haikyuu', 'Danmachi', 'Shokugeki No soma', 'Apare Ranma', 'Kimi ni todoke', 'Boku no pico', 'Toradora!', 'Clannad', 'The rising of the shield hero', 'Rosario+Vampire', 'Highschool DXD', 'Fornite', 'Karmaland', 'Neon genesis evangelion', 'Shigatsu Wa kimi no uso', 'Dororo', 'Full metal Panic!', 'Inuyasha', 'Darling in the Franxx', 'Dr. Stone', 'Yamada Kun to 7-nin no majo', 'Oregairu', 'Oreimo', 'Fairy tail', 'Bleach', 'Shokugeki no soma', 'Fire Force', 'Blue Exorcist', 'Angel Beats!', 'Oresuki', 'Hyouka'];
        $element.children[0].remove();
        const HTMLString_optionTitle = optionAnimeGenericTemplate(randomAnimes[index]);
        const optionTitle = createTemplate(HTMLString_optionTitle);
        $element.append(optionTitle);
    }

    function fillAllOptions(options){
        const optionsLength = options.length;
        const random = generateRandomNumber(optionsLength);
        console.log(random);
        if (random == 4) {
            alert('random es igual a 4')            
        }
        //DOM random element (option)
        const $randomOption = options[random]
        $randomOption.children[0].remove();
        const HTMLString_animeTitle = optionAnimeTemplate(anime);
        const animeTitle = createTemplate(HTMLString_animeTitle);
        $randomOption.append(animeTitle);

        

        let uniqueNumbers = generate3diferentRandomNumbers();
        console.log('este es unique numbers'+ uniqueNumbers);
        if(uniqueNumbers){
            console.log('true');
        }else{
            console.log('false');
        }
        
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

    function renderAnime(anime, $element, options){
        $element.children[0].remove();
        const HTMLString_animeImage = animeImageTemplate(anime);
        const animeImage = createTemplate(HTMLString_animeImage);
        $element.append(animeImage);

        fillAllOptions(options);
        


    }

    const animeName = 'Domestic no kanojo'
    const {results: { 0: anime}} = await getAnimes(`${BASE_URL}?q=${animeName}&page=1&limit=1`);
    console.log(anime);    
    const $gameImageContainer = document.getElementById('game-image-container');
    const $loader = document.getElementById('loader')

    const $option1 = document.getElementById('option-1');
    const $option2 = document.getElementById('option-2');
    const $option3 = document.getElementById('option-3');
    const $option4 = document.getElementById('option-4');
    const options_array = [$option1, $option2, $option3, $option4]
    

    
    renderAnime(anime, $gameImageContainer, options_array);
    
})()
