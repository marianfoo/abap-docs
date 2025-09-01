  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) →  [COMMIT ENTITIES BEGIN, END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONVERT KEY, ABAPCONVERT_KEY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CONVERT KEY

Syntax

CONVERT KEY OF bdef
  FROM *\[*TEMPORARY*\]* pre\_key
  TO final\_key.

Effect

This statement is only possible between [COMMIT ENTITIES BEGIN, END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm).

Syntax Part

Details

CONVERT KEY OF bdef.

Specifies the RAP BO bdef for which the keys should be converted. In contrast to other EML statements, the CONVERT KEY OF statement does not operate on mass data, i. e. internal tables, but on single values (pre\_key, final\_key). The CONVERT KEY statement is only possible in this context.

FROM \[TEMPORARY\] pre\_key

Specifies the value of the preliminary key pre\_key. The type of pre\_key must be compatible with [%pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pid.htm) or [%pre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pre.htm) in case of using the addition TEMPORARY.
The addition TEMPORARY is only relevant in late numbering scenarios in which [%key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_key.htm) is used to contain the preliminary keys during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") - instead of [%pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pid.htm).
For more information on the use of %pid, %pre and %key in the context of late numbering scenarios, see the topic [Use of Keys and RAP BO Instance Identifiers in a Nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm).

TO final\_key.

final\_key specifies the final key value. The type of final\_key must be compatible with the primary key's type.

Example

The following source code section taken from DEMO\_RAP\_EML\_COMMIT\_3 demonstrates the COMMIT ENTITIES BEGIN ... END variant and CONVERT KEY OF.

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

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_LATENU2 demonstrates the COMMIT ENTITIES BEGIN ... END variant and CONVERT KEY OF with the addition TEMPORARY.

COMMIT ENTITIES BEGIN RESPONSES FAILED DATA(failed\_late)
     REPORTED DATA(reported\_late).
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num3
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num3
        FROM TEMPORARY VALUE #( %pid = <mapped\_early>-%pid
                                %tmp = <mapped\_early>-%key )
        TO DATA(lv\_final\_key).
    ENDLOOP.
    COMMIT ENTITIES END.

Executable Examples

-   The example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_beginend_abexa.htm) demonstrates the use of this COMMIT ENTITIES statement including CONVERT KEY OF.
-   The example [Using %pre / %tmp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pre_tmp_abexa.htm) demonstrates the use of %pre and %tmp with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenario. In this context, a COMMIT ENTITIES statement including CONVERT KEY OF with the addition TEMPORARY is used.