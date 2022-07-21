var $ = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};
// Get all matching elements
var $$ = function (selector, parent) {
    return (parent ? parent : document).querySelectorAll(selector);
};


let selectedUser = {};
let BiiP_UI_visible = false;
let BiiP_element = $('BiiP');
const BiiP_svg = `
<svg class="BiiP_svg" viewBox="0 0 512 512">
<path class="inner_sphere" style="opacity: 0.4" d="M258.5,407.1l33.2-4.4v0.1c0.9,3,4,4.7,7,3.8l0.6-0.2c3-0.9,4.7-4,3.8-7v-0.1l30.5-14c0.7,1.3,2.1,2.2,3.7,2.2
    c2.3,0,4.2-1.9,4.2-4.2c0-1-0.4-2-1-2.7l28.1-26.1c0.8,0.7,1.8,1.2,2.9,1.2c2.3,0,4.2-1.9,4.2-4.2c0-1.7-1-3.1-2.4-3.8l30.1-74.9
    c0.4,0.1,0.9,0.2,1.4,0.2c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2c-0.2,0-0.4,0-0.7,0.1l-17.3-78.8c1.9-0.4,3.3-2.1,3.3-4.1
    c0-2.3-1.9-4.2-4.2-4.2c-1.2,0-2.2,0.5-3,1.2L324,123.4c0.6-0.7,1-1.7,1-2.7c0-2.3-1.9-4.2-4.2-4.2c-1.8,0-3.3,1.1-3.9,2.6
    l-36.4-12.7c0.1-0.4,0.2-0.9,0.2-1.3c0-2.3-1.9-4.2-4.2-4.2c-2.3,0-4.2,1.8-4.2,4.1l-35.4,1.5c-0.2-2.1-2-3.8-4.2-3.8
    c-2.3,0-4.2,1.9-4.2,4.2c0,0.6,0.1,1.1,0.3,1.6L158,142.2c-1-2.2-3.3-3.7-5.9-3.7c-3.6,0-6.5,2.9-6.5,6.5c0,2.4,1.3,4.4,3.1,5.5
    l-14,24c-0.5-0.2-1.1-0.4-1.7-0.4c-2.3,0-4.2,1.9-4.2,4.2c0,1.4,0.7,2.6,1.7,3.4l-21.6,37.1c-0.5-0.2-1.1-0.4-1.8-0.4
    c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2l0,0l5.3,80.1c-2.1,0.3-3.7,2-3.7,4.2c0,2.3,1.9,4.2,4.2,4.2c0.9,0,1.7-0.3,2.4-0.8
    l51.2,63.7c-0.7,0.7-1.1,1.7-1.1,2.8c0,2.3,1.9,4.2,4.2,4.2c1.8,0,3.3-1.1,3.9-2.6l76.5,23.6c0,0.2,0,0.4,0,0.6
    c0,2.3,1.9,4.2,4.2,4.2C256.6,411.1,258.5,409.3,258.5,407.1z M258.5,406.6c-0.2-2.2-2-3.9-4.2-3.9c-1,0-2,0.4-2.7,1l-17.9-21.3
    c0.4-0.4,0.7-0.9,0.9-1.4l57,19c-0.1,0.4-0.1,0.8-0.1,1.2c0,0.3,0,0.6,0.1,1L258.5,406.6z M169.7,376.9c-0.6,0-1.2,0.1-1.7,0.4
    l-9.7-27.2c0.9-0.4,1.6-1.1,2.1-1.9l66.4,29.7c-0.2,0.4-0.3,0.9-0.3,1.4l-52.6,1.4C173.7,378.6,171.9,376.9,169.7,376.9z
    M117.2,311.2c0-1.7-1.1-3.2-2.6-3.9l13.2-38c0.6,0.2,1.2,0.3,1.9,0.3c0.6,0,1.2-0.1,1.7-0.2l23.7,72.9c-0.6,0.2-1.2,0.6-1.6,1.1
    l-37.1-29.7C116.9,313,117.2,312.1,117.2,311.2z M316.4,120.7c0,2.3,1.9,4.2,4.2,4.2c0.6,0,1.3-0.2,1.8-0.4l16.6,30.1
    c-1,0.6-1.8,1.4-2.4,2.3l-100.2-48.4c0.1-0.2,0.2-0.5,0.2-0.7l79.8,12.5C316.4,120.4,316.4,120.5,316.4,120.7z M381.6,181.8
    c0,2,1.4,3.7,3.3,4.1l-2.9,27.4c-0.1,0-0.3,0-0.4,0c-1.2,0-2.4,0.3-3.3,0.9l-32.2-48.8c0.8-0.6,1.4-1.4,1.9-2.3l33.9,17.1
    C381.7,180.7,381.6,181.2,381.6,181.8z M400.6,268.9c0,1.4,0.7,2.6,1.7,3.4l-22.8,34.1c-0.8-0.5-1.7-0.8-2.7-0.9l4.8-79.2
    c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.2,2.5-0.5l18.6,39.5C401.5,265.9,400.6,267.3,400.6,268.9z M367.3,351.6c0,0.8,0.2,1.5,0.6,2.1
    L302.4,398c-0.2-0.3-0.4-0.6-0.7-0.9l70.3-80.3c0.9,0.7,1.9,1.2,3.1,1.4l-3.3,29.2c-0.1,0-0.2,0-0.2,0
    C369.2,347.4,367.3,349.2,367.3,351.6z M227,377.4l-66.4-29.7c0.2-0.5,0.3-1,0.3-1.5c0-1.2-0.5-2.2-1.2-3l50.3-56.4
    c1.1,0.9,2.6,1.5,4.1,1.5c0.3,0,0.6,0,0.8-0.1l14.9,87.2C228.6,375.6,227.6,376.4,227,377.4z M136,264.7l71.7,15.9
    c-0.1,0.4-0.1,0.8-0.1,1.2c0,1.8,0.8,3.5,2,4.6l-50.3,56.4c-0.7-0.6-1.6-0.9-2.6-0.9c-0.4,0-0.7,0.1-1.1,0.1L132,269.2
    C133.9,268.4,135.5,266.8,136,264.7z M137.2,178.3c0-0.1,0-0.2,0-0.3l69.7-9.8c0.6,3.2,3.3,5.7,6.7,5.8l0.2,101.3
    c-1.3,0.1-2.5,0.5-3.5,1.2l-74.4-95C136.7,180.7,137.2,179.6,137.2,178.3z M298.3,395.5l8.9-86.9c0.1,0,0.1,0,0.2,0
    c2.1,0,3.8-1.5,4.1-3.5l58.1,6.3c0,0.2,0,0.3,0,0.5c0,1.8,0.8,3.5,2,4.7l-70.3,80.3C300.5,396.1,299.4,395.6,298.3,395.5z
    M214.1,173.9c3.3-0.1,6-2.5,6.6-5.6l73.6,13c0,0.3-0.1,0.6-0.1,0.9c0,1.9,0.8,3.5,2,4.7L218,276.7c-1.1-0.9-2.4-1.4-3.8-1.4
    L214.1,173.9z M375.2,219.7c0,1.8,0.8,3.5,2,4.7L310,301c-0.7-0.6-1.6-0.9-2.6-0.9l-6.1-111.4c2.3-0.2,4.2-1.6,5.2-3.5l69.3,32.1
    C375.4,218,375.2,218.8,375.2,219.7z M220.5,281.7c0-1.9-0.8-3.5-2-4.7l78.2-89.8c1.1,0.9,2.5,1.4,4.1,1.4h0.1L307,300
    c-1.7,0.2-3.1,1.4-3.6,3l-83-20C220.5,282.6,220.5,282.2,220.5,281.7z M220.3,283.5l83,20c0,0.2-0.1,0.5-0.1,0.8c0,1.1,0.4,2,1,2.8
    l-70.6,69.2c-0.8-0.7-1.7-1.1-2.8-1.1c-0.2,0-0.3,0-0.5,0l-14.9-87.1C217.7,287.6,219.6,285.8,220.3,283.5z M369.7,310.9l-58.1-6.3
    c0-0.1,0-0.1,0-0.2c0-1.2-0.5-2.2-1.3-3l67.3-76.6c1,0.8,2.1,1.3,3.4,1.4l-4.8,79.2c-0.1,0-0.1,0-0.2,0
    C372.8,305.3,370.1,307.7,369.7,310.9z M375.9,216.8l-69.3-32.1c0.3-0.8,0.5-1.6,0.5-2.5c0-1-0.2-1.9-0.6-2.8l30.1-16
    c1.1,1.9,3.2,3.2,5.6,3.2c1.3,0,2.5-0.4,3.5-1.1l32.2,48.8C377.1,215.1,376.4,215.8,375.9,216.8z M335.8,160.2c0,1,0.2,1.9,0.6,2.8
    l-30.1,16c-1.1-1.9-3.2-3.2-5.6-3.2c-1.6,0-3,0.6-4.1,1.5l-61-67.4c0.3-0.3,0.5-0.6,0.7-0.9l100.2,48.3
    C336,158.2,335.8,159.2,335.8,160.2z M235.2,110.2l61,67.4c-0.9,0.9-1.5,2-1.8,3.3l-73.6-13c0-0.3,0.1-0.7,0.1-1
    c0-3.1-2-5.7-4.7-6.6l15.4-49.3c0.3,0.1,0.7,0.1,1,0.1C233.5,111.1,234.5,110.8,235.2,110.2z M235,379.4c0-1.1-0.4-2-1-2.8
    l70.6-69.2c0.6,0.5,1.3,0.9,2.2,1l-8.9,87c-0.6,0-1.2,0.1-1.7,0.2l-0.5,0.1c-1.9,0.5-3.2,2-3.8,3.7l-56.9-19
    C234.9,380.2,235,379.8,235,379.4z M231.1,110.9l-15.4,49.3c-0.6-0.2-1.2-0.3-1.9-0.3c-3.9,0-7,3.2-7,7c0,0.2,0,0.5,0,0.7l-69.7,9.8
    c-0.1-0.6-0.4-1.1-0.7-1.6l92.8-66.3C229.7,110.1,230.3,110.6,231.1,110.9z M135.4,181.8l74.4,95c-1,0.8-1.7,2-2.1,3.3L136,264.2
    c0.1-0.4,0.1-0.8,0.1-1.2c0-3.4-2.6-6.2-6-6.5l2.7-74.1c0,0,0,0,0.1,0C133.9,182.6,134.7,182.3,135.4,181.8z M302.8,398.9
    c-0.1-0.2-0.1-0.3-0.2-0.5l65.6-44.3l0.1,0.1l-28.1,26.1c-0.8-0.7-1.8-1.2-2.9-1.2c-2.3,0-4.2,1.9-4.2,4.2c0,0.5,0.1,1,0.3,1.5
    L302.8,398.9z M372.9,347.6c-0.2-0.1-0.4-0.1-0.6-0.2l3.3-29.2c0.2,0,0.3,0,0.5,0c3.6,0,6.5-2.9,6.5-6.5c0-2.1-1.1-4-2.7-5.2
    l22.8-34.1c0.1,0.1,0.2,0.1,0.3,0.2L372.9,347.6z M403.7,264.8c-0.1,0-0.3,0.1-0.4,0.1l-18.6-39.5c2.1-1.1,3.5-3.3,3.5-5.8
    c0-3.3-2.4-5.9-5.6-6.4l2.8-27.3c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.5,0L403.7,264.8z M382.1,179.7l-33.9-17.1
    c0.3-0.7,0.5-1.5,0.5-2.4c0-3.6-2.9-6.5-6.5-6.5c-1,0-1.9,0.2-2.7,0.6l-16.6-30.1c0.2-0.1,0.5-0.3,0.7-0.5l59,55.4
    C382.4,179.3,382.2,179.5,382.1,179.7z M316.6,119.5c0,0.1,0,0.2-0.1,0.3l-79.8-12.5c0-0.1,0-0.2,0-0.3l35.4-1.5
    c0.2,2.1,2,3.8,4.2,3.8c1.7,0,3.2-1,3.8-2.5L316.6,119.5z M149.1,150.7c0.9,0.4,1.9,0.7,2.9,0.7c3.6,0,6.5-2.9,6.5-6.5
    c0-0.8-0.2-1.6-0.4-2.3l70.7-33.7c0,0.1,0.1,0.1,0.1,0.2l-92.8,66.4c-0.3-0.3-0.6-0.6-1-0.8L149.1,150.7z M130.9,182
    c0.5,0.3,1,0.4,1.5,0.5l-2.7,74.1l0,0c-1.1,0-2.1,0.3-2.9,0.7l-17.2-31.2c1.1-0.8,1.8-2,1.8-3.5s-0.8-2.8-2-3.6L130.9,182z
    M107.7,226.8c0.5-0.1,1-0.2,1.4-0.4l17.2,31.2c-1.9,1.1-3.1,3.2-3.1,5.6c0,2.8,1.7,5.1,4.2,6.1l-13.2,38c-0.4-0.1-0.8-0.2-1.2-0.2
    l0,0L107.7,226.8z M116.1,314l37.2,29.7c-0.5,0.7-0.8,1.5-0.8,2.4c0,2.3,1.9,4.2,4.2,4.2c0.4,0,0.8-0.1,1.2-0.2l9.7,27.3
    c-0.2,0.1-0.4,0.3-0.6,0.5l-51.2-63.6C115.9,314.2,116,314.1,116.1,314z M173.8,382.2c0.1-0.3,0.1-0.7,0.2-1.1l52.6-1.4
    c0.2,2.2,2,3.9,4.2,3.9c1,0,1.9-0.3,2.6-0.9l17.9,21.3c-0.5,0.5-0.8,1.1-1,1.8L173.8,382.2z"/>
<path class="sphere" d="M424.3,253.5l-4.8-36.9h0.1c3.3-1,5.2-4.4,4.3-7.8l-0.2-0.6c-1-3.3-4.5-5.2-7.8-4.2h-0.1l-15.5-34c1.5-0.8,2.5-2.4,2.5-4.2
    c0-2.6-2.1-4.7-4.7-4.7c-1.1,0-2.2,0.4-3,1.1L366,130.8c0.8-0.8,1.3-2,1.3-3.3c0-2.6-2.1-4.7-4.7-4.7c-1.9,0-3.5,1.1-4.2,2.7
    L275,91.8c0.2-0.5,0.3-1,0.3-1.5c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7c0,0.2,0,0.5,0.1,0.7l-87.8,19.2c-0.5-2.1-2.3-3.6-4.6-3.6
    c-2.6,0-4.7,2.1-4.7,4.7c0,1.3,0.5,2.5,1.4,3.3l-61.9,65.6c-0.8-0.7-1.9-1.1-3-1.1c-2.6,0-4.7,2.1-4.7,4.7c0,2,1.2,3.6,2.9,4.3
    l-14.2,40.5c-0.5-0.1-0.9-0.2-1.5-0.2c-2.6,0-4.7,2.1-4.7,4.7c0,2.6,2.1,4.6,4.6,4.7l1.6,39.5c-2.4,0.2-4.2,2.2-4.2,4.7
    c0,2.6,2.1,4.7,4.7,4.7c0.6,0,1.2-0.1,1.8-0.3L129,365c-2.5,1.2-4.2,3.7-4.2,6.6c0,4,3.2,7.2,7.2,7.2c2.6,0,4.9-1.4,6.2-3.5
    l26.7,15.6c-0.3,0.6-0.4,1.2-0.4,1.9c0,2.6,2.1,4.7,4.7,4.7c1.5,0,2.9-0.8,3.8-1.9l41.3,24.1c-0.3,0.6-0.4,1.3-0.4,2
    c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7l0,0l89.3-5.7c0.3,2.3,2.3,4.1,4.7,4.1c2.6,0,4.7-2.1,4.7-4.7c0-1-0.3-1.9-0.8-2.7
    l71.1-56.9c0.8,0.7,1.9,1.2,3.1,1.2c2.6,0,4.7-2.1,4.7-4.7c0-2-1.2-3.6-2.9-4.3l26.5-85.2c0.2,0,0.4,0.1,0.7,0.1
    c2.6,0,4.7-2.1,4.7-4.7C428.8,255.7,426.8,253.6,424.3,253.5z M423.8,253.5c-2.4,0.2-4.3,2.2-4.3,4.7c0,1.2,0.4,2.2,1.1,3L396.8,281
    c-0.4-0.4-1-0.8-1.6-1l21.3-63.4c0.4,0.1,0.9,0.2,1.4,0.2c0.4,0,0.7,0,1.1-0.1L423.8,253.5z M390.5,352.4c0,0.7,0.1,1.3,0.4,1.9
    L360.6,365c-0.4-1-1.2-1.8-2.2-2.3l33.3-73.9c0.5,0.2,1,0.3,1.6,0.3l1.4,58.6C392.4,347.9,390.5,349.9,390.5,352.4z M317.2,410.7
    c-1.9,0-3.6,1.2-4.3,2.8l-42.3-14.8c0.2-0.7,0.3-1.4,0.3-2.1s-0.1-1.3-0.3-1.9l81.3-26.2c0.3,0.7,0.7,1.3,1.2,1.8l-33.2,41.3
    C319.2,411.1,318.2,410.7,317.2,410.7z M105.4,188.4c2.6,0,4.7-2.1,4.7-4.7c0-0.7-0.2-1.4-0.5-2l33.6-18.4c0.6,1.1,1.5,2,2.6,2.6
    L91.6,277.5c-0.3-0.1-0.5-0.2-0.8-0.2l14.1-88.9C105.1,188.4,105.2,188.4,105.4,188.4z M173.6,115.9c2.3,0,4.1-1.6,4.6-3.7l30.5,3.2
    c0,0.2,0,0.3,0,0.5c0,1.4,0.4,2.6,1,3.7l-54.5,35.7c-0.7-0.9-1.5-1.6-2.6-2.1l19.2-37.7C172.3,115.8,172.9,115.9,173.6,115.9z
    M270.6,94.9c1.5,0,2.9-0.7,3.7-1.9l37.9,25.5c-0.6,0.9-0.9,1.9-1,3.1l-88.2-5.5c0-0.1,0-0.1,0-0.2c0-1-0.2-1.9-0.6-2.8l44-20.6
    C267.3,93.9,268.8,94.9,270.6,94.9z M362.7,132.2c0.9,0,1.7-0.2,2.4-0.7l49.2,73.1c-0.3,0.2-0.7,0.5-1,0.8L324,126.9
    c0.8-1,1.3-2.2,1.5-3.4l32.5,3.8c0,0.1,0,0.2,0,0.3C358,130.1,360.1,132.2,362.7,132.2z M391.2,288.5l-33.3,73.9
    c-0.5-0.2-1.1-0.3-1.7-0.3c-1.3,0-2.5,0.5-3.3,1.4l-62.8-56.1c1-1.2,1.7-2.8,1.7-4.6c0-0.3,0-0.6-0.1-0.9l97.1-16.4
    C389.2,286.8,390,287.9,391.2,288.5z M265.5,389.7l17.8-79.8c0.4,0.1,0.9,0.1,1.3,0.1c2,0,3.9-0.8,5.2-2.2l62.8,56.1
    c-0.6,0.8-1,1.8-1,2.9c0,0.4,0.1,0.8,0.2,1.2l-81.3,26.2C269.6,392,267.8,390.3,265.5,389.7z M169.2,388.2c-0.1,0-0.3,0-0.4,0
    L158,310.5c3.6-0.6,6.3-3.7,6.5-7.4h112.9c0.1,1.5,0.5,2.8,1.4,3.9l-106,82.7C171.9,388.8,170.6,388.2,169.2,388.2z M411.5,209.2
    l-96.9-10.1c0-0.1,0-0.1,0-0.2c0-2.3-1.7-4.3-3.9-4.6l7.2-64.7c0.2,0,0.3,0,0.5,0c2.1,0,3.9-0.9,5.2-2.3l89.3,78.5
    C412.1,206.8,411.6,207.9,411.5,209.2z M164.5,302.5c-0.1-3.6-2.7-6.6-6.2-7.4l14.6-82c0.3,0,0.7,0.1,1,0.1c2.1,0,3.9-0.9,5.2-2.3
    l99.9,87.3c-0.9,1.2-1.5,2.6-1.6,4.3H164.5z M215.8,123.1c2.1,0,3.9-0.9,5.2-2.2l85.2,75.1c-0.6,0.8-1,1.8-1,2.9L181,205.5
    c-0.2-2.5-1.7-4.7-3.9-5.8l35.9-77.1C213.9,122.9,214.8,123.1,215.8,123.1z M284.6,295.6c-2.1,0-3.9,0.9-5.2,2.3l-99.9-87.3
    c1-1.2,1.6-2.8,1.6-4.5V206l124.2-6.6c0.2,1.9,1.5,3.4,3.3,4L286,295.8C285.6,295.7,285.1,295.6,284.6,295.6z M286.6,295.9
    l22.5-92.4c0.3,0,0.6,0.1,0.8,0.1c1.2,0,2.3-0.4,3.1-1.2l77,78.8c-0.8,0.8-1.2,1.9-1.2,3.2c0,0.2,0,0.3,0,0.5l-97.1,16.4
    C291.1,298.7,289.1,296.6,286.6,295.9z M317.4,129.5l-7.2,64.7c-0.1,0-0.2,0-0.2,0c-1.3,0-2.5,0.5-3.3,1.4l-85.2-75.1
    c0.9-1.1,1.4-2.4,1.6-3.8l88.2,5.5c0,0.1,0,0.1,0,0.2C311.2,125.9,313.9,128.9,317.4,129.5z M212.6,122.3l-35.9,77.1
    c-0.9-0.4-1.8-0.6-2.8-0.6c-1.1,0-2.2,0.3-3.1,0.7L153.1,166c2.2-1.2,3.6-3.6,3.6-6.2c0-1.4-0.4-2.8-1.2-3.9l54.5-35.7
    C210.6,121,211.5,121.8,212.6,122.3z M149.5,166.9c1.1,0,2.2-0.3,3.1-0.7l17.7,33.6c-2.2,1.2-3.6,3.6-3.6,6.2c0,1.8,0.6,3.4,1.7,4.6
    l-75.2,67.8c-0.3-0.3-0.6-0.6-1-0.8L146.3,166C147.2,166.6,148.3,166.9,149.5,166.9z M93.5,278.9l75.2-67.8c1,1,2.2,1.7,3.6,2
    l-14.6,82c-0.4-0.1-0.7-0.1-1.1-0.1c-3.4,0-6.3,2.2-7.4,5.2L94.4,283c0.1-0.4,0.1-0.7,0.1-1.1C94.5,280.7,94.2,279.7,93.5,278.9z
    M393.5,279.7c-1.2,0-2.3,0.4-3.1,1.2l-77-78.8c0.6-0.7,1-1.5,1.2-2.4l96.9,10.1c0,0.6,0.1,1.3,0.3,1.9l0.2,0.6
    c0.6,2.1,2.2,3.6,4.1,4.2l-21.3,63.4C394.3,279.8,393.9,279.7,393.5,279.7z M94.2,283.5l54.9,17.2c-0.2,0.7-0.3,1.4-0.3,2.1
    c0,4.3,3.5,7.8,7.8,7.8c0.3,0,0.5,0,0.8,0l10.8,77.6c-0.7,0.1-1.3,0.4-1.8,0.8L92.8,285.5C93.4,285,93.9,284.3,94.2,283.5z
    M173.1,390.2l106-82.7c0.9,1.1,2.2,1.9,3.7,2.3L265,389.6c-0.4-0.1-0.9-0.1-1.3-0.1c-3.8,0-6.9,2.9-7.2,6.7L174,393c0,0,0,0,0-0.1
    C173.9,391.9,173.6,390.9,173.1,390.2z M415.3,204.1c-0.2,0.1-0.4,0.2-0.5,0.2l-49.2-73.1l0.1-0.1l29.1,31.4c-0.8,0.8-1.3,2-1.3,3.3
    c0,2.6,2.1,4.7,4.7,4.7c0.6,0,1.2-0.1,1.7-0.3L415.3,204.1z M358.3,126c-0.1,0.2-0.1,0.5-0.2,0.7l-32.5-3.8c0-0.2,0-0.4,0-0.6
    c0-4-3.2-7.2-7.2-7.2c-2.4,0-4.5,1.2-5.8,3l-37.9-25.5c0.1-0.1,0.1-0.2,0.2-0.4L358.3,126z M266.1,91.5c0,0.2,0.1,0.3,0.2,0.5
    l-44,20.6c-1.2-2.3-3.6-3.9-6.4-3.9c-3.6,0-6.6,2.7-7.1,6.2l-30.5-3.2c0-0.1,0-0.3,0-0.4c0-0.2,0-0.4,0-0.5L266.1,91.5z
    M171.3,115.3L152.1,153c-0.8-0.3-1.7-0.5-2.7-0.5c-4,0-7.2,3.2-7.2,7.2c0,1.1,0.2,2.1,0.7,3l-33.6,18.4c-0.2-0.3-0.4-0.5-0.6-0.7
    l61.9-65.6C170.9,115,171.1,115.2,171.3,115.3z M104.1,188.2c0.1,0,0.2,0.1,0.3,0.1l-14.1,88.9c-0.1,0-0.3,0-0.4,0l-1.6-39.5
    c2.4-0.2,4.3-2.2,4.3-4.7c0-1.9-1.1-3.5-2.7-4.3L104.1,188.2z M138.5,374.8c0.5-1,0.8-2.1,0.8-3.3c0-4-3.2-7.2-7.2-7.2
    c-0.9,0-1.8,0.2-2.5,0.5L92.2,286c0.1,0,0.2-0.1,0.2-0.1l73.7,103.6c-0.4,0.3-0.7,0.7-0.9,1.1L138.5,374.8z M173.3,395.2
    c0.3-0.5,0.5-1.1,0.6-1.7l82.5,3.2l0,0c0,1.2,0.3,2.3,0.8,3.3l-34.8,19.1c-0.8-1.2-2.3-2.1-3.9-2.1c-1.7,0-3.2,0.9-4,2.2
    L173.3,395.2z M223.2,421.2c-0.1-0.6-0.2-1.1-0.5-1.6l34.8-19.1c1.3,2.1,3.6,3.5,6.2,3.5c3.1,0,5.7-1.9,6.8-4.6l42.3,14.8
    c-0.1,0.4-0.2,0.9-0.2,1.3l0,0L223.2,421.2z M320.4,412l33.2-41.3c0.8,0.5,1.7,0.9,2.7,0.9c2.6,0,4.7-2.1,4.7-4.7
    c0-0.5-0.1-0.9-0.2-1.3l30.4-10.8c0.2,0.3,0.3,0.5,0.5,0.7l-71,56.9C320.6,412.2,320.5,412.1,320.4,412z M396.5,347.9
    c-0.4-0.1-0.8-0.2-1.2-0.2l-1.4-58.6c2.4-0.2,4.3-2.2,4.3-4.7c0-1.1-0.4-2.1-1-2.9l23.8-19.9c0.6,0.5,1.2,0.9,2,1.1L396.5,347.9z"/>
<g class="orbitals">
    <path d="M98.2,395.9c-0.4,0-0.8-0.2-1.1-0.5c-13.9-17.8-24.9-37.5-32.7-58.6c-0.3-0.7,0.1-1.5,0.8-1.8c0.7-0.3,1.5,0.1,1.8,0.8
    c7.7,20.8,18.6,40.3,32.3,57.9c0.5,0.6,0.4,1.5-0.2,2C98.8,395.8,98.5,395.9,98.2,395.9z"/>
    <path d="M37.6,192.4c-0.2-0.3-0.3-0.8-0.2-1.2c6.4-21.7,16-42.1,28.5-60.8c0.4-0.6,1.3-0.8,1.9-0.4c0.6,0.4,0.8,1.3,0.4,1.9
    c-12.4,18.4-21.8,38.6-28.1,60c-0.2,0.7-1,1.2-1.7,0.9C38.1,192.8,37.8,192.6,37.6,192.4z"/>
    <path d="M314.4,473.9c-0.6,0-1.2-0.4-1.3-1c-0.2-0.7,0.2-1.5,1-1.7c26.9-7.3,51.9-19.6,74.2-36.5c0.6-0.5,1.5-0.3,2,0.3
    c0.5,0.6,0.3,1.5-0.3,2c-22.6,17.1-47.9,29.6-75.1,37C314.6,473.9,314.5,473.9,314.4,473.9z"/>
    <path d="M461.7,340.4c-0.2,0-0.3,0-0.5-0.1c-0.7-0.3-1.1-1.1-0.8-1.8c9-23.6,13.8-48.5,14.3-73.9c0-0.8,0.6-1.4,1.4-1.4
    s1.4,0.6,1.4,1.4c-0.5,25.8-5.3,51-14.5,74.9C462.8,340.1,462.3,340.4,461.7,340.4z"/>
    <path d="M475.9,251c-0.7,0-1.4-0.6-1.4-1.3c-0.3-5.1-0.7-10.2-1.3-15.2c-0.1-0.8,0.5-1.5,1.2-1.5c0.8-0.1,1.5,0.5,1.5,1.2
    c0.6,5.1,1,10.3,1.3,15.4C477.3,250.3,476.7,251,475.9,251L475.9,251z"/>
    <path d="M438.3,138.7c-0.4,0-0.9-0.2-1.2-0.6c-17.4-25.6-40.5-47.6-66.8-63.7c-0.7-0.4-0.9-1.3-0.5-1.9c0.4-0.7,1.3-0.9,1.9-0.5
    c26.7,16.3,50.1,38.6,67.7,64.5c0.4,0.6,0.3,1.5-0.4,1.9C438.8,138.6,438.6,138.7,438.3,138.7z"/>
    <path d="M330.3,55.1c-0.2,0-0.3,0-0.5-0.1c-6.1-2.2-12.3-4.1-18.6-5.7c-0.7-0.2-1.2-1-1-1.7s0.9-1.2,1.7-1
    c6.3,1.6,12.7,3.6,18.8,5.8c0.7,0.3,1.1,1.1,0.8,1.8C331.4,54.8,330.9,55.1,330.3,55.1z"/>
    <path d="M133.4,80.1c-0.4,0-0.9-0.2-1.2-0.6c-0.4-0.6-0.3-1.5,0.4-1.9c27.3-18.5,57.6-30.4,90.2-35.4c0.8-0.1,1.5,0.4,1.6,1.2
    s-0.4,1.5-1.2,1.6c-32.1,4.9-62.1,16.7-89,35C133.9,80.1,133.7,80.1,133.4,80.1z"/>
    <path d="M81.1,141.9c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-0.9-1.2-0.5-1.9c10.2-17.4,22.7-33.2,37.2-47.3c0.6-0.5,1.4-0.5,2,0
    c0.5,0.6,0.5,1.4,0,2c-14.3,13.8-26.7,29.5-36.8,46.7C82,141.7,81.5,141.9,81.1,141.9z"/>
    <path d="M149.9,470c-0.3,0-0.6,0-0.8-0.2c-22.8-14.1-42.9-31.8-59.7-52.6c-0.5-0.6-0.4-1.5,0.2-2s1.5-0.4,2,0.2
    c16.6,20.6,36.5,38.1,59,52c0.7,0.4,0.9,1.3,0.5,1.9C150.8,469.7,150.3,469.9,149.9,470z"/>
    <path d="M56.5,369.1c-0.3-0.1-0.5-0.3-0.6-0.6c-12.9-23.5-21.6-48.8-26-75.2c-0.1-0.8,0.4-1.5,1.1-1.6c0.8-0.1,1.5,0.4,1.6,1.1
    c4.3,26.1,13,51.1,25.7,74.3c0.4,0.7,0.1,1.5-0.6,1.9C57.3,369.3,56.8,369.3,56.5,369.1z"/>
    <path d="M352,475.8c-0.5,0-1-0.3-1.3-0.8c-0.3-0.7,0-1.5,0.7-1.8c23.3-10.4,44.7-24.6,63.5-42.1c0.6-0.5,1.4-0.5,2,0.1
    c0.5,0.6,0.5,1.4-0.1,2c-19,17.7-40.6,32-64.3,42.6C352.4,475.7,352.2,475.8,352,475.8z"/>
    <path d="M483.3,320.4c-0.1,0-0.2,0-0.3,0c-0.7-0.2-1.2-1-1-1.7c2.1-8.1,3.7-16.4,4.9-24.7c0.1-0.8,0.8-1.3,1.6-1.2
    c0.8,0.1,1.3,0.8,1.2,1.6c-1.2,8.4-2.9,16.8-5,25C484.4,320,483.9,320.4,483.3,320.4z"/>
    <path d="M110,409.6c0.1-0.1,0.1-0.2,0.2-0.3c0.5-0.6,1.4-0.6,2,0c6,5.8,12.4,11.4,19,16.6c0.6,0.5,0.7,1.3,0.2,2
    c-0.5,0.6-1.3,0.7-2,0.2c-6.7-5.2-13.2-10.9-19.2-16.8C109.7,410.8,109.7,410.1,110,409.6z"/>
    <path d="M490.4,272L490.4,272c-0.8,0-1.4-0.7-1.4-1.5c0.1-3.3,0.2-6.6,0.2-9.9c0-18.1-2.1-36.1-6.2-53.6c-0.2-0.7,0.3-1.5,1-1.7
    s1.5,0.3,1.7,1c4.2,17.7,6.3,35.9,6.3,54.2c0,3.3-0.1,6.7-0.2,10.1C491.8,271.4,491.1,272,490.4,272z"/>
    <path d="M421.6,96c-0.4,0-0.7-0.1-1-0.4c-26.6-26.4-59.5-46.3-95.1-57.3c-0.7-0.2-1.1-1-0.9-1.7s1-1.1,1.7-0.9
    c36.1,11.2,69.3,31.2,96.2,58c0.5,0.5,0.5,1.4,0,2C422.3,95.9,421.9,96,421.6,96z"/>
    <path d="M77.2,111.6c-0.3,0-0.6-0.1-0.9-0.3c-0.6-0.5-0.7-1.4-0.2-2c22.2-26.5,50.5-48.1,81.8-62.6c0.7-0.3,1.5,0,1.8,0.7
    s0,1.5-0.7,1.8c-30.9,14.3-58.9,35.7-80.9,61.8C78,111.4,77.6,111.6,77.2,111.6z"/>
    <g>
    <path d="M25,234.3L25,234.3L25,234.3z"/>
    <polygon points="40.9,226.3 48.2,222.6 40.8,219 33.6,222.5 		"/>
    <polygon points="54.1,225.4 46.7,229.3 56.6,234.3 56.6,234.3 56.6,234.3 56.6,258.9 64.6,255 64.6,230.5 		"/>
    <path d="M27.1,225.6L17,230.5V255l7.9,3.8c0,0,0-24.1,0-24.5l0,0l0,0l0,0l9.7-5L27.1,225.6z"/>
    <polygon points="40.8,232.4 31.3,237.3 31.3,237.3 31.3,237.3 31.3,261.9 40.8,266.5 50.3,261.9 50.3,237.3 50.3,237.3 
        50.3,237.3 		"/>
    </g>
    <g>
    <path d="M253,31.3L253,31.3L253,31.3z"/>
    <polygon points="268.9,23.3 276.2,19.6 268.8,16 261.6,19.5 		"/>
    <polygon points="282.1,22.4 274.7,26.3 284.6,31.3 284.6,31.3 284.6,31.3 284.6,55.9 292.6,52 292.6,27.5 		"/>
    <path d="M255.1,22.6L245,27.5V52l7.9,3.8c0,0,0-24.1,0-24.5l0,0l0,0l0,0l9.7-5L255.1,22.6z"/>
    <polygon points="268.8,29.4 259.3,34.3 259.3,34.3 259.3,34.3 259.3,58.9 268.8,63.5 278.3,58.9 278.3,34.3 278.3,34.3 
        278.3,34.3 		"/>
    </g>
    <g>
    <path d="M445,167.3L445,167.3L445,167.3z"/>
    <polygon points="460.9,159.3 468.2,155.6 460.8,152 453.6,155.5 		"/>
    <polygon points="474.1,158.4 466.7,162.3 476.6,167.3 476.6,167.3 476.6,167.3 476.6,191.9 484.6,188 484.6,163.5 		"/>
    <path d="M447.1,158.6l-10.1,4.9V188l7.9,3.8c0,0,0-24.1,0-24.5l0,0l0,0l0,0l9.7-5L447.1,158.6z"/>
    <polygon points="460.8,165.4 451.3,170.3 451.3,170.3 451.3,170.3 451.3,194.9 460.8,199.5 470.3,194.9 470.3,170.3 470.3,170.3 
        470.3,170.3 		"/>
    </g>
    <g>
    <path d="M431,379.3L431,379.3L431,379.3z"/>
    <polygon points="446.9,371.3 454.2,367.6 446.8,364 439.6,367.5 		"/>
    <polygon points="460.1,370.4 452.7,374.3 462.6,379.3 462.6,379.3 462.6,379.3 462.6,403.9 470.6,400 470.6,375.5 		"/>
    <path d="M433.1,370.6l-10.1,4.9V400l7.9,3.8c0,0,0-24.1,0-24.5l0,0l0,0l0,0l9.7-5L433.1,370.6z"/>
    <polygon points="446.8,377.4 437.3,382.3 437.3,382.3 437.3,382.3 437.3,406.9 446.8,411.5 456.3,406.9 456.3,382.3 456.3,382.3 
        456.3,382.3 		"/>
    </g>
    <g>
    <path d="M218,465.3L218,465.3L218,465.3z"/>
    <polygon points="233.9,457.3 241.2,453.6 233.8,450 226.6,453.5 		"/>
    <polygon points="247.1,456.4 239.7,460.3 249.6,465.3 249.6,465.3 249.6,465.3 249.6,489.9 257.6,486 257.6,461.5 		"/>
    <path d="M220.1,456.6l-10.1,4.9V486l7.9,3.8c0,0,0-24.1,0-24.5l0,0l0,0l0,0l9.7-5L220.1,456.6z"/>
    <polygon points="233.8,463.4 224.3,468.3 224.3,468.3 224.3,468.3 224.3,492.9 233.8,497.5 243.3,492.9 243.3,468.3 243.3,468.3 
        243.3,468.3 		"/>
    </g>
</g>
<g class="BiiP_group">
    <path d="M170.6,289.4h-27.2c-3.9,0-6.8-0.9-8.4-2.6c-1.6-1.7-2.5-4.6-2.5-8.4v-67c0-3.9,0.9-6.8,2.6-8.5s4.5-2.6,8.3-2.6h28.9
    c4.2,0,7.9,0.3,11,0.8c3.1,0.5,5.9,1.6,8.4,3c2.1,1.2,4,2.9,5.6,4.8c1.6,1.9,2.9,4.1,3.7,6.4c0.9,2.3,1.3,4.8,1.3,7.4
    c0,8.9-4.4,15.4-13.4,19.5c11.7,3.7,17.5,10.9,17.5,21.8c0,4.9-1.3,9.5-3.8,13.4c-2.5,4-6,6.9-10.3,8.8c-2.7,1.1-5.8,1.9-9.4,2.4
    C179.4,289.1,175.3,289.4,170.6,289.4z M150.5,213.8v23H167c4.5,0,8-0.4,10.4-1.3c2.4-0.9,4.3-2.4,5.6-4.9c1-1.7,1.6-3.6,1.6-5.7
    c0-4.5-1.6-7.5-4.8-8.9c-3.2-1.5-8.1-2.3-14.7-2.3L150.5,213.8L150.5,213.8z M169.2,249.8h-18.7v26h19.3c12.2,0,18.3-4.4,18.3-13.2
    c0-4.5-1.6-7.7-4.8-9.8C180.2,250.8,175.6,249.8,169.2,249.8z"/>
    <path d="M230.2,279.8l-7.5-44.1c0-3.6,0.9-6.4,2.5-8.2c1.6-1.8,11.3-6.5,13.9-6.5c2.7,0,12.4,4.6,14.1,6.4s2.5,4.5,2.5,8.2
    l-7.5,44.1c0,3.6-0.9,6.4-2.5,8.2c-1.6,1.8-3.9,2.8-6.6,2.8c-2.6,0-4.8-1-6.4-2.8C231.1,286.3,230.2,283.5,230.2,279.8z"/>
    <path d="M279.1,279.8l-7.5-44.1c0-3.6,0.9-6.4,2.5-8.2s11.3-6.5,13.9-6.5c2.7,0,12.4,4.6,14.1,6.4c1.6,1.8,2.5,4.5,2.5,8.2
    l-7.5,44.1c0,3.6-0.9,6.4-2.5,8.2c-1.6,1.8-3.9,2.8-6.6,2.8c-2.6,0-4.8-1-6.4-2.8C279.9,286.3,279.1,283.5,279.1,279.8z"/>
    <path d="M359.3,254.7h-16.5v25.2c0,3.6-0.9,6.3-2.5,8.2c-1.7,1.8-3.8,2.8-6.4,2.8c-2.7,0-4.9-1-6.6-2.8c-1.6-1.8-2.5-4.5-2.5-8.1
    v-68.7c0-4,1-6.8,2.8-8.5c1.8-1.7,4.7-2.5,8.7-2.5h23.2c6.9,0,12.1,0.5,15.8,1.6c3.6,1,6.8,2.7,9.5,5s4.7,5.2,6.1,8.6
    s2.1,7.2,2.1,11.4c0,9.1-2.8,16-8.4,20.6C378.7,252.3,370.4,254.7,359.3,254.7z M354.9,213.8h-12.1V241h12.1
    c4.2,0,7.8-0.4,10.7-1.3c2.9-0.9,5-2.3,6.5-4.3s2.3-4.7,2.3-8c0-3.9-1.1-7.1-3.5-9.6C368.3,215.1,363,213.8,354.9,213.8z"/>
    <path d="M239,201.9c3.8,0,6.9,3.1,6.9,6.9s-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9S235.1,201.9,239,201.9 M239,199.3
    c-5.3,0-9.5,4.2-9.5,9.5s4.2,9.5,9.5,9.5s9.5-4.2,9.5-9.5S244.2,199.3,239,199.3L239,199.3z"/>
    <path d="M287.4,201.9c3.8,0,6.9,3.1,6.9,6.9s-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9S283.6,201.9,287.4,201.9 M287.4,199.3
    c-5.3,0-9.5,4.2-9.5,9.5s4.2,9.5,9.5,9.5c5.3,0,9.5-4.2,9.5-9.5S292.7,199.3,287.4,199.3L287.4,199.3z"/>
    <path d="M240.3,214.2h-2.7v-4h-4v-2.7h4v-4h2.7v4h4v2.7h-4V214.2z"/>
    <path d="M282,210.2v-2.7h10.8v2.7H282z"/>
</g>
</svg>
`;


