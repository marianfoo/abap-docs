  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [itab - Table Functions (table\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: table_func - lines, ABENDESCRIPTIVE_FUNCTIONS_TABLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

table\_func - lines

Syntax

... lines( arg ) ...

Effect

The [built-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) table function lines returns the number of lines in an internal table. The argument arg is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry") that expects an internal table. The return value has the type i.

Hint

The function specified here is one of the functions that can be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm) if its argument is a single data object.

Example

The number of lines in an internal table filled from a database table must match the number of lines on the database.

SELECT carrid
       FROM scarr
       INTO TABLE @FINAL(itab).
SELECT COUNT(\*)
       FROM scarr
       INTO @FINAL(lines).
ASSERT lines( itab ) = lines.