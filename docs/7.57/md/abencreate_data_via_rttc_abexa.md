  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) →  [CREATE DATA, HANDLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_handle.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating a Structure Using RTTC, ABENCREATE_DATA_VIA_RTTC_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Creating a Structure Using RTTC

This example demonstrates how a structure is created using [RTTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry").

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
    dref->(column1) = 'Amount'.
    dref->(column2) = 11.
    cl\_demo\_output=>display( dref->\* ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Dynamic definition of a structure with two components using the GET method of the CL\_ABAP\_STRUCTDESCR class. The description of the components of the structure is provided in the internal table comp\_tab. If no type description object exists for this structure yet, it is created by the GET method.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.