// TO DO: the original position of the BiiP custom element must be specified with parameters by the Keeper and added inside the style element below (remove the current values inside below)
const BiiP_style = `<style>

.toggler {width: 24px; height: 12px; margin-right: 3px; border-radius: 14px; background: #ffffff09; display: inline-block; cursor: pointer; position: relative; padding: 1px; box-sizing: content-box; vertical-align: text-bottom}
.toggler:after {content: ''; display: block; width: 12px; height: 12px; border-radius: 51%; background: gray; position: absolute; top: 1px; left: 1px; transition: 0.23s left}
.toggler:hover:after {background: #ffffff}
.togglerON {background: #28402c}
.togglerON:after {background: #67c75c; left: 12px}

.shorty {width: 100%; height: 100%; font-size: 32px; top: 0; left: 0; right: 0; *background: #00000069; position: fixed; z-index: 99; display: flex; justify-content: center; align-items: center; align-content: center; color: #ffffff; pointer-events: none; font-weight: bold; text-transform: uppercase; text-shadow: 0 0 23px black; *animation: fadeOut 0s forwards; animation-delay: 1s}
.shorty div {animation: shorty 1s forwards ease-in-out}



.small-icon, .tiny-icon {width: 32px; height: 32px; vertical-align: top; margin-right: 6px}
.tiny-icon {width: 16px; height: 16px; vertical-align: middle}
.grat, .grat:before {background: url(/svgs/gratitude-token-logo.svg)}
.manual, .manual:before {background: url(/svgs/manual.svg)}

.icon {background-repeat: no-repeat; background-position: 0 50%; background-size: contain; padding-left: 32px; height: 22px; line-height: 23px; display: inline-block}

.grat-bg {background: url(/svgs/gratitude-token-logo.svg) no-repeat 12px 50%; padding-left: 36px !important; background-size: 16px}
.grat-bg-left0 {background-position: 0 50%; padding-left: 23px !important}

.pe-none {pointer-events: none !important}
.rlv {position: relative}
.ovf {overflow: hidden}
.ovf-x {overflow-x: auto}
.textCenter {text-align: center}
.upp {text-transform: uppercase}
.bld {font-weight: bold}

.column {flex-direction: column}

/* Tables */
.transparentTable {width: 100%;}
.transparentTable td {padding: 6px 0}
.transparentTable .grat-bg {background-position: 0 50%; padding-left: 23px !important}
.oddBG {width: 100%; border-spacing: 1px; border: 1px solid #ffffff09}
.oddBG th {background-color: #ffffff09; padding: 6px 12px;}
.oddBG td {padding: 6px 12px;}
.oddBG tr:nth-of-type(odd) {background-color: #ffffff09}

.grid1by2, .grid1by3, .grid1by4, .grid2by2, .grid2by1, .grid2by3, .grid2by4, .grid3by1, .grid3by2, .grid3by3 {display: grid; gap: 0;}

.grid1by2 {
    grid-template-rows: repeat(1, 1fr); grid-template-columns: repeat(2, 1fr);
}
.grid1by3 {
    grid-template-rows: repeat(1, 1fr); grid-template-columns: repeat(3, 1fr);
}
.grid1by4 {
    grid-template-rows: repeat(1, 1fr); grid-template-columns: repeat(4, 1fr);
}
.grid2by1 {
    grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(1, 1fr);
}
.grid2by2 {
    grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr);
}
.grid2by3 {
    grid-template-rows: repeat(3, 1fr); grid-template-columns: repeat(2, 1fr);
}
.grid2by4 {
    grid-template-rows: repeat(4, 1fr); grid-template-columns: repeat(2, 1fr);
}
.grid3by1 {
    grid-template-rows: repeat(1, 1fr); grid-template-columns: repeat(3, 1fr);
}
.grid3by2 {
    grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(3, 1fr);
}
.grid3by3 {
    grid-template-rows: repeat(3, 1fr); grid-template-columns: repeat(3, 1fr);
}
.gap5 {gap: 5px} .gap10 {gap: 10px} .gap15 {gap: 15px} .gap23 {gap: 23px}
.grid-span2rows {grid-row: span 2;}
.grid-span2columns {grid-column: span 2;}
.grid-span3rows {grid-row: span 3;}
.grid-span3columns {grid-column: span 3;}

.flex-row {display: flex; justify-content: flex-start; align-content: flex-start; align-items: flex-start}
.f1 {flex: 1}

.w230 {width: 230px}
.w50 {width: 50%}
.w100 {width: 100%}
.h100 {height: 100%}
.h-auto {height: auto}

.p5 {padding: 5px}
.p10 {padding: 10px}
.p15 {padding: 15px}
.p23 {padding: 23px}

.pt5 {padding-top: 5px !important}
.pt10 {padding-top: 10px !important}
.pt15 {padding-top: 15px !important}
.pt23 {padding-top: 23px !important}

.pb5 {padding-bottom: 5px}
.pb10 {padding-bottom: 10px}
.pb15 {padding-bottom: 15px}
.pb23 {padding-bottom: 23px}

.pl5 {padding-left: 5px}
.pl10 {padding-left: 10px}
.pl15 {padding-left: 15px}
.pl23 {padding-left: 23px}

.m-auto {margin: 0 auto}

.m5 {margin: 5px}
.m10 {margin: 10px}
.m15 {margin: 15px}
.m23 {margin: 23px}

.mt0 {margin-top: 0!important}
.mr0 {margin-right: 0!important}
.mb0 {margin-bottom: 0!important}
.ml0 {margin-left: 0!important}

.mt5 {margin-top: 5px}
.mt10 {margin-top: 10px}
.mt15 {margin-top: 15px}
.mt23 {margin-top: 23px}

.mr5 {margin-right: 5px}
.mr10 {margin-right: 10px}
.mr15 {margin-right: 15px}
.mr23 {margin-right: 23px}

.ml5 {margin-left: 5px}
.ml10 {margin-left: 10px}
.ml15 {margin-left: 15px}
.ml23 {margin-left: 23px}

.mb5 {margin-bottom: 5px}
.mb10 {margin-bottom: 10px}
.mb15 {margin-bottom: 15px}
.mb23 {margin-bottom: 23px}

.block {display: block}
.none {display: none !important}
.blockInside > * {display: block}
.ib {display: inline-block}
.br6 {border-radius: 6px}
.br51 {border-radius: 51%}
.font10 {font-size: 10px}
.font12 {font-size: 12px}
.font14 {font-size: 14px}
.font16 {font-size: 16px}
.font18 {font-size: 18px}
.font20 {font-size: 20px}
.font23 {font-size: 23px}
.lh1 {line-height: 1}
.lh12 {line-height: 1}
.lh14 {line-height: 1.4}
.lh16 {line-height: 1.6}
.lh2 {line-height: 2}
.lh3 {line-height: 3}

.hop50:hover {opacity: .5}
.hop69:hover {opacity: .69}
.hop90:hover {opacity: .9}
.crp {cursor: pointer}

.c-F {color: #ffffff}
.c-B9 {color: #b9b9b9}
.c-lime {color: #82ff82}
.c-red {color: #db463e}
.c-gray {color: gray}
.c-lgray {color: lightgray}
.c-green {color: #04972a}
.c-yellow {color: #f6ff77}
.c-orange {color: #ff8d00}

.newsLink, .newsLink:visited {border: 1px solid transparent; transition: border 0.32s}
.newsLink:hover {border-color: #ffffff}

.bg-green {background-color: #04972a}
.bg23 {background-color: #232323}
.bg-logo {background-color: #db463e}

.btn100 {min-width: 100px}

.btn {
    border-radius: 6px;
    color: #232323;
    font-size: 12px;
    font-weight: bold;
    padding: 9px 12px;
    background-color: #ffffff;
    border: 0;
    transition: 0.23s all;
    text-transform: uppercase;
    text-align: center;
    display: inline-block !important;
    cursor: pointer
}
.btn:hover {background-color: #db463e; color: #ffffff}
.btn-green:hover {
    background-color: #04972a
}
.btn-buy:hover {background-color: #ffaca8; color: #b52d25}

.big-btn {
    display: inline-block !important;
    padding: 10px 23px;
    border-radius: 23px;
    border: 1px solid #ffffff23;
    opacity: 0.69;
    transition: 0.23s all;
    cursor: pointer
}
.big-btn:hover {opacity: 1}

.transparentInput {
    background: none;
    display: block;
    border: 1px solid transparent;
    margin: 0 auto 10px auto;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    width: calc(100% - 20px);
    border-radius: 6px;
    transition: all 0.32s
}

.transparentInput:hover {background-color: #ffffff12; border-color: #ffffff69}
.transparentInput:focus {border-color: #ffffff}

.tdInput {background: none; border: 1px solid #ffffff12; width: 100%; padding: 10px 5px; margin: 0; font-size: 12px; color: #ffffff; transition: all 0.23s}
.tdInput:hover {border-color: #ffffff23; background-color: #ffffff12}
.tdInput:focus {border-color: #ffffff32}

.inputText {background: #ffffff12; border: 1px solid #ffffff23; padding: 6px 12px; outline: 0; color: #ffffff69}
.inputText:hover {border-color: #ffffff69}
.inputText:focus {color: #ffffff; border-color: #ffffff}

#BiiP_wrapper {width: 100vw; height: 100vh; position: fixed; z-index: 999999997 !important; top: 0; left: 0; display: flex; justify-content: center; align-items: center; align-content: center; animation: bgIn 1s forwards }

BiiP {z-index: 999999998 !important; width: 6vh; height: 6vh; position: fixed; cursor: pointer; margin: 0 auto; top: 8px; left: 0; right: 0; transition: 1s all;
display: flex; justify-content: center; align-items: center; align-content: center}

BiiP .BiiP_svg {width: 53px; height: 53px; fill: #ffffff; border-radius: 51%; transition: 0.23s all ease-in}
BiiP .BiiP_svg:hover {box-shadow: 0 0 100px #ffffff69;}
.BiiP_data_visible .BiiP_svg {left: 68px; position: fixed; width: 94px; height: 94px; top: 10px}


.BiiP_center {width: 23vh; height: 23vh; top: 38vh !important;}
.BiiP_center .BiiP_svg {width: 23vh; height: 23vh}

biip_message {width: 100%; margin: 15px; padding: 23px; display: inline-block; top: -100vh; position: fixed; font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #db463e; line-height: 1.5; transition: 0.32s all}
biip_message b {font-size: 16px; color: #ffffff}

.showBiiP_message {top: 23px;}

biip_message button {background-color: #db463e32; cursor: pointer; border: 1px solid #db463e69; border-radius: 10px; color: #db463e; font-size: 16px; font-weight: bold; padding: 6px 12px; margin: 3px 10px; display: inline-block; transition: all 0.32s; min-width: 110px;}
biip_message button:hover {background-color: #ffffff23; color: #ffffff;
    background-size: 72px;
    background-position: 50% 0;
    padding-left: 12px !important;
    border-color: #db463e;
}

#BiiP_circle {
    width: 320vh;
    height: 320vh;
    top: -240vh;
    transform: rotate(-55deg);
    border-radius: 51%;
    position: fixed;
    border: 690px solid #ffffff00;
    transition: 0.69s all;
    z-index: 999999999 !important;
    pointer-events: none
}
.BiiP_center #BiiP_circle {border: 1px solid #ffffff32}

.BiiP_username {
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    top:50%;
    left:50%;
    width:9vh;
    height:9vh;
    margin-left:-4.5vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
    border-radius:51%;
    color: #ffffff;
    transition: 0.23s all;
    cursor: pointer;
    z-index: 999999999 !important;
    pointer-events: all
}
.BiiP_username:hover {z-index: 1 !important; box-shadow: 0 0 100px #ffffff69}

.BiiP_username b {margin-bottom: -123px}

.userCenter b {display: none}

.selectedUser {
    z-index: 9999999999 !important;
    background-size: cover;
    width: 54px;
    height: 54px;
    position: absolute;
    margin: 0 0 0 3px;
    top: 3px;
    left: 0;
    right: 0;
    border-radius: 51%;
    pointer-events: none;
    transition: all 0.32s;
    transform-origin: center center;
    animation: biip 0.23s forwards ease-in;
}

.BiiP_center .selectedUser {width: 23vh; height: 23vh; top: 0; margin: 0}
.BiiP_data_visible .selectedUser {position: fixed; left: 68px; top: 10px; width: 94px; height: 94px; margin: 0}

.BiiP_svg .inner_sphere {animation: rotatecircleReverse 64s infinite linear; transform-origin: center;}
.BiiP_svg .sphere {animation: rotatecircle 32s infinite linear; transform-origin: center;}
.BiiP_svg .orbitals {animation: rotateShrinkGrow 5s infinite cubic-bezier(0, 0.54, 1, 1); transform-origin: 256px 256px; fill: #db463e90}

@keyframes bgIn {
    0% {}
    100% {background: rgba(0,0,0,.99)}
}

@keyframes dataIn {
    0% {}
    100% {width: 100vw; height: 100vh}
}

@keyframes biip {
    0% {}
    12% {transform: scale(1.5);}
    100% {transform: scale(1);}
}

@keyframes shorty {
    0% {transform: scale(3)}
    10% {transform: scale(1); opacity: 1}
    60% {transform: scale(1); opacity: 1}
    100% {transform: scale(0) rotate(1000deg); opacity: 0}
}

@keyframes fadeOut {
    100% {opacity: 0}
}

.BiiP_data {
    background: #232323;
    width: 0;
    height: 0;
    position: fixed;
    top: 0;
    margin: 0 auto;
    left: 0; right: 0;
    z-index: 99999999 !important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: row;
    animation: dataIn 0.23s forwards ease-in
}

.BiiP_data a, .BiiP_data a:visited {color: #ffffff}

.BiiP_nav {width: 230px; height: 100%; z-index: 2; padding-top: 111px; background: #181818; border-right: 1px solid #ffffff23; transition: all 0.23s}
.BiiP_nav button {box-shadow: none !important; text-align: left}
.BiiP_mobile_nav_open {left: 0 !important}
.BiiP_mobile_nav_open + .BiiP_content {overflow: hidden !important}

.BiiP_content {width: 100%; height: 100%; flex: 1; text-align: left; font-size: 12px; display: grid; padding: 10px; gap: 0; grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr)}
.BiiP_content > div {margin: 10px; background: #262626; padding: 23px; border-radius: 6px; display: flex; justify-content: flex-start; align-items: flex-start; align-content: flex-start; overflow: hidden; overflow-y: auto}
.BiiP_content * {user-select: text}

.BiiP_tab {border-radius: 0; font-size: 16px; display: block; border: 0; width: 100%; padding: 23px 23px 23px 42px; background: transparent; color: #ffffff; cursor: pointer; opacity: 0.32; transition: all 0.32s}
.BiiP_tab:hover, .BiiP_tab.activeTab {opacity: 1 !important; background-color: #ffffff06 !important;}

#identity {background: url(/svgs/user.svg)}
#relations {background: url(/svgs/connections.svg)}
#finance {background: url(/svgs/list-check.svg)}

#identity, #relations, #finance {background-repeat: no-repeat; background-position: 10px 50%; background-size: 23px 23px}

#address:disabled {cursor: pointer}
#address:hover {color: #ffffff}

#BiiP_close_data,
#BiiP_burgers {
    content: '';
    width: 23px; height: 23px;
    padding: 0;
    display: block;
    z-index: 3;
    background: url(/svgs/close.svg) no-repeat 50% 50%;
    background-size: 42px 42px;
    transition: all 0.23s;
    position: absolute;
    top: 10px;
    left: 195px;
    border: 0;
    cursor: pointer;
    box-shadow: none
}
#BiiP_burgers {background: url(/svgs/burgers.svg) no-repeat 50% 50%; top: 17px; left: 23px; width: 32px; height: 32px; background-size: 32px 32px; display: none}
.BiiP_burgers_clicked {transform: rotate(90deg);}

#BiiP_close_data:hover {background-size: 23px 23px;}

.avatar img {width: 100%; height: 100%; cursor: pointer}
.editAvatar {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: transparent;
    cursor: pointer;
    top: 0;
    left: -100%;
    transition: 0.23s all;
    z-index: 10;
    background: url(/svgs/camera.svg) no-repeat 50% 50% #00000050;
    background-size: 32%
}
.avatar img:hover + .editAvatar {
    left: 0
}

@media screen and (max-width: 1366px) {
    .grid1by3 > * {grid-column: span 2}
    .grid2by1 > * {grid-row: span 2}
    .BiiP_content {width: 100%; position: relative; display: block; overflow: hidden; overflow-y: auto}
}


@media screen and (max-width: 959px) {
    .mobile-ml0 {margin-left: 0}
    .mobile-mt23 {margin-top: 23px}
    .mobile-mt32 {margin-top: 32px}

    .BiiP_nav {width: 240px; position: absolute; top: 0; left: -100%; padding-top: 64px; border: 0}
    .BiiP_content {padding: 64px 0 0 0}
    .BiiP_content > div {padding: 15px; margin: 0}
    .BiiP_content:before {
        content: '';
        display: block;
        width: 100%;
        height: 490px;
        background: url(/img/electric-arc.webp) no-repeat 50% 50%;
        background-size: 100%;
        position: fixed;
        top: -215px;
        z-index: 1;
        mix-blend-mode: lighten;
        pointer-events: none;
        opacity: 0.8
    }
    .BiiP_content table {white-space: nowrap}
    .BiiP_center {top: 35vh !important}
    biip_message {font-size: 12px}
    biip_message b, biip_message button {font-size: 14px}
    BiiP, BiiP .BiiP_svg {width: 46px; height: 46px;}
    .BiiP_data_visible .BiiP_svg, .BiiP_data_visible .selectedUser {width: 46px; height: 46px; top: 9px; left: 0; right: 0; margin: 0 auto}
    .BiiP_nav_open .selectedUser, .BiiP_nav_open .BiiP_svg {left: 98px !important; margin: 0 !important}
    #BiiP_burgers {display: block}
    .BiiP_burgers_clicked {transform: rotate(90deg)}
    .BiiP_center {opacity: 1 !important;}
    .showBiiP_message {top: 0;}
    .selectedUser {width: 46px; height: 46px; top: 0;}
    .BiiP_data_visible .selectedUser {box-shadow: 0 0 23px #ffffff;}
    .BiiP_center .selectedUser, .BiiP_nav_open .selectedUser {box-shadow: 0 0 0 #ffffff;}
    .nextRowMobile {display: block; line-height: 3}

    #BiiP_close_data {top: 20px; right: 23px; left: auto;}

    #accessStatus {display: block; margin: 10px 0 0 10px}

    .m-block {display: block; margin-top: 15px}

    /* grid system */
    .grid1by4 {grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); gap: 23px}
    .grid1by3 > * {grid-column: span 3;}
    .grid2by4, .grid2by1, .grid1by2 > div {display: block}
    .grid2by4 > div {margin-top: 23px}
    .grid2by4 > div:first-of-type {margin-top: 0}
    .grid3by2 > div {grid-column: span 3;}
}

@media screen and (orientation: landscape) and (max-height: 500px) {
    BiiP, BiiP .BiiP_svg {width: 46px; height: 46px}
    biip_message {line-height: 1}
    .BiiP_username b {font-size: 12px; margin-bottom: -60px}
}


/* Chrome, Edge, and Safari */
.BiiP_content > div::-webkit-scrollbar {
    width: 9px;
}

.BiiP_content > div::-webkit-scrollbar-track {
    background-color: transparent;
}

.BiiP_content > div::-webkit-scrollbar-thumb {
    background-color: #323232;
    border-radius: 9px;
    border: none;
}
.BiiP_content > div:hover::-webkit-scrollbar-thumb {background-color: #555555;}
.BiiP_content > div::-webkit-scrollbar-thumb:hover {background-color: #969696;}

</style>`;

