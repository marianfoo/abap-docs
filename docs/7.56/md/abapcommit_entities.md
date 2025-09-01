  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

COMMIT ENTITIES

Syntax Forms

[COMMIT ENTITIES, Short Form](javascript:call_link\('abapemlcommit_entities_short.htm'\))
1\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]*.
[COMMIT ENTITIES RESPONSE OF, Long Form](javascript:call_link\('abapemlcommit_entities_long.htm'\))
2\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSE OF bdef1 [response\_param](javascript:call_link\('abapeml_response.htm'\))
                  *\[*RESPONSE OF bdef2 [response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*
                  *\[*...*\]*.
[COMMIT ENTITIES RESPONSES, Dynamic Form](javascript:call_link\('abapemlcommit_entities_dyn.htm'\))
3\. COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSES *\[*OF dyn\_tab*\]* *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.
[COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\))
4\. COMMIT ENTITIES BEGIN *\[*IN SIMULATION MODE*\]*
                        *\[**{*RESPONSE OF ... *|* RESPONSES OF ... *}* *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]**\]*.
   *\[*CONVERT KEY OF bdef
      FROM *\[*TEMPORARY*\]* pre\_key
      TO final\_key.*\]*
  COMMIT ENTITIES END.

Effect

Triggers the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

Within a [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") are changed and created using ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) statements. These transactional changes are stored within the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a RAP BO. Since the content in the transactional buffer disappears at the end of the ABAP session, the saving of changed data to the database must be triggered, otherwise, modify operations would not have any effect on the database. COMMIT ENTITIES statements implicitly include [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) after processing the save sequence and finish the RAP LUW. Thus, all RAP BO instances that were changed within the RAP LUW and that are present in the transactional buffer are persisted to the database.

COMMIT ENTITIES statements can be used for modify operations outside of a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") in ABAP. In case of a natively supported RAP scenario (for example, [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry")), the COMMIT ENTITIES call is performed by RAP.

The following variants of the COMMIT ENTITIES statement can be used:

-   [COMMIT ENTITIES, Short Form](javascript:call_link\('abapemlcommit_entities_short.htm'\))
    
    The short form of the COMMIT ENTITIES statement saves all instances of RAP BOs that are changed within the RAP LUW without providing any response parameters.
    
-   [COMMIT ENTITIES, Long Form](javascript:call_link\('abapemlcommit_entities_long.htm'\))
    
    The long form of the COMMIT ENTITIES statement saves all instances of RAP BOs that are changed within the LUW and provides response parameters.
    
-   [COMMIT ENTITIES OPERATIONS, Dynamic Form](javascript:call_link\('abapemlcommit_entities_dyn.htm'\))
    
    The dynamic form of the COMMIT ENTITIES statement allows the root entities for which the commit should be executed to be specified dynamically.
    
-   [COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\))
    
    This form of the COMMIT statement is relevant for [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.
    

Hint

Using a COMMIT WORK statement triggers the save sequence and saves RAP BO instances from the transactional buffer to the database, too. However, the use of COMMIT ENTITIES statements is preferable in the context of RAP because they offer more features like the retrieval of [responses](javascript:call_link\('abapeml_response.htm'\)) or [key conversion](javascript:call_link\('abapemlcommit_entities_late.htm'\)).

Executable Examples

The following executable examples demonstrate the use of the respective statements.

-   [COMMIT ENTITIES, Short and Long Form](javascript:call_link\('abencommit_entities_sh_lo_abexa.htm'\))
-   [COMMIT ENTITIES, Dynamic Form](javascript:call_link\('abeneml_commit_dyn_abexa.htm'\))
-   [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](javascript:call_link\('abencommit_entities_beginend_abexa.htm'\))
-   [COMMIT ENTITIES IN SIMULATION MODE](javascript:call_link\('abencommit_entities_sim_mod_abexa.htm'\))

Continue
[COMMIT ENTITIES, Short Form](javascript:call_link\('abapemlcommit_entities_short.htm'\))
[COMMIT ENTITIES RESPONSE OF, Long Form](javascript:call_link\('abapemlcommit_entities_long.htm'\))
[COMMIT ENTITIES RESPONSES, Dynamic Form](javascript:call_link\('abapemlcommit_entities_dyn.htm'\))
[COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\))
[Examples for ABAP EML COMMIT ENTITIES](javascript:call_link\('abencommit_entities_abexas.htm'\))