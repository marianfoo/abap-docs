  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  U

ULINE - Short Reference

[Reference](javascript:call_link\('abapuline.htm'\))

Syntax

ULINE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

Effect

Creates an unbroken horizontal line in a list.

Additions

-   *\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]*
    Specifies line break/, horizontal position pos, and length len of the line. If these are not specified, an unbroken line is created in a new line.
-   NO-GAP
    Positions the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") directly after the output and not in the next but one position of the list buffer.