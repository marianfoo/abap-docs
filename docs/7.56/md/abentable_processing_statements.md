---
title: "Reading internal tables"
description: |
  -   READ TABLE(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm) -   LOOP AT(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) Filling internal tables -   INSERT(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abap
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm"
abapFile: "abentable_processing_statements.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "data", "internal-table", "abentable", "processing", "statements"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) → 

itab - Processing Statements

Reading internal tables

-   [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm)
-   [LOOP AT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm)

Filling internal tables

-   [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_itab.htm)
-   [COLLECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcollect.htm)
-   [APPEND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapappend.htm)

Changing internal tables

-   [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm)
-   [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm)
-   [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm)

Scanning internal tables

-   [FIND IN TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_itab.htm)
-   [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_itab.htm)

Interval join of internal tables

-   [PROVIDE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprovide.htm)

Hints

-   How these statements are used to access individual components of internal tables is described in [itab - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_components.htm).
-   Special [variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_usage.htm) of the statements shown here can access the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_pathes.htm), instead of accessing directly specified internal tables.
-   Internal tables can also be specified as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_itab.htm) of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") in ABAP SQL.
-   As well as the statements shown here, a range of [obsolete processing statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_obsolete.htm) exists for internal tables.

Continue
[READ TABLE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm)
[LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm)
[INSERT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_itab.htm)
[COLLECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcollect.htm)
[APPEND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapappend.htm)
[MODIFY itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm)
[DELETE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm)
[SORT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm)
[FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_itab.htm)
[REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_itab.htm)
[itab - Interval Join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_interval_spcl.htm)
[itab - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_components.htm)
[itab - keyname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyname.htm)