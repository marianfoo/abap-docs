---
title: "SET PF-STATUS - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_dynpro.htm) Syntax SET PF-STATUS status OF PROGRAM prog EXCLUDING fcode IMMEDIATELY. Effect Sets the GUI status(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_status
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_shortref.htm"
abapFile: "abapset_pf-status_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapset", "status", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SET PF-STATUS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_dynpro.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]*
                     *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Effect

Sets the [GUI status](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_status_glosry.htm "Glossary Entry").

Additions

-   [OF PROGRAM prog](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_dynpro.htm)
    Specifies the program prog in which the GUI status is defined.
    

-   [EXCLUDING fcode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_dynpro.htm)
    Deactivates functions of the GUI status by specifying the [function codes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_code_glosry.htm "Glossary Entry") in a character string or in an internal table fcode.
    

-   [IMMEDIATELY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_pf-status_list.htm)
    Sets the GUI status after an interactive list event for the currently displayed list.