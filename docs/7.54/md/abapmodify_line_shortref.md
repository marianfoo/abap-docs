  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  M

MODIFY LINE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm)

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

-   [LINE line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm)
    Specifies the line to be changed in line.
    
-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm)
    Specifies the page in page or the top page displayed in the list in which a list event was raised.
    
-   [INDEX idx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm)
    Specifies the list index in idx. If not specified, the list level is used on which a list event was raised.
    
-   [CURRENT LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line.htm)
    Specifies the line in which a list event was raised.
    
-   [LINE VALUE FROM wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)
    Overwrites the whole list line with the content of wa.
    
-   [FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)
    Overwrites the output areas of the data objects dobj1, dobj2, ... displayed in the list line with the current content of these objects or with the content of the data objects wa1, wa2, ...
    
-   [LINE FORMAT ext\_format\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)
    Formats the whole list line using the additions of the statement FORMAT.
    
-   [FIELD FORMAT dobj1 ext\_format\_options1 dobj2 ext\_format\_options2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_line_modification.htm)
    Formats the output areas of the data objects dobj1, dobj2, ... displayed in the list line using the additions of the statement FORMAT.