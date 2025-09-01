  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_CORRESPONDING%20for%20Nested%20Structures%2C%20ABENCL_ABAP_CORR_STRUC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CL\_ABAP\_CORRESPONDING for Nested Structures

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_corresponding.htm) for nested structures.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_class\_str DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_class\_str IMPLEMENTATION.
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
    FINAL(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table(
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
    out->write( struct1
      )->write( mapping\_tab
      )->write( struct2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The components of the structure struct1 are assigned to the structure struct2 using the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_corresponding.htm).

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