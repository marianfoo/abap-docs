  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SKIP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapskip.htm)

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Effect

Positions the list cursor in a line of the current list.

Additions

-   n
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") n lines underneath the current line. If not specified, n is set implicitly to 1.
    

-   TO LINE line
    Positions the list cursor in the line line.