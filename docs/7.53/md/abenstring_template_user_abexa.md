---
title: "String Templates, Formatting Settings"
description: |
  The example demonstrates the formatting settings for numbers, date output, and time output. Source Code REPORT demo_string_template_env_sett. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: num    TYPE p DECIMALS 2, date   TYPE d
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_user_abexa.htm"
abapFile: "abenstring_template_user_abexa.htm"
keywords: ["select", "insert", "loop", "do", "if", "try", "method", "class", "data", "abenstring", "template", "user", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, Formatting Settings

The example demonstrates the formatting settings for numbers, date output, and time output.

Source Code

REPORT demo\_string\_template\_env\_sett.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: num    TYPE p DECIMALS 2,
          date   TYPE d,
          time   TYPE t,
          tstamp TYPE timestampl,
          BEGIN OF country,
            key  TYPE t005x-land,
            name TYPE t005t-landx,
          END OF country,
          country\_tab LIKE TABLE OF country.
    DATA: BEGIN OF result,
            name      TYPE string,
            key       TYPE string,
            number    TYPE string,
            date      TYPE string,
            time      TYPE string,
            timestamp TYPE string,
          END OF result,
          results LIKE TABLE OF result.
    SELECT land AS key
           FROM t005x
           ORDER BY PRIMARY KEY
           INTO CORRESPONDING FIELDS OF TABLE @country\_tab
           ##TOO\_MANY\_ITAB\_FIELDS.
    LOOP AT country\_tab INTO country.
      SELECT SINGLE landx AS name
             FROM t005t
             WHERE  land1 = @country-key AND
                    spras = @sy-langu
             INTO CORRESPONDING FIELDS OF @country.
      MODIFY country\_tab FROM country INDEX sy-tabix.
    ENDLOOP.
    SORT country\_tab BY name AS TEXT.
    INSERT VALUE #( key =  space name = 'User Master Record' )
           INTO country\_tab INDEX 1.
    num  = sy-datum / 100.
    date = sy-datum.
    time = sy-uzeit.
    GET TIME STAMP FIELD tstamp.
    LOOP AT country\_tab INTO country.
      DATA(tabix) = sy-tabix.
      SET COUNTRY country-key.
      results = VALUE #( BASE results
      ( name      = country-name
        key       = country-key
        number    = |{ num    NUMBER    = ENVIRONMENT }|
        date      = |{ date   DATE      = ENVIRONMENT }|
        time      = |{ time   TIME      = ENVIRONMENT }|
        timestamp = |{ tstamp TIMESTAMP = ENVIRONMENT }| ) ).
      IF tabix = 1.
        results = VALUE #( BASE results ( ) ).
      ENDIF.
    ENDLOOP.
    cl\_demo\_output=>display( results ).  ENDMETHOD.                    "main
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [formatting setting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformat_setting_glosry.htm "Glossary Entry") of the [language environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") is set using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm) to the standard format from the user master record and all the current country-specific formats contained in the table T005X. The parameter ENVIRONMENT of the formatting options NUMBER, DATE, TIME, and TIMESTAMP is used to demonstrate the effect of the settings on the embedded expressions of string templates.