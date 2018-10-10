Specs

1. The program should determine if the poem has 3 lines or not.
2. The program should be able to determine the number of syllables for a given word.

Syllable Rules:
1. Separate prefixes and suffixes from root words. 
prefix 
= ["ante",
"anti",
"circum",
"co",
"de",
"dis",
"em",
"en",
"epi",
"ex",
"extra",
"fore",
"homo",
"hyper",
"il",
"im",
"in",
"ir",
"infra",
"inter",
"intra",
"macro",
"micro",
"mid",
"mis",
"mono",
"non",
"omni",
"para",
"post",
"pre",
"re",
"semi",
"sub",
"super",
"therm",
"trans",
"tri",
"un",
"uni",
]

suffix = [
"acy",
"al",
"ance",
"ence",
"dom",
"er",
"or",
"ism",
"ist",
"ity",
"ty",
"ment",
"ness",
"ship",
"sion",
"tion",
"ate",
"en",
"ify",
"fy",
"ise",
"ize",
"able",
"ible",
"al",
"esque",
"ful",
"ic",
"ical",
"ious",
"ous",
"ish",
"ive",
"less",
"y",
"ly",
"ward",
"wards",
"wise"
]

2. Are two (or more) consonants next to each other? 
//split two consonants next to each other.
twoConsonantsException
= [
  "th", "sh", "ph", "th", "ch", "wh"
]
//if a consanant is one of these letters(t, s, p, c, w) and its neighbor is h, then do not split
 
3. Is the consonant surrounded by vowels? 
- When a vowel is followed by one consonant, that vowel is usually short. 
- A vowel is usually short when there is only one vowel in a word or syllable as in on, red and fantastic.
=> divide before the consonant
- When a single vowel is at the end of a word or syllable, it usually makes the long vowel sound, as in go and paper.
=> divide after the consonant

4. Does the word end with ‘ckle’? 
- divide right before the "le"

5. Does the word end with ‘le’ (not ‘ckle’)?
- if the letter before the "le" is a consonant: divide one letter before "le"
- if the letter before the "le" is a vowel: treat the whole words as a syllable