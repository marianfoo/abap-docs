  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Objects%20and%20Data%20References%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-DATA-REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

Data Objects and Data References in ABAP Release 4.6A

In Release 4.6A, references to data objects have been introduced in the following variants:

[1\. Reference Variables for Data Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Creating Data Objects and Getting References](#!ABAP_MODIFICATION_2@2@)
[3\. Assignment of Referenced Fields](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference Variables for Data Objects

Previously, reference variables were only available in [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)). In ABAP release 4.6A, [DATA f TYPE REF TO DATA](javascript:call_link\('abapdata_simple.htm'\)) can be used to declare f as a reference variable that points to a different data object.

Modification 2   

Creating Data Objects and Getting References

[CREATE DATA dref ...](javascript:call_link\('abapcreate_data.htm'\)) can be used to create a new data object (field) at runtime, where dref can be any reference variable with type [REF TO DATA](javascript:call_link\('abapdata_simple.htm'\)). Furthermore, [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) can be used to get a reference to a data object (field).

Modification 3   

Assignment of Referenced Fields

The statement [ASSIGN dref->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) makes the field symbol <fs> point to the same content as the data reference dref at runtime. If the field symbol is typed, the type is checked when the assignment is made.