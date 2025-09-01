---
title: "CALL DIALOG - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm) Syntax CALL DIALOG dialog  AND SKIP FIRST SCREEN  USING bdc_tab MODE mode  EXPORTING p1 FROM a1 p2 FROM a2 ... IMPORTING p1 TO a1 p2 TO a2 .... Effect Obsolete:
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog_shortref.htm"
abapFile: "abapcall_dialog_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapcall", "dialog", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  C

CALL DIALOG - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm)

Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Effect

Obsolete: Calls the [dialog module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_module_object_glosry.htm "Glossary Entry") specified in dialog.

Additions

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.
    
-   USING bdc\_tab *\[*MODE mode*\]*
    Executes the dialog module using a [batch input session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") in the internal table bdc\_tab. The processing mode can be specified in mode.
    
-   EXPORTING p1 FROM a1 p2 FROM a2 ...
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   IMPORTING p1 TO a1 p2 TO a2 ...
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...