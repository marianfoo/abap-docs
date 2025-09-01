  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

list cursor

Current cursor position for the output in a [list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). This is represented by the contents of the [system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") [sy-colno](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm) (position) and [sy-linno](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.