  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Display](javascript:call_link\('abenlists_displayed.htm'\)) → 

SET CURSOR, List

[Short Reference](javascript:call_link\('abapset_cursor_shortref.htm'\))

Syntax

SET CURSOR *{* *{* FIELD field LINE line
                     *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* LINE  line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Alternatives:

[1\. ... FIELD field LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... col lin](#!ABAP_ALTERNATIVE_3@3@)

Effect

In list processing, this statement positions the cursor in the next list displayed on the screen. This is either the current list or, if no details list is created in an event block after an interactive event, the previous list. The cursor can be positioned by entering a field after FIELD or a line after LINE, or by entering a specific position using col and lin.

If the statement SET CURSOR is not specified, the cursor is positioned by default in the first field in the list that is ready for input or in the command field in the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry").

The statement is ignored if the specified position is outside the display area of the list, or if it points to [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry").

Hint

The exact position of the cursor is only visible in output areas that are ready for input. Otherwise the whole area in which the cursor is positioned is selected.

Alternative 1

... FIELD field LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*

Effect

The cursor is positioned in the list line specified in line in the output area of the data object whose name is contained in field. The entry is not case-sensitive.

-   If OFFSET is not specified, the cursor is positioned in the first column of the output area.

-   If OFFSET is specified without an addition, or with the addition DISPLAY, the cursor is positioned in the column of the output area entered in off.

-   If OFFSET is specified with the addition MEMORY, the cursor is positioned on the character in the output area that is specified in off in the list buffer in the output of the data object in field. If this character is cut off in the list display, the cursor is positioned on the corresponding indicator (< or >).

The data object field must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"). line and off expect data objects of type i.

If the data object specified in field was contained in the output more than once in the visible area of the line, the cursor is positioned in the first output area. If the data object specified in field does not occur in the visible area of the line, the specification is ignored.

If the cursor is to be positioned in the output area of a data object addressed in the WRITE statement using a field symbol, and the same data object is no longer assigned to the field symbol, the name of the data object must be contained in field, and not the name of the field symbol.

Example

In the following output, the cursor is positioned in the output area ready for input of the field input. Without the SET CURSOR statement, the cursor would be positioned on the previous checkbox.

DATA: flag TYPE c LENGTH 1,
      inp  TYPE c LENGTH 10.
SET BLANK LINES ON.
WRITE: / flag AS CHECKBOX, inp INPUT.
SET CURSOR FIELD 'inp' LINE sy-linno.

Alternative 2

... LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*

Effect

The cursor is positioned in the list line specified in line.

-   If OFFSET is not specified, the cursor is positioned in the first column of the row.

-   If OFFSET is specified without an addition, or with the addition DISPLAY, the cursor is positioned in the column entered in off.

-   If OFFSET is specified with the addition MEMORY, the cursor is positioned on the character in the position specified in off in the list buffer. If this character is cut off in the list display, the cursor is positioned on the corresponding indicator (< or >).

line and off expect data objects of type i.

Hint

This variant of the SET CURSOR statement does not work in [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry").

Alternative 3

... col lin

Effect

The cursor is positioned in the column specified in col and the line specified in lin in the list window. col and lin expect data objects of the type i. Column numbering begins at 2.