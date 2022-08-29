(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"logo\" href=\"/white-paper\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":50}}}) : helper)))
    + "</a>\r\n\r\n<svg class=\"hamburger\"><path d=\"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z\"/></svg>\r\n<BiiP></BiiP>\r\n<header>\r\n<svg class=\"close\" viewBox=\"0 0 128 128\"><path d=\"M64 0a64 64 0 1 0 64 64A64.07 64.07 0 0 0 64 0Zm0 122a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z\"/><path d=\"M92.12 35.79a3 3 0 0 0-4.24 0L64 59.75l-23.87-24A3 3 0 0 0 35.88 40l23.88 24-23.88 24a3 3 0 0 0 4.25 4.24L64 68.25l23.88 24A3 3 0 0 0 92.13 88L68.24 64l23.89-24a3 3 0 0 0-.01-4.21Z\"/></svg>\r\n<nav id=\"nav\">\r\n    <a href=\"/\"><img src=\"/svgs/home.svg\" loading=\"lazy\" alt=\"Homepage\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":8,"column":73},"end":{"line":8,"column":81}}}) : helper)))
    + "</a>\r\n    <a href=\"/tokenomics\"><img src=\"/svgs/gratitude-token-logo.svg\" loading=\"lazy\" alt=\"Tokenomics\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"buy") || (depth0 != null ? lookupProperty(depth0,"buy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buy","hash":{},"data":data,"loc":{"start":{"line":9,"column":101},"end":{"line":9,"column":108}}}) : helper)))
    + "</a>\r\n    <a href=\"/white-paper\"><img src=\"/svgs/pdf-icon.svg\" loading=\"lazy\" alt=\"White Paper\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":10,"column":91},"end":{"line":10,"column":105}}}) : helper)))
    + "</a>\r\n    <a id=\"languageSelect\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang-code") || (depth0 != null ? lookupProperty(depth0,"lang-code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang-code","hash":{},"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":11,"column":43}}}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"language") || (depth0 != null ? lookupProperty(depth0,"language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":11,"column":47},"end":{"line":11,"column":59}}}) : helper)))
    + "</a>\r\n</nav>\r\n</header>\r\n\r\n<div class=\"wrapper\">\r\n    <label class=\"showSidebar\" for=\"showSidebar\"></label>\r\n    <input id=\"showSidebar\" type=\"checkbox\" name=\"showSidebar\">\r\n    <nav id=\"index\">\r\n      <span id=\"h0\" class=\"H1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cover") || (depth0 != null ? lookupProperty(depth0,"cover") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":40}}}) : helper)))
    + "</span><br>\r\n    </nav>\r\n    <div class=\"content\">\r\n        <div id=\"breadcrumbs\"><a href=\"/white-paper\"><b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":22,"column":56},"end":{"line":22,"column":70}}}) : helper)))
    + "</b></a> &#8827; <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"gratitude") || (depth0 != null ? lookupProperty(depth0,"gratitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gratitude","hash":{},"data":data,"loc":{"start":{"line":22,"column":99},"end":{"line":22,"column":112}}}) : helper)))
    + "</a></div>\r\n        <div id=\"white-paper\">\r\n            <page id=\"page0\" class=\"cover\">\r\n            <span class=\"firstCoverText\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"smallText") || (depth0 != null ? lookupProperty(depth0,"smallText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"smallText","hash":{},"data":data,"loc":{"start":{"line":25,"column":41},"end":{"line":25,"column":54}}}) : helper)))
    + "</span>\r\n            <h1 class=\"heading\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"coverTitle") || (depth0 != null ? lookupProperty(depth0,"coverTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coverTitle","hash":{},"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":26,"column":46}}}) : helper)))
    + "</h1>\r\n            <span class=\"thirdCoverText\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":27,"column":41},"end":{"line":27,"column":55}}}) : helper)))
    + "</span>\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":28,"column":15},"end":{"line":28,"column":25}}}) : helper)))
    + ": <strong>Lucian Apetrei</strong><br>\r\n                <small>"
    + alias4(((helper = (helper = lookupProperty(helpers,"bca") || (depth0 != null ? lookupProperty(depth0,"bca") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bca","hash":{},"data":data,"loc":{"start":{"line":29,"column":23},"end":{"line":29,"column":30}}}) : helper)))
    + "</small><br><br>\r\n                <cite><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"statement1") || (depth0 != null ? lookupProperty(depth0,"statement1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statement1","hash":{},"data":data,"loc":{"start":{"line":30,"column":25},"end":{"line":30,"column":39}}}) : helper)))
    + "</i></cite>\r\n            </p>\r\n            </page>\r\n            <page id=\"page1\" class=\"cover\" style=\"background-image: url(/white-paper/img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"page2bg") || (depth0 != null ? lookupProperty(depth0,"page2bg") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page2bg","hash":{},"data":data,"loc":{"start":{"line":33,"column":89},"end":{"line":33,"column":100}}}) : helper)))
    + ".jpg)\"></page>\r\n        </div><!-- #white-paper -->\r\n        \r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"recruitment") || (depth0 != null ? lookupProperty(depth0,"recruitment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recruitment","hash":{},"data":data,"loc":{"start":{"line":36,"column":8},"end":{"line":36,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n        <div class='shareThis'>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"share") || (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"share","hash":{},"data":data,"loc":{"start":{"line":37,"column":31},"end":{"line":37,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</div><div class='sharethis-inline-share-buttons'></div>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer_nav") || (depth0 != null ? lookupProperty(depth0,"footer_nav") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer_nav","hash":{},"data":data,"loc":{"start":{"line":38,"column":8},"end":{"line":38,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n        <footer>\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer") || (depth0 != null ? lookupProperty(depth0,"footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"copy") || (depth0 != null ? lookupProperty(depth0,"copy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </footer>\r\n    </div><!-- .content -->\r\n</div><!-- .wrapper -->";
},"useData":true});
})();