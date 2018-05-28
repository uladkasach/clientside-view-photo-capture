var view_loader = require('clientside-view-loader');
module.exports=(async function(){
    return await view_loader.load(window.script_location.origin + window.script_location.pathdir).build();
})()
