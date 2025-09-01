  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Associations](javascript:call_link\('abencds_association_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, ON, CDS Association

Rules for conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in an [ON condition](javascript:call_link\('abencds_association_v1.htm'\)) of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   A [field](javascript:call_link\('abencds_field_v1.htm'\)) of one of the two data sources [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the CDS association can be specified for lhs.

-   A [field](javascript:call_link\('abencds_field_v1.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the CDS association, a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_parameter_v1.htm'\)), or a [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))).

-   A field of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") can also be specified by an alternative element name (defined using [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\))) of the current CDS view.

-   At least one comparison for equality between a field of the initial data source and a field of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the CDS association must be performed.

-   No path expressions or other expressions or function calls can be specified.