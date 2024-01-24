function chekFileHashavshevtSupdes() {
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


        myArray = [];
        myArraymessageRusltFromFile = [];


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


        const numRetailer = document.getElementById('retailer').value.toLowerCase();
        const numSupplier = document.getElementById('supplier').value;
        const numMessage = document.getElementById('message').value;
        const numSupplierSubnetNumber = document.getElementById('supplierSubnetNumber').value;
        const numBranchRetailer = document.getElementById('branchRetailer').value;

        const lines = fileContentSearch.split('\n');
        fileContentSearch=fileChek.value;

        let currentValidnumMessage = '';
        let currentVariable = '';
        let variables = [];
        for (let l = 0; l < lines.length; l++) {
            const isValidnumMessage = lines[l].substring(151, 158).trim();

            if (isValidnumMessage === "") {
                // Value is empty, add to the current variable
                currentVariable += '\n' + lines[l];
            } else if (isValidnumMessage !== currentValidnumMessage || currentValidnumMessage === "") {
                // Value changed or previous value was empty, create a new variable
                if (currentVariable !== '' && currentValidnumMessage !== "") {
                    variables.push(currentVariable);
                }

                // Update current values
                currentValidnumMessage = isValidnumMessage;
                currentVariable = lines[l];
            } else {
                // Value is the same, add to the current variable
                currentVariable += '\n' + lines[l];
            }
        }

// Add the last variable (if any) to the list
        if (currentVariable !== '') {
            variables.push(currentVariable);
        }
        let test;
        if (variables.length > 1) {
            const numMessage = document.getElementById('message').value;
            const moreFile = document.querySelector('.moreFile');
            moreFile.style.display = 'block';
            // alert("תעודות מרובות")
            for (let k = 0; k < variables.length; k++) {
                if (variables[k].includes(numMessage)) {
                    numsplitSupdes = k;
                }
            }
        } else {

            const moreFile = document.querySelector('.moreFile');
            moreFile.style.display = 'none';
        }



        // const lines =  splitSupdes[numsplitSupdes].split('\n');
        // const secondToLastLine = lines[lines.length - 2];


        let numSupplierBoolean = true;
        let isValidNumRetailerBoolean = true;
        let isValidNumSupplierSubnetNumberBoolean = true;
        let numSupplierSubnetNumberBoolean = true;
        let numpPackagingBoolean = true;
        let barcodeBoolean = true;
        let matchNumBranchBoolean = true;
        let numBranch1Boolean = true;
        let numBranch2Boolean = true;
        let pormatTime1Boolean = true;
        let pormatTime2Boolean = true;
        let dayDataTimeBoolean = true;
        let monthDataTimeBoolean = true;
        let yearDataTimeBoolean = true;

        let dayDataTime2Boolean = true;
        let monthDataTime2Boolean = true;
        let yearDataTime2Boolean = true;
        let numMessageBoolean = true;

        if (numMessage.trim()===""){
            variables[numsplitSupdes]=fileContentSearch;

        }

        const linesVariables = variables[numsplitSupdes].split('\n');




        for (let i = 0; i < linesVariables.length; i++) {

            let allLinesEmpty = true;
            for (let j = i; j < linesVariables.length; j++) {
                const currentLine = linesVariables[j].trim();
                if (currentLine !== "" && currentLine !== undefined) {
                    allLinesEmpty = false;
                    break;
                }
            }
            if (allLinesEmpty) {
                continue;
            }

            myArraymessageRusltFromFile = [];


            // console.log( variables[numsplitSupdes])


            const isValidNumSupplier = variables[numsplitSupdes].split('\n')[i].substring(10, 23);
            const isValidNumSupplierSubnetNumber = variables[numsplitSupdes].split('\n')[i].substring(24, 37);
            const isValidNumRetailer = variables[numsplitSupdes].split('\n')[i].substring(38, 51);
            const numpPackaging = variables[numsplitSupdes].split('\n')[i].substring(66, 82);
            const barcode = variables[numsplitSupdes].split('\n')[i].substring(87, 102);
            const numBranch1 = variables[numsplitSupdes].split('\n')[i].substring(103, 133);
            const numBranch2 = variables[numsplitSupdes].split('\n')[i].substring(134, 142);
            const dataTime = variables[numsplitSupdes].split('\n')[i].substring(143, 151);
            const dataTime2 = variables[numsplitSupdes].split('\n')[i].substring(159, 167);

            const dayDataTime = Number(dataTime.substring(0, 2));
            const monthDataTime = Number(dataTime.substring(3, 5));
            const yearDataTime = Number(dataTime.substring(6, 8));

            const dayDataTimeS = String(dataTime.substring(0, 2));
            const monthDataTimeS = String(dataTime.substring(3, 5));
            const yearDataTimeS = String(dataTime.substring(6, 8));

            const dayDataTime2 = Number(dataTime2.substring(0, 2));
            const monthDataTime2 = Number(dataTime2.substring(3, 5));
            const yearDataTime2 = Number(dataTime2.substring(6, 8));

            const dayDataTime2S = String(dataTime2.substring(0, 2));
            const monthDataTime2S = String(dataTime2.substring(3, 5));
            const yearDataTime2S = String(dataTime2.substring(6, 8));


            const isValidnumMessage = variables[numsplitSupdes].split('\n')[i].substring(151, 158);



            if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplier, numSupplier) && numSupplier!="") {
                numSupplierBoolean = false;
                addElement("מספר ספק שגוי שורה " + (i + 1));
                addElement(',מספר ספק שנמצא  בקובץ- '+isValidNumSupplier);
                addElement(".מספר ספק רצוי- "+numSupplier);
                addElement("");
                const supplierIconX = document.getElementById('supplierIconX');
                supplierIconX.style.display = 'block';
            }


            if (!compareStringsIgnoreCaseAndSpace(isValidNumRetailer, numRetailer) && numRetailer!="") {
                isValidNumRetailerBoolean = false;
                addElement("מספר רשת שגוי שורה " + (i + 1));
                addElement(',מספר רשת שנמצא  בקובץ- '+isValidNumRetailer);
                addElement(".מספר רשת רצוי- "+numRetailer);
                addElement("");
                const retailerIconX = document.getElementById('retailerIconX');
                retailerIconX.style.display = 'block';
            }


            // if (numSupplierSubnetNumber != "") {
            //     if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier)) {
            //         isValidNumSupplierSubnetNumberBoolean = false;
            //         addElement("מספר ספק משני שגוי שורה " + (i + 1));
            //     }
            // }
            if (numSupplierSubnetNumber.trim() === "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplier) && numSupplier!="") {
                isValidNumSupplierSubnetNumberBoolean = false;
                addElement(".אין התאמה בין ספק ראשי  לספק משני/תת ספק,בשורה " + (i + 1));
                addElement('.מספר ספק משני/תת ספק שנמצא  בקובץ- '+isValidNumSupplierSubnetNumber);
                addElement("");
            }


            // if (numSupplierSubnetNumber != "") {
            //     if (!compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
            //         numSupplierSubnetNumberBoolean = false;
            //         addElement("מספר תת ספק  שגוי שורה " + (i + 1));
            //     }
            // }

            if (numSupplierSubnetNumber.trim() != "" && !compareStringsIgnoreCaseAndSpace(isValidNumSupplierSubnetNumber, numSupplierSubnetNumber)) {
                numSupplierSubnetNumberBoolean = false;
                addElement("מספר תת ספק  שגוי שורה " + (i + 1));
                addElement(',מספר תת ספק שנמצא  בקובץ- '+isValidNumSupplierSubnetNumber);
                addElement(',מספר תת ספק רצוי- '+numSupplierSubnetNumber);
                addElement("");
                const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
                supplierSubnetNumberIconX.style.display = 'block';
            }

            if (numpPackaging.trim() === "") {
                numpPackagingBoolean = false;
                addElement("מספר אריזות חסר שורה " + (i + 1));
                addElement("");
            }

            if (barcode.trim() === "") {
                matchNumBranchBoolean = false;
                addElement("ברקוד חסר שורה " + (i + 1));
                addElement("");
            }


            if (numBranch1.trim() != numBranch2.trim()) {
                numSupplierSubnetNumberBoolean = false;
                addElement("חוסר התאמה במספר מפתח בשורה " + (i + 1));
                addElement("");
            }


            if (numBranch1.trim() === "") {
                numBranch1Boolean = false;
                addElement("מספר מפתח חסר שורה " + (i + 1));
                addElement("");
            }

            if (numBranch2.trim() === "") {
                numBranch2Boolean = false;
                addElement("מספר מפתח חסר שורה " + (i + 1));
                addElement("");
            }


            if (dataTime.trim().length != 8 || String(dataTime.substring(2, 3)) != "/" || String(dataTime.substring(5, 6)) != "/") {
                pormatTime1Boolean = false;
                // addElement("פורמט תאריך משלוח שגוי " + (i + 1));
                addElement('פורמט תאריך משלוח שגוי,מספר התווים או המיקום בקובץ שגוי שורה '+ (i + 1));
                addElement(" פורמט תאריך שנמצא- "+dataTime);
                addElement("")
            }


            if (dataTime2.trim().length != 8 || String(dataTime2.substring(2, 3)) != "/" || String(dataTime2.substring(5, 6)) != "/") {
                pormatTime2Boolean = false;
                // addElement("פורמט תאריך תוקף שגוי " + (i + 1));
                addElement('פורמט תאריך תוקף שגוי,מספר התווים או המיקום בקובץ שגוי שורה '+ (i + 1));
                addElement(" פורמט תאריך שנמצא- "+dataTime2);
               addElement("")
            }


            if (dayDataTime < 0 || dayDataTime > 31) {
                dayDataTimeBoolean = false;
                addElement("פורמט תאריך משלוח שדה -יום, שגוי. שורה " + (i + 1));
                addElement(" פורמט יום שנמצא- "+dayDataTime);
                addElement("")
            }
                console.log(monthDataTimeS)
                 console.log(monthDataTime)
            if (monthDataTime < 1 || monthDataTime > 12) {
                monthDataTimeBoolean = false;
                addElement("פורמט תאריך משלוח שדה -חודש, שגוי. שורה " + (i + 1));
                addElement(" פורמט חודש שנמצא- "+monthDataTime);
                addElement("")
            }
            if (yearDataTime < 23) {
                yearDataTimeBoolean = false;
                addElement("פורמט תאריך משלוח שדה -שנה, שגוי. שורה " + (i + 1));
                addElement(" פורמט שנה שנמצא- "+yearDataTime);
                addElement("")
            }


            if (dayDataTime2 < 0 || dayDataTime2 > 31) {
                dayDataTime2Boolean = false;
                addElement("פורמט תאריך תוקף שדה -יום, שגוי. שורה " + (i + 1));
                addElement(" פורמט יום שנמצא- "+dayDataTime2);
                addElement("")
            }

            if (monthDataTime2 < 1 || monthDataTime2 > 12) {
                monthDataTime2Boolean = false;
                addElement("פורמט תאריך תוקף שדה -חודש, שגוי. שורה " + (i + 1));
                addElement(" פורמט חודש שנמצא- "+monthDataTime2);
                addElement("")
            }
            if (yearDataTime2 < 23) {
                yearDataTime2Boolean = false;
                addElement("פורמט תאריך תוקף שדה -שנה, שגוי. שורה " + (i + 1));
                addElement(" פורמט שנה שנמצא- "+yearDataTime2);
                addElement("")
            }


            // if (!compareStringsIgnoreCaseAndSpace(isValidnumMessage, numMessage)) {
            //     numMessageBoolean = false;
            //     addElement("מספר תעודה שגוי שורה "+ (i + 1));
            //
            // }

            if (numMessage.trim() != "") {
                if (!compareStringsIgnoreCaseAndSpace(isValidnumMessage, numMessage)) {
                    numMessageBoolean = false;
                    addElement("מספר תעודה שגוי שורה " + (i + 1));
                    addElement("");
                    const messageIconX = document.getElementById('messageIconX');
                    messageIconX.style.display = 'block';
                }
            }
            // if (isValidNumMessage.trim() === "" || numMessage.trim() != "" &&
            //     !isValidNumMessage.trim().includes(numMessage.trim())){
            //     numMessageBoolean = false;
            //     addElement("מספר תעודה שגוי שורה " + (i + 1));
            // }


        }

        if (isValidNumRetailerBoolean) {
            const retailerIconV = document.getElementById('retailerIconV');
            retailerIconV.style.display = 'block';
        }

        if (numSupplierBoolean) {
            const supplierIconV = document.getElementById('supplierIconV');
            supplierIconV.style.display = 'block';
        }

        if (numMessageBoolean) {
            const messageIconV = document.getElementById('messageIconV');
            messageIconV.style.display = 'block';
        }


        if (numMessage.trim() === "") {
            const messageIconX = document.getElementById('messageIconX');
            messageIconX.style.display = 'none';
            const messageIconV = document.getElementById('messageIconV');
            messageIconV.style.display = 'none';
        }


        if (numSupplierSubnetNumberBoolean) {
            const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
            supplierSubnetNumberIconV.style.display = 'block';
        }

        if (numSupplierSubnetNumber.trim() === "") {
            const supplierSubnetNumberIconX = document.getElementById('supplierSubnetNumberIconX');
            supplierSubnetNumberIconX.style.display = 'none';
            const supplierSubnetNumberIconV = document.getElementById('supplierSubnetNumberIconV');
            supplierSubnetNumberIconV.style.display = 'none';
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

// Check the flag to determine if all elements were equal
        if (numSupplierBoolean && isValidNumRetailerBoolean && isValidNumSupplierSubnetNumberBoolean
            && numSupplierSubnetNumberBoolean
            && numpPackagingBoolean
            && barcodeBoolean
            && matchNumBranchBoolean
            && numBranch2Boolean
            && numBranch1Boolean
            && pormatTime1Boolean
            && pormatTime2Boolean
            && dayDataTimeBoolean
            && monthDataTimeBoolean
            && yearDataTimeBoolean
            && dayDataTime2Boolean
            && monthDataTime2Boolean
            && yearDataTime2Boolean
            && numMessageBoolean


        ) {
            addElement("תעודה תקינה");
        }


    } catch (e) {
    }

}