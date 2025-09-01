  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, No Contract, ABENCDS_PV_NO_CONTRACT, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, No Contract

It is possible, but not recommended, to define a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") without a [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)). The default provider contract, if no provider contract is set explicitly, is [TRANSACTIONAL\_QUERY](javascript:call_link\('abencds_pv_provider_contract.htm'\)). The same features are available as for [transactional queries](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied:

-   In a transactional projection view with provider contract TRANSACTIONAL\_QUERY, path fields [path\_expr](javascript:call_link\('abencds_proj_view_path_expr.htm'\)).element can be used in an [association ON condition](javascript:call_link\('abencds_proj_view_association.htm'\)) via $projection. In a projection view without provider contract, this is not allowed.
    
    Example:
    Field in the projection list:
    \_assoc.fieldName
    This path field can be used in an association ON condition in a transactional query, but not in a projection view without provider contract:
    ... on $projection.fieldName = 'A' ...