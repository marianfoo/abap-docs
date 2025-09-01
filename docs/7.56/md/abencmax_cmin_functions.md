  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - cmax, cmin

Syntax Forms

... cmax*|*cmin( [val1 = text1](javascript:call_link\('abenstring_functions_val.htm'\))  [val2 = text2](javascript:call_link\('abenstring_functions_val.htm'\))
              *\[* [val3 = text3](javascript:call_link\('abenstring_functions_val.htm'\))*\]* ... *\[* [val9 = text9](javascript:call_link\('abenstring_functions_val.htm'\))*\]* ) ...

Effect

These [built-in functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) return the value of the biggest or the smallest of the character-like arguments [text1](javascript:call_link\('abenstring_functions_val.htm'\)), [text2](javascript:call_link\('abenstring_functions_val.htm'\)), ... passed. The content of the arguments is compared from left to right in the evaluation. The first different character from the left determines which operand is bigger or smaller based on the order in the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used.

At least two arguments, [text1](javascript:call_link\('abenstring_functions_val.htm'\)) and [text2](javascript:call_link\('abenstring_functions_val.htm'\)), and a maximum of nine arguments must be passed. Here, the optional input parameters val3 through val9 must be filled in ascending order without gaps.

The return value has the type string.

Hints

-   The extremum functions [nmax](javascript:call_link\('abennmax_nmin_functions.htm'\)) and [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\)) can be used to determine numeric extreme values.
-   Character-like extremum functions, like numeric extremum functions, can be traced back to the equivalent control structures using comparison operators. Remember that, unlike with the usual [ABAP comparison rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)), shorter arguments of fixed lengths are not padded to the length of longer arguments by padding them with blanks.
-   As in comparisons with comparison operators, the current [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") is not significant when determining the extreme values.

Example

The example demonstrates how to find the smallest and largest letters of a random set, which is represented here by the lines of an internal table. Of course, in this case the result can also be achieved by sorting the internal table, which is used here for verification.

TYPES itab TYPE TABLE OF char1 WITH EMPTY KEY.
DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 0 max = strlen( sy-abcde ) - 1 ).
DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 9
                         LET off = rnd->get\_next( ) IN
                         ( sy-abcde+off(1) ) ).
DATA(min) =  cmin( val1 = itab\[ 1 \]
                   val2 = itab\[ 2 \]
                   val3 = itab\[ 3 \]
                   val4 = itab\[ 4 \]
                   val5 = itab\[ 5 \]
                   val6 = itab\[ 6 \]
                   val7 = itab\[ 7 \]
                   val8 = itab\[ 8 \]
                   val9 = itab\[ 9 \] ).
DATA(max) =  cmax( val1 = itab\[ 1 \]
                   val2 = itab\[ 2 \]
                   val3 = itab\[ 3 \]
                   val4 = itab\[ 4 \]
                   val5 = itab\[ 5 \]
                   val6 = itab\[ 6 \]
                   val7 = itab\[ 7 \]
                   val8 = itab\[ 8 \]
                   val9 = itab\[ 9 \] ).
SORT itab BY table\_line.
ASSERT min = itab\[ 1 \].
ASSERT max = itab\[ lines( itab ) \].

Executable Example

[String functions cmax, cmin, and segment](javascript:call_link\('abencmax_cmin_function_abexa.htm'\)).