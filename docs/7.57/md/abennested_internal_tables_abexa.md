---
title: "Source Code"
description: |
  REPORT demo_nested_internal_tables. CLASS table_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES: BEGIN OF t_address, street TYPE c LENGTH 20, city   TYPE c LENGTH 20, END OF t_address, t_address_tab TYPE STANDARD TABLE OF t_address WITH NON-UNIQUE KEY city. CLASS
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennested_internal_tables_abexa.htm"
abapFile: "abennested_internal_tables_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "abennested", "internal", "tables", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) →  [TYPES, TABLE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_itab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Nested Tables, ABENNESTED_INTERNAL_TABLES_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
        name      TYPE c LENGTH 20,
        addresses TYPE t\_address\_tab,
      END OF company,
      company\_tab        LIKE HASHED TABLE
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
    FINAL(out) = cl\_demo\_output=>new( ).
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
    out->next\_section( \`Table\`).
    out->write( company\_tab ).
    out->next\_section( \`Some accesses\`).
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

The internal table is filled using the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm).

A line from company\_tab is assigned to the field symbol <fs> using [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and its table-like component addresses is processed in a [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_shortref.htm). The content of the line is assigned to the structure address. Since addresses is an index table, sy-tabix can be evaluated.

To change the content of the component street of a line of the inner table addresses, the index of the required line is determined using a READ statement and it is then used in [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm). To make the changes effective in the corresponding line of the outer hashed table as well, the key access of the MODIFY statement is used.

Finally, the hashed table is assigned a sorted table with the same line type. In this way, the entries are automatically sorted according to the table key name. The entries of the inner standard table, on the other hand, are sorted using the [SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) statement.