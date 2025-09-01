  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) →  [sql\_cond - IN ( ... )](javascript:call_link\('abenwhere_logexp_in.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - ( operand1, operand2, ... ) IN ( ... )

Syntax

... ( operand1, operand2*\[*, ...*\]* ) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                         ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                   *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...

Variants:

[1\. ... ( operand1, operand2*\[*, ...*\]* ) IN ( ( operand11, operand21*\[*, ...*\]* )*\[*, ...*\]* ) )](#!ABAP_VARIANT_1@1@)
[2\. ... ( operand1, operand2*\[*, ...*\]* ) IN ( SELECT subquery\_clauses \[UNION ...\] )](#!ABAP_VARIANT_2@2@)

Effect

Checks whether the values of the operands operand1, operand2, ... specified on the left side as a parenthesized comma-separated list match a value tuple from a set of value tuples specified in parentheses. The set of value tuples can be specified as follows:

-   Using a comma-separated list of parenthesized tuples ( operand11, operand21\[, ...\] ), ( operand12, operand22\[, ...\] ), ...
-   Using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry")

The following applies to operand1, operand2, ...:

-   Any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
-   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can be used in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.

At least one blank must be placed after every opening parenthesis and in front of every closing parenthesis. The comma-separated list operand1, operand2, ... must contain at least two elements.

Hint

The operator NOT is not currently supported.

Variant 1   

... ( operand1, operand2*\[*, ...*\]* ) IN ( ( operand11, operand21*\[*, ...*\]* )*\[*, ...*\]* ) )

Effect

This relational expression is true if the value of every operand operand1, operand2, ... on the left side matches the content of the operand of a parenthesized value tuple ( operand11, operand21\[, ...\] ) in the same place on the right side. Every value tuple must contain the same number of elements as the comma-separated list operand1, operand2, ... on the left side. The value tuples themselves are specified as a parenthesized comma-separated list, which can also consist of only one element.

operand11, operand21, ... of a value tuple can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [window expressions](javascript:call_link\('abapselect_over.htm'\)). [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) are currently only possible in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause. [Literals](javascript:call_link\('abenabap_sql_literals.htm'\)), [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)), and [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) are handled like [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)), which means they are mapped to dictionary types instead of being converted.

Hints

-   This variant of IN can also be expressed using individual comparisons combined using AND and OR and the [comparison operator \=](javascript:call_link\('abenwhere_logexp_compare.htm'\)), but SQL expressions are not possible on the right side. This is also how this variant of IN is distinguished from the variant with a [single operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)).
-   When this variant of IN is used, ABAP SQL bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").
-   When used, this variant of IN, applies the [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

The query finds all rows in which the values of the three columns on the left side match one of the two value tuples on the right side.

DATA cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt'.
DATA cityto   TYPE spfli-cityto   VALUE 'New York'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = cityfrom
  )->add\_field( CHANGING field = cityto
  )->request( ).
cityfrom =  to\_upper( cityfrom ).
cityto   =  to\_upper( cityto ).
SELECT \*
       FROM spfli
       WHERE ( carrid, cityfrom, cityto )
         IN ( ( 'LH', @cityfrom, @cityto ),
              ( 'UA', @cityfrom, @cityto ) )
       INTO TABLE @DATA(itab).
cl\_demo\_output=>display( itab ).

Variant 2   

... ( operand1, operand2*\[*, ...*\]* ) IN ( SELECT subquery\_clauses \[UNION ...\] )

Effect

This relational expression is true if the value of every operand operand1, operand2, ... on the left side matches the content of the result set of the [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). The result set of the subquery must contain the same number of elements in the same position as in the comma-separated list operand1, operand2, ... on the left side. The language element [UNION](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, the rules for [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply.

Hint

When used, this variant of IN applies the [strict mode from Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Example

Reads the country of origin and the country of destination from the DDIC database table SPFLI for all flights which cost more than USD 100.The condition 'price > 100' is checked in a subquery that reads from the DDIC database table SFLIGHT.

SELECT countryfr, countryto
       FROM spfli
       WHERE ( carrid,connid ) IN ( SELECT carrid,connid
                                           FROM sflight
                                           WHERE price > 100 )
       INTO TABLE @DATA(result).