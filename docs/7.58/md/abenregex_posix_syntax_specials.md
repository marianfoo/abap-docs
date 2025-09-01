---
title: "POSIX regex - Special Characters (obsolete)"
description: |
  The following tables summarize the special characters in POSIX regular expressions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenposix_regex_glosry.htm 'Glossary Entry'). -   Escape Character(#abenregex-posix-syntax-specials-1-------special-characters-for-single-character-string
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax_specials.htm"
abapFile: "abenregex_posix_syntax_specials.htm"
keywords: ["do", "if", "case", "try", "data", "abenregex", "posix", "syntax", "specials"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expressions_obsolete.htm) →  [regex - POSIX Syntax (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSIX%20regex%20-%20Special%20Characters%20%28obsolete%29%2C%20ABENREGEX_POSIX_SYNTAX_SPECIALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

POSIX regex - Special Characters (obsolete)

The following tables summarize the special characters in [POSIX regular expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenposix_regex_glosry.htm "Glossary Entry").

-   [Escape Character](#abenregex-posix-syntax-specials-1-------special-characters-for-single-character-strings---@ITOC@@ABENREGEX_POSIX_SYNTAX_SPECIALS_2)
-   [Special Characters for Character String Patterns](#abenregex-posix-syntax-specials-3-------special-characters-for-search-patterns---@ITOC@@ABENREGEX_POSIX_SYNTAX_SPECIALS_4)
-   [Special Characters for Replacement Texts](#@@ITOC@@ABENREGEX_POSIX_SYNTAX_SPECIALS_5)

Escape Character   

Special Character

Meaning

\\

Escape character for special characters

Hint

The string function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm) can be used to prefix all special characters for regular expressions with their escape character.

Special Characters for Single Character Strings   

Special Character

Meaning

.

Placeholder for any single character

\\C

Placeholder for any single character

\\d

Placeholder for any digit

\\D

Placeholder for any non-digit character

\\l

Placeholder for any lowercase letter

\\L

Placeholder for any non-lowercase letter

\\s

Placeholder for a blank character

\\S

Placeholder for a non-blank character

\\u

Placeholder for any uppercase letter

\\U

Placeholder for any non-uppercase letter

\\w

Placeholder for any alphanumeric character including \_

\\W

Placeholder for any non-alphanumeric character except for \_

\[ \]

Definition of a value set for single characters

\[^ \]

Negation of a value set for single characters

\[ - \]

Definition of a range in a value set for single characters

\[\[:alnum:\]\]

Designation for all alphanumeric characters in a value set

\[\[:alpha:\]\]

Designation for all letters in a value set

\[\[:blank:\]\]

Designation for blank characters and horizontal tabulators in a value set

\[\[:cntrl:\]\]

Designation for all control characters in a value set

\[\[:digit:\]\]

Designation for all digits in a value set

\[\[:graph:\]\]

Designation for all displayable characters apart from blank characters and horizontal tabulators in a value set

\[\[:lower:\]\]

Designation for all lowercase letters in a value set

\[\[:print:\]\]

Designation for all displayable characters in a value set

\[\[:punct:\]\]

Designation for all punctuation marks in a value set

\[\[:space:\]\]

Designation for all blank characters, tabulators, carriage returns and line feeds in a value set

\[\[:unicode:\]\]

Designation for all Unicode characters in a value set with a code greater than 255

\[\[:upper:\]\]

Designation for all uppercase letters in a value set

\[\[:word:\]\]

Designation for all alphanumeric characters and \_ in a value set

\[\[:xdigit:\]\]

Designation for all hexadecimal digits in a value set

\\a \\f \\n \\r \\t \\v

Various platform-dependent control characters

\[..\]

Reserved for future enhancements

\[==\]

Reserved for future enhancements

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax_signs.htm)

Special Characters for Character String Patterns   

Special Character

Meaning

{n}

Chaining of n single characters

{n,m}

Chaining of at least n and a maximum of m single characters

{n,m}?

Reserved for future enhancements

?

One single character or no single characters

\*

Chaining of any number of single characters including 'no characters'

\*?

Reserved for future enhancements

+

Chaining of any number of single characters excluding 'no characters'

+?

Reserved for future enhancements

|

Combination of two alternative expressions

( )

Definition of subgroups with registration

(?: )

Definition of subgroups without registration

\\1, \\2, \\3 ...

Placeholder for the registration of subgroups

\\Q ... \\E

Definition of a string of literal characters

(? ... )

Reserved for future enhancements

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax_operators.htm)

Special Characters for Search Patterns   

Special Character

Meaning

^

Anchor character for the start of a line

\\A

Anchor character for the start of a character string

$

Anchor character for the end of a line

\\z

Anchor character for the end of a character string

\\Z

The same as for \\z. Line feeds at the end of the character string, however, are ignored

\\<

Start of a word

\\>

End of a word

\\b

Start or end of a word

\\B

Space between characters within a word

(?= )

Preview condition

(?! )

Negated preview condition

(?> )

Cut operator

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_search.htm)

Special Characters for Replacement Texts   

Special Character

Meaning

$0, $&

Placeholder for the entire occurrence

$1, $2, $3...

Placeholder for the registration of subgroups

$\`

Placeholder for the text in front of the occurrence

$'

Placeholder for the text after the occurrence

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_replace.htm)