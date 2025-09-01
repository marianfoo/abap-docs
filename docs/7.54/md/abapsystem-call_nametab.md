---
title: "Nametab Management"
description: |
  This statement is for internal use only. It must not be used in application programs. Variants: 1.EXPORT NAMETAB h f ID id.(#!ABAP_VARIANT_1@1@) 2.IMPORT NAMETAB h f ID id.(#!ABAP_VARIANT_2@2@) Variant 1 EXPORT NAMETAB h f ID id. Effect Exports a generated structure description. This statement m
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsystem-call_nametab.htm"
abapFile: "abapsystem-call_nametab.htm"
keywords: ["do", "if", "try", "abapsystem", "call", "nametab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

Nametab Management

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1.EXPORT NAMETAB h f ID id.](#!ABAP_VARIANT_1@1@)
[2.IMPORT NAMETAB h f ID id.](#!ABAP_VARIANT_2@2@)

Variant 1

EXPORT NAMETAB h f ID id.

Effect

Exports a generated structure description. This statement may only used by ABAP [Repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry") tools. A standard table without a secondary key can be specified for the field list f.

Variant 2

IMPORT NAMETAB h f ID id.

Effect

Reads a generated structure description. This statement may only be used by ABAP Repository tools. A standard table without a secondary key can be specified for the field list f.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID