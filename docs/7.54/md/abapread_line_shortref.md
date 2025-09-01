  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  R

READ LINE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm)

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                  *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*LINE VALUE INTO wa*\]*
     *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Effect

Reads a list line from the [list buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_buffer_glosry.htm "Glossary Entry") and assigns the content to sy-lisel.

Additions

-   [LINE    line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm)
    Specifies the line to be read in line.
    
-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm)
    Specifies the page on which a list event was raised in page or as the top page of the displayed list.
    
-   [INDEX idx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm)
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.
    
-   [CURRENT LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line.htm)
    Specifies the line in which a list event was raised.
    
-   [LINE VALUE INTO wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line_result.htm)
    Assigns the content of the list line to the work area wa.
    
-   [FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_line_result.htm)
    Assigns the output areas of the data objects dobj1, dobj2, ... (in the list line output) to the data objects wa1, wa2, ...