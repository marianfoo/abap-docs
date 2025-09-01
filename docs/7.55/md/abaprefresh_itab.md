---
title: "REFRESH"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprefresh_shortref.htm) Obsolete Syntax REFRESH itab. Effect This statement deletes all lines in an internal table itab. This frees up the memory space required for the table, except for the initial memory requirement (se
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprefresh_itab.htm"
abapFile: "abaprefresh_itab.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "internal-table", "abaprefresh", "itab"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_obsolete.htm) → 

REFRESH

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprefresh_shortref.htm)

Obsolete Syntax

REFRESH itab.

Effect

This statement deletes all lines in an internal table itab. This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_itab.htm)). itab expects an internal table.

The statement [FREE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_dataobject.htm) can be used to delete all lines and free all memory used by these lines.

System Fields

This statement always sets sy-subrc to 0.

Hints

-   The statement REFRESH itab has the same effect on internal tables as [CLEAR itab\[\]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm). If the internal table itab has a [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_body_glosry.htm "Glossary Entry") is initialized and not the header line.

-   If the internal table itab does not have a header line, REFRESH itab has the same effect as CLEAR itab. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of REFRESH instead of CLEAR obsolete too. [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_dataobject.htm) can always be used to delete lines in internal tables.
    

Example

The following example shows that REFRESH initializes the table body but not the header line of an internal table itab.

DATA itab TYPE TABLE OF i WITH HEADER LINE.
DO 3 TIMES.
  itab = sy-index.
  APPEND itab.
ENDDO.
ASSERT itab   IS NOT INITIAL.
ASSERT itab\[\] IS NOT INITIAL.
REFRESH itab.
ASSERT itab   IS NOT INITIAL.
ASSERT itab\[\] IS INITIAL.