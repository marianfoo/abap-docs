  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_consistency.htm) → 

Database LUW

A database [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry") (also referred to as a database transaction) is a non-separable sequence of database operations that is completed with a [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The database LUW is either executed completely by the database system or not at all. After a database LUW has been completed successfully, the database returns to a consistent state and a new database LUW is opened. If an error is detected within a database LUW, all database changes made since the start of the database LUW can be undone using a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The database is subsequently restored to the same status as before the start of the database LUW. Isolation levels determine whether other users can perform reads on data modified in a database LUW before a database commit is performed.

-   [Database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm)
-   [Database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_rollback.htm)
-   [Isolation levels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_isolation.htm)

The ABAP statements used to execute database commits or database rollbacks explicitly are as follows:

-   [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_rollback_connection.htm)
-   [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_rollback_connection.htm)

Hints

-   At the end of a database LUW, all [reader streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreader_stream_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocator_glosry.htm "Glossary Entry") created in it are closed implicitly. A writer stream that is still open is only closed as part of a database rollback and causes a runtime error during a a database commit.
-   Any database commits or database rollbacks that occur within the [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry") cancel the update with a runtime error. See [Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit_during_update.htm).

Continue
[Database Commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm)
[Database Rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_rollback.htm)
[Isolation Levels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_isolation.htm)
[COMMIT, ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_rollback_connection.htm)