  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc.htm) → 

ADBC - CL\_SQL\_CONNECTION

The SQL statements that are represented by objects of the [CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_sql_statement.htm) and [CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_sql_prepared_statement.htm) classes work by default with the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The following class can be used to enable additional [database connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_connection_glosry.htm "Glossary Entry") or to make settings for database connections (including the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry")):

-   CL\_SQL\_CONNECTION

The following can be passed to the method GET\_ABAP\_CONNECTION of this class:

-   The value DEFAULT for the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current work process.

-   The name of a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") from the column CON\_NAME of the database table DBCON.

-   The name of a [service connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") prefixed with R/3\*.

All of these instances are case-sensitive. The method attempts to activate or reuse the corresponding connection and, if successful, creates an instance of CL\_SQL\_CONNECTION as a connection object and returns the corresponding reference.

A further method, GET\_CONNECTION, has the additional parameter SHARABLE, which can be used to share a secondary connection or service connection with ABAP SQL, Native SQL, and AMDP.

-   If the value abap\_true is passed to the parameter, GET\_CONNECTION works like GET\_ABAP\_CONNECTION and the connection is shared.

-   If the value abap\_false (default) is passed to the parameter, the secondary connection or service connection can be used exclusively by using the connection object.

References to instances of CL\_SQL\_CONNECTION can be passed to the parameter CON\_REF of the instance constructor of CL\_SQL\_STATEMENT or CL\_SQL\_PREPARED\_STATEMENT. Instances created in this way execute their SQL statements on the database connection represented by the instance of CL\_SQL\_CONNECTION.

The instance method CLOSE of CL\_SQL\_CONNECTION closes the current secondary connection or service connection. This rolls back all database changes not yet committed using a [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm). The instance can no longer be used after this and statements that are already associated with the connection become invalid. CLOSE is ignored in instances that represent the standard connection.

To handle [database LUWs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_transaction.htm) using ADBC, the class CL\_SQL\_CONNECTION contains the methods COMMIT and ROLLBACK, which raise a [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") respectively. Furthermore, CL\_SQL\_CONNECTION contains methods for [setting the transaction behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_set_transaction.htm) of the current database connection. When an [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") is accessed, these methods must be used instead of the corresponding SQL SET TRANSACTION statements.

Hints

-   To create a connection object for the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"), an instance of CL\_SQL\_CONNECTION can be created directly using CREATE OBJECT or the instance operator NEW instead of calling the method GET\_ABAP\_CONNECTION with the value DEFAULT.

-   Detailed information about database connections can be found [here](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_multiconnect.htm).

Example

Specifies a service connection to the standard database for a prepared statement.

TRY.
    DATA(con) = cl\_sql\_connection=>get\_abap\_connection( \`R/3\*my\_conn\`
).
    DATA(sql) = NEW cl\_sql\_prepared\_statement(
      statement = \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\`
      con\_ref   = con ).
    ...
    sql->close( ).
    con->close( ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Continue
[ADBC - Database LUWs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_transaction.htm)