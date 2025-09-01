---
title: "Source Code"
description: |
  REPORT demo_string_distance. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: word    TYPE c LENGTH 30 VALUE 'CALL METHOD', percent TYPE i VALUE 50. cl_demo_input=>add_field( CHANGING field = word ). cl_demo_input=>request(   C
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_function_distance_abexa.htm"
abapFile: "abenstring_function_distance_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "abenstring", "function", "distance", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_abexas.htm) → 

string\_func - distance

This example demonstrates the string function [distance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendistance_functions.htm).

Source Code

REPORT demo\_string\_distance.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: word    TYPE c LENGTH 30 VALUE 'CALL METHOD',
          percent TYPE i VALUE 50.
    cl\_demo\_input=>add\_field( CHANGING field = word ).
    cl\_demo\_input=>request(   CHANGING field = percent ).
    IF word IS INITIAL.
      cl\_demo\_output=>display(
        'Enter a word' ).
      RETURN.
    ENDIF.
    IF percent NOT BETWEEN 0 AND 100.
      cl\_demo\_output=>display(
         'Enter a percentage between 0 and 100' ).
      RETURN.
    ENDIF.
    TYPES: BEGIN OF distance,
             text TYPE string,
             dist TYPE i,
           END OF distance.
    DATA: index\_tab TYPE REF TO if\_abap\_docu=>abap\_index\_tab,
          distances TYPE SORTED TABLE OF distance
                    WITH NON-UNIQUE KEY dist.
    index\_tab = cl\_abap\_docu=>get\_abap\_index(
      COND #( WHEN sy-langu <> 'D'
                      THEN 'E'
                      ELSE 'D' ) ).
    LOOP AT index\_tab->\* ASSIGNING FIELD-SYMBOL(<index>).
      DATA(str1) = to\_upper( val = <index>-key1 ).
      DATA(str2) = to\_upper( val = word ).
      DATA(max) = COND i( WHEN strlen( str1 ) > strlen( str2 )
                            THEN strlen( str1 )
                            ELSE strlen( str2 ) ).
      max = ( 100 - percent  ) \* max / 100 + 1.
      DATA(dist) = distance( val1 = str1 val2 = str2 max = max ).
      IF dist < max.
        distances = VALUE #( BASE distances
                            ( text = str1 dist = dist ) ).
      ENDIF.
    ENDLOOP.
    cl\_demo\_output=>display( distances ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program compares a text entered using the function distance with the index entries in the ABAP keyword documentation. The index entries that match the longer texts to an arbitrary percentage are displayed in order of ascending edit distance.