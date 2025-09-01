---
title: "Syntax"
description: |
  ...  operand1 =EQ<>NE>GT<LT>=GE<=LE operand2   operand  NOT BETWEEN operand1 AND operand2  operand1 NOT LIKE operand2 ESCAPE esc  operand  IS NOT NULL  operand  IS NOT INITIAL
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_expr_logexp.htm"
abapFile: "abenosql_expr_logexp.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abenosql", "expr", "logexp"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) → 

sql\_cond - rel\_exp for Expressions

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}* operand2 *}*
    *|* *{*operand  *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand  IS *\[*NOT*\]* NULL*}*
    *|* *{*operand  IS *\[*NOT*\]* INITIAL*}* *}* ...

Effect

Relational expression in a condition of an expression in an ABAP SQL statement. Logical expressions sql\_cond can be formed from the relational expressions shown here for the following conditions:

-   [Filter condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm) of a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm)

-   [WHEN condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_searched_case.htm) of a complex [case distinction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm)

-   Start condition of the table function [HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm).

The relational expressions that can be used in expressions are a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm), but also allow [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) as operands on the right side.

-   operand1 =*|*<>*|*\>*|*<*|*\>=*|*<= operand2

Compares the operand operand1 on the left side with the operand operand2 on the right side. The same applies to relational operators as in a [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare.htm). The operands of size comparisons can have the following data types here:

-   Numeric data types: All except decimal floating point numbers

-   Character-like data types: CHAR, CLNT, LANG, CUKY, UNIT or c, NUMC or n, DATS or d, TIMS or t.

The operand operand2 on the right side can be any [SQL expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), which covers columns, literals, host variables, and host expressions. If an operand of the comparison has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of this comparison is unknown.

-   operand *\[*NOT*\]* BETWEEN operand1 AND operand2

Checks the assignment to an interval. The relational expression functions in the same way as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_interval.htm). The addition NOT is not possible. The operands can have the same data types as for size comparisons. Any [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) can be specified for operand1 and operand2, which covers columns, literals, host variables, and host expressions. If one of the operands has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the check is unknown.

-   operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*

Pattern comparison. The relational expression functions in the same way as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_like.htm). The addition NOT is not possible. The same applies to the operands as in the [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_like.htm). The operands must be character-like and only literals and [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) prefixed with an escape character @ can be specified on the right side.

-   operand IS *\[*NOT*\]* NULL

Checks for the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"). The relational expression functions in the same way as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm).

-   operand IS *\[*NOT*\]* INITIAL

Checks for the initial value of the assigned elementary ABAP type. The relational expression functions in the same way as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_initial.htm).

The operands on the left side can be any SQL expressions, which covers columns, literals, host variables, and host expressions. Any occurring columns and expressions (with the exception of LIKE) can have any dictionary type except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, and STRING. Literals, host variables, and host expressions can have any ABAP types, except for string and xstring.

It must be possible to [compare](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare_types.htm) the data types of the operands of a relational expression. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. Unlike in [conditions for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm), operands of the types DATS and TIMS are handled like regular flat character-like operands.

If an expression is used for a selection, the [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-specific data source of a query or of the target of a write statement can only be used as an operand in an SQL condition of the expression if automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") is deactivated for the query or write by the addition CLIENT SPECIFIED. This is not possible for [filter conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm).

Notes

-   Because an expression is passed to the database essentially unchanged, the possible relational expressions and their operands represent only a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm). In some constructs, however, a WHERE, HAVING, or ON condition of a statement is processed by the ABAP runtime environment before the pass, to ensure platform-independent behavior.

-   The addition NOT cannot currently be specified in front of BETWEEN and LIKE. Instead, the operator [NOT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_andornot.htm) can be used in front of the full expression.