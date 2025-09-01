  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

sql\_cond - Relational Operators

Syntax

... operand1 operator operand2
                    *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_all_any_some.htm) ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_subquery.htm) )*}* ...

Effect

This relational expression compares the content of the operand operand1 (in accordance with the relational operator operator) with the the content of the operand operand2 or with the result of a [scalar subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_all_any_some.htm).

-   The following can be specified for operand1 on the right side:

-   [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of the [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") or the target of a [write](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm).

-   Any [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), which covers literals, host variables, and host expressions.

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") (currently only in a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause)

-   The following can be specified for operand2 on the right side:

-   A literal, a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm), or a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm). The content of the operands must match the data type of operand1 in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception. The name of a host variable should be prefixed with the escape character @.

-   A [column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") or the target of a [write](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) specified after FROM. Here, the column must be specified as [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm)~comp or tabalias~comp using the [column selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comp_selector_glosry.htm "Glossary Entry"). It must be possible to [compare](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare_types.htm) the data types on the left side and right side with each other.

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") (currently only in a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause)

The following table shows the possible relational operators:

operator

Meaning

\=, EQ

True if the content of operand1 is equal to the content of operand2.

<>, NE

True if the content of operand1 is not equal to the content of operand2.

<, LT

True if the content of operand1 is less than the content of operand2.

\>, GT

True if the content of operand1 is greater than the content of operand2.

<=, LE

True if the content of operand1 is less than or equal to the content of operand2.

\>=, GE

True if the content of operand1 is greater than or equal to the content of operand2.

Note the following when using these operators:

-   If operand2 is a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) or a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm), the value is converted (if necessary) to the data type that matches the type of the operand operand1 in accordance with the [ABAP conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) and the [tables of built-in types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) before the statement is passed to the database. The following also applies:

-   Comparisons between columns or between SQL expressions or aggregate expressions and columns are performed in full on the database. No type conversions are made in ABAP beforehand. If the data types or lengths on the left and right side do not match, the resulting behavior depends entirely on the conversion rules of the database (however, fewer conversions are generally possible here than in ABAP). The platform-dependent behavior can produce different results or even SQL errors on individual platforms.

-   The decimal places are respected in comparisons between numeric types.

-   In greater than/less than comparisons with character-like types, the result can depend on the [code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry") used by the database system.

-   Trailing blanks are usually ignored in comparisons between character-like types.

-   In the case of columns that contain nothing but a blank character, it is the platform that determines how this blank is saved:

-   In the SAP HANA database and in MaxDB a single blank is saved as an empty string and not as specified by the code page in question.

-   In all other database and in [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry"), a single blank is saved in accordance with the code page.

This means that the behavior produced when a value of this type is selected using size comparisons is determined by the platform and by buffering. More specifically, a single blank in the SAP HANA database and in MaxDB is not found in the interval of all possible characters.

Notes

-   The obsolete forms [\><, \=<, and \=>](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_logexp_op.htm) of relational operators may still appear outside of classes.

-   Size comparisons for character-like operands should be avoided to prevent platform-dependent behavior. An exception here are simple cases, such as operands that contain only digits.

Example

Gets flights with a seat occupancy that is less than the entered value.

DATA seatsocc TYPE sflight-seatsocc.
cl\_demo\_input=>request( CHANGING field = seatsocc ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc < @seatsocc
       INTO TABLE @DATA(sflight\_tab).

Example

Gets overbooked flights.

SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc > sflight~seatsmax
       INTO TABLE @DATA(sflight\_tab).

Continue
[sql\_cond - ALL, ANY, SOME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_all_any_some.htm)
[sql\_cond - Comparable Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare_types.htm)