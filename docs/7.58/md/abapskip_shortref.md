  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SKIP%2C%20ABAPSKIP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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