function speedReider() {
 var allParagraphs,bodyElement,endPosition,lengthOfThisWord ,numberOfWordsInPara ,
 paragraphAsString,remainingTxtInParagraph,startPosition,text ,theParagraph;

 bodyElement = DocumentApp.getActiveDocument().getBody();
 allParagraphs = bodyElement.getParagraphs();
 for (let index = 0; index < allParagraphs.length; ++index) {
 //Get a paragraph by index number E.g. 2 Gets the third paragraph
 theParagraph = allParagraphs[index];
 //Logger.log("theParagraph: " + theParagraph);

 // Only modify elements that can be edited as text; skip images and other
 // non-text elements.
 text = theParagraph.editAsText();
 paragraphAsString = text.getText();
 //Logger.log("paragraphAsString: " + paragraphAsString);

 startPosition = 0;
 endPosition = 0;
 remainingTxtInParagraph = paragraphAsString;
 lengthOfThisWord = 0;
 numberOfWordsInPara = 0;//Initialize with a value of zero

 while (remainingTxtInParagraph.length > 0) {
 Logger.log("remainingTxtInParagraphCount: " + remainingTxtInParagraph.length);
 numberOfWordsInPara ++;
 Logger.log("remainingTxtInParagraph: " + remainingTxtInParagraph)
 Logger.log(remainingTxtInParagraph.split('"'))
 //Hopefully this should evaluate if the current starting position is a quote or not. if it is, bump it to the next char.
 var lengthOfThisWord = remainingTxtInParagraph.indexOf(" "); //Carry on until we find the first space on the line we are on, register the position of it on the line
 if (remainingTxtInParagraph.charCodeAt(startPosition) == "\""){
 startPosition = startPosition +1
 }
 Logger.log("lengthOfThisWord: " + lengthOfThisWord);

 if (lengthOfThisWord > -1) { //if the length of the word is greater than -1, aka we are getting a valid index, we are still encountering words.
 //This may need to be changed to start position - word length isnt necessarily
 if (remainingTxtInParagraph.charAt((remainingTxtInParagraph.length - startPosition) == "\""))
 {
 endPosition = remainingTxtInParagraph.length -1;
 }
 else {
 endPosition = remainingTxtInParagraph.length
 }
 Logger.log("startPosition: " + startPosition);
 Logger.log("endPosition: " + endPosition);
 } else {//if the length of the word = -1, then we have reached the end of the line, and we have the final index of the line.
 lengthOfThisWord = remainingTxtInParagraph.length;
 Logger.log("lengthOfThisWord: " + lengthOfThisWord);
 if (remainingTxtInParagraph.charAt((remainingTxtInParagraph.length - startPosition) == "\""))
 {
 endPosition = lengthOfThisWord -2;
 }
 else {
 endPosition = lengthOfThisWord - 1;
 }
 Logger.log("final end position: " + endPosition);
 Logger.log("startPosition: " + startPosition);
 };

 remainingTxtInParagraph = remainingTxtInParagraph.substr(lengthOfThisWord + 1); //length is omitted. Extracts characters to the end
 Logger.log("remainingTxtInParagraph: " + remainingTxtInParagraph.length);
 if (startPosition = 0)
 var wordend = lengthOfThisWord
 else {
 var wordend = Math.round((startPosition + ((lengthOfThisWord )/ 2)))
 }

 Logger.log(wordend)
 text.setBold(startPosition, wordend, true);


 startPosition = startPosition + lengthOfThisWord + 1;
 Logger.log("next iteration startPosition: " + startPosition);
 Logger.log(" ");
 };

 Logger.log("numberOfWordsInPara: " + numberOfWordsInPara);
}
}

