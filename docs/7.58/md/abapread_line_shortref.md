---
title: "READ LINE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm) Syntax READ  LINE line OF PAGE pageOF CURRENT PAGE INDEX idx  CURRENT LINE  LINE VALUE INTO wa FIELD VALUE dobj1 INTO wa1 dobj2 INTO w
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line_shortref.htm"
abapFile: "abapread_line_shortref.htm"
keywords: ["do", "if", "try", "data", "abapread", "line", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20LINE%2C%20ABAPREAD_LINE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ LINE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                  *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*LINE VALUE INTO wa*\]*
     *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Effect

Reads a list line from the [list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_buffer_glosry.htm "Glossary Entry") and assigns the content to sy-lisel.

Additions   

-   [LINE    line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)
    Specifies the line to be read in line.
-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)
    Specifies the page on which a list event was raised in page or as the top page of the displayed list.
-   [INDEX idx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.
-   [CURRENT LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)
    Specifies the line in which a list event was raised.
-   [LINE VALUE INTO wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line_result.htm)
    Assigns the content of the list line to the work area wa.
-   [FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line_result.htm)
    Assigns the output areas of the data objects dobj1, dobj2, ... (in the list line output) to the data objects wa1, wa2, ...