  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Implementation of an SQLScript Procedure, ABENAMDP_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

AMDP - Implementation of an SQLScript Procedure

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
           INTO @FINAL(price\_before)
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
           INTO @FINAL(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      cl\_demo\_output=>display( \`Price increased succesfully\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A simple [SQLScript procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") is implemented in three AMDP methods, showing the different options for self-defined [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_client_handling.htm), in the AMDP class CL\_DEMO\_AMDP:

-   INCREASE\_PRICE
    
    METHOD increase\_price BY DATABASE PROCEDURE FOR HDB
                             LANGUAGE SQLSCRIPT
                             USING sflight.
      update sflight set price = price + :inc
                     where mandt = :clnt;
    ENDMETHOD.
    
    In this implementation, the input parameter clnt is used to access the data of the passed client, as [recommended](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_client_handling.htm).
    
-   INCREASE\_PRICE\_CLIENT
    
    METHOD increase\_price\_client BY DATABASE PROCEDURE FOR HDB
                                 LANGUAGE SQLSCRIPT
                                 USING sflight.
      update sflight set price = price + :inc
                     where mandt = SESSION\_CONTEXT('CLIENT');
    ENDMETHOD.
    
    In this implementation, the [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) CLIENT is used to access the data of the current client.
    
-   INCREASE\_PRICE\_CDS\_CLIENT
    
    METHOD increase\_price\_cds\_client BY DATABASE PROCEDURE FOR HDB
                                     LANGUAGE SQLSCRIPT
                                     USING sflight.
      update sflight set price = price + :inc
                     where mandt = SESSION\_CONTEXT('CDS\_CLIENT');
    ENDMETHOD.
    
    In this implementation, the [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) CDS\_CLIENT is used to access the data of the current client. The addition [AMDP OPTIONS CDS SESSION CLIENT CURRENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_amdp_options.htm) is used for this purpose in the declaration of the method.
    

The database table SPFLI defined in the ABAP Dictionary must be specified after USING. On an SAP HANA database, this program works in the same way as the executable examples for [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_procedure_abexa.htm) and for [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_db_procedure_abexa.htm). AMDP replaces these technologies when calling database procedures for an SAP HANA database that is the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of an AS ABAP.

It is generally preferable to pass the client ID to an input parameter instead of using the ABAP-specific session variable CLIENT or CDS\_CLIENT.

Hint

This is a syntax example. The same function can be achieved with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.