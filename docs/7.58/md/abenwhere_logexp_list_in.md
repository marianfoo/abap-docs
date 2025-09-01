---
title: "Syntax"
description: |
  ... ( operand1, operand2, ... ) IN  ( ( operand11, operand21, ... ), ( operand12, operand22, ... ) )    ( SELECT subquery_clauses(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_subquery.htm) UNIONINTERSECTEXCEPT .
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_list_in.htm"
abapFile: "abenwhere_logexp_list_in.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abenwhere", "logexp", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) →  [sql\_cond - IN ( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_in.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cond_shortref.htm)

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20%28%20operand1%2C%20operand2%2C%20...%20%29%20IN%20%28%20...%20%29%2C%20ABENWHERE_LOGEXP_LIST_IN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

sql\_cond - ( operand1, operand2, ... ) IN ( ... )

Syntax

... ( operand1, operand2*\[*, ...*\]* ) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                         ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                   *|* *{* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm)*\]* ) *}* ...

Variants:

[1\. ... ( operand1, operand2*\[*, ...*\]* ) IN ( ( operand11, operand21*\[*, ...*\]* )*\[*, ...*\]* ) )](#!ABAP_VARIANT_1@1@)
[2\. ... ( operand1, operand2*\[*, ...*\]* ) IN ( SELECT subquery\_clauses \[UNION*|*INTERSECT*|*EXCEPT ...\] )](#!ABAP_VARIANT_2@2@)

Effect

Checks whether the values of the operands operand1, operand2, ... specified on the left side as a parenthesized comma-separated list match a value tuple from a set of value tuples specified in parentheses. The set of value tuples can be specified as follows:

-   Using a comma-separated list of parenthesized tuples ( operand11, operand21\[, ...\] ), ( operand12, operand22\[, ...\] ), ...
-   Using a [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry").

The following applies to operand1, operand2, ...:

-   Any [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) can be specified.
-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) can be used in a [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) clause.

At least one blank must be placed after every opening parenthesis and in front of every closing parenthesis. The comma-separated list operand1, operand2, ... must contain at least two elements.

Hint

The operator NOT is currently not supported.

Variant 1   

... ( operand1, operand2*\[*, ...*\]* ) IN ( ( operand11, operand21*\[*, ...*\]* )*\[*, ...*\]* ) )

Effect

This relational expression is true if the value of every operand operand1, operand2, ... on the left side matches the content of the operand of a parenthesized value tuple ( operand11, operand21\[, ...\] ) in the same place on the right side. Every value tuple must contain the same number of elements as the comma-separated list operand1, operand2, ... on the left side. The value tuples themselves are specified as a parenthesized comma-separated list, which can also consist of only one element.

operand11, operand21, ... of a value tuple can be any [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm). [Aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) are currently only possible in a [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) clause. [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm), [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), and [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) are handled like [elementary SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_elem.htm), which means they are mapped to dictionary types instead of being converted.

Hints

-   This variant of IN can also be expressed using individual comparisons combined using AND and OR and the [comparison operator \=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_compare.htm), but SQL expressions are not possible on the right side. This is also how this variant of IN is distinguished from the variant with a [single operand](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_operand_in.htm).
-   When this variant of IN is used and not only column specifications are used on the left side of IN and not only host variables or expressions are used on the right side, ABAP SQL bypasses [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") for buffering types [single record buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_single_buffering.htm) and [generic buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_generic_buffering.htm).
-   When used, this variant of IN applies the [strict mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_754.htm).

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
       INTO TABLE @FINAL(itab).
cl\_demo\_output=>display( itab ).

Variant 2   

... ( operand1, operand2*\[*, ...*\]* ) IN ( SELECT subquery\_clauses \[UNION*|*INTERSECT*|*EXCEPT ...\] )

Effect

This relational expression is true if the value of every operand operand1, operand2, ... on the left side matches the content of the result set of the [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry"). The result set of the subquery must contain the same number of elements in the same position as in the comma-separated list operand1, operand2, ... on the left side. The [set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) can be used to combine the result sets of multiple subqueries. In this case, the rules for [query\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm) apply.

Hint

When used, this variant of IN applies the [strict mode from ABAP release 7.55](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_755.htm).

Example

Reads the country of origin and the country of destination from the DDIC database table SPFLI for all flights which cost more than USD 100. The condition 'price > 100' is checked in a subquery that reads from the DDIC database table SFLIGHT.

SELECT countryfr, countryto
       FROM spfli
       WHERE ( carrid,connid ) IN ( SELECT carrid,connid
                                           FROM sflight
                                           WHERE price > 100 )
       INTO TABLE @FINAL(result).