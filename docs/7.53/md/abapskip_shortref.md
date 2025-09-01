---
title: "SKIP - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapskip.htm) Syntax SKIP  n  TO LINE line . Effect Positions the list cursor in a line of the current list. Additions -   n Positions the list cursor(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapskip_shortref.htm"
abapFile: "abapskip_shortref.htm"
keywords: ["do", "if", "try", "abapskip", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SKIP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapskip.htm)

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Effect

Positions the list cursor in a line of the current list.

Additions

-   n
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_cursor_glosry.htm "Glossary Entry") n lines underneath the current line. Without specification, n is implicitly set to 1.
    
-   TO LINE line
    Positions the list cursor in the line line.