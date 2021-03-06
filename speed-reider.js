function speedReider() {

    var currentdocumentid = DocumentApp.getActiveDocument().getId()
    var currentdocumentname = DocumentApp.getActiveDocument().getName()

    var newdocument = DriveApp.getFileById(currentdocumentid).makeCopy(currentdocumentname + "_speedy").getId()



    const getAllwords = () => {
        var reg = /([a-zA-Z]+[\’\-]*[a-z]*)/g;
        //Gets all words by Paragraph, add to arraylist.
        //If they contain a hyphen, split them, and append to arraylist

        const document = DocumentApp.openById(newdocument);
        const documentBody = document.getBody();
        var pgfs = documentBody.getParagraphs();
        var paragraphwords = new Object();
        i = 0
        for (var pgf of pgfs) {
            var words = [];
            const plaintext = pgf.editAsText().getText();
            var match;

            while ((match = reg.exec(plaintext)) != null) {
                var ishyphenated = !/\-/g.test(match[0])
                word = ishyphenated == true ? match[0].split("-") : match[0];
                words.push(word);
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
                var foundElement = theParagraph.findText(searchstring[i]);

                while (foundElement != null) {

                    var foundText = foundElement.getElement().asText();

                    var start = foundElement.getStartOffset();
                    var end = foundElement.getEndOffsetInclusive();
                    var endBold = start == 0 ? (Math.round(end / 2) + start) : (Math.floor((end - start) / 2) + start);

                    foundText.setBold(start, endBold, true);

                    foundElement = theParagraph.findText(searchstring[i], foundElement);
                }
            }
        }
    }

    var filteredwords = getAllwords()
    boldfaceText(filteredwords)

}
