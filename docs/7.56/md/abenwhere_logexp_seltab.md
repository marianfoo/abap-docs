  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)

sql\_cond - IN range\_tab

Syntax

... operand *\[*NOT*\]* IN @range\_tab ...

Effect

This variant of the operator IN checks whether the operands on the left side match a [ranges condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_condition_glosry.htm "Glossary Entry") in a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry"). The relational expression is true if the value of the operand operand is (not) in the result set described in the rows of the [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry") range\_tab specified as a [host variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm).

-   The following applies to operand:
    -   [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) can be specified.
    -   In a [HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.
-   Any internal table whose row type corresponds to that of a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry") can be specified for the ranges table range\_tab. This includes, in particular, [selection tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_table_glosry.htm "Glossary Entry").

The ranges table is evaluated in the same way as in [comparison expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_select_option.htm), with the difference that any comparisons using the operators CP and NP are transformed into [LIKE conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_like.htm) for which the ABAP SQL escape character "#" is defined. The pattern after CP or NP is transformed to a pattern for LIKE as follows:

-   If the ABAP SQL wildcard characters "%" are contained in the pattern, the "#" escape character is inserted in front of these characters.
-   Any wildcard characters "\*" and "+" that are not prefixed with the escape character "#" are transformed to the ABAP SQL wildcard characters "%" and "\_".
-   Any "#" escape characters that do not prefix themselves or the ABAP SQL wildcard characters "%" and "\_" are removed.

If the ranges table is initial, the expression IN range\_tab is always true. This overrides the general rule that the result of a [relational expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) is unknown if an operand has the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry").

The content of the columns LOW and HIGH in the ranges table must match the data type of the operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception.

Hints

-   LIKE conditions resulting from CP or NP are case-sensitive, which is not the case in ABAP comparison expressions.
-   If no conditions are specified apart from IN range\_tab, all rows of the data source are selected if the ranges table is initial.
-   The conditions specified in the ranges table are passed by the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry") to the database as SQL statement input values. The maximum number of input values depends on the database system and is usually between 2000 and 10000. If the maximum number is exceeded an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.
-   For an initial ranges table, no condition is passed to the database and therefore, the result is always true.
-   If the ranges table contains invalid values, an uncatchable exception is raised.
-   No [host expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm) can be specified on the right side whose result represents a ranges table.

Example

A ranges table is filled as follows and the order of the rows is not important:

SIGN  OPTION  LOW              HIGH
\---------------------------------------
I     EQ      01104711
I     BT      10000000         19999999
I     GE      90000000
E     EQ      10000911
E     BT      10000810         10000815
E     CP      1%2##3#+4++5\*

When used in sql\_cond, this generates the following combination of relational expressions:

... ( ID = '01104711'                      OR
      ID BETWEEN '10000000' AND '19999999' OR
      ID >= '90000000' )                     AND
    ID <> '10000911'                         AND
    ID NOT BETWEEN '10000810' AND '10000815' AND
    ID NOT LIKE '1#%2##3+4\_\_5%' ESCAPE '#'   ...

Example

Use of a selection table defined for a [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") with [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect-options_shortref.htm) in a WHERE clause.

DATA carrid TYPE spfli-carrid.
SELECT-OPTIONS airlines FOR carrid.
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       WHERE carrid IN @airlines
       INTO TABLE @DATA(flights).
cl\_demo\_output=>display( flights ).