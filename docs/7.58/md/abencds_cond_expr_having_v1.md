  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20cds_cond%2C%20HAVING%2C%20ABENCDS_COND_EXPR_HAVING_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - DDIC-Based View, cds\_cond, HAVING

Rules for conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_having_clause_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   The relational operator BETWEEN is not allowed. All other relational operators are allowed.
-   A [field](javascript:call_link\('abencds_field_v1.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) or an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) for this kind of field can be specified for lhs.
-   An [element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)), an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with an optional domain prefix, or a [parameter](javascript:call_link\('abencds_parameter_v1.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))). If lhs is an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) must be specified.
-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entity](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") as [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") and the expression is unique:
    
    -   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is to-one.
    -   The path expression only contains
    -   [filter conditions](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) with addition 1:.
    
    element can be used to specify an element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.