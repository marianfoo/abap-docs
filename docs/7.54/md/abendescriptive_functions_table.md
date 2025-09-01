  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [Table Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_functions.htm) → 

lines - Row Function

Syntax

... lines( arg ) ...

Effect

The table function lines returns the number of rows (or lines) in an internal table. The argument arg is a [functional operand position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry") that expects an internal table. The return value has the type i.

Note

The function described here is one of the functions that can be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_functional_positions.htm), if its argument is a single data object.

Example

The number of rows in an internal table filled from a database table must match the number of rows on the database.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(itab).
SELECT COUNT(\*)
       FROM scarr
       INTO @DATA(lines).
ASSERT lines( itab ) = lines.