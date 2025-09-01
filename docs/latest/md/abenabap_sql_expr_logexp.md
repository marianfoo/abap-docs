---
title: "Syntax"
description: |
  ...  operand1 =EQ<>NE>GT<LT>=GE<=LE operand2  operand  NOT BETWEEN operand1 AND operand2  operand1 NOT LIKE operand2 ESCAPE esc  operand  IS NOT NULL  operand  IS NOT INITIAL
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm"
abapFile: "abenabap_sql_expr_logexp.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abenabap", "sql", "expr", "logexp"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20rel_exp%20for%20Expressions%2C%20ABENABAP_SQL_EXPR_LOGEXP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - rel\_exp for Expressions

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}* operand2*}*
    *|* *{*operand  *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand  IS *\[*NOT*\]* NULL*}*
    *|* *{*operand  IS *\[*NOT*\]* INITIAL*}* *}* ...

Effect

Relational expression in a condition of an expression in an ABAP SQL statement. From the relational expressions shown here, logical expressions sql\_cond can be formed for the following conditions:

-   [ON condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith_associations_defining.htm) in the definition of a [CTE association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencte_association_glosry.htm "Glossary Entry").
-   [Filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path_filter.htm) of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path.htm).
-   [WHEN condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_searched_case.htm) of a complex [case distinction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_case.htm).
-   Start condition of the table function [HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm).
-   [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_agg_navis.htm), [ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_desc_agg.htm), and [START WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_ancs_agg.htm) condition in a [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry").

The relational expressions that can be used in expressions are a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm), but also allow [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) as operands on the right side. SQL expressions on the right side must be enclosed in parentheses with a blank after the opening parenthesis and in front of the closing parenthesis.

-   operand1 =*|*<>*|*\>*|*<*|*\>=*|*<= operand2
    
    Comparison of the operand operand1 on the left side with the operand operand2 on the right side. The same applies to comparison operators as in a [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare.htm). Here, the operands of size comparisons can have the following data types:
    
    -   Numeric data types: All except for the [replacement types for decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm).
    -   Character-like data types: CHAR, CLNT, LANG, CUKY, UNIT, and NUMC.
    -   Date types, time types, and time stamp types: DATN, DATS, TIMN, TIMS, and UTCLONG.
    
    The operand operand2 on the right-hand side can be any [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm). If an operand of the comparison has the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of this comparison is unknown.
    
-   operand *\[*NOT*\]* BETWEEN operand1 AND operand2
    
    Checks the assignment to an interval. The relational expression has the same effect as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_interval.htm). The operands can have the same data types as for size comparisons. For operand1 and operand2, any [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm) can be specified. If one of the operands has the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the check is unknown.
    
-   operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*
    
    Pattern comparison. The relational expression has the same effect as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_like.htm). The same applies to the operands as in the [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_like.htm). The operands must be character-like and only [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm) and [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) can be specified on the right-hand side.
    
-   operand IS *\[*NOT*\]* NULL
    
    Checks for the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"). The relational expression has the same effect as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_null.htm).
    
-   operand IS *\[*NOT*\]* INITIAL
    
    Checks for the initial value of the assigned elementary ABAP type. The relational expression has the same effect as the corresponding [condition for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_initial.htm).
    

The operands on the left side can be any SQL expressions except for [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm). All columns and expressions, except for LIKE, can have any dictionary type except for ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB. Individually specified literals, host variables, and host expressions are handled as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_elem.htm) and can be of any ABAP type.

It must be possible to [compare](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare_types.htm) the data types of the operands of a relational expression. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. Unlike in [conditions for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm), operands of the types DATS and TIMS are handled like regular flat character-like operands.

If an expression is used for a selection, the [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source of a query or the target of a write statement in an SQL condition of this expression cannot be used as an operand due to [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm).

Hints

-   Because an expression is passed to the database essentially unchanged, the possible relational expressions and their operands represent only a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm). In some constructs, however, a WHERE, HAVING, or ON condition of a statement is processed by the ABAP runtime framework before the pass, to achieve platform-independent behavior.
-   When specifying [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_literals.htm), [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm), and [host expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_expressions.htm), it should be noted that these are used as elementary SQL expressions in expressions and that their ABAP type is mapped to a dictionary type according to the corresponding [tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_elem.htm). This type must fulfill the [comparability](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_compare_types.htm) rules. This differs from [relational expressions for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm), for which the ABAP type is generally converted to the appropriate dictionary type.
-   A client column can be used as an operand only if [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm) is disabled using the addition CLIENT SPECIFIED for the [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) or the [write](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapud_client_obsolete.htm). This is not possible for [filter conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path_filter.htm).
-   That the result of a check is unknown if one of the operands has the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), is especially true for the [null expression NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_null.htm) that contains the null value by definition.
-   SQL expressions as operands on the right side of an SQL condition enforce the [strict mode from ABAP release 7.58](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_758.htm).