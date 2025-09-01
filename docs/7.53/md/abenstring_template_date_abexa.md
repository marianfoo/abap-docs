---
title: "String Templates, Date Formats"
description: |
  This example demonstrates the various date formats for embedded expressions. Source Code REPORT demo_string_template_date_form. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main. PRIVATE SECTION. CLASS-DATA: fixvals TYPE ddfixvalues, fixval  LIKE LINE OF fixvals. CLASS-METHODS: setup, t
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_date_abexa.htm"
abapFile: "abenstring_template_date_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenstring", "template", "date", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, Date Formats

This example demonstrates the various date formats for embedded expressions.

Source Code

REPORT demo\_string\_template\_date\_form.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main.
  PRIVATE SECTION.
    CLASS-DATA: fixvals TYPE ddfixvalues,
                fixval  LIKE LINE OF fixvals.
    CLASS-METHODS: setup,
                   teardown,
                   check\_system.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
           INTO (@DATA(land),@DATA(datfm)).
      result-datfm = datfm.
      READ TABLE fixvals WITH KEY low = datfm
           TRANSPORTING ddtext INTO fixval.
      IF sy-subrc = 0.
        result-format = fixval-ddtext.
      ELSE.
        CLEAR result-format.
      ENDIF.
      result-result = |{ sy-datum COUNTRY = land }|.
      APPEND result TO results.
    ENDSELECT.
    teardown( ).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
  METHOD setup.
    DATA: descr    TYPE REF TO cl\_abap\_elemdescr,
          ans      TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           WHERE land LIKE '@%'
           INTO (@DATA(land)).
    IF sy-subrc = 0.
      CALL FUNCTION 'POPUP\_TO\_CONFIRM'
        EXPORTING
          titlebar                      = 'Confirmation'
          text\_question                 = 'Delete existing' &
                                          ' entries with keys' &
                                          ' @1, @2, ...  in T005X?'
          text\_button\_1                 = 'Yes'
          text\_button\_2                 = 'No'
          display\_cancel\_button         = ' '
        IMPORTING
          answer                        = ans.
      IF ans = 1.
        teardown( ).
      ELSE.
        cl\_demo\_output=>display( 'Execution not possible' ).
        LEAVE PROGRAM.
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

The current date is displayed in all possible [country-specific date formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm) using the parameter [COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm). For this purpose, the utility methods setup and teardown insert temporary rows with the possible values of the column DATFM into the database table T005X and are delete them again once they have been used.