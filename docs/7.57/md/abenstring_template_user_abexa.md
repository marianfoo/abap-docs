  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_tmpl - Formatting Settings, ABENSTRING_TEMPLATE_USER_ABEXA, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
      FINAL(idx) = sy-tabix.
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
      FINAL(tabix) = sy-tabix.
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

The [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry") of the [language environment](javascript:call_link\('abenlanguage_environment_glosry.htm'\) "Glossary Entry") is set using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) to the standard format from the user master record and all the current country-specific formats contained in the table T005X. The parameter ENVIRONMENT of the formatting options NUMBER, DATE, TIME, and TIMESTAMP is used to demonstrate the effect of the settings on the embedded expressions of string templates.