  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_obsolet.htm) → 

MODIFY SCREEN, Short Form

Obsolete Syntax

MODIFY SCREEN.

Effect

This is a short form of the statement

[MODIFY SCREEN FROM screen.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Hint

The [long form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_screen.htm) with an explicitly declared work area should be used instead of the short form.