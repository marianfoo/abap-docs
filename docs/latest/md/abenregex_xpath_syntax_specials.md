  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_syntax.htm) →  [regex - XPath Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_xpath_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20XPath%20regex%20-%20Special%20Characters%2C%20ABENREGEX_XPATH_SYNTAX_SPECIALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

XPath regex - Special Characters

The following tables summarize the special characters in [XPath regular expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxpath_regex_glosry.htm "Glossary Entry").

-   [Pattern Syntax](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_1)
    -   [Single Character Escapes](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_2)
    -   [Multi Character Escapes](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_3)
    -   [Category Escapes](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_4)
    -   [Quantifiers](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_5)
    -   [Grouping and Capturing](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_6)
    -   [Anchors](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_7)
    -   [Backreferences](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_8)
    -   [Alternation](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_9)
    -   [Character Classes](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_10)
-   [Replacement Syntax](#@@ITOC@@ABENREGEX_XPATH_SYNTAX_SPECIALS_11)

Pattern Syntax   

Single Character Escapes   

Syntax

Description

\\n

line feed (0x0A)

\\r

carriage return (0x0D)

\\t

tab (0x09)

\\\\

literal \\

\\|

literal |

\\.

literal .

\\-

literal \-

\\^

literal ^

\\$

literal $

\\?

literal ?

\\\*

literal \*

\\+

literal +

\\{

literal {

\\}

literal }

\\(

literal (

\\)

literal )

\\\[

literal \[

\\\]

literal \]

When enabling the RELAXED\_ESCAPES option while constructing an XPath regular expression using [CL\_ABAP\_REGEX=>CREATE\_XPATH2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_system_classes.htm), a character sequence \\x that does not appear in the table above or has no other special meaning will match a literal x. Otherwise, if the RELAXED\_ESCAPES option was disabled, a character sequence \\x will raise an exception.

Multi Character Escapes   

Syntax

Description

.

any character except line feed and carriage return

\\d

a digit (respecting Unicode character properties)

\\D

a character that is not a digit

\\p{xx}

a character with the xx Unicode character property (see below)

\\P{xx}

a character without the xx Unicode character property (see below)

\\s

a white space character (respecting Unicode character properties)

\\S

a character that is not a white space character

\\w

a word character (respecting Unicode character properties)

\\W

a non-word character

\\i

a character that may be the first character of an XML name

\\I

a character that may not be the first character of an XML name

\\c

a character that may occur after the first character in an XML name

\\C

a character that may not occur after the first character in an XML name

Category Escapes   

Syntax

Description

\\p{xx}

a character with the xx Unicode character property (see below)

\\P{xx}

a character without the xx Unicode character property (see below)

General Categories for Properties \\p and \\P

Based on the general categories as defined by the Unicode standard.

Category Identifier

Description

C

Other

Cc

Control

Cf

Format

Cn

Unassigned

Co

Private use

L

Letter

Ll

Lower case letter

Lm

Modifier letter

Lo

Other letter

Lt

Title case letter

Lu

Upper case letter

M

Mark

Mc

Spacing mark

Me

Enclosing mark

Mn

Non-spacing mark

N

Number

Nd

Decimal number

Nl

Letter number

No

Other number

P

Punctuation

Pc

Connector punctuation

Pd

Dash punctuation

Pe

Close punctuation

Pf

Final punctuation

Pi

Initial punctuation

Po

Other punctuation

Ps

Open punctuation

S

Symbol

Sc

Currency symbol

Sk

Modifier symbol

Sm

Mathematical symbol

So

Other symbol

Z

Separator

Zl

Line separator

Zp

Paragraph separator

Zs

Space separator

Block Names for Properties \\p and \\P

Based on the block names as defined by the Unicode standard.

The following block names can be used regardless of current UNICODE\_HANDLING:

Block Identifier

Start Code

End Code

IsBasicLatin

#x0000

#x007F

IsLatin-1Supplement

#x0080

#x00FF

IsLatinExtended-A

#x0100

#x017F

IsLatinExtended-B

#x0180

#x024F

IsIPAExtensions

#x0250

#x02AF

IsSpacingModifierLetters

#x02B0

#x02FF

IsCombiningDiacriticalMarks

#x0300

#x036F

IsGreek

#x0370

#x03FF

IsCyrillic

#x0400

#x04FF

IsArmenian

#x0530

#x058F

IsHebrew

#x0590

#x05FF

IsArabic

#x0600

#x06FF

IsSyriac

#x0700

#x074F

IsThaana

#x0780

#x07BF

IsDevanagari

#x0900

#x097F

IsBengali

#x0980

#x09FF

IsGurmukhi

#x0A00

#x0A7F

IsGujarati

#x0A80

#x0AFF

IsOriya

#x0B00

#x0B7F

IsTamil

#x0B80

#x0BFF

IsTelugu

#x0C00

#x0C7F

IsKannada

#x0C80

#x0CFF

IsMalayalam

#x0D00

#x0D7F

IsSinhala

#x0D80

#x0DFF

IsThai

#x0E00

#x0E7F

IsLao

#x0E80

#x0EFF

IsTibetan

#x0F00

#x0FFF

IsMyanmar

#x1000

#x109F

IsGeorgian

#x10A0

#x10FF

IsHangulJamo

#x1100

#x11FF

IsEthiopic

#x1200

#x137F

IsCherokee

#x13A0

#x13FF

IsUnifiedCanadianAboriginalSyllabics

#x1400

#x167F

IsOgham

#x1680

#x169F

IsRunic

#x16A0

#x16FF

IsKhmer

#x1780

#x17FF

IsMongolian

#x1800

#x18AF

IsLatinExtendedAdditional

#x1E00

#x1EFF

IsGreekExtended

#x1F00

#x1FFF

IsGeneralPunctuation

#x2000

#x206F

IsSuperscriptsandSubscripts

#x2070

#x209F

IsCurrencySymbols

#x20A0

#x20CF

IsCombiningMarksforSymbols

#x20D0

#x20FF

IsLetterlikeSymbols

#x2100

#x214F

IsNumberForms

#x2150

#x218F

IsArrows

#x2190

#x21FF

IsMathematicalOperators

#x2200

#x22FF

IsMiscellaneousTechnical

#x2300

#x23FF

IsControlPictures

#x2400

#x243F

IsOpticalCharacterRecognition

#x2440

#x245F

IsEnclosedAlphanumerics

#x2460

#x24FF

IsBoxDrawing

#x2500

#x257F

IsBlockElements

#x2580

#x259F

IsGeometricShapes

#x25A0

#x25FF

IsMiscellaneousSymbols

#x2600

#x26FF

IsDingbats

#x2700

#x27BF

IsBraillePatterns

#x2800

#x28FF

IsCJKRadicalsSupplement

#x2E80

#x2EFF

IsKangxiRadicals

#x2F00

#x2FDF

IsIdeographicDescriptionCharacters

#x2FF0

#x2FFF

IsCJKSymbolsandPunctuation

#x3000

#x303F

IsHiragana

#x3040

#x309F

IsKatakana

#x30A0

#x30FF

IsBopomofo

#x3100

#x312F

IsHangulCompatibilityJamo

#x3130

#x318F

IsKanbun

#x3190

#x319F

IsBopomofoExtended

#x31A0

#x31BF

IsEnclosedCJKLettersandMonths

#x3200

#x32FF

IsCJKCompatibility

#x3300

#x33FF

IsCJKUnifiedIdeographsExtensionA

#x3400

#x4DB5

IsCJKUnifiedIdeographs

#x4E00

#x9FFF

IsYiSyllables

#xA000

#xA48F

IsYiRadicals

#xA490

#xA4CF

IsHangulSyllables

#xAC00

#xD7A3

IsPrivateUse

#xE000

#xF8FF

IsCJKCompatibilityIdeographs

#xF900

#xFAFF

IsAlphabeticPresentationForms

#xFB00

#xFB4F

IsArabicPresentationForms-A

#xFB50

#xFDFF

IsCombiningHalfMarks

#xFE20

#xFE2F

IsCJKCompatibilityForms

#xFE30

#xFE4F

IsSmallFormVariants

#xFE50

#xFE6F

IsArabicPresentationForms-B

#xFE70

#xFEFE

IsSpecials

#xFEFF

#xFEFF

IsHalfwidthandFullwidthForms

#xFF00

#xFFEF

IsSpecials

#xFFF0

#xFFFD

The following block names can only be used when UNICODE\_HANDLING is set to STRICT or IGNORE, but not when set to RELAXED, as they do not overlap with the Basic Multilingual Plane:

Block Identifier

Start Code

End Code

IsByzantineMusicalSymbols

#x1D000

#x1D0FF

IsMusicalSymbols

#x1D100

#x1D1FF

IsMathematicalAlphanumericSymbols

#x1D400

#x1D7FF

IsCJKUnifiedIdeographsExtensionB

#x20000

#x2A6D6

IsCJKCompatibilityIdeographsSupplement

#x2F800

#x2FA1F

IsTags

#xE0000

#xE007F

Quantifiers   

Syntax

Description

?

0 or 1, greedy

??

0 or 1, lazy

\*

0 or more, greedy

\*?

0 or more, lazy

+

1 or more, greedy

+?

1 or more, lazy

{n}

exactly n

{n,m}

at least n, no more than m, greedy

{n,m}?

at least n, no more than m, lazy

{n,}

n or more, greedy

{n,}?

n or more, lazy

Grouping and Capturing   

Syntax

Description

(...)

capture group

(?:...)

non-capture group

Anchors   

Syntax

Description

^

start of subject (also after an internal line break, that is a line feed that does not occur at the end of the subject, in multiline mode)

$

end of subject (also before line break in multiline mode)

Backreferences   

Syntax

Description

\\n

reference by number n;
a capture group cannot be referenced from within itself;
a backreference can be followed by more digits; digits are only taken into account if the resulting number is smaller to or equal the amount of opening parentheses seen so far in the pattern; e.g. the pattern (a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)\\11 (that includes 11 capture groups) would match the string abcdefghijkk, but the pattern (a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)\\12 (that also includes 11 capture groups) would match the string abcdefghijka2

Alternation   

Syntax

Description

|

start of alternative branch

Character Classes   

Syntax

Description

\[...\]

positive character class

\[^...\]

negative character class

\[x-y\]

range

\[a-\[b\]\]

character class subtraction (can be nested)

Replacement Syntax   

The syntax of replacement patterns for XPath regular expressions is the same as for [PCRE regular expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax_specials.htm).