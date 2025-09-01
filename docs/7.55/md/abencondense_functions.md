  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - condense

Syntax

... condense( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\)) *\[*del = del*\]* *\[*from = from*\]* *\[*to = to*\]* ) ...

Effect

This function returns the condensed content of [text](javascript:call_link\('abenstring_functions_val.htm'\)). If none of the optional arguments are specified, the condense function removes any leading and trailing blanks from the character string from the argument text. Furthermore, all substrings that contain nothing but blanks are replaced by exactly one blank.

Passing parameters to the optional arguments has the following effect:

-   If del is specified, all leading and trailing characters specified in del are removed from the character string from text. If del is an empty string, no characters are removed.

-   If from or to are specified, in the string from text, all substrings that are made up from the characters specified in from are replaced by the first character in the character string specified in to. If from is an empty string, no characters are replaced. If to an empty string, the characters specified in from are removed from the character string.

The default values for del, from, and to are one blank each. If neither del, from, nor to are specified, val = can also be omitted.

del, from, and to are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If these have a fixed length, trailing blanks are ignored.

The return value has the type string.

Hints

-   When del, from, and to are not specified or their default values are passed, the condense function works in the same way as the [CONDENSE](javascript:call_link\('abapcondense.htm'\)) statement without the NO-GAPS addition.

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