load('./styles.css');
var view_loader = require('clientside-view-loader');
module.exports = async function(dom, options){
    // define elements into this scope
    var image = dom.querySelector('img');
    var remove_button_holder = dom.querySelector('.remove_button_holder');

    // set src if passed by options
    if(typeof options.src == "string") image.src = options.src;

    // set max width if passed
    if(typeof options.max_width == "number") image.style.maxWidth = options.max_width;

    // generate remove button
    var remove_button = await view_loader.load('clientside-view-button').build({title:'remove', type:'text', color_scheme:'red'});
    remove_button.classList.add('remove_button');
    remove_button.classList.add('protect_button_text_with_background');
    remove_button_holder.appendChild(remove_button);

    // return resultant dom
    return dom;
}
