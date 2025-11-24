/****************** YOUR NAME: Harderick Dhillon 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
const modelXYZ = ["XYZ",100]; 
const modelCPRG = ["CPRG",213];
let duration = 0; 


/****************** helper function ******************/
function recalculate(){
    const costLabel = document.getElementById("calculated-cost");
    const modelName = document.getElementById("model-text");
    
    if (modelName.textContent.includes(modelXYZ[0])){
        costLabel.innerHTML = duration * modelXYZ[1];
    } else {
        costLabel.innerHTML = duration * modelCPRG[1];
    }
}

/****************** model button logic ******************/
const modelButton = document.getElementById("model-button"); 
modelButton.addEventListener("click", changeModel);

function changeModel() {
    const modelName = document.getElementById("model-text");
    let modelText = "";

    if (modelName.textContent.includes(modelXYZ[0])) {
        modelText = modelCPRG[0];
    } else {
        modelText = modelXYZ[0];
    }

    modelName.innerHTML = "Model " + modelText;
    
    recalculate();
}

/****************** duration button logic ******************/
const durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);

function changeDuration() {
    const durationText = document.getElementById("duration-text");

    let userInput = prompt("Enter new duration in days:");
    
    duration = Number(userInput);
    durationText.innerHTML = duration;

    recalculate();
}


