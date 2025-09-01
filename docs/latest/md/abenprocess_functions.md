  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20Processing%20Functions%2C%20ABENPROCESS_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - Processing Functions

The following processing functions have a character-like result. They can be declared at [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The return values have the type string.

-   [cmax, cmin - Character-Like Extreme Value Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_functions.htm)
-   [condense - Condense Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondense_functions.htm)
-   [concat\_lines\_of - Concatenation Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_functions.htm)
-   [escape - Escape Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm)
-   [insert\- Insert Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninsert_functions.htm)
-   [match - Match Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmatch_functions.htm)
-   [repeat - Repeat Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepeat_functions.htm)
-   [replace - Replace Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplace_functions.htm)
-   [reverse - Reverse Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreverse_functions.htm)
-   [segment - Segment Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensegment_functions.htm)
-   [shift\_left, shift\_right - Shift Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshift_functions.htm)
-   [substring, substring\_... - Substring Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubstring_functions.htm)
-   [to\_upper, to\_lower, to\_mixed, from\_mixed - Case Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm)
-   [translate - Translate Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm)

The function [boolc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) also has a return value of the type string and in principle is also one of these functions. It is handled, however, in accordance with its role as a [logical function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_function_glosry.htm "Glossary Entry").

Hints

-   The processing functions for character-like arguments ignore the trailing blanks for input parameters with fixed lengths.
-   The processing functions for character-like arguments cannot be used directly as operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") but can be used as operands of [descriptive functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescriptive_functions.htm).
-   The type string of the return values must be respected mainly when using functions in comparisons.

Continue
[string\_func - cmax, cmin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_functions.htm)
[string\_func - condense](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondense_functions.htm)
[string\_func - concat\_lines\_of](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_functions.htm)
[string\_func - escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm)
[string\_func - insert](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninsert_functions.htm)
[string\_func - match](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmatch_functions.htm)
[string\_func - repeat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepeat_functions.htm)
[string\_func - replace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplace_functions.htm)
[string\_func - reverse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreverse_functions.htm)
[string\_func - segment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensegment_functions.htm)
[string\_func - shift\_left, shift\_right](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshift_functions.htm)
[string\_func - substring, substring\_...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubstring_functions.htm)
[string\_func - to\_upper, to\_lower, to\_mixed, from\_mixed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm)
[string\_func - translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm)