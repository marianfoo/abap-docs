  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Analytical Queries](javascript:call_link\('abencds_analytical_query_apv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - WHERE, Analytical Query, ABENCDS_WHERE_APV, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - WHERE, Analytical Query

Syntax

... WHERE [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) ...

Effect

Defines a WHERE condition for the result set of a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") cds\_entity that meets the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) specified after WHERE.

The condition is either a single [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") rel\_expr or an expression constructed from the [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry") AND, OR, and NOT.

In CDS analytical projection views, the following rules apply to the operands and syntax of the WHERE condition:

-   [Comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)) are allowed.
-   [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), and [INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) are allowed as relational operators.
-   The Boolean operators AND, OR, and NOT are supported. Identical fields must be combined with OR and different fields must be combined with AND.
    
    Note: A filter condition does not support nested negations. The following is not supported: AND NOT field\_a <> 'B. The reason is that NOT and <> are both negations.
    
-   lhs must be a field of the projected entity specified as [analytical dimension](javascript:call_link\('abencds_dimension_glosry.htm'\) "Glossary Entry").
-   rhs can be an [untyped literal](javascript:call_link\('abencds_untyped_literal_v2.htm'\)), a session variable (currently, only $session.system\_date and $session.user\_date are supported), or a parameter. When using the operator LIKE, rhs must be a character literal.
    
    Note: [typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) are currently not supported in this position.
    
-   [Path expressions](javascript:call_link\('abencds_path_expr_apv.htm'\)) path\_expr are not allowed as operands in a WHERE condition.