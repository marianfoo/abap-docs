---
title: "Creating a Structure Using RTTC"
description: |
  This example demonstrates how a structure is created using RTTC(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_create_data_via_handle DEFINITION INHERITING FROM cl_demo_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_data_via_rttc_abexa.htm"
abapFile: "abencreate_data_via_rttc_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencreate", "via", "rttc", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) →  [CREATE DATA, HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20a%20Structure%20Using%20RTTC%2C%20ABENCREATE_DATA_VIA_RTTC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Creating a Structure Using RTTC

This example demonstrates how a structure is created using [RTTC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_data\_via\_handle DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_data\_via\_handle IMPLEMENTATION.
  METHOD main.
    DATA: struct\_type TYPE REF TO cl\_abap\_structdescr,
          dref        TYPE REF TO data,
          oref        TYPE REF TO cx\_sy\_struct\_creation.
    DATA column1 TYPE c LENGTH 30.
    DATA column2 TYPE c LENGTH 30.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = column1
     )->add\_field( CHANGING field = column2
     )->request( ).
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
        out->write( oref->get\_text( ) ).
        RETURN.
    ENDTRY.
    dref->(column1) = 'Amount'.
    dref->(column2) = 11.
    out->write( dref->\* ).
  ENDMETHOD.
ENDCLASS.

Description   

Dynamic definition of a structure with two components using the GET method of the CL\_ABAP\_STRUCTDESCR class. The description of the components of the structure is provided in the internal table comp\_tab. If no type description object exists for this structure yet, it is created by the GET method.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.