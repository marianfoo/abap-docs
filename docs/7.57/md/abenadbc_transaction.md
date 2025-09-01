---
title: "ADBC - Database LUWs"
description: |
  For each open database connection that can be represented by an instance of class CL_SQL_CONNECTION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_sql_connection.htm), only one database LUW(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.ht
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_transaction.htm"
abapFile: "abenadbc_transaction.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abenadbc", "transaction"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) →  [ADBC - CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_sql_connection.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADBC - Database LUWs, ABENADBC_TRANSACTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

ADBC - Database LUWs

For each open database connection that can be represented by an instance of class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_sql_connection.htm), only one [database LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is active at any one time. When a connection is opened, the first database LUW of the connection is opened implicitly.

The class CL\_SQL\_CONNECTION contains the following instance methods:

-   COMMIT
-   ROLLBACK

These methods end the current database LUW of a connection using a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The current connection is set to inactive here. If the connection is still linked with an ADBC SQL statement and this statement is used, it is activated again implicitly and a new database LUW opened.

The database LUWs of different connections are independent of one another and must be ended individually. When the work process is switched, with the resulting [implicit database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm), this is executed on all open connections. The database commit on the default connection is the last one.

Hints

-   For detailed information about database connections, see [database connections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_connections.htm).
-   To execute a database commit or a database rollback on the default connection using ADBC, an instance of class CL\_SQL\_CONNECTION must be created for this connection using CREATE OBJECT.
-   Transaction control is possible only using the methods COMMIT and ROLLBACK of the class CL\_SQL\_CONNECTION, since only in this case are all actions required at the end of the transaction executed in the database interface. The native statements COMMIT or ROLLBACK should not be executed using CL\_SQL\_STATEMENT or CL\_SQL\_PREPARED\_STATEMENT to avoid critical side effects.