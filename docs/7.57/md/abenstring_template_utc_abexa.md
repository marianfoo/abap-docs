---
title: "Source Code"
description: |
  REPORT demo_string_template_utc_frmt. PARAMETERS timefm TYPE t005x-timefm DEFAULT '0' AS LISTBOX VISIBLE LENGTH 40. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main. PRIVATE SECTION. CONSTANTS datfm_values TYPE string VALUE `123456789ABC;`. CLASS-DATA: BEGIN OF result, col1 TYPE str
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_utc_abexa.htm"
abapFile: "abenstring_template_utc_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenstring", "template", "utc", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_tmpl - Time Stamp Formats, ABENSTRING_TEMPLATE_UTC_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_tmpl - Time Stamp Formats

The example demonstrates the various time stamp formats for embedded expressions.

Source Code   

REPORT demo\_string\_template\_utc\_frmt.
PARAMETERS timefm TYPE t005x-timefm DEFAULT '0'
                  AS LISTBOX VISIBLE LENGTH 40.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main.
  PRIVATE SECTION.
    CONSTANTS datfm\_values TYPE string
              VALUE \`123456789ABC;\`.
    CLASS-DATA: BEGIN OF result,
                  col1 TYPE string,
                  col2 TYPE string,
                  col3 TYPE string,
                  col4 TYPE string,
                END OF result,
                result\_tab LIKE TABLE OF result WITH EMPTY KEY.
    CLASS-METHODS: setup,
      teardown,
      display,
      check\_system.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: land  TYPE t005x-land,
          datfm TYPE t005x-datfm.
    DATA: utc\_long    TYPE utclong,
          time\_stampl TYPE timestampl,
          time\_stamp  TYPE timestamp.
    setup( ).
    utc\_long    = utclong\_current(  ).
    time\_stamp  = cl\_abap\_tstmp=>utclong2tstmp\_short( utc\_long ).
    time\_stampl = cl\_abap\_tstmp=>utclong2tstmp( utc\_long ).
    SELECT land, datfm
           FROM t005x
           WHERE land LIKE '@%'
           INTO (@land,@datfm).
      result\_tab =
        VALUE #( BASE result\_tab
                 ( col1 = datfm
                   col2 = |{ utc\_long    COUNTRY  = land
                                         TIMEZONE = sy-zonlo }|
                   col3 = |{ time\_stampl COUNTRY  = land
                                         TIMEZONE = sy-zonlo }|
                   col4 = |{ time\_stamp  COUNTRY  = land
                                         TIMEZONE = sy-zonlo }| ) ).
    ENDSELECT.
    teardown( ).
    display( ).  ENDMETHOD.
  METHOD setup.
    DATA: t005x\_wa TYPE t005x,
          ans      TYPE c LENGTH 1,
          key      TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           INTO (t005x\_wa-land )
           WHERE land LIKE '@%'.
    IF sy-subrc = 0.
      CALL FUNCTION 'POPUP\_TO\_CONFIRM'
        EXPORTING
          titlebar              = 'Confirmation'
          text\_question         = 'Delete existing'
                                  &
                                  ' entries with keys'
                                  &
                                  ' @1, @2, ...  in T005X?'
          text\_button\_1         = 'Yes'
          text\_button\_2         = 'No'
          display\_cancel\_button = ' '
        IMPORTING
          answer                = ans.
      IF ans = 1.
        teardown( ).
      ELSE.
        MESSAGE 'Execution not possible' TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
      ENDIF.
    ENDIF.
    t005x\_wa-timefm = timefm.
    DO strlen( datfm\_values ) TIMES.
      key = |{ substring( val =  datfm\_values
                          off = sy-index - 1
                          len = 1 )  }|.
      t005x\_wa-land = '@' && key.
      t005x\_wa-datfm = key.
      INSERT t005x FROM t005x\_wa.
    ENDDO.
    COMMIT WORK.
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land LIKE '@%'.
    COMMIT WORK.
  ENDMETHOD.
  METHOD display.
    DATA: alv TYPE REF TO cl\_salv\_table,
          exc TYPE REF TO cx\_salv\_error.
    TRY.
        cl\_salv\_table=>factory(
          IMPORTING r\_salv\_table = alv
          CHANGING  t\_table      = result\_tab ).
        alv->get\_columns( )->set\_optimize( 'X' ).
        alv->get\_columns( )->get\_column( 'COL1'
                          )->set\_short\_text( 'DATFM' ).
        alv->get\_columns( )->get\_column( 'COL2'
                          )->set\_short\_text( 'utclong' ).
        alv->get\_columns( )->get\_column( 'COL3'
                          )->set\_short\_text( 'TIMESTAMPL' ).
        alv->get\_columns( )->get\_column( 'COL4'
                          )->set\_short\_text( 'TIMESTAMP' ).
        alv->display( ).
      CATCH cx\_salv\_error INTO exc.
        MESSAGE exc TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD check\_system.
    IF cl\_abap\_demo\_services=>is\_production\_system( ) = abap\_true.
      MESSAGE 'This demo cannot be executed in a production system'
              TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
    AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
      ID 'DEVCLASS' FIELD '$TMP'
      ID 'OBJTYPE'  FIELD 'PROG'
      ID 'OBJNAME'  DUMMY
      ID 'P\_GROUP'  DUMMY
      ID 'ACTVT'    FIELD '02'.
    IF sy-subrc <> 0.
      MESSAGE 'You are not authorized to execute this demo'
              TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) and in [packed numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm) are produced in all possible country-specific [date formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_formats.htm) and [time formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm). For this purpose, the utility methods setup and teardown insert temporary lines with the possible values of the column DATFM into the database table T005X and delete them again once they have been used. The value of the column TIMEFM can be entered on the selection screen.