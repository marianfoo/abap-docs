---
title: "ABAP - Rules for ABAP Cloud"
description: |
  ABAP Cloud development is restricted as follows compared to classic ABAP(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_abap_glosry.htm 'Glossary Entry'): -   Only the restricted ABAP language version(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ab
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm"
abapFile: "abenabap_strict_rules.htm"
keywords: ["do", "if", "try", "class", "abenabap", "strict", "rules"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20Rules%20for%20ABAP%20Cloud%2C%20ABENABAP_STRICT_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - Rules for ABAP Cloud

ABAP Cloud development is restricted as follows compared to [classic ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_abap_glosry.htm "Glossary Entry"):

-   Only the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry") can be used. The topic [Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_abap_elements.htm) provides an overview of the ABAP language elements that are allowed in this language version compared to [Standard ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_abap_glosry.htm "Glossary Entry").
-   Only [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are [released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_api_glosry.htm "Glossary Entry") for [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry") can be used or extended.
    
    The topic [Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_apis.htm) provides an overview of the released APIs of the current system.
    
-   Only [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") or special enhancement tools can be used.

The stability of released APIs is governed by [release contracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelease_contract_glosry.htm "Glossary Entry"). Accesses to or extensions of released APIs must be done in such a way that they are stable against allowed changes in the APIs. The topic [Working with Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) gives an overview of the according rules.

Continue
[Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_abap_elements.htm)
[Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_apis.htm)
[Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm)