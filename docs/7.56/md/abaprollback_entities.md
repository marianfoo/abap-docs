---
title: "ROLLBACK ENTITIES"
description: |
  Syntax ROLLBACK ENTITIES. Effect Rolls back all changes of the current RAP LUW(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_luw_glosry.htm 'Glossary Entry') in the context of RAP. This includes data changes (for example, changes stored in the transactional buffer(https://he
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback_entities.htm"
abapFile: "abaprollback_entities.htm"
keywords: ["do", "if", "case", "try", "method", "data", "abaprollback", "entities"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) → 

ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

Rolls back all changes of the current [RAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_luw_glosry.htm "Glossary Entry") in the context of RAP. This includes data changes (for example, changes stored in the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") by calling the [cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm) method) and enqueue locks. The statement does not provide any output parameters, for example, response or result parameters. ROLLBACK ENTITIES cannot be called within the processing of the LUW within a RAP BO, i. e. within the RAP BO implementation.

In case of a natively supported RAP scenario (for example, [OData](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenodata_glosry.htm "Glossary Entry")), the ROLLBACK ENTITIES call is performed by RAP. In other cases, for example, manually implemented services or applications, the ROLLBACK ENTITIES call must be done explicitly.

Executable Example

The program DEMO\_RAP\_EML\_ROLLBACK\_ENTITIES demonstrates the effect of the ROLLBACK ENTITIES statement with a managed [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"). Two modify operations are executed, the one including the creation of data sets only, the other creating and deleting data sets. Each modify operation gets [committed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) separately. The database tables are then emptied and the very same operations are carried out again, yet the second modify operation includes the ROLLBACK ENTITIES statement which rolls back the modifications that have not yet been saved from the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). Consequently, the output table does not show the changes.