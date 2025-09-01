  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

sql\_cond - IS NULL

Syntax

... operand IS *\[*NOT*\]* NULL ...

Effect

This relational expression is true if the value of the operand operand is (is not) the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"). [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

Note

The relational expression IS *\[*NOT*\]* NULL is the only expression for which the result is true or false when the operand is given the null value. The result is unknown for all other possible relational expressions in a condition [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) when one of the operands in question is given the null value. More specifically, this is relevant for expressions specified as operands when their result is the null value.

Example

Compares the results of an inner and a left outer [join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_glosry.htm "Glossary Entry"). The row with null values produced by the left outer join is removed again by the WHERE condition with IS NOT NULL, so the results are the same.

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