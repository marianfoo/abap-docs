---
title: "Syntax"
description: |
  ...   rel_exp  NOT sql_cond ANDOR sql_cond ... Effect Logical expression sql_cond for formulating a condition in ABAP SQL. A logical expression consists of either a single relational expression rel_exp, or an expression composed of the Boolean operators NOT(https://help.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm"
abapFile: "abenasql_cond.htm"
keywords: ["do", "if", "data", "types", "abenasql", "cond"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - SQL Conditions sql_cond, ABENASQL_COND, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - SQL Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in ABAP SQL. A logical expression consists of either a single relational expression rel\_exp, or an expression composed of the Boolean operators [NOT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_andornot.htm), [AND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_andornot.htm), or [OR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_andornot.htm) and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression. There are different types of relational expressions:

-   [Relational expressions for statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm)
-   [Relational expressions for expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm)

Continue
[sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm)
[sql\_cond - rel\_exp for Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm)
[sql\_cond - AND, OR, NOT, ( )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_andornot.htm)