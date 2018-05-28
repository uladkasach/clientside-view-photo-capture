var view_loader = require("clientside-view-loader");
var promise_photo_capture = load('./../photo_capture/index.js');
load('./styles.css')
module.exports = async function(dom, options){
    // append photo capture
    var photo_capture = await promise_photo_capture;
    dom.querySelector('.photo_capture_holder').appendChild(photo_capture);

    // append submit
    var submit_button = await view_loader.load('clientside-view-button').build({text:"submit", type:"contained", float:true})
    dom.querySelector('.submit_holder').appendChild(submit_button);

    return dom;
}
