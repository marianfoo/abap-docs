---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_template_numb_form DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS: setup, teardown, check_system. ENDCLASS.  Public class implementation CLASS cl_demo_str_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_number_abexa.htm"
abapFile: "abenstring_template_number_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abenstring", "template", "number", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Number%20Formats%2C%20ABENSTRING_TEMPLATE_NUMBER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Number Formats

The example demonstrates the various number formats for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_numb\_form DEFINITION
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
CLASS cl\_demo\_str\_template\_numb\_form IMPLEMENTATION.
  METHOD main.
    DATA number TYPE p DECIMALS 2 VALUE '1234567.89'.
    DATA: BEGIN OF result,
            xdezp  TYPE string,
            format TYPE string,
          END OF result,
          results LIKE TABLE OF result.
    setup( ).
    SELECT land, xdezp
           FROM t005x
           WHERE land LIKE '@%'
           ORDER BY PRIMARY KEY
           INTO (@FINAL(land),@FINAL(xdezp)).
      results = VALUE #( BASE results
        ( xdezp  = xdezp
          format = |{ number COUNTRY = land }| ) ).
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
    CONSTANTS xdezp\_values TYPE string VALUE \` XY\`.
    DATA: ans TYPE c LENGTH 1,
          key TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           WHERE land LIKE '@%'
           INTO (@FINAL(land)).
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
        out->write( 'Execution not possible' ).
        RETURN.
      ENDIF.
    ENDIF.
    DO strlen( xdezp\_values ) TIMES.
      key = |{ substring( val =  xdezp\_values
                          off = sy-index - 1
                          len = 1 )  }|.
      INSERT t005x FROM @( VALUE #(
        land = '@' && key
        xdezp = key ) ).
    ENDDO.
    COMMIT WORK.
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land LIKE '@%'.
    COMMIT WORK.
  ENDMETHOD.
ENDCLASS.

Description   

Represents a number in all possible [country-specific number formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm). To do this, the setup and teardown utility methods insert temporary lines with the possible values of the column XDEZP into the database table T005X and delete them again once they have been used.