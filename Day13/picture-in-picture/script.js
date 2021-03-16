const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//Prompt to select media stream ,passs to video element,then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error){
        // catch errror
    }
}

button.addEventListener('click', async ()=>{
    //disabled button
    button.disabled = true;
    //start p in p
    await videoElement.requestPictureInPicture();
    //reset the button 
    button.disabled = false;
});


selectMediaStream();