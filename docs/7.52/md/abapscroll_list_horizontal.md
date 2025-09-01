  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Processing Lists in the List Buffer](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [SCROLL LIST](javascript:call_link\('abapscroll.htm'\)) → 

SCROLL LIST - horizontal

[Quick Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

... *{*TO COLUMN col*}*
  *|* *{**{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]**}* ...

Alternatives:

[1\. ... TO COLUMN col](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LEFT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... RIGHT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

These additions are used to scroll horizontally in the list.

Note

When scrolling horizontally using the statement SCROLL, only the upper or lower limit of data objects displayed should be displayed. This is because the positions in the list buffer and in the list displayed only match for these limit values.

Alternative 1

... TO COLUMN col

Effect

The addition TO COLUMN specifies the value from col for the first column in the screen segment; col expects a data object of type i. If the value in col is less than or equal to 0, it is processed as 1; if it is greater than the current line width, it is processed as if it was the same as the line width and a value of 4 is set for sy-subrc.

Alternative 2

... LEFT *\[*BY n PLACES*\]*

Effect

The addition LEFT without BY n PLACES enters a value of 1 for the first column in the screen segment. The addition LEFT with BY n PLACES enters the current first column (sy-staco) minus the value in n as the first column in the display segment; n expects a data object of type i. If the result is less than or equal to 0, it is processed as 1 and a value of 4 is set for sy-subrc.

Alternative 3

... RIGHT *\[*BY n PLACES*\]*

Effect

The addition RIGHT without BY n PLACES enters the line length (sy-linsz) minus the window width (sy-scols minus 2) for the first column in the screen segment. If the result is less than or equal to 0, it is processed as 1. The addition RIGHT with BY n PLACES enters the current first column (sy-staco) plus the value in n for the first column in the display segment; n expects a data object of type i. If the result is greater than the current line length, it is processed as if it were the same as the line length and a value of 4 is set for sy-subrc.