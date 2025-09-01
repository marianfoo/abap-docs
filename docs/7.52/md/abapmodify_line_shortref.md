  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

MODIFY LINE - Quick reference

[Reference](javascript:call_link\('abapmodify_line.htm'\))

Syntax

MODIFY *{* *{*LINE line *\[*OF *{*PAGE page*}**|**{*CURRENT PAGE*}**\]* *\[*INDEX idx*\]**}*
       *|* *{*CURRENT LINE*}* *}*
       *\[*LINE VALUE FROM wa*\]*
       *\[*FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...*\]*
       *\[*LINE FORMAT ext\_format\_options*\]*
       *\[*FIELD FORMAT dobj1 ext\_format\_options1
                     dobj2 ext\_format\_options2 ...*\]*.

Effect

Overwrites a list line in the list buffer with the content of sy-lisel and performs additional modifications in the additions.

Additions

-   [LINE line](javascript:call_link\('abapmodify_line.htm'\))
    Specifies the line to be changed in line.
    
-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](javascript:call_link\('abapmodify_line.htm'\))
    Specifies the page in page or the top page displayed in the list in which a list event was raised.
    
-   [INDEX idx](javascript:call_link\('abapmodify_line.htm'\))
    Specifies the list index in idx. If not specified, the list level is used on which a list event was raised.
    
-   [CURRENT LINE](javascript:call_link\('abapmodify_line.htm'\))
    Specifies the line in which a list event was raised.
    
-   [LINE VALUE FROM wa](javascript:call_link\('abapmodify_line_modification.htm'\))
    Overwrites the whole list line with the content of wa.
    
-   [FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...](javascript:call_link\('abapmodify_line_modification.htm'\))
    Overwrites the output areas of the data objects dobj1, dobj2, ... displayed in the list line with the current content of these objects or with the content of the data objects wa1, wa2, ...
    
-   [LINE FORMAT ext\_format\_options](javascript:call_link\('abapmodify_line_modification.htm'\))
    Formats the whole list line using the additions of the statement FORMAT.
    
-   [FIELD FORMAT dobj1 ext\_format\_options1 dobj2 ext\_format\_options2 ...](javascript:call_link\('abapmodify_line_modification.htm'\))
    Formats the output areas of the data objects dobj1, dobj2, ... displayed in the list line using the additions of the statement FORMAT.