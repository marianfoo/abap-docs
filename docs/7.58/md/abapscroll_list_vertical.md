---
title: "SCROLL LIST, vertical"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscroll_shortref.htm) Syntax ... TO FIRST PAGELAST PAGEPAGE pag LINE lin  FORWARDBACKWARD n PAGES ... Alternatives: 1. ... TO FIRST PAGE(#!ABAP_ALT
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscroll_list_vertical.htm"
abapFile: "abapscroll_list_vertical.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapscroll", "list", "vertical"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_complex.htm) →  [SCROLL LIST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscroll.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SCROLL%20LIST%2C%20vertical%2C%20ABAPSCROLL_LIST_VERTICAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SCROLL LIST, vertical

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscroll_shortref.htm)

Syntax

... *{*TO *{**{*FIRST PAGE*}**|**{*LAST PAGE*}**|**{*PAGE pag*}**}* *\[*LINE lin*\]**}*
  *|* *{**{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]**}* ...

Alternatives:

[1\. ... TO FIRST PAGE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TO LAST PAGE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... TO PAGE pag](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*](#!ABAP_ALTERNATIVE_4@4@)

Addition:

[... LINE lin](#!ABAP_ONE_ADD@1@)

Effect

These additions are used to scroll vertically in the list.

Alternative 1   

... TO FIRST PAGE

Effect

The addition TO FIRST PAGE sets the top page of the screen segment to the first page of the list.

Alternative 2   

... TO LAST PAGE

Effect

The addition TO LAST PAGE sets the top page of the screen segment to the last page of the list.

Alternative 3   

... TO PAGE pag

Effect

The addition TO PAGE pag sets the top page of the screen segment to the page specified in pag. pag expects a data object of type i. If the value in pag is 0 or less, it is processed as 1. If it is greater than the number of pages, it is processed like this number of pages and sy-subrc is set to 4.

Addition   

... LINE lin

Effect

The addition LINE specifies which line is displayed first on the pages selected using PAGE. If the addition LINE is not used, the list is displayed starting with the first line on the selected page. If the addition LINE is specified, the line on the selected page specified in lin is displayed under the [page header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpage_header_glosry.htm "Glossary Entry"), not counting the page header. lin expects a data object of type i. If the value in lin is 0 or less, it is processed as 1. If it is greater than the page length, it is processed like this page length and sy-subrc is set to 4.

Alternative 4   

... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*

Effect

The additions FORWARD and BACKWARD without n PAGES move the current screen segment up or down by the current number of lines in the GUI window (sy-srows). The [page header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpage_header_glosry.htm "Glossary Entry") of the top page displayed is always displayed first.

The additions FORWARD and BACKWARD with n PAGES define the top page in the screen segment on the page derived by adding or subtracting the value in n from the current top page. n expects a data object of type i. If the resulting value is less than or equal to 0 or is greater than the number of pages, it is processed as 1 or like this number of pages and sy-subrc is set to 4. The resulting page is displayed starting with the first line.