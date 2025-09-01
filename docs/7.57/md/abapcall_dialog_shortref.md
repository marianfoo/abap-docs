---
title: "CALL DIALOG - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_dialog.htm) Syntax CALL DIALOG dialog  AND SKIP FIRST SCREEN  USING bdc_tab MODE mode  EXPORTING p1 FROM a1 p2 FROM a2 ... IMPORTING p1 TO a1 p2 TO a2 .... Effect Obsolete:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_dialog_shortref.htm"
abapFile: "abapcall_dialog_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapcall", "dialog", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DIALOG, ABAPCALL_DIALOG_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CALL DIALOG - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_dialog.htm)

Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Effect

Obsolete: Calls the [dialog module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_object_glosry.htm "Glossary Entry") specified in dialog.

Additions   

-   AND SKIP FIRST SCREEN
    Suppresses the initial dynpro.
-   USING bdc\_tab *\[*MODE mode*\]*
    Executes the dialog module using a [batch input session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") in the internal table bdc\_tab. The processing mode can be specified in mode.
-   EXPORTING p1 FROM a1 p2 FROM a2 ...
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
-   IMPORTING p1 TO a1 p2 TO a2 ...
    Passes output parameters p1, p2, ... to actual parameters a1, a2, ...