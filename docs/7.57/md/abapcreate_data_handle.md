  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CREATE DATA, HANDLE, ABAPCREATE_DATA_HANDLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

CREATE DATA, HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_area_handle.htm)*\]*
                 TYPE HANDLE handle.

Effect

The statement CREATE DATA uses the addition HANDLE to create a data object whose data type is described by an [RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_object_glosry.htm "Glossary Entry"). For handle, a reference variable of the static type of class CL\_ABAP\_DATADESCR or its subclasses that points to a type description object must be specified. The type description object may have been created by using the RTTS methods on existing data objects or by using the dynamic definition of a new data type.

The type description object must describe a non-generic type. Only type description objects for the generic ABAP types c, n, p, and x create and use a new [bound data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbound_data_type_glosry.htm "Glossary Entry") with the [standard values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_complete.htm). Similarly, a type description object for a standard table with a generic table type creates and uses a new bound table type with a standard key.

Hints

-   The following are important methods for the dynamic definition of data types:
    -   GET\_C, GET\_D, GET\_F ... of the class CL\_ABAP\_ELEMDESCR for type description objects of elementary data types. These create either a new type description object in accordance with the input parameters or reuse an existing type object.
    -   GET of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR as well as GET\_BY\_NAME of the class CL\_ABAP\_REFDESCR for type description objects of structures, internal tables, and reference variables. These return the type description object that was specified by the input parameters. Either a new type description object is created or an existing one is used again.
    -   CREATE of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR for creating type description objects for structures, internal tables, and reference variables. These return the type description object that was specified by the input parameters. A new type description object is always created.
-   It is recommended that the GET methods are used instead of CREATE to avoid creating multiple type description objects for a single type.

Example

Creation of an anonymous data object using a type description object for a dictionary structure that is obtained using [RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

DATA dref TYPE REF TO data.
FINAL(type) = CAST cl\_abap\_datadescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SCARR' ) ).
CREATE DATA dref TYPE HANDLE type.

Executable Example

[Creating a Structure Using RTTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_data_via_rttc_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating a Structure Using RTTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_data_via_rttc_abexa.htm)