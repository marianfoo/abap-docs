---
title: "COMMIT ENTITIES RESPONSES, Dynamic Form"
description: |
  Syntax COMMIT ENTITIES IN SIMULATION MODE RESPONSES OF dyn_tab response_param(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm). Addition: ... IN SIMULATION MODE(#!ABAP_ONE_ADD@1@) Effect Triggers the RAP save sequence and finishes the RAP transaction(h
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapemlcommit_entities_dyn.htm"
abapFile: "abapemlcommit_entities_dyn.htm"
keywords: ["do", "if", "try", "method", "data", "internal-table", "abapemlcommit", "entities", "dyn"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20ENTITIES%20RESPONSES%2C%20Dynamic%20Form%2C%20ABAPEMLCOMMIT_ENTITIES_DYN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

COMMIT ENTITIES RESPONSES, Dynamic Form

Syntax

COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSES OF dyn\_tab [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm).

Addition:

[... IN SIMULATION MODE](#!ABAP_ONE_ADD@1@)

Effect

Triggers the RAP save sequence and finishes the [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). All [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") that have been changed within the RAP transaction and that are present in the transactional buffer are persisted to the database.

The dynamic form of the COMMIT ENTITIES statement allows the root entities for which the commit should be executed to be specified dynamically using the addition OF dyn\_tab. dyn\_tab must be of type ABP\_ENTITY\_NAME\_TAB. The components are the names of the root entities. They must be typed with ABP\_ROOT\_ENTITY\_NAME.

This syntax form of the COMMIT ENTITIES statement includes the retrieval of information returned by [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). [FAILED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) and [REPORTED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) responses can be retrieved for one or more RAP BOs that have been modified beforehand. The parameters following FAILED and REPORTED must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB. For more information on response\_param, see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm).

For general hints on using the statement see the topic [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_COMMIT\_2 demonstrates the dynamic form of the COMMIT ENTITIES statement.

DATA: root\_name1 TYPE abp\_root\_entity\_name
                 VALUE 'DEMO\_MANAGED\_ASSOC\_CUSTOM',
      root\_name2 TYPE abp\_root\_entity\_name
                 VALUE 'DEMO\_MANAGED\_ROOT\_2'.
FINAL(dyn\_tab) = VALUE abp\_entity\_name\_tab( ( root\_name1 )
                                            ( root\_name2 ) ).
COMMIT ENTITIES
RESPONSES OF dyn\_tab
  FAILED   FINAL(failed)
  REPORTED FINAL(reported).

Hints

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").
-   When using COMMIT ENTITIES statements, a check of sy-subrc should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter failed is checked so as to react accordingly. See the topic [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) for more information.

Addition   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode. See more information in topic [COMMIT ENTITIES, IN SIMULATION MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities_simulation.htm).

Executable Example

The example [COMMIT ENTITIES, Dynamic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_commit_dyn_abexa.htm) demonstrates the use of the dynamic form of the COMMIT ENTITIES statement.