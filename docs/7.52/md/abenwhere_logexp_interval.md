  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)

sql\_cond - BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

This relational expression is true if the content of the operand operand is (is not) between the values of the operands operand1 and operand2.

-   [Columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) and numeric [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) can be specified for operand. This covers the corresponding literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

-   The following can be specified for operand1 and operand2:

-   Literals

-   [Host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) whose name is prefixed with the escape character @.

-   [Host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_expressions.htm)

-   Numeric [columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) that must be prefixed with the name of the [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) using ~. In this case, operand must also be numeric.

The interval limits are included. The content of operand1 and operand2 should match the data type of operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is also checked by the [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception.

The comparison is made in the same way as for

... [*\[*NOT*\]* ( operand >= operand1 AND operand <= operand2 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) ...

and the corresponding rules and notes apply.

Example

Reads all flights within the next 30 days.

DATA(date) = conv d( sy-datum + 30 ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE fldate BETWEEN @sy-datum AND @date
       INTO TABLE @DATA(sflight\_tab).