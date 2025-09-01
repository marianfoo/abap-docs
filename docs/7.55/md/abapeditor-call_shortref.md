---
title: "EDITOR-CALL - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_report.htm) Syntax EDITOR-CALL FOR  REPORT prog DISPLAY-MODE  itab TITLE title DISPLAY-MODEBACKUP INTO jtab . Effect Obsolete: Calls ABAP Editor for
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_shortref.htm"
abapFile: "abapeditor-call_shortref.htm"
keywords: ["do", "internal-table", "abapeditor", "call", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  E

EDITOR-CALL - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_report.htm)

Syntax

EDITOR-CALL FOR *{* *{*REPORT prog *\[*DISPLAY-MODE*\]**}*
                *|* *{*itab *\[*TITLE title*\]*
                        *\[**{*DISPLAY-MODE*}**|**{*BACKUP INTO jtab*}**\]**}* *}*.

Effect

Obsolete: Calls ABAP Editor for a [program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_report.htm) prog or a text editor for text in an [internal table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_itab.htm) itab.

Additions

-   [DISPLAY-MODE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_report.htm)
    Opens the editor in display mode
    

-   [TITLE title](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_itab.htm)
    Displays the title title in the title bar of the text editor.
    

-   [BACKUP INTO jtab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_itab.htm)
    Assigns the content of itab to the table jtab before opening the editor.