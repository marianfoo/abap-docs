---
title: "Hints"
description: |
  -   A list of all transportable released APIs(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm 'Glossary Entry') can be found in the topic Released APIs(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_apis.htm). -   You can configure
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules.htm"
abapFile: "abenc0_contract_rules.htm"
keywords: ["insert", "do", "if", "try", "abenc0", "contract", "rules"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%2C%20ABENC0_CONTRACT_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C0 Contract Rules

The [C0 contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for [C0 developer extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendev_extensibility_glosry.htm "Glossary Entry"). It ensures stability at dedicated extension points to allow for a certain extensibility of repository objects. The following sections describe the C0 rules for different kinds of development objects.

-   [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm)
-   [C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_cds.htm)
-   [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_bdef.htm)
-   [C0 Contract Rules for CDS Service Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_sd.htm)

Hints

-   A list of all transportable [released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") can be found in the topic [Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_apis.htm).
-   You can configure your ADT to display a folder with C0 released APIs as follows:
    -   Right-click the respective project and click New > ABAP Repository Tree.
    -   On the Create Tree screen, choose Blank and click Next.
    -   On the next screen, enter a tree name in field Tree Name and insert the following property filter: api: Extend\_in\_cloud\_development.
    -   Click Finish.

Continue
[C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_ddic.htm)
[C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_cds.htm)
[C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_bdef.htm)
[C0 Contract Rules for CDS Service Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_sd.htm)