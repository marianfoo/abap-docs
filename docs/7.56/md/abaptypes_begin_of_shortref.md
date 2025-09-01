---
title: "TYPES BEGIN OF - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_struc.htm) Syntax TYPES BEGIN OF struc_type. ... TYPES   ... BOXED. INCLUDE ...(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type_shortref.htm) ... DATA END OF struc_type. Effect De
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_begin_of_shortref.htm"
abapFile: "abaptypes_begin_of_shortref.htm"
keywords: ["do", "try", "data", "types", "abaptypes", "begin", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  T

TYPES BEGIN OF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_struc.htm)

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES   ... *\[*BOXED*\]*.
  [INCLUDE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type_shortref.htm)
  ...
DATA END OF struc\_type.

Effect

Defines a structured data type struc\_type, whose components can be defined by any TYPES statements or copied by INCLUDE from other structures.

Addition

-   [BOXED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_boxed.htm)
    Declares a substructure as a static [boxed component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_box_glosry.htm "Glossary Entry").