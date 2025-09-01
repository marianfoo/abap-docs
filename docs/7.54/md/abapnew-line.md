  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) → 

NEW-LINE

[Quick Reference](javascript:call_link\('abapnew-line_shortref.htm'\))

Syntax

NEW-LINE *\[*NO-SCROLLING*|*SCROLLING*\]*.

Extras:

[1\. ... NO-SCROLLING](#!ABAP_ADDITION_1@1@)
[2\. ... SCROLLING](#!ABAP_ADDITION_2@2@)

Effect

This statement sets the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") at the first position of the next line after the current line, if the current position of the list cursor was produced by a previous output statement. In the first line of a new page and if the current list cursor was set to the list line using the statements [SKIP](javascript:call_link\('abapskip.htm'\)), NEW-LINE, [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) or [BACK](javascript:call_link\('abapback.htm'\)), NEW-LINE is ignored by the list cursor.

Note

The statement NEW-LINE is executed implicitly at the end of an [event block](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry").

Addition 1

... NO-SCROLLING

Effect

The addition NO-SCROLLING has the effect that the first line of the current list level written after the statement NEW-LINE using an output statement ( [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [ULINE](javascript:call_link\('abapuline.htm'\))) cannot be moved horizontally. This applies to scrolling in the list displayed on the screen by the user and also to scrolling using the statement [SCROLL](javascript:call_link\('abapscroll.htm'\)). Vertical moves are not affected.

Note

To freeze an area that covers multiple lines, the statement [SET LEFT SCROLL-BOUNDARY](javascript:call_link\('abapset_scroll-boundary.htm'\)) can be used.

Example

The line with the output "Fixed Line" is not moved by horizontal scrolling.

WRITE / 'Scrollable Line'.
NEW-LINE NO-SCROLLING.
WRITE: / 'Fixed Line',
       / 'Scrollable Line'.

Addition 2

... SCROLLING

Effect

The addition SCROLLING undoes the addition NO-SCROLLING (default setting). The addition NO-SCROLLING can only be undone before an output statement is executed. Once a line has been frozen, this state can no longer be undone.