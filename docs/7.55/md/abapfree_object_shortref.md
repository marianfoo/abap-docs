  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  F

FREE OBJECT, OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_object.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Effect

Frees the memory of an [automation object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole on the presentation server.

Addition

-   NO FLUSH
    The effect is that the release is passed to the presentation layer only after function module FLUSH is called or when a [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") changes.