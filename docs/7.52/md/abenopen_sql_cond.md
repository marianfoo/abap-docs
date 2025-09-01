---
title: "Syntax"
description: |
  ...   rel_exp  NOT sql_cond ANDOR sql_cond ... Effect Logical expression sql_cond for formulating a condition in Open SQL. A logical expression consists of one or more relational expressions rel_exp that are linked with AND(https://help.sap.com/doc/abapdocu_752_index_htm
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm"
abapFile: "abenopen_sql_cond.htm"
keywords: ["do", "if", "data", "types", "abenopen", "sql", "cond"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) → 

Open SQL - Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in Open SQL. A logical expression consists of one or more relational expressions rel\_exp that are linked with [AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_andornot.htm) or [OR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_andornot.htm) and can be negated with [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_andornot.htm). There are different types of relational expressions:

-   [Relational expressions for statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm)

-   [Relational expressions for expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm)

Continue
[sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm)
[sql\_cond - rel\_exp for Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm)
[sql\_cond - AND, OR, NOT, ( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_andornot.htm)