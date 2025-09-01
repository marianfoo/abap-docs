  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_transaction.htm) → 

COMMIT, ROLLBACK CONNECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit_connection_shortref.htm)

Syntax

COMMIT*|*ROLLBACK CONNECTION con|(con\_syntax).

Effect

This COMMIT or ROLLBACK statement performs a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_rollback.htm) on the specified [database connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The database connection can be specified as follows:

-   con
    

Specified directly and statically as con.

-   (con\_syntax)
    

Specified as the content of a parenthesized data object con\_syntax of type c or string.

The following can be specified for con or in con\_syntax (and transformed to uppercase letters internally):

-   default specified statically or DEFAULT specified dynamically for the [standard connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current work process.
    
-   The name of [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") specified statically or dynamically. The name must exist in the column CON\_NAME of the database table DBCON.
    
-   The name of a [service connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") specified statically or dynamically. The name of the service connection must consist of the prefix R/3\* followed by any 26 alphanumeric characters (in uppercase).
    
-   A name (in uppercase letters) granted for a secondary connection or service connection by the addition AS of the static Native SQL statement [CONNECT TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec_connection.htm). It should be noted here that a connection with a name of this type is a separate database connection that can exist in parallel with a connection not named using AS.
    

Notes

-   It should also be noted that the statements COMMIT CONNECTION default and ROLLBACK CONNECTION default perform a clean database commit or rollback on the standard connection, unlike [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm). They do not close the current [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry").
    
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION are suitable for a simple close of a database LUW. If database LUWs are monitored by the application log, the function modules DB\_COMMIT and DB\_ROLLBACK are better suited to raising an appropriate event.
    
-   COMMIT CONNECTION and ROLLBACK CONNECTION can only be used to edit connections activated in Native SQL or AMDP if their names do not contain any lowercase letters. This affects [service connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_connection_glosry.htm "Glossary Entry") and names defined using the addition AS of the statement [CONNECT TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec_connection.htm). The names of [secondary connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") do not contain any lowercase letters.
    
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION clear [global temporary tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_gtt.htm) on the specified secondary connection and prevent the runtime error COMMIT\_GTT\_ERROR in implicit [database commits](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit.htm) on this connection.
    
-   The statements COMMIT CONNECTION and ROLLBACK CONNECTION change the state of an active [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or [service connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_connection_glosry.htm "Glossary Entry") to inactive. The way the following connection is used in the same internal session opens a new database LUW.
    
-   Detailed information about database connections can be found [here](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_multiconnect.htm).
    

Example

Performs a database commit and releases the exclusive lock after modifying ABAP SQL statements by using COMMIT CONNECTION default on the standard connection.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
COMMIT CONNECTION default.