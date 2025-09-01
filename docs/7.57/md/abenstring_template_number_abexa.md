---
title: "Source Code"
description: |
  REPORT demo_string_template_numb_form. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS: setup, teardown, check_system. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA number TYPE p DECIMALS 2 VALUE '1234567.89'. DATA: BEGIN OF result, xdezp  TYPE
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_number_abexa.htm"
abapFile: "abenstring_template_number_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abenstring", "template", "number", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_tmpl - Number Formats, ABENSTRING_TEMPLATE_NUMBER_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_tmpl - Number Formats

The example demonstrates the various number formats for embedded expressions.

Source Code   

REPORT demo\_string\_template\_numb\_form.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS: setup,
      teardown,
      check\_system.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    cl\_demo\_output=>display( results ).  ENDMETHOD.
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
        cl\_demo\_output=>display( 'Execution not possible' ).
        LEAVE PROGRAM.
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

Represents a number in all possible [country-specific number formats](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm). To do this, the setup and teardown utility methods insert temporary lines with the possible values of the column XDEZP into the database table T005X and delete them again once they have been used.