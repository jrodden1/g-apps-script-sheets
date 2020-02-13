// This code is actually getting pasted into the Google Sheet below in its Script section
// The built in Google editor is rather poor so I'll be editing in here
// Test Sheet https://docs.google.com/spreadsheets/d/12I9CfDSGTjtcN0NvlXkTRgL4H-JxMs-_-8j7mlX26do/edit?usp=sharing
function showDialog() {
   let activeSheet = SpreadsheetApp.getActiveSheet();
   let currentCell = activeSheet.getSelection().getCurrentCell()
   let currentRow = currentCell.getRow()
   let rangeValues = activeSheet.getRange(`A${currentRow}:D${currentRow}`).getValues()
   let [date, order, address, name] = rangeValues
   // let date = activeSheet.getCell(currentRow, 0).getValue() // "A" column of current row should contain the date
   // let selectionValue = activeSheet.getSelection().getCurrentCell().getValue()
   // let stringed = JSON.stringify(selection)
   Browser.msgBox(`${date}`);
   //Ui.alert(
   //  'Please confirm',
   //  'Are you sure you want to continue?',
   //  ui.ButtonSet.YES_NO
   //);
 }
 
 //Basically, what needs done is to create a button for a line item (onClick event trigger) or a right click menu option that will pass in the event details
 //(what cell am I currently in, what is the street address for this one, what's the email address to send it to (static I think -- will always be MHPM), what is the content of the note itself.)
 //to a callback function that will do the automated email creation. 
 
 //Possible Gotcha's:
 // Need to make sure that I can add a button or a right click menu option to the sheet itself and trigger callback function from this Code.gs that will run. 
 // Otherwise, I'll need to see if I can programmatically access the GMAIL account linked to this Google Doc, then create a new email with the various information
 // from the row that was selected with the right click 