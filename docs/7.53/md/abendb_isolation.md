---
title: "Isolation Levels"
description: |
  The term 'isolation' refers to the separation of different transactions performed on the same data in a database. Different isolation levels specify how a database user can perform reads on the data of a different user modified in a database LUW(https://help.sap.com/doc/abapdocu_753_index_htm/7.53
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_isolation.htm"
abapFile: "abendb_isolation.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abendb", "isolation"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction.htm) →  [Database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_transaction.htm) → 

Isolation Levels

The term "isolation" refers to the separation of different transactions performed on the same data in a database. Different isolation levels specify how a database user can perform reads on the data of a different user modified in a [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). The data is isolated by implementing appropriate [database locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_lock_glosry.htm "Glossary Entry").

The following isolation levels are significant in AS ABAP:

-   Uncommitted read

In uncommitted reads, every database user performing a read can see the modified data directly, not just the owner of the database LUW where the data was modified, even if no [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_commit.htm) has been performed yet. The read is performed without setting a shared lock (known as a dirty read), which means the existing exclusive lock is ignored by the read. Data in a temporary state can, therefore, be read, even if it is to be removed again using a database rollback.

-   Committed read

In committed reads, only the user of a database LUW has access to data modified in the LUW. Other database users cannot access the modified data before a [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_commit.htm) is performed. In the case of reads, a shared lock is set (not possible for the modified data due to the existing exclusive lock). Data can be accessed only when released by a database commit.

In an [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), the following settings apply to the isolation level:

-   The SAP HANA database and Oracle databases support these isolation levels in their strictest form. In the case of reads, they do not set a shared lock as in uncommitted reads, but do read the data like in a committed read. If the data is locked in a different LUW by a write, the cached state of the data after the last database commit is accessed.

-   Both isolation levels are possible on all other database with uncommitted read being the default setting. The method SET\_ISOLATION\_LEVEL of the class CL\_SQL\_CONNECTION can be used to set the isolation level of a database connection to committed read. In the case of reads, an attempt is actually made to set a shared lock, which can cause wait times. The same method can be used to reset the isolation level to the default setting (this happens anyway after the next database commit or database rollback).

Many database systems employ additional isolation levels, such as serializable and repeatable read. These work in a similar way to committed reads, but the shared lock is preserved until the next data object is read or until the [database cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") is closed. Since these isolation levels are not sufficiently standardized, they are not currently used in [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry").

Notes

-   In databases that support the isolation levels committed read and uncommitted read, the latter must be the default setting, since otherwise deadlocks occur too quickly. There is no risk of this on SAP HANA databases and on Oracle databases. These databases read the same data as in a committed read but do not set shared locks.

-   When the database is accessed on AS ABAP, a database user is the same as a work process. This means that, for the isolation level uncommitted read, a work process can perform reads on data in a database LUW of the same or another user that has not yet been committed using a database commit.

-   The isolation level does not modify how [buffered tables in ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_puffering.htm) are accessed. The isolation level committed read also accesses the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry"). However, data may be obsolete if it has been changed since the last buffer synchronization in the database. There is a guarantee, however, that data is only read if committed on the database using a database commit. To make it possible to also access current data in a buffered data, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm) must be used in the Committed Read isolation level.

-   The method SET\_ISOLATION\_LEVEL of the class CL\_SQL\_CONNECTION replaces the function modules DB\_SET\_ISOLATION\_LEVEL and DB\_RESET\_ISOLATION\_TO\_DEFAULT.