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
            if (selectedOption === "fileStructure") {
                alert("לא נבחר מבנה המסר לבדיקה");
            } else if (selectedOption === "fletFile") {
                chekFileFletSupdes();
            } else if (selectedOption === "hashavshevt") {
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



//function to chekFile
// function chekFileFletSupdes() {
//     // fileChek.value= splitSupdes[numsplitSupdes];
//     numsplitSupdes = 0;
// //Clear the result arrays before each test
//     myArray = [];
//     // myArraymessageRusltFromFile = [];
//
//     try {
//         const messageIconX = document.getElementById('messageIconX');
//         const messageIconV = document.getElementById('messageIconV');
//         const supplierIconX = document.getElementById('supplierIconX');
//         const supplierIconV = document.getElementById('supplierIconV');
//         const retailerIconX = document.getElementById('retailerIconX');
//         const retailerIconV = document.getElementById('retailerIconV');
//         const branchRetailerIconV = document.getElementById('branchRetailerIconV');
//         const branchRetailerIconX = document.getElementById('branchRetailerIconX');
//         const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//         const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//         messageIconX.style.display = 'none';
//         messageIconV.style.display = 'none';
//         supplierIconX.style.display = 'none';
//         supplierIconV.style.display = 'none';
//         retailerIconX.style.display = 'none';
//         retailerIconV.style.display = 'none';
//         branchRetailerIconV.style.display = 'none';
//         branchRetailerIconX.style.display = 'none';
//         supplierSubnetNumberIconX.style.display = 'none';
//         supplierSubnetNumberIconV.style.display = 'none';
//
//
// //Variables of the input from the user
//         const numRetailer = document.getElementById('retailer').value.toLowerCase();
//         const numSupplier = document.getElementById('supplier').value;
//         const numMessage = document.getElementById('message').value;
//         const numSupplierSubnetNumber = document.getElementById('supplierSubnetNumber').value;
//         const numBranchRetailer = document.getElementById('branchRetailer').value;
//
// //In the case of multiple certificates,
// // check where the certificate number is located that the user entered and accordingly search the certificate
// // In case it is a single certificate then we defined that numsplitSupdes is equal to 0
//         try {
//             if (splitSupdes.length > 1) {
//                 for (let k = 0; k < splitSupdes.length; k++) {
//                     if (splitSupdes[k].includes(numMessage)) {
//                         // console.log(splitSupdes[k])
//                         numsplitSupdes = k;
//                        fileChek.value= splitSupdes[numsplitSupdes];
//                     }
//                 }
//             }
//
//         } catch (e) {
//         }
//
//         splitSupdes[numsplitSupdes]= fileChek.value;
//             //Split the file into lines
//         //Split the file into lines
//         const lines = splitSupdes[numsplitSupdes].split('\n');
//
//         let nonEmptyLines = [];
//         let consecutiveEmptyLines = 0;
//
//         for (let j = 0; j < lines.length; j++) {
//             const currentLine = lines[j].trim();
//             if (currentLine === "") {
//                 consecutiveEmptyLines++;
//             } else {
//                 if (consecutiveEmptyLines > 0) {
//                     // There were consecutive empty lines before this non-empty line
//                     nonEmptyLines.push(""); // Add a single empty line to represent the skipped ones
//                     consecutiveEmptyLines = 0;
//                 }
//                 nonEmptyLines.push(currentLine);
//             }
//         }
//         lines.length = lines.length - (consecutiveEmptyLines );
//
//
//
//
//         //A function to check whether the values are equal without empty or undefined values
//         function compareStringsIgnoreCaseAndSpace(valueFromFile, constantValue) {
//             // Check if value is defined and not empty
//             if (valueFromFile === undefined || valueFromFile.trim() === "") {
//                 return false;
//             }
//             // Remove spaces from both the value and target strings
//             const formattedValue = valueFromFile.trim();
//             const formattedTarget = constantValue.trim();
//
//             // Check if the formatted value is exactly equal to the formatted target
//             return formattedTarget === formattedValue;
//         }
//
//
//         //constant values line 1
//         const ENV00101 = "ENV00101";
//         const nameDocument = "MMDE02L";
//         const nameDocument2 = "MMDE02R";
//         const typeDocument = "SUPDES";
//         //constant values line 2
//         const HEAD0101 = "HEAD0101";
//         //constant values line 3
//         const LINE0001 = "LINE0001";
//         //constant values line 4
//         const LINE0101 = "LINE0101";
//
//
//         //constant values Barcode
//         const LINE0201 = "LINE0201";
//
//         //constant values One line before last
//         const HEAD9901 = "HEAD9901";
//         //constant values last line
//         const ENV00201 = "ENV00201";
//
//
//         //Barcode prefix check
//         let constantValuesBarcodeBoolean = true;
//         let ItemDataBoolean = true;
//
//         function constantValuesBarcode() {
//             for (let i = 3; i < lines.length - 3; i++) {
//                 const BarcodeArryStartOfLine = lines[i].substring(0, 8);
//                 if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0201)) {
//
//                 } else {
//                     if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
//                         const surfaceIdentificationNumber = lines[i].substring(50, 68);
//                         if (surfaceIdentificationNumber.trim() === "") {
//                             ItemDataBoolean = false;
//                             addElement("מספר זיהוי משטח חסר " + (i + 1))
//                         }
//                     } else {
//                         constantValuesBarcodeBoolean = false;
//                         addElement("תחילית מקט חסר או שגוי שורה " + (i + 1))
//                     }
//                 }
//             }
//         }
//
//
//         // function for checking the c Values of  barcodes is not empty or with spaces
//         let valuesBarcodeBoolean = true;
//
//         // function valuesBarcode() {
//         //     for (let r = 3; r < lines.length - 3; r++) {
//         //         const BarcodeArryStartOfLine = lines[r].substring(0, 8);
//         //         if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
//         //             r++
//         //         }
//         //         const barcodeEmpty = lines[r].substring(8, 9);
//         //         // const barcodeEmpty = splitSupdes[numsplitSupdes].split('\n')[r].substring(8, 22);
//         //         const barcodeWithspaces = lines[r].substring(8, 23);
//         //         const mbarcodeWithspacesValue = barcodeWithspaces;
//         //         if (barcodeEmpty.trim() === "") {
//         //             valuesBarcodeBoolean = false;
//         //             addElement("ברקוד חסר או שגוי שורה " + (r + 1));
//         //
//         //         } else {
//         //
//         //             for (let i = 0; i < mbarcodeWithspacesValue.length; i++) {
//         //
//         //                 if (mbarcodeWithspacesValue[i].trim() === "") {
//         //
//         //                     for (let j = i + 1; j < mbarcodeWithspacesValue.length; j++) {
//         //                         if (mbarcodeWithspacesValue[j].trim() === "") {
//         //
//         //                         } else {
//         //                             valuesBarcodeBoolean = false;
//         //                             addElement("ברקוד חסר או שגוי שורה " + (r + 1));
//         //                             break;
//         //                         }
//         //                         break;
//         //                     }
//         //                 }
//         //             }
//         //         }
//         //     }
//         // }
//
//
//         function valuesBarcode() {
//             for (let r = 3; r < lines.length - 3; r++) {
//                 const BarcodeArryStartOfLine = lines[r].substring(0, 8);
//                 if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
//                     r++
//                 }
//                 const barcodeWithspaces = lines[r].substring(8, 23);
//                 if (barcodeWithspaces.trim() === "") {
//                     valuesBarcodeBoolean = false;
//                     addElement("ברקוד חסר " + (r + 1));
//                 }
//             }
//         }
//
//
//         //chek barcode is validi
//
//
//         constantValuesBarcode()
//         valuesBarcode()
//
//
//         //valueFromFile line 1
//         const generalLineHeader = lines[0].substring(0, 8);
//         const isValidNumRetailer = lines[0].substring(8, 23);
//         const MMDE02L = lines[0].substring(23, 33);
//         const MMDE02R = lines[0].substring(23, 33);
//         const SUPDES = lines[0].substring(33, 47);
//         const isValidNumSupplier = lines[0].substring(49, 64);
//
//
//         //valueFromFile line 2
//         const firstLineDetailsFile = lines[1].substring(0, 8);
//         const isValidNumMessage = lines[1].substring(8, 23);
//
//
//         //time value
//         const timeDocument = lines[1].substring(23, 35).trim();
//         const timeDocumentLength = 12;
//         const booleneLength = timeDocument.length === timeDocumentLength;
//         const year = Number(timeDocument.substring(0, 4));
//         const month = Number(timeDocument.substring(4, 6));
//         const day = Number(timeDocument.substring(6, 8));
//         const hour = Number(timeDocument.substring(8, 10));
//         const minute = Number(timeDocument.substring(10, 12));
//
//
//         //NumSupplierSubnetNumber+NumBranchRetailer
//         const isValidNumSupplierSubnetNumber = lines[1].substring(104, 119);
//         const isValidNumBranchRetailer = lines[1].substring(154, 169);
//
//
//         //valueFromFile line 3
//         const firstLine3row = lines[2].substring(0, 8);
//
//
//         //valueFromFile One line before last
//         const lestline = lines[lines.length - 2].substring(0, 8);
//         //valueFromFile last line
//         const lestline1 = lines[lines.length - 1].substring(0, 8);
//         console.log(lines[lines.length - 2])
//
//         // const  resultsFileRetailer =document.getElementById("resultsFileRetailer");
//         // const  resultsFileSupllier =document.getElementById("resultsFileSupllier");
//         // const  resultsFileNumMessage =document.getElementById("resultsFileNumMessage");
//         // const  resultsFileNumSupplierSubnetNumber =document.getElementById("resultsFileNumSupplierSubnetNumber");
//         // const  resultsFileNumBranchRetailer =document.getElementById("resultsFileNumBranchRetailer");
//         // resultsFileNumMessage.innerHTML ="";
//         // resultsFileSupllier.innerHTML ="";
//         // resultsFileRetailer.innerHTML ="";
//         // resultsFileNumSupplierSubnetNumber.innerHTML ="";
//         // resultsFileNumBranchRetailer.innerHTML ="";
//         // resultsFileSupllier.innerHTML += ` (לא נמצא ספק המשוייך למספר הזה) <p1>ספק: ${isValidNumSupplier} </p1>`;
//         // resultsFileRetailer.innerHTML += ` (לא נמצא רשת המשוייכת למספר הזה) <p1>רשת: ${isValidNumRetailer} </p1>`;
//         // resultsFileNumMessage.innerHTML += `<p1>מספר תעודה: ${isValidNumMessage}</p1>`;
//         // resultsFileNumSupplierSubnetNumber.innerHTML += `<p1>מספר תת ספק: ${isValidNumSupplierSubnetNumber}</p1>`;
//         // resultsFileNumBranchRetailer.innerHTML += `<p1>מספר סניף: ${isValidNumBranchRetailer}</p1>`;
//         //
//         // fetch('data.json')
//         //     .then(response => response.json())
//         //     .then(data => {
//         //         // Iterate through each object in the array
//         //         data.forEach(obj => {
//         //             // Check if the value pro
//         //             if (obj.value.trim() === isValidNumSupplier.trim()) {
//         //                 // If a match is found, print the corresponding key
//         //                 resultsFileSupllier.innerHTML ="";
//         //                 resultsFileSupllier.innerHTML += `<p>ספק: ${isValidNumSupplier},${obj.key}</p>`;
//         //                 // If you only want to find the first match, you can break out of the loop here
//         //                 // break;
//         //             }
//         //         });
//         //     })
//         //     .catch(error => console.error('Error fetching data:', error));
//         //
//         //
//         // fetch('retailerData.json')
//         //     .then(response => response.json())
//         //     .then(data => {
//         //         // Iterate through each object in the array
//         //         data.forEach(obj => {
//         //             // Check if the value pro
//         //             if (isValidNumRetailer.trim()==="7290058140886") {
//         //                 // If a match is found, print the corresponding key
//         //                 resultsFileRetailer.innerHTML ="";
//         //                 resultsFileRetailer.innerHTML += `<p>comax,רשת: ${isValidNumRetailer}</p>`;
//         //                 // If you only want to find the first match, you can break out of the loop here
//         //                 // break;
//         //             }
//         //
//         //             else if  (obj.value.trim() === isValidNumRetailer.trim()) {
//         //                 // If a match is found, print the corresponding key
//         //                 resultsFileRetailer.innerHTML ="";
//         //                 resultsFileRetailer.innerHTML += `<p>רשת: ${isValidNumRetailer},${obj.key}</p>`;
//         //                 // If you only want to find the first match, you can break out of the loop here
//         //                 // break;
//         //             }
//         //         });
//         //     })
//         //     .catch(error => console.error('Error fetching data:', error));
//
//
//
//
//
//         if (
//             //line 1
//             compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101) &&
//             compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer) &&
//             (compareStringsIgnoreCaseAndSpace(nameDocument, MMDE02L) ||
//                 compareStringsIgnoreCaseAndSpace(nameDocument2, MMDE02R)) &&
//             compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument) &&
//             compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier) &&
//             //line 2
//             compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101) &&
//
//             (isValidNumMessage.trim() != "" && numMessage.trim() === "" || isValidNumMessage.trim().includes(numMessage.trim())) &&
//
//             booleneLength === true &&
//
//
//             (year => 2023 && month > 1 && month <= 12 && day > 1 && day <= 31 && hour > 0 && hour <= 24 &&
//                     minute > 0 && minute <= 59
//             )
//             &&
//
//
//             (numSupplierSubnetNumber.trim() === "" &&
//                 compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) ||
//                 numSupplierSubnetNumber.trim() != "" &&
//                 compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)
//             )
//
//             &&
//
//             (numBranchRetailer.trim() === "" ||
//                 numBranchRetailer.trim() != "" &&
//                 compareStringsIgnoreCaseAndSpace(isValidNumBranchRetailer, numBranchRetailer)
//             ) && isValidNumBranchRetailer.trim() != ""
//
//
//             &&
//
//             //line 3
//             compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001) &&
//
//
//             //barcode
//             constantValuesBarcodeBoolean === true && valuesBarcodeBoolean === true && ItemDataBoolean === true &&
//             compareStringsIgnoreCaseAndSpace(lestline, HEAD9901) &&
//             compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)
//
//
//         ) {
//             addElement("תעודה תקינה");
//         }
//
//
//         //line 1
//         if (!compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101)) {
//             addElement('ENV00101-ערך חסר');
//         }
//
//         if (!compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer)) {
//             addElement('מספר רשת שגוי');
//             const retailerIconX = document.getElementById('retailerIconX');
//             retailerIconX.style.display = 'block';
//         } else {
//             const retailerIconV = document.getElementById('retailerIconV');
//             retailerIconV.style.display = 'block';
//         }
//
//
//         if (!compareStringsIgnoreCaseAndSpace(MMDE02L, nameDocument) &&
//             !compareStringsIgnoreCaseAndSpace(MMDE02R, nameDocument2)) {
//             addElement(" MMDE02L-ערך חסר");
//         }
//         if (!compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument)) {
//             addElement('SUPDES-ערך חסר');
//         }
//         if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier)) {
//             addElement('מספר ספק שגוי');
//             const supplierIconX = document.getElementById('supplierIconX');
//             supplierIconX.style.display = 'block';
//         } else {
//             const supplierIconV = document.getElementById('supplierIconV');
//             supplierIconV.style.display = 'block';
//         }
//
//
//         //line 2
//         if (!compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101)) {
//             addElement('HEAD0101-ערך חסר');
//         }
//
//
//         if (isValidNumMessage.trim() === "" || numMessage.trim() != "" &&
//             !isValidNumMessage.trim().includes(numMessage.trim())) {
//             addElement('מספר תעודה שגוי');
//             const messageIconX = document.getElementById('messageIconX');
//             messageIconX.style.display = 'block';
//         } else {
//             const messageIconV = document.getElementById('messageIconV');
//             messageIconV.style.display = 'block';
//         }
//
//         if (numMessage.trim() === "") {
//             const messageIconX = document.getElementById('messageIconX');
//             messageIconX.style.display = 'none';
//             const messageIconV = document.getElementById('messageIconV');
//             messageIconV.style.display = 'none';
//         }
//
//
//         if (booleneLength === false || isNaN(booleneLength)) {
//             addElement('פורמט תאריך  שגוי');
//         }
//
//         if (year < 2023 || isNaN(year)) {
//             addElement('פורמט תאריך שנה שגוי');
//         }
//         if (month < 1 || month > 12 || isNaN(month)) {
//             addElement('פורמט תאריך חודש שגוי');
//         }
//         if (day < 1 || day > 31 || isNaN(day)) {
//             addElement('פורמט תאריך יום שגוי');
//         }
//         if (hour < 0 || hour > 24 || isNaN(hour)) {
//             addElement('פורמט תאריך שעה שגוי');
//         }
//         if (minute < 0 || minute > 59 || isNaN(minute)) {
//             addElement('פורמט תאריך דקה שגוי');
//         }
//
//
//         if (numSupplierSubnetNumber.trim() === "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier)) {
//             addElement('מספר ספק משני/תת ספק שגוי או חסר');
//         }
//
//         if (numSupplierSubnetNumber.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
//             addElement('מספר  תת ספק  שגוי');
//             const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//             supplierSubnetNumberIconX.style.display = 'block';
//         } else {
//             const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//             supplierSubnetNumberIconV.style.display = 'block';
//         }
//         if (numSupplierSubnetNumber.trim() === "") {
//             const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//             supplierSubnetNumberIconX.style.display = 'none';
//             const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//             supplierSubnetNumberIconV.style.display = 'none';
//         }
//
//         if (numBranchRetailer.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumBranchRetailer, numBranchRetailer)) {
//             addElement('מספר  סניף  שגוי');
//             const branchRetailerIconX = document.getElementById('branchRetailerIconX');
//             branchRetailerIconX.style.display = 'block';
//         } else {
//             const branchRetailerIconV = document.getElementById('branchRetailerIconV');
//             branchRetailerIconV.style.display = 'block';
//         }
//         if (numBranchRetailer.trim() === "") {
//             const branchRetailerIconX = document.getElementById('branchRetailerIconX');
//             branchRetailerIconX.style.display = 'none';
//             const branchRetailerIconV = document.getElementById('branchRetailerIconV');
//             branchRetailerIconV.style.display = 'none';
//         }
//
//         if (isValidNumBranchRetailer.trim() === "") {
//             addElement('מספר סניף חסר');
//         }
//
//
//         //line 3
//         if (!compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001)) {
//             addElement('LINE0001-ערך חסר');
//         }
//
//         if (!compareStringsIgnoreCaseAndSpace(lestline, HEAD9901)) {
//             addElement('HEAD9901-ערך חסר');
//         }
//
//         if (!compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)) {
//             addElement('ENV00201-ערך חסר');
//         }
//
//
//     } catch (v) {
//     }
//
//     // function supdes() {
//     //     console.log("Supdes function");
//     //     // Add your logic for Supdes here
//     // }
//     //
//     // function order() {
//     //     console.log("Order function");
//     //     // Add your logic for Order here
//     // }
//     //
//     // // Event listener for structure selection
//     // document.getElementById('menuTypeStructure').addEventListener('change', function () {
//     //     var selectedStructureValue = this.value;
//     //
//     //     // Check the selected value and call the appropriate function
//     //     switch (selectedStructureValue) {
//     //         case 'fletFile':
//     //
//     //
//     //
//     //             document.getElementById('menuTypefile').addEventListener('change', function () {
//     //                 var selectedFileValue = this.value;
//     //
//     //                 // Check the selected value and call the appropriate function
//     //                 switch (selectedFileValue) {
//     //                     case 'order':
//     //                         order();
//     //                         break;
//     //                     // Add cases for other options as needed
//     //                     case 'supdes':
//     //                         supdes();
//     //                         break;
//     //                     // Default case if the selected option doesn't match any case
//     //                     default:
//     //                         console.log("Selected an option without a specific function.");
//     //                         break;
//     //                 }
//     //             });
//     //
//     //
//     //
//     //             break;
//     //         // Add cases for other options as needed
//     //
//     //         // Default case if the selected option doesn't match any case
//     //         default:
//     //             console.log("Selected an option without a specific function.");
//     //             break;
//     //     }
//     // });
//
// }

// function chekFileHashavshevtSupdes() {
//     try {
//         const messageIconX = document.getElementById('messageIconX');
//         const messageIconV = document.getElementById('messageIconV');
//         const supplierIconX = document.getElementById('supplierIconX');
//         const supplierIconV = document.getElementById('supplierIconV');
//         const retailerIconX = document.getElementById('retailerIconX');
//         const retailerIconV = document.getElementById('retailerIconV');
//         const branchRetailerIconV = document.getElementById('branchRetailerIconV');
//         const branchRetailerIconX = document.getElementById('branchRetailerIconX');
//         const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//         const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//         messageIconX.style.display = 'none';
//         messageIconV.style.display = 'none';
//         supplierIconX.style.display = 'none';
//         supplierIconV.style.display = 'none';
//         retailerIconX.style.display = 'none';
//         retailerIconV.style.display = 'none';
//         branchRetailerIconV.style.display = 'none';
//         branchRetailerIconX.style.display = 'none';
//         supplierSubnetNumberIconX.style.display = 'none';
//         supplierSubnetNumberIconV.style.display = 'none';
//
//
//         myArray = [];
//         myArraymessageRusltFromFile = [];
//
//
//         function compareStringsIgnoreCaseAndSpace(valueFromFile, constantValue) {
//             // Check if value is defined and not empty
//             if (valueFromFile === undefined || valueFromFile.trim() === "") {
//                 return false;
//             }
//             // Remove spaces from both the value and target strings
//             const formattedValue = valueFromFile.trim();
//             const formattedTarget = constantValue.trim();
//
//             // Check if the formatted value is exactly equal to the formatted target
//             return formattedTarget === formattedValue;
//         }
//
//
//         const numRetailer = document.getElementById('retailer').value.toLowerCase();
//         const numSupplier = document.getElementById('supplier').value;
//         const numMessage = document.getElementById('message').value;
//         const numSupplierSubnetNumber = document.getElementById('supplierSubnetNumber').value;
//         const numBranchRetailer = document.getElementById('branchRetailer').value;
//
//         const lines = fileContentSearch.split('\n');
//         fileContentSearch=fileChek.value;
//
//         let currentValidnumMessage = '';
//         let currentVariable = '';
//         let variables = [];
//         for (let l = 0; l < lines.length; l++) {
//             const isValidnumMessage = lines[l].substring(151, 158).trim();
//
//             if (isValidnumMessage === "") {
//                 // Value is empty, add to the current variable
//                 currentVariable += '\n' + lines[l];
//             } else if (isValidnumMessage !== currentValidnumMessage || currentValidnumMessage === "") {
//                 // Value changed or previous value was empty, create a new variable
//                 if (currentVariable !== '' && currentValidnumMessage !== "") {
//                     variables.push(currentVariable);
//                 }
//
//                 // Update current values
//                 currentValidnumMessage = isValidnumMessage;
//                 currentVariable = lines[l];
//             } else {
//                 // Value is the same, add to the current variable
//                 currentVariable += '\n' + lines[l];
//             }
//         }
//
// // Add the last variable (if any) to the list
//         if (currentVariable !== '') {
//             variables.push(currentVariable);
//         }
//         let test;
//         if (variables.length > 1) {
//             const numMessage = document.getElementById('message').value;
//             const moreFile = document.querySelector('.moreFile');
//             moreFile.style.display = 'block';
//             // alert("תעודות מרובות")
//             for (let k = 0; k < variables.length; k++) {
//                 if (variables[k].includes(numMessage)) {
//                     numsplitSupdes = k;
//                 }
//             }
//         } else {
//
//             const moreFile = document.querySelector('.moreFile');
//             moreFile.style.display = 'none';
//         }
//
//
//
//         // const lines =  splitSupdes[numsplitSupdes].split('\n');
//         // const secondToLastLine = lines[lines.length - 2];
//
//
//         let numSupplierBoolean = true;
//         let isValidNumRetailerBoolean = true;
//         let isValidNumSupplierSubnetNumberBoolean = true;
//         let numSupplierSubnetNumberBoolean = true;
//         let numpPackagingBoolean = true;
//         let barcodeBoolean = true;
//         let matchNumBranchBoolean = true;
//         let numBranch1Boolean = true;
//         let numBranch2Boolean = true;
//         let pormatTime1Boolean = true;
//         let pormatTime2Boolean = true;
//         let dayDataTimeBoolean = true;
//         let monthDataTimeBoolean = true;
//         let yearDataTimeBoolean = true;
//
//         let dayDataTime2Boolean = true;
//         let monthDataTime2Boolean = true;
//         let yearDataTime2Boolean = true;
//         let numMessageBoolean = true;
//
//         if (numMessage.trim()===""){
//             variables[numsplitSupdes]=fileContentSearch;
//
//         }
//
//         const linesVariables = variables[numsplitSupdes].split('\n');
//
//
//
//
//         for (let i = 0; i < linesVariables.length; i++) {
//
//             let allLinesEmpty = true;
//             for (let j = i; j < linesVariables.length; j++) {
//                 const currentLine = linesVariables[j].trim();
//                 if (currentLine !== "" && currentLine !== undefined) {
//                     allLinesEmpty = false;
//                     break;
//                 }
//             }
//             if (allLinesEmpty) {
//                 continue;
//             }
//
//             myArraymessageRusltFromFile = [];
//
//
//             // console.log( variables[numsplitSupdes])
//
//
//             const isValidNumSupplier = variables[numsplitSupdes].split('\n')[i].substring(10, 23);
//             const isValidNumSupplierSubnetNumber = variables[numsplitSupdes].split('\n')[i].substring(24, 37);
//             const isValidNumRetailer = variables[numsplitSupdes].split('\n')[i].substring(38, 51);
//             const numpPackaging = variables[numsplitSupdes].split('\n')[i].substring(66, 82);
//             const barcode = variables[numsplitSupdes].split('\n')[i].substring(87, 102);
//             const numBranch1 = variables[numsplitSupdes].split('\n')[i].substring(103, 133);
//             const numBranch2 = variables[numsplitSupdes].split('\n')[i].substring(134, 142);
//             const dataTime = variables[numsplitSupdes].split('\n')[i].substring(143, 151);
//             const dataTime2 = variables[numsplitSupdes].split('\n')[i].substring(159, 167);
//
//             const dayDataTime = Number(dataTime.substring(0, 2));
//             const monthDataTime = Number(dataTime.substring(3, 5));
//             const yearDataTime = Number(dataTime.substring(6, 8));
//
//             const dayDataTime2 = Number(dataTime2.substring(0, 2));
//             const monthDataTime2 = Number(dataTime2.substring(3, 5));
//             const yearDataTime2 = Number(dataTime2.substring(6, 8));
//
//
//             const isValidnumMessage = variables[numsplitSupdes].split('\n')[i].substring(151, 158);
//
//
//
//             if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier) && numSupplier!="") {
//                 numSupplierBoolean = false;
//                 addElement("מספר ספק שגוי שורה " + (i + 1));
//                 const supplierIconX = document.getElementById('supplierIconX');
//                 supplierIconX.style.display = 'block';
//             }
//
//
//             if (!compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer) && numRetailer!="") {
//                 isValidNumRetailerBoolean = false;
//                 addElement("מספר רשת שגוי שורה " + (i + 1));
//                 const retailerIconX = document.getElementById('retailerIconX');
//                 retailerIconX.style.display = 'block';
//             }
//
//
//             // if (numSupplierSubnetNumber != "") {
//             //     if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier)) {
//             //         isValidNumSupplierSubnetNumberBoolean = false;
//             //         addElement("מספר ספק משני שגוי שורה " + (i + 1));
//             //     }
//             // }
//             if (numSupplierSubnetNumber.trim() === "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) && numSupplier!="") {
//                 isValidNumSupplierSubnetNumberBoolean = false;
//                 addElement("מספר ספק משני שגוי שורה " + (i + 1));
//             }
//
//
//             // if (numSupplierSubnetNumber != "") {
//             //     if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
//             //         numSupplierSubnetNumberBoolean = false;
//             //         addElement("מספר תת ספק  שגוי שורה " + (i + 1));
//             //     }
//             // }
//
//             if (numSupplierSubnetNumber.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
//                 numSupplierSubnetNumberBoolean = false;
//                 addElement("מספר תת ספק  שגוי שורה " + (i + 1));
//                 const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//                 supplierSubnetNumberIconX.style.display = 'block';
//             }
//
//             if (numpPackaging.trim() === "") {
//                 numpPackagingBoolean = false;
//                 addElement("מספר אריזות חסר שורה " + (i + 1));
//             }
//
//             if (barcode.trim() === "") {
//                 matchNumBranchBoolean = false;
//                 addElement("ברקוד חסר שורה " + (i + 1));
//             }
//
//
//             if (numBranch1.trim() != numBranch2.trim()) {
//                 numSupplierSubnetNumberBoolean = false;
//                 addElement("חוסר התאמה במספר מפתח בשורה " + (i + 1));
//             }
//
//
//             if (numBranch1.trim() === "") {
//                 numBranch1Boolean = false;
//                 addElement("מספר מפתח חסר שורה " + (i + 1));
//             }
//
//             if (numBranch2.trim() === "") {
//                 numBranch2Boolean = false;
//                 addElement("מספר מפתח חסר שורה " + (i + 1));
//             }
//
//
//             if (dataTime.trim().length != 8 || String(dataTime.substring(2, 3)) != "/" || String(dataTime.substring(5, 6)) != "/") {
//                 pormatTime1Boolean = false;
//                 addElement("פורמט תאריך משלוח שגוי " + (i + 1));
//             }
//
//
//             if (dataTime2.trim().length != 8 || String(dataTime2.substring(2, 3)) != "/" || String(dataTime2.substring(5, 6)) != "/") {
//                 pormatTime2Boolean = false;
//                 addElement("פורמט תאריך תוקף שגוי " + (i + 1));
//             }
//
//
//             if (dayDataTime < 0 || dayDataTime > 31) {
//                 dayDataTimeBoolean = false;
//                 addElement("פורמט תאריך משלוח שדה -יום, שגוי. שורה " + (i + 1));
//             }
//
//             if (monthDataTime < 1 || monthDataTime > 12) {
//                 monthDataTimeBoolean = false;
//                 addElement("פורמט תאריך משלוח שדה -חודש, שגוי. שורה " + (i + 1));
//             }
//             if (yearDataTime < 23) {
//                 yearDataTimeBoolean = false;
//                 addElement("פורמט תאריך משלוח שדה -שנה, שגוי. שורה " + (i + 1));
//             }
//
//
//             if (dayDataTime2 < 0 || dayDataTime2 > 31) {
//                 dayDataTime2Boolean = false;
//                 addElement("פורמט תאריך תוקף שדה -יום, שגוי. שורה " + (i + 1));
//             }
//
//             if (monthDataTime2 < 1 || monthDataTime2 > 12) {
//                 monthDataTime2Boolean = false;
//                 addElement("פורמט תאריך תוקף שדה -חודש, שגוי. שורה " + (i + 1));
//             }
//             if (yearDataTime2 < 23) {
//                 yearDataTime2Boolean = false;
//                 addElement("פורמט תאריך תוקף שדה -שנה, שגוי. שורה " + (i + 1));
//             }
//
//
//             // if (!compareStringsIgnoreCaseAndSpace(isValidnumMessage, numMessage)) {
//             //     numMessageBoolean = false;
//             //     addElement("מספר תעודה שגוי שורה "+ (i + 1));
//             //
//             // }
//
//             if (numMessage.trim() != "") {
//                 if (!compareStringsIgnoreCaseAndSpace(isValidnumMessage, numMessage)) {
//                     numMessageBoolean = false;
//                     addElement("מספר תעודה שגוי שורה " + (i + 1));
//                     const messageIconX = document.getElementById('messageIconX');
//                     messageIconX.style.display = 'block';
//                 }
//             }
//             // if (isValidNumMessage.trim() === "" || numMessage.trim() != "" &&
//             //     !isValidNumMessage.trim().includes(numMessage.trim())){
//             //     numMessageBoolean = false;
//             //     addElement("מספר תעודה שגוי שורה " + (i + 1));
//             // }
//
//
//         }
//
//         if (isValidNumRetailerBoolean) {
//             const retailerIconV = document.getElementById('retailerIconV');
//             retailerIconV.style.display = 'block';
//         }
//
//         if (numSupplierBoolean) {
//             const supplierIconV = document.getElementById('supplierIconV');
//             supplierIconV.style.display = 'block';
//         }
//
//         if (numMessageBoolean) {
//             const messageIconV = document.getElementById('messageIconV');
//             messageIconV.style.display = 'block';
//         }
//
//
//         if (numMessage.trim() === "") {
//             const messageIconX = document.getElementById('messageIconX');
//             messageIconX.style.display = 'none';
//             const messageIconV = document.getElementById('messageIconV');
//             messageIconV.style.display = 'none';
//         }
//
//
//         if (numSupplierSubnetNumberBoolean) {
//             const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//             supplierSubnetNumberIconV.style.display = 'block';
//         }
//
//         if (numSupplierSubnetNumber.trim() === "") {
//             const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
//             supplierSubnetNumberIconX.style.display = 'none';
//             const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
//             supplierSubnetNumberIconV.style.display = 'none';
//         }
//
//         if (numRetailer.trim() === "") {
//             const retailerIconX = document.getElementById('retailerIconX');
//             retailerIconX.style.display = 'none';
//             const retailerIconV = document.getElementById('retailerIconV');
//             retailerIconV.style.display = 'none';
//         }
//         if (numSupplier.trim() === "") {
//             const supplierIconX = document.getElementById('supplierIconX');
//             supplierIconX.style.display = 'none';
//             const supplierIconV = document.getElementById('supplierIconV');
//             supplierIconV.style.display = 'none';
//         }
//
// // Check the flag to determine if all elements were equal
//         if (numSupplierBoolean && isValidNumRetailerBoolean && isValidNumSupplierSubnetNumberBoolean
//             && numSupplierSubnetNumberBoolean
//             && numpPackagingBoolean
//             && barcodeBoolean
//             && matchNumBranchBoolean
//             && numBranch2Boolean
//             && numBranch1Boolean
//             && pormatTime1Boolean
//             && pormatTime2Boolean
//             && dayDataTimeBoolean
//             && monthDataTimeBoolean
//             && yearDataTimeBoolean
//             && dayDataTime2Boolean
//             && monthDataTime2Boolean
//             && yearDataTime2Boolean
//             && numMessageBoolean
//
//
//         ) {
//             addElement("תעודה תקינה");
//         }
//
//
//     } catch (e) {
//     }
//
// }



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







