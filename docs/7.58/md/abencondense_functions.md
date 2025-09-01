---
title: "Syntax"
description: |
  ... condense( val = text(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm) del = del from = from to = to ) ... Effect This built-in function(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.ht
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencondense_functions.htm"
abapFile: "abencondense_functions.htm"
keywords: ["do", "if", "try", "data", "abencondense", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20condense%2C%20ABENCONDENSE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - condense

Syntax

... condense( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm) *\[*del = del*\]* *\[*from = from*\]* *\[*to = to*\]* ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) returns a condensed content of [text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_val.htm). The function works as follows:

1.  First, all leading and trailing characters are removed, that are specified in del. If del is an empty string, no leading and trailing characters are removed.
2.  Second, in the remaining string all substrings composed of characters specified in from are replaced with the first character of the string specified in to. If from is an empty string, no characters are replaced. If to is an empty string, the characters specified in from are removed.

The default values for del, from, and to are one blank each. If neither del, from, nor to are specified, val = can also be omitted. Then, the condense function first removes any leading and trailing blanks and then all substrings of the remaining character string that contain nothing but blanks are replaced by exactly one blank.

del, from, and to are [character-like expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If these have a fixed length, trailing blanks are ignored.

The return value has the type string.

Hints

-   Comparison with the [CONDENSE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcondense.htm) statement:
    -   When del, from, and to are not specified or their default values (one blank) are passed, the condense function works in the same way as the [CONDENSE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcondense.htm) statement without the NO-GAPS addition.
    -   When for del and from their default values (one blank) are passed and for to an empty string is passed, the condense function works in the same way as the [CONDENSE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcondense.htm) statement with the NO-GAPS addition.
-   When using default values, the effect of condensing substrings containing nothing than blanks to one blank, comes from applying the default values for from and to and has nothing to do with the value of del.
-   For removing the leading and trailing blanks without affecting the remaining character string, you can use the default value for del and an empty string for from. The latter must be specified explicitly, because the default value (blank) causes substrings consisting of blanks to be replaced by the first character from to, which also is a blank.
-   Specifying a text field literal ' ' containing one blank for del, from, and to is the same as specifying \`\` but not the same as\` \` \`. Only the latter represents the default value.

Example

The return values of the following functions are abc\_def, abc\_\_\_def, abcdef and abcXdef, where \_ stands for a blank.

DATA result TYPE string.
result = condense( val = \`  abc   def  \` ).
result = condense( val = \`  abc   def  \` from = \`\` ).
result = condense( val = \`  abc   def  \` to = \`\` ).
result = condense( val = \`XXabcXXXdefXX\`
                   del = 'X' from = 'X' to = 'X' ).

Example

The return value of the following function call is Rock'n'Roll.

FINAL(result) = condense( val  = \`  Rock'xxx'Roller\`
                         del  = \`re \`
                         from = \`x\` to = \`n\`  ).