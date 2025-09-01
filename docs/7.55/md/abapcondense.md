  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

CONDENSE

[Short Reference](javascript:call_link\('abapcondense_shortref.htm'\))

Syntax

CONDENSE text *\[*NO-GAPS*\]*.

Effect

The CONDENSE statement removes any leading and trailing blanks from the variable text.

-   Without the optional NO-GAPS addition, all substrings that contain nothing but blanks are replaced by exactly one blank.

-   With the optional NO-GAPS addition, all substrings that contain nothing but blanks are removed completely.

The data object text must be character-like. If the data object has a fixed length, the space created by condensing is padded with blanks on the right. If the data object is of the type string, its length is adapted to the result of the condensing.

Hint

A character string can also be condensed in an operand position using a [condense function](javascript:call_link\('abencondense_functions.htm'\)) that includes the functions of the statement CONDENSE.

Example

The [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") sentence contains only character-like components and can therefore be assigned to the string text. After the condensing using the statement CONDENSE, text contains "She feeds you tea and oranges". Before condensing, the words in text are 30 places apart from one another.

DATA: BEGIN OF sentence,
        word1 TYPE c LENGTH 30 VALUE 'She',
        word2 TYPE c LENGTH 30 VALUE 'feeds',
        word3 TYPE c LENGTH 30 VALUE 'you',
        word4 TYPE c LENGTH 30 VALUE 'tea',
        word5 TYPE c LENGTH 30 VALUE 'and',
        word6 TYPE c LENGTH 30 VALUE 'oranges',
      END OF sentence,
      text TYPE string.
text = sentence.
CONDENSE text.