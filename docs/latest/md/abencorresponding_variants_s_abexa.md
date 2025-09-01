  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Variants%20of%20MOVE-CORRESPONDING%20and%20the%20CORRESPONDING%20Operator%20Using%20Deep%20Structures%2C%20ABENCORRESPONDING_VARIANTS_S_ABEXA%2C%20758%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Variants of MOVE-CORRESPONDING and the CORRESPONDING Operator Using Deep Structures

This example demonstrates variants of statements with [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) and the [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) operator using [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_variants\_st DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES: BEGIN OF line1,
             col1 TYPE i,
             col2 TYPE i,
           END OF line1,
           BEGIN OF line2,
             col2 TYPE i,
             col3 TYPE i,
             col4 TYPE i,
           END OF line2.
    DATA:
      "deep structures
      BEGIN OF struc1,
        comp1 TYPE c LENGTH 1 VALUE 'W',
        BEGIN OF struc\_nested,
          comp1 TYPE c LENGTH 1 VALUE 'X',
          BEGIN OF comp2,
            col1 TYPE c LENGTH 1 VALUE 'Y',
            col2 TYPE c LENGTH 1 VALUE 'Z',
          END OF comp2,
        END OF struc\_nested,
        itab  TYPE TABLE OF line1 WITH EMPTY KEY,
      END OF struc1,
      BEGIN OF struc2,
        BEGIN OF struc\_nested,
          comp1 TYPE string,
          comp2 TYPE string,
          comp3 TYPE string,
        END OF struc\_nested,
        itab  TYPE TABLE OF line2 WITH EMPTY KEY,
        comp4 TYPE i,
      END OF struc2.
    METHODS:
      fill\_deep\_structures.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_variants\_st IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
     \`Demo: Variants of MOVE-CORRESPONDING and the CORRESPONDING\` &&
     \` operator using deep structures\`
       )->write\_doc( '<b>Content of deep structures</b>'
       )->write( struc1
       )->write( struc2
       )->line( ).
    "MOVE-CORRESPONDING without additions
    MOVE-CORRESPONDING struc1 TO struc2.
    out->write\_doc( \`<b>MOVE-CORRESPONDING without additions</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 12, 12 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 1 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "MOVE-CORRESPONDING with addition EXPANDING NESTED TABLES
    MOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES.
    out->write\_doc( \`<b>MOVE-CORRESPONDING with the addition \` &&
    \`EXPANDING NESTED TABLES</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 25, 25 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 2 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "MOVE-CORRESPONDING with addition KEEPING TARGET LINES
    MOVE-CORRESPONDING struc1 TO struc2 KEEPING TARGET LINES.
    out->write\_doc( \`<b>MOVE-CORRESPONDING with the addition \` &&
    \`KEEPING TARGET LINES</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 39, 39 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 3 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "MOVE-CORRESPONDING with addition
    "EXPANDING NESTED TABLES KEEPING TARGET LINES
    MOVE-CORRESPONDING struc1 TO struc2
      EXPANDING NESTED TABLES KEEPING TARGET LINES.
    out->write\_doc( \`<b>MOVE-CORRESPONDING with the additions \` &&
    \`EXPANDING NESTED TABLES KEEPING TARGET LINES</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 54, 55 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 4 ) )
    )->write( struc2
    )->line( ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator without addition
    struc2 = CORRESPONDING #( struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator without addition</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 70, 70 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 5 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the addition DEEP
    struc2 = CORRESPONDING #( DEEP struc1 ).
    out->write\_doc(
          \` <b>CORRESPONDING operator with the addition DEEP</b>\`
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
           source = cl\_demo\_output\_helper=>get\_caller( ) &&
           \`, 83, 83 \` )
        )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                         cl\_demo\_output\_helper=>get\_info\_html( 6 ) )
        )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the addition BASE
    struc2 = CORRESPONDING #( BASE ( struc2 ) struc1 ).
    out->write\_doc(
        \`<b>CORRESPONDING operator with the addition BASE</b>\`
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
           source = cl\_demo\_output\_helper=>get\_caller( ) &&
           \`, 96, 96 \` )
        )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                         cl\_demo\_output\_helper=>get\_info\_html( 7 ) )
        )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions DEEP BASE
    struc2 = CORRESPONDING #( DEEP BASE ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the additions \` &&
                    \`DEEP BASE</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 109, 109 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 8 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions APPENDING BASE
    struc2 = CORRESPONDING #( APPENDING ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the addition \` &&
                    \`APPENDING</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 123, 123 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 9 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions DEEP APPENDING BASE
    struc2 = CORRESPONDING #( DEEP APPENDING ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the additions \` &&
                    \`DEEP APPENDING</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = cl\_demo\_output\_helper=>get\_caller( ) && \`, 137, 137 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 10 ) )
    )->write( struc2 ).
  ENDMETHOD.
  METHOD fill\_deep\_structures.
    "Clear all contents of struc2.
    CLEAR struc2.
    "Fill nested tables in deep structures.
    struc2-struc\_nested = VALUE #( comp1 = \`aaa\`
                                   comp2 = \`bbb\`
                                   comp3 = \`ccc\` ).
    struc1-itab = VALUE #(
      ( col1 = 111 col2 = 222 )
      ( col1 = 333 col2 = 444
      ) ).
    struc2-itab = VALUE #(
      ( col2 = 1 col3 = 2 col4 = 3 )
      ( col2 = 4 col3 = 5 col4 = 6 )
      ( col2 = 7 col3 = 8 col4 = 9 )
      ).
    "Fill individual component that is not shared by both structures.
    struc2-comp4 = 999.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    fill\_deep\_structures( ).
  ENDMETHOD.
ENDCLASS.

Description   

Two structures, struc1 and struc2, are declared. Both contain an identically named [nested structure](javascript:call_link\('abennested_structure_glosry.htm'\) "Glossary Entry") and nested table as deep components. The nested structures struc\_nested differ in terms of the components' data types. The number of components in the nested structures as well as in the two nested internal tables itab is different.

The example covers statements with MOVE-CORRESPONDING and the CORRESPONDING operator demonstrating the differences in the result when using the various additions. The source code contains explanations on those differences.