  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) →  [sql\_cond - IN ( ... )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_in.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20operand%20IN%20%28%20...%20%29%2C%20ABENWHERE_LOGEXP_OPERAND_IN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

sql\_cond - operand IN ( ... )

Syntax

... operand *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                   *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm)*\]* ) *}* ...

Variants:

[1\. ... operand *\[*NOT*\]* IN (operand1*\[*, operand2*\[*, ...*\]**\]*)](#!ABAP_VARIANT_1@1@)
[2\. ... operand *\[*NOT*\]* IN ( SELECT subquery\_clauses \[UNION*|*INTERSECT*|*EXCEPT ...\] )](#!ABAP_VARIANT_2@2@)

Effect

Checks whether the value of an operand operand matches a value in a set of values specified in parentheses. The set of values can be specified as follows:

-   Using a comma-separated list of individual literals or host variables.
-   Using a [scalar subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscalar_subquery_glosry.htm "Glossary Entry").

The following applies to operand:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm) can be specified.
-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) can also be used in a [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause.

Variant 1   

... operand *\[*NOT*\]* IN (operand1*\[*, operand2*\[*, ...*\]**\]*)

Effect

This relational expression is true if the value of the operand operand matches (does not match) the content of one of the operands operand1, operand2 ... in a parenthesized comma-separated value list.

The following applies to operand1, operand2, ...:

-   [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm) and [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) can be specified.
-   The content of untyped literals and host variables must match the data type of operand in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP08 and can produce a syntax error or raise an exception.

It is also possible to specify just one operand operand1 in the parentheses. Blanks can be placed after the opening parenthesis, in front of the closing parenthesis, and after the commas. If blank is placed after the opening parenthesis, there must also be a blank in front of the closing parenthesis.

Hint

No columns [col](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm), no [host expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_expressions.htm), and no other [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) can be specified here on the right side. SQL expressions are, however, specified in the variant of IN with an [operand list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm).

Example

Reads the bookings in which the class is not in the value range (C - Business, F - First, Y - Economy) of the corresponding domain in the ABAP Dictionary.

SELECT \*
       FROM sbook
       WHERE class NOT IN ('C','F','Y')
       INTO TABLE @FINAL(sbook\_tab).
IF sy-subrc = 0.
  "Error handling
ENDIF.

Variant 2   

... operand *\[*NOT*\]* IN ( SELECT subquery\_clauses \[UNION*|*INTERSECT*|*EXCEPT ...\] )

Effect

This relational expression is true if the value of the operand operand is (is not) contained in the result set of a [subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry"). The clauses in the subquery [subquery\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) must represent a [scalar subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscalar_subquery_glosry.htm "Glossary Entry"). The [set operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_set_operators_glosry.htm "Glossary Entry") [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion_clause.htm) apply when specifying clauses.

Example

Reads the geographical latitude and longitude of a city from the DDIC database table SGEOCITY, where this city is the city of origin of a flight in the DDIC database table SPFLI.

DATA: carr\_id TYPE spfli-carrid VALUE 'LH',
      conn\_id TYPE spfli-connid VALUE '400'.
SELECT SINGLE city, latitude, longitude
       FROM sgeocity
       WHERE city IN ( SELECT cityfrom
                              FROM spfli
                              WHERE carrid = @carr\_id AND
                                    connid = @conn\_id )
       INTO (@FINAL(city), @FINAL(lati), @FINAL(longi)).