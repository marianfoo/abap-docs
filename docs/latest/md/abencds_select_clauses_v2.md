  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20clauses%2C%20ABENCDS_SELECT_CLAUSES_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - CDS View Entity, SELECT, clauses

Syntax

... *\[*[WHERE cds\_cond](javascript:call_link\('abencds_where_clause_v2.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_group_by_v2.htm'\))*\]*
    *\[*[HAVING cds\_cond](javascript:call_link\('abencds_having_clause_v2.htm'\))*\]*
    *\[*[EXCEPT SELECT ...*\]*](javascript:call_link\('abencds_except_v2.htm'\))
    *\[*[INTERSECT SELECT ...*\]*](javascript:call_link\('abencds_intersect_v2.htm'\))
    *\[*[UNION *\[*ALL*\]* SELECT ...*\]*](javascript:call_link\('abencds_union_v2.htm'\)) ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_where_clause_v2.htm'\)) restricts the rows in the result set when the CDS view entity is accessed.
-   The [GROUP BY clause](javascript:call_link\('abencds_group_by_v2.htm'\)) groups rows in the result set when the CDS view entity is accessed. It is applied after rows are selected using the WHERE clause.
-   The [HAVING clause](javascript:call_link\('abencds_having_clause_v2.htm'\)) restricts the result set further after a GROUP BY clause. [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) are possible after HAVING.
-   [EXCEPT](javascript:call_link\('abencds_except_v2.htm'\)), [INTERSECT](javascript:call_link\('abencds_intersect_v2.htm'\)), and [UNION](javascript:call_link\('abencds_union_v2.htm'\)) are [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry"). They can be used to merge the result sets of multiple SELECT statements into a single result set.

Hint

CDS view entities do not support ORDER BY for the following reasons:

-   Historic reason: Some database platforms that support ABAP CDS do not support ORDER BY in views.
-   Undefined behavior may occur when ORDER BY is used in multiple views within a view stack.
-   Undefined behavior may occur in complex views that, for example, join multiple data sources and use an ORDER BY clause.

Continue
[CDS DDL - CDS View Entity, SELECT, WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\))
[CDS DDL - CDS View Entity, SELECT, GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\))
[CDS DDL - CDS View Entity, SELECT, HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\))
[CDS DDL - CDS View Entity, Set Operators](javascript:call_link\('abencds_set_operators.htm'\))