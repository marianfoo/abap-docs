  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

CL\_ABAP\_CORRESPONDING for Simple Structures

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) for simple structures.

Source Code

REPORT demo\_corresponding\_class\_dyn.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    DATA(src) = VALUE names( n1 = 'a1' n2 = 'a2' n3 = 'a3').
    DATA(dst) = VALUE names( n1 = 'b3' n2 = 'b2' n3 = 'b1').
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
        DATA(mapper) =
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
      CATCH cx\_corr\_dyn\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.
    cl\_demo\_output=>display( struct2 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The components of the structure struct1 are assigned to the structure struct2 using the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)). User input can control which components are mapped to each other.