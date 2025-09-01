  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMIT ENTITIES BEGIN, END, ABAPEMLCOMMIT_ENTITIES_LATE, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

COMMIT ENTITIES BEGIN, END

Syntax

COMMIT ENTITIES BEGIN *\[*IN SIMULATION MODE*\]*
                      *\[**{*RESPONSES [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*}*
                       *|* *{*RESPONSE OF ... [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*}*
                       *|* *{*RESPONSES OF ... [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*}**\]*.
  ...
  [*\[*CONVERT KEY OF bdef](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm)
    [FROM *\[*TEMPORARY*\]* pre\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm)
    [TO final\_key.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm)*\]*
  ...
COMMIT ENTITIES END.

Additions:

[1\. ... IN SIMULATION MODE](#!ABAP_ADDITION_1@1@)
[2\. ... RESPONSES response\_param.](#!ABAP_ADDITION_2@2@)
[3\. ... RESPONSE OF ... response\_param.](#!ABAP_ADDITION_3@3@)
[4\. ... RESPONSES OF ... response\_param.](#!ABAP_ADDITION_4@4@)

Effect

Triggers the RAP save sequence and finishes the [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry"). This variant is relevant for [RAP modify operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") on entities for which [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) has been enabled. It is used to get the final keys from the preliminary keys.

The context of this COMMIT ENTITIES statement is the adjust numbers phase that is triggered as part of the save sequence. For modify operations on entities for which late numbering has been enabled, only preliminary identifiers have been assigned, for example %pid or temporary keys. Those preliminary identifiers are converted to final keys with a successful save. If, for example, the keys of newly created instances are to be transferred to http responses, it must be the final keys and not the preliminary ones from the modify operations.

For this purpose, this COMMIT ENTITIES variant defines a scope in which the EML statement [CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm) can be used to retrieve the final keys from preliminary keys.

Syntax Part

Details

COMMIT ENTITIES BEGIN ...

Opens the commit scope.

COMMIT ENTITIES END.

Closes the commit scope. With the closing, all information on keys that are relevant for operations performed beforehand are lost.

Hint

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").

Addition 1   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode, i. e. the RAP save sequence is executed but without actually saving data. A final COMMIT WORK is not implicitly included with this variant. In the save sequence, the finalize, check\_before\_save and cleanup\_finalize methods are called omitting the adjust\_numbers, save, and cleanup methods.

A use case of COMMIT ENTITIES statements with the addition IN SIMULATION MODE is as follows: A non-RAP application modifies data. It needs to persist the data and has its own save logic. Furthermore, it is responsible for the final saving of data from within an [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenluw_glosry.htm "Glossary Entry"), i. e. once the SAP LUW is finalized with [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm). If other RAP implementations are involved and part of the SAP LUW before this COMMIT WORK, for example, due to new features added or due to a redesign or refactoring, it must be ensured that the overall SAP LUW is consistent with regards to saving. RAP implementations whose save sequence is usually triggered with a COMMIT ENTITIES statement, i. e. without the addition IN SIMULATION MODE, process the complete save sequence automatically including the actual saving. This might lead to inconsistencies because of a potentially incomplete execution of COMMIT WORK while the RAP BOs are already saved with a COMMIT ENTITIES statement. Similarly, inconsistencies can occur if data gets saved from a non-RAP application first and then RAP BOs cannot be saved due to issues. A complete checking of all involved data is not possible. To overcome these potential inconsistencies, the addition IN SIMULATION MODE of the COMMIT ENTITIES statement simulates the saving of the RAP BOs to check the consistency and whether issues occur. If there are no issues with saving the RAP BOs, the saving of all involved (RAP and non-RAP) components from within the SAP LUW can be executed using COMMIT WORK that is triggered by the non-RAP application. If problems show up following the consistency check, the overall implementation can react and avoid the final saving of data at the end of the SAP LUW with COMMIT WORK.

Addition 2   

... RESPONSES response\_param.

Effect

Used for retrieving response information. Response parameters must specified ([response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)), either both FAILED and REPORTED or just one of them.

Addition 3   

... RESPONSE OF ... response\_param.

Effect

Used for retrieving response information. In this case, it is the [long form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_long.htm). Response parameters must specified ([response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)), either both FAILED and REPORTED or just one of them.

Addition 4   

... RESPONSES OF ... response\_param.

Effect

Used for retrieving response information. In this case, it is the [dynamic form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_dyn.htm). Response parameters must be specified ([response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)), either both FAILED and REPORTED or just one of them.

Executable Example

The example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_beginend_abexa.htm) demonstrates the use of this COMMIT ENTITIES statement including CONVERT KEY OF.

Continue
[CONVERT KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm)