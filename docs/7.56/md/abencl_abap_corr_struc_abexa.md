  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

CL\_ABAP\_CORRESPONDING for Nested Structures

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) for nested structures.

Source Code

REPORT demo\_corresponding\_class\_str.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF struct1,
        a1 TYPE string VALUE 'a1',
        a2 TYPE string VALUE 'a2',
        a3 TYPE string VALUE 'a3',
        a4 TYPE string VALUE 'a4',
        a5 TYPE string VALUE 'a5',
        BEGIN OF asub1,
          s1\_a1 TYPE string VALUE 's1\_a1',
          s1\_a2 TYPE string VALUE 's1\_a2',
          s1\_a3 TYPE string VALUE 's1\_a3',
          BEGIN OF asub2,
            s2\_a1 TYPE string VALUE 's2\_a1',
            s2\_a2 TYPE string VALUE 's2\_a2',
            s2\_a3 TYPE string VALUE 's2\_a3',
          END OF asub2,
        END OF asub1,
      END OF struct1,
      BEGIN OF struct2,
        b1 TYPE string VALUE 'b1',
        b2 TYPE string VALUE 'b2',
        b3 TYPE string VALUE 'b3',
        a4 TYPE string VALUE 'b4',
        a5 TYPE string VALUE 'b5',
        BEGIN OF bsub1,
          s1\_b1 TYPE string VALUE 's1\_b1',
          s1\_b2 TYPE string VALUE 's1\_b2',
          s1\_b3 TYPE string VALUE 's1\_b3',
          BEGIN OF bsub2,
            s2\_b1 TYPE string VALUE 's2\_b1',
            s2\_b2 TYPE string VALUE 's2\_b2',
            s2\_b3 TYPE string VALUE 's2\_b3',
          END OF bsub2,
        END OF bsub1,
      END OF struct2.
    DATA(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table(
    ( level = 0 kind = 1 srcname = 'a1' dstname = 'b3' )
    ( level = 0 kind = 1 srcname = 'a3' dstname = 'b1' )
    ( level = 0 kind = 2 srcname = 'a5' )
    ( level = 0 kind = 1 srcname = 'asub1' dstname = 'bsub1' )
    ( level = 1 kind = 1 srcname = 's1\_a1' dstname = 's1\_b3' )
    ( level = 1 kind = 1 srcname = 's1\_a3' dstname = 's1\_b1' )
    ( level = 1 kind = 1 srcname = 'asub2' dstname = 'bsub2' )
    ( level = 2 kind = 1 srcname = 's2\_a1' dstname = 's2\_b3' )
    ( level = 2 kind = 1 srcname = 's2\_a3' dstname = 's2\_b1' ) ).
    cl\_abap\_corresponding=>create(
      source            = struct1
      destination       = struct2
      mapping           = mapping\_tab
      )->execute( EXPORTING source      = struct1
                  CHANGING  destination = struct2 ).
    cl\_demo\_output=>new(
      )->write( struct1
      )->write( mapping\_tab
      )->write( struct2
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The components of the structure struct1 are assigned to the structure struct2 using the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)).

-   At the top level:
    -   a1 is mapped to b3 and a3 is mapped to b1.
    -   a2 to b2 are ignored, since their names do not match and b2 keeps their value.
    -   The component a4 occurs in both structures and is assigned using identical names.
    -   a5 also occurs in both structures but is excluded explicitly by the mapping type.
    -   The substructure asub1 is mapped to the substructure bsub1.
-   At the level of the first substructure:
    -   s1\_a1 is mapped to s1\_b3 and s1\_a3 is mapped to s1\_b1.
    -   s1\_a2 to s1\_b2 are ignored, since their names are not identical and s1\_b2 keeps their value.
    -   The substructure asub2 is mapped to the substructure bsub2.
-   At the level of the second substructure:
    -   s2\_a1 is mapped to s2\_b3 and s2\_a3 is mapped to s2\_b1.
    -   s2\_a2 to s2\_b2 are ignored, since their names are not identical and s2\_b2 keeps their value.