  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

release contract

Classification of a [repository object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") that is a prerequisite for its usability as an [released API](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_glosry.htm "Glossary Entry"). A release contract ensures a certain stability regarding consistency and compatibility of released APIs.

There are currently the following release contracts:

-   [C0 contract, release](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc0_contract_glosry.htm "Glossary Entry"), which allows enhancement fields to be added at specified extension options.
-   [C1 contract, use system-internally](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_contract_glosry.htm "Glossary Entry"), which guarantees a stable interface for use within the [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry")
-   [C2 contract, use as remote API](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc2_contract_glosry.htm "Glossary Entry"), which also guarantees a stable interface for use outside the AS ABAP.
-   [C3 contract, manage configuration content](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc3_contract_glosry.htm "Glossary Entry"), which ensures a stable persistence for configuration content.

Objects are classified in [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") or using special transactions such as SCFD\_REGISTRY.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_versions_and_apis.htm)