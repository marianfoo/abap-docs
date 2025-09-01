  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - occ, ABENSTRING_FUNCTIONS_OCC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

string\_func - occ

Syntax

... ( ... occ = occ ...  ) ...

Effect

In string functions where searches are performed, the parameter occ specifies the occurrence of a match. occ is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of type i.

If occ is positive, the occurrences are counted from the left; if occ is negative, they are counted from the right. The values 1, 2, .... indicate the first, second, ... occurrences. The values -1, -2, .... indicate the last, last but one, ... occurrences.

The default value of occ is 1. Except in the case of the replacement function [replace](javascript:call_link\('abenreplace_functions.htm'\)), the value 0 raises an exception from the class CX\_SY\_STRG\_PAR\_VAL. If replace is used, the value 0 replaces all occurrences.

Hint

The sign of occ also affects the default values of [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)).

Example

The result of the following function calls is UX and XU.

FINAL(result1) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ =  1 ).
FINAL(result2) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ = -1 ).