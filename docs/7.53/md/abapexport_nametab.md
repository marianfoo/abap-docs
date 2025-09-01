---
title: "EXPORT - Export of a Structure Description"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax EXPORT NAMETAB h f ID id. Effect Exports a generated structure description. This statement can only be used by ABAP Workbench tools. A standard table without a secondary key can be specified for the field li
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_nametab.htm"
abapFile: "abapexport_nametab.htm"
keywords: ["do", "if", "abapexport", "nametab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

EXPORT - Export of a Structure Description

This statement is for internal use only.
It must not be used in application programs.

Syntax

EXPORT NAMETAB h f ID id.

Effect

Exports a generated structure description. This statement can only be used by ABAP Workbench tools. A standard table without a secondary key can be specified for the field list f.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Table name is too long.
    Runtime error: EXPORT\_NAMETAB\_WRONG\_ID