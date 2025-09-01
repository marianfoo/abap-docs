  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) →  [Database Locks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_lock.htm) → 

Lock Conflicts in IBM DB2

On DB2 for i5/OS, locks are not only set for modifying [transactions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_glosry.htm "Glossary Entry"), but also for consistent reads on buffered tables, [cluster](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") tables, and [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry"). The isolation level "read stability" is used for this purpose in the database system, using "shared locks", which prevent table contents from being modified simultaneously.

Besides timeouts and [deadlocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeadlock_glosry.htm "Glossary Entry"), lock conflicts can also cause errors with [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_glosry.htm "Glossary Entry") (data definition language) commands such as CREATE, ALTER, and DROP, and slow down online reorganization.

The statement OPEN CURSOR with the WITH HOLD option can be used to persist the position of a cursor beyond the commit event, if necessary.

To avoid lock conflicts, commits should be executed as [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). Here, for example, the statement [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) can be used.

IF cl\_db\_sys=>dbsys\_type = 'DB2'.
  COMMIT CONNECTION default.
ENDIF.

These database commits are recommended in programs with extremely long reading operations.