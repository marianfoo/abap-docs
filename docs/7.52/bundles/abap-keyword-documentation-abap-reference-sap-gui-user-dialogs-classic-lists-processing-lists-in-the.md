# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Classic Lists / Processing Lists in the List Buffer / DESCRIBE LIST

Included pages: 2


### abapdescribe_list.htm

---
title: "DESCRIBE LIST"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_shortref.htm) Syntax DESCRIBE LIST  NUMBER OF  LINESPAGES n  LINE linno PAGE page  PAGE pagno page_properties(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list.htm"
abapFile: "abapdescribe_list.htm"
keywords: ["select", "insert", "do", "if", "class", "data", "abapdescribe", "list"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists_complex.htm) → 

DESCRIBE LIST

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_shortref.htm)

Syntax

DESCRIBE LIST *{* *{*NUMBER OF  *{*LINES*|*PAGES*}* n*}*
              *|* *{*LINE linno PAGE page*}*
              *|* *{*PAGE pagno [page\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_page_properties.htm)*}* *}*
              *\[*INDEX idx*\]*.

Alternatives:

[1\. ... NUMBER OF *{*LINES*|*PAGES*}* n](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE linno PAGE page](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... PAGE pagno page\_properties](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement assigns the properties of a list stored in a list buffer to the variables n, page, or the variables specified in [page\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_page_properties.htm).

System Fields

sy-subrc

Meaning

0

The list property was successfully specified.

4

The line specified in linno or page specified in pagno cannot be found.

8

The list level specified in idx cannot be found.

Note

The statement DESCRIBE LIST should only be used for completed lists, because not all properties can be read in a list during its creation process.

Addition

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object (which contains the list index) of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx does not exist, the variables are not changed and sy-subrc is set to the value 8.

Alternative 1

... NUMBER OF *{*LINES*|*PAGES*}* n

Effect

If specified, LINES expects the number of lines, PAGES expects the number of pages in the list saved in n. n expects a data object of the type i. The number of lines is counted from the first to the last line described by an output statement and contains the page headers and page footers. The empty lines inserted automatically between the list pages are not counted.

Alternative 2

... LINE linno PAGE page

Effect

The corresponding page for the line number specified in linno is determined and stored in page. linno and page expect data objects of the type i. If the line specified in linno does not exist, page is not changed and sy-subrc is set to 4. The page headers and page footers are included in the line count, but not the empty lines inserted automatically between the list pages.

Alternative 3

... PAGE pagno page\_properties

Effect

Various properties [page\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_page_properties.htm) for the page number specified in pagno are determined and passed to the specified variables. At least one addition must be specified after pagno. pagno expects the data type i. If the page specified in pagno does not exist, the variables are not changed and sy-subrc is set to the value 4.

Example

Determines some properties of the last page of the list currently displayed using two DESCRIBE statements during a list event.

DATA: last\_page  TYPE i,
      lines      TYPE i,
      first\_line TYPE i,
      top\_lines  TYPE i.
...
AT LINE-SELECTION.
  DESCRIBE LIST: NUMBER OF PAGES last\_page,
                 PAGE last\_page LINES lines
                                FIRST-LINE first\_line
                                TOP-LINES  top\_lines.

Continue
[DESCRIBE LIST - page\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_page_properties.htm)


### abapdescribe_list_page_properties.htm

---
title: "Syntax"
description: |
  ... LINE-SIZE width LINE-COUNT page_lines LINES lines FIRST-LINE first_line TOP-LINES top_lines TITLE-LINES title_lines HEAD-LINES header_lines END-LINES footer_lines ... Extras: 1. ... LINE-SIZE width(#!ABAP_ADDITION_1@1@) 2
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_page_properties.htm"
abapFile: "abapdescribe_list_page_properties.htm"
keywords: ["insert", "do", "try", "class", "data", "abapdescribe", "list", "page", "properties"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists_complex.htm) →  [DESCRIBE LIST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list.htm) → 

DESCRIBE LIST - page\_properties

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list_shortref.htm)

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

Inserts the line length of the page defined using the addition LINE-SIZE of the statement at the start of the program or of [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm) after width.

Addition 2

... LINE-COUNT page\_lines

Effect

Inserts the page length defined using the addition LINE-COUNT of the statement at the start of the program or of NEW-PAGE after page\_lines.

Addition 3

... LINES lines

Effect

Inserts the number of lines shown on the page including the [page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_header_glosry.htm "Glossary Entry") and [page footer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry") after lines.

Addition 4

... FIRST-LINE first\_line

Effect

Inserts the line number of the first line of the page, with respect to the whole list, after first\_line. The [page headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_header_glosry.htm "Glossary Entry") and [page footers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry") are included in the line count, but not the empty lines inserted automatically between the list pages.

Addition 5

... TOP-LINES top\_lines

Effect

Inserts the number of lines of the [page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_header_glosry.htm "Glossary Entry") of the page after top\_lines. The standard page header and the lines shown by the event TOP-OF-PAGE are included in the count.

Addition 6

... TITLE-LINES title\_lines

Effect

Inserts the number of lines of the standard title of the [standard page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_page_header_glosry.htm "Glossary Entry") of the page after title\_lines.

Addition 7

... HEAD-LINES header\_lines

Effect

Inserts the number of lines of the column headers of the [standard page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_page_header_glosry.htm "Glossary Entry") of the page after header\_lines.

Addition 8

... END-LINES footer\_lines

Effect

Inserts the number of lines reserved by the addition LINE-COUNT of the statement at the start of the program for the [page footer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry") after footer\_lines.
