  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20ENTITIES%2C%20Short%20Form%2C%20ABAPEMLCOMMIT_ENTITIES_SHORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COMMIT ENTITIES, Short Form

Syntax

COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* *\[*RESPONSES [response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN SIMULATION MODE](#!ABAP_ADDITION_1@1@)
[2\. ... RESPONSES response\_param.](#!ABAP_ADDITION_2@2@)

Effect

Triggers the RAP save sequence and ends the [RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm "Glossary Entry"). All [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") that have been changed within the RAP transaction and that are present in the transactional buffer are persisted to the database. For general hints on using the statement, see the topic [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm).

Addition 1   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode. See more information in topic [COMMIT ENTITIES, IN SIMULATION MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities_simulation.htm).

Addition 2   

... RESPONSES response\_param.

Effect

You can optionally retrieve information returned by the response parameters of [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). The operands following FAILED and REPORTED must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB. For more information on response\_param, see [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm).

Executable Example

The example [COMMIT ENTITIES, Short and Long Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommit_entities_sh_lo_abexa.htm) demonstrates the use of the short (and long) form of the COMMIT ENTITIES statement.