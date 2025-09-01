  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN, TABBED BLOCK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_tabbed.htm)

Syntax

SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK tblock.

Effect

Defines a [tabstrip](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentabstrip_control_glosry.htm "Glossary Entry") control or [subscreen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry") area named tblock on the current [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Addition

-   FOR n LINES
    Defines the number of lines in the tabstrip control in n.

-   NO INTERVALS
    Creates a narrower area.