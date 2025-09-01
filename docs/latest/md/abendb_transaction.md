  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20LUW%2C%20ABENDB_TRANSACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database LUW

A database [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") (also referred to as a database transaction) is a non-separable sequence of database operations that is completed with a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). The database LUW is either executed completely by the database system or not at all. After a database LUW has been completed successfully, the database returns to a consistent state and a new database LUW is opened. If an error is detected within a database LUW, all database changes made since the start of the database LUW can be undone using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The database is subsequently restored to the same status as before the start of the database LUW. Isolation levels determine whether other users can perform reads on data modified in a database LUW before a database commit is performed.

-   [Database commit](javascript:call_link\('abendb_commit.htm'\))
-   [Database rollback](javascript:call_link\('abendb_rollback.htm'\))
-   [Isolation levels](javascript:call_link\('abendb_isolation.htm'\))

The ABAP statements used to execute database commits or database rollbacks explicitly are as follows:

-   [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\))
-   [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\))

Hints

-   At the end of a database LUW, all [reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") and [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") created in it are closed implicitly. A writer stream that is still open is only closed as part of a database rollback and causes a runtime error during a a database commit.
-   Any database commits or database rollbacks that occur within the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") cancel the update with a runtime error. See [Forbidden Statements in Updates](javascript:call_link\('abendb_commit_during_update.htm'\)).

Continue
[Database Commit](javascript:call_link\('abendb_commit.htm'\))
[Database Rollback](javascript:call_link\('abendb_rollback.htm'\))
[Isolation Levels](javascript:call_link\('abendb_isolation.htm'\))
[COMMIT, ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\))