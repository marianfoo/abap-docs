  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) →  [COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\)) → 

CONVERT KEY

Syntax

CONVERT KEY OF bdef
  FROM *\[*TEMPORARY*\]* pre\_key
  TO final\_key.

Effect

This statement is only possible between [COMMIT ENTITIES BEGIN, END](javascript:call_link\('abapemlcommit_entities_late.htm'\)).

Syntax Part

Details

CONVERT KEY OF bdef.

Specifies the RAP BO (bdef) for which the keys should be converted. In contrast to other EML statements, the CONVERT KEY OF statement does not operate on mass data, i. e. internal tables, but on single values (pre\_key, final\_key). The CONVERT KEY statement is only possible in this context.

FROM \[TEMPORARY\] pre\_key

Specifies the value of the preliminary key (pre\_key). The type of pre\_key must be compatible with the types of %pid, i. e. ABP\_BEHV\_PID, the key or ...-%pre. The keyword TEMPORARY is relevant if the variant [in place](javascript:call_link\('abenbdl_late_numbering.htm'\)) is used in the context of late numbering. Here, the regular %key fields (with the preliminary key values) - instead of %pid - are used for pre\_key for which the final key is retrieved via CONVERT KEY OF.

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
      TO DATA(lv\_root\_key).
  ENDLOOP.
COMMIT ENTITIES END.

Executable Example

The example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](javascript:call_link\('abencommit_entities_beginend_abexa.htm'\)) demonstrates the use of this COMMIT ENTITIES statement including CONVERT KEY OF.