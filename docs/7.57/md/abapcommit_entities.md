---
title: "COMMIT ENTITIES"
description: |
  Syntax Forms COMMIT ENTITIES, Short Form(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_short.htm) 1. COMMIT ENTITIES IN SIMULATION MODE RESPONSESresponse_param(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm).
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm"
abapFile: "abapcommit_entities.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "class", "data", "abapcommit", "entities"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMIT ENTITIES, ABAPCOMMIT_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

COMMIT ENTITIES

Syntax Forms

[COMMIT ENTITIES, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_short.htm)

1\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* *\[*RESPONSES[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.

[COMMIT ENTITIES RESPONSE OF, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_long.htm)

2\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSE OF bdef1 [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)
                                      *\[*RESPONSE OF bdef2 [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*
                                      *\[*...*\]*.

[COMMIT ENTITIES RESPONSES, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_dyn.htm)

3\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSES *\[*OF dyn\_tab*\]* *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.

[COMMIT ENTITIES BEGIN, END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm)

4\. COMMIT ENTITIES BEGIN *\[*IN SIMULATION MODE*\]*
                        *\[**{*RESPONSE OF ... *|* RESPONSES OF ... *}* *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]**\]*.
   *\[*CONVERT KEY OF bdef
      FROM *\[*TEMPORARY*\]* pre\_key
      TO final\_key.*\]*
  COMMIT ENTITIES END.

Effect

Triggers the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").

Within a [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry"), [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") are created or changed using ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) statements. These transactional changes are stored within the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") of a RAP BO.

At the end of an ABAP session, the saving of changed or created data to the database must be triggered, which is done by COMMIT ENTITIES statements. Otherwise, the changes are lost. COMMIT ENTITIES terminates RAP LUWs. If the RAP LUWs include [RAP modify operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry"), i. e. there were ABAP EML MODIFY statements before a COMMIT ENTITIES statement, an implicit [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) is triggered after processing the save sequence.

Therefore, all RAP BO instances that are present in the transactional buffer are persisted to the database. However, COMMIT ENTITIES follows an all or nothing approach, i. e. either all instances are valid and correct and all can be saved or none can be saved if at least one instance is invalid.

COMMIT ENTITIES statements can be used for [RAP modify operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") by [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to trigger the data persistency but they cannot be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in ABAP. In case of a natively supported RAP scenario (for example, an SAP Fiori app using [OData](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenodata_glosry.htm "Glossary Entry")), the COMMIT ENTITIES call is not to be used since it is performed implicitly and automatically by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry").

System Fields

COMMIT ENTITIES statements set the system field sy-subrc. Note that using COMMIT ENTITIES statements, it is not guaranteed that the implicit COMMIT WORK is carried out successfully. In case of failures during the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"), the RAP saver method [cleanup\_finalize](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsaver_class_cleanup_finalize.htm) is called for all involved [RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") to ensure that the transactional buffer is cleared for the current RAP LUW. The RAP save sequence is then terminated without persisting the instances to the database. This is indicated by the value that is set for the system field sy-subrc when executing COMMIT ENTITIES statements.

Note: The following statements are only valid for COMMIT ENTITIES statements terminating RAP LUWs that include [RAP modify operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry").

sy-subrc

Meaning

0

The implicit COMMIT WORK has been carried out successfully if a RAP LUW that is terminated by a COMMIT ENTITIES statement includes [RAP modify operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry").

4

The implicit COMMIT WORK has not been carried out successfully. An issue occurred in the early phase of the RAP save sequence (involved RAP saver methods: finalize, check\_before\_save). The value 4 for sy-subrc means that there are responses returned by the [failed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) parameter because of failures in the RAP save sequence. Transactional changes successfully executed in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") remain in the transactional buffer.

8

The implicit COMMIT WORK has not been carried out successfully. An issue occurred in the late phase of the RAP save sequence (involved RAP saver methods: save or save\_modified).
Such an issue can produce inconsistencies which triggers the clearing of the transactional buffer and a ROLLBACK WORK internally. A subsequent RAP modify operation can then lead to a runtime error. If the RAP BO consumer is to proceed after an issue in the late phase of the RAP save sequence, an explicit ROLLBACK ENTITIES is required.

The following variants of the COMMIT ENTITIES statement are available:

-   [COMMIT ENTITIES, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_short.htm)
    
    The short form of the COMMIT ENTITIES statement saves all instances of RAP BOs that are changed within the RAP LUW.
    
-   [COMMIT ENTITIES, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_long.htm)
    
    The long form of the COMMIT ENTITIES statement saves all RAP BO instances that are changed within the RAP LUW and provides responses for individual [RAP BO entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").
    
-   [COMMIT ENTITIES OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_dyn.htm)
    
    The dynamic form of the COMMIT ENTITIES statement allows the root entities for which the commit should be executed to be specified dynamically.
    
-   [COMMIT ENTITIES BEGIN, END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm)
    
    This form of the COMMIT ENTITIES statement is relevant for [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenarios.
    

Hints

-   Using a COMMIT WORK statement also triggers the save sequence and saves RAP BO instances from the transactional buffer to the database. However, the use of COMMIT ENTITIES statements is preferable in the context of RAP because they offer more features like the retrieval of [responses information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) or [key conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm).
-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").
-   ABAP EML statements should not be used within loops.
-   When using COMMIT ENTITIES statements, a check of sy-subrc should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter failed is checked so as to react accordingly.

Executable Examples

The following executable examples demonstrate the use of the respective statements.

-   [COMMIT ENTITIES, Short and Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_sh_lo_abexa.htm)
-   [COMMIT ENTITIES, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_commit_dyn_abexa.htm)
-   [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_beginend_abexa.htm)
-   [COMMIT ENTITIES IN SIMULATION MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_sim_mod_abexa.htm)

Continue
[COMMIT ENTITIES, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_short.htm)
[COMMIT ENTITIES RESPONSE OF, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_long.htm)
[COMMIT ENTITIES RESPONSES, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_dyn.htm)
[COMMIT ENTITIES BEGIN, END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm)
[Examples for ABAP EML COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_abexas.htm)