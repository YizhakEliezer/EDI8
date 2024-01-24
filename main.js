//myArray test results
let myArray = [];
//myArray for data file(do not have to)
let fileContentSearch;
//In the case of multiple certificates,
// check where the certificate number is located that the user entered and accordingly search the certificate
// In case it is a single certificate then we defined that numsplitSupdes is equal to 0
let numsplitSupdes = 0;
//array For multiple certificates
let splitSupdes;
let fileContent;
// myArraymessageRusltFromFile = [];

//ondrop file
function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
}

function handleFileInput(event) {
    const files = event.target.files;
    handleFiles(files);

}


//name file+format file
function handleFiles(files) {
    //format file
    const allowedTypes = ['text/plain','','application/msword',];
    if (allowedTypes.includes(files[0].type)) {
    } else {
        alert(' פורמט ('+files[0].type+") אינו מתאים ,אנא בחרו קובץ בפורמט תקין. ");
        // Clear the file input to prevent submitting an invalid file
        fileInput.value = '';
    }

    // myArraymessageRusltFromFile = [];

    myArray = []; // Clear myArray before processing each file

    //name file
    const fileName = files[0].name;
    document.getElementById('file-name').innerText = ` ${fileName} :קובץ נקלט  `;
    checkForValue(files[0]);
}


//input file clice on input id-file-input that on the function handleFileInput
function triggerFileInput() {
    document.getElementById('file-input').click();
}


//read file and save in variable fileContentSearch
function checkForValue(file) {
    const reader = new FileReader();
    reader.onload = function (event) {

        fileContent = event.target.result;
        fileContentSearch = fileContent;
        // see the file in input fileChek in the web
        const fileChek=document.getElementById("fileChek");
        fileChek.value="";
        fileChek.value = fileContent;
        DesignScreenGoesUp();

        //Check if it is multiple certificates
        try {
            splitSupdes = fileContentSearch.match(/ENV00101[^]*?(?=ENV00101|$)/g);
            if (splitSupdes.length > 1) {
                //Add a note that these are multiple certificates
                const moreFile = document.querySelector('.moreFile');
                moreFile.style.display = 'block';
                alert("נראה שמדובר בתעודות מרובות,לכן חובה להזין את מספר התעודה שברצונך לבדוק")
            } else {
                //remove a note that these are multiple certificates
                const moreFile = document.querySelector('.moreFile');
                moreFile.style.display = 'none';
            }

        } catch (g) {
        }


//Check if the user has selected a screen other than

        if (file > 1) {
            //Check the selected file structure type and run the appropriate function
            var selectedOption = document.getElementById("menuTypeStructure").value;
            var fileTypeC = document.getElementById("menuTypefile").value;
            if (selectedOption === "fileStructure") {
                alert("לא נבחר מבנה המסר לבדיקה");
            } else if (selectedOption === "fletFile") {
                if (fileTypeC==="fileType"){
                    alert("לא נבחר סוג המסר לבדיקה");
                }
                else if (fileTypeC === "supdes"){
                    chekFileFletSupdes();
                }
                else if (fileTypeC === "order"){
                    chekFileFletOrder();
                }
                else if (fileTypeC === "mmdr"){
                    console.log("mmdr")
                }
                else if (fileTypeC === "return"){
                    console.log("return")
                }

            }
            else if (selectedOption === "hashavshevt") {
                chekFileHashavshevtSupdes();
            }

        }


    };
    reader.readAsText(file);
}


//add to myArray result variable and chek if the file is fix
function addElement(value) {
    if (value.includes("תעודה תקינה")) {
        myArray.push(value);
        messageRusltFix();
    } else {
        myArray.push(value);
        messageRuslt();
    }
}


//messageRuslt eror
function messageRuslt() {
    // Get the div element
    const messageRuslt = document.getElementById('messageRuslt');
    // Clear the existing content
    messageRuslt.innerHTML = "";
    myArray.forEach(function (element) {
        messageRuslt.innerHTML += `<p>${element}-</p>`;

    });
    messageRuslt1.style.border= '7px solid #fbb7b7';
    const reulstTest = document.querySelector('.reulstTest');
    reulstTest.style.display = 'block';
}


//messageRuslt fix
function messageRusltFix() {
    // Get the div element
    const messageRuslt = document.getElementById('messageRuslt');
    // Clear the existing content
    messageRuslt.innerHTML = "";
    myArray.forEach(function (element) {
        messageRuslt.innerHTML += `<p style="color:#8ad78c;font-size: 40px;position: relative;text-align: center;top: 200px">${element}</p>`;
    });
    messageRuslt1.style.border= '7px solid #8ad78c';
    const reulstTest = document.querySelector('.reulstTest');
    reulstTest.style.display = 'none';
}




function DesignScreenGoesUp(){
    //Change the appearance of the screen after uploading a file for the first time
    const upFile = document.querySelector('.upFile');
    const AllData = document.querySelector('.AllData');
    const messageRuslt1 = document.getElementById('messageRuslt1');
    const titelUpFile = document.querySelector('.titelUpFile');
    const titelFile = document.getElementById('titelFile');
    const dropzone = document.getElementById('drop-zone');
    const filename = document.getElementById('file-name');
    const uploadicon = document.getElementById('upload-icon');
    const icons = document.getElementById('icons');
    const iconAndhandleDropP = document.getElementById('iconAndhandleDropP');
    const uploadiconDiv = document.getElementById('upload-iconDiv');
    const inputBoxData = document.getElementById('inputBoxData');
    // const resultsFile = document.getElementById('resultsFile');
    const fileChek=document.getElementById("fileChek");

    if (fileContent != undefined) {
        fileChek.style.display = 'block';
        // resultsFile.style.display = 'block';
        AllData.style.display = 'block';
        messageRuslt1.style.display = 'block';
        upFile.style.position = 'absolute';
        upFile.style.right = '45px';
        upFile.style.top = '385px';
        upFile.style.width = '450px';
        upFile.style.height = '250px';
        upFile.style.border = '1px solid #bdb8b8';
        dropzone.style.width = '85%';
        dropzone.style.height = '50%';
        dropzone.style.top = '58%';
        titelFile.style.display = 'block';
        filename.style.display = 'block';
        uploadicon.style.top = '70%';
        titelUpFile.style.display = 'none';
        uploadicon.style.width = '17%';
        uploadicon.style.height = '16%';
        icons.style.fontSize = '50px';
        icons.style.top = '10px';
        iconAndhandleDropP.style.fontSize = '15px';
        uploadicon.style.width = '100%';
        uploadicon.style.height = '100%';
        uploadicon.style.top = '50%';
        uploadiconDiv.style.width = '17%';
        uploadiconDiv.style.height = '16%';
        uploadiconDiv.style.top = '70%';
        inputBoxData.style.display = 'block';

    }
}






