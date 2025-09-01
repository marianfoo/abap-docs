  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Description Functions for Character-Like Arguments](javascript:call_link\('abendescriptive_functions.htm'\)) → 

distance - Distance Function

Syntax

... distance( [val1 = text1](javascript:call_link\('abenstring_functions_val.htm'\)) [val2 = text2](javascript:call_link\('abenstring_functions_val.htm'\)) *\[*max = max*\]* ) ...

Effect

This function returns the Levenshtein distance between two strings [text1](javascript:call_link\('abenstring_functions_val.htm'\)) and [text2](javascript:call_link\('abenstring_functions_val.htm'\)). This distance is the minimum number of insert, delete, and replace operations required to change one string to another and hence reflects the similarity of the two strings. The return value has the type i.

max can be used to declare a positive value other than 0; the calculation of the Levenshtein distance is canceled if the distance is greater than max. The value of max is returned instead. max is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the type i. If the value of max is less than or equal to 0, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised. If max is not specified, the calculation is not terminated

Notes

-   The complexity of the function increases in line with the product of the lengths of the two strings. The calculation time can be limited by declaring max.

-   One typical application of this function is to find a word in a word set that is most similar to a word entered in a search.

Example

The result of the following function calls is 0, 1, and 3.

DATA(result1) = distance( val1 = \`abcdefg\` val2 = \`abcdefg\` ).
DATA(result2) = distance( val1 = \`abcdefg\` val2 = \`abcXefg\` ).
DATA(result3) = distance( val1 = \`abcdefg\` val2 = \`aXcdXXg\` ).

Executable Example

[String Functions, distance](javascript:call_link\('abenstring_function_distance_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Value in max is less than or equal to 0.
    Runtime error: STRG\_ILLEGAL\_PAR