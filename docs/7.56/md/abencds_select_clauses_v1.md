---
title: "CDS DDL - DDIC-based View, SELECT, clauses"
description: |
  Syntax ... WHERE cds_cond(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm) GROUP BY field1, field2, ...(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v1.htm) HAVING cds_cond(https://help.sap.com/doc/abap
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_clauses_v1.htm"
abapFile: "abencds_select_clauses_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "clauses"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm)*\]*
    *\[*[GROUP BY field1, field2, ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v1.htm)*\]*
    *\[*[HAVING cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v1.htm)*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v1.htm)*\]* ...

Effect

The optional clauses of the [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") have the following semantics:

-   The [WHERE clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm) restricts the rows in the result set when the CDS view is accessed.
-   The [GROUP BY clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v1.htm) groups rows in the result set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v1.htm) restricts the result set further after a GROUP BY clause. Here, [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v1.htm) can be specified in the condition.
-   [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v1.htm) can be used to create the union of the result sets from two SELECT statements.

Continue
[CDS DDL - DDIC-based View, SELECT, WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm)
[CDS DDL - DDIC-based View, SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v1.htm)
[CDS DDL - DDIC-based View, SELECT, HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v1.htm)
[CDS DDL - DDIC-based View, SELECT, UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v1.htm)