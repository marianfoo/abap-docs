# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / ABAP and SAP HANA / ABAP and SAP HANA, Examples

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_and_hana_abexas.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_and_hana_abexas.htm)
- [abenhana_session_variables_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables_abexa.htm)
- [abenhana_cached_views_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm)
- [abenfrom_adbc_to_amdp_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrom_adbc_to_amdp_abexa.htm)
- [abencall_hana_db_proc_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_hana_db_proc_abexa.htm)
- [abensql_script_curr_conv_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_curr_conv_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.257Z

---

### abenabap_and_hana_abexas.htm

> **📖 Official SAP Documentation**: [abenabap_and_hana_abexas.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_and_hana_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP and SAP HANA, Examples, ABENABAP_AND_HANA_ABEXAS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP and SAP HANA, Examples

Continue
![Example](exa.gif "Example") [SAP HANA, ABAP-Specific Session Variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\))
![Example](exa.gif "Example") [SAP HANA, Cached Views](javascript:call_link\('abenhana_cached_views_abexa.htm'\))
![Example](exa.gif "Example") [SAP HANA, from ADBC to AMDP](javascript:call_link\('abenfrom_adbc_to_amdp_abexa.htm'\))
![Example](exa.gif "Example") [SAP HANA, Call Database Procedure](javascript:call_link\('abencall_hana_db_proc_abexa.htm'\))
![Example](exa.gif "Example") [SAP HANA, Currency Conversion with SQLScript](javascript:call_link\('abensql_script_curr_conv_abexa.htm'\))



**📖 Source**: [abenabap_and_hana_abexas.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_and_hana_abexas.htm)

### abenhana_session_variables_abexa.htm

> **📖 Official SAP Documentation**: [abenhana_session_variables_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP HANA, ABAP-Specific Session Variables, ABENHANA_SESSION_VARIABLES_ABEXA, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SAP HANA, ABAP-Specific Session Variables

This example demonstrates potential Native SQL reads on [session variables](javascript:call_link\('abenhana_session_variables.htm'\)) on the SAP HANA database.

Source Code   

REPORT demo\_hana\_session\_variables.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->display(
        \`Example can be executed on SAP HANA Database only\` ).
      LEAVE PROGRAM.
    ENDIF.
    FINAL(oref) = NEW cl\_demo\_hana\_session\_variables( ).
    TRY.
        FINAL(result\_exec\_sql) =
          oref->get\_session\_variables\_exec\_sql( ).
        out->write( result\_exec\_sql ).
      CATCH cx\_sy\_native\_sql\_error INTO FINAL(exec\_sql\_exc).
        out->write( exec\_sql\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        FINAL(result\_adbc) =
          oref->get\_session\_variables\_adbc( ).
        out->write( result\_adbc ).
      CATCH cx\_sql\_exception INTO FINAL(adbc\_exc).
        out->write( adbc\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        DATA result\_amdp
         TYPE cl\_demo\_hana\_session\_variables=>session\_variables.
        oref->get\_session\_variables\_amdp(
                IMPORTING clnt     = result\_amdp-client
                          cds\_clnt = result\_amdp-cds\_client
                          unam     = result\_amdp-uname
                          lang     = result\_amdp-langu
                          date     = result\_amdp-datum ).
        out->write( result\_amdp ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_exc).
        out->write( amdp\_exc->get\_text( ) ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This program calls the following methods of the class CL\_DEMO\_HANA\_SESSION\_VARIABLES:

-   GET\_SESSION\_VARIABLES\_EXEC\_SQL
    
    METHOD get\_session\_variables\_exec\_sql.
      EXEC SQL.
        select SESSION\_CONTEXT('CLIENT')
               from DUMMY
               into :session\_variables-client
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('CDS\_CLIENT')
               from DUMMY
               into :session\_variables-cds\_client
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('APPLICATIONUSER')
               from DUMMY
               into :session\_variables-uname
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('LOCALE\_SAP')
               from DUMMY
               into :session\_variables-langu
      ENDEXEC.
      EXEC SQL.
        select SESSION\_CONTEXT('SAP\_SYSTEM\_DATE')
               from DUMMY
               into :session\_variables-datum
      ENDEXEC.
    ENDMETHOD.
    
    This method calls the built-in function SESSION\_CONTEXT for the four ABAP-specific [session variables](javascript:call_link\('abenhana_session_variables.htm'\)) on the SAP HANA database in three static Native SQL statements between [EXEC - ENDEXEC](javascript:call_link\('abapexec.htm'\)). The result is returned as a column of the SELECT list of an access to the pseudo table DUMMY.
    
-   GET\_SESSION\_VARIABLES\_ADBC
    
    METHOD get\_session\_variables\_adbc.
      DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('CLIENT') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-client ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('CDS\_CLIENT') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-cds\_client ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('APPLICATIONUSER') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-uname ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('LOCALE\_SAP') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-langu ) ).
      result->next( ).
      result = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('SAP\_SYSTEM\_DATE') from DUMMY\` ).
      result->set\_param( REF #( session\_variables-datum ) ).
      result->next( ).
    ENDMETHOD.
    
    This method replaces the static Native SQL statements of the preceding method with corresponding Native SQL statements in [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry").
    
-   GET\_SESSION\_VARIABLES\_AMDP
    
    METHOD get\_session\_variables\_amdp
           BY DATABASE PROCEDURE FOR HDB
           LANGUAGE SQLSCRIPT.
      clnt := session\_context('CLIENT');
      cds\_clnt := session\_context('CDS\_CLIENT');
      unam := session\_context('APPLICATIONUSER');
      lang := session\_context('LOCALE\_SAP');
      date := session\_context('SAP\_SYSTEM\_DATE');
    ENDMETHOD.
    
    This method is an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") and shows how the result of the built-in function SESSION\_CONTEXT can be used directly in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenhana_session_variables_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables_abexa.htm)

### abenhana_cached_views_abexa.htm

> **📖 Official SAP Documentation**: [abenhana_cached_views_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP HANA, Cached Views, ABENHANA_CACHED_VIEWS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

SAP HANA, Cached Views

This example demonstrates ABAP SQL access to a [cached view](javascript:call_link\('abenhana_cached_views.htm'\)) on the SAP HANA database.

Source Code   

REPORT demo\_select\_cached\_view.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->display(
        \`Example can be executed on SAP HANA Database only\` ).
      RETURN.
    ENDIF.
    DATA reset TYPE abap\_bool.
    cl\_demo\_input=>add\_field( EXPORTING
                                text = 'Reset cache'
                                as\_checkbox = abap\_true
                              CHANGING
                                field = reset ).
    DATA minutes TYPE i VALUE 30.
    cl\_demo\_input=>request( EXPORTING
                              text = 'Maximal age in minutes'
                            CHANGING
                              field = minutes ).
    minutes = COND i( WHEN minutes < 1 OR minutes > 60 THEN 30
                      ELSE minutes ).
    IF reset = abap\_true.
      TRY.
          NEW cl\_sql\_statement( )->execute\_ddl(
            \`alter view DEMOCDSCACH drop cache;\` ).
        CATCH cx\_sql\_exception.
      ENDTRY.
      TRY.
          NEW cl\_sql\_statement( )->execute\_ddl(
            |alter view DEMOCDSCACH add cache retention {
               minutes } of | &&
            |MANDT, CARRID, MAX(FLDATE), MIN(PRICE), SUM(SEATSOCC);| ).
        CATCH cx\_sql\_exception INTO FINAL(exc).
          out->display( exc->get\_text( ) ).
          RETURN.
      ENDTRY.
    ENDIF.
    FINAL(extended\_result) =
      NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
    SELECT carrid,
           MAX( fldate )   AS max\_fldate ,
           MIN( price )    AS min\_price,
           SUM( seatsocc ) AS sum\_seatsocc
           FROM demo\_cds\_cached\_view
           GROUP BY carrid
           %\_HINTS HDB 'RESULT\_CACHE' "#EC CI\_HINTS
           INTO TABLE @FINAL(result)
           EXTENDED RESULT @extended\_result.
    out->write( result
      )->write\_html( \`<b>Extended Result</b>\` ).
    IF extended\_result->cview\_valid( ).
      out->display(
       | CVIEW\_MAX\_AGE: {
          extended\_result->cview\_max\_age( ) } seconds\\n| &&
       | CVIEW\_LAST\_REFRESH\_TSTMPL: {
          extended\_result->cview\_last\_refresh\_tstmpl( )
            TIMESTAMP = ISO }\\n| ).
    ELSE.
      out->display( \`Invalid result\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The instance DEMOCDSCACH of the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_CACHED\_VIEW on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is designated for caching using [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") and the SQL statement ALTER TABLE. The maximum cache lifetime cannot be specified. It is also possible to delete an existing cache.

When the CDS view is accessed using the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the [database hint](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") [%\_HINTS](javascript:call_link\('abenabap_sql_db_hints.htm'\)) HDB 'RESULT\_CACHE' is used to specify that the cache is accessed.

The addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause can be used to determine whether a cache is available, and the cache properties are read.



**📖 Source**: [abenhana_cached_views_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm)

### abenfrom_adbc_to_amdp_abexa.htm

> **📖 Official SAP Documentation**: [abenfrom_adbc_to_amdp_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrom_adbc_to_amdp_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP HANA, from ADBC to AMDP, ABENFROM_ADBC_TO_AMDP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SAP HANA, from ADBC to AMDP

This example demonstrates how a task can be performed using HANA-specific language elements.

Source Code   

REPORT demo\_from\_adbc\_to\_amdp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure )
                       ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
      \`Current database system does not support all procedure calls\` ).
      RETURN.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    FINAL(oref) = NEW cl\_demo\_from\_adbc\_to\_amdp( to\_upper( carrier ) ).
    FINAL(asql\_result) = oref->asql( ).
    FINAL(adbc\_result) = oref->adbc( ).
    FINAL(cdbp\_result) = oref->cdbp( ).
    FINAL(amdp\_result) = oref->amdp( ).
    IF NOT cl\_shdb\_hc=>is\_hana\_cloud(  ).
      IF asql\_result = adbc\_result AND
         asql\_result = cdbp\_result AND
         asql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, CALL DATABASE PROCEDURE, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ELSE.
      IF asql\_result = adbc\_result AND
         asql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ENDIF.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The task is to read all rows from the database table SFLIGHT whose key fields MANDT, CARRID, and CONNID occur in a predefined three-column internal table. To do this, the example program calls various methods of the class CL\_DEMO\_FROM\_ADBC\_TO\_AMDP in whose instance constructor the internal table connection\_tab is filled in accordance with user input.

Hint

The examples of using HANA-specific language elements shown in the methods are syntax-only examples. The task presented here can be solved just as well using ABAP SQL, which is why ABAP SQL is the preferred method as specified in the [programming guidelines](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline").

Reference Implementation Using ABAP SQL   

The method ASQL shows how the task can be solved in ABAP SQL by simply using the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)). The result of the method is used as a reference for the HANA-specific implementations.

METHOD asql.
  IF connection\_tab IS NOT INITIAL.
    SELECT \*
          FROM sflight
          FOR ALL ENTRIES IN @connection\_tab
          WHERE carrid = @connection\_tab-carrid AND
                connid = @connection\_tab-connid
          INTO TABLE @flights.
  ENDIF.
ENDMETHOD.

Using Native SQL with ADBC   

The method ADBC solves the task by using HANA-specific [Native SQL statements](javascript:call_link\('abennative_sql.htm'\)) that are passed to the SAP HANA database using [ADBC](javascript:call_link\('abenadbc.htm'\)). The table with the key values is evaluated after the addition exists in a subquery of a select statement. To do this, a temporary table DEMO\_ADBC\_CONNECTIONS is created on the database and filled with the content of the connection\_tab using the statement insert. To access the result of the select statement, a standard table std\_flights must be declared as a local internal table of the method, since the return value flights cannot be used for ADBC. The temporary table DEMO\_ADBC\_CONNECTIONS is removed again after SPFLI is read.

METHOD adbc.
  DATA(sql) = NEW cl\_sql\_statement( ).
  TRY.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl(    'drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl(
        \`create global temporary row table DEMO\_ADBC\_CONNECTIONS \` &&
        \`( MANDT  NVARCHAR(3), \`                                   &&
          \`CARRID NVARCHAR(3), \`                                   &&
          \`CONNID NVARCHAR(4) )\` ).
      sql->set\_param\_table( REF #( connection\_tab ) ).
      sql->execute\_update(
        \`insert into DEMO\_ADBC\_CONNECTIONS values ( ?, ?, ? )\` ).
      DATA(result) = sql->execute\_query(
        \`    select \* \`                                   &&
        \`      from SFLIGHT as S \`                        &&
        \`      where exists (\`                            &&
        \`        select MANDT, CARRID, CONNID \`           &&
        \`               from  DEMO\_ADBC\_CONNECTIONS as C\` &&
        \`               where C.MANDT  = S.MANDT and \`    &&
        \`                     C.CARRID = S.CARRID and \`   &&
        \`                     C.CONNID = S.CONNID )\` ).
      DATA std\_flights TYPE STANDARD TABLE OF sflight WITH EMPTY KEY.
      result->set\_param\_table( REF #( std\_flights ) ).
      result->next\_package( ).
      result->close( ).
      flights = std\_flights.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl( '   drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call of a Database Procedure Using a Database Procedure Proxy   

The method CDBP solves the task by implementing the HANA-specific select statement in a [database procedure](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") that is called by specifying a [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") in the statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)). In a more realistic example, the database procedure DEMO\_ADBC\_GET\_FLIGHTS and the database procedure proxy DEMO\_ADBC\_GET\_FLIGHTS\_PROXY would already exist and the implementation of the method would be restricted to the call CALL DATABASE PROCEDURE (see the executable example for [procedure calls](javascript:call_link\('abencall_hana_db_proc_abexa.htm'\))). In this example, the database procedure and the database procedure proxy are created temporarily and deleted again using ADBC methods and the associated API. The input parameter connections of the procedure references an additional temporary HANA table type, DEMO\_ADBC\_CONNECTIONS\_TYPE. HANA does not support a separate type for numeric text, which means that the type NVARCHAR(4) must be used for the column CONNID. Therefore, the internal table connection\_tab must be assigned to a temporary table connections with the correct row type before the procedure is called. No auxiliary table is required for the result, since the row type is described using an ABAP Dictionary type. An appropriate mapping can be performed for this type using the mapping table params. As an alternative to an auxiliary table for connection\_tab, its data type could also be declared in the ABAP Dictionary and an appropriate mapping performed.

The statement CALL DATABASE PROCEDURE is not possible on a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry").

METHOD cdbp.
  IF cl\_shdb\_hc=>is\_hana\_cloud(  ).
    RETURN.
  ENDIF.
  DATA(sql) = NEW cl\_sql\_statement( ).
  TRY.
      sql->execute\_ddl( 'drop type DEMO\_ADBC\_CONNECTIONS\_TYPE' ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl( \`drop procedure DEMO\_ADBC\_GET\_FLIGHTS\` ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl(
        \`create type DEMO\_ADBC\_CONNECTIONS\_TYPE as table \` &&
        \`( MANDT  NVARCHAR(3), \`                           &&
          \`CARRID NVARCHAR(3), \`                           &&
          \`CONNID NVARCHAR(4) )\` ).
      sql->execute\_ddl(
        \`create procedure DEMO\_ADBC\_GET\_FLIGHTS  \`            &&
        \`  ( in CONNECTIONS DEMO\_ADBC\_CONNECTIONS\_TYPE,  \`    &&
        \`    out FLIGHTS SFLIGHT ) language sqlscript as \`    &&
        \`      begin \`                                        &&
        \`        FLIGHTS = \`                                  &&
        \`          select \* \`                                 &&
        \`            from SFLIGHT as S \`                      &&
        \`            where exists (  \`                        &&
        \`              select MANDT, CARRID, CONNID \`         &&
        \`                     from :CONNECTIONS as C\`         &&
        \`                     where C.MANDT  = S.MANDT and \`  &&
        \`                           C.CARRID = S.CARRID and \` &&
        \`                           C.CONNID = S.CONNID );\`   &&
        \`      end\` ).
      DATA db\_schema TYPE if\_dbproc\_proxy\_basic\_types=>ty\_db\_name.
      CALL FUNCTION 'DB\_DBSCHEMA\_CURRENT'
        IMPORTING
          dbschema = db\_schema.
      DATA(params) =
        VALUE if\_dbproc\_proxy\_basic\_types=>ty\_param\_override\_t(
        ( db\_name   = 'FLIGHTS'
          abap\_name = 'FLIGHTS'
          descr     = cl\_abap\_typedescr=>describe\_by\_name(
                      'SFLIGHT' ) ) ).
      DATA(api) = cl\_dbproc\_proxy\_factory=>get\_proxy\_public\_api(
        if\_proxy\_name = 'DEMO\_ADBC\_GET\_FLIGHTS\_PROXY' ).
      api->delete( ).
      api->create\_proxy( EXPORTING
                  if\_proc\_schema    = db\_schema
                  it\_param\_override = params
                  if\_proc\_name      = 'DEMO\_ADBC\_GET\_FLIGHTS' ).
      COMMIT CONNECTION default.
      TYPES:
        BEGIN OF connection,
          mandt  TYPE c LENGTH 3,
          carrid TYPE c LENGTH 3,
          connid TYPE c LENGTH 4,
        END OF connection.
      DATA connections TYPE STANDARD TABLE OF connection
                       WITH EMPTY KEY.
      connections = connection\_tab.
      CALL DATABASE PROCEDURE ('DEMO\_ADBC\_GET\_FLIGHTS\_PROXY')
        EXPORTING connections = connections
        IMPORTING flights     = flights.
      COMMIT CONNECTION default.
      api->delete( ).
      sql->execute\_ddl( \`drop procedure DEMO\_ADBC\_GET\_FLIGHTS\` ).
      sql->execute\_ddl( 'drop type DEMO\_ADBC\_CONNECTIONS\_TYPE' ).
    CATCH cx\_sql\_exception cx\_dbproc\_proxy.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call an AMDP Procedure   

The method AMDP solves the task in the easiest possible way by calling an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") AMDP\_METH in which the HANA-specific select statement is implemented in an [AMDP procedure](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry"). The main advantage of the AMDP method is that it can be called in the same way as any ABAP method and no auxiliary tables must be introduced, as was the case in the preceding examples.

METHOD amdp.
  amdp\_meth( EXPORTING connections = connection\_tab
             IMPORTING flights     = flights ).
ENDMETHOD.

METHOD amdp\_meth BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT OPTIONS READ-ONLY
       USING sflight.
  FLIGHTS = select \*
                   from SFLIGHT as S
                   where exists ( select MANDT, CARRID, CONNID
                                         from :CONNECTIONS as C
                                         where C.MANDT  = S.MANDT and
                                               C.CARRID = S.CARRID and
                                               C.CONNID = S.CONNID );
ENDMETHOD.



**📖 Source**: [abenfrom_adbc_to_amdp_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrom_adbc_to_amdp_abexa.htm)

### abencall_hana_db_proc_abexa.htm

> **📖 Official SAP Documentation**: [abencall_hana_db_proc_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_hana_db_proc_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP HANA, Call Database Procedure, ABENCALL_HANA_DB_PROC_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SAP HANA, Call Database Procedure

This example demonstrates how a database procedure in the SAP HANA database can be called.

Source Code   

REPORT demo\_call\_hana\_db\_procedure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure )
                       ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
      \`Current database system does not support all procedure calls\` ).
      RETURN.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    FINAL(oref) =
      NEW cl\_demo\_call\_hana\_db\_procedure( to\_upper( carrier ) ).
    IF oref->ok IS INITIAL.
      out->display( 'Error in setup' ).
      RETURN.
    ENDIF.
    FINAL(osql\_result) = oref->osql( ).
    FINAL(adbc\_result) = oref->adbc( ).
    FINAL(cdbp\_result) = oref->cdbp( ).
    FINAL(amdp\_result) = oref->amdp( ).
    IF NOT cl\_shdb\_hc=>is\_hana\_cloud(  ).
      IF osql\_result = adbc\_result AND
         osql\_result = cdbp\_result AND
         osql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, CALL DATABASE PROCEDURE, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ELSE.
      IF osql\_result = adbc\_result AND
         osql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ENDIF.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Take a database procedure called /1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"):

begin
  FLIGHTS =
    select \*
           from SFLIGHT as S
           where exists (
                  select MANDT, CARRID, CONNID
                  from :CONNECTIONS as C
                  where C.MANDT  = S.MANDT and
                        C.CARRID = S.CARRID and
                        C.CONNID = S.CONNID );
end

The procedure has a tabular input parameter CONNECTIONS with the three-column HANA table type DEMO\_ADBC\_CONNECTIONS\_TYPE and an output parameter FLIGHTS with the type SFLIGHT defined in the ABAP Dictionary. The HANA table type has three character-like columns, MANDT with length 3, CARRID with length 3, and CONNID with length 4. The task is to call this procedure from ABAP while passing an internal table to the input parameter and copying the output parameter to an internal table.

To do this, the example program calls various methods of the class CL\_DEMO\_CALL\_HANA\_DB\_PROCEDURE. The table to be passed connection\_tab is filled in the instance constructor of the class in accordance with user input. Furthermore, the database procedure, the HANA table type, and a database procedure proxy, which is usually static, are created here temporarily.

Comparison Implementation Using ABAP SQL   

The method OSQL shows how the implementation of the database procedure can also be expressed in ABAP SQL. If the function is required only in ABAP, an implementation in SQLScript is unnecessary in this case and should be avoided in accordance with the relevant [programming guideline](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline"). In our example, the database procedure is a replacement for a globally available procedure that is also to be called in ABAP. The result of the method OSQL is compared with the results of the various procedure calls to determine whether they are correct.

METHOD osql.
  IF connection\_tab IS NOT INITIAL.
    SELECT \*
          FROM sflight
          FOR ALL ENTRIES IN @connection\_tab
          WHERE carrid = @connection\_tab-carrid AND
                connid = @connection\_tab-connid
          INTO TABLE @flights.
  ENDIF.
ENDMETHOD.

Call with Native SQL Using ADBC   

The method ADBC uses [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") to call the database procedure. To pass the internal table connection\_tab to the database procedure, a temporary table DEMO\_ADBC\_CONNECTIONS with the required type DEMO\_ADBC\_CONNECTIONS\_TYPE is created on the database and provided with the values of the internal table using insert. The database procedure is then called with the temporary table as an input parameter and the result is assigned to an ADBC result set. To read from the result set, a standard table flights\_std is required as an auxiliary table, since the return value flights is a sorted table that cannot be used for ADBC. The temporary table DEMO\_ADBC\_CONNECTIONS is removed again after the database procedure is called.

METHOD adbc.
  DATA(sql) = NEW cl\_sql\_statement( ).
  TRY.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl(    'drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl(
        \`create global temporary row table DEMO\_ADBC\_CONNECTIONS \` &&
           \`like DEMO\_ADBC\_CONNECTIONS\_TYPE\` ).
      sql->set\_param\_table( REF #( connection\_tab ) ).
      sql->execute\_update(
        \`insert into DEMO\_ADBC\_CONNECTIONS values ( ?, ?, ? )\` ).
      DATA(result) =
              sql->execute\_query(
                \`call "/1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS"( \` &&
                \`  CONNECTIONS =>DEMO\_ADBC\_CONNECTIONS, \` &&
                \`  FLIGHTS => NULL )\` ).
      DATA flights\_std TYPE STANDARD TABLE OF sflight WITH EMPTY KEY.
      result->set\_param\_table( REF #( flights\_std ) ).
      result->next\_package( ).
      result->close( ).
      flights = flights\_std.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl(    'drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call Using Database Procedure Proxy   

The method CDBP calls the database procedure with the statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) using the assigned [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") DEMO\_ADBC\_GET\_FLIGHTS\_PROXY. The only thing to note here is that input parameters and output parameters of the database procedure have different row types than the internal tables that are to be assigned to them. In both cases, the column CONNID has the type NVARCHAR(4) on the database, but the type n with length 4 in ABAP. For this reason, the internal table connection\_tab is first assigned to a temporary table connections with the correct row type before the procedure is called. No auxiliary table is required for the result flights, since the row type is described using an ABAP Dictionary type. An appropriate mapping can be performed for this type using the mapping table params. As an alternative to an auxiliary table for connection\_tab, its data type could also be declared in the ABAP Dictionary and an appropriate mapping performed.

The statement CALL DATABASE PROCEDURE is not possible on a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry").

METHOD cdbp.
  TYPES:
    BEGIN OF connection,
      mandt  TYPE c LENGTH 3,
      carrid TYPE c LENGTH 3,
      connid TYPE c LENGTH 4,
    END OF connection.
  DATA connections TYPE STANDARD TABLE OF connection
                   WITH EMPTY KEY.
  IF cl\_shdb\_hc=>is\_hana\_cloud(  ).
    RETURN.
  ENDIF.
  connections = connection\_tab.
  CALL DATABASE PROCEDURE ('DEMO\_ADBC\_GET\_FLIGHTS\_PROXY')
    EXPORTING connections = connections
    IMPORTING flights     = flights.
ENDMETHOD.

Call Using AMDP   

The method AMDP calls the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") AMDP\_METH, in which a call of the database procedure is implemented in SQLScript. In this case, all type-dependent actions required are performed by the AMDP framework.

Method was not found



**📖 Source**: [abencall_hana_db_proc_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_hana_db_proc_abexa.htm)

### abensql_script_curr_conv_abexa.htm

> **📖 Official SAP Documentation**: [abensql_script_curr_conv_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_curr_conv_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abensql_script_curr_conv_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_curr_conv_abexa.htm)


  

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