const msg1 = `
<biip_message>
    <b style="display: none">You don't seem to have a BiiP link to ` + window.location.hostname + ` on this device.</b><br>
    <span class="nextRowMobile">Select a user or create a new </span><button id="create_GRAT" class="grat-bg">address</button><span class="nextRowMobile"> to authenticate.</span><br><br>
    <span class="c-F font10 mobile-hide"><b class="font10">[ TIPS ]</b> Use CTRL + B to toggle the BiiP user interface and Escape to close it.</span>
</biip_message>
`;

// dummy content
const usernames = [
    {
        u: 'lucian',
        blocked: 0
    },
    {
        u: 'catalina',
        blocked: 0
    },
    {
        u: 'daniel',
        blocked: 0
    },
    {
        u: 'maria',
        blocked: 0
    }
];

// let's split things into the 3 main categories, each with it's own template literal
class allData {
    // this is the main template literal for the BiiP data of the selected user
    biip_template = (data) => `
    <button id="BiiP_burgers" title="Toggle BiiP UI Navigation"></button>
    <button id="BiiP_close_data" title="Press Escape key"></button>
    <div class="BiiP_nav rlv">
        <input type="text" class="transparentInput" value="${data}" maxlength="23" />
        <button id="update" title="Updates your Biospheric Identity" class="bg-green big-btn textCenter c-F font14 upp bld">Update BiiP</button>
        <div id="balance" class="textCenter m10 pb10 mt23 font12 c-B9">
            Tokens of Gratitude:<br>
            <div class="icon grat mt10 mb23 font18 bld c-F">23,000.<small>000</small></div><br>
            GRAT address:<br>
            <input id="address" type="text" title="Click / Touch to copy" class="w100 inputText block mt10 font10 br6" value="0xf16530b6741bCF6F2081Cd8ca9A7A92F4caAcB74" maxlength="42" disabled />
        </div>
        <button id="identity" class="BiiP_tab activeTab">Identity</button>
        <button id="relations" class="BiiP_tab">Relations</button>
        <button id="finance" class="BiiP_tab">Finance</button><br><br>
        <a href="#" class="icon manual">BiiP Manual</a><br><br>
        <span class="c-gray font12">BiiP v1.0 (beta)</span>
    </div>
    <div class="BiiP_content lh14">
    </div>
    `; // TO DO: copy address to clipboard on click/touch using something like navigator.clipboard.writeText(value) - also display a tooltip showing the message: "Copied to clipboard." - that fades away in 3 seconds

