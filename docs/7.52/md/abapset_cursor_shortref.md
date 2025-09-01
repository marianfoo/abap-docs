  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SET CURSOR - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_dynpro.htm)

Syntax

SET CURSOR *{* *{* FIELD field *\[*LINE line*\]*
                     *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* LINE line
                    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Effect

Sets the cursor position on [screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") and [lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_glosry.htm "Glossary Entry").

Additions

-   [FIELD field *\[*LINE line*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_dynpro.htm)
    Sets the cursor on the screen element or the field field displayed in a list, where line specifies the number of a line in a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") for a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry") or a list.
    
-   [LINE line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_list.htm)
    Sets the cursor on the line of a table control, a step loop, or a list, specified in line.
    
-   [*\[*DISPLAY*|*MEMORY*\]* OFFSET off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_list.htm)
    Defines the offset off on which the cursor is set in the specified element. In lists, DISPLAY and MEMORY distinguish between the screen position and the position in the list buffer.
    
-   [col lin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_dynpro.htm)
    Sets the cursor to the column of the screen specified in col and the line of the screen specified in lin.