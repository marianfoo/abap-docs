  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-46a.htm) → 

Data Objects and Data References in Release 4.6A

In Release 4.6A, references to data objects have been introduced in the following variants:

[1\. Reference variables for data objects](#!ABAP_MODIFICATION_1@1@)
[2\. Creating data objects and getting references](#!ABAP_MODIFICATION_2@2@)
[3\. Assignment of referenced fields](#!ABAP_MODIFICATION_3@3@)

Modification 1

Reference Variables for Data Objects

Previously, reference variables were only available in [ABAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm). In Release 4.6A, [DATA f TYPE REF TO DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_simple.htm) can be used to declare f as a reference variable that points to a different data object.

Modification 2

Creating Data Objects and Getting References

[CREATE DATA dref ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data.htm) can be used to create a new data object (field) at runtime, where dref can be any reference variable with type [REF TO DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_simple.htm). Furthermore, [GET REFERENCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_reference.htm) can be used to get a reference to a data object (field).

Modification 3

Assignment of Referenced Fields

The statement [ASSIGN dref->\* TO <fs>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_dynamic_dobj.htm) makes the field symbol <fs> point to the same content as the data reference dref at runtime. If the field symbol is typed, the type is checked when the assignment is made.