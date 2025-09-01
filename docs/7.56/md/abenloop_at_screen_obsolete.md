  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete ABAP Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_obsolet.htm) → 

LOOP AT SCREEN, Short Form

Obsolete Syntax

LOOP AT SCREEN.
  ...
ENDLOOP.

Effect

This is a short form of the statement

[LOOP AT SCREEN INTO screen.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_screen.htm)
  ...
[ENDLOOP.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Hints

-   The [long form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_screen.htm) with an explicitly declared work area should be used instead of the short form.
-   The short form of the statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm) in a loop across an internal table with a [header line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry"), where the built-in structure is used as the header line.