    identity = (data) => `
    <div class="pt15 column grid-span2rows c-B9">
        <h2 class="font23 c-F">Personal Information</h2><br>
        <div class="grid2by4 gap23 w100">
            <div>
                <label for=""><i class="toggler"></i> Name (pronoun):</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="" placeholder="Your name" maxlength="32" />
            </div>
            <div>
                <label for=""><i class="toggler"></i> Family name (Surname):</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="" placeholder="Your family name" maxlength="23" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Date of birth:</label>
                <input type="date" placeholder="dd-mm-yyyy" style="color-scheme: dark;" class="w100 mt5 inputText block font14 br6" value="" />
            </div>
            <div>
                <label for=""><i class="toggler"></i> Sex:</label>
                <select class="w100 mt5 inputText block font14 br6">
                    <option class="bg23" value="" disabled selected>Select</option>
                    <option class="bg23" value="f">Female</option>
                    <option class="bg23" value="m">Male</option>
                    <option class="bg23" value="o">Other</option>
                </select>
            </div>
            <div>
                <label for=""><i class="toggler"></i> Email #1:</label>
                <input type="email" class="w100 mt5 inputText block font14 br6" value="${data}@gratitudetoken.world" placeholder="email" maxlength="42" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Email #2:</label>
                <input type="email" class="w100 mt5 inputText block font14 br6" value="${data}@biosphere.media" placeholder="email" maxlength="42" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Mobile number #1:</label>
                <input type="tel" class="w100 mt5 inputText block font14 br6" value="0040723692369" max="15" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Mobile number #2:</label>
                <input type="tel" class="w100 mt5 inputText block font14 br6" value="" max="15" />
            </div>
        </div>
        <div class="grid3by2 gap23 mt23 w100">
            <div>
                <label for="" class=""><i class="toggler"></i> Country of residence:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="Romania" max="23" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> City of residence:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="Bucharest" max="23" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> County of residence:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="Ilfov" max="23" />
            </div>
            <div class="grid-span2columns">
                <label for="" class=""><i class="toggler"></i> Street name:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="Bulevardul Unirii" max="32" /> 
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Post code:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="369369" max="23" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Street number:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="232" max="7" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Floor:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="9" max="3" />
            </div>
            <div>
                <label for="" class=""><i class="toggler"></i> Apartment:</label>
                <input type="text" class="w100 mt5 inputText block font14 br6" value="23" max="7" />
            </div>
            <div class="grid-span3columns mt15">
                <h2 class="font23 c-F">Biospheric Identity stats</h2><br>
                <div class="lh2">
                    Allow access: <i class="toggler"></i><br>
                    Date of Biospheric Identity link creation: <b>09-03-2022</b><br>
                    Biospheric Identities sharing this GRAT address: <b>4</b><br>
                    Queries from this keeper (for ${data}): <b>23</b><br>
                    Queries from everyone (for ${data}): <b>120</b><br>
                    Queries from this keeper (for all identities): <b>230</b><br>
                    Queries from everyone (for  all identities): <b>12,000</b><br>
                </div>
            </div>
        </div>
    </div>
    <div class="colorB9">
        <div class="grid1by2 gap23 w100">
            <div class="flex-row grid-span2columns">
                <div class="avatar rlv ovf br6 w230">
                    <img class="block br6" src="/img/${data}.jpg">
                    <div class="editAvatar br6 m-auto pe-none"></div>
                </div>
                <div class="f1 ml23 mobile-mt23 mobile-ml0">
                    <div class="info font12 block-inside lh2 c-B9">
                        Allow access: <i class="toggler togglerON"></i><br>
                        Max file size: <b>1 MB</b><br>
                        Max image dimensions: <b>1000px</b> by <b>1000px</b><br>
                        Allowed formats: <b>JPG, PNG, GIF, SVG</b><br>
                        <button class="btn btn100 m10 ml0">Crop image</button> 
                        <button class="btn btn100 m10 ml0">Download</button><br class="mobile-hide">
                        <button class="btn btn100 m10 ml0">NFT Avatar</button>
                    </div>
                </div>
            </div>
            <div class="grid-span2columns c-B9">
                Biospheric ID: <b class="c-F">${data}.0xf16530b6741bCF6F2081Cd8ca9A7A92F4caAcB74</b><br><br>
                <label for=""><i class="toggler"></i> Bio:</label>
                <textarea style="min-height: 230px; max-height: 320px; max-width: 100%" class="w100 mt5 inputText block font14 br6" maxlength="1000" />
Working heroically on the technology of Gratitude - with the mission to decentralize all the value derived from our biospheric digital selves.

"The body heals with play, the mind heals with laughter and the spirit heals with joy."</textarea>
            </div>
        </div>
    </div>
    <div class="pt15 c-B9">
        <div id="keeperBlocking" class="lh2 w100">
            <h2 class="font23 c-F lh14"><img class="small-icon" src="/svgs/gratitude-token-logo.svg" /> Keeper ${window.location.hostname}</h2>
            <b id="accessStatus" class="c-lime">[ FULL ACCESS ]</b> <button id="blockAccess" class="btn m10" title="BLOCK / UNBLOCK">Block All</button> <span class="c-gray">access to this Gratitude Token address.</span><br>
            <h3 class="font16">Quick Permissions:</h3>
            <div class="ovf-x">
                <table id="permissions" class="oddBG lh1">
                    <tr>
                        <th>Username</th><th>Personal info shared</th><th>Keeper access</th>
                    </tr>
                    <tr>
                        <td>maria</td>
                        <td>1/20</td>
                        <td><i id="${data}" class="toggler togglerON"></i></td>
                    </tr>
                    <tr>
                        <td>daniel</td>
                        <td>1/20</td>
                        <td><i id="${data}" class="toggler togglerON"></i></td>
                    </tr>
                    <tr>
                        <td>catalina</td>
                        <td>1/20</td>
                        <td><i id="${data}" class="toggler togglerON"></i></td>
                    </tr>
                    <tr>
                        <td>lucian</td>
                        <td>1/20</td>
                        <td><i id="${data}" class="toggler togglerON"></i></td>
                    </tr>
                </table>
            </div><br>
        </div>
    </div>
    `;
    relations = (data) => `
<div class="pt15 grid-span2rows">
    <div class="grid2by1 gap23 w100 h100">
        <div>
            <h2 class="font23 c-F">BiiP News</h2><br>
            <span class="c-gray">Latest news from the team at <a href="">gratitudetoken.world</a> verified through BiiP.</span><br>
            <div class="grid3by2 gap10 mt23">
                <div><a class="newsLink block br6" href=""><img class="w100 h-auto block br6" src="/img/launch.gif"></a></div>
                <div class="grid-span2columns pl10">
                    <h2><a href="">GratitudeToken.world launch</a></h2>
                    <p class="lh2 c-lgray"><b class="font14">#1 Milestone:</b><br>On 9 of March 2022 the first milestone from the roadmap of the GratitudeToken.world initiative was completed successfully.<br>
                    The team celebrated the event and also my birthday at the same time.<br>
                    We are all very grateful to be part of this revolution!</p>
                </div>
                <div><a class="newsLink block br6" href=""><img class="w100 h-auto block br6" src="/img/milestone-2.webp"></a></div>
                <div class="grid-span2columns pl10">
                    <h2><a href="">Gratitude & BiiP UI (User Interface)</a></h2>
                    <p class="lh2 c-lgray"><b class="font14">#2 Milestone:</b><br>The second milestone was completed early, before the deadline.<br>
                    The UI is very important for BiiP because it will show just how easy it is to govern your decentralized personal information and finance, on any website or app.<br>
                    <a href="">Check out the video in the article!</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="w100 mobile-mt32">
            <h2 class="font23 c-F">Other Keepers for this address</h2><br>
            <span class="c-gray">Other websites / apps that have partial or full access to your personal information and finances for this address:</span><br>
            <div class="ovf-x">
                <table class="oddBG mt10 mb23">
                    <tr><th>Name</th><th>Access</th><th>Blocked?</th></tr>
                    <tr><td>biosphere.media</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>facebook.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>twitter.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>linkedin.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>substack.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>reddit.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>kickstarter.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>whatsapp</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                    <tr><td>google.com</td><td>Partial Access</td><td><i class="toggler"></i> No</td></tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="pt15 grid-span2rows">
    <div class="w100">
        <h2 class="font23 c-F"><img class="small-icon" src="/svgs/gratitude-token-logo.svg" /> Initial DEX Offering</h2>
        <div class="c-gray mt15">You will only be able to invest in GRAT tokens during the Initial Offering that will last a minimum of 1 year. Small liquidity pools will be inevitably created on DEXes by other people, but the best price / token will always be here during the Initial Offering.</div><br>
        <h3>IDO order history:</h3>
        <div class="ovf-x">
            <table class="oddBG lh1 mt5">
                <tr><th>Amount</th><th>Order Number</th><th>Date</th><th>Status</th><th>TX</th></tr>
                <tr><td class="grat-bg">100.<small>000</small></td><td>#123</td><td>03/06/2023 20:30:00</td><td class="c-lime">Complete</td><td><a href="">Explore</a></td></tr>
                <tr><td class="grat-bg">22,900.<small>000</small></td><td>#124</td><td>03/07/2023 20:30:00</td><td class="c-lime">Complete</td><td><a href="">Explore</a></td></tr>
                <tr><td class="grat-bg">10.<small>000</small></td><td>#125</td><td>03/23/2023 20:30:00</td><td class="c-yellow">Pending</td><td>N/A</td></tr>
            </table>
        </div><br>
        <button id="newOrder" class="grat-bg btn btn-buy mr10 mt10" title="Order GRAT Tokens">NEW ORDER</button> <span class="m-block"><b>Need support?</b> Send us an email at <a href="mailto:ido@gratitudetoken.world">ido@gratitudetoken.world</a></span><br><br>
        <span class="c-gray">Watch the video below for a more in depth explanation about how to invest wisely in the Gratitude Token and what you will be able to use it for.</span><br><br>
        <div class="rlv crp"><img class="w100 h-auto" src="/img/homepage.jpg"/>
        <img style="position: absolute; left: 0; right: 0; margin: 23% auto; z-index: 10; width: 64px; height: 64px" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-256.png"/></div><br><br>

        <div class="textCenter">[ This content is specific to the Keeper you are currently on ]</div>
    </div>
</div>
`;
    finance = (data) => `
<div class="pt15 grid-span2columns">
    <div class="grid2by1 gap23 w100 h100">
        <div class="w100">
            <h2 class="font23 c-F">Financial Governance</h2><br>
            <div class="grid1by4">
                <div>
                    <b>From ${window.location.hostname}</b><br>
                    <div class="grat-bg grat-bg-left0 mt10 c-lime">23,000.<small>000</small></div>
                </div>
                <div>
                    <b>Spent on ${window.location.hostname}</b><br>
                    <div class="grat-bg grat-bg-left0 mt10 c-red">0.<small>000</small></div>
                </div>
                <div>
                    <b>Deposited</b><br>
                    <div class="grat-bg grat-bg-left0 mt10 c-lime">6090.<small>000</small></div>
                </div>
                <div>
                    <b>Withdrawn</b><br>
                    <div class="grat-bg grat-bg-left0 mt10 c-red">8,250.<small>000</small></div>
                </div>
            </div><br><br><br>
            <h3>Spending amount limits:</h3>
            <table class="oddBG lh1 mt5">
                <tr>
                    <th class="grat-bg">Daily</th><th class="grat-bg">Weekly</th><th class="grat-bg">Monthly</th><th class="grat-bg">Yearly</th>
                </tr>
                <tr>
                    <td><input class="tdInput" type="number" value="10" step="0.001" /></td>
                    <td><input class="tdInput" type="number" value="23" step="0.001" /></td>
                    <td><input class="tdInput" type="number" value="230" step="0.001" /></td>
                    <td><input class="tdInput" type="number" value="2300" step="0.001" /></td>
                </tr>
            </table>
            <br><br>
            <h3>Spending transaction limits:</h3>
            <div class="grid1by3">
                <table class="oddBG lh1 mt5">
                    <tr>
                        <th class="grat-bg">Max amount / TX</th><th>TX / day</th>
                    </tr>
                    <tr>
                        <td><input class="tdInput" type="number" value="1" step="0.001" /></td>
                        <td><input class="tdInput" type="number" value="10" step="1" /></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="pt15 grid-span2columns">
    <div class="w100">
        <h2 class="font23 c-F">Transaction History</h2><br>
        <div class="ovf-x">
            <table class="oddBG lh1 mt5 w100">
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>TX ID</th>
                    <th>Initiator</th>
                    <th>Action</th>
                    <th>I/O</th>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">100.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>gratitudetoken.world</td>
                    <td>IDO investment</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">22,900.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>gratitudetoken.world</td>
                    <td>IDO investment</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>Other address</td>
                    <td>Transfer</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:59:00</td>
                    <td><a href="" target="_blank">B8EE97F9</a></td>
                    <td>This address</td>
                    <td>Transfer</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>Other address</td>
                    <td>Transfer</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:59:00</td>
                    <td><a href="" target="_blank">B8EE97F9</a></td>
                    <td>This address</td>
                    <td>Transfer</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>Other address</td>
                    <td>Transfer</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:59:00</td>
                    <td><a href="" target="_blank">B8EE97F9</a></td>
                    <td>This address</td>
                    <td>Transfer</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-in">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:30:00</td>
                    <td><a href="" target="_blank">A8EE07F7</a></td>
                    <td>Other address</td>
                    <td>Transfer</td>
                    <td class="c-lime">In</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">2030.<small>000</small></td>
                    <td>03/06/2023 20:59:00</td>
                    <td><a href="" target="_blank">B8EE97F9</a></td>
                    <td>This address</td>
                    <td>Transfer</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">10.<small>000</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>SHIELD</td>
                    <td>Staking</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">0.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Reaction</td>
                    <td class="c-red">Out</td>
                </tr>
                <tr class="tx-out">
                    <td class="grat-bg">1.<small>230</small></td>
                    <td>03/23/2023 20:59:00</td>
                    <td><a href="" target="_blank">O8EE97F6</a></td>
                    <td>biosphere.media</td>
                    <td>Share</td>
                    <td class="c-lime">In</td>
                </tr>
            </table>
        </div>
    </div>
</div>
`;
}

