  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) → 

CDS DDL - CDS View Entity, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm)*\]*
    *\[*[GROUP BY field1, field2, ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_group_by_v2.htm)*\]*
    *\[*[HAVING cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v2.htm)*\]* ...

Effect

The optional clauses of the [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry") have the following semantics:

-   The [WHERE clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm) restricts the rows in the result set when the CDS view entity is accessed.

-   The [GROUP BY clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_group_by_v2.htm) groups rows in the result set when the CDS view entity is accessed. It is applied after rows are selected using the WHERE clause.

-   The [HAVING clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v2.htm) restricts the result set further after a GROUP BY clause. [Aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm) are possible after HAVING.

Hint

[UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_union_v1.htm) is currently not available in CDS view entities. Development is ongoing.

Continue
[CDS DDL - CDS View Entity, SELECT, WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm)
[CDS DDL - CDS View Entity, SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_group_by_v2.htm)
[CDS DDL - CDS View Entity, SELECT, HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v2.htm)