  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

SKIP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapskip.htm)

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Effect

Positions the list cursor in a line of the current list.

Additions

-   n
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_cursor_glosry.htm "Glossary Entry") n lines underneath the current line. If not specified, n is set implicitly to 1.
    
-   TO LINE line
    Positions the list cursor in the line line.