let addressBlocked = 0;

// short messages system
let shortMessages = function(el) {
    el.forEach((el) => {
        el.addEventListener('click', event => {
            el.classList.toggle('togglerON');
            const toggledON = el.classList.contains('togglerON');
            toggledON ? $('.shortMessage').innerHTML = '<div class="shorty"><div>Enabled</div></div>' : $('.shortMessage').innerHTML = '<div class="shorty"><div>Disabled</div></div>';

            let count = 0;
            // count toggled switches if contains .togglerON class
            $$('#permissions .toggler').forEach((item) => {
                item.classList.contains('togglerON') ? count += 1 : null;
            });
            // these conditions are for Relations section (Quick Permissions)
            if ($('#identity').classList.contains('activeTab')) {
                // then set addressBlocked variable to correct value
                if (count === 0) {
                    addressBlocked = 1;
                    $('#accessStatus').textContent = '[ ALL BLOCKED ]';
                    $('#accessStatus').classList.remove('c-orange');
                    $('#accessStatus').classList.remove('c-lime');
                    $('#accessStatus').classList.add('c-red');

                    $('#blockAccess').textContent = 'UNBLOCK ALL';
                    $('#blockAccess').classList.add('btn-green');
                }
                if (count === usernames.length) {
                    addressBlocked = 0;
                    $('#accessStatus').textContent = '[ FULL ACCESS ]';
                    $('#accessStatus').classList.remove('c-orange');
                    $('#accessStatus').classList.remove('c-red');
                    $('#accessStatus').classList.add('c-lime');

                    $('#blockAccess').textContent = 'BLOCK ALL';
                    $('#blockAccess').classList.remove('btn-green');
                } 
                if (count > 0 && count < usernames.length) {
                    addressBlocked = 2;
                    $('#accessStatus').textContent = '[ PARTIALLY BLOCKED ]';
                    $('#accessStatus').classList.remove('c-lime');
                    $('#accessStatus').classList.remove('c-red');
                    $('#accessStatus').classList.add('c-orange');

                    $('#blockAccess').classList.remove('btn-green');
                    $('#blockAccess').textContent = 'BLOCK ALL';
                }
            }

        });
    });
}

