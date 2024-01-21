function darkMode(){
    const body = document.querySelector('.body');
    const titelUpFileH = document.getElementById("titelUpFileH");
    const uploadicon=document.getElementById("upload-icon");
    const titelUpFileP = document.getElementById("titelUpFileP");
    const iconAndhandleDropP = document.getElementById("iconAndhandleDropP");
    const icons = document.getElementById("icons");
    const dropzone = document.getElementById("drop-zone");
    const uploadiconDiv = document.getElementById("upload-iconDiv");
    const AllData = document.querySelector('.AllData');
    var AllDataH = AllData.querySelector('h1');
    var inputBox = document.querySelector('.inputBox');
    var inputElements = inputBox.querySelectorAll('input');
    const menuTypeStructure = document.getElementById("menuTypeStructure");
    const menuTypefile = document.getElementById("menuTypefile");
    const selectedValue = document.getElementById("selectedValue");
    const selectedValueRetailer = document.getElementById("selectedValueRetailer");
    const fileChek = document.getElementById("fileChek");
    var upFile = document.querySelector('.upFile');
    const titelFile = document.getElementById("titelFile");
    const reulstTest = document.querySelector(".reulstTest");
    const filename = document.getElementById("file-name");
    const moreFile = document.querySelector(".moreFile");

    body.style.backgroundColor = "#232020";
    uploadicon.style.backgroundColor = "#575151";
    titelUpFileH.style.color = "white";
    titelUpFileP.style.color = "white";
    iconAndhandleDropP.style.color = "white";
    icons.style.color = "#ffd0f1";
    dropzone.style.border = "none";
    uploadiconDiv.style.backgroundColor = "#ffd0f1";
    uploadiconDiv.style.color = "#232020";
    AllData.style.backgroundColor = "#282828";
    AllDataH.style.color = "white";
    AllDataH.style.borderBottom="2px solid #ffd0f1";
    inputElements.forEach(function(input) {
        input.style.backgroundColor = "#ffebfc";
        input.style.color = "black";
    });
    menuTypeStructure.style.backgroundColor = "#ffd0f1";
    menuTypefile.style.backgroundColor = "#ffd0f1";
    menuTypeStructure.style.color = "black";
    menuTypefile.style.color = "black";


    selectedValue.style.backgroundColor = "#282828";
    selectedValue.style.color = "white";
    selectedValueRetailer.style.backgroundColor = "#282828";
    selectedValueRetailer.style.color = "white";


    upFile.style.backgroundColor = "#282828";
    titelFile.style.color = "white";
    titelFile.style.borderBottom="2px solid #ffd0f1";

    fileChek.style.backgroundColor = "#282828";
    fileChek.style.color = "white";
    fileChek.style.border = "2px solid #d5d2d2";
    fileChek.style.height = "607px";
    messageRuslt1.style.backgroundColor = "#282828";
    reulstTest.style.color = "white";
    filename.style.color = "#fc6a6a";
    moreFile.style.color = "#fc6a6a";
}


function brightMode(){
    const body = document.querySelector('.body');
    const uploadicon=document.getElementById("upload-icon");
    const titelUpFileH = document.getElementById("titelUpFileH");
    const titelUpFileP = document.getElementById("titelUpFileP");
    const iconAndhandleDropP = document.getElementById("iconAndhandleDropP");
    const icons = document.getElementById("icons");
    const dropzone = document.getElementById("drop-zone");
    const uploadiconDiv = document.getElementById("upload-iconDiv");
    const AllData = document.querySelector('.AllData');
    var AllDataH = AllData.querySelector('h1');
    var inputBox = document.querySelector('.inputBox');
    var inputElements = inputBox.querySelectorAll('input');
    const menuTypeStructure = document.getElementById("menuTypeStructure");
    const menuTypefile = document.getElementById("menuTypefile");
    const selectedValue = document.getElementById("selectedValue");
    const selectedValueRetailer = document.getElementById("selectedValueRetailer");
    var upFile = document.querySelector('.upFile');
    const titelFile = document.getElementById("titelFile");
    const fileChek = document.getElementById("fileChek");
    const reulstTest = document.querySelector(".reulstTest");
    const filename = document.getElementById("file-name");
    const moreFile = document.querySelector(".moreFile");

    body.style.backgroundColor = "#f0f0f3";
    uploadicon.style.backgroundColor = "white";
    titelUpFileH.style.color = "#858a85";
    titelUpFileP.style.color = "#858a85";
    iconAndhandleDropP.style.color = "#3b3636";
    icons.style.color = "#4CAF50";
    dropzone.style.border = "2px dashed #317f81";
    uploadiconDiv.style.backgroundColor = " #3f4fd3";
    uploadiconDiv.style.color = "white";
    AllData.style.backgroundColor = "white";
    AllDataH.style.color = "#4d4a4a";
    AllDataH.style.borderBottom="2px solid #4CAF50"
    inputElements.forEach(function(input) {
        input.style.backgroundColor = "white";
        input.style.color = "#2d3cc7";
    });

    menuTypeStructure.style.backgroundColor = "white";
    menuTypefile.style.backgroundColor = "white";
    menuTypeStructure.style.color = "#2d3cc7";
    menuTypefile.style.color = "#2d3cc7";

    selectedValue.style.backgroundColor = "white";
    selectedValue.style.color = " #2d3cc7";
    selectedValueRetailer.style.backgroundColor = "white";
    selectedValueRetailer.style.color = " #2d3cc7";

    upFile.style.backgroundColor = "white";
    titelFile.style.color = "#4d4a4a";
    titelFile.style.borderBottom="2px solid #4CAF50";

    fileChek.style.backgroundColor = "#fffcfc";
    fileChek.style.color = " #0056ff";
    fileChek.style.border = "5px solid #d5d2d2";
    fileChek.style.height = "600px";

    messageRuslt1.style.backgroundColor = "#ffffff";
    reulstTest.style.color = "#4d4a4a";
    filename.style.color = "#ff0000";
    moreFile.style.color = "#ff0000";

}


