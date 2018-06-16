load("./styles.css")
var view_loader = require('clientside-view-loader');
module.exports = async function(dom, options){
    // normalize options
    if(typeof options == "undefined") options = {};
    if(typeof options.video == "undefined") options.video = {};
    if(typeof options.button == "undefined") options.button = {};
    if(typeof options.preview == "undefined") options.preview = {};

    // append optional styles to video element
    var video = dom.querySelector('video');
    if(typeof options.video.min_width == "number") video.style.minWidth = options.video.min_width + "px";
    if(typeof options.video.max_width == "number") video.style.maxWidth = options.video.max_width + "px";

    // generate the capture button
    var button_type = (typeof options.button.type == "string")? options.button.type : "text";
    var capture_button = await view_loader.load('clientside-view-button').build({title:'take photo', type:button_type});
    capture_button.classList.add('photo_capture-capture_button');
    dom.querySelector(".button_holder").appendChild(capture_button);

    // generate the switch button
    var capture_button = await view_loader.load('clientside-view-button').build({title:'switch source', type:"text"});
    capture_button.classList.add('photo_capture-switch_button');
    dom.querySelector(".button_holder_two").appendChild(capture_button);

    // return dom
    return dom;
}
