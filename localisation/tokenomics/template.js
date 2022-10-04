(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"logo\" href=\"/tokenomics\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tokenomics") || (depth0 != null ? lookupProperty(depth0,"tokenomics") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tokenomics","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":49}}}) : helper)))
    + "</a>\r\n<svg class=\"hamburger\"><path d=\"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z\"/></svg>\r\n<BiiP></BiiP>\r\n<header>\r\n<svg class=\"close\" viewBox=\"0 0 128 128\"><path d=\"M64 0a64 64 0 1 0 64 64A64.07 64.07 0 0 0 64 0Zm0 122a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z\"/><path d=\"M92.12 35.79a3 3 0 0 0-4.24 0L64 59.75l-23.87-24A3 3 0 0 0 35.88 40l23.88 24-23.88 24a3 3 0 0 0 4.25 4.24L64 68.25l23.88 24A3 3 0 0 0 92.13 88L68.24 64l23.89-24a3 3 0 0 0-.01-4.21Z\"/></svg>\r\n    <nav id=\"nav\">\r\n        <a href=\"/\"><img src=\"/svgs/home.svg\" loading=\"lazy\" alt=\"Homepage\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":7,"column":77},"end":{"line":7,"column":85}}}) : helper)))
    + "</a>\r\n        <a href=\"/presale\"><img src=\"/svgs/gratitude-token-logo.svg\" loading=\"lazy\" alt=\"Public Presale\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"presale") || (depth0 != null ? lookupProperty(depth0,"presale") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"presale","hash":{},"data":data,"loc":{"start":{"line":8,"column":106},"end":{"line":8,"column":117}}}) : helper)))
    + "</a>\r\n        <a href=\"/tokenomics\"><img src=\"/svgs/tokenomics.svg\" loading=\"lazy\" alt=\"Tokenomics\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"tokenomics") || (depth0 != null ? lookupProperty(depth0,"tokenomics") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tokenomics","hash":{},"data":data,"loc":{"start":{"line":9,"column":95},"end":{"line":9,"column":109}}}) : helper)))
    + "</a>\r\n        <a href=\"/white-paper\"><img src=\"/svgs/pdf-icon.svg\" loading=\"lazy\" alt=\"White Paper\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"whitePaper") || (depth0 != null ? lookupProperty(depth0,"whitePaper") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whitePaper","hash":{},"data":data,"loc":{"start":{"line":10,"column":95},"end":{"line":10,"column":109}}}) : helper)))
    + "</a>\r\n        <a id=\"languageSelect\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang-code") || (depth0 != null ? lookupProperty(depth0,"lang-code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang-code","hash":{},"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":11,"column":47}}}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"language") || (depth0 != null ? lookupProperty(depth0,"language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":11,"column":51},"end":{"line":11,"column":63}}}) : helper)))
    + "</a>\r\n    </nav>\r\n</header>\r\n\r\n<div class=\"wrapper-wide\" style=\"background: none\">\r\n    <div class=\"content-wide\" style=\"background: none\">\r\n        <h1 style=\"text-align: center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":48}}}) : helper)))
    + "</h1>\r\n        <br>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"tokenomics_img") || (depth0 != null ? lookupProperty(depth0,"tokenomics_img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tokenomics_img","hash":{},"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\r\n        <br><br>\r\n        <h2><a href=\"/presale\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title1") || (depth0 != null ? lookupProperty(depth0,"title1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title1","hash":{},"data":data,"loc":{"start":{"line":21,"column":31},"end":{"line":21,"column":41}}}) : helper)))
    + "</a> <img class=\"mini-icon\" style=\"margin-left: 12px\" src=\"/svgs/exclamation.svg\" /> LIVE</h2>\r\n        <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"starts") || (depth0 != null ? lookupProperty(depth0,"starts") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"starts","hash":{},"data":data,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":23}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n        <b style=\"color: white\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"discount_roadmap") || (depth0 != null ? lookupProperty(depth0,"discount_roadmap") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"discount_roadmap","hash":{},"data":data,"loc":{"start":{"line":23,"column":32},"end":{"line":23,"column":52}}}) : helper)))
    + "</b>\r\n        <p style=\"font-size: 14px\">\r\n        <b style=\"color: #00ff9d\">$0.90 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":25,"column":52},"end":{"line":25,"column":63}}}) : helper)))
    + " <span style=\"color: white\">10 Sept - 16 Sept</span> (EEST, +3)<br>\r\n        <b style=\"color: #00ff6a\">$0.91 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":26,"column":52},"end":{"line":26,"column":63}}}) : helper)))
    + " <span style=\"color: white\">17 Sept - 23 Sept</span> (EEST, +3)<br>\r\n        <b style=\"color: #00ff2a\">$0.92 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":27,"column":52},"end":{"line":27,"column":63}}}) : helper)))
    + " <span style=\"color: white\">24 Sept - 30 Sept</span> (EEST, +3)<br>\r\n        <b style=\"color: #15ff00\">$0.93 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":28,"column":52},"end":{"line":28,"column":63}}}) : helper)))
    + " <span style=\"color: white\">1 Oct - 7 Oct</span> (EEST, +3)<br>\r\n        <b style=\"color: #88ff00\">$0.94 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":29,"column":52},"end":{"line":29,"column":63}}}) : helper)))
    + " <span style=\"color: white\">8 Oct - 14 Oct</span> (EEST, +3)<br>\r\n        <b style=\"color: #fbff0d\">$0.95 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":30,"column":52},"end":{"line":30,"column":63}}}) : helper)))
    + " <span style=\"color: white\">15 Oct - 21 Oct</span> (EEST, +3)<br>\r\n        <b style=\"color: #ffbb00\">$0.96 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":31,"column":52},"end":{"line":31,"column":63}}}) : helper)))
    + " <span style=\"color: white\">22 Oct - 28 Oct</span> (EEST, +3)<br>\r\n        <b style=\"color: #ff5e00\">$0.97 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":32,"column":52},"end":{"line":32,"column":63}}}) : helper)))
    + " <span style=\"color: white\">29 Oct - 4 Nov</span> (EEST, +3)<br>\r\n        <b style=\"color: #ff3300\">$0.98 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":33,"column":52},"end":{"line":33,"column":63}}}) : helper)))
    + " <span style=\"color: white\">5 Nov - 11 Nov</span> (EEST, +3)<br>\r\n        <b style=\"color: #e20b0b\">$0.99 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":34,"column":52},"end":{"line":34,"column":63}}}) : helper)))
    + " <span style=\"color: white\">12 Nov - 18 Nov</span> (EEST, +3)<br>\r\n        <b style=\"color: #ff0d0d\">$1.00 / Token</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"between") || (depth0 != null ? lookupProperty(depth0,"between") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"between","hash":{},"data":data,"loc":{"start":{"line":35,"column":52},"end":{"line":35,"column":63}}}) : helper)))
    + " <span style=\"color: white\">19 Nov - 2 Dec</span> (EEST, +3)<br><br>\r\n        </p>\r\n        <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"p1") || (depth0 != null ? lookupProperty(depth0,"p1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p1","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n        <br><br>\r\n        <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title2") || (depth0 != null ? lookupProperty(depth0,"title2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title2","hash":{},"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":39,"column":22}}}) : helper)))
    + "</h2>\r\n        <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"p2") || (depth0 != null ? lookupProperty(depth0,"p2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p2","hash":{},"data":data,"loc":{"start":{"line":40,"column":11},"end":{"line":40,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n        <br><br>\r\n        <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title3") || (depth0 != null ? lookupProperty(depth0,"title3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title3","hash":{},"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":42,"column":22}}}) : helper)))
    + "</h2>\r\n        <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"p3") || (depth0 != null ? lookupProperty(depth0,"p3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p3","hash":{},"data":data,"loc":{"start":{"line":43,"column":11},"end":{"line":43,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n        <br><br>\r\n        <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title4") || (depth0 != null ? lookupProperty(depth0,"title4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title4","hash":{},"data":data,"loc":{"start":{"line":45,"column":12},"end":{"line":45,"column":22}}}) : helper)))
    + "</h2>\r\n        <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"p4") || (depth0 != null ? lookupProperty(depth0,"p4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"p4","hash":{},"data":data,"loc":{"start":{"line":46,"column":11},"end":{"line":46,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n\r\n        - Charts with our simulation results coming here soon -\r\n\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"recruitment") || (depth0 != null ? lookupProperty(depth0,"recruitment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recruitment","hash":{},"data":data,"loc":{"start":{"line":50,"column":8},"end":{"line":50,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n        <div class='shareThis'>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"share") || (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"share","hash":{},"data":data,"loc":{"start":{"line":51,"column":31},"end":{"line":51,"column":42}}}) : helper))) != null ? stack1 : "")
    + "</div><div class='sharethis-inline-share-buttons'></div>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer_nav") || (depth0 != null ? lookupProperty(depth0,"footer_nav") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer_nav","hash":{},"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":52,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n        <footer>\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"footer") || (depth0 != null ? lookupProperty(depth0,"footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":54,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"copy") || (depth0 != null ? lookupProperty(depth0,"copy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data,"loc":{"start":{"line":55,"column":12},"end":{"line":55,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </footer>\r\n    </div>\r\n</div>";
},"useData":true});
})();