let blockBTN = function(el) {
    // block current Keeper's access to all usernames for this address
    el.addEventListener('click', event => {
        $('#accessStatus').classList.remove('c-orange');

        // I check to see if any of the users are already blocked or unblocked
        $$('#permissions .toggler').forEach((item, i) => {
            addressBlocked === 0 || addressBlocked === 2 ? item.classList.remove('togglerON') : item.classList.add('togglerON');
        });

        if (addressBlocked === 0 || addressBlocked === 2) {
            addressBlocked = 1;
            $('#accessStatus').textContent = '[ ALL BLOCKED ]';
            el.textContent = 'UNBLOCK ALL';
            el.classList.add('btn-green'); // make button bg green for unblocking
            $('#accessStatus').classList.add('c-red');
            $('#accessStatus').classList.remove('c-green');
        } else {
            addressBlocked = 0;
            $('#accessStatus').textContent = '[ FULL ACCESS ]';
            el.textContent = 'BLOCK ALL';
            el.classList.remove('btn-green'); // make bg red (default)
            $('#accessStatus').classList.add('c-lime');
            $('#accessStatus').classList.remove('c-red');
        }
    });
}

const hideMobileNav = () => {
    // hide the mobile BiiP navigation and stuff
    document.body.classList.remove('BiiP_nav_open');
    if ($('.BiiP_nav')) {
        $('.BiiP_nav').classList.remove('BiiP_mobile_nav_open');
        $('#BiiP_burgers').classList.remove('BiiP_burgers_clicked');
        $('.BiiP_nav_open') ? $('.BiiP_content').scrollTop = 0 : null;
    }
}



