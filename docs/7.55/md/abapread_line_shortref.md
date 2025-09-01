  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

READ LINE - Quick reference

[Reference](javascript:call_link\('abapread_line.htm'\))

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                  *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*LINE VALUE INTO wa*\]*
     *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Effect

Reads a list line from the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") and assigns the content to sy-lisel.

Additions

-   [LINE    line](javascript:call_link\('abapread_line.htm'\))
    Specifies the line to be read in line.
    

-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](javascript:call_link\('abapread_line.htm'\))
    Specifies the page on which a list event was raised in page or as the top page of the displayed list.
    

-   [INDEX idx](javascript:call_link\('abapread_line.htm'\))
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.
    

-   [CURRENT LINE](javascript:call_link\('abapread_line.htm'\))
    Specifies the line in which a list event was raised.
    

-   [LINE VALUE INTO wa](javascript:call_link\('abapread_line_result.htm'\))
    Assigns the content of the list line to the work area wa.
    

-   [FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](javascript:call_link\('abapread_line_result.htm'\))
    Assigns the output areas of the data objects dobj1, dobj2, ... (in the list line output) to the data objects wa1, wa2, ...