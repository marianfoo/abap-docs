  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Shared Parameters of Character String Functions](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

occ - Occurrence

Syntax

... ( ... occ = occ ...  ) ...

Effect

In string functions that are being searched, the parameter occ specifies the occurrence of a match. occ is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of type i.

If occ is positive, the occurrences are counted from the left; if occ is negative, the they are counted from the right. The values 1, 2, .... indicate the first, second, ... occurrences. The values -1, -2, .... indicate the last, last but one, ... occurrences.

The default value of occ is 1. Except in the case of the replacement function [replace](javascript:call_link\('abenreplace_functions.htm'\)), the value 0 raises an exception from the class CX\_SY\_STRG\_PAR\_VAL. If replace has the value 0, all occurrences are replaced.

Note

The sign of occ also modifies the default values of [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)).

Example

The result of the following function calls is UX and XU.

DATA(result1) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ =  1 ).
DATA(result2) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ = -1 ).