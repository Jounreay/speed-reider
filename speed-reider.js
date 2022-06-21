
function speedReider() {
    var allParagraphs,bodyElement,endPosition,lengthOfThisWord ,numberOfWordsInPara ,
      paragraphAsString,remainingTxtInParagraph,startPosition,text ,theParagraph;

  bodyElement = DocumentApp.getActiveDocument().getBody();
  allParagraphs = bodyElement.getParagraphs();
  for (let index = 0; index < allParagraphs.length; ++index) {
    theParagraph = allParagraphs[index]
    paragraphAsString = theParagraph.getText()
    text = theParagraph.editAsText();
    Logger.log(paragraphAsString)
    if (paragraphAsString) {
    startPosition = 0;
    endPosition = 0;
    remainingTxtInParagraph = paragraphAsString;
    lengthOfThisWord = 0;
    numberOfWordsInPara = 0;//Initialize with a value of zero
    Logger.log("Current Paragraph: " + remainingTxtInParagraph);

   while (remainingTxtInParagraph.length > 0) {
   // Logger.log("remainingTxtInParagraph: " + remainingTxtInParagraph.length);
    numberOfWordsInPara ++;
    remainingTxtInParagraph.substring
    Logger.log("remainingTxtInParagraph.length")
    lengthOfThisWord = remainingTxtInParagraph.includes(" ") ? remainingTxtInParagraph.indexOf(" ") :remainingTxtInParagraph.indexOf(0)

   // Logger.log("Current Word:" + remainingTxtInParagraph
   // Logger.log("lengthOfThisWord: " + lengthOfThisWord);
    var endPosition = Math.round(lengthOfThisWord / 2)
   // Logger.log("StartPoint: " + startPosition);
  //  Logger.log("EndPoint: " + endPosition);

    remainingTxtInParagraph = remainingTxtInParagraph.substr(lengthOfThisWord + 1); //length is omitted.  Extracts characters to the end
   // Logger.log("remainingTxtInParagraph: " + remainingTxtInParagraph.length);
    endPosition = startPosition + endPosition
    if (startPosition !=0 && endPosition !=0) {
      text.setBold(startPosition, endPosition, true);
    };

    startPosition = startPosition + lengthOfThisWord + 1;
    //Logger.log("next iteration startPosition: " + startPosition);
   // Logger.log(" ");
  };

  //Logger.log("numberOfWordsInPara: " + numberOfWordsInPara);
    }
    }
  }
