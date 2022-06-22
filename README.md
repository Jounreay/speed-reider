# speed-reider

## What it does:

* Absolutely open source googleappscript/javascript that does a neat thing that does not resemble another product on the market.
* What it **does** do is:
  * Copy the current document the script has been added to, and add "speedy" to the end of the name.
  * On this newly copied document, begin by iterating through each paragraph, and gather (using RegularExpressions) each "Word" - it can contain characters like apostaphes and hyphons.
  * Passes this newly created array list, with indexes matching the indexes of the paragraph themselves, and iterate through both the paragraph and the words it contains.
  * It finds each word, starting with the first, in the paragraph and bolds it. It determines which point in the word to stop bolding by;
    * if the starting index is 0, the start index of the first character of the word, and the index of the last character of the word is used. It subtracts the two numbers, then divides by two rounded up that index is where it stops bolding any given word.
    * if the starting index is **not** 0, it takes the difference of the start and end index, divides by 2, rounds down to the nearest whole number, and adds that to the start index. That index is where it stops bolding any given word

* When gathering information, what does it ignore - **almost** all special characters


Now you might be thinking, "Isn't this just a less optimized version of Bionic Reading, a recently released API?" and to that I'd say no, this is not optimized at all - it's written in javascript. 
