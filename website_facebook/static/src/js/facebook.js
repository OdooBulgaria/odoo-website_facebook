openerp.website_facebook = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            console.log("facebook app loaded");
        },
    });

    instance.web.client_actions.add('facebook.homepage', 'instance.facebook.HomePage');
}
