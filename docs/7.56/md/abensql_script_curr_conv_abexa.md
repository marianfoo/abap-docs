---
title: "SAP HANA, Currency Conversion with SQLScript"
description: |
  This example demonstrates how a built-in HANA SQL function is called in SQLScript. Source Code REPORT demo_sqlscript_curr_conv. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS setup. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_curr_conv_abexa.htm"
abapFile: "abensql_script_curr_conv_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abensql", "script", "curr", "conv", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_and_hana_abexas.htm) → 

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

If possible, the example program calls the [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") CONVERT of the [AMDP class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_class_glosry.htm "Glossary Entry") CL\_DEMO\_SQLSCRIPT\_CURR\_CONV.

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

The SQLScript implementation of this method uses the built-in SQL function [CONVERT\_CURRENCY](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) to convert the amounts in the column amount in the database DEMO\_PRICES to a currency entered by the user.

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

-   [Unit and Currency Conversion Functions in ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_curr_unit_conv_func.htm).
    
    The built-in SQL function CURRENCY\_CONVERSION wraps the HANA function CONVERT\_CURRENCY. The program DEMO\_ASQL\_FUNC\_CURR\_CONV shows how the same function as above can be achieved by using an ABAP SQL SELECT that calls the SQL function.
    
-   [Unit and Currency Conversion Functions in ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conversion_functions_v2.htm).
    
    The built-in CDS function CURRENCY\_CONVERSION wraps the HANA function CONVERT\_CURRENCY. The program DEMO\_CDS\_FUNC\_CURR\_CONV shows how the same function as above can be achieved by using a CDS view that calls the CDS function.
    

A complete code relocation using a subquery in the ABAP SQL statement MODIFY is only possible if no table logging takes place.