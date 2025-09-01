  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access to Objects in HANA XS](javascript:call_link\('abenhana_xsc_obsolete.htm'\)) →  [Access to SAP HANA XSC Objects (Obsolete)](javascript:call_link\('abensap_hana_access_xsc.htm'\)) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](javascript:call_link\('abensql_script.htm'\)) →  [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20HANA%2C%20Database%20Procedure%20Proxy%2C%20ABENCALL_DB_PROCEDURE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

SAP HANA, Database Procedure Proxy

This example demonstrates how a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") created in a class is called.

Source Code   

\* Public class definition
CLASS cl\_demo\_call\_db\_procedure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    CONSTANTS proc\_name TYPE if\_dbproc\_proxy\_basic\_types=>ty\_db\_name
                        VALUE \`ABAP\_DOCU\_DEMO\_INCPRICE\`.
    CONSTANTS prox\_name TYPE if\_dbproc\_proxy\_basic\_types=>ty\_abap\_name
                        VALUE \`ABAP\_DOCU\_DEMO\_INCPRICE\_PROXY\`.
    METHODS create\_db\_procedure.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_call\_db\_procedure IMPLEMENTATION.
  METHOD main.
    DATA incprice     TYPE sflight-price.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
             EXPORTING
               requested\_features =
                 VALUE #( (
                  cl\_abap\_dbfeatures=>call\_database\_procedure ) ) ) OR
       cl\_shdb\_hc=>is\_hana\_cloud( ).
      out->write(
        \`Current database does not support CALL DATABASE PROCEDURE\` ).
      LEAVE PROGRAM.
    ENDIF.
    cl\_demo\_input=>new( )->request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    create\_db\_procedure( ).
    FINAL(params) =
      VALUE if\_dbproc\_proxy\_basic\_types=>ty\_param\_override\_t(
        ( db\_name   = 'INC'
          abap\_name = 'INCREASE'
          descr     = cl\_abap\_typedescr=>describe\_by\_name(
                        'SFLIGHT-PRICE' ) ) ).
    TRY.
        FINAL(api) = cl\_dbproc\_proxy\_factory=>get\_proxy\_public\_api(
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
          CATCH cx\_sy\_db\_procedure\_sql\_error INTO FINAL(db\_exc).
            out->write( db\_exc->get\_text( ) ).
            RETURN.
        ENDTRY.
        api->delete( ).
      CATCH cx\_dbproc\_proxy INTO FINAL(api\_exc).
        out->write( api\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      out->write( \`Price increased succesfully\` ).
    ENDIF.
  ENDMETHOD.
  METHOD create\_db\_procedure.
    FINAL(sql) = NEW cl\_sql\_statement( ).
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
      CATCH cx\_sql\_exception INTO FINAL(err).
        out->write( err->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

[ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used in the method create\_db\_procedure to create the same database procedure as in the executable example [ADBC, Stored Procedure](javascript:call_link\('abenadbc_procedure_abexa.htm'\)). Here, however, the procedure is called using the statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) and not using ADBC.

The [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") required for this is created temporarily in the class itself using the associated API.

-   The API is created using the factory method GET\_PROXY\_PUBLIC\_API from the factory class CL\_DBPROC\_PROXY\_FACTORY.
-   The proxy is created using the method CREATE\_PROXY of the interface IF\_DBPROC\_PROXY\_PUBLIC\_API.
-   Here, the internal table params filled previously is used to define the mapping between the parameter interface and ABAP data types. The parameter names are also modified.

The executable example [AMDP, simple procedure call](javascript:call_link\('abenamdp_abexa.htm'\)) shows how the procedure can be managed and called as an [ABAP Managed Database Procedure](javascript:call_link\('abenamdp.htm'\)).