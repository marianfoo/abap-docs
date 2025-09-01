  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20ENTITIES%20RESPONSE%20OF%2C%20Long%20Form%2C%20ABAPEMLCOMMIT_ENTITIES_LONG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

COMMIT ENTITIES RESPONSE OF, Long Form

Syntax

COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSE OF bdef1 [response\_param](javascript:call_link\('abapeml_response.htm'\))
                                    *\[*RESPONSE OF bdef2 [response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*
                                    *\[*...*\]*.

Addition:

[... IN SIMULATION MODE](#!ABAP_ONE_ADD@1@)

Effect

Used to trigger the save sequence and finish the [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"). All [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that have been changed within the RAP transaction and that are present in the transactional buffer are persisted to the database. The long syntax form of the COMMIT ENTITIES statement includes the retrieval of information returned by the FAILED and REPORTED response parameters of [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") for multiple [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). [FAILED](javascript:call_link\('abapeml_response.htm'\)) and [REPORTED](javascript:call_link\('abapeml_response.htm'\)) responses can be retrieved for one or more RAP BOs that have been modified beforehand. bdef1, bdef2, etc., must be the names of root entities.

The responses of each involved BO must be requested separately. The operands following the additions FAILED and REPORTED must be of type [TYPE RESPONSE FOR FAILED LATE](javascript:call_link\('abaptype_response_for.htm'\)) or [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)) respectively. For more information on response\_param, see [here](javascript:call_link\('abapeml_response.htm'\)).

For general hints on using the statement see the topic [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_COMMIT\_1 demonstrates the long form of the COMMIT ENTITIES statement.

COMMIT ENTITIES
  RESPONSE OF demo\_managed\_root\_2
    FAILED   FINAL(failed)
    REPORTED FINAL(reported)
  RESPONSE OF demo\_managed\_assoc\_custom
    FAILED   FINAL(failed2)
    REPORTED FINAL(reported2).

Addition   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode. See more information in topic [COMMIT ENTITIES, IN SIMULATION MODE](javascript:call_link\('abapcommit_entities_simulation.htm'\)).

Executable Example

The example [COMMIT ENTITIES, Short and Long Form](javascript:call_link\('abencommit_entities_sh_lo_abexa.htm'\)) demonstrates the use of the long (and short) form of the COMMIT ENTITIES statement.