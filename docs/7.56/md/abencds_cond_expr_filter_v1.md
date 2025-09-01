  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr, filter](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, Filter

Rules for conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a

[filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.
-   lhs expects a [field](javascript:call_link\('abencds_field_v1.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").
-   A [field](javascript:call_link\('abencds_field_v1.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the current [CDS association](javascript:call_link\('abencds_association_v1.htm'\)), a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_parameter_v1.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)), or a [built-in function](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))).
-   No path expressions or other expressions or function calls can be specified.