  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_script.htm) →  [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_database_procedure.htm) → 

SAP HANA, Database Procedure Proxy

This example demonstrates how a [database procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") created in the program is called.

Source Code

REPORT demo\_call\_db\_procedure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CONSTANTS proc\_name TYPE if\_dbproc\_proxy\_basic\_types=>ty\_db\_name
                        VALUE \`ABAP\_DOCU\_DEMO\_INCPRICE\`.
    CONSTANTS prox\_name TYPE if\_dbproc\_proxy\_basic\_types=>ty\_abap\_name
                        VALUE \`ABAP\_DOCU\_DEMO\_INCPRICE\_PROXY\`.
    CLASS-METHODS create\_db\_procedure.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA incprice     TYPE sflight-price.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
             EXPORTING
               requested\_features =
                 VALUE #( (
                  cl\_abap\_dbfeatures=>call\_database\_procedure ) ) ).
      cl\_demo\_output=>display(
        \`Current database does not support CALL DATABASE PROCEDURE\` ).
      LEAVE PROGRAM.
    ENDIF.
    cl\_demo\_input=>request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    create\_db\_procedure( ).
    DATA(params) =
      VALUE if\_dbproc\_proxy\_basic\_types=>ty\_param\_override\_t(
        ( db\_name   = 'INC'
          abap\_name = 'INCREASE'
          descr     = cl\_abap\_typedescr=>describe\_by\_name(
                        'SFLIGHT-PRICE' ) ) ).
    TRY.
        DATA(api) = cl\_dbproc\_proxy\_factory=>get\_proxy\_public\_api(
          if\_proxy\_name = prox\_name ).
        api->delete( ).
        api->create\_proxy( EXPORTING
                             if\_proc\_schema    = '\_SYS\_BIC'
                             it\_param\_override = params
                             if\_proc\_name      = proc\_name ).
        COMMIT CONNECTION default.
        TRY.
            CALL DATABASE PROCEDURE (prox\_name)
              EXPORTING increase = incprice.
          CATCH cx\_sy\_db\_procedure\_sql\_error INTO DATA(db\_exc).
            cl\_demo\_output=>display( db\_exc->get\_text( ) ).
            RETURN.
        ENDTRY.
        api->delete( ).
      CATCH cx\_dbproc\_proxy INTO DATA(api\_exc).
        cl\_demo\_output=>display( api\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      cl\_demo\_output=>display( \`Price increased succesfully\` ).
    ENDIF.  ENDMETHOD.
  METHOD create\_db\_procedure.
    DATA(sql) = NEW cl\_sql\_statement( ).
    TRY.
        sql->execute\_ddl(
          \`DROP PROCEDURE \` && \`"\_SYS\_BIC"."\` && proc\_name && \`"\` ).
      CATCH cx\_sql\_exception ##NO\_HANDLER.
    ENDTRY.
    TRY.
        sql->execute\_ddl(
           \`CREATE PROCEDURE  \`
        && \`"\_SYS\_BIC"."\` && proc\_name && \`"\`
        && \` (IN inc DECIMAL(15,2)) AS \`
        && \`BEGIN \`
        && \`UPDATE sflight SET price = price + :inc\`
        && \`               WHERE mandt = '\` && sy-mandt && \`'; \`
        && \`END\` ).
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display( err->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry") is used in the method create\_db\_procedure to create the same database procedure as in the executable example [ADBC, Stored Procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_procedure_abexa.htm). Here, however, the procedure is called using the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_database_procedure.htm) and not using ADBC.

The [database procedure proxy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") need to do this is created temporarily in the program itself using the associated API.

-   The API is created using the factory method GET\_PROXY\_PUBLIC\_API from the factory class CL\_DBPROC\_PROXY\_FACTORY.

-   The proxy is created using the method CREATE\_PROXY of the interface IF\_DBPROC\_PROXY\_PUBLIC\_API.

-   Here, the internal table params filled previously is used to define the mapping between the parameter interface and ABAP data types. The parameter names are also modified.

The executable example [AMDP, simple procedure call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_abexa.htm) shows how the procedure can be managed and called as an [ABAP Managed Database Procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm).