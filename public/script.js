const socket = io('/');

let myVideoStream;
const myVideo = document.createElement('video');
myVideo.muted = true;
const videoGrid = document.getElementById('video-grid');

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})
socket.emit('join-room');

socket.on('user-connected', ()=>{
    connecToNewUser();
})


const connecToNewUser = () => {
    console.log('new user');
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadmetadata', ()=> {
        video.play();
    })
    videoGrid.append(video);
}