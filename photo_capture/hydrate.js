var create_removable_image = require("./../removable_image/index.js");
var image_render_canvas = document.createElement('canvas');
module.exports = async function(dom, options){
    // define elements in this context
    var video = dom.querySelector("video");
    var image_holder = dom.querySelector(".image_holder")


    /*
        initialize the video feed
    */
    var stream = await navigator.mediaDevices.getUserMedia({ video: true }) // retreive a media stream
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
        console.log("attached!");
    }


    // return the resultant dom
    return dom;
}
