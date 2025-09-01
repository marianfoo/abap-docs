---
title: "EDITOR-CALL FOR REPORT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeditor-call_shortref.htm) Obsolete Syntax EDITOR-CALL FOR REPORT prog DISPLAY-MODE. Addition: ... DISPLAY-MODE(#!ABAP_ONE_ADD@1@) Effect This statement starts the ABAP Editor for the source code of the program
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeditor-call_for_report.htm"
abapFile: "abapeditor-call_for_report.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapeditor", "call", "for", "report"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_obsolete.htm) →  [Obsolete Editor Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentexteditor.htm) → 

EDITOR-CALL FOR REPORT

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeditor-call_shortref.htm)

Obsolete Syntax

EDITOR-CALL FOR REPORT prog *\[*DISPLAY-MODE*\]*.

Addition:

[... DISPLAY-MODE](#!ABAP_ONE_ADD@1@)

Effect

This statement starts the ABAP Editor for the source code of the program specified in prog. prog must be a character-like data object, which contains the name of a program in uppercase letters that exists in the [repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_glosry.htm "Glossary Entry"). If not, a corresponding message is displayed in the status line.

Once ABAP Editor is started, it offers the full range of functions, as when called in the ABAP Workbench or the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). Forward navigation to branch to other tools is also possible. After returning from the ABAP Editor, the current program continues after the statement EDITOR-CALL.

Hints

-   If an inactive version of the program exists, then this version is loaded.
-   This statement bypasses the authorization checks that are performed when the ABAP Editor is called using a transaction code, however the editor still checks the development authorization of the current user.
-   The statement EDITOR-CALL FOR REPORT calls the function module EDITOR\_PROGRAM internally for the specified program prog, which starts the editor in the current environment (SAP GUI or Eclipse) and performs the required authorization checks.
-   This method of calling the ABAP Editor should no longer be used. Instead, official ABAP Workbench interfaces, such as the function module RS\_TOOL\_ACCESS should be used. If only the properties of the editor control are needed, the GUI class CL\_GUI\_SOURCEEDIT or its subclass CL\_GUI\_ABAPEDIT is used.

Addition   

... DISPLAY-MODE

Effect

The ABAP Editor is started in change mode by default. The addition DISPLAY-MODE causes the ABAP Editor to be started in display mode.

Hint

The ABAP Editor is started in display mode but can be switched to change mode.