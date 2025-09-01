---
title: "Syntax"
description: |
  ...  operand1 =EQ<>NE>GT<LT>=GE<=LE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm)   operand2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm)  ALLAN
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm"
abapFile: "abenwhere_logexp.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "data", "types", "abenwhere", "logexp"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasql_cond.htm) → 

sql\_cond - rel\_exp for Statements

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_shortref.htm)

Syntax

... *{* *{*operand1 *{*[\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm)*}*
                  *{*  [operand2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm)
                  *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_all_any_some.htm) ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm) *\[* [UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* )*}* *}**}*
    *|* *{*[operand *\[*NOT*\]* BETWEEN operand1 AND operand2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_interval.htm)*}*
    *|* *{*[operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_like.htm)*}*
    *|* *{*[operand IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm)*}*
    *|* *{*[operand IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_initial.htm)*}*
    *|* *{* [EXISTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_exists.htm) ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* )*}*
    *|* *{*operand *\[*NOT*\]* IN (operand1, operand2 ...)*}*
    *|* *{*[operand *\[*NOT*\]* IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_operand_in.htm) ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* )*}*
    *|* *{*[( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm)
                                        [( operand12, operand22 ... ), ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_list_in.htm)*}*
    *|* *{*[operand *\[*NOT*\]* IN @range\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_seltab.htm)*}*
    *|* *{*[(cond\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_dynamic.htm)*}* *}* ...

Effect

Relational expression in a condition of an ABAP SQL statement. Logical expressions sql\_cond can be formed from the relational expressions shown here for the following conditions:

-   Read accesses

-   [WHERE clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) of a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry")

-   [HAVING clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry")

-   [ON condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm) of a [join expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjoin_expression_glosry.htm "Glossary Entry")

-   Modifying accesses

-   [WHERE condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate_source.htm) of the statement [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm)

-   [WHERE condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_where.htm) of the statement [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm)

Possible operanda of a relational expression are elementary [SQL operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_operands.htm) and [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm). The category of the expression and where it is used determine which operands can be used and where. The following principles apply:

-   No generic [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expression_glosry.htm "Glossary Entry") can be used on the right side of relational expression.

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can only be used as operands in the [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"), but on the right side.

-   [Window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_expression_glosry.htm "Glossary Entry") cannot be used.

-   Operands of the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB cannot be used. One exception is the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm), which can also evaluate [LOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") and [geodata types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeo_data_type_glosry.htm "Glossary Entry").

A relational expression rel\_exp is either true, false, or unknown. The expression is unknown if one of the columns involved in the database contains a [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") and is evaluated with another comparison as [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm). The result of joins of relational expressions with unknown results is described under [AND, OR, NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_andornot.htm).

In an SQL condition of a statement, the [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-specific data source of a query or of the target of a write statement cannot be used as an operand due to [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm). This is checked in full in the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.

Notes

-   In comparisons between values determined in the database, it is essential that only operands of the same type and same length are used. This avoids platform-dependent conversion from taking place.

-   The ABAP SQL statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") in the following cases:

-   If expressions other than the [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_expressions.htm) that can be evaluated in the table buffer are used on the left side of a relational expression.

-   If items other than [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_variable_glosry.htm "Glossary Entry") or [host expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_expression_glosry.htm "Glossary Entry") are specified on the right side of a relational expression used to identify a single record or a generically buffered area.

In other conditions not used for identifications, columns too can be specified in [comparisons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm) or when [BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_interval.htm) is used. This applies in cases where neither (numeric) operand has the type DF16\_DEC or DF34\_DEC, both operands are character-like, or both operands have the type RAW with the same length.

-   A client column can be used as an operand only if [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is disabled using the obsolete addition CLIENT SPECIFIED for the query or the write statement.

-   When SQL expressions occur on the left side of a relational expression, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

-   If [dynamic conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_dynamic.htm), alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm), or [joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) are used, a [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry") can be accessed outside the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check in WHERE conditions and ON conditions, without [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) being disabled using CLIENT SPECIFIED. In this case, there are two conditions for the client column: the implicit condition of the automatic client handler for the current client and the explicitly specified condition. If the current client is not specified in the explicitly specified condition, no rows are selected.
    

Continue
[sql\_cond - Relational Operators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm)
[sql\_cond - BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_interval.htm)
[sql\_cond - LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_like.htm)
[sql\_cond - IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm)
[sql\_cond - IS INITIAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_initial.htm)
[sql\_cond - EXISTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_exists.htm)
[sql\_cond - IN ( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_in.htm)
[sql\_cond - IN range\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_seltab.htm)
[sql\_cond - (cond\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_dynamic.htm)
[sql\_cond - subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_subquery.htm)