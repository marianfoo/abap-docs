---
title: "Dynamic Programming Techniques"
description: |
  Dynamic programming techniques are all techniques whose functions or effects are detectable only at runtime of a program in the runtime framework. -   Using Dynamic Programming Techniques(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm 'Guideline') -
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm"
abapFile: "abendynamic_prog_technique_gdl.htm"
keywords: ["do", "if", "class", "data", "abendynamic", "prog", "technique", "gdl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) → 

Dynamic Programming Techniques

Dynamic programming techniques are all techniques whose functions or effects are detectable only at runtime of a program in the runtime framework.

-   [Using Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm "Guideline")
-   [Runtime Errors in Dynamic Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_dyn_proc_guidl.htm "Guideline")
-   [Using Dynamic Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dyn_data_object_guidl.htm "Guideline")
-   [Memory Consumption of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm "Guideline")
-   [Administration Costs of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline")
-   [Accessing Data Objects Dynamically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm "Guideline")
-   [Generic Programming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_progr_guidl.htm "Guideline")
    

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenescape_functions.htm).

Continue
[Using Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dynamic_progr_tech_guidl.htm)
[Runtime Errors in Dynamic Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_dyn_proc_guidl.htm)
[Using Dynamic Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_dyn_data_object_guidl.htm)
[Memory Consumption of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmem_cons_dyn_mem_obj_guidl.htm)
[Administration Costs of Dynamic Memory Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm)
[Accessing Data Objects Dynamically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm)
[Generic Programming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_progr_guidl.htm)