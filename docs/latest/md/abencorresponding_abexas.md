---
title: "Assigning Components, Examples"
description: |
  -   MOVE-CORRESPONDING for Structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_struc_abexa.htm) -   MOVE-CORRESPONDING for Internal Tables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_abexa.htm) -   Componen
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_abexas.htm"
abapFile: "abencorresponding_abexas.htm"
keywords: ["do", "if", "data", "internal-table", "abencorresponding", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assigning%20Components%2C%20Examples%2C%20ABENCORRESPONDING_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assigning Components, Examples

-   [MOVE-CORRESPONDING for Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_struc_abexa.htm)
-   [MOVE-CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_abexa.htm)
-   [Component Operator for Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_struct_abexa.htm)
-   [Component Operator for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_itab_abexa.htm)
-   [Component Operator for Table Expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_table_exp_abexa.htm)
-   [Component Operator, Lookup Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_using_abexa.htm)
-   [Component Operator, Reflexive Assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_using_self_abexa.htm)
-   [Component Operator, Mapping Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_mapping_abexa.htm)
-   [Component Operator, Handling Duplicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_duplicates_abexa.htm)
-   [Component Operator, Nested Mapping Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_deep_mapp_abexa.htm)
-   [Component Operator, Comparison with FOR Expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_vs_for_abexa.htm)
-   [CL\_ABAP\_CORRESPONDING for Simple Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_dyn_abexa.htm)
-   [CL\_ABAP\_CORRESPONDING for Nested Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_struc_abexa.htm)
-   [CL\_ABAP\_CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_itab_abexa.htm)
-   [CL\_ABAP\_CORRESPONDING for Tabular Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_deep_abexa.htm)
-   [CL\_ABAP\_CORRESPONDING with Lookup Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_lookup_abexa.htm)
-   [Reflexive Component Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreflexive_corresponding_abexa.htm)
-   [Variants of MOVE-CORRESPONDING and the CORRESPONDING Operator Using Deep Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_variants_s_abexa.htm)
-   [CORRESPONDING Operator Using the Additions MAPPING and DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresp_mapping_default_abexa.htm)

Continue
![Example](exa.gif "Example") [MOVE-CORRESPONDING for Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_struc_abexa.htm)
![Example](exa.gif "Example") [MOVE-CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_abexa.htm)
![Example](exa.gif "Example") [Component Operator for Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_struct_abexa.htm)
![Example](exa.gif "Example") [Component Operator for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_itab_abexa.htm)
![Example](exa.gif "Example") [Component Operator for Table Expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_table_exp_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Lookup Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_using_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Reflexive Assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_using_self_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Mapping Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_mapping_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Handling Duplicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_duplicates_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Nested Mapping Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_deep_mapp_abexa.htm)
![Example](exa.gif "Example") [Component Operator, Comparison with FOR Expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_vs_for_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_CORRESPONDING for Simple Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_dyn_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_CORRESPONDING for Nested Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_struc_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_itab_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_CORRESPONDING for Tabular Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_deep_abexa.htm)
![Example](exa.gif "Example") [CL\_ABAP\_CORRESPONDING with Lookup Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corr_lookup_abexa.htm)
![Example](exa.gif "Example") [Reflexive Component Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreflexive_corresponding_abexa.htm)
![Example](exa.gif "Example") [Variants of MOVE-CORRESPONDING and the CORRESPONDING Operator Using Deep Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_variants_s_abexa.htm)
![Example](exa.gif "Example") [CORRESPONDING Operator Using the Additions MAPPING and DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresp_mapping_default_abexa.htm)