  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SKIP - Quick reference

[Reference](javascript:call_link\('abapskip.htm'\))

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Effect

Positions the list cursor in a line of the current list.

Additions

-   n
    Positions the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") n lines underneath the current line. If not specified, n is set implicitly to 1.
    
-   TO LINE line
    Positions the list cursor in the line line.