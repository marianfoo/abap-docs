  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Implementation of an SQLScript Procedure

This example demonstrates how an SQLScript procedure is implemented using AMDP.

Source Code

REPORT demo\_amdp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    DATA incprice TYPE sflight-price VALUE '0.1'.
    DATA(client)     = abap\_false.
    DATA(cds\_client) = abap\_false.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING
                      field = incprice
      )->add\_field( EXPORTING
                      as\_checkbox = abap\_true
                      text        = \`Use session variable CLIENT\`
                    CHANGING
                      field = client
      )->add\_field( EXPORTING
                      as\_checkbox = abap\_true
                      text        = \`Use session variable CDS\_CLIENT\`
                    CHANGING
                      field = cds\_client
      )->request( ).
    IF incprice IS INITIAL OR
       client IS NOT INITIAL AND cds\_client IS NOT INITIAL.
      RETURN.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    IF client IS INITIAL AND cds\_client IS INITIAL.
      TRY.
          NEW cl\_demo\_amdp(
            )->increase\_price( clnt = sy-mandt
                               inc  = incprice ).
        CATCH cx\_amdp\_error INTO DATA(amdp\_error).
          cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
          RETURN.
      ENDTRY.
    ELSEIF client IS NOT INITIAL.
      TRY.
          NEW cl\_demo\_amdp(
            )->increase\_price\_client( inc  = incprice ).
        CATCH cx\_amdp\_error INTO amdp\_error.
          cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
          RETURN.
      ENDTRY.
    ELSEIF cds\_client IS NOT INITIAL.
      TRY.
          NEW cl\_demo\_amdp(
            )->increase\_price\_cds\_client( inc  = incprice ).
        CATCH cx\_amdp\_error INTO amdp\_error.
          cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
          RETURN.
      ENDTRY.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      cl\_demo\_output=>display( \`Price increased succesfully\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A simple [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") is implemented in three AMDP methods (showing the different options for self-defined [client handling](javascript:call_link\('abenamdp_client_handling.htm'\))) in the AMDP class CL\_DEMO\_AMDP:

-   INCREASE\_PRICE

METHOD increase\_price BY DATABASE PROCEDURE FOR HDB
                         LANGUAGE SQLSCRIPT
                         USING sflight.
  update sflight set price = price + :inc
                 where mandt = :clnt;
ENDMETHOD.

In this implementation, the input parameter clnt is used to access the data of the passed client, as [recommended](javascript:call_link\('abenamdp_client_handling.htm'\)).

-   INCREASE\_PRICE\_CLIENT

METHOD increase\_price\_client BY DATABASE PROCEDURE FOR HDB
                             LANGUAGE SQLSCRIPT
                             USING sflight.
  update sflight set price = price + :inc
                 where mandt = SESSION\_CONTEXT('CLIENT');
ENDMETHOD.

In this implementation, the [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT is used to access the data of the current client.

-   INCREASE\_PRICE\_CDS\_CLIENT

METHOD increase\_price\_cds\_client BY DATABASE PROCEDURE FOR HDB
                                 LANGUAGE SQLSCRIPT
                                 USING sflight.
  update sflight set price = price + :inc
                 where mandt = SESSION\_CONTEXT('CDS\_CLIENT');
ENDMETHOD.

In this implementation, the [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CDS\_CLIENT is used to access the data of the current client. The addition [AMDP OPTIONS CDS SESSION CLIENT CURRENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is used for this purpose in the declaration of the method.

The database table SPFLI defined in ABAP Dictionary must be specified after USING. On a SAP HANA database, this program works in the same way as the executable examples for [ADBC](javascript:call_link\('abenadbc_procedure_abexa.htm'\)) and for [CALL DATABASE PROCEDURE](javascript:call_link\('abencall_db_procedure_abexa.htm'\)). AMDP replaces these technologies when calling database procedures for an SAP HANA database that is the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of an AS ABAP.

It is generally preferable to pass the client ID to an input parameter of a use of the ABAP-specific session variable CLIENT or CDS\_CLIENT.

Note

This is a syntax example. The same function can be provided with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.