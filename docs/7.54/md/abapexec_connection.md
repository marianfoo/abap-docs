  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - CONNECT

A connection must be defined with the database before [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be used. When [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") is started, a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") from the database interface to the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is opened. This connection is defined as the current connection for embedded Native SQL statements and as a standard connection for [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements when an ABAP program is started. Use the following SAP-specific Native SQL statements, to start additional database connections. These connections can be accessed in static Native SQL.

The possible additional AS ABAP connections to database systems are [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") defined in the database table DBCON or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") whose name starts with R/3\*.

-   [Open Connection](#@@ITOC@@ABAPEXEC_CONNECTION_1)

-   [Selecting a Connection](#@@ITOC@@ABAPEXEC_CONNECTION_2)

-   [Determining the Connection](#@@ITOC@@ABAPEXEC_CONNECTION_3)

-   [Close connection](#@@ITOC@@ABAPEXEC_CONNECTION_4)

-   [Example](#@@ITOC@@ABAPEXEC_CONNECTION_5)

Note

Detailed information about database connections can be found [here](javascript:call_link\('abenopensql_multiconnect.htm'\)).

Open Connection

Syntax

EXEC SQL.
  CONNECT TO conn *\[*AS name*\]*
ENDEXEC.

Effect

This static Native SQL statement requests a database connection called conn. This connection is opened (or reused) if it already exists in an inactive state for the current work process. Once CONNECT TO is executed, the specified connection is the current connection of the internal session, which means that all subsequent static Native SQL statements work with this connection until a connection other than the current is set using a new CONNECT TO statement or using SET CONNECTION.

For conn, a a literal or a [host variable](javascript:call_link\('abapexec_host.htm'\)) that contains one of the following values can be specified:

-   A name from the column CON\_NAME of the database table DBCON used to specify a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry")
    
-   A name with the prefix R/3\* used to specify a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry")
    

Both of these instances are case-sensitive. If a secondary connection that is not in the database table DBCON is specified, a handleable exception of the class CX\_SY\_NATIVE\_SQL\_ERROR is raised. If a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") cannot be reached, sy-subrc is set to 4.

The addition AS can be used to specify a name name for the connection. For name, a literal or a character-like host variable can be specified whose content is used as the name. A connection called name is not the same connection as a connection requested without using the addition AS. This makes it possible to open parallel connections with separate database LUWs for the same secondary connection or service connection within an internal session, In an internal session, only one active database session can be called name. Any attempt to activate a further connection with the same name produces a runtime error. A connection called name can only be specified in the statement SET CONNECTION using this name.

Notes

-   The [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") cannot be requested using CONNECT TO.
    
-   A name granted using AS can also be used in ABAP SQL after the addition CONNECTION and in the statements [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) and [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)), as long as it is in uppercase letters.
    

Selecting a Connection

Syntax

EXEC SQL.
  SET CONNECTION *{*conn*|*DEFAULT*}*
ENDEXEC.

Effect

This static Native SQL statement sets the current connection for all following static Native SQL statements. For conn, a literal or a character-like host variable can be specified that contains the name of connection activated in the current connection.

-   DEFAULT in uppercase letters or DEFAULT specified directly can be used to specified the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry").
    
-   A secondary or service connection activated using CONNECT TO without specifying a name after AS can be specified under its name conn.
    
-   A secondary or service connection activated using CONNECT TO while specifying a name after AS can be specified under this name name.
    

All of these instances are case-sensitive. When an unknown connection is specified, the current connection remains unchanged and sy-subrc is set to 4.

Notes

-   When a current connection is switched to a different current connection, no database LUW is closed and no new LUW is opened.
    
-   Any changes to the current connection are applied only in static Native SQL after EXEC SQL. ABAP SQL and any other variant of Native SQL remain unaffected.
    
-   The current connection is switched regardless of whether the connections in question are active or (after their database LUWs are closed) inactive.
    

Determining the Connection

Syntax

EXEC SQL.
  GET CONNECTION :conn
ENDEXEC.

Effect

This static Native SQL statement assigns the name of the current connection to conn. conn expects a character-like host variable. If the current connection was activated using the statement CONNECT TO and AS was used to give it a name at the same time, this name is assigned. If the connection is activated without being given a name, the name of the secondary connection or service connection is assigned. If the current connection is the standard connection, the value DEFAULT is assigned.

Note

The current connection can be active or (after its database LUW is closed) inactive.

Close connection

Syntax

EXEC SQL.
  DISCONNECT conn
ENDEXEC.

Effect

This static Native SQL statement closes the connection conn for the current work process, which discards all database changes not yet committed using a [database commit](javascript:call_link\('abendb_commit.htm'\)). For conn, a literal or a character-like host variable can be specified that contains the name of a secondary connection or service connection activated in the internal session.

-   A secondary or service connection activated using CONNECT TO without specifying a name after AS can be specified under its name conn.
    
-   A secondary or service connection activated using CONNECT TO while specifying a name after AS can be specified under this name name.
    

If anything else is specified (most specifically DEFAULT), a runtime error occurs. If the closed secondary connection or service connection is the current connection, the standard connection is set as the new current connection implicitly. All of these instances are case-sensitive.

Notes

-   The closed connection can be active or (after its database LUW is closed) inactive.
    
-   It is recommended that database connections are only closed implicitly by the ABAP runtime environment and not explicitly, since it takes a lot of resources to restore a connection.
    

Example

Example

Opens a connection to an SAP HANA database and imports all entries of a column in the database table SCARR.

DATA conn TYPE dbcon-con\_name.
cl\_demo\_input=>request( CHANGING field = conn ).
SELECT SINGLE dbms
       FROM dbcon
       WHERE con\_name = @conn AND
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