// a function to populate the data from the selected user
let showData = function() {
    const callData = new allData;
    // show the data for this selected user
    $('.BiiP_data') ? $('.BiiP_data').remove() : null;
    document.body.style.overflow = 'hidden';
    let data_div = document.createElement('div');
    data_div.classList.add('BiiP_data');
    BiiP_element.classList.add('BiiP_data_visible');
    data_div.innerHTML = callData.biip_template(selectedUser.u);
    document.body.appendChild(data_div);
    $('.BiiP_data').style = 'display: flex';
    // on first render, we show the identity section
    $('.BiiP_data .BiiP_content').innerHTML = callData.identity(selectedUser.u);

    // then we need to check what the user clicks on
    // store the 3 main category buttons
    let buttons = $$('.BiiP_data .BiiP_nav .BiiP_tab');

    // run this function once on showData, then again on tab switch
    let AccessBTN = $('#blockAccess');
    blockBTN(AccessBTN);
    // add an event listener to see what was clicked
    buttons.forEach((item, index) => {
        item.addEventListener('click', event => {
            // remove .activeTab class from all
            buttons.forEach((el) => {
                el.classList.remove('activeTab');
            });

            // add the .activeTab class on the clicked button
            item.classList.add('activeTab');
            $('.BiiP_data .BiiP_content').innerHTML = callData[item.id](selectedUser.u);

            // run shortMessages 
            shortMessages($$('.toggler'));

            // run the block button method
            AccessBTN = $('#blockAccess');
            AccessBTN ? blockBTN(AccessBTN) : null;

            // hide the mobile BiiP navigation and stuff
            hideMobileNav();
        });
    });

    // run shortMessages
    shortMessages($$('.toggler'));

    // close data when clicking/touching the X
    $('#BiiP_close_data').addEventListener('click', e => {
        closeData();
    });

    //BiiP mobile burgers toggle
    const BiiP_mobile_toggle = () => {
        $('.BiiP_nav').classList.toggle('BiiP_mobile_nav_open');
        document.body.classList.toggle('BiiP_nav_open');
        $('#BiiP_burgers').classList.toggle('BiiP_burgers_clicked');
    }

    $('#BiiP_burgers').addEventListener('click', () => {
        BiiP_mobile_toggle();
    });

    $('.BiiP_content').addEventListener('click', () => {
        hideMobileNav();
    });
}

