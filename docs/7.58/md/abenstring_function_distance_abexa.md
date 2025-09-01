---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_distance DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_str_distance IMPLEMENTATION. METHOD main. DATA: word    TYPE c LENGTH 30 V
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_function_distance_abexa.htm"
abapFile: "abenstring_function_distance_abexa.htm"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "abenstring", "function", "distance", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20distance%2C%20ABENSTRING_FUNCTION_DISTANCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - distance

This example demonstrates the string function [distance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendistance_functions.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_distance DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_distance IMPLEMENTATION.
  METHOD main.
    DATA: word    TYPE c LENGTH 30 VALUE 'CALL METHOD',
          percent TYPE i VALUE 50.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = word
     )->request(   CHANGING field = percent ).
    IF word IS INITIAL.
      out->write(
        'Enter a word' ).
      RETURN.
    ENDIF.
    IF percent NOT BETWEEN 0 AND 100.
      out->write(
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
      EXPORTING langu = COND #( WHEN sy-langu <> 'D'
                                  THEN 'E'
                                  ELSE 'D' )
                version = if\_abap\_docu=>unicode ).
    LOOP AT index\_tab->\* ASSIGNING FIELD-SYMBOL(<index>).
      FINAL(str1) = to\_upper( val = <index>-key1 ).
      FINAL(str2) = to\_upper( val = word ).
      DATA(max) = COND i( WHEN strlen( str1 ) > strlen( str2 )
                            THEN strlen( str1 )
                            ELSE strlen( str2 ) ).
      max = ( 100 - percent  ) \* max / 100 + 1.
      FINAL(dist) = distance( val1 = str1 val2 = str2 max = max ).
      IF dist < max.
        distances = VALUE #( BASE distances
                            ( text = str1 dist = dist ) ).
      ENDIF.
    ENDLOOP.
    out->write( distances ).
  ENDMETHOD.
ENDCLASS.

Description   

The class compares a text entered using the function distance with the index entries in the ABAP keyword documentation. The index entries that match the longer texts to an arbitrary percentage are displayed in order of ascending edit distance.