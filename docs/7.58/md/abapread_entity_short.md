---
title: "READ ENTITY, Short Form"
description: |
  Syntax READ ENTITY IN LOCAL MODE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm) entity operations(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-U
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm"
abapFile: "abapread_entity_short.htm"
keywords: ["do", "if", "case", "try", "types", "abapread", "entity", "short"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITY%2C%20Short%20Form%2C%20ABAPREAD_ENTITY_SHORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ ENTITY, Short Form

Syntax

READ ENTITY *\[*[IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm)*\]* entity [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The short form of the READ statement is used for read operations ([operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities_op.htm)) from a single RAP BO entity only. The entity name (entity) can be specified directly, that is, reading from a child entity can also be done directly and not via the [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a RAP BO. In this case, entity must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown. It is possible to include all three read options in one operation per entity entity: [read operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_read_operation_glosry.htm "Glossary Entry"), [read-by-association operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") and an operation executing a function, but only one of each kind within the same READ ENTITY statement.

Addition 1   

... IN LOCAL MODE ...

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Hint

When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm).

Addition 2   

... PRIVILEGED ...

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITY statement.

READ ENTITY demo\_spfli\_flights
ALL FIELDS WITH VALUE #( ( %key-carrid = 'LH'
                           %key-connid = 2407 ) )
RESULT FINAL(read\_entity)
FAILED FINAL(read\_failed).
IF read\_failed-demo\_spfli\_flights IS NOT INITIAL.
  "...
  RETURN.
ENDIF.

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_read_alternatives_abexa.htm) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_read_examples_abexas.htm).