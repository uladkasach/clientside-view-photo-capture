var view_loader = require("clientside-view-loader");
var this_dir = window.script_location.origin + window.script_location.pathdir;
view_loader.load(this_dir) // begin async loading asap
module.exports = async function(build_options){
    var dom = await view_loader.load(this_dir).build(build_options);
    return dom;
}
