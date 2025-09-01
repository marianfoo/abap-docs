---
title: "DESCRIBE LIST"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_shortref.htm) Syntax DESCRIBE LIST  NUMBER OF  LINESPAGES n  LINE linno PAGE page  PAGE pagno page_properties(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list.htm"
abapFile: "abapdescribe_list.htm"
keywords: ["select", "insert", "do", "if", "class", "data", "abapdescribe", "list"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists_complex.htm) → 

DESCRIBE LIST

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_shortref.htm)

Syntax

DESCRIBE LIST *{* *{*NUMBER OF  *{*LINES*|*PAGES*}* n*}*
              *|* *{*LINE linno PAGE page*}*
              *|* *{*PAGE pagno [page\_properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm)*}* *}*
              *\[*INDEX idx*\]*.

Alternatives:

[1\. ... NUMBER OF *{*LINES*|*PAGES*}* n](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE linno PAGE page](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... PAGE pagno page\_properties](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement assigns the properties of a list stored in a list buffer to the variables n, page, or the variables specified in [page\_properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm).

System Fields

sy-subrc

Meaning

0

The list property was successfully specified.

4

The line specified in linno or page specified in pagno cannot be found.

8

The list level specified in idx cannot be found.

Hint

The statement DESCRIBE LIST should only be used for completed lists, because not all properties of a list can be read when it is being created.

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

Various properties [page\_properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm) for the page number specified in pagno are determined and passed to the specified variables. At least one addition must be specified after pagno. pagno expects the data type i. If the page specified in pagno does not exist, the variables are not changed and sy-subrc is set to the value 4.

Example

Determines some properties of the last page of the list currently displayed using two DESCRIBE statements in a list event.

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
[DESCRIBE LIST, page\_properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list_page_properties.htm)