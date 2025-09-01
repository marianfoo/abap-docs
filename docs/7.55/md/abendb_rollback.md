---
title: "Database Rollback"
description: |
  Database rollbacks are triggered implicitly or explicitly in AS ABAP(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm 'Glossary Entry'). -   Implicit Database Rollbacks(#abendb-rollback-1--------explicit-database-rollbacks---@ITOC@@ABENDB_ROLLBACK_2) -   Databas
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_rollback.htm"
abapFile: "abendb_rollback.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abendb", "rollback"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_transaction.htm) → 

Database Rollback

Database rollbacks are triggered implicitly or explicitly in [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry").

-   [Implicit Database Rollbacks](#abendb-rollback-1--------explicit-database-rollbacks---@ITOC@@ABENDB_ROLLBACK_2)

-   [Database Rollback on Database Connections](#@@ITOC@@ABENDB_ROLLBACK_3)

Hint

A database rollback closes all opened [database cursors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). It is particularly important that database rollbacks are not triggered (in one of the ways listed here) in [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) loops and after the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm).

Implicit Database Rollbacks

The following exceptions trigger an implicit database rollback:

-   A [runtime error](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_error_glosry.htm "Glossary Entry").

-   A [termination message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentermination_message_glosry.htm "Glossary Entry") is sent.

-   A program is terminated when a [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") is sent.

The implicit database rollback takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

Hints

-   A termination message also produces a database rollback if the message is handled by the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_parameter.htm) when a function module is called.

-   Termination and [exit messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexit_message_glosry.htm "Glossary Entry") always terminate the program. Other message types can also terminate a program in certain [contexts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobj_context_glosry.htm "Glossary Entry") .

-   When an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") is exited, there is no implicit [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm) on the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") and there is no database rollback. This must be programmed explicitly if required.

Explicit Database Rollbacks

Explicit database rollbacks in ABAP programs can be triggered in the following ways:

-   The relevant database-specific [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_glosry.htm "Glossary Entry") statement is used.

-   In [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry"), only the method [ROLLBACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_transaction.htm) of the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_sql_connection.htm) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.

-   Any ROLLBACK statement embedded statically between [EXEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendexec.htm) is detected by the database interface and any required actions performed.

-   Executing the [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit_rollback_connection.htm). The database rollback takes place on the specified [database connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

-   Calling the function module DB\_ROLLBACK. This function module encapsulates the corresponding Native SQL statement. By default, the database rollback is triggered on the [connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_connection.htm) currently open for [EXEC SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec.htm). The rollback is triggered explicitly on the standard connection by passing the value of abap\_true to the input parameter IV\_DEFAULT. The function module DB\_ROLLBACK raises the event DB\_TRANSACTION\_FINISHED of the class CL\_DBI\_TRANSACTION\_STATE, which is handled by the application log framework.

-   Executing the [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm). The database rollback takes place on all currently open [database connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The statement ROLLBACK WORK also closes the current [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw.htm) and performs the associated actions.

ROLLBACK statements are not allowed in [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry") methods.

Hints

-   A simple database rollback in an ABAP program is usually triggered using the statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit_rollback_connection.htm) (the standard connection can be specified here using default). The database LUW can be monitored by the application log by using the function module DB\_ROLLBACK. Apart from the database rollback itself, using the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) also has certain other consequences with respect to the [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry").

-   An explicit database rollback in an ABAP program is best triggered using the statement [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit_rollback_connection.htm) (the standard connection can be specified here using default).

-   All the methods specified here for explicit database rollbacks clear any [global temporary tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm) and prevent the runtime error COMMIT\_GTT\_ERROR in the case of implicit [database commits](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm).

Database Rollback on Database Connections

When a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") is closed explicitly in Native SQL, a database rollback is triggered in the transaction context of this [database connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). For more information, see [Database Connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_multiconnect.htm).