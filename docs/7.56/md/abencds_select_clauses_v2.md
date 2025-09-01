---
title: "CDS DDL - CDS View Entity, SELECT, clauses"
description: |
  Syntax ... WHERE cds_cond(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm) GROUP BY field1, field2, ...(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm) HAVING cds_cond(https://help.sap.com/doc/abap
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_clauses_v2.htm"
abapFile: "abencds_select_clauses_v2.htm"
keywords: ["select", "do", "try", "data", "abencds", "clauses"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm)*\]*
    *\[*[GROUP BY field1, field2, ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm)*\]*
    *\[*[HAVING cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm)*\]*
    *\[*[EXCEPT SELECT ...*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_except_v2.htm)
    *\[*[INTERSECT SELECT ...*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_intersect_v2.htm)
    *\[*[UNION *\[*ALL*\]* SELECT ...*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v2.htm) ...

Effect

The optional clauses of the [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") have the following semantics:

-   The [WHERE clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm) restricts the rows in the result set when the CDS view entity is accessed.
-   The [GROUP BY clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm) groups rows in the result set when the CDS view entity is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm) restricts the result set further after a GROUP BY clause. [Aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm) are possible after HAVING.
-   [EXCEPT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_except_v2.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_intersect_v2.htm), and [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v2.htm) are [set operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_set_operators_glosry.htm "Glossary Entry"). They can be used to merge the result sets of multiple SELECT statements into a single result set.

Continue
[CDS DDL - CDS View Entity, SELECT, WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm)
[CDS DDL - CDS View Entity, SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm)
[CDS DDL - CDS View Entity, SELECT, HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm)
[CDS DDL - CDS View Entity, Set Operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_set_operators.htm)