---
title: "CDS DDL - CDS Projection View, No Contract"
description: |
  It is possible, but not recommended, to define a CDS projection view(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') without a provider contract(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_provider_contract
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_no_contract.htm"
abapFile: "abencds_pv_no_contract.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "contract"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20Projection%20View%2C%20No%20Contract%2C%20ABENCDS_PV_NO_CONTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - CDS Projection View, No Contract

It is possible, but not recommended, to define a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry") without a [provider contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_provider_contract.htm). The default provider contract, if no provider contract is set explicitly, is [TRANSACTIONAL\_QUERY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_provider_contract.htm). The same features are available as for [transactional queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied:

-   In a transactional projection view with provider contract TRANSACTIONAL\_QUERY, path fields [path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_path_expr.htm).element can be used in an [association ON condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_association.htm) via $projection. In a projection view without provider contract, this is not allowed.
    
    Example:
    Field in the projection list:
    \_assoc.fieldName
    This path field can be used in an association ON condition in a transactional query, but not in a projection view without provider contract:
    ... on $projection.fieldName = 'A' ...
    

Hint

Specifying a provider contract is strongly recommended, but not enforced, in most cases. However, there is one exception: if the projected entity is a [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry"), then the provider contract TRANSACTIONAL\_QUERY is mandatory. When no provider contract is specified, a syntax check error occurs.