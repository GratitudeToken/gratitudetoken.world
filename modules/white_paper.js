import {$, $$} from '/modules/selector.js';

// THIS WHOLE ORDEAL BELOW HAS TO BE IMPROVED, it doesn't work correctly on resize
export let whitePaper = function() {
    const showSidebar = $('.showSidebar');
    showSidebar.addEventListener('click', event => {
        showSidebar.classList.contains('closeSearch') ? showSidebar.classList.remove('closeSearch') : showSidebar.classList.add('closeSearch');
    });

    let headings = $$('.heading');
    let headingsTop = [];
    const content = $('.content');
    let headerH;
    let breadcrumbsH;

    const deviceType = () => {
        const ua = navigator.userAgent;
        const offsetMobile = content.offsetHeight;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return -offsetMobile + 15
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return -offsetMobile + 15
        }
        return 15
    };

    let scrollToHeading = function() {
        headerH = $('header').offsetHeight;
        breadcrumbsH = $('#breadcrumbs').offsetHeight;
        
        $$('#index span').forEach((element, i) => {
            headingsTop.push((headings[i].getBoundingClientRect().top).toFixed(0));
            element.addEventListener('click', event => {
                $('#showSidebar').checked = false;
                showSidebar.classList.remove('closeSearch');
                let offsetPosition;
                i == 0 ? offsetPosition = 0 : offsetPosition = headingsTop[i] - headerH - breadcrumbsH - deviceType();
            
                content.scroll({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            });
        });
    }

    // getting all headings text and creating clickable index elements in sidebar
    headings.forEach((item, i) => {
        let addToIndex = function(headingType) {
            $('#index').innerHTML += '<span class="'+headingType+'">'+ item.textContent +'</span><br>';
        }
        if (item.nodeName == "H1" && i != 0) addToIndex('H1');
        if (item.nodeName == "H2") addToIndex('H2');
        if (item.nodeName == "H3") addToIndex('H3');
        if (item.nodeName == "H4") addToIndex('H4');
    
        item.setAttribute("id", "H" + i);
    });
    scrollToHeading();
    let pageCount = 1;
    $$('.page').forEach((item, i) => {
        item.innerHTML += '<b class="pageNumber">'+pageCount+'</b>';
        pageCount++;
    });

    window.addEventListener("resize", function () {
        scrollToHeading();
    });
}