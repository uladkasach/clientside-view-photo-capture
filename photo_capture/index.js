var view_loader = require("clientside-view-loader");
module.exports = (async function(){
    // define build options
    var build_options = {
        video :{
        },
        preview : {
            max_width : 250,
        }
    }

    // build the dom
    var this_dir = window.script_location.origin + window.script_location.pathdir;
    var dom = await view_loader.load(this_dir).build(build_options);

    // return the dom
    return dom;
})()
