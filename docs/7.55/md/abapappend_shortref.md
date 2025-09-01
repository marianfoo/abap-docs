  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

APPEND - Quick reference

[Reference](javascript:call_link\('abapappend.htm'\))

Syntax

APPEND *{* wa
       *|* *{*INITIAL LINE*}*
       *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]**}* *}*
   TO itab *\[*SORTED BY comp*\]*
   *\[* *{*ASSIGNING <fs> *\[*CASTING*\]**}* *|* *{*REFERENCE INTO dref*}* *\]*.

Effect

Appends lines to an internal table itab.

Additions

-   [wa](javascript:call_link\('abapappend_linespec.htm'\))
    Appends a work area wa.
    

-   [INITIAL LINE](javascript:call_link\('abapappend_linespec.htm'\))
    Appends an initial line.
    

-   [LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]*](javascript:call_link\('abapappend_linespec.htm'\))
    Appends the lines from idx1 to idx2 of the internal table jtab. The table key to be used for this can be specified either statically or dynamically.
    

-   [SORTED BY comp](javascript:call_link\('abapappend.htm'\))
    Creates a ranking, which is sorted by the line component comp in descending order.
    

-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapappend_result.htm'\))
    Assigns an appended line to a field symbol <fs> (castings are possible).
    

-   [REFERENCE INTO dref](javascript:call_link\('abapappend_result.htm'\))
    Sets a data reference dref to an appended line.