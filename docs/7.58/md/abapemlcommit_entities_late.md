  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20ENTITIES%20BEGIN%2C%20END%2C%20ABAPEMLCOMMIT_ENTITIES_LATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COMMIT ENTITIES BEGIN, END

Syntax

COMMIT ENTITIES BEGIN *\[*IN SIMULATION MODE*\]*
                      *\[**{*RESPONSES [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*}*
                       *|* *{*RESPONSE OF ... [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*}*
                       *|* *{*RESPONSES OF ... [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*}**\]*.
  ...
  [*\[*CONVERT KEY OF bdef](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_key.htm)
    [FROM *\[*TEMPORARY*\]* pre\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_key.htm)
    [TO final\_key.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_key.htm)*\]*
  ...
COMMIT ENTITIES END.

Additions:

[1\. ... IN SIMULATION MODE](#!ABAP_ADDITION_1@1@)
[2\. ... RESPONSES response\_param.](#!ABAP_ADDITION_2@2@)
[3\. ... RESPONSE OF ... response\_param.](#!ABAP_ADDITION_3@3@)
[4\. ... RESPONSES OF ... response\_param.](#!ABAP_ADDITION_4@4@)

Effect

Triggers the RAP save sequence and finishes the [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). This variant is relevant for [RAP modify operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") on entities for which [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) has been enabled. It is used to get the final keys from the preliminary keys.

For [RAP modify operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") on entities for which [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_numbering_glosry.htm "Glossary Entry") has been enabled, only preliminary identifiers have been assigned, for example [%pid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_pid.htm) or temporary keys. Those preliminary identifiers are converted to final keys when calling the [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") as part of the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). If your use case is to retrieve the final keys of the new instances, this COMMIT ENTITIES variant defines a scope in which the EML statement [CONVERT KEY OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_key.htm) can be used to retrieve the final keys from the preliminary keys.

For general hints on using the statement see the topic [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm).

Syntax Part

Details

COMMIT ENTITIES BEGIN ...

Opens the commit scope.

COMMIT ENTITIES END.

Closes the commit scope. With the closing, all information on keys that are relevant for operations performed beforehand are lost.

Hints

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").
-   When using COMMIT ENTITIES statements, a check of sy-subrc should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter failed is checked so as to react accordingly. See the topic [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) for more information. If this variant is used, sy-subrc should be checked after the statement with the addition BEGIN.

Addition 1   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode. See more information in topic [COMMIT ENTITIES, IN SIMULATION MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities_simulation.htm).

Addition 2   

... RESPONSES response\_param.

Effect

Used for retrieving information returned by the response parameters of [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). For more information on response\_param, see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm).

Addition 3   

... RESPONSE OF ... response\_param.

Effect

Used for retrieving information returned by the response parameters of [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). For more information on response\_param, see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm).

In this case, it is the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapemlcommit_entities_long.htm) with which multiple root entities can be specified.

Addition 4   

... RESPONSES OF ... response\_param.

Effect

Used for retrieving information returned by the response parameters of [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). For more information on response\_param, see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm).

In this case, it is the [dynamic form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapemlcommit_entities_dyn.htm).

Executable Example

The example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommit_entities_beginend_abexa.htm) demonstrates the use of this COMMIT ENTITIES statement including CONVERT KEY OF.

Continue
[CONVERT KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_key.htm)