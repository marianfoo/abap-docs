---
title: "READ ENTITIES, Long Form"
description: |
  Syntax READ ENTITIES OF bdef  IN LOCAL MODE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)PRIVILEGED(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) ENTITY entity1 operations(https://help.sap.com/doc/aba
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entities_long.htm"
abapFile: "abapread_entities_long.htm"
keywords: ["insert", "do", "if", "try", "types", "abapread", "entities", "long"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITIES%2C%20Long%20Form%2C%20ABAPREAD_ENTITIES_LONG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ ENTITIES, Long Form

Syntax

READ ENTITIES OF bdef *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]*
         ENTITY entity1 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities_op.htm)
        *\[*ENTITY entity2 [operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities_op.htm)*\]*
        *\[*...*\]*
        *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The long syntax form of the READ statement is used for collecting multiple read operations ([operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities_op.htm)) on multiple entities of a RAP BO. Yet, it can also be used to just read from a single entity of a RAP BO.

bdef must be a root entity followed by a list of operations grouped by individual entities. entity1, entity2, and so on, must be entities contained in the composition tree of the root entity bdef. The root entity itself can also be inserted in the position of entity1, for example. Each part of the list of operations specified after READ ENTITIES OF bdef has the same syntax as the [short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_short.htm). At least one entry (ENTITY entity1 with the operation) must be specified. The same entity can be specified after ENTITY only once for a read operation. The root entity name can be used more than once but only in the context of [read-by-association operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") or executing actions, for example as follows:
READ ENTITIES OF bdef
   ENTITY bdef ...
   ENTITY bdef BY \\\_assoc1 ...
   ENTITY bdef BY \\\_assoc2 ...
...

The root entity name in the position of the first statement, READ ENTITIES OF bdef, must be the full entity name. entity1, and so on, should be the entity alias names if provided in the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

Addition 1   

... IN LOCAL MODE ...

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Hint

When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_messages_abexa.htm).

Addition 2   

... PRIVILEGED ...

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITIES statement.

READ ENTITIES OF demo\_spfli\_flights
  ENTITY demo\_spfli\_flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'SQ'
                               %key-connid = 67 ) )
    RESULT FINAL(read\_entities\_of)
  ENTITY sflight
    ALL FIELDS WITH
       VALUE #( ( %key-Carrid = 'AA'
                  %key-connid = 17 Fldate = '20170125'  ) )
    RESULT FINAL(read\_entities\_child)
  ENTITY demo\_spfli\_flights
    BY \\\_Flights
    ALL FIELDS WITH
        VALUE #( ( %key-Carrid = 'AZ'
                   %key-connid = 791 ) )
    RESULT FINAL(rba2)
    FAILED FINAL(read\_entities\_failed).
IF read\_entities\_failed-demo\_spfli\_flights IS NOT INITIAL.
  ...
ENDIF.

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_read_alternatives_abexa.htm) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_read_examples_abexas.htm).