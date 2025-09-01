---
title: "READ REPORT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_report.htm) Syntax READ REPORT prog INTO itab MAXIMUM WIDTH INTO wid. Effect Imports the source code of the ABAP program prog into the internal table itab. Addition -   MAXIMUM WIDTH INTO wid Returns the number o
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_report_shortref.htm"
abapFile: "abapread_report_shortref.htm"
keywords: ["do", "if", "internal-table", "abapread", "report", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ REPORT, ABAPREAD_REPORT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

READ REPORT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_report.htm)

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Effect

Imports the source code of the ABAP program prog into the internal table itab.

Addition  

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest imported source code line in wid.