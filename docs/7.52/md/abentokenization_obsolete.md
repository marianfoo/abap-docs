  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_obsolete.htm) → 

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects, and outside of classes they cause the syntax check to issue warnings:

-   Outside of classes, separators (blank characters, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) can be omitted.

-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that directly follows a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as not existing.