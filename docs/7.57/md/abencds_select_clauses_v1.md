  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, SELECT, clauses, ABENCDS_SELECT_CLAUSES_V1, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](javascript:call_link\('abencds_where_clause_v1.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_group_by_v1.htm'\))*\]*
    *\[*[HAVING cds\_cond](javascript:call_link\('abencds_having_clause_v1.htm'\))*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](javascript:call_link\('abencds_union_v1.htm'\))*\]* ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_where_clause_v1.htm'\)) restricts the rows in the result set when the CDS view is accessed.
-   The [GROUP BY clause](javascript:call_link\('abencds_group_by_v1.htm'\)) groups rows in the result set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](javascript:call_link\('abencds_having_clause_v1.htm'\)) restricts the result set further after a GROUP BY clause. Here, [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) can be specified in the condition.
-   [UNION](javascript:call_link\('abencds_union_v1.htm'\)) can be used to create the union of the result sets from two SELECT statements.

Hint

CDS views do not support ORDER BY for the following reasons:

-   Historic reason: Some database platforms that support ABAP CDS do not support ORDER BY in views.
-   Undefined behavior may occur when ORDER BY is used in multiple views within a view stack.
-   Undefined behavior may occur in complex views that, for example, join multiple data sources and use an ORDER BY clause.

Continue
[CDS DDL - DDIC-Based View, SELECT, WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, GROUP BY](javascript:call_link\('abencds_group_by_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\))
[CDS DDL - DDIC-Based View, SELECT, UNION](javascript:call_link\('abencds_union_v1.htm'\))