var view_loader = require("clientside-view-loader");
module.exports = async function(build_options){
    var this_dir = window.script_location.origin + window.script_location.pathdir;
    var dom = await view_loader.load(this_dir).build(build_options);
    return dom;
}
