---
title: "Nametab Administration"
description: |
  This statement is for internal use only. It must not be used in application programs. Variants: 1.EXPORT NAMETAB h f ID id.(#!ABAP_VARIANT_1@1@) 2.IMPORT NAMETAB h f ID id.(#!ABAP_VARIANT_2@2@) Variant 1 EXPORT NAMETAB h f ID id. Effect Stores a generated structure description. This statement ma
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsystem-call_nametab.htm"
abapFile: "abapsystem-call_nametab.htm"
keywords: ["do", "if", "try", "abapsystem", "call", "nametab"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

Nametab Administration

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1.EXPORT NAMETAB h f ID id.](#!ABAP_VARIANT_1@1@)
[2.IMPORT NAMETAB h f ID id.](#!ABAP_VARIANT_2@2@)

Variant 1

EXPORT NAMETAB h f ID id.

Effect

Stores a generated structure description. This statement may only used by ABAP- [Repository tools! A standard table without secondary keys can be specified for the field list f.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry</.htm "Glossary Entry")

Variant 2

IMPORT NAMETAB h f ID id.

Effect

Reads a generated structure description. This statement may only be used by ABAP Repository tools. A standard table without secondary keys can be specified for the field list f.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Table name is too long
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID