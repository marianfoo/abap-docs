  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) → 

Processing Functions for Character-Like Arguments

The following processing functions have a character-like result. They can be declared at [general expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The return values have the type string.

-   [cmax, cmin - Character-Like Extreme Value Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencmax_cmin_functions.htm)

-   [condense - Condense Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencondense_functions.htm)

-   [concat\_lines\_of - Concatenation Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconcatenation_functions.htm)

-   [escape - Escape Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm)

-   [insert\- Insert Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninsert_functions.htm)

-   [match - Match Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatch_functions.htm)

-   [repeat - Repeat Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepeat_functions.htm)

-   [replace - Replace Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreplace_functions.htm)

-   [reverse - Reverse Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreverse_functions.htm)

-   [segment - Segment Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensegment_functions.htm)

-   [shift\_left, shift\_right - Shift Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshift_functions.htm)

-   [substring, substring\_... - Substring Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm)

-   [to\_upper, to\_lower, to\_mixed, from\_mixed - Case Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencase_functions.htm)

-   [translate - Translate Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentranslate_functions.htm)

The function [boolc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboole_functions.htm) also has a return value of the type string and is (in principle) also one of these functions. It is handled, however, in accordance with its role as a [logical function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogic_function_glosry.htm "Glossary Entry").

Notes

-   The processing functions for character-like arguments ignore the trailing blanks for input parameters with fixed lengths.

-   The processing functions for character-like arguments cannot be used directly as operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), but can be used as operands of [descriptive functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescriptive_functions.htm).

-   The type string of the return values must be respected mainly when using functions in comparisons.

Continue
[cmax, cmin - Character-Like Extreme Value Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencmax_cmin_functions.htm)
[condense - Condense Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencondense_functions.htm)
[concat\_lines\_of - Concatenation Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconcatenation_functions.htm)
[escape - Escape Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm)
[insert - Insert Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninsert_functions.htm)
[match - Match Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatch_functions.htm)
[repeat - Repeat Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepeat_functions.htm)
[replace - Replace Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreplace_functions.htm)
[reverse - Reverse Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreverse_functions.htm)
[segment - Segment Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensegment_functions.htm)
[shift\_left, shift\_right - Shift Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshift_functions.htm)
[substring, substring\_... - Substring Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm)
[to\_upper, to\_lower, to\_mixed, from\_mixed -](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencase_functions.htm)
[translate - Translate Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentranslate_functions.htm)