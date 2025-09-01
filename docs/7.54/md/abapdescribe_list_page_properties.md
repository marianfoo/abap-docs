  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Processing Lists in the List Buffer](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)) → 

DESCRIBE LIST - page\_properties

[Quick Reference](javascript:call_link\('abapdescribe_list_shortref.htm'\))

Syntax

... *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\]*
    *\[*LINES lines*\]*
    *\[*FIRST-LINE first\_line*\]*
    *\[*TOP-LINES top\_lines*\]*
    *\[*TITLE-LINES title\_lines*\]*
    *\[*HEAD-LINES header\_lines*\]*
    *\[*END-LINES footer\_lines*\]* ...

Extras:

[1\. ... LINE-SIZE width](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-COUNT page\_lines](#!ABAP_ADDITION_2@2@)
[3\. ... LINES lines](#!ABAP_ADDITION_3@3@)
[4\. ... FIRST-LINE first\_line](#!ABAP_ADDITION_4@4@)
[5\. ... TOP-LINES top\_lines](#!ABAP_ADDITION_5@5@)
[6\. ... TITLE-LINES title\_lines](#!ABAP_ADDITION_6@6@)
[7\. ... HEAD-LINES header\_lines](#!ABAP_ADDITION_7@7@)
[8\. ... END-LINES footer\_lines](#!ABAP_ADDITION_8@8@)

Effect

Determines the properties of pages using DESCRIBE LIST. The data type i is expected for all target fields.

Addition 1

... LINE-SIZE width

Effect

Inserts the line length of the page defined using the addition LINE-SIZE of the statement at the start of the program or of [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) after width.

Addition 2

... LINE-COUNT page\_lines

Effect

Inserts the page length defined using the addition LINE-COUNT of the statement at the start of the program or of NEW-PAGE after page\_lines.

Addition 3

... LINES lines

Effect

Inserts the number of lines shown on the page including the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") and [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") after lines.

Addition 4

... FIRST-LINE first\_line

Effect

Inserts the line number of the first line of the page, with respect to the whole list, after first\_line. The [page headers](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") and [page footers](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") are included in the line count, but not the empty lines inserted automatically between the list pages.

Addition 5

... TOP-LINES top\_lines

Effect

Inserts the number of lines of the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the page after top\_lines. The standard page header and the lines shown by the event TOP-OF-PAGE are included in the count.

Addition 6

... TITLE-LINES title\_lines

Effect

Inserts the number of lines of the standard title of the [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry") of the page after title\_lines.

Addition 7

... HEAD-LINES header\_lines

Effect

Inserts the number of lines of the column headers of the [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry") of the page after header\_lines.

Addition 8

... END-LINES footer\_lines

Effect

Inserts the number of lines reserved by the addition LINE-COUNT of the statement at the start of the program for the [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") after footer\_lines.