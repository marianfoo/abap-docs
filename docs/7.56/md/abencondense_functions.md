  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocess_functions.htm) → 

string\_func - condense

Syntax

... condense( [*\[*val =*\]* text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm) *\[*del = del*\]* *\[*from = from*\]* *\[*to = to*\]* ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) returns the condensed content of [text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm). If none of the optional arguments are specified, the condense function removes any leading and trailing blanks from the character string from the argument text. Furthermore, all substrings that contain nothing but blanks are replaced by exactly one blank.

Passing parameters to the optional arguments has the following effect:

-   If del is specified, all leading and trailing characters specified in del are removed from the character string from text. If del is an empty string, no characters are removed.
-   If from or to are specified, in the string from text, all substrings that are made up from the characters specified in from are replaced by the first character in the character string specified in to. If from is an empty string, no characters are replaced. If to an empty string, the characters specified in from are removed from the character string.

The default values for del, from, and to are one blank each. If neither del, from, nor to are specified, val = can also be omitted.

del, from, and to are [character-like expression positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If these have a fixed length, trailing blanks are ignored.

The return value has the type string.

Hints

-   When del, from, and to are not specified or their default values are passed, the condense function works in the same way as the [CONDENSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcondense.htm) statement without the NO-GAPS addition.
-   If an empty string is specified for from, the leading and trailing blanks can be removed without affecting the character string.

Example

The return values of the following functions are "abc\_def", "abc\_\_\_def" and "abcXdef", where "\_" stands for a blank.

DATA result TYPE string.
result = condense( val = \`  abc   def  \` ).
result = condense( val = \`  abc   def  \` from = \`\` ).
result = condense( val = \`XXabcXXXdefXX\`
                   del = 'X' from = 'X' to = 'X' ).

Example

The return value of the following function call is "Rock'n'Roll".

DATA(result) = condense( val  = \`  Rock'xxx'Roller\`
                         del  = \`re \`
                         from = \`x\` to = \`n\`  ).