module.exports = function(dom, options){
    // define elements into this scope
    var image = dom.querySelector('img');
    var remove_button = dom.querySelector('.remove_button');

    // define src getter and setter
    Object.defineProperty(dom, 'src', {
        get: function() { return image.src; },
        set: function(src) { image.src = src; }
    });

    // define remove functionality
    remove_button.onclick = function(){dom.remove();} // remove dom on pressing dom

    // return resultant dom
    return dom;
}
