  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA - HANDLE

[Quick Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 TYPE HANDLE handle.

Effect

The statement CREATE DATA uses the addition HANDLE to create a data object whose data type is described by an [RTTS](javascript:call_link\('abenrtts_glosry.htm'\) "Glossary Entry") [type description object](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry"). handle expects a reference variable of the static type of class CL\_ABAP\_DATADESCR or its subclasses that points to a type description object. The type description object may have been created by applying the RTTS methods to existing data objects or by using the dynamic definition of a new data type.

The type description object must describe a non-generic type. Only type description objects for the generic ABAP types c, n, p, and x create a new [bound data type](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") and use it with the [standard values](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). Similarly, a type description object for a standard table with a generic table type creates a new bound table type and uses it with a standard key.

Notes

The following are important methods for the dynamic definition of data types:

-   GET\_C, GET\_D, GET\_F ... of the class CL\_ABAP\_ELEMDESCR for type description objects of elementary data types. These methods create either a new type description object in accordance with the input parameters or reuse an existing type object.

-   GET of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR plus GET\_BY\_NAME of the class CL\_ABAP\_REFDESCR for type description objects of structures, internal tables, and reference variables. These methods return the type description object that was specified using the input parameters. A new type description object is created or an existing one is used again.

-   CREATE of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR for creating type description objects for structures, internal tables, and reference variables. These methods return the type description object that was specified using the input parameters. A new type description object is always created.

-   It is advisable to use the GET methods instead of CREATE to avoid creating multiple type description objects for a single type.
    

Example

Creation of an anonymous data object via a type description object for a Dictionary structure, which is obtained via the [RTTI](javascript:call_link\('abenrtti_glosry.htm'\) "Glossary Entry").

DATA dref TYPE REF TO data.
DATA(type) = CAST cl\_abap\_datadescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SCARR' ) ).
CREATE DATA dref TYPE HANDLE type.

Executable Example

[Creating a Structure Using RTTC](javascript:call_link\('abencreate_data_via_rttc_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating a Structure Using RTTC](javascript:call_link\('abencreate_data_via_rttc_abexa.htm'\))