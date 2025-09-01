  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Time%20Formats%2C%20ABENSTRING_TEMPLATE_TIME_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Time Formats

The example demonstrates the various time formats for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_time\_form DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS: setup,
      teardown,
      check\_system.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_time\_form IMPLEMENTATION.
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
             INTO (@FINAL(land)).
        comp = sy-dbcnt + 2.
        ASSIGN result-(comp) TO <col>.
        <col> = |{ <time> COUNTRY = land }|.
      ENDSELECT.
      APPEND result TO results.
    ENDLOOP.
    teardown( ).
    out->write( results ).
  ENDMETHOD.
  METHOD check\_system.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      out->write(
         'This demo cannot be executed in a production system' ).
      RETURN.
    ENDIF.
  ENDMETHOD.
  METHOD setup.
    DATA: descr   TYPE REF TO cl\_abap\_elemdescr,
          fixvals TYPE ddfixvalues,
          fixval  LIKE LINE OF fixvals,
          ans     TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           WHERE land LIKE '@%'
           INTO (@FINAL(land)).
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
        out->write( 'Execution not possible' ).
        RETURN.
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
ENDCLASS.

Description   

An internal table timetable is filled with different times and these times are displayed in all possible [country-specific time formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm). For this purpose, the utility methods setup and teardown insert temporary lines with the possible values of the column TIMEFM into the database table T005X and delete them again once they have been used.