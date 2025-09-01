---
title: "EDITOR-CALL - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_report.htm) Syntax EDITOR-CALL FOR  REPORT prog DISPLAY-MODE  itab TITLE title DISPLAY-MODEBACKUP INTO jtab . Effect Obsolete: Calls ABAP Editor for
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_shortref.htm"
abapFile: "abapeditor-call_shortref.htm"
keywords: ["do", "if", "internal-table", "abapeditor", "call", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EDITOR-CALL, ABAPEDITOR-CALL_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

EDITOR-CALL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_report.htm)

Syntax

EDITOR-CALL FOR *{* *{*REPORT prog *\[*DISPLAY-MODE*\]**}*
                *|* *{*itab *\[*TITLE title*\]*
                        *\[**{*DISPLAY-MODE*}**|**{*BACKUP INTO jtab*}**\]**}* *}*.

Effect

Obsolete: Calls ABAP Editor for a [program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_report.htm) prog or a text editor for text in an [internal table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_itab.htm) itab.

Additions   

-   [DISPLAY-MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_report.htm)
    Opens the editor in display mode
-   [TITLE title](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_itab.htm)
    Displays the title title in the title bar of the text editor.
-   [BACKUP INTO jtab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_itab.htm)
    Assigns the content of itab to the table jtab before opening the editor.