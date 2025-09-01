  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_shortref.htm)

sql\_cond - BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

This relational expression is true if the content of the operand operand is (is not) between the values of the operands operand1 and operand2.

-   The following applies for operand:

-   Numeric [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm) can be specified.

-   A column specified individually [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) cannot be numeric.

-   In a [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

-   The following applies for operand1 and operand2:

-   Elementary [SQL operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_operands.htm) can be specified.

-   Columns [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) need to have a numeric data type and they need to be prefixed with the name of the [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) using ~. In this case, operand must also be numeric.

-   The content of ABAP objects, meaning literals, host variables, and host expressions must match the data type of operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is also checked by the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception .

The interval limits are included. The comparison is made in the same way as for

... [*\[*NOT*\]* ( operand >= operand1 AND operand <= operand2 )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm) ...

and the corresponding rules and notes apply.

Example

Reads all flights within the next 30 days.

DATA(date) = conv d( sy-datum + 30 ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE fldate BETWEEN @sy-datum AND @date
       INTO TABLE @DATA(sflight\_tab).