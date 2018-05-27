var view_loader = require('clientside-view-loader');
module.exports = async function(dom, options){

    // append optional styles to video element
    var video = dom.querySelector('video');
    if(typeof options.video.min_width == "number") video.style.minWidth = options.video.min_width + "px";
    if(typeof options.video.max_width == "number") video.style.maxWidth = options.video.max_width + "px";

    // generate the capture button
    var capture_button = await view_loader.load('clientside-view-button').build({title:'take photo', type:'text'});
    capture_button.classList.add('photo_capture-capture_button');
    dom.querySelector(".button_holder").appendChild(capture_button);

    // return dom
    return dom;
}
