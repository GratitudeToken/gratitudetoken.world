
import { $ } from '/modules/selector.js';

const langString = window.location.search;
const urlSearch = new URLSearchParams(langString);
export let translationData = new Object();

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
        translationData = data;
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
            const { lightspeed } = res[9];

            // Run them
            slider();
            observeEverything();
            setTimeout(sparky, 16000);

            window.addEventListener("resize", function () {
                createStarField();
            });

            countdowns();
            preloader();
            createStarField();
            roadmapMagic();


            window.addEventListener("scroll", debounce(() => {
                onScroll();
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
            substackAPI();
            substackAPIconfig();
            BiiP_script();
        }

        if (page == "white-paper") {
            const { pages } = await import('/localisation/white-paper/' + code + '.js');
            $('#white-paper').innerHTML += pages;
            whitePaper();
        }
        if (page == "presale") {
            const { countdowns } = await import('/modules/countdown.js');
            const { presale } = await import('/modules/presale.js');
            countdowns();
            presale();
        }
    });

const BiiP_script = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "/BiiP.js"
    document.body.append(script);
}


const shareThis = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=6220b91b94b169001b48536f&product=inline-share-buttons"
    document.body.append(script);
}

const puzzleJS = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "/puzzle/main.js"
    document.body.append(script);
}

const substackAPI = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://substackapi.com/widget.js"
    document.body.append(script);
}

const substackAPIconfig = () => {
    let script = document.createElement("script");
    script.innerHTML = `
    window.CustomSubstackWidget = {
        substackUrl: "gratitudetoken.substack.com",
        placeholder: "example@gmail.com",
        buttonText: "Subscribe",
        theme: "custom",
        colors: {
          primary: "#FFFFFF",
          input: "#000000",
          email: "#FFFFFF",
          text: "#000000",
        }
      };
    `;
    script.async = true;
    document.body.append(script);
}


// Youtube functionality


// Youtube player

const yv = $('#youtubeVideo');

yv ? yv.addEventListener('click', () => {

    const ytIframe = $('#youtubeIframe');
    const yo = $('#youtubeOverlay');
    yo.classList.remove('none');

    // This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    let player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeIframe', {
            videoId: 'SQv8VUzxtQ',
            playerVars: { 'autoplay': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
    }

    // The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
        // this shit doesn't work because youtube has disabled autoplay and you can use it only with muting the video
    }

    yo.addEventListener('click', () => {
        yo.classList.add('none');
        // a workaround to stop the video
        ytIframe.src = ytIframe.src;
    });
}) : null;