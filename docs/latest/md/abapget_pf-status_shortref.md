---
title: "GET PF-STATUS - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_pf.htm) Syntax GET PF-STATUS status PROGRAM prog EXCLUDING fcode. Effect Returns the current GUI status(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_status_glosry.htm 'Glo
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_pf-status_shortref.htm"
abapFile: "abapget_pf-status_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapget", "status", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20PF-STATUS%2C%20ABAPGET_PF-STATUS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET PF-STATUS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_pf.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*.

Effect

Returns the current [GUI status](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_status_glosry.htm "Glossary Entry") in status.

Additions   

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
-   EXCLUDING fcode
    Returns the inactive [function codes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_code_glosry.htm "Glossary Entry") in the internal table fcode.