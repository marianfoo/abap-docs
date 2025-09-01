  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  U

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ULINE%2C%20ABAPULINE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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