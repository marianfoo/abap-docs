  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20of%20Grouping%20with%20LOOP%2C%20ABENLOOP_GROUP_BY_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Examples of Grouping with LOOP

-   [itab - Grouping Internal Tables, Step by Step](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexa.htm)
-   [itab - Grouping with LOOP Using Column Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_values_abexa.htm)
-   [itab - Grouping with LOOP Using a Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_method_abexa.htm)
-   [itab - Grouping with LOOP Using a Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_func_abexa.htm)
-   [itab - Grouping with LOOP Using a Comparison](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_comparison_abexa.htm)
-   [itab - Grouping with LOOP in Overlaps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_overlap_abexa.htm)
-   [itab - Grouping with LOOP in Packages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_packages_abexa.htm)
-   [itab - Random Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_random_abexa.htm)
-   [itab - Grouping with LOOP, Output Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_group_abexa.htm)
-   [itab - Grouping with LOOP in Group Levels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_levels_abexa.htm)
-   [itab - Grouping with LOOP, Nesting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_lvls_nst_abexa.htm)
-   [itab - Grouping with LOOP for Aggregates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_aggregates_abexa.htm)
-   [itab - Grouping with LOOP and FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_for_abexa.htm)
-   [itab - Grouping with LOOP and Sort](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_sort_abexa.htm)
-   [itab - Grouping with LOOP, Explicit and Implicit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_explicit_abexa.htm)

Continue
![Example](exa.gif "Example") [itab - Grouping Internal Tables, Step by Step](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP Using Column Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_values_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP Using a Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_method_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP Using a Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_func_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP Using a Comparison](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_comparison_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP in Overlaps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_overlap_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP in Packages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_packages_abexa.htm)
![Example](exa.gif "Example") [itab - Random Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_random_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP, Output Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_group_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP in Group Levels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_levels_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP, Nesting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_lvls_nst_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP for Aggregates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_aggregates_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP and FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_for_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP and Sort](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_sort_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with LOOP, Explicit and Implicit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_explicit_abexa.htm)