---
title: "IMPORT - Get a structure description"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax IMPORT NAMETAB h f ID id. Effect Gets a structure description saved using EXPORT NAMETAB. The statement must only be used by tools of ABAP Workbench. A standard table without a secondary key can be specified
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_nametab.htm"
abapFile: "abapimport_nametab.htm"
keywords: ["do", "if", "abapimport", "nametab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

IMPORT - Get a structure description

This statement is for internal use only.
It must not be used in application programs.

Syntax

IMPORT NAMETAB h f ID id.

Effect

Gets a structure description saved using EXPORT NAMETAB. The statement must only be used by tools of ABAP Workbench. A standard table without a secondary key can be specified for the field list f.

System Fields

sy-subrc

Meaning

0

The specified structure description was found.

4

The specified structure description was not found.

Note

The statement IMPORT NAMETAB is no longer supported. Instead, the function module DD\_GET\_NAMETAB must be used.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID