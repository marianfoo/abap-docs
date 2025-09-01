  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) → 

itab - Nested Tables

This example demonstrates how nested internal tables are declared and used.

Source Code

REPORT demo\_nested\_internal\_tables.
CLASS table\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF t\_address,
        street TYPE c LENGTH 20,
        city   TYPE c LENGTH 20,
      END OF t\_address,
      t\_address\_tab TYPE STANDARD TABLE
                    OF t\_address
                    WITH NON-UNIQUE KEY city.
    CLASS-DATA:
      BEGIN OF company,
        name       TYPE c LENGTH 20,
        addresses  TYPE t\_address\_tab,
      END OF company,
      company\_tab LIKE HASHED TABLE
                  OF   company
                  WITH UNIQUE KEY name,
      company\_sorted\_tab LIKE SORTED TABLE
                         OF   company
                         WITH UNIQUE KEY name.
ENDCLASS.
CLASS table\_demo IMPLEMENTATION.
  METHOD main.
    DATA: address TYPE t\_address,
          idx     TYPE sy-tabix,
          output  TYPE c LENGTH 80.
    FIELD-SYMBOLS <fs> LIKE company.
    DATA(out) = cl\_demo\_output=>new( ).
\* Filling Internal Tables
    company\_tab = VALUE #(
      ( name   = 'Racing Bikes Inc.'
        addresses = VALUE #( ( street = 'Fifth Avenue'
                               city   = 'New York' )
                             ( street = 'Second Street'
                               city   = 'Boston' ) ) )
      ( name   = 'Chocolatiers Suisse'
        addresses = VALUE #( ( street = 'Avenue des Forets'
                               city   = 'Geneve' )
                             ( street = 'Kleine Bachgasse'
                               city   = 'Basel' )
                             ( street = 'Piazza di Lago'
                               city   = 'Lugano' ) ) ) ).
\* Reading Internal Tables
    READ TABLE company\_tab
         WITH TABLE KEY name = 'Racing Bikes Inc.'
         ASSIGNING <fs>.
    out->write( |{ <fs>-name }| ).
    LOOP AT <fs>-addresses INTO address.
      CLEAR output.
      WRITE: sy-tabix       TO output+4(4),
             address-street TO output+8(20),
             address-city   TO output+28(20).
      out->write( output ).
    ENDLOOP.
\* Modifying Internal Tables
    address-street = 'Rue des Montagnes'.
    address-city   = 'Geneve'.
    READ TABLE company\_tab
         WITH TABLE KEY name = 'Chocolatiers Suisse'
         INTO company.
    READ TABLE company-addresses TRANSPORTING NO FIELDS
               WITH TABLE KEY city = address-city.
    idx = sy-tabix.
    MODIFY company-addresses FROM address INDEX idx.
    MODIFY TABLE company\_tab FROM company.
\* Moving and sorting Internal Tables
    company\_sorted\_tab = company\_tab.
    LOOP AT company\_sorted\_tab INTO company.
      out->write( |{ company-name }| ).
      SORT company-addresses.
      LOOP AT company-addresses INTO address.
        CLEAR output.
        WRITE: sy-tabix       TO output+4(4),
               address-street TO output+8(20),
               address-city   TO output+28(20).
        out->write( output ).
      ENDLOOP.
    ENDLOOP.
\* text output
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  table\_demo=>main( ).

Description

The example shows the declaration of two internal tables, t\_address\_tab and company\_tab, where t\_address\_tab is contained in company\_tab. For this, t\_address\_tab is defined as the table type. The component addresses of the company structure is declared with this type. The data type of company is used as the line type for the tables company\_tab and company\_sorted\_tab.

The internal table is filled using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

A line from company\_tab is assigned to the field symbol <fs> using [READ](javascript:call_link\('abapread_table.htm'\)) and its table-like component addresses is processed in a [LOOP](javascript:call_link\('abaploop_at_itab_shortref.htm'\)). The content of the line is assigned to the structure address. Since addresses is an index table, sy-tabix can be evaluated.

To change the content of the component street of a line of the inner table addresses, the index of the required line is determined using a READ statement and it is then used in [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)). To make the changes effective in the corresponding line of the outer hashed table as well, the key access of the MODIFY statement is used.

Finally, the hashed table is assigned a sorted table with the same line type. In this way, the entries are automatically sorted according to the table key name. The entries of the inner standard table, on the other hand, are sorted using the [SORT](javascript:call_link\('abapsort_itab.htm'\)) statement.