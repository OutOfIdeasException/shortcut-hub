var liveModeOn = 1;
var editModeOn = 0;
var catNumber = 'Unselected';
var cat1Button = document.getElementById('cat1Button').innerHTML;
// Category Button Variables
var cat1 = document.getElementById('cat1Button').innerHTML;
var cat2 = document.getElementById('cat2Button').innerHTML;
var cat3 = document.getElementById('cat3Button').innerHTML;
var cat4 = document.getElementById('cat4Button').innerHTML;
var cat5 = document.getElementById('cat5Button').innerHTML;
// Category 1 Shortcut Button Variables 
var but1 = document.getElementById('button1C1').innerHTML;
var but2 = document.getElementById('button2C1').innerHTML;
var but3 = document.getElementById('button3C1').innerHTML;
var but4 = document.getElementById('button4C1').innerHTML;
var but5 = document.getElementById('button5C1').innerHTML;
var but6 = document.getElementById('button6C1').innerHTML;
var but7 = document.getElementById('button7C1').innerHTML;
var but8 = document.getElementById('button8C1').innerHTML;
var but9 = document.getElementById('button9C1').innerHTML;
var but10 = document.getElementById('button10C1').innerHTML;
var but11= document.getElementById('button11C1').innerHTML;
var but12 = document.getElementById('button12C1').innerHTML;
var but13 = document.getElementById('button13C1').innerHTML;
var but14 = document.getElementById('button14C1').innerHTML;
var but15 = document.getElementById('button15C1').innerHTML;
var but16 = document.getElementById('button16C1').innerHTML;
var but17 = document.getElementById('button17C1').innerHTML;
var but18 = document.getElementById('button18C1').innerHTML;
var but19 = document.getElementById('button19C1').innerHTML;
var but20 = document.getElementById('button20C1').innerHTML;
// Category 2 Shortcut Button Variables 
var but21 = document.getElementById('button1C2').innerHTML;
var but22 = document.getElementById('button2C2').innerHTML;
var but23 = document.getElementById('button3C2').innerHTML;
var but24 = document.getElementById('button4C2').innerHTML;
var but25 = document.getElementById('button5C2').innerHTML;
var but26 = document.getElementById('button6C2').innerHTML;
var but27 = document.getElementById('button7C2').innerHTML;
var but28 = document.getElementById('button8C2').innerHTML;
var but29 = document.getElementById('button9C2').innerHTML;
var but30 = document.getElementById('button10C2').innerHTML;
var but31 = document.getElementById('button11C2').innerHTML;
var but32 = document.getElementById('button12C2').innerHTML;
var but33 = document.getElementById('button13C2').innerHTML;
var but34 = document.getElementById('button14C2').innerHTML;
var but35 = document.getElementById('button15C2').innerHTML;
var but36 = document.getElementById('button16C2').innerHTML;
var but37 = document.getElementById('button17C2').innerHTML;
var but38 = document.getElementById('button18C2').innerHTML;
var but39 = document.getElementById('button19C2').innerHTML;
var but40 = document.getElementById('button20C2').innerHTML;
// Category 3 Shortcut Button Variables
var but41 = document.getElementById('button1C3').innerHTML;
var but42 = document.getElementById('button2C3').innerHTML;
var but43 = document.getElementById('button3C3').innerHTML;
var but44 = document.getElementById('button4C3').innerHTML;
var but45 = document.getElementById('button5C3').innerHTML;
var but46 = document.getElementById('button6C3').innerHTML;
var but47 = document.getElementById('button7C3').innerHTML;
var but48 = document.getElementById('button8C3').innerHTML;
var but49 = document.getElementById('button9C3').innerHTML;
var but50 = document.getElementById('button10C3').innerHTML;
var but51 = document.getElementById('button11C3').innerHTML;
var but52 = document.getElementById('button12C3').innerHTML;
var but53 = document.getElementById('button13C3').innerHTML;
var but54 = document.getElementById('button14C3').innerHTML;
var but55 = document.getElementById('button15C3').innerHTML;
var but56 = document.getElementById('button16C3').innerHTML;
var but57 = document.getElementById('button17C3').innerHTML;
var but58 = document.getElementById('button18C3').innerHTML;
var but59 = document.getElementById('button19C3').innerHTML;
var but60 = document.getElementById('button20C3').innerHTML;
// Category 4 Shortcut Button Variables
var but61 = document.getElementById('button1C4').innerHTML;
var but62 = document.getElementById('button2C4').innerHTML;
var but63 = document.getElementById('button3C4').innerHTML;
var but64 = document.getElementById('button4C4').innerHTML;
var but65 = document.getElementById('button5C4').innerHTML;
var but66 = document.getElementById('button6C4').innerHTML;
var but67 = document.getElementById('button7C4').innerHTML;
var but68 = document.getElementById('button8C4').innerHTML;
var but69 = document.getElementById('button9C4').innerHTML;
var but70 = document.getElementById('button10C4').innerHTML;
var but71 = document.getElementById('button11C4').innerHTML;
var but72 = document.getElementById('button12C4').innerHTML;
var but73 = document.getElementById('button13C4').innerHTML;
var but74 = document.getElementById('button14C4').innerHTML;
var but75 = document.getElementById('button15C4').innerHTML;
var but76 = document.getElementById('button16C4').innerHTML;
var but77 = document.getElementById('button17C4').innerHTML;
var but78 = document.getElementById('button18C4').innerHTML;
var but79 = document.getElementById('button19C4').innerHTML;
var but80 = document.getElementById('button20C4').innerHTML;
// Category 5 Shortcut Button Variables 
var but81 = document.getElementById('button1C5').innerHTML;
var but82 = document.getElementById('button2C5').innerHTML;
var but83 = document.getElementById('button3C5').innerHTML;
var but84 = document.getElementById('button4C5').innerHTML;
var but85 = document.getElementById('button5C5').innerHTML;
var but86 = document.getElementById('button6C5').innerHTML;
var but87 = document.getElementById('button7C5').innerHTML;
var but88 = document.getElementById('button8C5').innerHTML;
var but89 = document.getElementById('button9C5').innerHTML;
var but90 = document.getElementById('button10C5').innerHTML;
var but91 = document.getElementById('button11C5').innerHTML;
var but92 = document.getElementById('button12C5').innerHTML;
var but93 = document.getElementById('button13C5').innerHTML;
var but94 = document.getElementById('button14C5').innerHTML;
var but95 = document.getElementById('button15C5').innerHTML;
var but96 = document.getElementById('button16C5').innerHTML;
var but97 = document.getElementById('button17C5').innerHTML;
var but98 = document.getElementById('button18C5').innerHTML;
var but99 = document.getElementById('button19C5').innerHTML;
var but100 = document.getElementById('button20C5').innerHTML;


var currentCat = 0;
var currentBut = 0;

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
    console.log("Edit Mode: Category 5 Selected, Current Label: " + catLabel.value);
  }

}

