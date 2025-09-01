  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists.htm) → 

POSITION

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapposition_shortref.htm)

Syntax

POSITION pos.

Effect

This statement places the [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") at the position in the current line in the list buffer specified in pos. The program expects a data object of the type i for pos. If the value of pos is 0 or less or is greater than the page length in sy-linsz defined with the addition [LINE-SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_options.htm) to the program initiating statement or [NEW-PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page.htm), all subsequent output statements do not create any output until the list cursor is positioned within a line again.

Hints

-   An output statement that follows POSITION and does not have its own position specification pos after AT writes to the specified position regardless of whether or not sufficient space is available on the line, cutting off the output length accordingly, if necessary.

-   If an output position is specified within an existing output, it must be ensured that the position always refers to the characters stored in the list buffer. If Unicode characters that require more than one column in the list are displayed, the displayed output position can differ from the specified output position. In addition, the displayed content of a partially overwritten output can be shifted, depending on the characters that overwrote the output.
    

Example

Defines and uses a [macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm "Glossary Entry") write\_frame to draw frames around [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) output. The POSITION statement positions the list cursor for subsequent output.

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