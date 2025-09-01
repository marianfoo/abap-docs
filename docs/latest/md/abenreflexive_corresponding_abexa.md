  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reflexive%20Component%20Assignments%2C%20ABENREFLEXIVE_CORRESPONDING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Reflexive Component Assignments

This example demonstrates assignments between components of a structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_reflexive DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_reflexive IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF t\_str1,
             a1 TYPE i,
             a2 TYPE i,
             a3 TYPE i,
             a4 TYPE i,
           END OF t\_str1.
    TYPES: BEGIN OF t\_str2,
             b1 TYPE i,
             b2 TYPE i,
             a1 TYPE i,
             a2 TYPE i,
           END OF t\_str2.
    TYPES: BEGIN OF t\_str3,
             a4 TYPE i,
             a3 TYPE i,
             a1 TYPE i,
             a2 TYPE i,
           END OF t\_str3.
    out->begin\_section( 'Reflexive Component Assignments' ).
    DATA(str1) = VALUE t\_str1( a1 = 1 a2 = 2 a3 = 3 a4 = 4 ).
    FINAL(back) = str1.
    out->write( str1 ).
    out->begin\_section( 'MOVE-CORRESPONDING' ).
    FIELD-SYMBOLS <fs2> TYPE t\_str2.
    ASSIGN str1 TO <fs2> CASTING.
    MOVE-CORRESPONDING str1 TO <fs2>.
    out->write( str1 ).
    str1 = back.
    ASSIGN str1 TO <fs2> CASTING.
    MOVE-CORRESPONDING <fs2> TO str1.
    out->write( str1 ).
    str1 = back.
    FIELD-SYMBOLS <fs3> TYPE t\_str3.
    ASSIGN str1 TO <fs3> CASTING.
    MOVE-CORRESPONDING str1 TO <fs3>.
    out->write( str1 ).
    str1 = back.
    ASSIGN str1 TO <fs3> CASTING.
    MOVE-CORRESPONDING <fs3> TO str1.
    out->write( str1 ).
    out->next\_section( 'CORRESPONDING' ).
    str1 = back.
    str1 = CORRESPONDING #(
             str1 MAPPING a1 = a4 a2 = a3 a3 = a1 a4 = a2 ) ##operator.
    out->write( str1 ).
    str1 = back.
    str1 = CORRESPONDING #(
             str1 MAPPING a1 = a3 a2 = a4 a3 = a2 a4 = a1 ) ##operator.
    out->write( str1 ).
    out->next\_section( 'CL\_ABAP\_CORRESPONDING' ).
    str1 = back.
    cl\_abap\_corresponding=>create(
        source      = str1
        destination = str1
        mapping     = VALUE cl\_abap\_corresponding=>mapping\_table(
          ( level = 0 kind = 1 srcname = 'a4' dstname = 'a1' )
          ( level = 0 kind = 1 srcname = 'a3' dstname = 'a2' )
          ( level = 0 kind = 1 srcname = 'a1' dstname = 'a3' )
          ( level = 0 kind = 1 srcname = 'a2' dstname = 'a4' ) )
        )->execute( EXPORTING source      = str1
                    CHANGING  destination = str1 ).
    out->write( str1 ).
    str1 = back.
    cl\_abap\_corresponding=>create(
        source      = str1
        destination = str1
        mapping     = VALUE cl\_abap\_corresponding=>mapping\_table(
          ( level = 0 kind = 1 srcname = 'a3' dstname = 'a1' )
          ( level = 0 kind = 1 srcname = 'a4' dstname = 'a2' )
          ( level = 0 kind = 1 srcname = 'a2' dstname = 'a3' )
          ( level = 0 kind = 1 srcname = 'a1' dstname = 'a4' ) )
        )->execute( EXPORTING source      = str1
                    CHANGING  destination = str1 ).
    out->write( str1 ).
  ENDMETHOD.
ENDCLASS.

Description   

The example summarizes different ways of making assignments of components in the same structure:

-   In the case of the statement, [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) this can be done using [castings](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") with differently typed field symbols:
    
    -   There is no overlapping of source components and target components between the type t\_str1 of the structure str1 and the type t\_str2 of the field symbol fs2. In assignments of the structure to the field symbol that points to the structure, the content of the columns a1 and a2 is copied to the columns a3 and a4 because these columns have the names a1 and a2 in the field symbol. In assignments from the field symbol to the structure, however, the content of the columns a3 and a4 is copied to the columns a1 and a2.
    -   Identically named components overlap between the type t\_str1 of the structure str1 and the type t\_str3 of the field symbol fs3. In assignments of the structure to the field symbol that points to the structure, the components are evaluated in an undefined order and the previously assigned current content of the components is used. Assignments from the field symbol to the structure produce yet another result.
    
    If performed at all, reflexive assignments between the components of a structure using MOVE-CORRESPONDING should be free of overlaps.
    
-   In the case of the basic form of the constructor operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)), a temporary copy of the structure is created as a target object and assignment is made to this copy. The two mapping rules reflect the expectations of the two preceding MOVE-CORRESPONDING statements and produce the expected result.
-   The method EXECUTE of the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) is called using the same mapping rules as the two preceding constructor operators CORRESPONDING. No temporary copy of the structure is created as a target object, which means that the result is again the same as in the examples for MOVE-CORRESPONDING. In the case of dynamic mappings using CL\_ABAP\_CORRESPONDING, the source and target component should also be free of overlap.