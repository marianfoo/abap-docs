  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Write%20Positions%2C%20ABENTABLE_EXP_LHS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Write Positions

Table expressions and their [chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) can be specified as [writable expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in [result positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry"). The result of a table expression in these positions is always a temporary field symbol.

-   If a single table expression is specified, or a [chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) whose last position is a table expression, the entire line found is modified in the write position.
-   If a [chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) is specified whose last position is a structure component after a structure component selector, this component is modified in the write position.

In the case of writes performed on the temporary field symbol, the same rules apply as to a field symbol assigned a table line using [READ TABLE ASSIGNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm). More specifically, the read-only character of key fields must be respected. Table expressions that return a line of a sorted table or hashed table to write positions such as the left side of an assignment or as actual parameters for output parameters always raise an exception.

Hint

The constructor operators VALUE and REF used to control the [result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_result.htm) of the table expression cannot be used in write positions.

Example

An internal table is prefilled with initial lines, which are overwritten with a value in the [DO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdo.htm) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 5 ( ) ).
DO lines( itab ) TIMES.
  itab\[ sy-index \] = sy-index \*\* 2.
ENDDO.

Executable Example

[Table Expressions, Write Position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_changing_abexa.htm)

Continue
![Example](exa.gif "Example") [table\_exp - Write Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_changing_abexa.htm)