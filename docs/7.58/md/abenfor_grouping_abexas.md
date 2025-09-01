---
title: "Continue"
description: |
  !Example(exa.gif 'Example') itab - Grouping with FOR Using Column Values(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_values_abexa.htm) !Example(exa.gif 'Example') itab - Grouping with FOR Using a Method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-U
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm"
abapFile: "abenfor_grouping_abexas.htm"
keywords: ["do", "if", "method", "data", "internal-table", "abenfor", "grouping", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Examples%20of%20Grouping%20with%20FOR%2C%20ABENFOR_GROUPING_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

itab - Examples of Grouping with FOR

-   [itab - Grouping with FOR Using Column Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_values_abexa.htm)
-   [itab - Grouping with FOR Using a Method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_method_abexa.htm)
-   [itab - Grouping with FOR Using a Function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_func_abexa.htm)
-   [itab - Grouping with FOR Using a Comparison](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_comparison_abexa.htm)
-   [itab - Grouping with FOR in Overlaps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_overlap_abexa.htm)
-   [itab - Grouping with FOR in Packages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_packages_abexa.htm)
-   [itab - Grouping with FOR in Group Levels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_levels_abexa.htm)
-   [itab - Grouping with FOR, Nesting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_lvls_nst_abexa.htm)
-   [itab - Grouping with FOR for Aggregates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_aggregates_abexa.htm)
-   [itab - Grouping with FOR for Sorts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_sort_abexa.htm)

Continue
![Example](exa.gif "Example") [itab - Grouping with FOR Using Column Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_values_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR Using a Method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_method_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR Using a Function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_func_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR Using a Comparison](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_comparison_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR in Overlaps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_overlap_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR in Packages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_packages_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR in Group Levels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_levels_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR, Nesting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_lvls_nst_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR for Aggregates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_aggregates_abexa.htm)
![Example](exa.gif "Example") [itab - Grouping with FOR for Sorts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_sort_abexa.htm)