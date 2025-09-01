---
title: "Continue"
description: |
  C1 Contract Rules for API Providers(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm) C1 Contract Rules for API Consumers(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_rules.htm"
abapFile: "abenc1_contract_rules.htm"
keywords: ["do", "if", "try", "abenc1", "contract", "rules"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules, ABENC1_CONTRACT_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

C1 Contract Rules

In [strict ABAP development environments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry"), a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") must be used, where access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted to [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").

The [C1 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for system-internal access to APIs from other repository objects. It guarantees stable APIs for use within the same [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)
-   [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)

Continue
[C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)
[C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)