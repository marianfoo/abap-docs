  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Database Connections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Connections%20and%20Transactions%2C%20ABENDB_CONNECTIONS_TRANS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Connections and Transactions

Every active database connection creates a separate transaction context or is linked with its own [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that database changes on one connection can be committed or rolled back independently of changes on other database connections. In this way, for example, log data can be stored in and committed on a secondary connection without modifying the database LUW of the standard connection.

Database changes can be committed or rolled back as follows specifically for database connections:

-   The statements [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm) and [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm) trigger targeted [database commits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollbacks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") on specific connections.
-   In ADBC, the instance methods [COMMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_transaction.htm) and [ROLLBACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_transaction.htm) as well as [CLOSE\_NO\_DISCONNECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm) of the class CL\_SQL\_CONNECTION trigger [database commits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollbacks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") for the connection of the current connection object.
-   In static Native SQL, the statements COMMIT WORK and ROLLBACK WORK after EXEC SQL trigger [database commits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollbacks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") for the current connection.
-   When a database connection is made inactive implicitly at the end of an internal session, a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is triggered.
-   When a database connection is closed explicitly in Native SQL, a [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") is triggered.

In addition, there are the statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback.htm), as well as the implicit [database commits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm) and [database rollbacks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_rollback.htm), that act on all active connections.

A secondary connection or service connection is always set to inactive when its database changes are committed or rolled back. A connection deactivated in this way can, however, still be used in the same internal session without being opened explicitly, not just in ABAP SQL, but also in Native SQL or AMDP. The first time an inactive secondary connection or service connection previously active in the current internal session is reused, it is made active again and a new database LUW is opened.

Warning

Extreme care must be taken when using SQL SET TRANSACTION statements to set the transaction behavior of the current database connection. The transaction behavior set using these statements is preserved across the entire current database LUW, which can cause unexpected or critical situations when the database connection is reused. The default behavior of the transactions must be restored before the end of the database LUW. When the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") is accessed, special methods must be called for [setting the transaction behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_set_transaction.htm) instead of using the SQL SET TRANSACTION statements directly. In this case, the default transaction behavior is restored automatically at the end of the database LUW. No automatic resets can currently be performed for other database platforms.

Hints

-   All ABAP SQL, Native SQL, and AMDP reads made on a active shared [ABAP connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_connection_glosry.htm "Glossary Entry") of an internal session work in the same database LUW.
-   The static Native SQL statement [SET CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec_connection.htm) is ignored by the database LUWs of the connections involved.
-   Secondary connections and service connections in an internal session cannot be used in called programs, which means that a called program always activates its own connection and hence its own database LUW, even if the same connection name is used.
-   Secondary connections, more specifically service connections, can be used to implement independent database LUWs on a secondary database or on the standard database. Care must be taken to avoid lock situations here.
-   Working with multiple database connections, namely independent database LUWs, can produce lock situations in which only one work process is involved: a program changes a database row on the first connection and tries to change the same row on a second connection. This results in the program waiting for the lock of the first database LUW, without this first LUW ever being able to continue. This situation can only be resolved by ending the work process. This is done automatically for dialog processes, but it must be done manually for background jobs. It is therefore not advisable to change the same table within the a single program using multiple database connections.

Example

If the statement COMMIT CONNECTION default were not used, the following program section would produce a lock situation because the standard connection (ABAP SQL here) and a service connection (Native SQL here) would be used in independent database LUWs to access the same row of a database table.

INSERT demo\_update FROM @( VALUE #( id = 'X' ) ).
DELETE FROM demo\_update.
COMMIT CONNECTION default.
DATA conn TYPE dbcon-con\_name VALUE 'R/3\*DEMO'.
EXEC SQL.
  CONNECT TO :conn
ENDEXEC.
EXEC SQL.
  INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 )
ENDEXEC.