const closeData = function() {
    $('.BiiP_data') ? $('.BiiP_data').remove() : null;
    BiiP_element.classList.remove('BiiP_data_visible');
    BiiP_element.style = '';
    showMainContent();
    hideMobileNav();
}


BiiP_element.innerHTML += BiiP_svg + '<div class="shortMessage font23"></div><div id="BiiP_circle"></div><audio controls id="biip_sound"><source src="/sounds/biip.mp3" type="audio/mpeg"></audio><audio controls id="select_sound"><source src="/sounds/select.mp3" type="audio/mpeg"></audio><audio controls id="select_reverse"><source src="/sounds/select-reverse.mp3" type="audio/mpeg"></audio>' + BiiP_style;

// what happens when clicking on the BiiP svg
let BiiP_click = function() {
    // if the BiiP UI is not visible
    if (!BiiP_UI_visible) {
        hideMobileNav();
        window.addEventListener("wheel", wheelFunction);
        wrapper.addEventListener("click", clickFunction);

        hideMainContent('none');
        BiiP_element.classList.remove('BiiP_data_visible');
        BiiP_element.style = '';
        // if the BiiP UI is not visible and we have a selected user and there is no BiiP data populated
        if (selectedUser.u && !$('.BiiP_data')) {
            showData(selectedUser.u);
        } else {
            // if the BiiP UI is not visible and we don't have a selected user and there is BiiP data populated
            $('#select_reverse').playbackRate = 1.2;
            $('#select_reverse').play();
            BiiP_UI_visible = true;
            $('body').style.overflow = 'hidden';
            BiiP_element.classList.add('BiiP_center');
            $('#BiiP_wrapper').style = 'display: flex';
            $('#BiiP_wrapper').innerHTML += msg1;

            // an example of a basic message
            setTimeout(function(){
                $('biip_message') ? $('biip_message').classList.add('showBiiP_message') : null;
            }, 900);

            setTimeout(function(){
                if (BiiP_UI_visible) {
                    // calculate the avatars positioning
                    let biips = '';
                    
                    // add HTML for each
                    usernames.forEach(item => { // here make this css var work with the values: transform: rotate('+degrees+'deg) translate(155.5vh) rotate(-'+degrees+'deg)
                        biips += '<div class="BiiP_username" style="transform: '+ rotator(degrees) +'; background-image: url(/img/'+item.u+'.jpg)"><b>'+item.u+'</b></div>';
                        degrees += 6;
                    });
                    
                    // create a node with all this and add it to BiiP after, also remove it when closing (on the else below)
                    $('#BiiP_circle').innerHTML += biips;
                    $('#BiiP_circle').style = 'transform: rotate(0)';

                    // clicking on a BiiP user to select the user
                    $$('.BiiP_username').forEach((item, index) => {
                        item.addEventListener('click', event => {
                            $('.BiiP_svg').classList.add('pe');
                            let selected = document.createElement('div');
                            selected.classList.add('selectedUser');

                            setTimeout(function(){
                                // add the selectedUser div
                                $('.selectedUser') ? $('.selectedUser').remove() : null;
                                selected.style = 'background-image: url(/img/'+selectedUser.u+'.jpg)';
                                BiiP_element.appendChild(selected);
                                $('#biip_sound').play();

                                showData();
                                $('.BiiP_svg').classList.remove('pe');
                            }, 1111);
                            
                            // do some stuff after
                            selectedUser = usernames[index];
                            item.classList.add('userCenter');
                            //item.style.transform = 'translate(0, 0) scale(0)';

                            $('biip_message') ? $('biip_message').classList.remove('showBiiP_message') : null;
                            $('.BiiP_data') ? $('.BiiP_data').style = 'display: none' : null;
                            closeBiiP();
                        });
                    });
                }
            }, 900);
        }
    } else {
        showMainContent();
        closeBiiP();
        selectedUser.u ? BiiP_element.classList.add('BiiP_data_visible') : null;
    }
}

const closeBiiP = function() {
    BiiP_UI_visible = false;
    degrees = 90;
    window.removeEventListener("wheel", wheelFunction);
    wrapper.removeEventListener("click", clickFunction);
    
    $('body').style.overflow = '';
    $('#BiiP_wrapper').style = 'display: none';
    $('biip_message').remove();
    $('#BiiP_circle').style = '';
    $('#BiiP_circle').innerHTML =  '';
    setTimeout(function(){
        BiiP_element.classList.remove('BiiP_center');
    }, 230);
    $('#select_reverse').currentTime = 0;
    $('#select_reverse').playbackRate = 1.69;
    $('#select_reverse').play();
}

// on BiiP_svg click
$('.BiiP_svg').addEventListener('click', event => {
    BiiP_click();
});

// close data or BiiP when pressing Escape key
window.addEventListener('keyup', e => {
    if (e.key === "Escape") {
        closeData();
        $('.BiiP_center') ? closeBiiP() : null;
    }
    if (e.ctrlKey && e.key === 'b') {
        BiiP_click();
    }
    // TO DO: must select usernames based on CTRL + number key press from 0 to 9 ? or just numbers from 0 to 9
});

let showMainContent = function() {
    $('.logo').style = 'display: flex';
    $('header').style = 'display: block';
    $('.wrapper') ? $('.wrapper').style = 'display: flex' : null;
    document.body.style.overflow = null;
}

let hideMainContent = function(string) {
    $('.logo').style = 'display: ' + string;
    $('header').style = 'display: ' + string;
    $('.wrapper') ? $('.wrapper').style = 'display: ' + string : null;
}


// initial BiiP_circle usernames angle and rotating function
let degrees = 90;
let finalAngle = degrees;
let wMid = window.innerWidth/2;
let hMid = window.innerHeight/1.4;
const wrapper = $('#BiiP_wrapper');


let rotator = (degrees) => {
    return `rotate(${degrees}deg) translate(155.5vh) rotate(-${degrees}deg)`;
}

let wheelFunction = (event) => {
    if ($('.BiiP_center')) {
        let y = event.deltaY;
        $$('.BiiP_username').forEach((item, i) => {
            y > 0 ? finalAngle += 6 : finalAngle -= 6;
            item.style.transform = rotator(finalAngle);
        });
    }
}

let clickFunction = (event) => {
    const X = event.screenX || event.touches[0].screenX;
    const Y = event.screenY || event.touches[0].screenY;
    if ($('.BiiP_center') && Y > hMid) {
        $$('.BiiP_username').forEach((item) => {
            X < wMid ? finalAngle += 4.7 : finalAngle -= 4.7;
            item.style.transform = rotator(finalAngle);
        });
    }
}
