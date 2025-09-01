  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

list cursor

Current cursor position for output in a [list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). Defined by the contents of the [system fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") [sy-colno](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm) (position) and [sy-linno](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm) (line) and refers to the current page in the list. Since a single character may occupy more columns in the list than positions in the list buffer, only the horizontal position of the list cursor which also corresponds to the column in the displayed list is guaranteed for the lower and upper output limits.