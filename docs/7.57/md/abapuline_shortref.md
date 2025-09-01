  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  U

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ULINE, ABAPULINE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

ULINE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapuline.htm)

Syntax

ULINE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

Effect

Creates an unbroken horizontal line in a list.

Additions   

-   *\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]*
    Specifies line break/, horizontal position pos, and length len of the line. If these are not specified, an unbroken line is created in a new line.
-   NO-GAP
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_cursor_glosry.htm "Glossary Entry") directly after the output and not in the next but one position of the list buffer.