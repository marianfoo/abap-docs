---
title: "GET PF-STATUS - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_pf.htm) Syntax GET PF-STATUS status PROGRAM prog EXCLUDINGfcode. Effect Returns the current GUI status(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_status_glosry.htm 'Glossary Entry
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_pf-status_shortref.htm"
abapFile: "abapget_pf-status_shortref.htm"
keywords: ["do", "try", "internal-table", "abapget", "status", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  G

GET PF-STATUS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_pf.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDINGfcode*\]*.

Effect

Returns the current [GUI status](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_status_glosry.htm "Glossary Entry") in status.

Additions

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
    

-   EXCLUDING fcode
    Returns the inactive [function codes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_code_glosry.htm "Glossary Entry") in the internal table fcode.