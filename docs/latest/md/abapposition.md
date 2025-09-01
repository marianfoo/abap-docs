  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSITION%2C%20ABAPPOSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

POSITION

[Short Reference](javascript:call_link\('abapposition_shortref.htm'\))

Syntax

POSITION pos.

Effect

This statement places the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") at the position of the current line in the list buffer specified in pos. The program expects a data object of the type i for pos. If the value of pos is 0 or less than or equal to 0 or greater than the page length in sy-linsz defined with the addition [LINE-SIZE](javascript:call_link\('abapnew-page_options.htm'\)) of the program-initiating statement or [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)), none of the subsequent output statements create any output until the list cursor is positioned within a line again.

Hints

-   An output statement that follows POSITION and does not have its own position specification pos after AT writes to the specified position regardless of whether or not sufficient space is available on the line, truncating the output length accordingly, if necessary.
-   If an output position is specified within an existing output, it must be ensured that the position always refers to the characters stored in the list buffer. If Unicode characters that require more than one column in the list are displayed, the displayed output position can differ from the specified output position. In addition, the displayed content of a partially overwritten output can be shifted, depending on the characters that overwrote the output.

Example

Definition and use of a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") write\_frame to draw frames around [WRITE](javascript:call_link\('abapwrite-.htm'\)) output. The POSITION statement positions the list cursor for subsequent output.

DATA: x TYPE i,
      y TYPE i,
      l TYPE i.
DEFINE write\_frame.
  x = sy-colno. y = sy-linno.
  WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.
  l = sy-colno - x.
  y -= 1. SKIP TO LINE y.
  ULINE AT x(l).
  y += 2. SKIP TO LINE y.
  ULINE AT x(l).
  y -= 1. x = sy-colno. SKIP TO LINE y. POSITION x.
END-OF-DEFINITION.
SKIP.
WRITE       'Demonstrating'.
write\_frame 'dynamic frames'.
WRITE       'in'.
write\_frame 'ABAP'.
WRITE       'output lists.'.