---
title: "release_contract_glosry"
description: |
  release_contract_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelease_contract_glosry.htm"
abapFile: "abenrelease_contract_glosry.htm"
keywords: ["do", "if", "try", "class", "abenrelease", "contract", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20release%20contract%2C%20ABENRELEASE_CONTRACT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

release contract

Classification of a [repository object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") that is a prerequisite for its usability as an [released API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry"). A release contract ensures a certain stability regarding consistency and compatibility of released APIs.

There are currently the following release contracts:

-   [C0 contract, release](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry"), which allows enhancement fields to be added at specified extension options.
-   [C1 contract, use system-internally](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_glosry.htm "Glossary Entry"), which guarantees a stable interface for use within the [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry")
-   [C2 contract, use as remote API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc2_contract_glosry.htm "Glossary Entry"), which also guarantees a stable interface for use outside the AS ABAP.
-   [C3 contract, manage configuration content](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc3_contract_glosry.htm "Glossary Entry"), which ensures a stable persistence for configuration content.

Objects are classified in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") or using special transactions such as SCFD\_REGISTRY.

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions_and_apis.htm)