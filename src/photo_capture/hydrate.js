var create_removable_image = require("./../removable_image/index.js");
var image_render_canvas = document.createElement('canvas');
var Sortable = require('sortablejs');
var Stream_Manager = require('./stream_manager.js');

module.exports = async function(dom, options){
    // normalize options
    if(typeof options == "undefined") options = {};
    if(typeof options.video == "undefined") options.video = {};
    if(typeof options.preview == "undefined") options.preview = {};

    // define elements in this context
    var video = dom.querySelector("video");
    var image_holder = dom.querySelector(".image_holder")

    // define new stream manager
    var stream_manager = new Stream_Manager("video");

    /*
        initialize the video feed to default camera
    */
    var stream = await stream_manager.get_stream_from_device(0); // let device 0 be default device
    video.srcObject = stream; // set src of video to begin autoplay

    /*
        define image capture functionality
    */
    dom.querySelector(".photo_capture-capture_button").onclick = async function(){
        // draw the image from the video
        image_render_canvas.width = video.videoWidth;
        image_render_canvas.height = video.videoHeight;
        image_render_canvas.getContext('2d').drawImage(video, 0, 0);

        // build image in a dom element
        var build_options = {
            src : image_render_canvas.toDataURL('image/webp'),
            max_width : options.preview.max_width,
        }
        var removable_image = await create_removable_image(build_options);

        // attach the image with the rest of the images
        image_holder.appendChild(removable_image);
    }


    /*
        define source switch functionality
    */
    dom.querySelector(".photo_capture-switch_button").onclick = async function(){
        var stream = await stream_manager.get_next_device();
        video.srcObject = stream; // set src of video to begin autoplay
    }
    if((await stream_manager.get_devices()).length == 1) dom.querySelector(".photo_capture-switch_button").style.display = "none"; // hide if only 1 device

    /*
        define drag and drop functionality
    */
    Sortable.create(image_holder);

    /*
        define extraction protocol
    */
    dom.extract = function(){
        // walk through every removable_image_element in the image_holder and get src from each
        var images = [];
        image_holder.querySelectorAll(".removable_image_element").forEach(element=>{
            images.push(element.src);
        })

        // return the result
        return images;
    }

    // return the resultant dom
    return dom;
}
