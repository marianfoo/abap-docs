---
title: "Hints"
description: |
  -   A list of all transportable released APIs can be found in topic Released APIs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_apis.htm). -   You can configure your ADT to display a folder with C0 released APIs as follows: -   Right-click the respective project and click
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules.htm"
abapFile: "abenc0_contract_rules.htm"
keywords: ["insert", "do", "if", "try", "abenc0", "contract", "rules"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules, ABENC0_CONTRACT_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

C0 Contract Rules

The [C0 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for extending APIs. It ensures stability at dedicated extension points to allow for a certain extensibility of repository objects by using enhancement tools. Contract C0 is relevant for repository objects that are enhanced by enhancement tools, e.g. of the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") or [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_cds.htm)
-   [C0 Contract Rules for CDS Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_bdef.htm)

Hints

-   A list of all transportable released APIs can be found in topic [Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_apis.htm).
-   You can configure your ADT to display a folder with C0 released APIs as follows:
    -   Right-click the respective project and click New > ABAP Repository Tree.
    -   On the Create Tree screen, choose Blank and click Next.
    -   On the next screen, enter a tree name in field Tree Name and insert the following property filter: api: Extend\_in\_cloud\_development.
    -   Click Finish.

Continue
[C0 Contract Rules for CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_cds.htm)
[C0 Contract Rules for CDS Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_bdef.htm)