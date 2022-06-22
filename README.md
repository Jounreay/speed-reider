# speed-reider

## What is it?:

* Absolutely open source googleappscript/javascript that does a neat thing that does not resemble another product on the market.

## What it do?:
* Copies the current document the script has been added to, and add "speedy" to the end of the name.
* On this newly copied document, begin by iterating through each paragraph, and gather (using RegularExpressions) each "Word" - it can contain characters like apostraphes and hyphons.
* Passes this newly created array list that has indexes matching the indexes of the paragraph themselves to a formatting function and iterates through both the paragraph and the words it contains.
* It finds each word starting with the first word in the current paragraph and bolds it. It determines which point in the word to stop bolding by;
  * if the starting index ==  0, the start index of the first character of the word of the paragraph, only the index of the last character of the word is used to calculate where to stop bolding. It subtracts the two numbers, then divides by two rounded down that index is where it stops bolding any given word.
  * if the starting index is != 0, it takes the difference of the start and end index, divides by 2, rounds down to the nearest whole number, and adds that to the start index. That index is where it stops bolding any given word

## What needs improving?:
* When gathering information it ignores **almost** all special characters, right now it's lacking a correct split for hyphenated words. (Currently in progress)
* The math on where the word is bolded, and where it is not, is not fully correct. Best practice would be to not hard code rules for word length, so that is what I will not do. (Currently in progress)
* If a parapgraph contains a word that could have another word inside of it, e.g. **Bionic Reading** the word Reading may only have the first three letters bolded **Rea**ding, but speed-reider may try to consider **ding** as it's own word, **IF** the word exists as a standalone word within the paragraph it is currently parsing. Tricky stuff. (This may be fixed with the latest version)
  * Another example is **Introd**uction, if the parapgraph contains the word "on", and it is up on the chopping block, it may ALSO bold **Introd**ducti**on**.


Now you might be thinking, "Isn't this just a less optimized version of Bionic Reading, a recently released API?" and to that I'd say no, this is not optimized at all - it's written in javascript. 
