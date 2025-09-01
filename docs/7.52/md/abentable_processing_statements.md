---
title: "Processing Statements for Internal Tables"
description: |
  Reading internal tables -   READ TABLE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) -   LOOP AT(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) Filling internal tables -   INSERT(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm"
abapFile: "abentable_processing_statements.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "data", "internal-table", "abentable", "processing", "statements"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) → 

Processing Statements for Internal Tables

Reading internal tables

-   [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm)

-   [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm)

Filling internal tables

-   [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm)

-   [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm)

-   [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)

Changing internal tables

-   [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)

-   [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm)

-   [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm)

Scanning internal tables

-   [FIND IN TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_itab.htm)

-   [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_itab.htm)

Interval Join of Internal Tables

-   [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm)

Notes

-   How these statements are used to access individual components of internal tables is described in [Internal Tables - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm).

-   Special [variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_usage.htm) of the statements shown here can access the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_pathes.htm), instead of accessing directly specified internal tables.

-   Internal tables can also be specified as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") in Open SQL.

-   As well as the statements shown here, a range of [obsolete processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_obsolete.htm) exists for internal tables.

Continue
[READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm)
[LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm)
[INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm)
[COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm)
[APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)
[MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)
[DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm)
[SORT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm)
[FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_itab.htm)
[REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_itab.htm)
[Interval Join in Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_interval_spcl.htm)
[Internal Tables - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm)
[Internal Tables - keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm)