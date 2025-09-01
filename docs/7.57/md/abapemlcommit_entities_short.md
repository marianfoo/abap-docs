  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMIT ENTITIES, Short Form, ABAPEMLCOMMIT_ENTITIES_SHORT, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

COMMIT ENTITIES, Short Form

Syntax

COMMIT ENTITIES *\[*IN SIMULATION MODE*\]*.

Addition:

[... IN SIMULATION MODE](#!ABAP_ONE_ADD@1@)

Effect

Triggers the RAP save sequence and finishes the [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"). All [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that have been changed within the RAP LUW and that are present in the transactional buffer are persisted to the database. The short syntax form of the COMMIT ENTITIES statement does not include any response parameters.

Hint

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry").

Addition   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode, i. e. the RAP save sequence is executed but without actually saving data. A final COMMIT WORK is not implicitly included with this variant. In the save sequence, the finalize, check\_before\_save and cleanup\_finalize methods are called omitting the adjust\_numbers, save, and cleanup methods.

A use case of COMMIT ENTITIES statements with the addition IN SIMULATION MODE is as follows: A non-RAP application modifies data. It needs to persist the data and has its own save logic. Furthermore, it is responsible for the final saving of data from within an [SAP LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry"), i. e. once the SAP LUW is finalized with [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). If other RAP implementations are involved and part of the SAP LUW before this COMMIT WORK, for example, due to new features added or due to a redesign or refactoring, it must be ensured that the overall SAP LUW is consistent with regards to saving. RAP implementations whose save sequence is usually triggered with a COMMIT ENTITIES statement, i. e. without the addition IN SIMULATION MODE, process the complete save sequence automatically including the actual saving. This might lead to inconsistencies because of a potentially incomplete execution of COMMIT WORK while the RAP BOs are already saved with a COMMIT ENTITIES statement. Similarly, inconsistencies can occur if data gets saved from a non-RAP application first and then RAP BOs cannot be saved due to issues. A complete checking of all involved data is not possible. To overcome these potential inconsistencies, the addition IN SIMULATION MODE of the COMMIT ENTITIES statement simulates the saving of the RAP BOs to check the consistency and whether issues occur. If there are no issues with saving the RAP BOs, the saving of all involved (RAP and non-RAP) components from within the SAP LUW can be executed using COMMIT WORK that is triggered by the non-RAP application. If problems show up following the consistency check, the overall implementation can react and avoid the final saving of data at the end of the SAP LUW with COMMIT WORK.

Executable Example

The example [COMMIT ENTITIES, Short and Long Form](javascript:call_link\('abencommit_entities_sh_lo_abexa.htm'\)) demonstrates the use of the short (and long) form of the COMMIT ENTITIES statement.