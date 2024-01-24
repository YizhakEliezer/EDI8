//function to chekFile
function chekFileFletOrder() {
    // fileChek.value= splitSupdes[numsplitSupdes];
    numsplitSupdes = 0;
//Clear the result arrays before each test
    myArray = [];
    // myArraymessageRusltFromFile = [];

    try {
        const messageIconX = document.getElementById('messageIconX');
        const messageIconV = document.getElementById('messageIconV');
        const supplierIconX = document.getElementById('supplierIconX');
        const supplierIconV = document.getElementById('supplierIconV');
        const retailerIconX = document.getElementById('retailerIconX');
        const retailerIconV = document.getElementById('retailerIconV');
        const branchRetailerIconV = document.getElementById('branchRetailerIconV');
        const branchRetailerIconX = document.getElementById('branchRetailerIconX');
        const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
        const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
        messageIconX.style.display = 'none';
        messageIconV.style.display = 'none';
        supplierIconX.style.display = 'none';
        supplierIconV.style.display = 'none';
        retailerIconX.style.display = 'none';
        retailerIconV.style.display = 'none';
        branchRetailerIconV.style.display = 'none';
        branchRetailerIconX.style.display = 'none';
        supplierSubnetNumberIconX.style.display = 'none';
        supplierSubnetNumberIconV.style.display = 'none';


//Variables of the input from the user
        const numRetailer = document.getElementById('retailer').value.toLowerCase();
        const numSupplier = document.getElementById('supplier').value;
        const numMessage = document.getElementById('message').value;
        const numSupplierSubnetNumber = document.getElementById('supplierSubnetNumber').value;
        const numBranchRetailer = document.getElementById('branchRetailer').value;

//In the case of multiple certificates,
// check where the certificate number is located that the user entered and accordingly search the certificate
// In case it is a single certificate then we defined that numsplitSupdes is equal to 0
        try {
            if (splitSupdes.length > 1) {
                for (let k = 0; k < splitSupdes.length; k++) {
                    if (splitSupdes[k].includes(numMessage)) {
                        // console.log(splitSupdes[k])
                        numsplitSupdes = k;
                        fileChek.value = splitSupdes[numsplitSupdes];
                    }
                }
            }

        } catch (e) {
        }
        // const  fileChekValue=fileChek.value;
        // fileChek.value= splitSupdes[0];
        // fileChek.value = splitSupdes[numsplitSupdes];
        splitSupdes[numsplitSupdes] = fileChek.value;
        // fileChek.value = fileChekValue;


        splitSupdes[numsplitSupdes] = fileChek.value;

        //Split the file into lines
        const lines = splitSupdes[numsplitSupdes].split('\n');

        let nonEmptyLines = [];
        let consecutiveEmptyLines = 0;

        for (let j = 0; j < lines.length; j++) {
            const currentLine = lines[j].trim();
            if (currentLine === "") {
                consecutiveEmptyLines++;
            } else {
                if (consecutiveEmptyLines > 0) {
                    // There were consecutive empty lines before this non-empty line
                    nonEmptyLines.push(""); // Add a single empty line to represent the skipped ones
                    consecutiveEmptyLines = 0;
                }
                nonEmptyLines.push(currentLine);
            }

        }

        // if (lines[lines.length - 2].includes("ENV00201")){
        //     consecutiveEmptyLines=consecutiveEmptyLines-1;
        // }
        lines.length = lines.length - (consecutiveEmptyLines);


        //A function to check whether the values are equal without empty or undefined values
        function compareStringsIgnoreCaseAndSpace(valueFromFile, constantValue) {
            // Check if value is defined and not empty
            if (valueFromFile === undefined || valueFromFile.trim() === "") {
                return false;
            }
            // Remove spaces from both the value and target strings
            const formattedValue = valueFromFile.trim();
            const formattedTarget = constantValue.trim();

            // Check if the formatted value is exactly equal to the formatted target
            return formattedTarget === formattedValue;
        }


        //constant values line 1
        const ENV00101 = "ENV00101";
        const nameDocument = "MMORDML";
        const nameDocument2 = "MMORDMR";
        const typeDocument = "MMOR01";
        //constant values line 2
        const HEAD0101 = "HEAD0101";
        //constant values line 3
        const LINE0001 = "LINE0001";
        //constant values line 4
        const LINE0101 = "LINE0101";


        //constant values Barcode
        const LINE0201 = "LINE0201";

        //constant values One line before last
        const HEAD9901 = "HEAD9901";
        //constant values last line
        const ENV00201 = "ENV00201";


        //Barcode prefix check
        let constantValuesBarcodeBoolean = true;
        let ItemDataBoolean = true;

        function constantValuesBarcode() {
            for (let i = 3; i < lines.length - 2; i++) {
                const BarcodeArryStartOfLine = lines[i].substring(0, 8);
                if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0201)) {

                } else {
                    if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
                        const surfaceIdentificationNumber = lines[i].substring(50, 68);
                        if (surfaceIdentificationNumber.trim() === "") {
                            ItemDataBoolean = false;
                            addElement("מספר זיהוי משטח חסר " + (i + 1))
                            addElement("")
                        }
                    } else {
                        constantValuesBarcodeBoolean = false;
                        addElement("תחילית מקט חסר או שגוי שורה " + (i + 1))
                        addElement("")
                    }
                }
            }
        }


        // function for checking the c Values of  barcodes is not empty or with spaces
        let valuesBarcodeBoolean = true;

        // function valuesBarcode() {
        //     for (let r = 3; r < lines.length - 3; r++) {
        //         const BarcodeArryStartOfLine = lines[r].substring(0, 8);
        //         if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
        //             r++
        //         }
        //         const barcodeEmpty = lines[r].substring(8, 9);
        //         // const barcodeEmpty = splitSupdes[numsplitSupdes].split('\n')[r].substring(8, 22);
        //         const barcodeWithspaces = lines[r].substring(8, 23);
        //         const mbarcodeWithspacesValue = barcodeWithspaces;
        //         if (barcodeEmpty.trim() === "") {
        //             valuesBarcodeBoolean = false;
        //             addElement("ברקוד חסר או שגוי שורה " + (r + 1));
        //
        //         } else {
        //
        //             for (let i = 0; i < mbarcodeWithspacesValue.length; i++) {
        //
        //                 if (mbarcodeWithspacesValue[i].trim() === "") {
        //
        //                     for (let j = i + 1; j < mbarcodeWithspacesValue.length; j++) {
        //                         if (mbarcodeWithspacesValue[j].trim() === "") {
        //
        //                         } else {
        //                             valuesBarcodeBoolean = false;
        //                             addElement("ברקוד חסר או שגוי שורה " + (r + 1));
        //                             break;
        //                         }
        //                         break;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }


        function valuesBarcode() {
            for (let r = 3; r < lines.length - 2; r++) {
                const BarcodeArryStartOfLine = lines[r].substring(0, 8);
                if (compareStringsIgnoreCaseAndSpace(BarcodeArryStartOfLine, LINE0101)) {
                    r++
                }
                const barcodeWithspaces = lines[r].substring(8, 23);
                if (barcodeWithspaces.trim() === "") {
                    valuesBarcodeBoolean = false;
                    addElement("ברקוד חסר " + (r + 1));
                    addElement("")
                }
            }
        }


        //chek barcode is validi


        constantValuesBarcode()
        valuesBarcode()


        //valueFromFile line 1
        const generalLineHeader = lines[0].substring(0, 8);
        const isValidNumRetailer = lines[0].substring(49, 64);
        const MMDE02L = lines[0].substring(23, 33);
        const MMDE02R = lines[0].substring(23, 33);
        const SUPDES = lines[0].substring(33, 47);
        const isValidNumSupplier = lines[0].substring(8, 23);


        //valueFromFile line 2
        const firstLineDetailsFile = lines[1].substring(0, 8);
        const isValidNumMessage = lines[1].substring(8, 23);


        //time value
        const timeDocument = lines[1].substring(23, 35).trim();
        const timeDocumentLength = 12;
        const booleneLength = timeDocument.length === timeDocumentLength;
        const year = Number(timeDocument.substring(0, 4));
        const month = Number(timeDocument.substring(4, 6));
        const day = Number(timeDocument.substring(6, 8));
        const hour = Number(timeDocument.substring(8, 10));
        const minute = Number(timeDocument.substring(10, 12));


        const yearS = String(timeDocument.substring(0, 4));
        const monthS = String(timeDocument.substring(4, 6));
        const dayS = String(timeDocument.substring(6, 8));
        const hourS = String(timeDocument.substring(8, 10));
        const minuteS = String(timeDocument.substring(10, 12));

        //NumSupplierSubnetNumber+NumBranchRetailer
        const isValidNumSupplierSubnetNumber = lines[1].substring(104, 119);
        const isValidNumBranchRetailer = lines[1].substring(154, 169);


        //valueFromFile line 3
        const firstLine3row = lines[2].substring(0, 8);


        //valueFromFile One line before last
        const lestline = lines[lines.length - 2].substring(0, 8);
        //valueFromFile last line
        const lestline1 = lines[lines.length - 1].substring(0, 8);
        //valueFromFile One line before last

        // const  resultsFileRetailer =document.getElementById("resultsFileRetailer");
        // const  resultsFileSupllier =document.getElementById("resultsFileSupllier");
        // const  resultsFileNumMessage =document.getElementById("resultsFileNumMessage");
        // const  resultsFileNumSupplierSubnetNumber =document.getElementById("resultsFileNumSupplierSubnetNumber");
        // const  resultsFileNumBranchRetailer =document.getElementById("resultsFileNumBranchRetailer");
        // resultsFileNumMessage.innerHTML ="";
        // resultsFileSupllier.innerHTML ="";
        // resultsFileRetailer.innerHTML ="";
        // resultsFileNumSupplierSubnetNumber.innerHTML ="";
        // resultsFileNumBranchRetailer.innerHTML ="";
        // resultsFileSupllier.innerHTML += ` (לא נמצא ספק המשוייך למספר הזה) <p1>ספק: ${isValidNumSupplier} </p1>`;
        // resultsFileRetailer.innerHTML += ` (לא נמצא רשת המשוייכת למספר הזה) <p1>רשת: ${isValidNumRetailer} </p1>`;
        // resultsFileNumMessage.innerHTML += `<p1>מספר תעודה: ${isValidNumMessage}</p1>`;
        // resultsFileNumSupplierSubnetNumber.innerHTML += `<p1>מספר תת ספק: ${isValidNumSupplierSubnetNumber}</p1>`;
        // resultsFileNumBranchRetailer.innerHTML += `<p1>מספר סניף: ${isValidNumBranchRetailer}</p1>`;
        //
        // fetch('data.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Iterate through each object in the array
        //         data.forEach(obj => {
        //             // Check if the value pro
        //             if (obj.value.trim() === isValidNumSupplier.trim()) {
        //                 // If a match is found, print the corresponding key
        //                 resultsFileSupllier.innerHTML ="";
        //                 resultsFileSupllier.innerHTML += `<p>ספק: ${isValidNumSupplier},${obj.key}</p>`;
        //                 // If you only want to find the first match, you can break out of the loop here
        //                 // break;
        //             }
        //         });
        //     })
        //     .catch(error => console.error('Error fetching data:', error));
        //
        //
        // fetch('retailerData.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Iterate through each object in the array
        //         data.forEach(obj => {
        //             // Check if the value pro
        //             if (isValidNumRetailer.trim()==="7290058140886") {
        //                 // If a match is found, print the corresponding key
        //                 resultsFileRetailer.innerHTML ="";
        //                 resultsFileRetailer.innerHTML += `<p>comax,רשת: ${isValidNumRetailer}</p>`;
        //                 // If you only want to find the first match, you can break out of the loop here
        //                 // break;
        //             }
        //
        //             else if  (obj.value.trim() === isValidNumRetailer.trim()) {
        //                 // If a match is found, print the corresponding key
        //                 resultsFileRetailer.innerHTML ="";
        //                 resultsFileRetailer.innerHTML += `<p>רשת: ${isValidNumRetailer},${obj.key}</p>`;
        //                 // If you only want to find the first match, you can break out of the loop here
        //                 // break;
        //             }
        //         });
        //     })
        //     .catch(error => console.error('Error fetching data:', error));


        if (

            //line 1
            compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101) &&
            ( compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer) || numRetailer==="") &&
            (compareStringsIgnoreCaseAndSpace(nameDocument, MMDE02L) ||
                compareStringsIgnoreCaseAndSpace(nameDocument2, MMDE02R)) &&
            compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument) &&
            ( compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier) || numSupplier==="") &&
            //line 2
            compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101) &&

            (isValidNumMessage.trim() != "" && numMessage.trim() === "" || isValidNumMessage.trim().includes(numMessage.trim())) &&

            booleneLength === true &&


            (year => 2023 && month > 1 && month <= 12 && day > 1 && day <= 31 && hour > 0 && hour <= 24 &&
                    minute > 0 && minute <= 59
            )

            &&

            // (numSupplierSubnetNumber.trim() === "" &&
            //     compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) ||
            //     numSupplierSubnetNumber.trim() != "" &&
            //     compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)
            // )

            (numSupplier==="" && numSupplierSubnetNumber==="" || numSupplier!="" &&  compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) ||
                numSupplier!="" &&  compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber) ||
                numSupplier==="" &&     compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) ||
                numSupplier==="" &&    compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)
            )


            &&

            (numBranchRetailer.trim() === "" ||
                numBranchRetailer.trim() != "" &&
                compareStringsIgnoreCaseAndSpace(isValidNumBranchRetailer, numBranchRetailer)
            ) && isValidNumBranchRetailer.trim() != ""


            &&

            //line 3
            compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001) &&


            //barcode
            constantValuesBarcodeBoolean === true && valuesBarcodeBoolean === true && ItemDataBoolean === true &&
            compareStringsIgnoreCaseAndSpace(lestline, HEAD9901) &&
            compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)


        ) {
            addElement("תעודה תקינה");
        }


        //line 1
        if (!compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101)) {
            addElement('ENV00101-ערך חסר');
            addElement("")
        }

        if (!compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer) && numRetailer!="") {
            addElement('מספר רשת שגוי');
            addElement(',מספר רשת שנמצא  בקובץ- '+isValidNumRetailer);
            addElement(".מספר רשת רצוי- "+numRetailer);
            addElement("");
            const retailerIconX = document.getElementById('retailerIconX');
            retailerIconX.style.display = 'block';
        } else {
            const retailerIconV = document.getElementById('retailerIconV');
            retailerIconV.style.display = 'block';
        }


        if (!compareStringsIgnoreCaseAndSpace(MMDE02L, nameDocument) &&
            !compareStringsIgnoreCaseAndSpace(MMDE02R, nameDocument2)) {
            addElement(" MMDE02L-ערך חסר");
            addElement("")
        }
        if (!compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument)) {
            addElement('SUPDES-ערך חסר');
            addElement("")
        }
        if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier) && numSupplier!="") {
            addElement('מספר ספק שגוי');
            addElement(',מספר ספק שנמצא  בקובץ- '+isValidNumSupplier);
            addElement(".מספר ספק רצוי- "+numSupplier);
            addElement("");
            const supplierIconX = document.getElementById('supplierIconX');
            supplierIconX.style.display = 'block';
        } else {
            const supplierIconV = document.getElementById('supplierIconV');
            supplierIconV.style.display = 'block';
        }


        //line 2
        if (!compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101)) {
            addElement('HEAD0101-ערך חסר');
            addElement("")
        }


        if (isValidNumMessage.trim() === "" || numMessage.trim() != "" &&
            !isValidNumMessage.trim().includes(numMessage.trim())) {
            addElement('מספר תעודה שגוי');
            addElement("")
            const messageIconX = document.getElementById('messageIconX');
            messageIconX.style.display = 'block';
        } else {
            const messageIconV = document.getElementById('messageIconV');
            messageIconV.style.display = 'block';
        }

        if (numMessage.trim() === "") {
            const messageIconX = document.getElementById('messageIconX');
            messageIconX.style.display = 'none';
            const messageIconV = document.getElementById('messageIconV');
            messageIconV.style.display = 'none';
        }

        if (numRetailer.trim() === "") {
            const retailerIconX = document.getElementById('retailerIconX');
            retailerIconX.style.display = 'none';
            const retailerIconV = document.getElementById('retailerIconV');
            retailerIconV.style.display = 'none';
        }

        if (numSupplier.trim() === "") {
            const supplierIconX = document.getElementById('supplierIconX');
            supplierIconX.style.display = 'none';
            const supplierIconV = document.getElementById('supplierIconV');
            supplierIconV.style.display = 'none';
        }


        if (booleneLength === false || isNaN(booleneLength)) {
            addElement('פורמט תאריך שגוי,מספר התווים או מיקום התאריך בקובץ שגוי.');
            addElement(" פורמט תאריך שנמצא- "+timeDocument);
            addElement("")
        }

        if (year < 2023 || isNaN(year)) {
            addElement('פורמט תאריך שנה שגוי');
            addElement(" פורמט שנה שנמצא- "+yearS);
            addElement("")
        }
        if (month < 1 || month > 12 || isNaN(month)) {
            addElement('פורמט תאריך חודש שגוי');
            addElement(" פורמט חודש שנמצא- "+monthS);
            addElement("")
        }
        if (day < 1 || day > 31 || isNaN(day)) {
            addElement('פורמט תאריך יום שגוי');
            addElement(" פורמט יום שנמצא- "+dayS);
            addElement("")
        }
        if (hour < 0 || hour > 24 || isNaN(hour)) {
            addElement('פורמט תאריך שעה שגוי');
            addElement(" פורמט שעה שנמצא- "+hourS);
            addElement("")
        }
        if (minute < 0 || minute > 59 || isNaN(minute)) {
            addElement('פורמט תאריך דקה שגוי');
            addElement(" פורמט דקה שנמצא- "+minuteS);
            addElement("")
        }


        // if (numSupplierSubnetNumber.trim() === "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier)) {
        //     addElement('מספר ספק משני/תת ספק שגוי או חסר');
        // }

        if (numSupplierSubnetNumber==="" && numSupplier != "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
            addElement('.אין התאמה בין ספק ראשי  לספק משני/תת ספק,הזן מספר תת ספק');
            addElement('.מספר ספק משני/תת ספק שנמצא  בקובץ- '+isValidNumSupplierSubnetNumber);
            addElement("");

        }

        if (numSupplierSubnetNumber.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
            addElement('מספר  תת ספק  שגוי');
            addElement(',מספר תת ספק שנמצא  בקובץ- '+isValidNumSupplierSubnetNumber);
            addElement(',מספר תת ספק רצוי- '+numSupplierSubnetNumber);
            addElement("");
            const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
            supplierSubnetNumberIconX.style.display = 'block';
        } else {
            const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
            supplierSubnetNumberIconV.style.display = 'block';
        }
        if (numSupplierSubnetNumber.trim() === "") {
            const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
            supplierSubnetNumberIconX.style.display = 'none';
            const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
            supplierSubnetNumberIconV.style.display = 'none';
        }

        if (numBranchRetailer.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumBranchRetailer, numBranchRetailer)) {
            addElement('מספר  סניף  שגוי');
            const branchRetailerIconX = document.getElementById('branchRetailerIconX');
            branchRetailerIconX.style.display = 'block';
        } else {
            const branchRetailerIconV = document.getElementById('branchRetailerIconV');
            branchRetailerIconV.style.display = 'block';
        }
        if (numBranchRetailer.trim() === "") {
            const branchRetailerIconX = document.getElementById('branchRetailerIconX');
            branchRetailerIconX.style.display = 'none';
            const branchRetailerIconV = document.getElementById('branchRetailerIconV');
            branchRetailerIconV.style.display = 'none';
        }

        if (isValidNumBranchRetailer.trim() === "") {
            addElement('מספר סניף חסר');
        }


        //line 3
        if (!compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001)) {
            addElement('LINE0001-ערך חסר');
            addElement("")
        }

        if (!compareStringsIgnoreCaseAndSpace(lestline, HEAD9901)) {
            addElement('HEAD9901-ערך חסר');
            addElement("")
        }

        if (!compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)) {
            addElement('ENV00201-ערך חסר');
            addElement("")
        }


    } catch (v) {
    }


}