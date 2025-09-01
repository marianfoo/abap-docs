# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Architecture / Data Storage

Included pages: 6


### abendata_storage_gdl.htm

---
title: "Data Storage"
description: |
  ABAP programs generally work with data imported from persistent memory media to the internal session(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm 'Glossary Entry') of the current program execution. This data is then available to the program as tra
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm"
abapFile: "abendata_storage_gdl.htm"
keywords: ["do", "if", "try", "data", "abendata", "storage", "gdl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Storage%2C%20ABENDATA_STORAGE_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Storage

ABAP programs generally work with data imported from persistent memory media to the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current program execution. This data is then available to the program as transient data. For performance reasons, data can also be stored in the shared memory of the current AS instance. This shared memory is available to all programs of an AS instance. Access to data in the shared memory is faster than accessing data in persistent memory media by some magnitude.

-   [Persistent Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpersistent_data_storage_guidl.htm "Guideline")
-   [Database Accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm "Guideline")
-   [Client Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm "Guideline")
-   [Using the Shared Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_memory_guidl.htm "Guideline")
-   [Using Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_objects_guidl.htm "Guideline")

Continue
[Persistent Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpersistent_data_storage_guidl.htm)
[Database Accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm)
[Client Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm)
[Using the Shared Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_memory_guidl.htm)
[Using Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_objects_guidl.htm)


### abenpersistent_data_storage_guidl.htm

---
title: "Persistent Data Storage"
description: |
  Background ABAP programs can have both read and write access to data in the following persistent storage media: -   Relational database tables in databases -   Data clusters in special database tables -   Binary files or text files on the host computer(https://help.sap.com/doc/abapdocu_latest_inde
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpersistent_data_storage_guidl.htm"
abapFile: "abenpersistent_data_storage_guidl.htm"
keywords: ["select", "do", "if", "try", "class", "data", "internal-table", "abenpersistent", "storage", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Persistent%20Data%20Storage%2C%20ABENPERSISTENT_DATA_STORAGE_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Persistent Data Storage

Background   

ABAP programs can have both read and write access to data in the following persistent storage media:

-   Relational database tables in databases
-   Data clusters in special database tables
-   Binary files or text files on the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance
-   Binary files or text files on the front-end computer when SAP GUI is used

According to the [SoC principle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenseparation_concerns_guidl.htm "Guideline"), such accesses are wrapped in service classes of the persistency layer of an application.

Rule   

Plan persistent data storage carefully

Select with care the persistent storage media that are used by the application as well as the possible data transport routes between these media. Here is a general rule of thumb:

-   Database tables for the general storage of raw data
-   Data clusters for the storage of formatted data
-   Files for data exchange with external systems

Details   

When you plan persistent data storage, you should follow these steps:

1.  On an AS ABAP, storing in relational database tables is always the first choice. ABAP supports this with the ABAP SQL that is integrated into the language. An object-oriented access is possible using Object Services. The majority of the data is stored in the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") of AS ABAP. [Secondary connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") (managed using [DBA Cockpit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendba_cockpit_glosry.htm "Glossary Entry")) can be used to access further databases.
2.  The following data can be stored in data clusters when using the EXPORT and IMPORT statements:
    
    \- Formatted data as the result of comprehensive analyses
    
    \- Data that is not suitable for relational databases because it does not exist in the first normal form (such as nested internal tables)
    
    \- Object networks after a serialization to XML
    
3.  The persistent storage of data in files of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of a AS instance or of the presentation server is usually the least suitable for AS ABAP application programs because it is generally platform-dependent (code pages, byte order). In addition, data like this is then only available in specific AS instances, which can cause problems in load distribution scenarios with automated server selection. Such files may be required for the data exchange with external systems, however.

Under no circumstances should you use existing database tables (or files) to store data that are not provided for this purpose. Follow the convention of restricting reads and writes to database tables to specific packages. A database table must always be considered a semantic entity that is only allowed to contain the corresponding data. This even applies if a table with the required structure already exists. If in doubt, you should create a specific database table.

You must also be careful when using seemingly cross-system resources, such as the predefined INDX database table, to store data clusters. Such a resource must only be used to store temporary data for the short term, if at all. You should create specific database tables, for example, [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry"), for application-specific and longer-lasting data.


### abendatabase_access_guidl.htm

---
title: "Database Accesses"
description: |
  Background In ABAP, data in database tables can be accessed in the following ways: -   ABAP SQL Implemented by ABAP statements, ABAP SQL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) is a subset of the Structured Query Language (SQL) comprising the DML (Data Man
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm"
abapFile: "abendatabase_access_guidl.htm"
keywords: ["update", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abendatabase", "access", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Accesses%2C%20ABENDATABASE_ACCESS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Accesses

Background   

In ABAP, data in database tables can be accessed in the following ways:

-   ABAP SQL
    
    Implemented by ABAP statements, [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) is a subset of the Structured Query Language (SQL) comprising the DML (Data Manipulation Language) part. The ABAP SQL statements use the ABAP SQL interface for platform-independent access to those database tables in the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") defined in ABAP Dictionary and having instances created in the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").
    
-   AMDP
    
    The [AMDP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) is used to manage and call ABAP Managed Database Procedures. These are database procedures or database procedures implemented as AMDP procedures in an AMDP method or an AMDP class and replicated to the database system from here.
    
-   Native SQL
    
    Database-specific SQL statements that include both DML and DDL (Data Definition Language) statements and which can be passed to the Native SQL interface of the database as follows:
    
    -   The methods of [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) make it possible to execute dynamic SQL statements on a database system and process the results. ADBC (ABAP Database Connectivity), a class-based API that enables object-oriented access to the Native SQL interface.
    -   Native SQL statements can be specified in ABAP programs between the statements [EXEC SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendexec.htm). Static Native SQL statements of this kind are not checked completely by the syntax check and are forwarded almost unchanged from the Native SQL interface to the database of an AS ABAP.

Alongside access to the ABAP database schema of the standard AS ABAP database, all access types (except for AMDP) also allow access to other databases and other database schemas using additional [database connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

Rule   

Using ABAP SQL

Use ABAP SQL for general database accesses where possible. Only use AMDP and Native SQL for tasks where ABAP SQL is not suitable.

Details   

Only ABAP SQL is guaranteed to be independent of the database platform used. For this reason, ABAP SQL does not contain the set of all possible SQL statements in a specific database, but only a subset of the DML scope of all database systems supported by AS ABAP. The database tables that can be processed using ABAP SQL can be used in ABAP directly as structured types for the declaration of suitable work areas. Only ABAP SQL supports [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") of table content in the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_memory_guidl.htm "Guideline").

AMDP and Native SQL should only be used if the task really cannot be solved using ABAP SQL. Services that work with AMDP and Native SQL are generally dependent on the database system used, so that they cannot be executed in all AS ABAP systems. For platform-independent services, implementations should be provided for all supported databases.

If the database is accessed using the Native SQL interface instead of the ABAP SQL interface, [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") should be used.

-   AMDP, currently only available for a SAP HANA database as the standard AS ABAP database, is recommended for all tasks that swap out code from ABAP programs to this SAP HANA database for performance reasons.
-   ADBC is a modern object-oriented API that is better suited to modern ABAP programming than [EXEC SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec.htm). Enhancements to the Native SQL interface, such as bulk access using internal tables, are now only provided using ADBC. ADBC also enables [dynamic access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_prog_technique_gdl.htm); Native SQL on the other hand is just static. Newer SQL statements, such as WITH for common table expressions (CTEs), are not supported in full by EXEC SQL.

For a detailed description, see [Rules for Accessing ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_recomm.htm).

Hints

-   The rule dictating that ABAP SQL is to be used for as long as possible applies in particular to [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) too. It is not a good idea to swap out SQL statements to database procedures if these could be implemented using ABAP SQL or [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_glosry.htm "Glossary Entry") too. In this case, no performance gains can be expected since the ABAP SQL statements are updated to Native SQL by the database interface in exactly the same way as they would be written in the database procedure. Using AMDP is a good idea only if HANA-specific properties can be exploited by procedure calls or if repeated transports of large amounts of data between the database and the AS ABAP can be bypassed.
-   It is [not advisable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_recomm.htm) to access ABAP-managed database objects if the access does not take place in ABAP programs.

Bad Example

See the executable example [AMDP, Comparison with ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_vs_abap_sql_abexa.htm). Database access not programmed well using ABAP SQL can often be optimized by improved use of ABAP SQL, making it unnecessary to use AMDP in these cases.

Bad Example

See the executable example [Currency Conversion with SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_curr_conv_abexa.htm). In this case, a specific built-in function of HANA SQL is used that was not generally available in ABAP SQL. Meanwhile, the function [currency\_conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_curr_unit_conv_func.htm) is available in ABAP SQL and can replace the usage of AMDP.


### abenclient_handling_guidl.htm

---
title: "Client Handling"
description: |
  Background A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables. When logging on to AS ABAP, this client ID must be e
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm"
abapFile: "abenclient_handling_guidl.htm"
keywords: ["select", "do", "if", "try", "data", "abenclient", "handling", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Client%20Handling%2C%20ABENCLIENT_HANDLING_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Client Handling

Background   

A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables.

When logging on to AS ABAP, this client ID must be entered. This selects the client whose data is processed by the user session. The current client is entered in the system field sy-mandt.

-   [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements work with implicit client handling, where the data of the current client is accessed by default. This is specified by passing an implicit condition for the current client to WHERE conditions, and ignoring clients specified in modifying statements in work areas. Implicit client handling in ABAP SQL can be switched to one more different clients by using the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) in queries or the additions [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm) or [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm) in write statements.
-   [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") and [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") do not apply implicit client handling. The client in question does not need to be selected explicitly when Native SQL or AMDP is used to access client-dependent database tables or views.

Rule   

Do not access the data of other clients

In the persistency services of business applications, access the data of the current client only.

Details   

Each client within the AS ABAP is to be viewed as a self-contained unit. The additions USING CLIENT and CLIENT SPECIFIED should not be used in ABAP SQL statements of business applications. When Native SQL or AMDP is used, only the current client should be selected.

The system field sy-mandt does not generally need to be evaluated, unless Native SQL or AMDP is used to access client-dependent database tables or views. The client ID is then needed to select the data of the current client explicitly.

Hints

-   Client-independent database tables (tables without client ID) are usually system tables. This means that client-independent access to these tables is also reserved for system programs.
-   The addition CLIENT SPECIFIED is fully [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) in queries and partially [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapud_client_obsolete.htm) in write statements.

Bad Example

The following source code demonstrates ABAP SQL access on application data where implicit client handling is switched to a different client.

SELECT SINGLE ...
       FROM scarr USING '...'
       WHERE ...             ...
       INTO ...

Good Example

The following source code demonstrates the recommended use of ABAP SQL where implicit client handling accesses the current client by default.

SELECT SINGLE ...
       FROM scarr
       WHERE ...
       INTO ...


### abenuse_shared_memory_guidl.htm

---
title: "Using the Shared Memory"
description: |
  Background The shared memory of an AS instance is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows: -   To buffer data from database tables implicitly using table buffering(https://help.sap.com/doc/ab
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_memory_guidl.htm"
abapFile: "abenuse_shared_memory_guidl.htm"
keywords: ["do", "if", "try", "method", "class", "data", "internal-table", "exception-handling", "abenuse", "shared", "memory", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20the%20Shared%20Memory%2C%20ABENUSE_SHARED_MEMORY_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using the Shared Memory

Background   

The shared memory of an AS instance is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows:

-   To buffer data from database tables implicitly using [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry"), which can be determined when defining the tables in ABAP Dictionary
-   To explicitly store data clusters in the cross-transaction application buffer using the statements EXPORT TO SHARED MEMORY or EXPORT TO SHARED BUFFER
-   To explicitly handle (data) objects stored there using shared objects, which are created using the addition AREA HANDLE of the statements CREATE OBJECT or CREATE DATA

Rule   

Implement the explicit buffering in the shared memory using shared objects

Work with shared objects to explicitly use the shared memory for cross-program data buffering. The appropriate application scenarios are shared buffer and exclusive buffer. The access to shared objects should be wrapped in loader and broker classes.

Details   

For explicit access to the shared memory, shared objects (CREATE AREA HANDLE) provide the following advantages compared to the cross-transaction application buffer (SHARED MEMORY, SHARED BUFFER):

-   Any number of (data) objects can be saved, including their mutual interdependencies.
-   (Data) objects can be used in the shared objects memory just like objects in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Technically, the shared objects memory can be considered an extension of the internal session during the time the memory is bound to it.
-   Multiple programs can access the same memory area simultaneously without having to copy data to their own internal session.

Scenarios in which shared objects can be used efficiently include the following:

-   Usage as a shared buffer
    
    A shared buffer contains a large data set on which many consumers can perform reads but which is changed rarely and is usually provided by a single program.
    
-   Usage as an exclusive buffer
    
    An exclusive buffer contains data that are accessed by only one program but that is maintained for various programs across transaction boundaries.
    

The shared memory should not be used for different purposes, if, for example this results in many modifying accesses of parallel consumers, since the current locking concept does not support this.

Access to the shared memory should be encapsulated in specific classes, and application programs should access the shared memory using these classes only. Normally, there are two classes, which can also be combined into one class:

-   A loader for creating and changing area instances
-   A broker for reads on area instances

Such wrapping ensures the following:

-   Central management of the connection of the internal session to the shared objects memory and the associated locks
-   Central exception handling and respective fallback strategies (for example, if the shared objects memory overflows, it is possible to ensure that objects in the internal session are used without the using program having to be notified of this).
-   Potential authorization checks

This makes the application program more legible, more robust, and easier to maintain.

Bad Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the cross-transaction application buffer, is imported to a program. To store it locally, a local data object is required. Tasks like these can be performed more efficiently by using shared objects.

"Get index page from data cluster
IMPORT index\_html = index\_html
       FROM SHARED MEMORY docutables(...) ID ...
ASSERT sy-subrc = 0.

Good Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the shared objects memory, can be accessed within program. By calling a get method, the corresponding broker ensures that its root attribute refers to a shared object that contains the table. A local data object is then not required to access the internal table in the program.

"Get index page from shared memory
cl\_docu\_tables\_broker=>get\_index\_table( ).
ASSERT cl\_docu\_tables\_broker=>root->index\_html
       IS NOT INITIAL.


### abenuse_shared_objects_guidl.htm

---
title: "Using Shared Objects"
description: |
  Background Access to shared objects(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated whe
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_objects_guidl.htm"
abapFile: "abenuse_shared_objects_guidl.htm"
keywords: ["do", "if", "case", "method", "class", "data", "abenuse", "shared", "objects", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchitecture_gdl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Shared%20Objects%2C%20ABENUSE_SHARED_OBJECTS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using Shared Objects

Background   

Access to [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when they are accessed using area handles.

Rule   

Shared buffer and exclusive buffer are suitable application scenarios for shared objects.

The access to shared objects should be wrapped in loader and broker classes.

Details   

How locks work depends on how shared objects are used as follows:

-   Scenario 1 - Use as a shared buffer
    
    A shared buffer is a data store that is rarely changed (once a day up to a maximum of once an hour), usually by a single consumer only. The amount of data can be very large. In general, many consumers can perform reads on a shared buffer at the same time. A typical use of a shared buffer is to store a catalog.
    
-   Scenario 2 - Use as an exclusive buffer
    
    An exclusive buffer is a data store where only one consumer performs reads or writes or, in rare cases, where one consumer performs writes and another performs reads. The data stored in an exclusive buffer should be available as long term data, that is longer than the lifetime of a program. A typical use of an exclusive buffer is to store a shopping basket that is filled initially by the shopper and then read by the salesperson later.
    

General shared memory programming is not possible. The current lock logic does not enable you to set specific locks for the following requirements:

-   Many parallel reads and writes
-   Frequent writes
-   Split into modifiable and non-modifiable areas

Although the lock logic makes the first two points technically possible, they are not practical because most accesses would be rejected.

Wrapping   

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_constructor_class.htm) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Central administration of an area in the shared memory
-   An application program does not need to worry about area handles and locks.
-   Central administration of locks
-   Option to implement central authorization checks
