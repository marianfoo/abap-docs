  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_obsolete.htm) → 

AT field\_symbol

Obsolete Syntax

[AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_itab.htm) *{*NEW*}**|**{*END OF*}* <fsi>.

Effect

If the additions INTO wa or ASSIGNING <fs> are used in the statement [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), a field symbol <fsi> can be specified after [AT *{*NEW*}**|**{*END OF*}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_itab.htm), outside classes. The associated component of the work area wa or the field symbol <fs> is assigned to this field symbol.

Note

This form of specifying components dynamically has been replaced by [(name)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_components.htm).

Bad Example

name = 'WA-COL1'.
ASSIGN (name) TO <comp>.
LOOP AT itab INTO wa.
  AT NEW <comp>.
    ...
  ENDAT.
ENDLOOP.

Good Example

name = 'COL1'.
LOOP AT itab INTO wa.
  AT NEW (name).
    ...
  ENDAT.
ENDLOOP.