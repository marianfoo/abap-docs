  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

string\_func - case

Syntax

... ( ... case = case ...  ) ...

Effect

Searches and comparisons in string functions are case-sensitive by default, but this can be overridden, if necessary, using the parameter case. The argument case requires a constant or a literal of the type abap\_bool from the type pool ABAP with the value of the constants abap\_true or abap\_false. If case contains the value of abap\_true, the search is case-sensitive; if it contains the value of abap\_false, it is not.

Example

The result of the following function calls is 2 and 3.

DATA(result1) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_false ).
DATA(result2) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_true  ).