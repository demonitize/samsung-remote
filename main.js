const CTL = require("samsung-remote");
const express = require("express");


const remote = new CTL({
    ip: '192.168.100.110' // required: IP address of your Samsung Smart TV
});
 
remote.send('KEY_VOLUP', (err) => {
    if (err) {
        throw new Error(err);
    } else {
        // command has been successfully transmitted to your tv
    }
});
 
// check if TV is alive (ping)
remote.isAlive((err) => {
    if (err) {
        throw new Error('TV is offline');
    } else {
        console.log('TV is ALIVE!');
    }
});