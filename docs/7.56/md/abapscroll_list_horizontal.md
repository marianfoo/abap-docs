  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_complex.htm) →  [SCROLL LIST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm) → 

SCROLL LIST, horizontal

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_shortref.htm)

Syntax

... *{*TO COLUMN col*}*
  *|* *{**{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]**}* ...

Alternatives:

[1\. ... TO COLUMN col](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LEFT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... RIGHT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

These additions are used to scroll horizontally in the list.

Hint

When scrolling horizontally using the statement SCROLL, only the upper or lower limit of data objects displayed should be specified because the positions in the list buffer and in the list displayed only match for these values.

Alternative 1   

... TO COLUMN col

Effect

The addition TO COLUMN specifies the value from col for the first column in the screen segment. col expects a data object of type i. If the value in col is less than or equal to 0, it is processed as 1. If it is greater than the current line width, it is processed like this line width and sy-subrc is set to 4.

Example

Before the first display, the main list is scrolled to column 25. Since [SET LEFT SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_scroll-boundary.htm) is specified, the display of the IDs of the carriers stays fixed.

DATA scarr\_wa TYPE scarr.
SELECT \*
       FROM scarr
       INTO @scarr\_wa.
  WRITE: / scarr\_wa-carrid COLOR COL\_KEY.
  SET LEFT SCROLL-BOUNDARY.
  WRITE: scarr\_wa-carrname,
         scarr\_wa-currcode,
         (40) scarr\_wa-url.
ENDSELECT.
SCROLL LIST TO COLUMN 25.

Alternative 2   

... LEFT *\[*BY n PLACES*\]*

Effect

The addition LEFT without BY n PLACES sets the first column in the screen segment to the value 1. The addition LEFT with BY n PLACES sets the current first column (sy-staco) minus the value in n as the first column in the display segment. n expects a data object of type i. If the result is less than or equal to 0, it is processed as 1 and sy-subrc is set to 4.

Alternative 3   

... RIGHT *\[*BY n PLACES*\]*

Effect

The addition RIGHT without BY n PLACES sets the line length (sy-linsz) minus the window width (sy-scols minus 2) for the first column in the screen segment. If the result is less than or equal to 0, it is processed as 1. The addition RIGHT with BY n PLACES enters the current first column (sy-staco) plus the value in n for the first column in the display segment; n expects a data object of type i. If the result is greater than the current line length, it is processed like the current line length and sy-subrc is set to 4.