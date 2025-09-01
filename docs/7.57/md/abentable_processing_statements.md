  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Processing Statements, ABENTABLE_PROCESSING_STATEMENTS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Processing Statements

Reading Internal Tables   

-   [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm)
-   [LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm)

Filling Internal Tables   

-   [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm)
-   [COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm)
-   [APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm)

Changing Internal Tables   

-   [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm)
-   [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm)
-   [SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)

Scanning Internal Tables   

-   [FIND IN TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm)
-   [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm)

Interval Join of Internal Tables   

-   [PROVIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprovide.htm)

Hints

-   How these statements are used to access individual components of internal tables is described in [itab - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm).
-   Special [variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_usage.htm) of the statements shown here can access the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_pathes.htm), instead of accessing directly specified internal tables.
-   Internal tables can also be specified as a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_itab.htm) of a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") in ABAP SQL.
-   As well as the statements shown here, a range of [obsolete processing statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_obsolete.htm) exists for internal tables.

Continue
[READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm)
[LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm)
[INSERT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm)
[COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm)
[APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm)
[MODIFY itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm)
[DELETE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm)
[SORT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)
[FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm)
[REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab.htm)
[itab - Interval Join](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_interval_spcl.htm)
[itab - comp1 comp2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm)
[itab - keyname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyname.htm)