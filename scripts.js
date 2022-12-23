var liveModeOn = 1;
var editModeOn = 0;
var catNumber = 'Unselected';
let catLabel = 'Unselected';
var cat1Button = document.getElementById('cat1Button').innerHTML;
var cat1 = document.getElementById('cat1Button').innerHTML;
var cat1Color = 'Default';
var cat2 = document.getElementById('cat2Button').innerHTML;
var cat2Color = 'Default';
var cat3 = document.getElementById('cat3Button').innerHTML;
var cat3Color = 'Default';
var cat4 = document.getElementById('cat4Button').innerHTML;
var cat4Color = 'Default';
var cat5 = document.getElementById('cat5Button').innerHTML;
var cat5Color = 'Default';

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
    document.getElementById('cat5Button').disabled = false;
    document.getElementById('catNumber').innerHTML = cat5;
    document.getElementById('catLabel').value = cat5;
    console.log("Live Mode: Category 5 Selected, Current Label: " + catLabel.value);
  }

}

function updateCat() {
  console.log("Update Category | Label: " + catLabel + " Color :");
}


