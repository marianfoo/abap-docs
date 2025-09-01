---
title: "Syntax"
description: |
  ... operand NOT IN @seltab ... Effect This relational expression is true if the value of the operand operand is (not) in the results set described in the rows of the ranges table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm 'Glossary Entry') seltab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_seltab.htm"
abapFile: "abenwhere_logexp_seltab.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "internal-table", "abenwhere", "logexp", "seltab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

sql\_cond - IN seltab

Syntax

... operand *\[*NOT*\]* IN @seltab ...

Effect

This relational expression is true if the value of the operand operand is (not) in the results set described in the rows of the [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") seltab.

-   [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

-   Any internal table whose row type matches a ranges table can be specified for the ranges table seltab (whose name should be prefixed with the escape character @ like every [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm)). This includes, in particular, [selection tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_table_glosry.htm "Glossary Entry").

The ranges table is evaluated in the same way as in [comparison expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm), with the difference that any comparisons using the operators CP and NP are transformed into [LIKE conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_like.htm) for which the ABAP SQL escape character "#" is defined. The pattern after CP or NP is transformed to a pattern for LIKE as follows:

-   If the ABAP SQL wildcard characters "%" are contained in the pattern, the "#" escape character is inserted before these characters.

-   Any wildcard characters "\*" and "+" that are not prefixed with the escape character "#" are transformed to the ABAP SQL wildcard characters "%" and "\_".

-   Any "#" escape characters that do not prefix themselves or the ABAP SQL wildcard characters "%" and "\_" are removed.

If the selection table is initial, the expression IN seltab is always true.

The content of the columns LOW and HIGH in the ranges table must match the data type of the operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception.

Notes

-   LIKE conditions are case-sensitive, which is not the case in ABAP comparison expressions.

-   If no conditions are specified apart from IN seltab, all rows of the data source are selected if the ranges table is initial.

-   The conditions specified in the ranges table are passed by the [database interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_interface_glosry.htm "Glossary Entry") to the database as SQL statement input values. The maximum number of input values depends on the database system and is usually between 2000 and 10000. If the maximum number is exceeded an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

-   If the ranges table contains invalid values, an exception that cannot be handled is raised.

-   No [host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm) can be specified on the right side.

Example

A ranges table is filled as follows (the order of the rows is not important):

SIGN  OPTION  LOW              HIGH
\---------------------------------------
I     EQ      01104711
I     BT      10000000         19999999
I     GE      90000000
E     EQ      10000911
E     BT      10000810         10000815
E     CP      1%2##3#+4++5\*

When used in sql\_cond, this generates the following join of relational expressions:

... ( ID = '01104711'                      OR
      ID BETWEEN '10000000' AND '19999999' OR
      ID >= '90000000' )                     AND
    ID <> '10000911'                         AND
    ID NOT BETWEEN '10000810' AND '10000815' AND
    ID NOT LIKE '1#%2##3+4\_\_5%' ESCAPE '#'   ...

Example

Uses a selection table defined for a [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") with [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options_shortref.htm) in a WHERE clause.

DATA carrid TYPE spfli-carrid.
SELECT-OPTIONS airlines FOR carrid.
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       WHERE carrid IN @airlines
       INTO TABLE @DATA(flights).
cl\_demo\_output=>display( flights ).