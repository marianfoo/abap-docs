  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - SQL Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in ABAP SQL. A logical expression consists of one or more relational expressions rel\_exp that are joined by [AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_andornot.htm) or [OR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_andornot.htm) and can be negated with [NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_andornot.htm). There are different types of relational expressions:

-   [Relational expressions for statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm)

-   [Relational expressions for expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm)

Continue
[sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm)
[sql\_cond - rel\_exp for Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm)
[sql\_cond - AND, OR, NOT, ( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_andornot.htm)