Webcam.set({
    width:600,
    height:400,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("image").innerHTML = '<img id="result_image" src="'+data_uri+'">';
    })
}

console.log('The ml5 version being used is:', ml5.version);

Classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/U7EPU-xaz/ ', modelLoaded);

function modelLoaded()
{
    console.log('Your model has been loaded successfully😊');
}

function identify()
{
    image = document.getElementById("result_image");
    Classify.classify(image, gotResult);
}

function gotResult(error, result)
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("object_result").innerHTML = result[0].label;
        document.getElementById("accuracy_result").innerHTML = result[0].confidence.toFixed(2);
    }
}

