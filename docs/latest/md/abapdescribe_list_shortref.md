  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DESCRIBE%20LIST%2C%20ABAPDESCRIBE_LIST_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DESCRIBE LIST - Short Reference

[Reference](javascript:call_link\('abapdescribe_list.htm'\))

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
    [LINE-SIZE width](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Width
    [LINE-COUNT page\_lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Page lines
    [LINES lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Number of lines
    [FIRST-LINE first\_line](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Line number of the first line
    [TOP-LINES top\_lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Number of [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry")
    [TITLE-LINES title\_lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Number of title lines
    [HEAD-LINES header\_lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Number of column header lines
    [END-LINES footer\_lines](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) - Number of footer lines
-   INDEX idx
    Specifies the list index in idx. If the index is not specified, either the basic list or the list in which a list event occurred is evaluated.