  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  G

GET CURSOR - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_cursor_dynpro.htm)

Syntax

GET CURSOR *{* *{* FIELD field
                *\[*VALUE val*\]*
                *\[*LENGTH len*\]*
                *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*
                *\[*LINE line*\]*
                *\[*AREA area*\]* *}*
           *|* *{* LINE line
                *\[*VALUE val*\]*
                *\[*LENGTH len*\]*
                *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}* *}*.

Effect

Evaluates the cursor position on [screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") and lists.

Additions

-   [FIELD field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_cursor_list_field.htm)
    Returns the name of the screen element of the field displayed on a list in field and determines further field-related properties of the cursor position.
    VALUE val - Returns the value of the screen element or the output area of a list in val.
    LENGTH len - Returns the length of the screen element or the output area of a list in len.
    *\[*DISPLAY*|*MEMORY*\]* OFFSET off - Returns the offset of the cursor in the screen element or in the output area of a list in off. In lists, DISPLAY and MEMORY distinguish between the screen position and the position in the list buffer.
    LINE line - Returns the number of the line for a [table control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry"), for a [step loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstep_loop_glosry.htm "Glossary Entry"), or the list in line.
    AREA area - Returns the name of a table control in area.
    

-   [LINE    line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_cursor_list_field.htm)
    Returns the number of the line of a table control, of a step loop, or the list in line and determines further line-related properties of the cursor position in lists.
    VALUE val - Returns the value of the list line in val.
    LENGTH len - Returns the length of the list line in len.
    *\[*DISPLAY*|*MEMORY*\]* OFFSET off - Returns the offset of the cursor in the list line in off. DISPLAY and MEMORY distinguish between screen position and position in the list buffer.