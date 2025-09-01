  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ULINE, ABAPULINE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improve
ment:)

ULINE

[Short Reference](javascript:call_link\('abapuline_shortref.htm'\))

Syntax

ULINE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

Effect

Output of horizontal lines in lists.

This statement mainly has the same effect as the following [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement:

WRITE line *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

In this case, line is a data object with type c and length 1023, which is completely filled with "-" characters. In accordance with the predefined formatting rule for the character "-", these are linked with each other to form a continuous line and are replaced by the appropriate [line element](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry"). The same applies to directly consecutive characters "-" and "|". In contrast to the WRITE statement, ULINE replaces the characters with the line element for an output length of 1.

The position and length of the line are determined by the rules for the WRITE statement. In the simplest case, ULINE produces the following output:

-   A continuous horizontal line along an entire line, if no position and length are specified after AT. In contrast to the WRITE statement, the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") is positioned in the first position of the next line.
-   A line of length len at the horizontal position pos if a position and length are specified after AT.

Hints

-   If the statement [FORMAT FRAMES OFF](javascript:call_link\('abapformat.htm'\)) is used beforehand, the output of ULINE is not displayed as a continuous line, as this statement prevents replacement of the "-" characters with line elements.
-   Output of the system field sy-uline using the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) behaves like the statement ULINE.

Example

Output of a horizontal line along the entire line after the first WRITE output, and two horizontal lines as a part of a frame.

WRITE 'A text in a frame'.
ULINE.
SKIP.
ULINE AT 10(10).
WRITE: /10 '|', 11(8) 'Text' CENTERED, 19 '|'.
ULINE AT /10(10).