function updateCat() {
  if (currentCat == 1) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;
    let buttonContainer1 = document.querySelector('.button_container1');

    document.getElementById('cat1Button').innerHTML = catLabel;
    console.log("Update | Cat 1 Button: " + cat1Button + " catLabel: " + catLabel + "catColor: " + catColor);
    
    if (catColor === "Default") {
      document.getElementById("cat1Button").className = 'shortcut_button0';
      document.getElementById("button1C1").className = 'shortcut_button0';
      document.getElementById("button2C1").className = 'shortcut_button0';
      document.getElementById("button3C1").className = 'shortcut_button0';
      document.getElementById("button4C1").className = 'shortcut_button0';
      document.getElementById("button5C1").className = 'shortcut_button0';
      document.getElementById("button6C1").className = 'shortcut_button0';
      document.getElementById("button7C1").className = 'shortcut_button0';
      document.getElementById("button8C1").className = 'shortcut_button0';
      document.getElementById("button9C1").className = 'shortcut_button0';
      document.getElementById("button10C1").className = 'shortcut_button0';
      document.getElementById("button11C1").className = 'shortcut_button0';
      document.getElementById("button12C1").className = 'shortcut_button0';
      document.getElementById("button13C1").className = 'shortcut_button0';
      document.getElementById("button14C1").className = 'shortcut_button0';
      document.getElementById("button15C1").className = 'shortcut_button0';
      document.getElementById("button16C1").className = 'shortcut_button0';
      document.getElementById("button17C1").className = 'shortcut_button0';
      document.getElementById("button18C1").className = 'shortcut_button0';
      document.getElementById("button19C1").className = 'shortcut_button0';
      document.getElementById("button20C1").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat1Button").className = 'shortcut_button1';
      document.getElementById("button1C1").className = 'shortcut_button1';
      document.getElementById("button2C1").className = 'shortcut_button1';
      document.getElementById("button3C1").className = 'shortcut_button1';
      document.getElementById("button4C1").className = 'shortcut_button1';
      document.getElementById("button5C1").className = 'shortcut_button1';
      document.getElementById("button6C1").className = 'shortcut_button1';
      document.getElementById("button7C1").className = 'shortcut_button1';
      document.getElementById("button8C1").className = 'shortcut_button1';
      document.getElementById("button9C1").className = 'shortcut_button1';
      document.getElementById("button10C1").className = 'shortcut_button1';
      document.getElementById("button11C1").className = 'shortcut_button1';
      document.getElementById("button12C1").className = 'shortcut_button1';
      document.getElementById("button13C1").className = 'shortcut_button1';
      document.getElementById("button14C1").className = 'shortcut_button1';
      document.getElementById("button15C1").className = 'shortcut_button1';
      document.getElementById("button16C1").className = 'shortcut_button1';
      document.getElementById("button17C1").className = 'shortcut_button1';
      document.getElementById("button18C1").className = 'shortcut_button1';
      document.getElementById("button19C1").className = 'shortcut_button1';
      document.getElementById("button20C1").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat1Button").className = 'shortcut_button2';
      document.getElementById("button1C1").className = 'shortcut_button2';
      document.getElementById("button2C1").className = 'shortcut_button2';
      document.getElementById("button3C1").className = 'shortcut_button2';
      document.getElementById("button4C1").className = 'shortcut_button2';
      document.getElementById("button5C1").className = 'shortcut_button2';
      document.getElementById("button6C1").className = 'shortcut_button2';
      document.getElementById("button7C1").className = 'shortcut_button2';
      document.getElementById("button8C1").className = 'shortcut_button2';
      document.getElementById("button9C1").className = 'shortcut_button2';
      document.getElementById("button10C1").className = 'shortcut_button2';
      document.getElementById("button11C1").className = 'shortcut_button2';
      document.getElementById("button12C1").className = 'shortcut_button2';
      document.getElementById("button13C1").className = 'shortcut_button2';
      document.getElementById("button14C1").className = 'shortcut_button2';
      document.getElementById("button15C1").className = 'shortcut_button2';
      document.getElementById("button16C1").className = 'shortcut_button2';
      document.getElementById("button17C1").className = 'shortcut_button2';
      document.getElementById("button18C1").className = 'shortcut_button2';
      document.getElementById("button19C1").className = 'shortcut_button2';
      document.getElementById("button20C1").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat1Button").className = 'shortcut_button3';
      document.getElementById("button1C1").className = 'shortcut_button3';
      document.getElementById("button2C1").className = 'shortcut_button3';
      document.getElementById("button3C1").className = 'shortcut_button3';
      document.getElementById("button4C1").className = 'shortcut_button3';
      document.getElementById("button5C1").className = 'shortcut_button3';
      document.getElementById("button6C1").className = 'shortcut_button3';
      document.getElementById("button7C1").className = 'shortcut_button3';
      document.getElementById("button8C1").className = 'shortcut_button3';
      document.getElementById("button9C1").className = 'shortcut_button3';
      document.getElementById("button10C1").className = 'shortcut_button3';
      document.getElementById("button11C1").className = 'shortcut_button3';
      document.getElementById("button12C1").className = 'shortcut_button3';
      document.getElementById("button13C1").className = 'shortcut_button3';
      document.getElementById("button14C1").className = 'shortcut_button3';
      document.getElementById("button15C1").className = 'shortcut_button3';
      document.getElementById("button16C1").className = 'shortcut_button3';
      document.getElementById("button17C1").className = 'shortcut_button3';
      document.getElementById("button18C1").className = 'shortcut_button3';
      document.getElementById("button19C1").className = 'shortcut_button3';
      document.getElementById("button20C1").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat1Button").className = 'shortcut_button4';
      document.getElementById("button1C1").className = 'shortcut_button4';
      document.getElementById("button2C1").className = 'shortcut_button4';
      document.getElementById("button3C1").className = 'shortcut_button4';
      document.getElementById("button4C1").className = 'shortcut_button4';
      document.getElementById("button5C1").className = 'shortcut_button4';
      document.getElementById("button6C1").className = 'shortcut_button4';
      document.getElementById("button7C1").className = 'shortcut_button4';
      document.getElementById("button8C1").className = 'shortcut_button4';
      document.getElementById("button9C1").className = 'shortcut_button4';
      document.getElementById("button10C1").className = 'shortcut_button4';
      document.getElementById("button11C1").className = 'shortcut_button4';
      document.getElementById("button12C1").className = 'shortcut_button4';
      document.getElementById("button13C1").className = 'shortcut_button4';
      document.getElementById("button14C1").className = 'shortcut_button4';
      document.getElementById("button15C1").className = 'shortcut_button4';
      document.getElementById("button16C1").className = 'shortcut_button4';
      document.getElementById("button17C1").className = 'shortcut_button4';
      document.getElementById("button18C1").className = 'shortcut_button4';
      document.getElementById("button19C1").className = 'shortcut_button4';
      document.getElementById("button20C1").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat1Button").className = 'shortcut_button5';
      document.getElementById("button1C1").className = 'shortcut_button5';
      document.getElementById("button2C1").className = 'shortcut_button5';
      document.getElementById("button3C1").className = 'shortcut_button5';
      document.getElementById("button4C1").className = 'shortcut_button5';
      document.getElementById("button5C1").className = 'shortcut_button5';
      document.getElementById("button6C1").className = 'shortcut_button5';
      document.getElementById("button7C1").className = 'shortcut_button5';
      document.getElementById("button8C1").className = 'shortcut_button5';
      document.getElementById("button9C1").className = 'shortcut_button5';
      document.getElementById("button10C1").className = 'shortcut_button5';
      document.getElementById("button11C1").className = 'shortcut_button5';
      document.getElementById("button12C1").className = 'shortcut_button5';
      document.getElementById("button13C1").className = 'shortcut_button5';
      document.getElementById("button14C1").className = 'shortcut_button5';
      document.getElementById("button15C1").className = 'shortcut_button5';
      document.getElementById("button16C1").className = 'shortcut_button5';
      document.getElementById("button17C1").className = 'shortcut_button5';
      document.getElementById("button18C1").className = 'shortcut_button5';
      document.getElementById("button19C1").className = 'shortcut_button5';
      document.getElementById("button20C1").className = 'shortcut_button5';
    }
    
  }

  if (currentCat == 2) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat2Button').innerHTML = catLabel;
    console.log("Update | Cat 2 Button: " + cat2Button + " catLabel: " + catLabel + "catColor: " + catColor);
  
    if (catColor === "Default") {
      document.getElementById("cat2Button").className = 'shortcut_button0';
      document.getElementById("button1C2").className = 'shortcut_button0';
      document.getElementById("button2C2").className = 'shortcut_button0';
      document.getElementById("button3C2").className = 'shortcut_button0';
      document.getElementById("button4C2").className = 'shortcut_button0';
      document.getElementById("button5C2").className = 'shortcut_button0';
      document.getElementById("button6C2").className = 'shortcut_button0';
      document.getElementById("button7C2").className = 'shortcut_button0';
      document.getElementById("button8C2").className = 'shortcut_button0';
      document.getElementById("button9C2").className = 'shortcut_button0';
      document.getElementById("button10C2").className = 'shortcut_button0';
      document.getElementById("button11C2").className = 'shortcut_button0';
      document.getElementById("button12C2").className = 'shortcut_button0';
      document.getElementById("button13C2").className = 'shortcut_button0';
      document.getElementById("button14C2").className = 'shortcut_button0';
      document.getElementById("button15C2").className = 'shortcut_button0';
      document.getElementById("button16C2").className = 'shortcut_button0';
      document.getElementById("button17C2").className = 'shortcut_button0';
      document.getElementById("button18C2").className = 'shortcut_button0';
      document.getElementById("button19C2").className = 'shortcut_button0';
      document.getElementById("button20C2").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat2Button").className = 'shortcut_button1';
      document.getElementById("button1C2").className = 'shortcut_button1';
      document.getElementById("button2C2").className = 'shortcut_button1';
      document.getElementById("button3C2").className = 'shortcut_button1';
      document.getElementById("button4C2").className = 'shortcut_button1';
      document.getElementById("button5C2").className = 'shortcut_button1';
      document.getElementById("button6C2").className = 'shortcut_button1';
      document.getElementById("button7C2").className = 'shortcut_button1';
      document.getElementById("button8C2").className = 'shortcut_button1';
      document.getElementById("button9C2").className = 'shortcut_button1';
      document.getElementById("button10C2").className = 'shortcut_button1';
      document.getElementById("button11C2").className = 'shortcut_button1';
      document.getElementById("button12C2").className = 'shortcut_button1';
      document.getElementById("button13C2").className = 'shortcut_button1';
      document.getElementById("button14C2").className = 'shortcut_button1';
      document.getElementById("button15C2").className = 'shortcut_button1';
      document.getElementById("button16C2").className = 'shortcut_button1';
      document.getElementById("button17C2").className = 'shortcut_button1';
      document.getElementById("button18C2").className = 'shortcut_button1';
      document.getElementById("button19C2").className = 'shortcut_button1';
      document.getElementById("button20C2").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat2Button").className = 'shortcut_button2';
      document.getElementById("button1C2").className = 'shortcut_button2';
      document.getElementById("button2C2").className = 'shortcut_button2';
      document.getElementById("button3C2").className = 'shortcut_button2';
      document.getElementById("button4C2").className = 'shortcut_button2';
      document.getElementById("button5C2").className = 'shortcut_button2';
      document.getElementById("button6C2").className = 'shortcut_button2';
      document.getElementById("button7C2").className = 'shortcut_button2';
      document.getElementById("button8C2").className = 'shortcut_button2';
      document.getElementById("button9C2").className = 'shortcut_button2';
      document.getElementById("button10C2").className = 'shortcut_button2';
      document.getElementById("button11C2").className = 'shortcut_button2';
      document.getElementById("button12C2").className = 'shortcut_button2';
      document.getElementById("button13C2").className = 'shortcut_button2';
      document.getElementById("button14C2").className = 'shortcut_button2';
      document.getElementById("button15C2").className = 'shortcut_button2';
      document.getElementById("button16C2").className = 'shortcut_button2';
      document.getElementById("button17C2").className = 'shortcut_button2';
      document.getElementById("button18C2").className = 'shortcut_button2';
      document.getElementById("button19C2").className = 'shortcut_button2';
      document.getElementById("button20C2").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat2Button").className = 'shortcut_button3';
      document.getElementById("button1C2").className = 'shortcut_button3';
      document.getElementById("button2C2").className = 'shortcut_button3';
      document.getElementById("button3C2").className = 'shortcut_button3';
      document.getElementById("button4C2").className = 'shortcut_button3';
      document.getElementById("button5C2").className = 'shortcut_button3';
      document.getElementById("button6C2").className = 'shortcut_button3';
      document.getElementById("button7C2").className = 'shortcut_button3';
      document.getElementById("button8C2").className = 'shortcut_button3';
      document.getElementById("button9C2").className = 'shortcut_button3';
      document.getElementById("button10C2").className = 'shortcut_button3';
      document.getElementById("button11C2").className = 'shortcut_button3';
      document.getElementById("button12C2").className = 'shortcut_button3';
      document.getElementById("button13C2").className = 'shortcut_button3';
      document.getElementById("button14C2").className = 'shortcut_button3';
      document.getElementById("button15C2").className = 'shortcut_button3';
      document.getElementById("button16C2").className = 'shortcut_button3';
      document.getElementById("button17C2").className = 'shortcut_button3';
      document.getElementById("button18C2").className = 'shortcut_button3';
      document.getElementById("button19C2").className = 'shortcut_button3';
      document.getElementById("button20C2").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat2Button").className = 'shortcut_button4';
      document.getElementById("button1C2").className = 'shortcut_button4';
      document.getElementById("button2C2").className = 'shortcut_button4';
      document.getElementById("button3C2").className = 'shortcut_button4';
      document.getElementById("button4C2").className = 'shortcut_button4';
      document.getElementById("button5C2").className = 'shortcut_button4';
      document.getElementById("button6C2").className = 'shortcut_button4';
      document.getElementById("button7C2").className = 'shortcut_button4';
      document.getElementById("button8C2").className = 'shortcut_button4';
      document.getElementById("button9C2").className = 'shortcut_button4';
      document.getElementById("button10C2").className = 'shortcut_button4';
      document.getElementById("button11C2").className = 'shortcut_button4';
      document.getElementById("button12C2").className = 'shortcut_button4';
      document.getElementById("button13C2").className = 'shortcut_button4';
      document.getElementById("button14C2").className = 'shortcut_button4';
      document.getElementById("button15C2").className = 'shortcut_button4';
      document.getElementById("button16C2").className = 'shortcut_button4';
      document.getElementById("button17C2").className = 'shortcut_button4';
      document.getElementById("button18C2").className = 'shortcut_button4';
      document.getElementById("button19C2").className = 'shortcut_button4';
      document.getElementById("button20C2").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat2Button").className = 'shortcut_button5';
      document.getElementById("button1C2").className = 'shortcut_button5';
      document.getElementById("button2C2").className = 'shortcut_button5';
      document.getElementById("button3C2").className = 'shortcut_button5';
      document.getElementById("button4C2").className = 'shortcut_button5';
      document.getElementById("button5C2").className = 'shortcut_button5';
      document.getElementById("button6C2").className = 'shortcut_button5';
      document.getElementById("button7C2").className = 'shortcut_button5';
      document.getElementById("button8C2").className = 'shortcut_button5';
      document.getElementById("button9C2").className = 'shortcut_button5';
      document.getElementById("button10C2").className = 'shortcut_button5';
      document.getElementById("button11C2").className = 'shortcut_button5';
      document.getElementById("button12C2").className = 'shortcut_button5';
      document.getElementById("button13C2").className = 'shortcut_button5';
      document.getElementById("button14C2").className = 'shortcut_button5';
      document.getElementById("button15C2").className = 'shortcut_button5';
      document.getElementById("button16C2").className = 'shortcut_button5';
      document.getElementById("button17C2").className = 'shortcut_button5';
      document.getElementById("button18C2").className = 'shortcut_button5';
      document.getElementById("button19C2").className = 'shortcut_button5';
      document.getElementById("button20C2").className = 'shortcut_button5';
    }
  
  }

  if (currentCat == 3) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat3Button').innerHTML = catLabel;
    console.log("Update | Cat 3 Button: " + cat3Button + " catLabel: " + catLabel + "catColor: " + catColor);
 
    if (catColor === "Default") {
      document.getElementById("cat3Button").className = 'shortcut_button0';
      document.getElementById("button1C3").className = 'shortcut_button0';
      document.getElementById("button2C3").className = 'shortcut_button0';
      document.getElementById("button3C3").className = 'shortcut_button0';
      document.getElementById("button4C3").className = 'shortcut_button0';
      document.getElementById("button5C3").className = 'shortcut_button0';
      document.getElementById("button6C3").className = 'shortcut_button0';
      document.getElementById("button7C3").className = 'shortcut_button0';
      document.getElementById("button8C3").className = 'shortcut_button0';
      document.getElementById("button9C3").className = 'shortcut_button0';
      document.getElementById("button10C3").className = 'shortcut_button0';
      document.getElementById("button11C3").className = 'shortcut_button0';
      document.getElementById("button12C3").className = 'shortcut_button0';
      document.getElementById("button13C3").className = 'shortcut_button0';
      document.getElementById("button14C3").className = 'shortcut_button0';
      document.getElementById("button15C3").className = 'shortcut_button0';
      document.getElementById("button16C3").className = 'shortcut_button0';
      document.getElementById("button17C3").className = 'shortcut_button0';
      document.getElementById("button18C3").className = 'shortcut_button0';
      document.getElementById("button19C3").className = 'shortcut_button0';
      document.getElementById("button20C3").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat3Button").className = 'shortcut_button1';
      document.getElementById("button1C3").className = 'shortcut_button1';
      document.getElementById("button2C3").className = 'shortcut_button1';
      document.getElementById("button3C3").className = 'shortcut_button1';
      document.getElementById("button4C3").className = 'shortcut_button1';
      document.getElementById("button5C3").className = 'shortcut_button1';
      document.getElementById("button6C3").className = 'shortcut_button1';
      document.getElementById("button7C3").className = 'shortcut_button1';
      document.getElementById("button8C3").className = 'shortcut_button1';
      document.getElementById("button9C3").className = 'shortcut_button1';
      document.getElementById("button10C3").className = 'shortcut_button1';
      document.getElementById("button11C3").className = 'shortcut_button1';
      document.getElementById("button12C3").className = 'shortcut_button1';
      document.getElementById("button13C3").className = 'shortcut_button1';
      document.getElementById("button14C3").className = 'shortcut_button1';
      document.getElementById("button15C3").className = 'shortcut_button1';
      document.getElementById("button16C3").className = 'shortcut_button1';
      document.getElementById("button17C3").className = 'shortcut_button1';
      document.getElementById("button18C3").className = 'shortcut_button1';
      document.getElementById("button19C3").className = 'shortcut_button1';
      document.getElementById("button20C3").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat3Button").className = 'shortcut_button2';
      document.getElementById("button1C3").className = 'shortcut_button2';
      document.getElementById("button2C3").className = 'shortcut_button2';
      document.getElementById("button3C3").className = 'shortcut_button2';
      document.getElementById("button4C3").className = 'shortcut_button2';
      document.getElementById("button5C3").className = 'shortcut_button2';
      document.getElementById("button6C3").className = 'shortcut_button2';
      document.getElementById("button7C3").className = 'shortcut_button2';
      document.getElementById("button8C3").className = 'shortcut_button2';
      document.getElementById("button9C3").className = 'shortcut_button2';
      document.getElementById("button10C3").className = 'shortcut_button2';
      document.getElementById("button11C3").className = 'shortcut_button2';
      document.getElementById("button12C3").className = 'shortcut_button2';
      document.getElementById("button13C3").className = 'shortcut_button2';
      document.getElementById("button14C3").className = 'shortcut_button2';
      document.getElementById("button15C3").className = 'shortcut_button2';
      document.getElementById("button16C3").className = 'shortcut_button2';
      document.getElementById("button17C3").className = 'shortcut_button2';
      document.getElementById("button18C3").className = 'shortcut_button2';
      document.getElementById("button19C3").className = 'shortcut_button2';
      document.getElementById("button20C3").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat3Button").className = 'shortcut_button3';
      document.getElementById("button1C3").className = 'shortcut_button3';
      document.getElementById("button2C3").className = 'shortcut_button3';
      document.getElementById("button3C3").className = 'shortcut_button3';
      document.getElementById("button4C3").className = 'shortcut_button3';
      document.getElementById("button5C3").className = 'shortcut_button3';
      document.getElementById("button6C3").className = 'shortcut_button3';
      document.getElementById("button7C3").className = 'shortcut_button3';
      document.getElementById("button8C3").className = 'shortcut_button3';
      document.getElementById("button9C3").className = 'shortcut_button3';
      document.getElementById("button10C3").className = 'shortcut_button3';
      document.getElementById("button11C3").className = 'shortcut_button3';
      document.getElementById("button12C3").className = 'shortcut_button3';
      document.getElementById("button13C3").className = 'shortcut_button3';
      document.getElementById("button14C3").className = 'shortcut_button3';
      document.getElementById("button15C3").className = 'shortcut_button3';
      document.getElementById("button16C3").className = 'shortcut_button3';
      document.getElementById("button17C3").className = 'shortcut_button3';
      document.getElementById("button18C3").className = 'shortcut_button3';
      document.getElementById("button19C3").className = 'shortcut_button3';
      document.getElementById("button20C3").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat3Button").className = 'shortcut_button4';
      document.getElementById("button1C3").className = 'shortcut_button4';
      document.getElementById("button2C3").className = 'shortcut_button4';
      document.getElementById("button3C3").className = 'shortcut_button4';
      document.getElementById("button4C3").className = 'shortcut_button4';
      document.getElementById("button5C3").className = 'shortcut_button4';
      document.getElementById("button6C3").className = 'shortcut_button4';
      document.getElementById("button7C3").className = 'shortcut_button4';
      document.getElementById("button8C3").className = 'shortcut_button4';
      document.getElementById("button9C3").className = 'shortcut_button4';
      document.getElementById("button10C3").className = 'shortcut_button4';
      document.getElementById("button11C3").className = 'shortcut_button4';
      document.getElementById("button12C3").className = 'shortcut_button4';
      document.getElementById("button13C3").className = 'shortcut_button4';
      document.getElementById("button14C3").className = 'shortcut_button4';
      document.getElementById("button15C3").className = 'shortcut_button4';
      document.getElementById("button16C3").className = 'shortcut_button4';
      document.getElementById("button17C3").className = 'shortcut_button4';
      document.getElementById("button18C3").className = 'shortcut_button4';
      document.getElementById("button19C3").className = 'shortcut_button4';
      document.getElementById("button20C3").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat3Button").className = 'shortcut_button5';
      document.getElementById("button1C3").className = 'shortcut_button5';
      document.getElementById("button2C3").className = 'shortcut_button5';
      document.getElementById("button3C3").className = 'shortcut_button5';
      document.getElementById("button4C3").className = 'shortcut_button5';
      document.getElementById("button5C3").className = 'shortcut_button5';
      document.getElementById("button6C3").className = 'shortcut_button5';
      document.getElementById("button7C3").className = 'shortcut_button5';
      document.getElementById("button8C3").className = 'shortcut_button5';
      document.getElementById("button9C3").className = 'shortcut_button5';
      document.getElementById("button10C3").className = 'shortcut_button5';
      document.getElementById("button11C3").className = 'shortcut_button5';
      document.getElementById("button12C3").className = 'shortcut_button5';
      document.getElementById("button13C3").className = 'shortcut_button5';
      document.getElementById("button14C3").className = 'shortcut_button5';
      document.getElementById("button15C3").className = 'shortcut_button5';
      document.getElementById("button16C3").className = 'shortcut_button5';
      document.getElementById("button17C3").className = 'shortcut_button5';
      document.getElementById("button18C3").className = 'shortcut_button5';
      document.getElementById("button19C3").className = 'shortcut_button5';
      document.getElementById("button20C3").className = 'shortcut_button5';
    }

  }

  if (currentCat == 4) {
    let catLabel = document.getElementById('catLabel').value;
    let catColor = document.getElementById('catColor').value;

    document.getElementById('cat4Button').innerHTML = catLabel;
    console.log("Update | Cat 4 Button: " + cat4Button + " catLabel: " + catLabel + "catColor: " + catColor);

    if (catColor === "Default") {
      document.getElementById("cat4Button").className = 'shortcut_button0';
      document.getElementById("button1C4").className = 'shortcut_button0';
      document.getElementById("button2C4").className = 'shortcut_button0';
      document.getElementById("button3C4").className = 'shortcut_button0';
      document.getElementById("button4C4").className = 'shortcut_button0';
      document.getElementById("button5C4").className = 'shortcut_button0';
      document.getElementById("button6C4").className = 'shortcut_button0';
      document.getElementById("button7C4").className = 'shortcut_button0';
      document.getElementById("button8C4").className = 'shortcut_button0';
      document.getElementById("button9C4").className = 'shortcut_button0';
      document.getElementById("button10C4").className = 'shortcut_button0';
      document.getElementById("button11C4").className = 'shortcut_button0';
      document.getElementById("button12C4").className = 'shortcut_button0';
      document.getElementById("button13C4").className = 'shortcut_button0';
      document.getElementById("button14C4").className = 'shortcut_button0';
      document.getElementById("button15C4").className = 'shortcut_button0';
      document.getElementById("button16C4").className = 'shortcut_button0';
      document.getElementById("button17C4").className = 'shortcut_button0';
      document.getElementById("button18C4").className = 'shortcut_button0';
      document.getElementById("button19C4").className = 'shortcut_button0';
      document.getElementById("button20C4").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat4Button").className = 'shortcut_button1';
      document.getElementById("button1C4").className = 'shortcut_button1';
      document.getElementById("button2C4").className = 'shortcut_button1';
      document.getElementById("button3C4").className = 'shortcut_button1';
      document.getElementById("button4C4").className = 'shortcut_button1';
      document.getElementById("button5C4").className = 'shortcut_button1';
      document.getElementById("button6C4").className = 'shortcut_button1';
      document.getElementById("button7C4").className = 'shortcut_button1';
      document.getElementById("button8C4").className = 'shortcut_button1';
      document.getElementById("button9C4").className = 'shortcut_button1';
      document.getElementById("button10C4").className = 'shortcut_button1';
      document.getElementById("button11C4").className = 'shortcut_button1';
      document.getElementById("button12C4").className = 'shortcut_button1';
      document.getElementById("button13C4").className = 'shortcut_button1';
      document.getElementById("button14C4").className = 'shortcut_button1';
      document.getElementById("button15C4").className = 'shortcut_button1';
      document.getElementById("button16C4").className = 'shortcut_button1';
      document.getElementById("button17C4").className = 'shortcut_button1';
      document.getElementById("button18C4").className = 'shortcut_button1';
      document.getElementById("button19C4").className = 'shortcut_button1';
      document.getElementById("button20C4").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat4Button").className = 'shortcut_button2';
      document.getElementById("button1C4").className = 'shortcut_button2';
      document.getElementById("button2C4").className = 'shortcut_button2';
      document.getElementById("button3C4").className = 'shortcut_button2';
      document.getElementById("button4C4").className = 'shortcut_button2';
      document.getElementById("button5C4").className = 'shortcut_button2';
      document.getElementById("button6C4").className = 'shortcut_button2';
      document.getElementById("button7C4").className = 'shortcut_button2';
      document.getElementById("button8C4").className = 'shortcut_button2';
      document.getElementById("button9C4").className = 'shortcut_button2';
      document.getElementById("button10C4").className = 'shortcut_button2';
      document.getElementById("button11C4").className = 'shortcut_button2';
      document.getElementById("button12C4").className = 'shortcut_button2';
      document.getElementById("button13C4").className = 'shortcut_button2';
      document.getElementById("button14C4").className = 'shortcut_button2';
      document.getElementById("button15C4").className = 'shortcut_button2';
      document.getElementById("button16C4").className = 'shortcut_button2';
      document.getElementById("button17C4").className = 'shortcut_button2';
      document.getElementById("button18C4").className = 'shortcut_button2';
      document.getElementById("button19C4").className = 'shortcut_button2';
      document.getElementById("button20C4").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat4Button").className = 'shortcut_button3';
      document.getElementById("button1C4").className = 'shortcut_button3';
      document.getElementById("button2C4").className = 'shortcut_button3';
      document.getElementById("button3C4").className = 'shortcut_button3';
      document.getElementById("button4C4").className = 'shortcut_button3';
      document.getElementById("button5C4").className = 'shortcut_button3';
      document.getElementById("button6C4").className = 'shortcut_button3';
      document.getElementById("button7C4").className = 'shortcut_button3';
      document.getElementById("button8C4").className = 'shortcut_button3';
      document.getElementById("button9C4").className = 'shortcut_button3';
      document.getElementById("button10C4").className = 'shortcut_button3';
      document.getElementById("button11C4").className = 'shortcut_button3';
      document.getElementById("button12C4").className = 'shortcut_button3';
      document.getElementById("button13C4").className = 'shortcut_button3';
      document.getElementById("button14C4").className = 'shortcut_button3';
      document.getElementById("button15C4").className = 'shortcut_button3';
      document.getElementById("button16C4").className = 'shortcut_button3';
      document.getElementById("button17C4").className = 'shortcut_button3';
      document.getElementById("button18C4").className = 'shortcut_button3';
      document.getElementById("button19C4").className = 'shortcut_button3';
      document.getElementById("button20C4").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat4Button").className = 'shortcut_button4';
      document.getElementById("button1C4").className = 'shortcut_button4';
      document.getElementById("button2C4").className = 'shortcut_button4';
      document.getElementById("button3C4").className = 'shortcut_button4';
      document.getElementById("button4C4").className = 'shortcut_button4';
      document.getElementById("button5C4").className = 'shortcut_button4';
      document.getElementById("button6C4").className = 'shortcut_button4';
      document.getElementById("button7C4").className = 'shortcut_button4';
      document.getElementById("button8C4").className = 'shortcut_button4';
      document.getElementById("button9C4").className = 'shortcut_button4';
      document.getElementById("button10C4").className = 'shortcut_button4';
      document.getElementById("button11C4").className = 'shortcut_button4';
      document.getElementById("button12C4").className = 'shortcut_button4';
      document.getElementById("button13C4").className = 'shortcut_button4';
      document.getElementById("button14C4").className = 'shortcut_button4';
      document.getElementById("button15C4").className = 'shortcut_button4';
      document.getElementById("button16C4").className = 'shortcut_button4';
      document.getElementById("button17C4").className = 'shortcut_button4';
      document.getElementById("button18C4").className = 'shortcut_button4';
      document.getElementById("button19C4").className = 'shortcut_button4';
      document.getElementById("button20C4").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat4Button").className = 'shortcut_button5';
      document.getElementById("button1C4").className = 'shortcut_button5';
      document.getElementById("button2C4").className = 'shortcut_button5';
      document.getElementById("button3C4").className = 'shortcut_button5';
      document.getElementById("button4C4").className = 'shortcut_button5';
      document.getElementById("button5C4").className = 'shortcut_button5';
      document.getElementById("button6C4").className = 'shortcut_button5';
      document.getElementById("button7C4").className = 'shortcut_button5';
      document.getElementById("button8C4").className = 'shortcut_button5';
      document.getElementById("button9C4").className = 'shortcut_button5';
      document.getElementById("button10C4").className = 'shortcut_button5';
      document.getElementById("button11C4").className = 'shortcut_button5';
      document.getElementById("button12C4").className = 'shortcut_button5';
      document.getElementById("button13C4").className = 'shortcut_button5';
      document.getElementById("button14C4").className = 'shortcut_button5';
      document.getElementById("button15C4").className = 'shortcut_button5';
      document.getElementById("button16C4").className = 'shortcut_button5';
      document.getElementById("button17C4").className = 'shortcut_button5';
      document.getElementById("button18C4").className = 'shortcut_button5';
      document.getElementById("button19C4").className = 'shortcut_button5';
      document.getElementById("button20C4").className = 'shortcut_button5';
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
      document.getElementById("button1C5").className = 'shortcut_button0';
      document.getElementById("button2C5").className = 'shortcut_button0';
      document.getElementById("button3C5").className = 'shortcut_button0';
      document.getElementById("button4C5").className = 'shortcut_button0';
      document.getElementById("button5C5").className = 'shortcut_button0';
      document.getElementById("button6C5").className = 'shortcut_button0';
      document.getElementById("button7C5").className = 'shortcut_button0';
      document.getElementById("button8C5").className = 'shortcut_button0';
      document.getElementById("button9C5").className = 'shortcut_button0';
      document.getElementById("button10C5").className = 'shortcut_button0';
      document.getElementById("button11C5").className = 'shortcut_button0';
      document.getElementById("button12C5").className = 'shortcut_button0';
      document.getElementById("button13C5").className = 'shortcut_button0';
      document.getElementById("button14C5").className = 'shortcut_button0';
      document.getElementById("button15C5").className = 'shortcut_button0';
      document.getElementById("button16C5").className = 'shortcut_button0';
      document.getElementById("button17C5").className = 'shortcut_button0';
      document.getElementById("button18C5").className = 'shortcut_button0';
      document.getElementById("button19C5").className = 'shortcut_button0';
      document.getElementById("button20C5").className = 'shortcut_button0';
    }

    if (catColor === "Red") {
      document.getElementById("cat5Button").className = 'shortcut_button1';
      document.getElementById("button1C5").className = 'shortcut_button1';
      document.getElementById("button2C5").className = 'shortcut_button1';
      document.getElementById("button3C5").className = 'shortcut_button1';
      document.getElementById("button4C5").className = 'shortcut_button1';
      document.getElementById("button5C5").className = 'shortcut_button1';
      document.getElementById("button6C5").className = 'shortcut_button1';
      document.getElementById("button7C5").className = 'shortcut_button1';
      document.getElementById("button8C5").className = 'shortcut_button1';
      document.getElementById("button9C5").className = 'shortcut_button1';
      document.getElementById("button10C5").className = 'shortcut_button1';
      document.getElementById("button11C5").className = 'shortcut_button1';
      document.getElementById("button12C5").className = 'shortcut_button1';
      document.getElementById("button13C5").className = 'shortcut_button1';
      document.getElementById("button14C5").className = 'shortcut_button1';
      document.getElementById("button15C5").className = 'shortcut_button1';
      document.getElementById("button16C5").className = 'shortcut_button1';
      document.getElementById("button17C5").className = 'shortcut_button1';
      document.getElementById("button18C5").className = 'shortcut_button1';
      document.getElementById("button19C5").className = 'shortcut_button1';
      document.getElementById("button20C5").className = 'shortcut_button1';
    }

    if (catColor === "Blue") {
      document.getElementById("cat5Button").className = 'shortcut_button2';
      document.getElementById("button1C5").className = 'shortcut_button2';
      document.getElementById("button2C5").className = 'shortcut_button2';
      document.getElementById("button3C5").className = 'shortcut_button2';
      document.getElementById("button4C5").className = 'shortcut_button2';
      document.getElementById("button5C5").className = 'shortcut_button2';
      document.getElementById("button6C5").className = 'shortcut_button2';
      document.getElementById("button7C5").className = 'shortcut_button2';
      document.getElementById("button8C5").className = 'shortcut_button2';
      document.getElementById("button9C5").className = 'shortcut_button2';
      document.getElementById("button10C5").className = 'shortcut_button2';
      document.getElementById("button11C5").className = 'shortcut_button2';
      document.getElementById("button12C5").className = 'shortcut_button2';
      document.getElementById("button13C5").className = 'shortcut_button2';
      document.getElementById("button14C5").className = 'shortcut_button2';
      document.getElementById("button15C5").className = 'shortcut_button2';
      document.getElementById("button16C5").className = 'shortcut_button2';
      document.getElementById("button17C5").className = 'shortcut_button2';
      document.getElementById("button18C5").className = 'shortcut_button2';
      document.getElementById("button19C5").className = 'shortcut_button2';
      document.getElementById("button20C5").className = 'shortcut_button2';
    }

    if (catColor === "Green") {
      document.getElementById("cat5Button").className = 'shortcut_button3';
      document.getElementById("button1C5").className = 'shortcut_button3';
      document.getElementById("button2C5").className = 'shortcut_button3';
      document.getElementById("button3C5").className = 'shortcut_button3';
      document.getElementById("button4C5").className = 'shortcut_button3';
      document.getElementById("button5C5").className = 'shortcut_button3';
      document.getElementById("button6C5").className = 'shortcut_button3';
      document.getElementById("button7C5").className = 'shortcut_button3';
      document.getElementById("button8C5").className = 'shortcut_button3';
      document.getElementById("button9C5").className = 'shortcut_button3';
      document.getElementById("button10C5").className = 'shortcut_button3';
      document.getElementById("button11C5").className = 'shortcut_button3';
      document.getElementById("button12C5").className = 'shortcut_button3';
      document.getElementById("button13C5").className = 'shortcut_button3';
      document.getElementById("button14C5").className = 'shortcut_button3';
      document.getElementById("button15C5").className = 'shortcut_button3';
      document.getElementById("button16C5").className = 'shortcut_button3';
      document.getElementById("button17C5").className = 'shortcut_button3';
      document.getElementById("button18C5").className = 'shortcut_button3';
      document.getElementById("button19C5").className = 'shortcut_button3';
      document.getElementById("button20C5").className = 'shortcut_button3';
    }

    if (catColor === "Orange") {
      document.getElementById("cat5Button").className = 'shortcut_button4';
      document.getElementById("button1C5").className = 'shortcut_button4';
      document.getElementById("button2C5").className = 'shortcut_button4';
      document.getElementById("button3C5").className = 'shortcut_button4';
      document.getElementById("button4C5").className = 'shortcut_button4';
      document.getElementById("button5C5").className = 'shortcut_button4';
      document.getElementById("button6C5").className = 'shortcut_button4';
      document.getElementById("button7C5").className = 'shortcut_button4';
      document.getElementById("button8C5").className = 'shortcut_button4';
      document.getElementById("button9C5").className = 'shortcut_button4';
      document.getElementById("button10C5").className = 'shortcut_button4';
      document.getElementById("button11C5").className = 'shortcut_button4';
      document.getElementById("button12C5").className = 'shortcut_button4';
      document.getElementById("button13C5").className = 'shortcut_button4';
      document.getElementById("button14C5").className = 'shortcut_button4';
      document.getElementById("button15C5").className = 'shortcut_button4';
      document.getElementById("button16C5").className = 'shortcut_button4';
      document.getElementById("button17C5").className = 'shortcut_button4';
      document.getElementById("button18C5").className = 'shortcut_button4';
      document.getElementById("button19C5").className = 'shortcut_button4';
      document.getElementById("button20C5").className = 'shortcut_button4';
    }
  
    if (catColor === "Purple") {
      document.getElementById("cat5Button").className = 'shortcut_button5';
      document.getElementById("button1C5").className = 'shortcut_button5';
      document.getElementById("button2C5").className = 'shortcut_button5';
      document.getElementById("button3C5").className = 'shortcut_button5';
      document.getElementById("button4C5").className = 'shortcut_button5';
      document.getElementById("button5C5").className = 'shortcut_button5';
      document.getElementById("button6C5").className = 'shortcut_button5';
      document.getElementById("button7C5").className = 'shortcut_button5';
      document.getElementById("button8C5").className = 'shortcut_button5';
      document.getElementById("button9C5").className = 'shortcut_button5';
      document.getElementById("button10C5").className = 'shortcut_button5';
      document.getElementById("button11C5").className = 'shortcut_button5';
      document.getElementById("button12C5").className = 'shortcut_button5';
      document.getElementById("button13C5").className = 'shortcut_button5';
      document.getElementById("button14C5").className = 'shortcut_button5';
      document.getElementById("button15C5").className = 'shortcut_button5';
      document.getElementById("button16C5").className = 'shortcut_button5';
      document.getElementById("button17C5").className = 'shortcut_button5';
      document.getElementById("button18C5").className = 'shortcut_button5';
      document.getElementById("button19C5").className = 'shortcut_button5';
      document.getElementById("button20C5").className = 'shortcut_button5';
    }
  }
}

