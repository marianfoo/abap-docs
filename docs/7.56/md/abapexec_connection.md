---
title: "EXEC SQL - CONNECT"
description: |
  A connection to a database must be defined in order to be able to use Native SQL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm 'Glossary Entry') statements. When an AS ABAP(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm 'G
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_connection.htm"
abapFile: "abapexec_connection.htm"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "class", "data", "abapexec", "connection"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm) →  [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm) → 

EXEC SQL - CONNECT

A connection to a database must be defined in order to be able to use [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") statements. When an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") is started, a [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") from the database interface to the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") is opened. This connection is defined as the current connection for embedded Native SQL statements and as a standard connection for [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements when an ABAP program is started. The following SAP-specific Native SQL statements can be used to open additional database connections, which can then be accessed in static Native SQL.

The possible additional AS ABAP connections to database systems are [secondary connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") defined in the database table DBCON or [service connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_connection_glosry.htm "Glossary Entry") whose name starts with R/3\*.

-   [Opening a Connection](#abapexec-connection-1-------selecting-a-connection---@ITOC@@ABAPEXEC_CONNECTION_2)
-   [Determining the Connection](#abapexec-connection-3-------closing-a-connection---@ITOC@@ABAPEXEC_CONNECTION_4)
-   [Example](#abapexec-connection-5---hint--for-detailed-information-about-database-connections--see--database-connections--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abendb-connections-htm----opening-a-connection--syntax--exec-sql----connect-to-conn-----as-name-----endexec---effect--this-static-native-sql-statement-requests-a-database-connection-called-conn--this-connection-is-opened-or-reused-if-it-already-exists-in-an-inactive-state-for-the-current-work-process--once-connect-to-is-executed--the-specified-connection-is-the-current-connection-of-the-internal-session--which-means-that-all-subsequent-static-native-sql-statements-work-with-this-connection-until-a-connection-other-than-the-current-is-set-using-a-new-connect-to-statement-or-using-set-connection---for-conn--a-literal-or-a--host-variable--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abapexec-host-htm--that-contains-one-of-the-following-values-can-be-specified-------a-name-from-the-column-con--name-of-the-database-table-dbcon-used-to-specify-a--secondary-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abensecondary-db-connection-glosry-htm--glossary-entry-------a-name-with-the-prefix-r-3---used-to-specify-a--service-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenservice-connection-glosry-htm--glossary-entry----both-of-these-instances-are-case-sensitive--if-a-secondary-connection-that-is-not-in-the-database-table-dbcon-is-specified--a-catchable-exception-of-the-class-cx--sy--native--sql--error-is-raised--if-a--secondary-database--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abensecondary-db-glosry-htm--glossary-entry---cannot-be-accessed--sy-subrc-is-set-to-4---the-addition-as-can-be-used-to-specify-a-name-name-for-the-connection--for-name--a-literal-or-a-character-like-host-variable-can-be-specified-whose-content-is-used-as-the-name--a-connection-called-name-is-not-the-same-connection-as-a-connection-requested-without-using-the-addition-as--this-makes-it-possible-to-open-parallel-connections-with-separate-database-luws-for-the-same-secondary-connection-or-service-connection-within-an-internal-session--in-an-internal-session--only-one-active-database-session-can-be-called-name--any-attempt-to-activate-a-further-connection-with-the-same-name-produces-a-runtime-error--a-connection-called-name-can-only-be-specified-in-the-statement-set-connection-using-this-name---hints------the--standard-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenstandard-db-connection-glosry-htm--glossary-entry---cannot-be-requested-using-connect-to------a-name-granted-using-as-can-also-be-used-in-abap-sql-after-the-addition-connection-and-in-the-statements--commit-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abapcommit-rollback-connection-htm--and--rollback-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abapcommit-rollback-connection-htm---as-long-as-it-is-in-uppercase-letters---selecting-a-connection--syntax--exec-sql----set-connection----conn---default----endexec---effect--this-static-native-sql-statement-sets-the-current-connection-for-all-following-static-native-sql-statements--for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-connection-activated-in-the-current-session-------default-in-uppercase-letters-or-default-specified-directly-can-be-used-to-specify-the--standard-connection--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenstandard-db-connection-glosry-htm--glossary-entry--------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name---all-of-these-instances-are-case-sensitive--when-an-unknown-connection-is-specified--the-current-connection-remains-unchanged-and-sy-subrc-is-set-to-4---hints------when-a-current-connection-is-switched-to-a-different-current-connection--no-database-luw-is-closed-and-no-new-luw-is-opened------any-changes-to-the-current-connection-only-affect-static-native-sql-after-exec-sql--abap-sql-and-any-other-variant-of-native-sql-remain-unaffected------the-current-connection-is-switched-regardless-of-whether-the-connections-involved-are-active-or-inactive-after-their-database-luws-are-closed---determining-the-connection--syntax--exec-sql----get-connection--conn-endexec---effect--this-static-native-sql-statement-assigns-the-name-of-the-current-connection-to-conn--conn-expects-a-character-like-host-variable--if-the-current-connection-was-activated-using-the-statement-connect-to-and-as-was-used-to-give-it-a-name-at-the-same-time--this-name-is-assigned--if-the-connection-is-activated-without-being-given-a-name--the-name-of-the-secondary-connection-or-service-connection-is-assigned--if-the-current-connection-is-the-standard-connection--the-value-default-is-assigned---hint--the-current-connection-can-be-active-or-inactive-after-its-database-luw-is-closed---closing-a-connection--syntax--exec-sql----disconnect-conn-endexec---effect--this-static-native-sql-statement-closes-the-connection-conn-for-the-current-work-process--which-discards-all-database-changes-not-yet-committed-using-a--database-commit--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abendb-commit-htm---for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-a-secondary-connection-or-service-connection-activated-in-the-internal-session-------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name---all-other-specifications--most-specifically-the-value-default--produce-a-runtime-error--if-the-closed-secondary-connection-or-service-connection-is-the-current-connection--the-standard-connection-is-set-as-the-new-current-connection-implicitly--all-of-these-instances-are-case-sensitive---hints------the-closed-connection-can-be-active-or-inactive-after-its-database-luw-is-closed------it-is-recommended-that-database-connections-are-only-closed-implicitly-by-the-abap-runtime-framework-and-not-explicitly--since-it-takes-a-lot-of-resources-to-restore-a-connection---example--example--opening-of-a-connection-to-an-sap-hana-database-and-importing-of-all-entries-of-a-column-in-the-database-table-scarr---data-conn-type-dbcon-con--name--cl--demo--input--request--changing-field---conn----select-single-dbms--------from-dbcon--------where-con--name---conn AND
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