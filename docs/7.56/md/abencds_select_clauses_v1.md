  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) → 

CDS DDL - DDIC-based View, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](javascript:call_link\('abencds_where_clause_v1.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_group_by_v1.htm'\))*\]*
    *\[*[HAVING cds\_cond](javascript:call_link\('abencds_having_clause_v1.htm'\))*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](javascript:call_link\('abencds_union_v1.htm'\))*\]* ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_where_clause_v1.htm'\)) restricts the rows in the result set when the CDS view is accessed.
-   The [GROUP BY clause](javascript:call_link\('abencds_group_by_v1.htm'\)) groups rows in the result set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](javascript:call_link\('abencds_having_clause_v1.htm'\)) restricts the result set further after a GROUP BY clause. Here, [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) can be specified in the condition.
-   [UNION](javascript:call_link\('abencds_union_v1.htm'\)) can be used to create the union of the result sets from two SELECT statements.

Continue
[CDS DDL - DDIC-based View, SELECT, WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\))
[CDS DDL - DDIC-based View, SELECT, GROUP BY](javascript:call_link\('abencds_group_by_v1.htm'\))
[CDS DDL - DDIC-based View, SELECT, HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\))
[CDS DDL - DDIC-based View, SELECT, UNION](javascript:call_link\('abencds_union_v1.htm'\))