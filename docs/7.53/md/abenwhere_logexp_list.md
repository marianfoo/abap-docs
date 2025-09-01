  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

sql\_cond - IN ( ..., ... )

Syntax

... operand *\[*NOT*\]* IN (operand1, operand2 ... ) ...

Effect

This relational expression is true if the value of the operand operand matches (does not match) the content of one of the operands operand1, operand2 ... in a parenthesized comma-separated value list.

-   [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

-   The following can be specified for operand1, operand2, ...:

-   Literals

-   [Host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) whose name is prefixed with the escape character @.

The content of the operands operand1, operand2, ... Must match the data type of operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is also checked by the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception.

Note

No columns and no [host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm) can be specified here on the right side.

Example

Reads the bookings in which the class is not in the value range (C - Business, F - First, Y - Economy) of the corresponding domain in ABAP Dictionary.

SELECT \*
       FROM sbook
       WHERE class NOT IN ('C','F','Y')
       INTO TABLE @DATA(sbook\_tab).
IF sy-subrc = 0.
  "Error handling
ENDIF.