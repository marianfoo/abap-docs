  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_CORRESPONDING%20for%20Simple%20Structures%2C%20ABENCL_ABAP_CORR_DYN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CL\_ABAP\_CORRESPONDING for Simple Structures

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) for simple structures.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_class\_dyn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_class\_dyn IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF names,
        n1 TYPE c LENGTH 2,
        n2 TYPE c LENGTH 2,
        n3 TYPE c LENGTH 2,
      END OF names.
    DATA:
      BEGIN OF struct1,
        a1 TYPE string VALUE 'a1',
        a2 TYPE string VALUE 'a2',
        a3 TYPE string VALUE 'a3',
      END OF struct1,
      BEGIN OF struct2,
        b1 TYPE string VALUE 'b1',
        b2 TYPE string VALUE 'b2',
        b3 TYPE string VALUE 'b3',
      END OF struct2.
    DATA(src) = VALUE names( n1 = 'a1' n2 = 'a2' n3 = 'a3' ).
    DATA(dst) = VALUE names( n1 = 'b3' n2 = 'b2' n3 = 'b1' ).
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = src-n1
      )->add\_field( CHANGING field = dst-n1
      )->add\_line(
      )->add\_field( CHANGING field = src-n2
      )->add\_field( CHANGING field = dst-n2
      )->add\_line(
      )->add\_field( CHANGING field = src-n3
      )->add\_field( CHANGING field = dst-n3
      )->request( ).
    TRY.
        FINAL(mapper) =
          cl\_abap\_corresponding=>create(
            source      = struct1
            destination = struct2
            mapping     = VALUE cl\_abap\_corresponding=>mapping\_table(
              ( level = 0 kind = 1 srcname = src-n1 dstname = dst-n1 )
              ( level = 0 kind = 1 srcname = src-n2 dstname = dst-n2 )
              ( level = 0 kind = 1 srcname = src-n3 dstname = dst-n3 )
            ) ).
        mapper->execute( EXPORTING source      = struct1
                         CHANGING  destination = struct2 ).
      CATCH cx\_corr\_dyn\_error INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->write( struct2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The components of the structure struct1 are assigned to the structure struct2 using the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)). User input can control which components are mapped to each other.