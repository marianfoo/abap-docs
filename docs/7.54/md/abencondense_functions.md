  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Processing Functions for Character-Like Arguments](javascript:call_link\('abenprocess_functions.htm'\)) → 

condense - Condense Function

Syntax

... condense( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\)) *\[*del = del*\]* *\[*from = from*\]* *\[*to = to*\]* ) ...

Effect

This function returns the content of [text](javascript:call_link\('abenstring_functions_val.htm'\)), condensed as follows:

-   All leading and trailing characters specified in del are removed from the string in text. If del is an empty string, no characters are removed.

-   In the character string from text, all subsequences that are compiled from the characters in from are replaced by the first character in the character string specified in to. If from is an empty string, no characters are replaced. If to an empty string, the characters specified in from are removed from the character string.

The default values for del, from, and to are blank in each case. If del, from, and to are not specified, val = can also be omitted.

del, from, and to are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If they have a fixed length, trailing blanks are ignored.

The return code has the type string.

Notes

-   When the standard values for del, from, and to are specified, the condense function works in the same way as the [CONDENSE](javascript:call_link\('abapcondense.htm'\)) statement without the NO-GAPS addition.

-   By entering an empty string for from, the leading and trailing blanks can be removed without affecting the character string.

Example

The return codes of the following functions are "abc\_def", "abc\_\_\_def" and "abcXdef" (where "\_" stands for a blank).

DATA  result TYPE string.
result = condense( val = \`  abc   def  \` ).
result = condense( val = \`  abc   def  \` from = \`\` ).
result = condense( val = \`XXabcXXXdefXX\`
                   del = 'X' from = 'X' to = 'X' ).

Example

The return code of the following function call is "Rock'n'Roll".

DATA(result) = condense( val  = \`  Rock'xxx'Roller\`
                         del = \`re \`
                         from = \`x\` to = \`n\`  ).