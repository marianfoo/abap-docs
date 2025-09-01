---
title: "TYPES - OCCURS - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs.htm) Syntax TYPES dtype  TYPE REF TO type  LIKE REF TO dobj  OCCURS n. Effect Obsolete: Declares a standard table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs_shortref.htm"
abapFile: "abaptypes_occurs_shortref.htm"
keywords: ["do", "try", "data", "types", "abaptypes", "occurs", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  T

TYPES - OCCURS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs.htm)

Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

Obsolete: Declares a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") type with a [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_key_glosry.htm "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the row type with a reference to a data type.
    
-   LIKE
    Defines the row type with a reference to a data object.
    
-   REF TO
    Creates the row type as a reference type.