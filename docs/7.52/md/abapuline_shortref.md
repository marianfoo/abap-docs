  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  U

ULINE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapuline.htm)

Syntax

ULINE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]**}* *\[*NO-GAP*\]*.

Effect

Creates an unbroken horizontal line in a list.

Additions

-   *\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len)*\]*
    Specifies line feed /, horizontal position pos, and length len of the line. If these are not specified, an unbroken line is created in a new row.
    
-   NO-GAP
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") directly after the output and not in the next but one position of the list buffer.