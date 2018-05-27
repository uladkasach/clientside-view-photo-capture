var view_loader = require("clientside-view-loader");
module.exports = (async function(){
    // define build options
    var build_options = {
        preview : {
            max_width : 250,
        }
    }

    // build the dom
    var dom = await view_loader.load('clientside-view-photo-capture').build(build_options);

    // return the dom
    return dom;
})()