function selectBut1() {
  if (editModeOn == 1) {
    currentBut = 1;
    document.getElementById('butNumber').innerHTML = but1;
    document.getElementById('butLabel').value = but1;

    console.log("Edit Mode: Button 1C1 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut2() {
  if (editModeOn == 1) {
    currentBut = 2;
    document.getElementById('butNumber').innerHTML = but2;
    document.getElementById('butLabel').value = but2;

    console.log("Edit Mode: Button 2C2 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut3() {
  if (editModeOn == 1) {
    currentBut = 3;
    document.getElementById('butNumber').innerHTML = but3;
    document.getElementById('butLabel').value = but3;

    console.log("Edit Mode: Button 3C3 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut4() {
  if (editModeOn == 1) {
    currentBut = 4;
    document.getElementById('butNumber').innerHTML = but4;
    document.getElementById('butLabel').value = but4;

    console.log("Edit Mode: Button 4C4 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut5() {
  if (editModeOn == 1) {
    currentBut = 5;
    document.getElementById('butNumber').innerHTML = but5;
    document.getElementById('butLabel').value = but5;

    console.log("Edit Mode: Button 5C5 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut6() {
  if (editModeOn == 1) {
    currentBut = 6;
    document.getElementById('butNumber').innerHTML = but6;
    document.getElementById('butLabel').value = but6;

    console.log("Edit Mode: Button 6C6 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut7() {
  if (editModeOn == 1) {
    currentBut = 7;
    document.getElementById('butNumber').innerHTML = but7;
    document.getElementById('butLabel').value = but7;

    console.log("Edit Mode: Button 7C7 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut8() {
  if (editModeOn == 1) {
    currentBut = 8;
    document.getElementById('butNumber').innerHTML = but8;
    document.getElementById('butLabel').value = but8;

    console.log("Edit Mode: Button 8C8 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut9() {
  if (editModeOn == 1) {
    currentBut = 9;
    document.getElementById('butNumber').innerHTML = but9;
    document.getElementById('butLabel').value = but9;

    console.log("Edit Mode: Button 9C9 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut10() {
  if (editModeOn == 1) {
    currentBut = 10;
    document.getElementById('butNumber').innerHTML = but10;
    document.getElementById('butLabel').value = but10;

    console.log("Edit Mode: Button 10C10 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut11() {
  if (editModeOn == 1) {
    currentBut = 11;
    document.getElementById('butNumber').innerHTML = but11;
    document.getElementById('butLabel').value = but11;

    console.log("Edit Mode: Button 11C11 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut12() {
  if (editModeOn == 1) {
    currentBut = 12;
    document.getElementById('butNumber').innerHTML = but12;
    document.getElementById('butLabel').value = but12;

    console.log("Edit Mode: Button 12C12 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut13() {
  if (editModeOn == 1) {
    currentBut = 13;
    document.getElementById('butNumber').innerHTML = but13;
    document.getElementById('butLabel').value = but13;

    console.log("Edit Mode: Button 13C13 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut14() {
  if (editModeOn == 1) {
    currentBut = 14;
    document.getElementById('butNumber').innerHTML = but14;
    document.getElementById('butLabel').value = but14;

    console.log("Edit Mode: Button 14C514 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut15() {
  if (editModeOn == 1) {
    currentBut = 15;
    document.getElementById('butNumber').innerHTML = but15;
    document.getElementById('butLabel').value = but15;

    console.log("Edit Mode: Button 15C15 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut16() {
  if (editModeOn == 1) {
    currentBut = 16;
    document.getElementById('butNumber').innerHTML = but16;
    document.getElementById('butLabel').value = but16;

    console.log("Edit Mode: Button 16C16 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut17() {
  if (editModeOn == 1) {
    currentBut = 17;
    document.getElementById('butNumber').innerHTML = but17;
    document.getElementById('butLabel').value = but17;

    console.log("Edit Mode: Button 17C17 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut18() {
  if (editModeOn == 1) {
    currentBut = 18;
    document.getElementById('butNumber').innerHTML = but18;
    document.getElementById('butLabel').value = but18;

    console.log("Edit Mode: Button 18C18 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut19() {
  if (editModeOn == 1) {
    currentBut = 19;
    document.getElementById('butNumber').innerHTML = but19;
    document.getElementById('butLabel').value = but19;

    console.log("Edit Mode: Button 19C19 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut20() {
  if (editModeOn == 1) {
    currentBut = 20;
    document.getElementById('butNumber').innerHTML = but20;
    document.getElementById('butLabel').value = but20;

    console.log("Edit Mode: Button 20C20 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut21() {
  if (editModeOn == 1) {
    currentBut = 21;
    document.getElementById('butNumber').innerHTML = but21;
    document.getElementById('butLabel').value = but21;

    console.log("Edit Mode: Button 21C21 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut22() {
  if (editModeOn == 1) {
    currentBut = 22;
    document.getElementById('butNumber').innerHTML = but22;
    document.getElementById('butLabel').value = but22;

    console.log("Edit Mode: Button 22C22 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut23() {
  if (editModeOn == 1) {
    currentBut = 23;
    document.getElementById('butNumber').innerHTML = but23;
    document.getElementById('butLabel').value = but23;

    console.log("Edit Mode: Button 23C23 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut24() {
  if (editModeOn == 1) {
    currentBut = 24;
    document.getElementById('butNumber').innerHTML = but24;
    document.getElementById('butLabel').value = but24;

    console.log("Edit Mode: Button 24C24 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut25() {
  if (editModeOn == 1) {
    currentBut = 25;
    document.getElementById('butNumber').innerHTML = but25;
    document.getElementById('butLabel').value = but25;

    console.log("Edit Mode: Button 25C25 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut26() {
  if (editModeOn == 1) {
    currentBut = 26;
    document.getElementById('butNumber').innerHTML = but26;
    document.getElementById('butLabel').value = but26;

    console.log("Edit Mode: Button 26C26 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut27() {
  if (editModeOn == 1) {
    currentBut = 27;
    document.getElementById('butNumber').innerHTML = but27;
    document.getElementById('butLabel').value = but27;

    console.log("Edit Mode: Button 27C27 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut28() {
  if (editModeOn == 1) {
    currentBut = 28;
    document.getElementById('butNumber').innerHTML = but28;
    document.getElementById('butLabel').value = but28;

    console.log("Edit Mode: Button 28C28 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut29() {
  if (editModeOn == 1) {
    currentBut = 29;
    document.getElementById('butNumber').innerHTML = but29;
    document.getElementById('butLabel').value = but29;

    console.log("Edit Mode: Button 29C29 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut30() {
  if (editModeOn == 1) {
    currentBut = 30;
    document.getElementById('butNumber').innerHTML = but30;
    document.getElementById('butLabel').value = but30;

    console.log("Edit Mode: Button 30C30 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut31() {
  if (editModeOn == 1) {
    currentBut = 31;
    document.getElementById('butNumber').innerHTML = but31;
    document.getElementById('butLabel').value = but31;

    console.log("Edit Mode: Button 31C31 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut32() {
  if (editModeOn == 1) {
    currentBut = 32;
    document.getElementById('butNumber').innerHTML = but32;
    document.getElementById('butLabel').value = but32;

    console.log("Edit Mode: Button 32C32 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut33() {
  if (editModeOn == 1) {
    currentBut = 33;
    document.getElementById('butNumber').innerHTML = but33;
    document.getElementById('butLabel').value = but33;

    console.log("Edit Mode: Button 33C33 Selected Current Label: " + butLabel.value);
  }
}

function selectBut34() {
  if (editModeOn == 1) {
    currentBut = 34;
    document.getElementById('butNumber').innerHTML = but34;
    document.getElementById('butLabel').value = but34;

    console.log("Edit Mode: Button 34C34 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut35() {
  if (editModeOn == 1) {
    currentBut = 35;
    document.getElementById('butNumber').innerHTML = but35;
    document.getElementById('butLabel').value = but35;

    console.log("Edit Mode: Button 35C35 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut36() {
  if (editModeOn == 1) {
    currentBut = 36;
    document.getElementById('butNumber').innerHTML = but36;
    document.getElementById('butLabel').value = but36;

    console.log("Edit Mode: Button 36C36 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut37() {
  if (editModeOn == 1) {
    currentBut = 37;
    document.getElementById('butNumber').innerHTML = but37;
    document.getElementById('butLabel').value = but37;

    console.log("Edit Mode: Button 37C37 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut38() {
  if (editModeOn == 1) {
    currentBut = 38;
    document.getElementById('butNumber').innerHTML = but38;
    document.getElementById('butLabel').value = but38;

    console.log("Edit Mode: Button 38C38 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut39() {
  if (editModeOn == 1) {
    currentBut = 39;
    document.getElementById('butNumber').innerHTML = but39;
    document.getElementById('butLabel').value = but39;

    console.log("Edit Mode: Button 39C39 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut40() {
  if (editModeOn == 1) {
    currentBut = 40;
    document.getElementById('butNumber').innerHTML = but40;
    document.getElementById('butLabel').value = but40;

    console.log("Edit Mode: Button 40C40 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut41() {
  if (editModeOn == 1) {
    currentBut = 41;
    document.getElementById('butNumber').innerHTML = but41;
    document.getElementById('butLabel').value = but41;

    console.log("Edit Mode: Button 41C41 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut42() {
  if (editModeOn == 1) {
    currentBut = 42;
    document.getElementById('butNumber').innerHTML = but42;
    document.getElementById('butLabel').value = but42;

    console.log("Edit Mode: Button 42C42 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut43() {
  if (editModeOn == 1) {
    currentBut = 43;
    document.getElementById('butNumber').innerHTML = but43;
    document.getElementById('butLabel').value = but43;

    console.log("Edit Mode: Button 43C43 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut44() {
  if (editModeOn == 1) {
    currentBut = 44;
    document.getElementById('butNumber').innerHTML = but44;
    document.getElementById('butLabel').value = but44;

    console.log("Edit Mode: Button 44C44 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut45() {
  if (editModeOn == 1) {
    currentBut = 45;
    document.getElementById('butNumber').innerHTML = but45;
    document.getElementById('butLabel').value = but45;

    console.log("Edit Mode: Button 45C45 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut46() {
  if (editModeOn == 1) {
    currentBut = 46;
    document.getElementById('butNumber').innerHTML = but46;
    document.getElementById('butLabel').value = but46;

    console.log("Edit Mode: Button 46C46 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut47() {
  if (editModeOn == 1) {
    currentBut = 47;
    document.getElementById('butNumber').innerHTML = but47;
    document.getElementById('butLabel').value = but47;

    console.log("Edit Mode: Button 47C47 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut48() {
  if (editModeOn == 1) {
    currentBut = 48;
    document.getElementById('butNumber').innerHTML = but48;
    document.getElementById('butLabel').value = but48;

    console.log("Edit Mode: Button 48C48 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut49() {
  if (editModeOn == 1) {
    currentBut = 49;
    document.getElementById('butNumber').innerHTML = but49;
    document.getElementById('butLabel').value = but49;

    console.log("Edit Mode: Button 49C49 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut50() {
  if (editModeOn == 1) {
    currentBut = 50;
    document.getElementById('butNumber').innerHTML = but50;
    document.getElementById('butLabel').value = but50;

    console.log("Edit Mode: Button 50C50 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut51() {
  if (editModeOn == 1) {
    currentBut = 51;
    document.getElementById('butNumber').innerHTML = but51;
    document.getElementById('butLabel').value = but51;

    console.log("Edit Mode: Button 51C51 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut52() {
  if (editModeOn == 1) {
    currentBut = 52;
    document.getElementById('butNumber').innerHTML = but52;
    document.getElementById('butLabel').value = but52;

    console.log("Edit Mode: Button 52C52 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut53() {
  if (editModeOn == 1) {
    currentBut = 53;
    document.getElementById('butNumber').innerHTML = but53;
    document.getElementById('butLabel').value = but53;

    console.log("Edit Mode: Button 53C53 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut54() {
  if (editModeOn == 1) {
    currentBut = 54;
    document.getElementById('butNumber').innerHTML = but54;
    document.getElementById('butLabel').value = but54;

    console.log("Edit Mode: Button 54C54 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut55() {
  if (editModeOn == 1) {
    currentBut = 55;
    document.getElementById('butNumber').innerHTML = but55;
    document.getElementById('butLabel').value = but55;

    console.log("Edit Mode: Button 55C55 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut56() {
  if (editModeOn == 1) {
    currentBut = 56;
    document.getElementById('butNumber').innerHTML = but56;
    document.getElementById('butLabel').value = but56;

    console.log("Edit Mode: Button 56C56 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut57() {
  if (editModeOn == 1) {
    currentBut = 57;
    document.getElementById('butNumber').innerHTML = but57;
    document.getElementById('butLabel').value = but57;

    console.log("Edit Mode: Button 57C57 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut58() {
  if (editModeOn == 1) {
    currentBut = 58;
    document.getElementById('butNumber').innerHTML = but58;
    document.getElementById('butLabel').value = but58;

    console.log("Edit Mode: Button 58C58 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut59() {
  if (editModeOn == 1) {
    currentBut = 59;
    document.getElementById('butNumber').innerHTML = but59;
    document.getElementById('butLabel').value = but59;

    console.log("Edit Mode: Button 59C59 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut60() {
  if (editModeOn == 1) {
    currentBut = 60;
    document.getElementById('butNumber').innerHTML = but60;
    document.getElementById('butLabel').value = but60;

    console.log("Edit Mode: Button 60C60 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut61() {
  if (editModeOn == 1) {
    currentBut = 61;
    document.getElementById('butNumber').innerHTML = but61;
    document.getElementById('butLabel').value = but61;

    console.log("Edit Mode: Button 61C61 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut62() {
  if (editModeOn == 1) {
    currentBut = 62;
    document.getElementById('butNumber').innerHTML = but62;
    document.getElementById('butLabel').value = but62;

    console.log("Edit Mode: Button 62C62 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut63() {
  if (editModeOn == 1) {
    currentBut = 63;
    document.getElementById('butNumber').innerHTML = but63;
    document.getElementById('butLabel').value = but63;

    console.log("Edit Mode: Button 63C63 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut64() {
  if (editModeOn == 1) {
    currentBut = 64;
    document.getElementById('butNumber').innerHTML = but64;
    document.getElementById('butLabel').value = but64;

    console.log("Edit Mode: Button 64C64 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut65() {
  if (editModeOn == 1) {
    currentBut = 65;
    document.getElementById('butNumber').innerHTML = but65;
    document.getElementById('butLabel').value = but65;

    console.log("Edit Mode: Button 65C65 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut66() {
  if (editModeOn == 1) {
    currentBut = 66;
    document.getElementById('butNumber').innerHTML = but66;
    document.getElementById('butLabel').value = but66;

    console.log("Edit Mode: Button 66C66 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut67() {
  if (editModeOn == 1) {
    currentBut = 67;
    document.getElementById('butNumber').innerHTML = but67;
    document.getElementById('butLabel').value = but67;

    console.log("Edit Mode: Button 67C67 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut68() {
  if (editModeOn == 1) {
    currentBut = 68;
    document.getElementById('butNumber').innerHTML = but68;
    document.getElementById('butLabel').value = but68;

    console.log("Edit Mode: Button 68C68 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut69() {
  if (editModeOn == 1) {
    currentBut = 69;
    document.getElementById('butNumber').innerHTML = but69;
    document.getElementById('butLabel').value = but69;

    console.log("Edit Mode: Button 69C69 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut70() {
  if (editModeOn == 1) {
    currentBut = 70;
    document.getElementById('butNumber').innerHTML = but70;
    document.getElementById('butLabel').value = but70;

    console.log("Edit Mode: Button 70C70 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut71() {
  if (editModeOn == 1) {
    currentBut = 71;
    document.getElementById('butNumber').innerHTML = but71;
    document.getElementById('butLabel').value = but71;

    console.log("Edit Mode: Button 71C71 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut72() {
  if (editModeOn == 1) {
    currentBut = 72;
    document.getElementById('butNumber').innerHTML = but72;
    document.getElementById('butLabel').value = but72;

    console.log("Edit Mode: Button 72C72 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut73() {
  if (editModeOn == 1) {
    currentBut = 73;
    document.getElementById('butNumber').innerHTML = but73;
    document.getElementById('butLabel').value = but73;

    console.log("Edit Mode: Button 73C73 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut74() {
  if (editModeOn == 1) {
    currentBut = 74;
    document.getElementById('butNumber').innerHTML = but74;
    document.getElementById('butLabel').value = but74;

    console.log("Edit Mode: Button 74C74 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut75() {
  if (editModeOn == 1) {
    currentBut = 75;
    document.getElementById('butNumber').innerHTML = but75;
    document.getElementById('butLabel').value = but75;

    console.log("Edit Mode: Button 75C75 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut76() {
  if (editModeOn == 1) {
    currentBut = 76;
    document.getElementById('butNumber').innerHTML = but76;
    document.getElementById('butLabel').value = but76;

    console.log("Edit Mode: Button 76C76 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut77() {
  if (editModeOn == 1) {
    currentBut = 77;
    document.getElementById('butNumber').innerHTML = but77;
    document.getElementById('butLabel').value = but77;

    console.log("Edit Mode: Button 77C77 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut78() {
  if (editModeOn == 1) {
    currentBut = 78;
    document.getElementById('butNumber').innerHTML = but78;
    document.getElementById('butLabel').value = but78;

    console.log("Edit Mode: Button 78C78 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut79() {
  if (editModeOn == 1) {
    currentBut = 79;
    document.getElementById('butNumber').innerHTML = but79;
    document.getElementById('butLabel').value = but79;

    console.log("Edit Mode: Button 79C79 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut80() {
  if (editModeOn == 1) {
    currentBut = 80;
    document.getElementById('butNumber').innerHTML = but80;
    document.getElementById('butLabel').value = but80;

    console.log("Edit Mode: Button 80C80 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut81() {
  if (editModeOn == 1) {
    currentBut = 81;
    document.getElementById('butNumber').innerHTML = but81;
    document.getElementById('butLabel').value = but81;

    console.log("Edit Mode: Button 81C81 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut82() {
  if (editModeOn == 1) {
    currentBut = 82;
    document.getElementById('butNumber').innerHTML = but82;
    document.getElementById('butLabel').value = but82;

    console.log("Edit Mode: Button 82C82 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut83() {
  if (editModeOn == 1) {
    currentBut = 83;
    document.getElementById('butNumber').innerHTML = but83;
    document.getElementById('butLabel').value = but83;

    console.log("Edit Mode: Button 83C83 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut84() {
  if (editModeOn == 1) {
    currentBut = 84;
    document.getElementById('butNumber').innerHTML = but84;
    document.getElementById('butLabel').value = but84;

    console.log("Edit Mode: Button 84C84 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut85() {
  if (editModeOn == 1) {
    currentBut = 85;
    document.getElementById('butNumber').innerHTML = but85;
    document.getElementById('butLabel').value = but85;

    console.log("Edit Mode: Button 85C85 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut86() {
  if (editModeOn == 1) {
    currentBut = 86;
    document.getElementById('butNumber').innerHTML = but86;
    document.getElementById('butLabel').value = but86;

    console.log("Edit Mode: Button 86C86 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut87() {
  if (editModeOn == 1) {
    currentBut = 87;
    document.getElementById('butNumber').innerHTML = but87;
    document.getElementById('butLabel').value = but87;

    console.log("Edit Mode: Button 87C87 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut88() {
  if (editModeOn == 1) {
    currentBut = 88;
    document.getElementById('butNumber').innerHTML = but88;
    document.getElementById('butLabel').value = but88;

    console.log("Edit Mode: Button 88C88 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut89() {
  if (editModeOn == 1) {
    currentBut = 89;
    document.getElementById('butNumber').innerHTML = but89;
    document.getElementById('butLabel').value = but89;

    console.log("Edit Mode: Button 89C89 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut90() {
  if (editModeOn == 1) {
    currentBut = 90;
    document.getElementById('butNumber').innerHTML = but90;
    document.getElementById('butLabel').value = but90;

    console.log("Edit Mode: Button 90C90 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut91() {
  if (editModeOn == 1) {
    currentBut = 91;
    document.getElementById('butNumber').innerHTML = but91;
    document.getElementById('butLabel').value = but91;

    console.log("Edit Mode: Button 91C91 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut92() {
  if (editModeOn == 1) {
    currentBut = 92;
    document.getElementById('butNumber').innerHTML = but92;
    document.getElementById('butLabel').value = but92;

    console.log("Edit Mode: Button 92C92 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut93() {
  if (editModeOn == 1) {
    currentBut = 93;
    document.getElementById('butNumber').innerHTML = but93;
    document.getElementById('butLabel').value = but93;

    console.log("Edit Mode: Button 93C93 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut94() {
  if (editModeOn == 1) {
    currentBut = 94;
    document.getElementById('butNumber').innerHTML = but94;
    document.getElementById('butLabel').value = but94;

    console.log("Edit Mode: Button 94C94 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut95() {
  if (editModeOn == 1) {
    currentBut = 95;
    document.getElementById('butNumber').innerHTML = but95;
    document.getElementById('butLabel').value = but95;

    console.log("Edit Mode: Button 95C95 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut96() {
  if (editModeOn == 1) {
    currentBut = 96;
    document.getElementById('butNumber').innerHTML = but96;
    document.getElementById('butLabel').value = but96;

    console.log("Edit Mode: Button 96C96 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut97() {
  if (editModeOn == 1) {
    currentBut = 97;
    document.getElementById('butNumber').innerHTML = but97;
    document.getElementById('butLabel').value = but97;

    console.log("Edit Mode: Button 97C97 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut98() {
  if (editModeOn == 1) {
    currentBut = 98;
    document.getElementById('butNumber').innerHTML = but98;
    document.getElementById('butLabel').value = but98;

    console.log("Edit Mode: Button 98C98 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut99() {
  if (editModeOn == 1) {
    currentBut = 99;
    document.getElementById('butNumber').innerHTML = but99;
    document.getElementById('butLabel').value = but99;

    console.log("Edit Mode: Button 99C99 Selected, Current Label: " + butLabel.value);
  }
}

function selectBut100() {
  if (editModeOn == 1) {
    currentBut = 100;
    document.getElementById('butNumber').innerHTML = but100;
    document.getElementById('butLabel').value = but100;

    console.log("Edit Mode: Button 100C100 Selected, Current Label: " + butLabel.value);
  }
}

function updateBut() {
  if (currentBut == 1) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button1C1').innerHTML = butLabel;
  }

  if (currentBut == 2) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button2C1').innerHTML = butLabel;
  }

  if (currentBut == 3) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button3C1').innerHTML = butLabel;
  }

  if (currentBut == 4) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button4C1').innerHTML = butLabel;
  }

  if (currentBut == 5) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button5C1').innerHTML = butLabel;
  }

  if (currentBut == 6) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button6C1').innerHTML = butLabel;
  }

  if (currentBut == 7) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button7C1').innerHTML = butLabel;
  }

  if (currentBut == 8) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button8C1').innerHTML = butLabel;
  }

  if (currentBut == 9) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button9C1').innerHTML = butLabel;
  }

  if (currentBut == 10) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button10C1').innerHTML = butLabel;
  }

  if (currentBut == 11) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button11C1').innerHTML = butLabel;
  }

  if (currentBut == 12) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button12C1').innerHTML = butLabel;
  }

  if (currentBut == 13) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button13C1').innerHTML = butLabel;
  }

  if (currentBut == 14) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button14C1').innerHTML = butLabel;
  }

  if (currentBut == 15) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button15C1').innerHTML = butLabel;
  }

  if (currentBut == 16) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button16C1').innerHTML = butLabel;
  }

  if (currentBut == 17) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button17C1').innerHTML = butLabel;
  }

  if (currentBut == 18) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button18C1').innerHTML = butLabel;
  }

  if (currentBut == 19) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button19C1').innerHTML = butLabel;
  }

  if (currentBut == 20) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button20C1').innerHTML = butLabel;
  }

  if (currentBut == 21) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button1C2').innerHTML = butLabel;
  }

  if (currentBut == 22) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button2C2').innerHTML = butLabel;
  }

  if (currentBut == 23) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button3C2').innerHTML = butLabel;
  }

  if (currentBut == 24) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button4C2').innerHTML = butLabel;
  }

  if (currentBut == 25) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button5C2').innerHTML = butLabel;
  }
2
  if (currentBut == 26) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button6C2').innerHTML = butLabel;
  }

  if (currentBut == 27) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button7C2').innerHTML = butLabel;
  }

  if (currentBut == 28) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button8C2').innerHTML = butLabel;
  }

  if (currentBut == 29) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button9C2').innerHTML = butLabel;
  }

  if (currentBut == 30) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button10C2').innerHTML = butLabel;
  }

  if (currentBut == 31) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button11C2').innerHTML = butLabel;
  }

  if (currentBut == 32) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button12C2').innerHTML = butLabel;
  }

  if (currentBut == 33) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button13C2').innerHTML = butLabel;
  }

  if (currentBut == 34) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button14C2').innerHTML = butLabel;
  }

  if (currentBut == 35) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button15C2').innerHTML = butLabel;
  }

  if (currentBut == 36) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button16C2').innerHTML = butLabel;
  }

  if (currentBut == 37) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button17C2').innerHTML = butLabel;
  }

  if (currentBut == 38) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button18C2').innerHTML = butLabel;
  }

  if (currentBut == 39) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button19C2').innerHTML = butLabel;
  }

  if (currentBut == 40) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button20C2').innerHTML = butLabel;
  }

  if (currentBut == 41) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button1C3').innerHTML = butLabel;
  }

  if (currentBut == 42) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button2C3').innerHTML = butLabel;
  }

  if (currentBut == 43) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button3C3').innerHTML = butLabel;
  }

  if (currentBut == 44) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button4C3').innerHTML = butLabel;
  }

  if (currentBut == 45) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button5C3').innerHTML = butLabel;
  }
2
  if (currentBut == 46) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button6C3').innerHTML = butLabel;
  }

  if (currentBut == 47) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button7C3').innerHTML = butLabel;
  }

  if (currentBut == 48) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button8C3').innerHTML = butLabel;
  }

  if (currentBut == 49) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button9C3').innerHTML = butLabel;
  }

  if (currentBut == 50) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button10C3').innerHTML = butLabel;
  }

  if (currentBut == 51) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button11C3').innerHTML = butLabel;
  }

  if (currentBut == 52) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button12C3').innerHTML = butLabel;
  }

  if (currentBut == 53) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button13C3').innerHTML = butLabel;
  }

  if (currentBut == 54) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button14C3').innerHTML = butLabel;
  }

  if (currentBut == 55) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button15C3').innerHTML = butLabel;
  }

  if (currentBut == 56) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button16C3').innerHTML = butLabel;
  }

  if (currentBut == 57) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button17C3').innerHTML = butLabel;
  }

  if (currentBut == 58) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button18C3').innerHTML = butLabel;
  }

  if (currentBut == 59) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button19C3').innerHTML = butLabel;
  }

  if (currentBut == 60) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button20C3').innerHTML = butLabel;
  }

  if (currentBut == 61) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button1C4').innerHTML = butLabel;
  }

  if (currentBut == 62) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button2C4').innerHTML = butLabel;
  }

  if (currentBut == 63) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button3C4').innerHTML = butLabel;
  }

  if (currentBut == 64) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button4C4').innerHTML = butLabel;
  }

  if (currentBut == 65) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button5C4').innerHTML = butLabel;
  }
2
  if (currentBut == 66) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button6C4').innerHTML = butLabel;
  }

  if (currentBut == 67) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button7C4').innerHTML = butLabel;
  }

  if (currentBut == 68) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button8C4').innerHTML = butLabel;
  }

  if (currentBut == 69) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button9C4').innerHTML = butLabel;
  }

  if (currentBut == 70) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button10C4').innerHTML = butLabel;
  }

  if (currentBut == 71) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button11C4').innerHTML = butLabel;
  }

  if (currentBut == 72) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button12C4').innerHTML = butLabel;
  }

  if (currentBut == 73) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button13C4').innerHTML = butLabel;
  }

  if (currentBut == 74) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button14C4').innerHTML = butLabel;
  }

  if (currentBut == 75) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button15C4').innerHTML = butLabel;
  }

  if (currentBut == 76) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button16C4').innerHTML = butLabel;
  }

  if (currentBut == 77) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button17C4').innerHTML = butLabel;
  }

  if (currentBut == 78) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button18C4').innerHTML = butLabel;
  }

  if (currentBut == 79) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button19C4').innerHTML = butLabel;
  }

  if (currentBut == 80) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button20C4').innerHTML = butLabel;
  }

  if (currentBut == 81) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button1C5').innerHTML = butLabel;
  }

  if (currentBut == 82) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button2C5').innerHTML = butLabel;
  }

  if (currentBut == 83) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button3C5').innerHTML = butLabel;
  }

  if (currentBut == 84) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button4C5').innerHTML = butLabel;
  }

  if (currentBut == 85) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button5C5').innerHTML = butLabel;
  }
2
  if (currentBut == 86) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button6C5').innerHTML = butLabel;
  }

  if (currentBut == 87) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button7C5').innerHTML = butLabel;
  }

  if (currentBut == 88) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button8C5').innerHTML = butLabel;
  }

  if (currentBut == 89) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button9C5').innerHTML = butLabel;
  }

  if (currentBut == 90) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button10C5').innerHTML = butLabel;
  }

  if (currentBut == 91) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button11C5').innerHTML = butLabel;
  }

  if (currentBut == 92) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button12C5').innerHTML = butLabel;
  }

  if (currentBut == 93) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button13C5').innerHTML = butLabel;
  }

  if (currentBut == 94) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button14C5').innerHTML = butLabel;
  }

  if (currentBut == 95) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button15C5').innerHTML = butLabel;
  }

  if (currentBut == 96) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button16C5').innerHTML = butLabel;
  }

  if (currentBut == 97) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button17C5').innerHTML = butLabel;
  }

  if (currentBut == 98) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button18C5').innerHTML = butLabel;
  }

  if (currentBut == 99) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button19C5').innerHTML = butLabel;
  }

  if (currentBut == 100) {
    let butLabel = document.getElementById('butLabel').value;
    document.getElementById('button20C5').innerHTML = butLabel;
  }
}
