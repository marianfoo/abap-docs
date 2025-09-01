---
title: "INCLUDE, TYPE, STRUCTURE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type.htm) Syntax INCLUDE  TYPE struc_type  STRUCTURE struc  AS name RENAMING WITH SUFFIX suffix. Effect Includes all components of the structured type struc_type or the structure
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type_shortref.htm"
abapFile: "abapinclude_type_shortref.htm"
keywords: ["do", "abapinclude", "type", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  I

INCLUDE, TYPE, STRUCTURE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinclude_type.htm)

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Effect

Includes all components of the structured type struc\_type or the structure struc at the current position in a structure definition.

Additions

-   AS name
    Defines a higher-level name for the included components.
-   RENAMING WITH SUFFIX suffix
    Renames the bound components by adding the ending suffix.