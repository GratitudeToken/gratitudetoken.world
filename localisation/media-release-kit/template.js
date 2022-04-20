(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<a class=\"logo\" href=\"/media-release-kit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"mrk") || (depth0 != null ? lookupProperty(depth0,"mrk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mrk","hash":{},"data":data,"loc":{"start":{"line":2,"column":42},"end":{"line":2,"column":49}}}) : helper)))
    + "</a>\r\n\r\n<svg class=\"hamburger\"><path d=\"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z\"/></svg>\r\n<BiiP></BiiP>\r\n<header>\r\n<svg class=\"close\" viewBox=\"0 0 128 128\"><path d=\"M64 0a64 64 0 1 0 64 64A64.07 64.07 0 0 0 64 0Zm0 122a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z\"/><path d=\"M92.12 35.79a3 3 0 0 0-4.24 0L64 59.75l-23.87-24A3 3 0 0 0 35.88 40l23.88 24-23.88 24a3 3 0 0 0 4.25 4.24L64 68.25l23.88 24A3 3 0 0 0 92.13 88L68.24 64l23.89-24a3 3 0 0 0-.01-4.21Z\"/></svg>\r\n<nav id=\"nav\">\r\n    <a id=\"languageSelect\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang-code") || (depth0 != null ? lookupProperty(depth0,"lang-code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang-code","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":43}}}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"language") || (depth0 != null ? lookupProperty(depth0,"language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":59}}}) : helper)))
    + "</a>\r\n    <a href=\"/\"><img src=\"/svgs/gratitude-token-logo.svg\" loading=\"lazy\" alt=\"GratitudeTone.world\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":10,"column":100},"end":{"line":10,"column":108}}}) : helper)))
    + "</a>\r\n    <a href=\"/genesis\" class=\"genesisIcon\"><img src=\"/svgs/genesis-logo.svg\" loading=\"lazy\" alt=\"Gratitude Genesis Initiative Logo svg\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Genesis") || (depth0 != null ? lookupProperty(depth0,"Genesis") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Genesis","hash":{},"data":data,"loc":{"start":{"line":11,"column":137},"end":{"line":11,"column":148}}}) : helper)))
    + "</a>\r\n    <a href=\"/shield\"><img src=\"/svgs/SHIELD-logo.svg\" loading=\"lazy\" alt=\"SHIELD: Sustainable Holistic Intelligent Enterprise & Leaderless Development logo svg\"/>SHIELD</a>\r\n    <a href=\"/white-paper\"><img src=\"/svgs/pdf-icon.svg\" loading=\"lazy\" alt=\"pdf whitepaper svg icon\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":13,"column":103},"end":{"line":13,"column":117}}}) : helper)))
    + "</a>\r\n</nav>\r\n</header>\r\n\r\n<div class=\"wrapper\">\r\n<label class=\"showSidebar\" for=\"showSidebar\"></label>\r\n<input type=\"checkbox\" name=\"showSidebar\" id=\"showSidebar\">\r\n<nav>\r\n    <br><strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"dld") || (depth0 != null ? lookupProperty(depth0,"dld") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dld","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":23}}}) : helper)))
    + ":</strong><br>\r\n    <a href=\"/media-release-kit/Media_Release_Kit.zip\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"mrk") || (depth0 != null ? lookupProperty(depth0,"mrk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mrk","hash":{},"data":data,"loc":{"start":{"line":22,"column":55},"end":{"line":22,"column":62}}}) : helper)))
    + "</a><br>\r\n</nav>\r\n<div class=\"content\">\r\n    <div id=\"breadcrumbs\"><a href=\"/media-release-kit\"><b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mrk") || (depth0 != null ? lookupProperty(depth0,"mrk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mrk","hash":{},"data":data,"loc":{"start":{"line":25,"column":58},"end":{"line":25,"column":65}}}) : helper)))
    + "</b></a> &#8827; <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dld") || (depth0 != null ? lookupProperty(depth0,"dld") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dld","hash":{},"data":data,"loc":{"start":{"line":25,"column":94},"end":{"line":25,"column":101}}}) : helper)))
    + "</a></div>\r\n    <br>\r\n    <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mainHeading") || (depth0 != null ? lookupProperty(depth0,"mainHeading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainHeading","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":23}}}) : helper)))
    + "</h1>\r\n    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"mainParagraph") || (depth0 != null ? lookupProperty(depth0,"mainParagraph") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainParagraph","hash":{},"data":data,"loc":{"start":{"line":28,"column":7},"end":{"line":28,"column":26}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    <div class=\"grid-wrapper\">\r\n    <div class=\"fit\"><img src=\"/media-release-kit/img/gratitude-token-logo.png\"></div>\r\n    <div class=\"fit\"><img src=\"/media-release-kit/img/Genesis-Logo.png\"></div>\r\n    <div class=\"fit\"><img src=\"/media-release-kit/img/SHIELD-Logo.png\"></div>\r\n    <div><img src=\"/img/homepage-twitter.jpg\"></div>\r\n    <div><img src=\"/shield/img/SHIELD-twitter.jpg\"></div>\r\n    <div><img src=\"/genesis/img/Genesis-twitter.jpg\"></div>\r\n    <div class=\"wide\"><img src=\"/media-release-kit/img/Distribution-and-Growth.jpg\"></div>\r\n    <div class=\"tall\"><img src=\"/media-release-kit/img/Page-2.jpg\"></div>\r\n    <div class=\"wide\"><img src=\"/media-release-kit/img/media-release-kit-twitter.jpg\"></div>\r\n    <div class=\"wide\"><img src=\"/media-release-kit/img/GENESIS-HEADER.jpg\"></div>\r\n    <div class=\"wide\"><img src=\"/media-release-kit/img/SHIELD-MEMBERSHIPS-taller.jpg\"></div>\r\n    <div class=\"tall\"><img src=\"/media-release-kit/img/SHIELD.jpg\"></div>\r\n    </div>\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"recruitment") || (depth0 != null ? lookupProperty(depth0,"recruitment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recruitment","hash":{},"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":43,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n    <div class='shareThis'>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"share") || (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"share","hash":{},"data":data,"loc":{"start":{"line":44,"column":27},"end":{"line":44,"column":38}}}) : helper))) != null ? stack1 : "")
    + "</div><div class='sharethis-inline-share-buttons'></div>\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer_nav") || (depth0 != null ? lookupProperty(depth0,"footer_nav") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer_nav","hash":{},"data":data,"loc":{"start":{"line":45,"column":4},"end":{"line":45,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n    <footer>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer") || (depth0 != null ? lookupProperty(depth0,"footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data,"loc":{"start":{"line":47,"column":8},"end":{"line":47,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"copy") || (depth0 != null ? lookupProperty(depth0,"copy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data,"loc":{"start":{"line":48,"column":8},"end":{"line":48,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </footer>\r\n</div>\r\n</div>";
},"useData":true});
templates['head'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<meta name=\"description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaDescription") || (depth0 != null ? lookupProperty(depth0,"metaDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaDescription","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}}) : helper)))
    + "\">\r\n<!-- Open Graph -->\r\n<meta property=\"og:title\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaTitle") || (depth0 != null ? lookupProperty(depth0,"metaTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaTitle","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":48}}}) : helper)))
    + "\" />\r\n<meta property=\"og:type\" content=\"website\" />\r\n<meta property=\"og:description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaDescription") || (depth0 != null ? lookupProperty(depth0,"metaDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaDescription","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":60}}}) : helper)))
    + "\" />\r\n<meta property=\"og:image\" content=\"https://gratitudetoken.world/media-release-kit/img/media-release-kit.jpg\" />\r\n<meta property=\"og:url\" content=\"https://gratitudetoken.world\" />\r\n<meta property=\"og:site_name\" content=\"gratitudetoken.world\" />\r\n\r\n<!-- Twitter Cards -->\r\n<meta name=\"twitter:title\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaTitle") || (depth0 != null ? lookupProperty(depth0,"metaTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaTitle","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":49}}}) : helper)))
    + "\">\r\n<meta name=\"twitter:description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaDescription") || (depth0 != null ? lookupProperty(depth0,"metaDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaDescription","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":61}}}) : helper)))
    + "\">\r\n<meta name=\"twitter:image\" content=\"https://gratitudetoken.world/media-release-kit/img/media-release-kit-twitter.jpg\">\r\n<meta name=\"twitter:site\" content=\"@Gratitude_World\">\r\n<meta name=\"twitter:creator\" content=\"@Lucian_Apetrei\">\r\n\r\n<title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mrk") || (depth0 != null ? lookupProperty(depth0,"mrk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mrk","hash":{},"data":data,"loc":{"start":{"line":17,"column":7},"end":{"line":17,"column":14}}}) : helper)))
    + " | GratitudeToken.world</title>";
},"useData":true});
})();