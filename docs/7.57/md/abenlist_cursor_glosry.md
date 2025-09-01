  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: list cursor, ABENLIST_CURSOR_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

list cursor

Current cursor position for the output in a [list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_list_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). This is represented by the content of the [system fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") [sy-colno](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm) (position) and [sy-linno](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.