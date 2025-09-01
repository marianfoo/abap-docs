  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Common Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_common_paras.htm) → 

case - Uppercase and Lowercase

Syntax

... ( ... case = case ...  ) ...

Effect

Searches and comparisons in string functions are case-sensitive by default, but this can be overridden if necessary using the parameter case. The argument case requires a constant or a literal of the type ABAP\_BOOL from the type group ABAP with the value of the constants ABAP\_TRUE or ABAP\_FALSE. If case contains the value of ABAP\_TRUE, the search is case-sensitive; if it contains the value of ABAP\_FALSE, the search is not case-sensitive.

Example

The result of the following function calls is 2 and 3.

DATA(result1) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_false ).
DATA(result2) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_true  ).