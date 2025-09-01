  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - CONNECT

A connection must be defined with the database before [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be used. When [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") is started, a standard connection from the database interface to the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is opened. This connection is defined as the current connection for embedded Native SQL statements and as a standard connection for [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements when an ABAP program is started. Use the following SAP-specific Native SQL statements, to start additional database connections. These connections can be accessed in static Native SQL.

The possible additional AS ABAP connections to database systems are [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") defined in the database table DBCON or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") whose name starts with R/3\*.

-   [Opening a Connection](#abapexec-connection-1--------selecting-a-connection---@ITOC@@ABAPEXEC_CONNECTION_2)

-   [Determining the Connection](#abapexec-connection-3--------closing-a-connection---@ITOC@@ABAPEXEC_CONNECTION_4)

-   [Example](#abapexec-connection-5---note--detailed-information-about-database-connections-can-be-found--here--javascript-call-link---abenopensql-multiconnect-htm-------opening-a-connection--syntax--exec-sql----connect-to-conn-----as-name-----endexec---effect--this-static-native-sql-statement-requests-a-database-connection-called-conn--this-connection-is-opened--or-reused--if-it-already-exists-in-an-inactive-state-for-the-current-work-process--once-connect-to-is-executed--the-specified-connection-is-the-current-connection-of-the-internal-session--which-means-that-all-subsequent-native-sql-work-with-this-connection-until-a-connection-other-than-the-current-current-is-set-using-a-new-connect-to-statement-or-using-set-connection---for-conn--a-a-literal-or-a--host-variable--javascript-call-link---abapexec-host-htm-----that-contains-one-of-the-following-values-can-be-specified-------a-name-from-the-column-con--name-of-the-database-table-dbcon-used-to-specify-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry------------a-name-with-the-prefix-r-3---used-to-specify-a--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry---------both-of-these-instances-are-case-sensitive--if-a-secondary-connection-that-is-not-in-the-database-table-dbcon-is-specified--a-handleable-exception-of-the-class-cx--sy--native--sql--error-is-raised--if-a--secondary-database--javascript-call-link---abensecondary-db-glosry-htm-----glossary-entry---cannot-be-reached--sy-subrc-is-set-to-4---the-addition-as-can-be-used-to-specify-a-name-name-for-the-connection--for-name--a-literal-or-a-character-like-host-variable-can-be-specified-whose-content-is-used-as-the-name--a-connection-called-name-is-not-the-same-connection-as-a-connection-requested-without-using-the-addition-as--this-makes-it-possible-to-open-parallel-connections-with-separate-database-luws-for-the-same-secondary-connection-or-service-connection-within-an-internal-session--in-an-internal-session--only-one-active-database-session-can-be-called-name--any-attempt-to-activate-a-further-connection-with-the-same-name-produces-a-runtime-error--a-connection-called-name-can-only-be-specified-in-the-statement-set-connection-using-this-name---notes------the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---cannot-be-requested-using-connect-to-----------a-name-granted-using-as-can-also-be-used-in-open-sql-after-the-addition-connection-and-in-the-statements--commit-connection--javascript-call-link---abapcommit-rollback-connection-htm-----and--rollback-connection--javascript-call-link---abapcommit-rollback-connection-htm------as-long-as-it-is-in-uppercase-letters--------selecting-a-connection--syntax--exec-sql----set-connection----conn---default----endexec---effect--this-static-native-sql-statement-sets-the-current-connection-for-all-following-static-native-sql-statements--for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-connection-activated-in-the-current-connection-------default-in-uppercase-letters-or-default-specified-directly-can-be-used-to-specified-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry-------------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn-----------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name--------all-of-these-instances-are-case-sensitive--when-an-unknown-connection-is-specified--the-current-connection-remains-unchanged-and-sy-subrc-is-set-to-4---notes------when-a-current-connection-is-switched-to-a-different-current-connection--no-database-luw-is-closed-and-no-new-luw-is-opened-----------any-changes-to-the-current-connection-are-applied-only-in-static-native-sql-after-exec-sql--open-sql-and-any-other-variant-of-native-sql-remain-unaffected-----------the-current-connection-is-switched-regardless-of-whether-the-connections-in-question-are-active-or--after-their-database-luws-are-closed--inactive--------determining-the-connection--syntax--exec-sql----get-connection--conn-endexec---effect--this-static-native-sql-statement-assigns-the-name-of-the-current-connection-to-conn--conn-expects-a-character-like-host-variable--if-the-current-connection-was-activated-using-the-statement-connect-to-and-as-was-used-to-give-it-a-name-at-the-same-time--this-name-is-assigned--if-the-connection-is-activated-without-being-given-a-name--the-name-of-the-secondary-connection-or-service-connection-is-assigned--if-the-current-connection-is-the-standard-connection--the-value-default-is-assigned---note--the-current-connection-can-be-active-or--after-its-database-luw-is-closed--inactive---closing-a-connection--syntax--exec-sql----disconnect-conn-endexec---effect--this-static-native-sql-statement-closes-the-connection-conn-for-the-current-work-process--which-discards-all-database-changes-not-yet-committed-using-a--database-commit--javascript-call-link---abendb-commit-htm------for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-a-secondary-connection-or-service-connection-activated-in-the-internal-session-------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn-----------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name--------if-anything-else-is-specified--most-specifically-default---a-runtime-error-occurs--if-the-closed-secondary-connection-or-service-connection-is-the-current-connection--the-standard-connection-is-set-as-the-new-current-connection-implicitly--all-of-these-instances-are-case-sensitive---notes------the-closed-connection-can-be-active-or--after-its-database-luw-is-closed--inactive-----------it-is-recommended-that-database-connections-are-only-closed-implicitly-by-the-abap-runtime-environment-and-not-explicitly--since-it-takes-a-lot-of-resources-to-restore-a-connection--------example--example--opens-a-connection-to-an-sap-hana-database-and-imports-all-entries-of-a-column-in-the-database-table-scarr---data-conn-type-dbcon-con--name--cl--demo--input--request--changing-field---conn----select-single-dbms--------from-dbcon--------where-con--name---conn AND
             dbms     = 'HDB'
       INTO @DATA(dbtype).
IF sy-subrc <> 0.
  RETURN.
ENDIF.
TRY.
    EXEC SQL.
      CONNECT TO :conn
    ENDEXEC.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx\_sy\_native\_sql\_error
        EXPORTING
          textid = cx\_sy\_native\_sql\_error=>cx\_sy\_native\_sql\_error.
    ENDIF.
    EXEC SQL.
      OPEN dbcur FOR
        SELECT carrid
               FROM scarr
               WHERE mandt = :sy-mandt
    ENDEXEC.
    DATA carrid TYPE scarr-carrid.
    DO.
      EXEC SQL.
        FETCH NEXT dbcur INTO :carrid
      ENDEXEC.
      IF sy-subrc <> 0.
        EXIT.
      ELSE.
        cl\_demo\_output=>write( |{ carrid }| ).
      ENDIF.
    ENDDO.
    EXEC SQL.
      CLOSE dbcur
    ENDEXEC.
    EXEC SQL.
      DISCONNECT :conn
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display( ).