---
title: "COLLECT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_shortref.htm) Syntax COLLECT wa INTO itab result(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm). Effect This statement inserts the content of a work area wa eit
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm"
abapFile: "abapcollect.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "abapcollect"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COLLECT, ABAPCOLLECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

COLLECT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_shortref.htm)

Syntax

COLLECT wa INTO itab *\[*[result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)*\]*.

Effect

This statement inserts the content of a work area wa either as a single line in an internal table itab or adds the values of its numeric components to the corresponding values of existing lines with the same [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). wa is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

[result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm) can be used to set a reference to the inserted or changed line in the form of a field symbol or data reference.

Prerequisite for the use of this statement is that wa is [compatible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of itab. All components that are not part of the primary table key must have a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry").

The table is searched for a line with the same primary key as follows:

-   In [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") that are filled using COLLECT only, the entry is determined by temporary hash administration. The workload is independent of the number of entries in the table. The hash administration is temporary and is generally invalidated by writes to the table. If COLLECT statements are specified after an invalidation, a linear search of all table lines is performed. The workload for this search increases linearly in relation to the number of entries.
-   In [sorted tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry"), the entry is determined using a binary search. The workload depends logarithmically on the number of entries in the table.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the entry is determined using the hash administration of the table and is always independent of the number of table entries.

If no line is found with an identical primary key, a line is inserted as follows and filled with the content of wa:

-   In standard tables, the line is appended as the last line of the primary table index.
-   In sorted tables, the new line is inserted in the sort order of the internal table in accordance with its key values, and the primary table index of the subsequent lines is increased by 1.
-   In hashed tables, the new line is inserted into the internal table by the hash administration, in accordance with its key values.

If the internal table already contains one or more lines with an identical primary key, those values of the components of work area wa that are not part of the key are added to the corresponding components of the highest existing line (in the case of index tables, this is the line with the lowest primary table index).

An uncatchable exception is raised if a duplicate entry in a unique [secondary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") were to be produced when the statement COLLECT is executed.

If the primary table key of a standard table is [empty](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_empty_key.htm), all components of the line type must be numeric and the first line of the internal table is always compressed. If this is known, a syntax check warning occurs that can be hidden using a [pragma](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpragma_glosry.htm "Glossary Entry").

System Fields

The statement COLLECT sets sy-tabix for [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry") to the line number of the inserted or existing line in the primary table index, and for [hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry") to the value 0.

Programming Guideline

[Do not fill standard tables with collections of lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencollect_guidl.htm "Guideline")

Hints

-   COLLECT should only be used if internal tables are to be created that are genuinely unique or compressed. In this case, COLLECT can greatly benefit performance. If uniqueness or compression are not required, or if uniqueness is guaranteed for other reasons, the statement [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) should be used instead.
-   The statement COLLECT is not suitable for standard tables and should no longer be used for them. COLLECT can be used for sorted tables and hashed tables without any problems since these, unlike standard tables, always have their own stable key administration that can be exploited by COLLECT. When used for sorted tables, they should have a unique primary key or the table should be filled with COLLECT only. For hashed tables, all prerequisites are fulfilled automatically.
-   If a standard table is still filled using COLLECT, it should not be processed using any other statement than [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm). In the latter case, the addition TRANSPORTING ensures that no primary key fields can be changed. This is the only way to ensure that the table entries are always unique and compressed and that the statement COLLECT runs efficiently. The function module ABL\_TABLE\_HASH\_STATE can be used to check whether a standard table is suitable for processing using COLLECT.
-   The method HAS\_COLLECT\_HASH\_ADMIN of the class CL\_ABAP\_ITAB\_UTILITIES can be used in standard tables to check whether temporary hash administration of the statement COLLECT exists.
-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_short_forms.htm) is possible where wa INTO can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.

Example

Compressed insertion of data from the DDIC database table SFLIGHT into the internal table seats\_tab. The lines in which the primary key components carrid and connid are identical are compressed by adding the number of occupied seats to the numeric component seatsocc.

DATA: BEGIN OF seats,
        carrid   TYPE sflight-carrid,
        connid   TYPE sflight-connid,
        seatsocc TYPE sflight-seatsocc,
      END OF seats.
DATA seats\_tab LIKE HASHED TABLE OF seats
               WITH UNIQUE KEY carrid connid.
SELECT carrid, connid, seatsocc
       FROM sflight
       INTO @seats.
  COLLECT seats INTO seats\_tab.
ENDSELECT.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow in integer field when creating totals
    Runtime error: COLLECT\_OVERFLOW
-   Cause: Overflow in type p field when creating totals
    Runtime error: COLLECT\_OVERFLOW\_TYPE\_P

Uncatchable Exceptions

-   Cause: COLLECT used for non-numeric fields
    Runtime error: TABLE\_COLLECT\_CHAR\_IN\_FUNCTION
-   Cause: [Memory area violated](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentables_parameters_restrictions.htm) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION

Continue
[COLLECT, result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)