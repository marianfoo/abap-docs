  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20CURSOR%2C%20ABAPGET_CURSOR_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET CURSOR - Short Reference

[Reference](javascript:call_link\('abapget_cursor_dynpro.htm'\))

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

Evaluates the cursor position on [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") and lists.

Additions   

-   [FIELD field](javascript:call_link\('abapget_cursor_list_field.htm'\))
    Returns the name of the screen element of the field displayed on a list in field and determines further field-related properties of the cursor position.
    VALUE val - Returns the value of the screen element or the output area of a list in val.
    LENGTH len - Returns the length of the screen element or the output area of a list in len.
    *\[*DISPLAY*|*MEMORY*\]* OFFSET off - Returns the offset of the cursor in the screen element or in the output area of a list in off. In lists, DISPLAY and MEMORY distinguish between the screen position and the position in the list buffer.
    LINE line - Returns the number of the line for a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry"), for a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), or the list in line.
    AREA area - Returns the name of a table control in area.
-   [LINE    line](javascript:call_link\('abapget_cursor_list_field.htm'\))
    Returns the number of the line of a table control, of a step loop, or the list in line and determines further line-related properties of the cursor position in lists.
    VALUE val - Returns the value of the list line in val.
    LENGTH len - Returns the length of the list line in len.
    *\[*DISPLAY*|*MEMORY*\]* OFFSET off - Returns the offset of the cursor in the list line in off. DISPLAY and MEMORY distinguish between screen position and position in the list buffer.