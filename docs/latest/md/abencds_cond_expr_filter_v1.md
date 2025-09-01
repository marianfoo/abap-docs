  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr, Filter](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20cds_cond%2C%20Filter%2C%20ABENCDS_COND_EXPR_FILTER_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - DDIC-Based View, cds\_cond, Filter

Rules for conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a

[filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.
-   lhs expects a [field](javascript:call_link\('abencds_field_v1.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").
-   A [field](javascript:call_link\('abencds_field_v1.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_v1.htm'\)), a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_parameter_v1.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)), or a [built-in function](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))).
-   No path expressions or other expressions or function calls can be specified.