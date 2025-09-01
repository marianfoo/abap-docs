---
title: "XSD regex - Special Characters"
description: |
  The following tables summarize the special characters in XSD regular expressions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsd_regex_glosry.htm 'Glossary Entry'). -   Pattern Syntax(#abenregex-xsd-syntax-specials-1-----------single-character-escapes---@ITOC@@ABENREGEX_XSD_SY
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_xsd_syntax_specials.htm"
abapFile: "abenregex_xsd_syntax_specials.htm"
keywords: ["do", "while", "if", "case", "try", "class", "data", "abenregex", "xsd", "syntax", "specials"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) →  [regex - XSD Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_xsd_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: XSD regex - Special Characters, ABENREGEX_XSD_SYNTAX_SPECIALS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

XSD regex - Special Characters

The following tables summarize the special characters in [XSD regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsd_regex_glosry.htm "Glossary Entry").

-   [Pattern Syntax](#abenregex-xsd-syntax-specials-1-----------single-character-escapes---@ITOC@@ABENREGEX_XSD_SYNTAX_SPECIALS_2)
    -   [Character Escapes](#abenregex-xsd-syntax-specials-3-----------category-escapes---@ITOC@@ABENREGEX_XSD_SYNTAX_SPECIALS_4)
    -   [Quantifiers](#abenregex-xsd-syntax-specials-5-----------grouping-and-capturing---@ITOC@@ABENREGEX_XSD_SYNTAX_SPECIALS_6)
    -   [Alternation](#abenregex-xsd-syntax-specials-7-----------character-classes---@ITOC@@ABENREGEX_XSD_SYNTAX_SPECIALS_8)
-   [Replacement Syntax](#@@ITOC@@ABENREGEX_XSD_SYNTAX_SPECIALS_9)

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

literal \\|

\\.

literal .

\\-

literal \-

\\^

literal ^

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

When enabling the RELAXED\_ESCAPES option while constructing an XSD regular expression using [CL\_ABAP\_REGEX=>CREATE\_XSD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm), a character sequence \\x that does not appear in the table above or has no other special meaning will match a literal x. Otherwise, if the RELAXED\_ESCAPES option was disabled, such a character sequence \\x will raise an exception.

Character Escapes   

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

a "word" character (respecting Unicode character properties)

\\W

a "non-word" character

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

#xA490<

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

\*

0 or more, greedy

+

1 or more, greedy

{n}

exactly n

{n,m}

at least n, no more than m, greedy

{n,}

n or more, greedy

Lazy quantifiers (also known as reluctant quantifiers) are not supported.

Grouping and Capturing   

Syntax

Description

(...)

capture group

Technically the concept of capturing groups does not exist in the XSD standard as there are no pure standard means to refer to the content of a group. As the ABAP implementation of XSD regular expressions allows for a PCRE-style replacement syntax, all groups are regarded as capturing.

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

While the XSD standard only defines the match operation for regular expressions, the ABAP implementation also allows all other operations as defined by [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) and [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm).

The syntax of replacement patterns for XSD regular expressions is the same as for [PCRE regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm).