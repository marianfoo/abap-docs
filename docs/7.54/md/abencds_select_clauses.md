---
title: "ABAP CDS - SELECT, clauses"
description: |
  Syntax ... WHERE cond_expr(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm) GROUP BY field1, field2, ...(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm) HAVING cond_expr(https://help.sap.com/doc/ab
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm"
abapFile: "abencds_select_clauses.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "clauses"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) → 

ABAP CDS - SELECT, clauses

Syntax

... *\[*[WHERE cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm)*\]*
    *\[*[GROUP BY field1, field2, ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm)*\]*
    *\[*[HAVING cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm)*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm)*\]* ...

Effect

The optional clauses of the [SELECT statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") have the following semantics:

-   The [WHERE clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm) restricts the rows in the results set when the CDS view is accessed.

-   The [GROUP BY clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm) groups rows in the results set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.

-   The [HAVING clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm) restricts the results set further after a GROUP BY clause. Here, [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm) can be specified in the condition.

-   [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm) can be used to create the union of the results sets from two SELECT statements.

Continue
[ABAP CDS - SELECT, WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm)
[ABAP CDS - SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm)
[ABAP CDS - SELECT, HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm)
[ABAP CDS - SELECT, UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm)