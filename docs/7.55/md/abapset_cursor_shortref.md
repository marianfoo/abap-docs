  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET CURSOR - Quick reference

[Reference](javascript:call_link\('abapset_cursor_dynpro.htm'\))

Syntax

SET CURSOR *{* *{* FIELD field *\[*LINE line*\]*
                     *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* LINE line
                    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Effect

Sets the cursor position on [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") and [lists](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry").

Additions

-   [FIELD field *\[*LINE line*\]*](javascript:call_link\('abapset_cursor_dynpro.htm'\))
    Sets the cursor on the screen element or the field field displayed in a list, where line specifies the number of a line in a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") for a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") or a list.
    

-   [LINE    line](javascript:call_link\('abapset_cursor_list.htm'\))
    Sets the cursor on the line of a table control, a step loop, or a list, specified in line.
    

-   [*\[*DISPLAY*|*MEMORY*\]* OFFSET off](javascript:call_link\('abapset_cursor_list.htm'\))
    Defines the offset off on which the cursor is set in the specified element. In lists, DISPLAY and MEMORY distinguish between the screen position and the position in the list buffer.
    

-   [col lin](javascript:call_link\('abapset_cursor_dynpro.htm'\))
    Sets the cursor to the column of the screen specified in col and the line of the screen specified in lin.