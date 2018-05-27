# clientside-view-photo-capture

This module implements a reusable view that enables capturing photos from the webcam. It utilizes the `clientside-view-loader` for loading and offers server side rendering support.




# Usage

#### Install
`npm install clientside-view-photo-capture --save`

#### Use

```js
// building and appending the view
var view_loader = await load('clientside-view-loader'); // load the view loader
var photo_capture_view = await view_loader.load('clientside-view-button').build();
document.body.appendChild(photo_capture_module);
```

# Functionality

#### .extract()
The `photo_capture_module.extract()` method enables the retrieval of all photos the user has kept in the queue. It returns the photos as an array of the base64 encodings of each photo.


# Build Options

#### Remove Queue
The module automatically supplies a queue that one can use to take multiple photos and submit all at once. However, it is possible to hide this functionality if you only need one photo from the user.

* coming soon *
