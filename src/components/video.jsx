import React, { Component } from 'react'

(function () {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getUserMedia(
        // constraints
        { video: true, audio: true },

        // success callback
        function (mediaStream) {
            var video = document.getElementById('area');
            console.log('hi');
            video.src = window.URL.createObjectURL(mediaStream);
            video.play();
        },
        //handle error
        function (error) {
            console.log(error);
        })
    pc1 = new RTCPeerConnection(servers);
    localStream.getTracks().forEach((track) => {
        pc1.addTrack(track, localStream);
    });

    pc1.setLocalDescription(desc).then(() => {
        onSetLocalSuccess(pc1);
    },
        onSetSessionDescriptionError
    );
    trace('pc2 setRemoteDescription start');
    pc2.setRemoteDescription(desc).then(() => {
        onSetRemoteSuccess(pc2);
    },
        onSetSessionDescriptionError
    );
})();

export default class video extends Component {
    render() {
        return (
            <div>
                <video id='area' muted='muted'></video>
            </div>
        )
    }
}
