  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) → 

BACK

[Quick Reference](javascript:call_link\('abapback_shortref.htm'\))

Syntax

BACK.

Effect

This statement positions the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") on the first place of the first line in a logical unit. A list contains the following logical units:

-   A line block defined using [RESERVE](javascript:call_link\('abapreserve.htm'\)).
    If BACK is executed after the statement RESERVE, the list cursor is placed in the first line of the current line block.
    
-   The lines within a self-defined [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry").
    If BACK is executed within the event block for [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\)) and is not placed after RESERVE, the list cursor is positioned in the first line below the standard page header.
    
-   The lines of a page below the page header.
    If BACK is executed outside of the event block for TOP-OF-PAGE and not after RESERVE, the list cursor is positioned in the first line below the page header.
    

Example

Displays a small input mask. The input fields are positioned after the description.

DATA: title TYPE c LENGTH 3,
      sname TYPE c LENGTH 20,
      fname TYPE c LENGTH 20.
SKIP 5.
RESERVE 3 LINES.
WRITE: / 'Title',
       / 'Second name',
       / 'First name'.
BACK.
WRITE: /14 title INPUT,
       /14 sname INPUT,
       /14 fname INPUT.