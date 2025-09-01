  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP HANA, Currency Conversion with SQLScript, ABENSQL_SCRIPT_CURR_CONV_ABEXA, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SAP HANA, Currency Conversion with SQLScript

This example demonstrates how a built-in HANA SQL function is called in SQLScript.

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
    FINAL(out) = cl\_demo\_output=>new( ).
    DATA currency TYPE c LENGTH 5 VALUE 'USD'.
    cl\_demo\_input=>request( CHANGING field = currency ).
    setup( ).
    SELECT \*
           FROM demo\_prices
           ORDER BY id
           INTO TABLE @FINAL(original\_prices).
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
           INTO TABLE @FINAL(converted\_prices).
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
  replace DEMO\_PRICES
    select client,
           id,
           CONVERT\_CURRENCY(
              "AMOUNT" => "DEMO\_PRICES"."AMOUNT",
              "SOURCE\_UNIT" => "DEMO\_PRICES"."CURRENCY",
              "TARGET\_UNIT" => :TO\_CURRENCY,
              "REFERENCE\_DATE" => :DATE,
              "CONVERSION\_TYPE" => N'M',
              "CLIENT" => :MANDT,
              "ERROR\_HANDLING" => N'SET\_TO\_NULL',
              "SCHEMA" => CURRENT\_SCHEMA,
              "ACCURACY" => N'highest',
              "LOOKUP" => N'regular',
              "STEPS" => 'convert,shift\_back,shift,round' ) as amount,
            :TO\_CURRENCY as currency
      from DEMO\_PRICES;
ENDMETHOD.

The SQLScript implementation of this method uses the built-in SQL function CONVERT\_CURRENCY to convert the amounts in the column amount in the database DEMO\_PRICES to a currency entered by the user.

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
  MODIFY demo\_prices FROM TABLE prices.
ENDMETHOD.

This method uses the function module CONVERT\_TO\_LOCAL\_CURRENCY. Here, the table to b converted is first read to an internal table in AS ABAP and must be written again after the conversion.

Hint

See also

-   [Unit and Currency Conversion Functions in ABAP SQL](javascript:call_link\('abensql_curr_unit_conv_func.htm'\)).
    
    The built-in SQL function CURRENCY\_CONVERSION wraps the HANA function CONVERT\_CURRENCY. The program DEMO\_ASQL\_FUNC\_CURR\_CONV shows how the same function as above can be achieved by using an ABAP SQL SELECT that calls the SQL function.
    
-   [Unit and Currency Conversion Functions in ABAP CDS](javascript:call_link\('abencds_conversion_functions_v2.htm'\)).
    
    The built-in CDS function CURRENCY\_CONVERSION wraps the HANA function CONVERT\_CURRENCY. The program DEMO\_CDS\_FUNC\_CURR\_CONV\_VE shows how the same function as above can be achieved by using a CDS view that calls the CDS function.
    

A complete code relocation using a subquery in the ABAP SQL statement MODIFY is only possible if no table logging takes place.