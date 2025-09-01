---
title: "READ LINE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm) Syntax READ  LINE line OF PAGE pageOF CURRENT PAGE INDEX idx  CURRENT LINE  LINE VALUE INTO wa FIELD VALUE dobj1 INTO wa1 dobj2 INTO w
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_shortref.htm"
abapFile: "abapread_line_shortref.htm"
keywords: ["do", "if", "try", "data", "abapread", "line", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  R

READ LINE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm)

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                  *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*LINE VALUE INTO wa*\]*
     *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Effect

Reads a list line from the [list buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_buffer_glosry.htm "Glossary Entry") and assigns the content to sy-lisel.

Additions

-   [LINE    line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm)
    Specifies the line to be read in line.
    
-   [OF *{*PAGE page*}**|**{*CURRENT PAGE*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm)
    Specifies the page on which a list event was raised in page or as the top page of the displayed list.
    
-   [INDEX idx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm)
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.
    
-   [CURRENT LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line.htm)
    Specifies the line in which a list event was raised.
    
-   [LINE VALUE INTO wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_result.htm)
    Assigns the content of the list line to the work area wa.
    
-   [FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_line_result.htm)
    Assigns the output areas of the data objects dobj1, dobj2, ... (in the list line output) to the data objects wa1, wa2, ...