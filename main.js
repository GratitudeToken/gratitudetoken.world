
import { $ } from '/modules/selector.js';

const langString = window.location.search;
const urlSearch = new URLSearchParams(langString);

// on first ever page hit with no lang parameter attached to the URL, we set the language variable to EN (default)
// first we check if the local storage variable is already set
const code = urlSearch.get('lang') || localStorage.getItem('language') || 'en';
localStorage.setItem('language', code);

const HTML = $('html');
const page = HTML.dataset.translate;
const form = $('#languageOptions');
//const headTranslate = $('head');
const bodyTranslate = $('#translateBody');

$('#' + code).setAttribute('checked', 'checked');

form.addEventListener('click', event => {
    const oldCode = localStorage.getItem('language');
    const newCode = $('input[name="language"]:checked').value;
    localStorage.setItem('language', newCode);
    if (oldCode != newCode) {
        location.reload();
    } else {
        form.style = 'display: none';
    }
});

fetch('/localisation/' + page + '/' + code + '.json')
.then(res => res.json())
.then(async data => {
    const newBody = Handlebars.templates.body(data);
    bodyTranslate.innerHTML = newBody;

    // THE HEAD TRANSLATION below + the headTranslate variable above CAN BE USED AGAIN AFTER IMPLEMENTING NODE.JS or another solution FOR THE ENTIRE WEBSITE
    // right now, handlebars cannot render elements correctly from the first DOM load and so, a lot of web scrapers and robots cannot read the content

    // const extraHead = Handlebars.templates.head(data);
    // headTranslate.innerHTML += extraHead;

    HTML.setAttribute('lang', code);


    let selector = $('#languageSelect');

    selector.addEventListener('click', event => {
        form.style = 'display: flex';
    });

    if (page == "homepage") {
        const promise = [
            import('/modules/slider.js'),
            import('/modules/countdown.js'),
            import('/modules/preloaders.js'),
            import('/modules/fire_sparks.js'),
            import('/modules/roadmap.js'),
            import('/modules/nodes_supernova.js'),
            import('/modules/debounce.js'),
            import('/modules/on_scroll.js'),
            import('/modules/observable_intersections.js'),
            import('/modules/genesis_cards.js'),
            import('/modules/lightspeed.js'),          
        ];
    
        const res = await Promise.all(promise);
    
        const { slider } = res[0];
        const { countdowns } = res[1];
        const { preloader } = res[2];
        const { sparky } = res[3];
        const { roadmapMagic } = res[4];
        const { calcCanvPosition, createStarField } = res[5];
        const { debounce } = res[6];
        const { onScroll } = res[7];
        const { observeEverything } = res[8];
        const { cardDimensions } = res[9];
        const { lightspeed } = res[10];
    
        // Run them
        slider();
        observeEverything();
        setTimeout(sparky, 16000);
    
        window.addEventListener("resize", function () {
            cardDimensions();
            createStarField();
        });
    
        countdowns();
        preloader();
        cardDimensions();
        createStarField();
        roadmapMagic();
    
    
        window.addEventListener("scroll", debounce(() => {
            onScroll();
            cardDimensions();
            calcCanvPosition();
        }, 50));
    
        let body = $('body');
        let showNav = $('#showNav');
        showNav.addEventListener('click', event => {
            body.classList.add('showUI');
            showNav.style = 'animation: fadeOut 1s ease forwards, moveCenter 1s ease forwards;';
            setTimeout(function () { showNav.remove(); }, 1000);
        });
    
        setTimeout(function () { body.classList.add('showUI'); showNav.style = 'animation: fadeOut 1s ease forwards, moveCenter 1s ease forwards;' }, 12940);
        //setTimeout(function() {showNav.remove();}, 13940);
    
        lightspeed();
    }
    const { whitePaper } = await import('/modules/white_paper.js');
    const { mToggle } = await import('/modules/mobile_menu.js');

    if (page == "puzzle") {
        puzzleJSON = data;
        puzzleJS();
    } else {
        mToggle();
        shareThis();
        BiiP_script();
    }
    if (page == "white-paper") {
        const { pages } = await import('/localisation/white-paper/'+code+'.js');
        $('#white-paper').innerHTML += pages;
        whitePaper();
    }
});

const BiiP_script = () =>
{
    const script = document.createElement("script");
    script.async = true;
    script.src = "/BiiP.js"
    document.body.append(script);
}


const shareThis = () =>
{
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=6220b91b94b169001b48536f&product=inline-share-buttons"
    document.body.append(script);
}

const puzzleJS = () =>
{
    const script = document.createElement("script");
    script.async = true;
    script.src = "/puzzle/main.js"
    document.body.append(script);
}