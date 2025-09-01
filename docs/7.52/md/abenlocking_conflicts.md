  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [Database Locks](javascript:call_link\('abendb_lock.htm'\)) → 

Lock Conflicts in IBM DB2

On DB2 for i5/OS, locks are not only set for modifying [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"), but also for consistent reads on buffered tables, [cluster](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") tables, and [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry"). The isolation level "read stability" is used for this purpose in the database system, using "shared locks", which prevent table contents from being modified simultaneously.

Besides timeouts and [deadlocks](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry"), lock conflicts can also cause errors with [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") (data definition language) commands such as CREATE, ALTER, and DROP, and slow down online reorganization.

The statement OPEN CURSOR with the WITH HOLD option can be used to persist the position of a cursor beyond the commit event, if necessary.

To avoid lock conflicts, commits should be executed as [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Here, for example, the statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) can be used.

IF cl\_db\_sys=>dbsys\_type = 'DB2'.
  COMMIT CONNECTION default.
ENDIF.

These database commits are recommended in programs with extremely long reading operations.