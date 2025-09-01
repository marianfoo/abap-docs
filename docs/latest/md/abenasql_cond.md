  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20SQL%20Conditions%20sql_cond%2C%20ABENASQL_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - SQL Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in ABAP SQL. A logical expression consists of either a single relational expression rel\_exp, or an expression composed of the Boolean operators [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_andornot.htm), [AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_andornot.htm), or [OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_andornot.htm) and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression. There are different types of relational expressions:

-   [Relational expressions for statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm)
-   [Relational expressions for expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm)

Continue
[sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm)
[sql\_cond - rel\_exp for Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm)
[sql\_cond - AND, OR, NOT, ( )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_andornot.htm)