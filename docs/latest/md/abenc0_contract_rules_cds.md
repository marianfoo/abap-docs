---
title: "Continue"
description: |
  C0 Contract Rules for Providers of CDS Entities(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_cds.htm) C0 Contract Rules for Consumers of CDS Entities(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_cds.htm) Example:
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_cds.htm"
abapFile: "abenc0_contract_rules_cds.htm"
keywords: ["do", "if", "try", "abenc0", "contract", "rules", "cds"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20CDS%20Entities%2C%20ABENC0_CONTRACT_RULES_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

C0 Contract Rules for CDS Entities

Currently, [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), and [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") can be released with a C0 contract for extensibility.

The following topics list the most important C0 contract rules for CDS entities.

-   [C0 Contract Rules for Providers of CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_cds.htm)
-   [C0 Contract Rules for Consumers of CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_cds.htm)
-   [Example: C0 Released CDS View Entity, Design and Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo.htm)
-   [Example: C0 Released CDS Projection View, Design and Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_1.htm)
-   [Example: C0 Node Extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_node_ext_demo.htm)

The general rules for CDS entity extensions are described in the topic [CDS Entity Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extension.htm).

In ADT, a CDS object can be released under the C0 contract for use in Cloud development. To release a CDS object under the C0 contract for use in key user apps, use transaction SCFD\_REGISTRY. C0 release for key user apps done in transaction SCFD\_REGISTRY are visible, but not changeable, in ADT.

Continue
[C0 Contract Rules for Providers of CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_cds.htm)
[C0 Contract Rules for Consumers of CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_cds.htm)
[Example: C0 Released CDS View Entity, Design and Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo.htm)
[Example: C0 Released CDS Projection View, Design and Consumption](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_1.htm)
[Example: C0 Node Extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_node_ext_demo.htm)