  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Date%20Formats%2C%20ABENSTRING_TEMPLATE_DATE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Date Formats

This example demonstrates the various date formats for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_date\_form DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: fixvals TYPE ddfixvalues,
          fixval  LIKE LINE OF fixvals.
    METHODS: setup,
      teardown,
      check\_system.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_date\_form IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF result,
            datfm  TYPE string,
            format TYPE string,
            result TYPE string,
          END OF result,
          results LIKE TABLE OF result.
    setup( ).
    SELECT land, datfm
           FROM t005x
           WHERE land LIKE '@%'
           ORDER BY PRIMARY KEY
           INTO (@FINAL(land),@FINAL(datfm)).
      result-datfm = datfm.
      READ TABLE fixvals WITH KEY low = datfm
           TRANSPORTING ddtext INTO fixval.
      IF sy-subrc = 0.
        result-format = fixval-ddtext.
      ELSE.
        CLEAR result-format.
      ENDIF.
      result-result = |{
          cl\_demo\_date\_time=>get\_system\_date( )
          COUNTRY = land }|.
      APPEND result TO results.
    ENDSELECT.
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
    DATA: descr TYPE REF TO cl\_abap\_elemdescr,
          ans   TYPE c LENGTH 1.
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
    descr ?= cl\_abap\_elemdescr=>describe\_by\_name( 'T005X-DATFM' ).
    fixvals = descr->get\_ddic\_fixed\_values( p\_langu = sy-langu ).
    LOOP AT fixvals INTO fixval.
      INSERT t005x FROM @( VALUE #(
        land = '@' && |{ fixval-low }|
        datfm = |{ fixval-low }| ) ).
    ENDLOOP.
    COMMIT WORK.
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land LIKE '@%'.
    COMMIT WORK.
  ENDMETHOD.
ENDCLASS.

Description   

The current date is displayed in all possible [country-specific date formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm). For this purpose, the utility methods setup and teardown insert temporary lines with the possible values of the column DATFM into the database table T005X and delete them again once they have been used.