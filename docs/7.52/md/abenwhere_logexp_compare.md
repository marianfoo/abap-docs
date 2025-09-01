  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - Relational Operators

Syntax

... operand1 operator operand2
                    *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) )*}* ...

Effect

This relational expression compares the content of the operand operand1 (in accordance with the relational operator operator) with the the content of the operand operand2 or with the result of a [scalar subquery](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)).

-   The following can be specified for operand1 on the right side:

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) of the [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or the target of a [write](javascript:call_link\('abenopen_sql_writing.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)).

-   Any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), which covers literals, host variables, and host expressions.

-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") (currently only in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause)

-   The following can be specified for operand2 on the right side:

-   A literal, a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a [host expression](javascript:call_link\('abenopen_sql_host_variables.htm'\)). The content of the operands should match the data type of operand1 in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception. The name of a host variable should be prefixed with the escape character @.

-   A [column](javascript:call_link\('abenopen_sql_columns.htm'\)) of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or the target of a [write](javascript:call_link\('abenopen_sql_writing.htm'\)) specified after FROM. Here, the column must be specified as [data\_source](javascript:call_link\('abapselect_data_source.htm'\))~comp or tabalias~comp using the [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry"). It must be possible to [compare](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) the data types on the left side and right side with each other.

-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") (currently only in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause)

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

-   If operand2 is a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), the value is converted (if necessary) to the data type that matches the type of the operand operand1 in accordance with the [ABAP conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) and the [tables of built-in types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)) before the statement is passed to the database. The following also applies:

-   Comparisons between columns or between SQL expressions or aggregate expressions and columns are performed in full on the database. No type conversions are made in ABAP beforehand. If the data types or lengths on the left and right side do not match, the resulting behavior depends entirely on the conversion rules of the database (however, fewer conversions are generally possible here than in ABAP). The platform-dependent behavior can produce different results or even SQL errors on individual platforms.

-   The decimal places are respected in comparisons between numeric types.

-   In greater than/less than comparisons with character-like types, the result can depend on the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used by the database system.

-   Trailing blanks are usually ignored in comparisons between character-like types.

-   In the case of columns that contain nothing but a blank character, it is the platform that determines how this blank is saved:

-   In the SAP HANA database and in MaxDB a single blank is saved as an empty string and not as specified by the code page in question.

-   In all other database and in [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"), a single blank is saved in accordance with the code page.

This means that the behavior produced when a value of this type is selected using size comparisons is determined by the platform and by buffering. More specifically, a single blank in the SAP HANA database and in MaxDB is not found in the interval of all possible characters.

Notes

-   The obsolete forms [\><, \=<, and \=>](javascript:call_link\('abenobsolete_logexp_op.htm'\)) of relational operators may still appear outside of classes.

-   Size comparisons for character-like operands should be avoided to prevent platform-dependent behavior. An exception here are simple cases, such as operands that contain only digits.

-   No columns of a data source can be specified for operand2 when [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") or [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") are accessed.

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
[sql\_cond - ALL, ANY, SOME](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))
[sql\_cond - Comparable Types](javascript:call_link\('abenwhere_logexp_compare_types.htm'\))