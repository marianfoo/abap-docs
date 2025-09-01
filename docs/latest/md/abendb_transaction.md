---
title: "Database LUW"
description: |
  A database LUW(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenluw_glosry.htm 'Glossary Entry') (also referred to as a database transaction) is a non-separable sequence of database operations that is completed with a database commit(https://help.sap.com/doc/abapdocu_latest_in
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_transaction.htm"
abapFile: "abendb_transaction.htm"
keywords: ["update", "do", "if", "try", "data", "abendb", "transaction"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20LUW%2C%20ABENDB_TRANSACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database LUW

A database [LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenluw_glosry.htm "Glossary Entry") (also referred to as a database transaction) is a non-separable sequence of database operations that is completed with a [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The database LUW is either executed completely by the database system or not at all. After a database LUW has been completed successfully, the database returns to a consistent state and a new database LUW is opened. If an error is detected within a database LUW, all database changes made since the start of the database LUW can be undone using a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The database is subsequently restored to the same status as before the start of the database LUW. Isolation levels determine whether other users can perform reads on data modified in a database LUW before a database commit is performed.

-   [Database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm)
-   [Database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm)
-   [Isolation levels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_isolation.htm)

The ABAP statements used to execute database commits or database rollbacks explicitly are as follows:

-   [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm)
-   [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm)

Hints

-   At the end of a database LUW, all [reader streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreader_stream_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocator_glosry.htm "Glossary Entry") created in it are closed implicitly. A writer stream that is still open is only closed as part of a database rollback and causes a runtime error during a a database commit.
-   Any database commits or database rollbacks that occur within the [update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry") cancel the update with a runtime error. See [Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit_during_update.htm).

Continue
[Database Commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm)
[Database Rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm)
[Isolation Levels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_isolation.htm)
[COMMIT, ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm)