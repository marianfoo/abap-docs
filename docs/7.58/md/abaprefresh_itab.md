---
title: "REFRESH"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_shortref.htm) Obsolete Syntax REFRESH itab. Effect This statement deletes all lines in an internal table itab. This releases the memory space required for the table, except for the initial memory requirement(h
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_itab.htm"
abapFile: "abaprefresh_itab.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "internal-table", "abaprefresh", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REFRESH%2C%20ABAPREFRESH_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REFRESH

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_shortref.htm)

Obsolete Syntax

REFRESH itab.

Effect

This statement deletes all lines in an internal table itab. This releases the memory space required for the table, except for the [initial memory requirement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry"). The operand itab must be an internal table.

The statement [FREE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm) can be used to delete all lines and release all memory occupied by these lines including the initial memory requirement.

System Fields

This statement always sets sy-subrc to 0.

Hints

-   The statement REFRESH itab has the same effect on internal tables as [CLEAR itab\[\]](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm). If the internal table itab has a [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_body_glosry.htm "Glossary Entry") is initialized and not the header line.
-   If the internal table itab does not have a header line, REFRESH itab has the same effect as CLEAR itab. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of REFRESH instead of CLEAR obsolete too. [CLEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm) can always be used to delete lines in internal tables.

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