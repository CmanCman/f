//https://teachablemachine.withgoogle.com/models/zpcLRrfaM/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot(){
Webcam.snap(function(data_url){
    document.getElementById("selfie_image").src=data_url
})
}console.log(ml5.version)