  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) → 

CDS DDL - CDS View Entity, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](javascript:call_link\('abencds_where_clause_v2.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_group_by_v2.htm'\))*\]*
    *\[*[HAVING cds\_cond](javascript:call_link\('abencds_having_clause_v2.htm'\))*\]* ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_where_clause_v2.htm'\)) restricts the rows in the result set when the CDS view entity is accessed.

-   The [GROUP BY clause](javascript:call_link\('abencds_group_by_v2.htm'\)) groups rows in the result set when the CDS view entity is accessed. It is applied after rows are selected using the WHERE clause.

-   The [HAVING clause](javascript:call_link\('abencds_having_clause_v2.htm'\)) restricts the result set further after a GROUP BY clause. [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) are possible after HAVING.

Hint

[UNION](javascript:call_link\('abencds_union_v1.htm'\)) is currently not available in CDS view entities. Development is ongoing.

Continue
[CDS DDL - CDS View Entity, SELECT, WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\))
[CDS DDL - CDS View Entity, SELECT, GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\))
[CDS DDL - CDS View Entity, SELECT, HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\))