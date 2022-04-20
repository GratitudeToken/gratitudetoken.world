(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"wrapper\">\r\n    <nav>\r\n        <a id=\"languageSelect\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang-code") || (depth0 != null ? lookupProperty(depth0,"lang-code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang-code","hash":{},"data":data,"loc":{"start":{"line":3,"column":34},"end":{"line":3,"column":47}}}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"language") || (depth0 != null ? lookupProperty(depth0,"language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":63}}}) : helper)))
    + "</a>\r\n    </nav>\r\n    <div id=\"success\"></div>\r\n    <div id=\"message\"></div>\r\n    <a href=\"/\" class=\"logo\"><img src=\"/svgs/gratitude-token-logo.svg\" style=\"width: 32px; height: 32px\"/>"
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":7,"column":106},"end":{"line":7,"column":114}}}) : helper)))
    + "</a>\r\n    <img src=\"/img/SHIELD-Stargate.jpg\" alt=\"Stargate\" class=\"stargate\"/>\r\n    <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"join_puzzle") || (depth0 != null ? lookupProperty(depth0,"join_puzzle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join_puzzle","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":23}}}) : helper)))
    + "</h1>\r\n    <form class=\"choose\">\r\n        <div class=\"choices\">\r\n            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"choose_role") || (depth0 != null ? lookupProperty(depth0,"choose_role") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"choose_role","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":31}}}) : helper)))
    + "</h2>\r\n            <input type=\"radio\" id=\"awareness\" name=\"role\">\r\n            <label class=\"choice\" for=\"awareness\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ac") || (depth0 != null ? lookupProperty(depth0,"ac") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ac","hash":{},"data":data,"loc":{"start":{"line":14,"column":50},"end":{"line":14,"column":56}}}) : helper)))
    + "</label>\r\n            <input type=\"radio\" id=\"code\" name=\"role\">\r\n            <label class=\"choice\" for=\"code\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cl") || (depth0 != null ? lookupProperty(depth0,"cl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cl","hash":{},"data":data,"loc":{"start":{"line":16,"column":45},"end":{"line":16,"column":51}}}) : helper)))
    + "</label>\r\n        </div>\r\n    </form>\r\n    <form class=\"awareness\">\r\n        <label id=\"awarenessUserLabel\" for=\"username\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"choose_username") || (depth0 != null ? lookupProperty(depth0,"choose_username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"choose_username","hash":{},"data":data,"loc":{"start":{"line":20,"column":54},"end":{"line":20,"column":73}}}) : helper)))
    + "</label>\r\n        <input id=\"username\" name=\"username\" type=\"text\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"user") || (depth0 != null ? lookupProperty(depth0,"user") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data,"loc":{"start":{"line":21,"column":70},"end":{"line":21,"column":78}}}) : helper)))
    + "\" pattern=\"^[a-z\\d\\-]{3,}$\" minlength=\"3\" maxlength=\"23\" required>\r\n        <input id=\"awarenessSubmit\" type=\"submit\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"send") || (depth0 != null ? lookupProperty(depth0,"send") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"send","hash":{},"data":data,"loc":{"start":{"line":22,"column":57},"end":{"line":22,"column":65}}}) : helper)))
    + "\">\r\n    </form>\r\n    <form class=\"questions\">\r\n        <label for=\"user-contact\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"contact_info") || (depth0 != null ? lookupProperty(depth0,"contact_info") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact_info","hash":{},"data":data,"loc":{"start":{"line":25,"column":34},"end":{"line":25,"column":50}}}) : helper)))
    + "</label>\r\n        <input id=\"user-contact\" type=\"text\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"contact_title") || (depth0 != null ? lookupProperty(depth0,"contact_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact_title","hash":{},"data":data,"loc":{"start":{"line":26,"column":52},"end":{"line":26,"column":69}}}) : helper)))
    + "\" placeholder=\"&#128231; / &#128241; / Discord ID\" required>\r\n        <label for=\"question1\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"q1") || (depth0 != null ? lookupProperty(depth0,"q1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"q1","hash":{},"data":data,"loc":{"start":{"line":27,"column":31},"end":{"line":27,"column":39}}}) : helper))) != null ? stack1 : "")
    + "</label>\r\n        <textarea id=\"question1\" name=\"question1\" minlength=\"23\" required></textarea>\r\n        <label for=\"question2\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"q2") || (depth0 != null ? lookupProperty(depth0,"q2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"q2","hash":{},"data":data,"loc":{"start":{"line":29,"column":31},"end":{"line":29,"column":39}}}) : helper))) != null ? stack1 : "")
    + "</label>\r\n        <textarea id=\"question2\" name=\"question2\" minlength=\"23\" required></textarea>\r\n        <input id=\"questionsSubmit\" type=\"submit\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"send") || (depth0 != null ? lookupProperty(depth0,"send") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"send","hash":{},"data":data,"loc":{"start":{"line":31,"column":57},"end":{"line":31,"column":65}}}) : helper)))
    + "\">\r\n    </form>\r\n    <div id=\"awarenessMessage\" class=\"message\"></div>\r\n    <form class=\"code\">\r\n        <label id=\"codeUserLabel\" for=\"git-username\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"git_user") || (depth0 != null ? lookupProperty(depth0,"git_user") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"git_user","hash":{},"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":65}}}) : helper)))
    + "</label>\r\n        <input id=\"git-username\" name=\"git-username\" type=\"text\" placeholder=\"github ID\" maxlength=\"23\" required>\r\n        <input id=\"codeSubmit\" type=\"submit\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"send") || (depth0 != null ? lookupProperty(depth0,"send") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"send","hash":{},"data":data,"loc":{"start":{"line":37,"column":52},"end":{"line":37,"column":60}}}) : helper)))
    + "\">\r\n    </form>\r\n    <div class=\"puzzle\">\r\n        <div class=\"heading\">\r\n            <img src=\"/svgs/gratitude-token-logo-white.svg\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"puzzle_text") || (depth0 != null ? lookupProperty(depth0,"puzzle_text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"puzzle_text","hash":{},"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":42,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <div class=\"answer\"></div>\r\n        <div class=\"grid\">\r\n            <button class=\"tile tile--1\" style=\"--area:A\"></button>\r\n            <button class=\"tile tile--2\" style=\"--area:B\"></button>\r\n            <button class=\"tile tile--3\" style=\"--area:C\"></button>\r\n            <button class=\"tile tile--4\" style=\"--area:D\"></button>\r\n            <button class=\"tile tile--5\" style=\"--area:E\"></button>\r\n            <button class=\"tile tile--6\" style=\"--area:F\"></button>\r\n            <button class=\"tile tile--7\" style=\"--area:G\"></button>\r\n            <button class=\"tile tile--8\" style=\"--area:H\"></button>\r\n            <div class=\"tile tile--empty\" style=\"--area:I\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
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
    + "aq\" />\r\n<meta property=\"og:image\" content=\"https://gratitudetoken.world/puzzle/img/puzzle.jpg\" />\r\n<meta property=\"og:url\" content=\"https://gratitudetoken.world\" />\r\n<meta property=\"og:site_name\" content=\"gratitudetoken.world\" />\r\n\r\n<!-- Twitter Cards -->\r\n<meta name=\"twitter:title\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaTitle") || (depth0 != null ? lookupProperty(depth0,"metaTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaTitle","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":49}}}) : helper)))
    + "\">\r\n<meta name=\"twitter:description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"metaDescription") || (depth0 != null ? lookupProperty(depth0,"metaDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"metaDescription","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":61}}}) : helper)))
    + "\">\r\n<meta name=\"twitter:image\" content=\"https://gratitudetoken.world/puzzle/img/puzzle-twitter.jpg\">\r\n<meta name=\"twitter:site\" content=\"@Gratitude_World\">\r\n<meta name=\"twitter:creator\" content=\"@Lucian_Apetrei\">\r\n\r\n<title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"join_puzzle") || (depth0 != null ? lookupProperty(depth0,"join_puzzle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join_puzzle","hash":{},"data":data,"loc":{"start":{"line":17,"column":7},"end":{"line":17,"column":22}}}) : helper)))
    + " | GRAT</title>";
},"useData":true});
})();