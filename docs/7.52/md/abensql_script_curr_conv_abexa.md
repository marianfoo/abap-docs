  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

SAP HANA, Currency Conversion with SQLScript

This example demonstrates how the SQLScript operator CE\_CONVERSION is used.

Source Code

REPORT demo\_sqlscript\_curr\_conv.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS setup.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA currency TYPE c LENGTH 5 VALUE 'USD'.
    cl\_demo\_input=>request( CHANGING field = currency ).
    setup( ).
    SELECT \*
           FROM demo\_prices
           ORDER BY id
           INTO TABLE @DATA(original\_prices).
    out->begin\_section( \`Original Prices\`
      )->write( original\_prices ).
    IF cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      NEW cl\_demo\_sqlscript\_curr\_conv(
        )->convert(
          EXPORTING
            to\_currency      = to\_upper( currency )
            mandt            = sy-mandt
            date             = sy-datlo ).
    ELSE.
      NEW cl\_demo\_sqlscript\_curr\_conv(
        )->abap\_convert(
          EXPORTING
            to\_currency      = to\_upper( currency )
            mandt            = sy-mandt
            date             = sy-datlo ).
    ENDIF.
    SELECT \*
           FROM demo\_prices
           ORDER BY id
           INTO TABLE @DATA(converted\_prices).
    out->next\_section( \`Converted Prices\`
      )->write( converted\_prices
      )->display( ).  ENDMETHOD.
  METHOD setup.
    DELETE FROM demo\_prices.
    INSERT demo\_prices FROM TABLE @( VALUE #(
      ( id = 1 amount = '1.00' currency = 'EUR' )
      ( id = 2 amount = '1.00' currency = 'GBP' )
      ( id = 3 amount = '1.00' currency = 'JPY' )
      ( id = 4 amount = '1.00' currency = 'USD' ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If possible, the example program calls the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") CONVERT of the [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_SQLSCRIPT\_CURR\_CONV.

METHOD convert BY DATABASE PROCEDURE FOR HDB
                           LANGUAGE SQLSCRIPT
                           USING demo\_prices.
  PRICES = select \* from DEMO\_PRICES;
  PRICES =
    CE\_CONVERSION (
      :PRICES,
      \[ family             = 'currency',
        method             = 'ERP',
        steps              = 'shift,convert,shift\_back',
        target\_unit        = :TO\_CURRENCY,
        client             = :MANDT,
        source\_unit\_column = "CURRENCY",
        reference\_date     = :DATE,
        output\_unit\_column = "CURRENCY",
        error\_handling     = 'keep unconverted' \],
      \[ amount AS amount \] );
   replace DEMO\_PRICES select \* from :PRICES;
ENDMETHOD.

The SQLScript implementation of this method uses the predefined SQLScript operator [CE\_CONVERSION](https://help.sap.com/viewer/de2486ee947e43e684d39702027f8a94/2.0.00/en-us) to convert the amounts in the column amount in the database DEMO\_PRICES to a currency entered by the user. Conversions of this type cannot be expressed in standard-SQL.

If the current database is not an SAP HANA database, the method ABAP\_CONVERT is called as an alternative.

METHOD abap\_convert.
  DATA prices TYPE STANDARD TABLE OF demo\_prices.
  SELECT \*
         FROM demo\_prices
         INTO TABLE prices.
  LOOP AT prices ASSIGNING FIELD-SYMBOL(<price>).
    CALL FUNCTION 'CONVERT\_TO\_LOCAL\_CURRENCY'
      EXPORTING
        client           = mandt
        date             = date
        foreign\_amount   = <price>-amount
        foreign\_currency = <price>-currency
        local\_currency   = to\_currency
      IMPORTING
        local\_amount     = <price>-amount
      EXCEPTIONS
        OTHERS           = 4.
    IF sy-subrc <> 0.
      CONTINUE.
    ENDIF.
    <price>-currency = to\_currency.
  ENDLOOP.
  MODIFY demo\_prices FROM table prices.
ENDMETHOD.

This method uses the function module CONVERT\_TO\_LOCAL\_CURRENCY. Here, the table in question is first read to an internal table of the application server and must be written again after the conversion.

Note

See also [Conversion Functions in ABAP CDS](javascript:call_link\('abencds_f1_conversion_functions.htm'\)).