  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SKIP - Short Reference

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