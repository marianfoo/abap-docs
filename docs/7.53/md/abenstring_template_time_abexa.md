---
title: "String Templates, Time Formats"
description: |
  The example demonstrates the various time formats for embedded expressions. Source Code REPORT demo_string_template_time_form. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main. PRIVATE SECTION. CLASS-METHODS: setup, teardown, check_system. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD m
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_time_abexa.htm"
abapFile: "abenstring_template_time_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenstring", "template", "time", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, Time Formats

The example demonstrates the various time formats for embedded expressions.

Source Code

REPORT demo\_string\_template\_time\_form.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main.
  PRIVATE SECTION.
    CLASS-METHODS: setup,
      teardown,
      check\_system.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: seconds   TYPE i,
          timetable TYPE TABLE OF t,
          comp      TYPE i.
    CONSTANTS n     TYPE i VALUE 4.
    DATA: BEGIN OF result,
            raw        TYPE string,
            iso        TYPE string,
            h24        TYPE string,
            h12\_1\_12\_a TYPE string,
            h12\_1\_12\_b TYPE string,
            h12\_0\_11\_a TYPE string,
            h12\_0\_11\_b TYPE string,
          END OF result,
          results LIKE TABLE OF result.
    FIELD-SYMBOLS: <time> TYPE t,
                   <col>  TYPE string.
    setup( ).
    timetable =
      VALUE #( FOR j = 1 UNTIL j > 24 / n
               LET s = ( j - 1 ) \* 3600 \* n IN
               ( CONV t( s ) )
               ( CONV t( s + 1 ) )
               ( CONV t( s + ( n - 1 ) \* 3600 + 59 \* 60 + 59 ) ) ).
    LOOP AT timetable ASSIGNING <time>.
      result-raw = |{ <time> TIME = RAW }|.
      result-iso = |{ <time> TIME = ISO }|.
      SELECT land
             FROM t005x
             WHERE land LIKE '@%'
             ORDER BY PRIMARY KEY
             INTO (@DATA(land)).
        comp = sy-dbcnt + 2.
        ASSIGN COMPONENT comp OF STRUCTURE result TO <col>.
        <col> = |{ <time> COUNTRY = land }|.
      ENDSELECT.
      APPEND result TO results.
    ENDLOOP.
    teardown( ).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
  METHOD setup.
    DATA: descr    TYPE REF TO cl\_abap\_elemdescr,
          fixvals  TYPE ddfixvalues,
          fixval   LIKE LINE OF fixvals,
          ans      TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           WHERE land LIKE '@%'
           INTO (@DATA(land)).
    IF sy-subrc = 0.
      CALL FUNCTION 'POPUP\_TO\_CONFIRM'
        EXPORTING
          titlebar              = 'Confirmation'
          text\_question         = 'Delete existing' &
                                  ' entries with keys' &
                                  ' @1, @2, ...  in T005X?'
          text\_button\_1         = 'Yes'
          text\_button\_2         = 'No'
          display\_cancel\_button = ' '
        IMPORTING
          answer                = ans.
      IF ans = 1.
        teardown( ).
      ELSE.
        cl\_demo\_output=>display( 'Execution not possible' ).
        LEAVE PROGRAM.
      ENDIF.
    ENDIF.
    descr ?= cl\_abap\_elemdescr=>describe\_by\_name( 'T005X-TIMEFM' ).
    fixvals = descr->get\_ddic\_fixed\_values( ).
    LOOP AT fixvals INTO fixval.
      IF fixval-low IS INITIAL.
        CONTINUE.
      ENDIF.
      INSERT t005x FROM @( VALUE #(
        land = '@' && |{ fixval-low }|
        timefm = |{ fixval-low }| ) ).
    ENDLOOP.
    COMMIT WORK.
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land LIKE '@%'.
    COMMIT WORK.
  ENDMETHOD.
  METHOD check\_system.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      cl\_demo\_output=>display(
         'This demo cannot be executed in a production system' ).
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table timetable is filled with various times, and these times are displayed in all possible [country-specific time formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm). For this purpose, the utility methods setup and teardown insert temporary rows with the possible values of the column TIMEFM into the database table T005X and deletes them again once they have been used.