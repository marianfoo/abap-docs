  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) →  [sql\_cond - IN ( ... )](javascript:call_link\('abenwhere_logexp_in.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - operand IN ( ... )

Syntax

... operand *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                   *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...

Variants:

[1\. ... operand *\[*NOT*\]* IN (operand1*\[*, operand2*\[*, ...*\]**\]*)](#!ABAP_VARIANT_1@1@)
[2\. ... operand *\[*NOT*\]* IN ( SELECT subquery\_clauses \[UNION ...\] )](#!ABAP_VARIANT_2@2@)

Effect

Checks whether the value of an operand operand matches a value in a set of values specified in parentheses. The set of values can be specified as follows:

-   Using a comma-separated list of individual literals or host variables.

-   Using a [scalar subquery](javascript:call_link\('abenscalar_subquery_glosry.htm'\) "Glossary Entry").

The following applies to operand:

-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.

-   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can also be used in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.
    

Variant 1

... operand *\[*NOT*\]* IN (operand1*\[*, operand2*\[*, ...*\]**\]*)

Effect

This relational expression is true if the value of the operand operand matches (does not match) the content of one of the operands operand1, operand2 ... in a parenthesized comma-separated value list.

The following applies to operand1, operand2, ...:

-   [Literals](javascript:call_link\('abenabap_sql_host_literals.htm'\)) and [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) can be specified.

-   The content must match the data type of operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can produce a syntax error or raise an exception .

It is also possible to specify just one operand operand1 in the parentheses. Blanks can be placed after the opening parenthesis, in front of the closing parenthesis, and after the commas. If blank is placed after the opening parenthesis, there must also be a blank in front of the closing parenthesis.

Note

No columns [col](javascript:call_link\('abenopen_sql_columns.htm'\)), no [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), and no other [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified here on the right side. SQL expressions are, however, specified in the variant of IN with an [operand list](javascript:call_link\('abenwhere_logexp_list_in.htm'\)).

Example

Reads the bookings in which the class is not in the value range (C - Business, F - First, Y - Economy) of the corresponding domain in ABAP Dictionary.

SELECT \*
       FROM sbook
       WHERE class NOT IN ('C','F','Y')
       INTO TABLE @DATA(sbook\_tab).
IF sy-subrc = 0.
  "Error handling
ENDIF.

Variant 2

... operand *\[*NOT*\]* IN ( SELECT subquery\_clauses \[UNION ...\] )

Effect

This relational expression is true if the value of the operand operand is (is not) contained in the results set of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). The clauses in the subquery [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) must represent a [scalar subquery](javascript:call_link\('abenscalar_subquery_glosry.htm'\) "Glossary Entry"). The language element [UNION](javascript:call_link\('abapunion.htm'\)) can be used to combine the results sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply for specifying clauses.

Example

Reads the geographical latitude and longitude of a city from the database table SGEOCITY, where this city is the city of origin of a flight in the database table SPFLI.

DATA: carr\_id TYPE spfli-carrid VALUE 'LH',
      conn\_id TYPE spfli-connid VALUE '400'.
SELECT SINGLE city, latitude, longitude
       FROM sgeocity
       WHERE city IN ( SELECT cityfrom
                              FROM spfli
                              WHERE carrid = @carr\_id AND
                                    connid = @conn\_id )
       INTO (@DATA(city), @DATA(lati), @DATA(longi)).