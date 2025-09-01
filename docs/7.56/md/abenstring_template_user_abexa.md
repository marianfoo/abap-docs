---
title: "Source Code"
description: |
  REPORT demo_string_template_env_sett. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: num     TYPE p DECIMALS 2, date    TYPE d, time    TYPE t, utclong TYPE utclong, tstamp  TYPE timestamp, BEGIN OF country, key  TYPE t005x-land
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_template_user_abexa.htm"
abapFile: "abenstring_template_user_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenstring", "template", "user", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates_abexas.htm) → 

string\_tmpl - Formatting Settings

The example demonstrates the formatting settings for numbers, date output, and time output.

Source Code

REPORT demo\_string\_template\_env\_sett.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: num     TYPE p DECIMALS 2,
          date    TYPE d,
          time    TYPE t,
          utclong TYPE utclong,
          tstamp  TYPE timestamp,
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
            utclong   TYPE string,
            timestamp TYPE string,
          END OF result,
          results LIKE TABLE OF result.
    SELECT land AS key
           FROM t005x
           ORDER BY PRIMARY KEY
           INTO CORRESPONDING FIELDS OF TABLE @country\_tab
           ##TOO\_MANY\_ITAB\_FIELDS.
    LOOP AT country\_tab INTO country.
      DATA(idx) = sy-tabix.
      SELECT SINGLE landx AS name
             FROM t005t
             WHERE  land1 = @country-key AND
                    spras = @sy-langu
             INTO CORRESPONDING FIELDS OF @country.
      IF sy-subrc = 0.
        MODIFY country\_tab FROM country INDEX idx.
      ELSE.
        DELETE country\_tab INDEX idx.
      ENDIF.
    ENDLOOP.
    SORT country\_tab BY name AS TEXT.
    INSERT VALUE #( key =  space name = 'User Master Record' )
           INTO country\_tab INDEX 1.
    num     = sy-datum / 100.
    date    = sy-datum.
    time    = sy-uzeit.
    utclong = utclong\_current( ).
    tstamp  = cl\_abap\_tstmp=>utclong2tstmp\_short( utclong ).
    LOOP AT country\_tab INTO country.
      DATA(tabix) = sy-tabix.
      SET COUNTRY country-key.
      results = VALUE #( BASE results
      ( name      = country-name
        key       = country-key
        number    = |{ num     NUMBER    = ENVIRONMENT }|
        date      = |{ date    DATE      = ENVIRONMENT }|
        time      = |{ time    TIME      = ENVIRONMENT }|
        utclong   = |{ utclong TIMESTAMP = ENVIRONMENT }|
        timestamp = |{ tstamp  TIMESTAMP = ENVIRONMENT }| ) ).
      IF tabix = 1.
        results = VALUE #( BASE results ( ) ).
      ENDIF.
    ENDLOOP.
    cl\_demo\_output=>display( results ).  ENDMETHOD.                    "main
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [formatting setting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformat_setting_glosry.htm "Glossary Entry") of the [language environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlanguage_environment_glosry.htm "Glossary Entry") is set using the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_country.htm) to the standard format from the user master record and all the current country-specific formats contained in the table T005X. The parameter ENVIRONMENT of the formatting options NUMBER, DATE, TIME, and TIMESTAMP is used to demonstrate the effect of the settings on the embedded expressions of string templates.