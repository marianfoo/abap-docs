  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SCROLL - Short Reference

[Reference](javascript:call_link\('abapscroll.htm'\))

Syntax

SCROLL LIST *\[* *{* TO COLUMN col *}*
            *|* *{* *{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]* *}* *\]*
            *\[* *{* TO *{* *{*FIRST PAGE*}*
                   *|* *{*LAST PAGE*}*
                   *|* *{*PAGE pag*}* *}*
                   *\[*LINE lin*\]* *}*
              *|* *{* *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]* *}* *\]*
            *\[*INDEX idx*\]*.

Effect

Moves the display area of a list stored in the list buffer.

Additions

-   [TO COLUMN col](javascript:call_link\('abapscroll_list_horizontal.htm'\))
    Moves the area horizontally to the column col.
-   [*{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]*](javascript:call_link\('abapscroll_list_horizontal.htm'\))
    Moves the display area left or right either by the line width or by n places.
-   [TO *{* *{*FIRST PAGE*}* *|* *{*LAST PAGE *}* *|* *{*PAGE pag*}* *\[*LINE lin*\]* *}*](javascript:call_link\('abapscroll_list_vertical.htm'\))
    Moves the display area vertically to the first or last page or to the page specified in pag. Here, the top line lin can be specified.
-   [*{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*](javascript:call_link\('abapscroll_list_vertical.htm'\))
    Moves the display area up or down, either by one page or by pag pages.
-   [INDEX idx](javascript:call_link\('abapscroll.htm'\))
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.