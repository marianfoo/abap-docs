  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  D

DESCRIBE LIST - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list.htm)

Syntax

DESCRIBE LIST *{* *{*NUMBER OF *{*LINES*|*PAGES*}* n*}*
              *|* *{*LINE linno PAGE page*}*
              *|* *{*PAGE pagno *\[*LINE-SIZE width*\]*
                            *\[*LINE-COUNT page\_lines*\]*
                            *\[*LINES lines*\]*
                            *\[*FIRST-LINE first\_line*\]*
                            *\[*TOP-LINES top\_lines*\]*
                            *\[*TITLE-LINES title\_lines*\]*
                            *\[*HEAD-LINES header\_lines*\]*
                            *\[*END-LINES footer\_lines*\]**}* *}*
              *\[*INDEX idx*\]*.

Effect

Determines the properties of a list in the list buffer.

Additions

-   NUMBER OF *{*LINES*|*PAGES*}* n
    Returns the number of lines or pages in n.
    

-   LINE linno PAGE page
    Returns the page of the line specified in linno in page.
    

-   PAGE pagno
    Returns properties of the page specified in pagno:
    [LINE-SIZE width](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Width
    [LINE-COUNT page\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Page lines
    [LINES lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Number of lines
    [FIRST-LINE first\_line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Line number of the first line
    [TOP-LINES top\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Number of [header lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry")
    [TITLE-LINES title\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Number of title lines
    [HEAD-LINES header\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Number of column header lines
    [END-LINES footer\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) - Number of footer lines
    

-   INDEX idx
    Specifies the list index in idx. If the index is not specified, either the basic list or the list in which a list event occurred is evaluated.