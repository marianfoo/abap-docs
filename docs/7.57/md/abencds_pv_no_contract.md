---
title: "CDS DDL - CDS Projection View, No Contract"
description: |
  It is possible, but not recommended, to define a CDS projection view(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') without a provider contract(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_no_contract.htm"
abapFile: "abencds_pv_no_contract.htm"
keywords: ["do", "if", "try", "data", "abencds", "contract"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, No Contract, ABENCDS_PV_NO_CONTRACT, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, No Contract

It is possible, but not recommended, to define a [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") without a [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm). The default provider contract, if no provider contract is set explicitly, is [TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm). The same features are available as for [transactional queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied:

-   In a transactional projection view with provider contract TRANSACTIONAL\_QUERY, path fields [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_path_expr.htm).element can be used in an [association ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_association.htm) via $projection. In a projection view without provider contract, this is not allowed.
    
    Example:
    Field in the projection list:
    \_assoc.fieldName
    This path field can be used in an association ON condition in a transactional query, but not in a projection view without provider contract:
    ... on $projection.fieldName = 'A' ...