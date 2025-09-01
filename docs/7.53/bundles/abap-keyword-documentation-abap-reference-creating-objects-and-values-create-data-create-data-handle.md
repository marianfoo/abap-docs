# ABAP Keyword Documentation / ABAP − Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - HANDLE

Included pages: 2


### abapcreate_data_handle.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) → 

CREATE DATA - HANDLE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_area_handle.htm)*\]*
                 TYPE HANDLE handle.

Effect

The statement CREATE DATA uses the addition HANDLE to create a data object whose data type is described by an [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_object_glosry.htm "Glossary Entry"). handle expects a reference variable of the static type of class CL\_ABAP\_DATADESCR or its subclasses that points to a type description object. The type description object may have been created by applying the RTTS methods to existing data objects or by using the dynamic definition of a new data type.

The type description object must describe a non-generic type. Only type description objects for the generic ABAP types c, n, p, and x create a new [bound data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_data_type_glosry.htm "Glossary Entry") and use it with the [standard values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm). Similarly, a type description object for a standard table with a generic table type creates a new bound table type and uses it with a standard key.

Notes

The following are important methods for the dynamic definition of data types:

-   GET\_C, GET\_D, GET\_F ... of the class CL\_ABAP\_ELEMDESCR for type description objects of elementary data types. These methods create either a new type description object in accordance with the input parameters or reuse an existing type object.

-   GET of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR plus GET\_BY\_NAME of the class CL\_ABAP\_REFDESCR for type description objects of structures, internal tables, and reference variables. These methods return the type description object that was specified using the input parameters. A new type description object is created or an existing one is used again.

-   CREATE of the classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, and CL\_ABAP\_REFDESCR for creating type description objects for structures, internal tables, and reference variables. These methods return the type description object that was specified using the input parameters. A new type description object is always created.

-   It is advisable to use the GET methods instead of CREATE to avoid creating multiple type description objects for a single type.
    

Example

Creates an anonymous data object using a type description object for a dictionary structure provided by [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

DATA dref TYPE REF TO data.
DATA(type) = CAST cl\_abap\_datadescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SCARR' ) ).
CREATE DATA dref TYPE HANDLE type.

Executable Example

[Creating a Structure Using RTTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_data_via_rttc_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating a Structure Using RTTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_data_via_rttc_abexa.htm)


### abencreate_data_via_rttc_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) →  [CREATE DATA - HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_handle.htm) → 

Creating a Structure Using RTTC

This example demonstrates how a structure is created using [RTTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_create\_data\_via\_handle.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: struct\_type TYPE REF TO cl\_abap\_structdescr,
          dref        TYPE REF TO data,
          oref        TYPE REF TO cx\_sy\_struct\_creation.
    DATA column1 TYPE c LENGTH 30.
    DATA column2 TYPE c LENGTH 30.
    FIELD-SYMBOLS: <struc>  TYPE any,
                   <comp1>  TYPE any,
                   <comp2>  TYPE any.
    cl\_demo\_input=>add\_field( CHANGING field = column1 ).
    cl\_demo\_input=>add\_field( CHANGING field = column2 ).
    cl\_demo\_input=>request( ).
    column1 = to\_upper( column1 ).
    column2 = to\_upper( column2 ).
    TRY.
        struct\_type = cl\_abap\_structdescr=>get(
          VALUE #(
            ( name = column1 type = cl\_abap\_elemdescr=>get\_c( 40 ) )
            ( name = column2 type = cl\_abap\_elemdescr=>get\_i( )    )
                 )
                                               ).
        CREATE DATA dref TYPE HANDLE struct\_type.
      CATCH cx\_sy\_struct\_creation INTO oref.
        cl\_demo\_output=>display( oref->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSIGN dref->\* TO <struc>.
    ASSIGN COMPONENT column1 OF STRUCTURE <struc> TO <comp1>.
    <comp1> = 'Amount'.
    ASSIGN dref->\* TO <struc>.
    ASSIGN COMPONENT column2 OF STRUCTURE <struc> TO <comp2>.
    <comp2> = 11.
    cl\_demo\_output=>display( |{ column1 WIDTH = 32 } { <comp1> }\\n| &
                             |{ column2 WIDTH = 32 } { <comp2> }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Dynamic definition of a structure with two components using the GET method of the CL\_ABAP\_STRUCTDESCR class. The description of the components of the structure is provided in the internal table comp\_tab. If no type description object exists for this structure yet, it is created by the GET method.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.
