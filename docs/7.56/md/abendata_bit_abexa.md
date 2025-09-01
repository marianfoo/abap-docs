---
title: "Source Code"
description: |
  REPORT demo_data_bit. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF t_spfli, carrid    TYPE spfli-carrid, cityfrom  TYPE spfli-cityfrom, END OF t_spfli. DATA: frankfurt TYPE x LENGTH 4, frisco    TYPE x LENGTH 4, inte
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_bit_abexa.htm"
abapFile: "abendata_bit_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abendata", "bit", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_processing_expr_func.htm) →  [Bit Expressions (bit\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm) → 

bit\_exp - Bit Operations

This example demonstrates how bit operators are used.

Source Code

REPORT demo\_data\_bit.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF t\_spfli,
             carrid    TYPE spfli-carrid,
             cityfrom  TYPE spfli-cityfrom,
          END OF t\_spfli.
    DATA: frankfurt TYPE x LENGTH 4,
          frisco    TYPE x LENGTH 4,
          intersect TYPE x LENGTH 4,
          union     TYPE x LENGTH 4,
          bit       TYPE i,
          spflitab  TYPE TABLE OF t\_spfli,
          wa        TYPE t\_spfli,
          carrid    TYPE t\_spfli-carrid,
          carrier   LIKE SORTED TABLE OF carrid
                                WITH UNIQUE KEY table\_line.
    SELECT carrid FROM scarr INTO TABLE @carrier.
    SELECT carrid, cityfrom
           FROM spfli
           INTO CORRESPONDING FIELDS OF TABLE @spflitab.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section(
      'Airlines with departure cities'
      )->write\_data( spflitab
      )->end\_section( ).
    LOOP AT spflitab INTO wa.
      READ TABLE carrier FROM wa-carrid TRANSPORTING NO FIELDS.
      CASE wa-cityfrom.
        WHEN 'FRANKFURT'.
          SET BIT sy-tabix OF frankfurt.
        WHEN 'SAN FRANCISCO'.
          SET BIT sy-tabix OF frisco.
      ENDCASE.
    ENDLOOP.
    intersect = frankfurt BIT-AND frisco.
    union     = frankfurt BIT-OR  frisco.
    out->begin\_section(
      'Airlines flying from Frankfurt and San Francisco' ).
    DO 32 TIMES.
      GET BIT sy-index OF intersect INTO bit.
      IF bit = 1.
        carrid = carrier\[ sy-index \].
        out->write( |{ carrid }| ).
      ENDIF.
    ENDDO.
    out->next\_section(
      'Airlines flying from Frankfurt or San Francisco' ).
    DO 32 TIMES.
      GET BIT sy-index OF union INTO bit.
      IF bit = 1.
        carrid = carrier\[ sy-index \].
        out->write( |{ carrid }| ).
      ENDIF.
    ENDDO.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method main works with four hexadecimal fields of length 4, namely frankfurt, frisco, intersect, and union. These fields can represent sets with a maximum of 32 elements. Here, the basic set is supposed to be the set of all possible airlines from the database table SCARR. Each bit of the corresponding bit sequence represents an airline. To index the airlines, an internal table carrier is created and filled with the abbreviations for the airlines from SCARR. An airline is identified using the internal index of the table carrier.

Depending on the departure city, the SELECT loop across the database table SPFLI sets the bit at the position that matches the line number of the airline in the table carrier, in either in the frankfurt field or in the frisco field. For this purpose, the line number sy-tabix is determined using a READ statement, in which no other fields are transported.

Using the bit operations BIT-AND and BIT-OR, the intersection and union of frankfurt and frisco are created.

In the two DO loops, the bits from intersect and union are read and evaluated individually. For every set position, the airline abbreviations are read from the table carrier using a READ statement.