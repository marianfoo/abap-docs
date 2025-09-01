  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions.htm) →  [Common Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_common_paras.htm) → 

occ - Occurrence

Syntax

... ( ... occ = occ ...  ) ...

Effect

In string functions that are being searched, the parameter occ specifies the occurrence of a match. occ is a [numeric expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of type i.

If occ is positive, the occurrences are counted from the left; if occ is negative, the they are counted from the right. The values 1, 2, .... indicate the first, second, ... occurrences. The values -1, -2, .... indicate the last, last but one, ... occurrences.

The default value of occ is 1. Except in the case of the replacement function [replace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreplace_functions.htm), the value 0 raises an exception from the class CX\_SY\_STRG\_PAR\_VAL.

Note

The sign of occ also modifies the default values of [off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm).

Example

The result of the following function calls is UX and XU.

DATA(result1) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ =  1 ).
DATA(result2) = replace( val = \`XX\` sub  = \`X\` with = \`U\` occ = -1 ).