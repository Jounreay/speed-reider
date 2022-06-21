function main() {

var words = [];


const getAllwords = () => {
  var reg = /([a-zA-Z]+[\’\-]*[a-z]*)/g;
  //Need to get all words by Paragraph, then in each paragraph, replace. Sorta like the old script.

  const document = DocumentApp.getActiveDocument();
  const documentBody = document.getBody();

  const plaintext = documentBody.editAsText().getText();

  var match;
  while ((match = reg.exec(plaintext)) != null) {
    words.push(match[0]);
	}
  //var filteredwords = words.filter(onlyUnique)
  return words
}


const searchAndReplaceInGoogleDocs = (filteredwords) => {

  const document = DocumentApp.getActiveDocument();
  const documentBody = document.getBody();
  //Logger.log(searchText)
  //Logger.log(searchResult.getElement().asText().getText())
  var style = { [DocumentApp.Attribute.BOLD]: true };
  var pgfs  = documentBody.getParagraphs();
 for (var word of filteredwords) {
   //will need a check if the word is split by a special character. I think this will work very well, though
    for (var pgf of pgfs) {
 
    //Small bug, but otherwise working - only replaces one instance of each word in a given paragraph. Need to check if we can find ALL instances of a word in a given paragraph.
    var location = pgf.findText(word);
    if (!location) continue;
    const startIndex = location.getStartOffset();
    const endIndex = location.getEndOffsetInclusive();
    var endBold = startIndex == 0 ? (Math.round(endIndex / 2) + startIndex): (Math.round((endIndex - startIndex) / 2) + startIndex)
    Logger.log("Word: " + word)
    Logger.log("Start Index: " + startIndex)
    Logger.log("End Index: " + endIndex)
    Logger.log("EndBold: " +endBold)

    location.getElement().setAttributes(startIndex, endBold, style);
  }
}
}
var filteredwords = getAllwords()
searchAndReplaceInGoogleDocs(filteredwords)

}
