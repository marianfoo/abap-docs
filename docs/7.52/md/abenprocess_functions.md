  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) → 

Processing Functions for Character-Like Arguments

The following processing functions have a character-like result. They can be declared at [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The return values have the type string.

-   [cmax, cmin - character-like extreme value functions](javascript:call_link\('abencmax_cmin_functions.htm'\))

-   [condense - condense function](javascript:call_link\('abencondense_functions.htm'\))

-   [concat\_lines\_of - concatenation function](javascript:call_link\('abenconcatenation_functions.htm'\))

-   [escape - escape function](javascript:call_link\('abenescape_functions.htm'\))

-   [insert - insert function](javascript:call_link\('abeninsert_functions.htm'\))

-   [match - match function](javascript:call_link\('abenmatch_functions.htm'\))

-   [repeat - repeat function](javascript:call_link\('abenrepeat_functions.htm'\))

-   [replace - replace function](javascript:call_link\('abenreplace_functions.htm'\))

-   [reverse - reverse function](javascript:call_link\('abenreverse_functions.htm'\))

-   [segment - segment function](javascript:call_link\('abensegment_functions.htm'\))

-   [shift\_left, shift\_right - shift functions](javascript:call_link\('abenshift_functions.htm'\))

-   [substring, substring\_... - substring functions](javascript:call_link\('abensubstring_functions.htm'\))

-   [to\_upper, to\_lower, to\_mixed, from\_mixed - case functions](javascript:call_link\('abencase_functions.htm'\))

-   [translate - translate function](javascript:call_link\('abentranslate_functions.htm'\))

The function [boolc](javascript:call_link\('abenboole_functions.htm'\)) also has a return value of the type string and is (in principle) also one of these functions. It is handled, however, in accordance with its role as a [logical function](javascript:call_link\('abenlogic_function_glosry.htm'\) "Glossary Entry").

Notes

-   The processing functions for character-like arguments ignore the trailing blanks for input parameters with fixed lengths.

-   The processing functions for character-like arguments cannot be used directly as operands of [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), but can be used as operands of [descriptive functions](javascript:call_link\('abendescriptive_functions.htm'\)).

-   The type string of the return values must be respected mainly when using functions in comparisons.

Continue
[cmax, cmin - Character-Like Extreme Value Functions](javascript:call_link\('abencmax_cmin_functions.htm'\))
[condense - Condense Function](javascript:call_link\('abencondense_functions.htm'\))
[concat\_lines\_of - Concatenation Function](javascript:call_link\('abenconcatenation_functions.htm'\))
[escape - Escape Function](javascript:call_link\('abenescape_functions.htm'\))
[insert - Insert Function](javascript:call_link\('abeninsert_functions.htm'\))
[match - Match Function](javascript:call_link\('abenmatch_functions.htm'\))
[repeat - Repeat Function](javascript:call_link\('abenrepeat_functions.htm'\))
[replace - Replace Function](javascript:call_link\('abenreplace_functions.htm'\))
[reverse - Reverse Function](javascript:call_link\('abenreverse_functions.htm'\))
[segment - Segment Function](javascript:call_link\('abensegment_functions.htm'\))
[shift\_left, shift\_right - Shift Functions](javascript:call_link\('abenshift_functions.htm'\))
[substring, substring\_... - Substring Functions](javascript:call_link\('abensubstring_functions.htm'\))
[to\_upper, to\_lower, to\_mixed, from\_mixed -](javascript:call_link\('abencase_functions.htm'\))
[translate - Translate Function](javascript:call_link\('abentranslate_functions.htm'\))