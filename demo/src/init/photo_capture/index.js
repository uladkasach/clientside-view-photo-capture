load("./styles.css")
var view_loader = require("clientside-view-loader");
module.exports = (async function(){
    // define build options
    var build_options = {
        button : {
            type : 'outlined',
        },
        video : {
            max_width : 400,
        },
        preview : {
            max_width : 150,
        }
    }

    // build the dom
    var dom = await view_loader.load('clientside-view-photo-capture').build(build_options);

    // return the dom
    return dom;
})()
