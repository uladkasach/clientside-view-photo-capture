var Stream_Manager = function(){
    this.promise_initialized = this.initialize(); // define initialized state; start initialization
    this.last_device_selected = -1; // default to -1
}
Stream_Manager.prototype = {
    initialize : async function(){
        /*
            define alla vailible video streams
        */
        var device_information = await navigator.mediaDevices.enumerateDevices();
        var device_options = [];
        device_information.forEach((device)=>{
            if(device.kind != "videoinput") return; // skip this device if not a video
            var option = {
                id : device.deviceId,
                text : device.label || "camera " + device_options.length,
            }
            device_options.push(option);
        })
        this.devices = device_options;
    },
    get_stream_from_device : async function(device_number){
        await this.promise_initialized;
        this.last_device_selected = device_number; // add state of last device selected
        console.log(this.devices);
        var device_id = this.devices[device_number].id;
        var constraints = { video: { deviceId: {exact: device_id} } }
        var stream = await navigator.mediaDevices.getUserMedia(constraints)
        return stream;
    },
    get_next_device : async function(){
        await this.promise_initialized;
        var last_number = this.last_device_selected;
        var next_number = last_number += 1;
        var next_number = next_number % this.devices.length; // normalize to number of devices
        return this.get_stream_from_device(next_number);
    },
    get_devices : async function(){
        await this.promise_initialized;
        return this.devices;
    }
}

module.exports = Stream_Manager;
