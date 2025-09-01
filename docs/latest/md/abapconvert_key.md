  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) →  [COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONVERT%20KEY%2C%20ABAPCONVERT_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONVERT KEY

Syntax

CONVERT KEY OF bdef
  FROM *\[*TEMPORARY*\]* pre\_key
  TO final\_key.

Effect

Used to retrieve the final keys (final\_key) from preliminary keys (pre\_key) in the context of [RAP late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry"). It is only possible between a [COMMIT ENTITIES BEGIN...](javascript:call_link\('abapemlcommit_entities_late.htm'\)) and COMMIT ENTITIES END. statement.

Details on the syntax elements:

Syntax Elements

Details

CONVERT KEY OF bdef ...

Specifies the [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") bdef for which the keys should be converted. In contrast to other EML statements, the CONVERT KEY OF statement does not operate on mass data, i. e. internal tables, but on single values (pre\_key, final\_key).

... FROM \[TEMPORARY\] pre\_key ...

Specifies the value of the preliminary key pre\_key. The type of pre\_key must be compatible with [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) or [%pre](javascript:call_link\('abapderived_types_pre.htm'\)) in case of using the addition TEMPORARY.
The optional addition TEMPORARY is only relevant in late numbering scenarios in which %pre is used to contain the preliminary keys during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") - instead of [%pid](javascript:call_link\('abapderived_types_pid.htm'\)).
For more information on the use of %pid, %pre and %key in the context of late numbering scenarios, see the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\)).

... TO final\_key.

final\_key specifies the final key value. The type of final\_key must be compatible with the primary key's type.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_COMMIT\_3 demonstrates the COMMIT ENTITIES BEGIN ... END variant and CONVERT KEY OF.

DATA: mapped\_early TYPE RESPONSE FOR MAPPED EARLY
        demo\_umanaged\_root\_late\_num.
COMMIT ENTITIES BEGIN.
  LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num
    ASSIGNING FIELD-SYMBOL(<mapped\_early>).
    CONVERT KEY OF demo\_umanaged\_root\_late\_num
      FROM <mapped\_early>-%pid
      TO FINAL(lv\_root\_key).
  ENDLOOP.
COMMIT ENTITIES END.

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_LATENU2 demonstrates the COMMIT ENTITIES BEGIN ... END variant and CONVERT KEY OF with the addition TEMPORARY.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    DATA:
      mapped\_early TYPE RESPONSE FOR MAPPED EARLY
                   demo\_umanaged\_root\_late\_num3.
    METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    ...
    COMMIT ENTITIES BEGIN RESPONSES FAILED DATA(failed\_late)
         REPORTED DATA(reported\_late).
    ...
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num3
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num3
        FROM TEMPORARY VALUE #( %pid = <mapped\_early>-%pid
                                %tmp = <mapped\_early>-%key )
        TO DATA(lv\_final\_key).
    ENDLOOP.
    ...
    COMMIT ENTITIES END.
  ENDMETHOD.
ENDCLASS.

Executable Examples

-   The example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](javascript:call_link\('abencommit_entities_beginend_abexa.htm'\)) demonstrates the use of this COMMIT ENTITIES statement including CONVERT KEY OF.
-   The example [Using %pre / %tmp](javascript:call_link\('abenderived_types_pre_tmp_abexa.htm'\)) demonstrates the use of %pre and %tmp with an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") in a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario. In this context, a COMMIT ENTITIES statement including CONVERT KEY OF with the addition TEMPORARY is used.