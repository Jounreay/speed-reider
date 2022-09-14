function speedReider() {

    var currentdocumentid = DocumentApp.getActiveDocument().getId()
    var currentdocumentname = DocumentApp.getActiveDocument().getName()
    var speedyver = currentdocumentname + "_speedy"
    var document = DriveApp.getFilesByName(speedyver)
    if (document.hasNext()){
      var newdocument = document.next().getId()

    }
    else{
        var newdocument = DriveApp.getFileById(currentdocumentid).makeCopy(speedyver).getId()
    }
    




    const getAllwords = () => {
        var reg = /([a-zA-Z]+[\’\-]*[a-z]*)/g;
        //Gets all words by Paragraph, add to arraylist.
        //If they contain a hyphen, split them, and append to arraylist

        const document = DocumentApp.openById(newdocument);
        const documentBody = document.getBody();
        var pgfs = documentBody.getParagraphs();
        var paragraphwords = new Array();
        i = 0
        for (var pgf of pgfs) {
            var words = [];
            const plaintext = pgf.editAsText().getText();
            var match;

            while ((match = reg.exec(plaintext)) != null) {
                var ishyphenated = /\-/.test(match[0])
                if (ishyphenated){
                 var word = match[0].split("-")
                }
                else{
                  var word = match[0]
                  }
                //word = ishyphenated == true ? match[0].split("-") : match[0];

                if (Array.isArray(word)){
                  word.forEach(compoundword => words.push(compoundword))
                }
                  else{
                  words.push(word);
                  }
                  
            }
            paragraphwords[i] = words
            i++

        }
        return paragraphwords
    }


    function boldfaceText(findMe) {

        // put to boldface the argument
        var document = DocumentApp.openById(newdocument)
        var body = document.getBody();
        var pgfs = body.getParagraphs();
        for (let index = 0; index < pgfs.length; ++index) {

            var searchstring = findMe[index]
            theParagraph = pgfs[index];
            for (i = 0; i < searchstring.length; i++) {
                    var thisword = searchstring[i]
                    var foundElement = theParagraph.findText(searchstring[i]);
                    var foundText = foundElement.getElement().asText();
                    var isfound = foundElement ? true : false;
                    Logger.log(`Word: ${thisword}, isFound: ${isfound}`)
                    while (foundElement != null) {
                    var start = foundElement.getStartOffset();
                    var end = foundElement.getEndOffsetInclusive();
                    //Logger.log(`Word: ${searchstring[i]}, Start Index:${start}, End bold:${end}`)
                    //var endBold = start == 0 ? (Math.round(end / 2) + start) : (Math.floor((end - start) / 2) + start);
                    var wordlen = searchstring[i].length
                    var difference = end - start
                    var evenwordlen = wordlen % 2 == 0
                    if (evenwordlen){
                      var endBold = (Math.round(wordlen / 2) + (start -1))
                    }
                    else{
                      // why is this fuckin' wrong. it's simple - half of the word, lowered.
                      // Revised - the issue isnt that it's wrong it's actually calculating it correctly.
                      //The issue is that words are being found in "special" words. uuuuup < up is bolded, as well as the correct 
                      //portion of the word. I need to evaluate if the the thing I'm attempting to replace is within another word - if 
                      //ignore. Kurama, the a is bolded twice because "a" exists.
                      var endBold = Math.floor((wordlen / 2)) + (start - 1 ) < start ? start : Math.floor((wordlen / 2)) + (start -1)
                    }
                    //var endBold = wordlen % 2 == 0 ? (Math.round(wordlen / 2) + (start -1)) : ;
                    //This one worked before. Don't fuck it up.
                    //var endBold = start == 0 ? (Math.round(word / 2) + start) : (Math.floor((end - start) / 2) + start);
                    Logger.log(`Word: ${searchstring[i]},Wordlen: ${wordlen} Start Index:${start}, End Index: ${end}, End bold:${endBold}`)

                    foundText.setBold(start, endBold, true);

                    var foundElement = theParagraph.findText(searchstring[i], foundElement)
                    }
              }
            }
        }

    var filteredwords = getAllwords()
    Logger.log(filteredwords)
    boldfaceText(filteredwords)

}
