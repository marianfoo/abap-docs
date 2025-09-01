  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Examples of String Functions](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

String Functions, distance

The example demonstrates the string function [distance](javascript:call_link\('abendistance_functions.htm'\)).

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
    DATA: index\_tab TYPE REF TO cl\_abap\_docu=>abap\_index\_tab,
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

The program compares a text that has been input with the index entry in the ABAP keyword documentation using distance. The index entries that correspond to the longer texts to an arbitrary precentage are output in order of increasing edit distance.