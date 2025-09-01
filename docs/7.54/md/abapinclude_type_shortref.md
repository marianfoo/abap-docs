---
title: "INCLUDE - TYPE, STRUCTURE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type.htm) Syntax INCLUDE  TYPE struc_type  STRUCTURE struc  AS name RENAMING WITH SUFFIX suffix. Effect Includes all components of the structured type struc_type or the structure
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type_shortref.htm"
abapFile: "abapinclude_type_shortref.htm"
keywords: ["do", "abapinclude", "type", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  I

INCLUDE - TYPE, STRUCTURE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type.htm)

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