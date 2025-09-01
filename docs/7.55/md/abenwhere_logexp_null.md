---
title: "Syntax"
description: |
  ... operand IS NOT NULL ... Effect This relational expression is true if the value of the operand operand is (is not) the null value(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm 'Glossary Entry'). The following applies to operand: -   SQL expression
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_null.htm"
abapFile: "abenwhere_logexp_null.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "data", "types", "abenwhere", "logexp", "null"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) → 

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cond_shortref.htm)

sql\_cond - IS NULL

Syntax

... operand IS *\[*NOT*\]* NULL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry").

The following applies to operand:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm) can be specified.

-   In a [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) can also be used.

-   Unlike in other relational expressions, the data type can also be [STRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [RAWSTRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), or [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

Hints

-   The relational expression IS *\[*NOT*\]* NULL is the only expression for which the result is true or false when the operand contains the null value. The result is unknown for all other possible relational expressions in a condition [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) when one of the operands in question contains the null value. More specifically, this is relevant for expressions specified as operands when their result is the null value.

-   Null values can also be evaluated using a [null indicator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_indicator_glosry.htm "Glossary Entry").

-   IS *\[*NOT*\]* NULL can be used to check [LOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_glosry.htm "Glossary Entry") and [geodata types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeo_data_type_glosry.htm "Glossary Entry"). As in all other relational expressions, operands of the data types [LCHR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and [LRAW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) are not possible.

Example

Comparison of the results of an inner and a left outer [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry"). The row with null values produced by the left outer join is removed again by the WHERE condition with IS NOT NULL, so the results are the same.

DELETE FROM demo\_join1.
INSERT demo\_join1 FROM TABLE @( VALUE #(
  ( a = 'a1' b = 'b1' c = 'c1'  d = 'd1' )
  ( a = 'a2' b = 'b2' c = 'c2'  d = 'd2' ) ) ).
DELETE FROM demo\_join2.
INSERT demo\_join2 FROM TABLE @( VALUE #(
  ( d = 'd1' e = 'e1' f = 'f1'  g = 'g1'  h = 'h1' ) ) ).
SELECT \*
       FROM demo\_join1 AS d1
         INNER JOIN demo\_join2 AS d2
           ON d1~d = d2~d
       INTO TABLE @DATA(result1).
SELECT \*
       FROM demo\_join1 AS d1
         LEFT OUTER JOIN demo\_join2 AS d2
           ON d1~d = d2~d
       WHERE d2~d IS NOT NULL
       INTO TABLE @DATA(result2).
ASSERT result1 = result2.