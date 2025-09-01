---
title: "GET PF-STATUS - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_pf.htm) Syntax GET PF-STATUS status PROGRAM prog EXCLUDING fcode. Effect Returns the current GUI status(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_status_glosry.htm 'Glossary Entr
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_pf-status_shortref.htm"
abapFile: "abapget_pf-status_shortref.htm"
keywords: ["do", "try", "internal-table", "abapget", "status", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  G

GET PF-STATUS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_pf.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*.

Effect

Returns the current [GUI status](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_status_glosry.htm "Glossary Entry") in status.

Additions

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
-   EXCLUDING fcode
    Returns the inactive [function codes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_code_glosry.htm "Glossary Entry") in the internal table fcode.