  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  A

APPEND - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm)

Syntax

APPEND *{* wa
       *|* *{*INITIAL LINE*}*
       *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]**}* *}*
   TO itab *\[*SORTED BY comp*\]*
   *\[* *{*ASSIGNING <fs> *\[*CASTING*\]**}* *|* *{*REFERENCE INTO dref*}* *\]*.

Effect

Appends lines to an internal table itab.

Additions

-   [wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm)
    Appends a work area wa.
    

-   [INITIAL LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm)
    Appends an initial line.
    

-   [LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm)
    Appends the lines from idx1 to idx2 of the internal table jtab. The table key to be used for this can be specified either statically or dynamically.
    

-   [SORTED BY comp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm)
    Creates a ranking, which is sorted by the line component comp in descending order.
    

-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_result.htm)
    Assigns an appended line to a field symbol <fs> (castings are possible).
    

-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_result.htm)
    Sets a data reference dref to an appended line.