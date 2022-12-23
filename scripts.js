var liveModeOn = 1;
var editModeOn = 0;
var catNumber = 'Unselected';
var cat1Button = document.getElementById('cat1Button').innerHTML;
var cat1 = document.getElementById('cat1Button').innerHTML;
var cat2 = document.getElementById('cat2Button').innerHTML;
var cat3 = document.getElementById('cat3Button').innerHTML;
var cat4 = document.getElementById('cat4Button').innerHTML;
var cat5 = document.getElementById('cat5Button').innerHTML;
var currentCat = 0;

function enterEditMode() {
  document.querySelector('.edit_area').style.display = 'block';
  document.querySelector('.instruction_area').style.display = 'none';
  document.getElementById('liveMode').disabled = false;
  document.getElementById('editMode').disabled = true;
  liveModeOn = 0;
  editModeOn = 1;
  console.log("Edit Mode");
}

function enterLiveMode() {
  document.querySelector('.edit_area').style.display = 'none';
  document.querySelector('.instruction_area').style.display = 'block';
  document.getElementById('editMode').disabled = false;
  document.getElementById('liveMode').disabled = true;
  liveModeOn = 1;
  editModeOn = 0;
  console.log("Live Mode");
}

function selectCat1() {
  if (editModeOn == 0) {
    document.getElementById('show_hide1').className = 'show_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    console.log("Live Mode: Category 1 Selected");
  }

  if (editModeOn == 1) {
    currentCat = 1;
    document.getElementById('show_hide1').className = 'show_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    document.getElementById('cat1Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat1;
    document.getElementById('catLabel').value = cat1;
    console.log("Edit Mode: Category 1 Selected, Current Label: " + catLabel.value);
  }
}

function selectCat2() {
  if (editModeOn == 0) {
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'show_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    console.log("Live Mode: Category 2 Selected");
  }

  if (editModeOn == 1) {
    currentCat = 2;
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'show_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    document.getElementById('cat2Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat2;
    document.getElementById('catLabel').value = cat2;
    console.log("Edit Mode: Category 2 Selected, Current Label: " + catLabel.value);
  }
}

function selectCat3() {
  if (editModeOn == 0) {
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'show_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    console.log("Live Mode: Category 3 Selected");
  }

  if (editModeOn == 1) {
    currentCat = 3;
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'show_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    document.getElementById('cat3Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat3;
    document.getElementById('catLabel').value = cat3;
    console.log("Edit Mode: Category 3 Selected, Current Label: " + catLabel.value);
  }

}

function selectCat4() {
  if (editModeOn == 0) {
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'show_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    console.log("Live Mode: Category 4 Selected");
  }

  if (editModeOn == 1) {
    currentCat = 4;
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'show_buttons';
    document.getElementById('show_hide5').className = 'hide_buttons';
    document.getElementById('cat4Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat4;
    document.getElementById('catLabel').value = cat4;
    console.log("Edit Mode: Category 4 Selected, Current Label: " + catLabel.value);
  }

}

function selectCat5() {
  if (editModeOn == 0) {
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'show_buttons';
    console.log("Live Mode: Category 5 Selected");
  }

  if (editModeOn == 1) {
    currentCat = 5;
    document.getElementById('show_hide1').className = 'hide_buttons';
    document.getElementById('show_hide2').className = 'hide_buttons';
    document.getElementById('show_hide3').className = 'hide_buttons';
    document.getElementById('show_hide4').className = 'hide_buttons';
    document.getElementById('show_hide5').className = 'show_buttons';
    document.getElementById('cat5Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat5;
    document.getElementById('catLabel').value = cat5;
    console.log("Live Mode: Category 5 Selected, Current Label: " + catLabel.value);
  }

}

function updateCat() {
  if (currentCat == 1) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat1Button').innerHTML = catLabel;
    console.log("Update | Cat 1 Button: " + cat1Button + " catLabel: " + catLabel + "catColor: " + catColor);
    
    if (catColor === "Default") {
      document.getElementById("cat1Button").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat1Button").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat1Button").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat1Button").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat1Button").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat1Button").className = 'shortcut_button5';
    }
    
  }

  if (currentCat == 2) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat2Button').innerHTML = catLabel;
    console.log("Update | Cat 2 Button: " + cat2Button + " catLabel: " + catLabel + "catColor: " + catColor);
  
    if (catColor === "Default") {
      document.getElementById("cat2Button").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat2Button").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat2Button").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat2Button").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat2Button").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat2Button").className = 'shortcut_button5';
    }
  
  }

  if (currentCat == 3) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat3Button').innerHTML = catLabel;
    console.log("Update | Cat 3 Button: " + cat3Button + " catLabel: " + catLabel + "catColor: " + catColor);
 
    if (catColor === "Default") {
      document.getElementById("cat3Button").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat3Button").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat3Button").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat3Button").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat3Button").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat3Button").className = 'shortcut_button5';
    }

  }

  if (currentCat == 4) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat4Button').innerHTML = catLabel;
    console.log("Update | Cat 4 Button: " + cat4Button + " catLabel: " + catLabel + "catColor: " + catColor);

    if (catColor === "Default") {
      document.getElementById("cat4Button").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat4Button").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat4Button").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat4Button").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat4Button").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat4Button").className = 'shortcut_button5';
    }

  }

  if (currentCat == 5) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;
    const button_container1= document.querySelector('.button_container1');

    document.getElementById('cat5Button').innerHTML = catLabel;
    console.log("Update | Cat 5 Button: " + cat5Button + " catLabel: " + catLabel + "catColor: " + catColor);

    if (catColor === "Default") {
      document.getElementById("cat5Button").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat5Button").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat5Button").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat5Button").className = 'shortcut_button3';
      button_container3.style.background = "red";
    }

    if (catColor === "Orange") {
      document.getElementById("cat5Button").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat5Button").className = 'shortcut_button5';
    }
  }
}
