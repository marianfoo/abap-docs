  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) →  [ABAP RESTful Programming Model in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-restful.htm) → 

ABAP EML in Release 7.54

[1\. Entity Manipulation Language](#!ABAP_MODIFICATION_1@1@)

Modification 1

Entity Manipulation Language

Entity Manipulation Language (or [EML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) for short) is a set of ABAP-based statements for manipulating the [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") that are granted a behavior by the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). EML statements allow:

-   Write and read operations on CDS entities.

-   Triggering the saver sequence.

-   Handling of the late numbering.

-   Undoing all changes.

-   Explicit locking of instances for a following modification.