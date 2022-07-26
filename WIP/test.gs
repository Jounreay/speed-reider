
function myFunction() {
    var bodyElement = DocumentApp.getActiveDocument()
    var allParagraphs = bodyElement.getBody().getParagraphs()
    for (let index = 0; index < allParagraphs.length; ++index) {
    var thetext = allParagraphs[index].getText()
    if (thetext){
      startPosition = 0;
    endPosition = 0;
    remainingTxtInParagraph = thetext;
    var splitvalues = remainingTxtInParagraph.split(" ")
    lengthOfThisWord = 0;
    numberOfWordsInPara = 0;//Initialize with a value of zero
    Logger.log("Current Paragraph: " + remainingTxtInParagraph);
    for (var i = 0; i < splitvalues.length; i += 1) {
      numberOfWordsInPara ++;
      remainingTxtInParagraph.substring
      words = splitvalues[i]
      lengthOfThisWord = words.includes("-") ? words.indexOf("-"):0
      var endPosition = Math.round(lengthOfThisWord / 2)
      remainingTxtInParagraph = remainingTxtInParagraph.substr(lengthOfThisWord + 1); //length is omitted.  Extracts characters to the end
      endPosition = startPosition + endPosition
      if (startPosition !=0 && endPosition !=0) {
        words.setBold(startPosition, endPosition, true);
    };

    startPosition = startPosition + lengthOfThisWord + 1;
    }
    }
  }
  }
