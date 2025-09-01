---
title: "DATA - OCCURS - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm) Syntax DATA itab  TYPE REF TO type  LIKE REF TO dobj  OCCURS n WITH HEADER LINE. Effect Obsolete: Declares a standard table(https://help.sap.com/doc/abapdocu_752
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs_shortref.htm"
abapFile: "abapdata_occurs_shortref.htm"
keywords: ["do", "try", "data", "abapdata", "occurs", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  D

DATA - OCCURS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm)

Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          *\[*WITH HEADER LINE*\]*.

Effect

Obsolete: Declares a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_key_glosry.htm "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the row type with a reference to a data type.
    
-   LIKE
    Defines the row type with a reference to a data object.
    
-   REF TO
    Creates the row type as a reference type.
    
-   [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm)
    Defines a header line with the same name.