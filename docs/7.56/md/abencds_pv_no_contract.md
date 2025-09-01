  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_views.htm) → 

CDS DDL - CDS Projection View, no contract

It is possible, but not recommended, to define a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") without a [provider contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm). The default provider contract, if no provider contract is set explicitly, is [TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm). The same features are available as for [transactional queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied:

-   In a transactional projection view with provider contract TRANSACTIONAL\_QUERY, path fields [path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_path_expr.htm).element can be used in an [association ON condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_association.htm) via $projection. In a projection view without provider contract, this is not allowed.
    
    Example:
    Field in the projection list:
    \_assoc.fieldName
    This path field can be used in an association ON condition in a transactional query, but not in a projection view without provider contract:
    ... on $projection.fieldName = 'A' ...