  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Variants of MOVE-CORRESPONDING and the CORRESPONDING Operator Using Deep Structures,
ABENCORRESPONDING_VARIANTS_S_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Variants of MOVE-CORRESPONDING and the CORRESPONDING Operator Using Deep Structures

This example demonstrates variants of statements with [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) and the [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm) operator using [deep structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_structure_glosry.htm "Glossary Entry").

Source Code   

REPORT demo\_corresponding\_variants\_st.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
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
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output,
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
    CLASS-METHODS:
      fill\_deep\_structures.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
       source = sy-repid && \`, 63, 63 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 1 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "MOVE-CORRESPONDING with addition EXPANDING NESTED TABLES
    MOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES.
    out->write\_doc( \`<b>MOVE-CORRESPONDING with the addition \` &&
    \`EXPANDING NESTED TABLES</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 76, 76 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 2 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "MOVE-CORRESPONDING with addition KEEPING TARGET LINES
    MOVE-CORRESPONDING struc1 TO struc2 KEEPING TARGET LINES.
    out->write\_doc( \`<b>MOVE-CORRESPONDING with the addition \` &&
    \`KEEPING TARGET LINES</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 90, 90 \` )
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
       source = sy-repid && \`, 105, 106 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 4 ) )
    )->write( struc2
    )->line( ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator without addition
    struc2 = CORRESPONDING #( struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator without addition</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 121, 121 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 5 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the addition DEEP
    struc2 = CORRESPONDING #( DEEP struc1 ).
out->write\_doc( \`<b>CORRESPONDING operator with the addition DEEP</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 134, 134 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 6 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the addition BASE
    struc2 = CORRESPONDING #( BASE ( struc2 ) struc1 ).
out->write\_doc( \`<b>CORRESPONDING operator with the addition BASE</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 147, 147 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 7 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions DEEP BASE
    struc2 = CORRESPONDING #( DEEP BASE ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the additions \` &&
                    \`DEEP BASE</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 160, 160 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 8 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions APPENDING BASE
    struc2 = CORRESPONDING #( APPENDING ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the addition \` &&
                    \`APPENDING</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 174, 174 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 9 ) )
    )->write( struc2 ).
    fill\_deep\_structures( ).
    "CORRESPONDING operator with the additions DEEP APPENDING BASE
    struc2 = CORRESPONDING #( DEEP APPENDING ( struc2 ) struc1 ).
    out->write\_doc( \`<b>CORRESPONDING operator with the additions \` &&
                    \`DEEP APPENDING</b>\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 188, 188 \` )
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                     cl\_demo\_output\_helper=>get\_info\_html( 10 ) )
    )->write( struc2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    fill\_deep\_structures( ).
  ENDMETHOD.
  METHOD fill\_deep\_structures.
    "Clear all contents of struc2.
    CLEAR struc2.
    "Fill nested tables in deep structures.
    struc2-struc\_nested = VALUE #( comp1 = \`aaa\`
                                   comp2 = \`bbb\`
                                   comp3 = \`ccc\`).
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Two structures, struc1 and struc2, are declared. Both contain an identically named [nested structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennested_structure_glosry.htm "Glossary Entry") and nested table as deep components. The nested structures struc\_nested differ in terms of the components' data types. The number of components in the nested structures as well as in the two nested internal tables itab is different.

The example covers statements with MOVE-CORRESPONDING and the CORRESPONDING operator demonstrating the differences in the result when using the various additions. The source code contains explanations on those differences.