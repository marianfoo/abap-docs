---
title: "RANGES"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges_shortref.htm) Obsolete Syntax RANGES rtab FOR dobj OCCURS n. Effect Obsolete declaration of a ranges table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm 'Glossar
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm"
abapFile: "abapranges.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "internal-table", "abapranges"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm) → 

RANGES

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges_shortref.htm)

Obsolete Syntax

RANGES rtab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry"). This statement (not allowed in classes) is a short form of the following statement sequence which is also not allowed in classes:

[DATA: BEGIN OF rtab OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF rtab.

Declares an internal table rtab with the structure of a [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") and a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). Without the addition [OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm), the initial memory requirement of the ranges table is set to ten rows. The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Notes

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_ranges.htm) and [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_ranges.htm). If used, these declare ranges tables without header lines.
    
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.