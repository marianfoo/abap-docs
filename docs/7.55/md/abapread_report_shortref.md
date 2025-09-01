---
title: "READ REPORT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report.htm) Syntax READ REPORT prog INTO itab MAXIMUM WIDTH INTO wid. Effect Imports the source code of the ABAP program prog into the internal table itab. Addition -   MAXIMUM WIDTH INTO wid Returns the number o
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report_shortref.htm"
abapFile: "abapread_report_shortref.htm"
keywords: ["do", "internal-table", "abapread", "report", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  R

READ REPORT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report.htm)

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Effect

Imports the source code of the ABAP program prog into the internal table itab.

Addition

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest imported source code line in wid.