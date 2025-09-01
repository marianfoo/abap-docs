# ABAP - Keyword Documentation / ABAP Programming Guidelines / Architecture / Data Storage

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abendata_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_guidl.htm)
- [abenpersistent_data_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_data_storage_guidl.htm)
- [abendatabase_access_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm)
- [abenclient_handling_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_guidl.htm)
- [abenuse_shared_memory_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_memory_guidl.htm)
- [abenuse_shared_objects_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_objects_guidl.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.376Z

---

### abendata_storage_guidl.htm

> **📖 Official SAP Documentation**: [abendata_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) → 

Data Storage

ABAP programs generally work with data imported from persistent memory media to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the current program execution. This data is then available to the program as transient data. For performance reasons, data can also be stored in the shared memory of the current application server. This shared memory is available to all programs of an application server. Access to data in the shared memory is faster than accessing data in persistent memory media by some magnitude.

-   [Persistent Data Storage](javascript:call_link\('abenpersistent_data_storage_guidl.htm'\) "Guideline")

-   [Database Accesses](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

-   [Client Handling](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline")

-   [Using Shared Memory](javascript:call_link\('abenuse_shared_memory_guidl.htm'\) "Guideline")

-   [Using Shared Objects](javascript:call_link\('abenuse_shared_objects_guidl.htm'\) "Guideline")

Continue
[Persistent Data Storage](javascript:call_link\('abenpersistent_data_storage_guidl.htm'\))
[Database Accesses](javascript:call_link\('abendatabase_access_guidl.htm'\))
[Client Handling](javascript:call_link\('abenclient_handling_guidl.htm'\))
[Using the Shared Memory](javascript:call_link\('abenuse_shared_memory_guidl.htm'\))
[Using Shared Objects](javascript:call_link\('abenuse_shared_objects_guidl.htm'\))



**📖 Source**: [abendata_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_guidl.htm)

### abenpersistent_data_storage_guidl.htm

> **📖 Official SAP Documentation**: [abenpersistent_data_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_data_storage_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_guidl.htm'\)) → 

Persistent Data Storage

Background

ABAP programs can have both read and write access to data in the following persistent storage media:

-   Relational database tables in databases

-   Data clusters in special database tables

-   Binary files or text files on the application server

-   Binary files or text files on the PC if SAP GUI is used

According to the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline"), such accesses are wrapped in service classes of the persistency layer of an application.

Rule

Plan persistent data storage carefully

Select with care the persistent storage media that are used by the application as well as the possible data transport routes between these media. Here is a general rule of thumb:

-   Database tables for the general storage of raw data

-   Data clusters for the storage of formatted data

-   Files for data exchange with external systems

Details

When you plan persistent data storage, you should follow these steps:

1.  On an AS ABAP, storing in relational database tables is always the first choice. ABAP supports this with the Open SQL that is integrated into the language. An object-oriented access is possible using Object Services. The majority of the data is stored in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the application server. [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") (managed using [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry")) can be used to access further databases.
2.  The following data can be stored in data clusters when using the EXPORT and IMPORT statements:
    \- Formatted data as the result of comprehensive analyses
    \- Data that is not suitable for relational databases because it does not exist in the first normal form (such as nested internal tables)
    \- Object networks after a serialization to XML
3.  The persistent storage of data in files of the application or presentation server is usually the least suitable for AS ABAP application programs because it is generally platform-dependent (code pages, byte order). In addition, such data is then only available on a particular application server, which can be problematic in a load distribution scenario with automated server selection. Such files may be required for the data exchange with external systems, however.

Under no circumstances should you use existing database tables (or files) to store data that are not provided for this purpose. Follow the convention of restricting reads and writes to database tables to specific packages. A database table must always be considered a semantic entity that is only allowed to contain the corresponding data. This even applies if a table with the required structure already exists. If in doubt, you should create a specific database table.

You must also be careful when using seemingly cross-system resources, such as the predefined INDX database table, to store data clusters. Such a resource must only be used to store temporary data for the short term, if at all. You should create specific database tables, for example, [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry"), for application-specific and longer-lasting data.



**📖 Source**: [abenpersistent_data_storage_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_data_storage_guidl.htm)

### abendatabase_access_guidl.htm

> **📖 Official SAP Documentation**: [abendatabase_access_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_guidl.htm'\)) → 

Database Accesses

Background

In ABAP, data in database tables can be accessed in the following ways:

-   Open SQL
    Implemented by ABAP statements, this is a subset of the Structured Query Language (SQL) comprising the DML (Data Manipulation Language) part. The Open SQL statements use the Open SQL interface for platform-independent access to those database tables in the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary and having instances created in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").

-   Native SQL
    Database-specific SQL statements that include both DML and DDL (Data Definition Language) statements and which can be passed to the Native SQL interface of the database as follows:

-   The methods of [ADBC](javascript:call_link\('abenadbc.htm'\)) make it possible to execute dynamic SQL statements on a database system and process the results. ADBC (ABAP Database Connectivity), a class-based API that enables object-oriented access to the Native SQL interface.

-   Native SQL statements can be specified in ABAP programs between the statements [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)). Static Native SQL statements of this kind are not checked completely by the syntax check and are forwarded almost unchanged from the Native SQL interface to the database of an AS ABAP.

-   The [AMDP framework](javascript:call_link\('abenamdp.htm'\)) is used to manage and call ABAP Managed Database Procedures. These are stored procedures or database procedures implemented as AMDP procedures in an AMDP method of an AMDP class and replicated to the database system from here.

Alongside access to the ABAP database schema of the standard AS ABAP database, all access types (except for AMDP) also allow access to other databases and other database schemas using additional [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

Rule

Use Open SQL

Use Open SQL for general persistence services where possible. Only use Native SQL and AMDP for tasks where Open SQL is not suitable.

Details

Only Open SQL is guaranteed to be independent of the database platform used. For this reason, Open SQL does not contain the set of all possible SQL statements in a specific database, but only a subset of the DML scope of all database systems supported by AS ABAP. The database tables that can be processed using Open SQL can be used in ABAP directly as structured types for the declaration of suitable work areas. Only Open SQL supports [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") of table content in the [shared memory](javascript:call_link\('abenuse_shared_memory_guidl.htm'\) "Guideline").

Native SQL and AMDP should only be used if the task really cannot be solved using Open SQL. Services that work with Native SQL are generally dependent on the database system used, so that they cannot be executed in all AS ABAP systems. For platform-independent services, implementations should be provided for all supported databases.

If the database is accessed using the Native SQL interface instead of the Open SQL interface, [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") should be used.

-   ADBC is a modern object-oriented API that is better suited to modern ABAP programming than [EXEC SQL](javascript:call_link\('abapexec.htm'\)). Enhancements to the Native SQL interface, such as bulk access using internal tables, are now only provided using ADBC. ADBC also enables [dynamic access](javascript:call_link\('abendynamic_prog_technique_guidl.htm'\) "Guideline"); Native SQL on the other hand is just static. Newer SQL statements, such as WITH for common table expressions (CTEs), are not supported in full by EXEC SQL.

-   AMDP, currently only available for a SAP HANA database as the standard AS ABAP database, is recommended for all tasks that swap out code from ABAP programs to this SAP HANA database for performance reasons.

Notes

-   The rule dictating that Open SQL is to be used for as long as possible applies in particular to [AMDP](javascript:call_link\('abenamdp.htm'\)) too. It is not a good idea to swap out SQL statements to database procedures if these could be implemented using Open SQL or [ABAP CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") too. In this case, no performance gains can be expected since the Open SQL statements are updated to Native SQL by the database interface in exactly the same way as they would be written in the database procedure. Using AMDP is a good idea only if HANA-specific properties can be exploited by procedure calls or if repeated transports of large amounts of data between the database and the application server can be bypassed.

-   It is [not advisable](javascript:call_link\('abendatabase_access_recomm.htm'\)) to access ABAP-managed database objects if the access does not take place in ABAP programs.

Bad Example

See the executable example [AMDP, Comparison with Open SQL](javascript:call_link\('abenamdp_vs_open_sql_abexa.htm'\)). Database access not programmed well using Open SQL can often be optimized by improved use of Open SQL, making it unnecessary to use AMDP in these cases.

Good Example

See the executable example [Currency Conversion with SQL Script](javascript:call_link\('abensql_script_curr_conv_abexa.htm'\)). In this case, a specific operator of the language [SQL Script](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") is used that is not usually available.



**📖 Source**: [abendatabase_access_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm)

### abenclient_handling_guidl.htm

> **📖 Official SAP Documentation**: [abenclient_handling_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_guidl.htm'\)) → 

Client Handling

Background

A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables.

When logging on to AS ABAP, this client ID must be entered. This selects the client whose data is processed by the user session. The current client is entered in the system field sy-mandt.

-   [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements support automatic client handling by default, where the data of the current client is accessed by default. This is specified by passing an implicit condition for the current client to WHERE conditions, and ignoring clients specified in modifying statements in work areas. Automatic client handling in Open SQL can be switched to a different client using the addition USING CLIENT or switched off using the addition CLIENT SPECIFIED.

-   [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [ADBC](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") do not implement automatic client handling. The client in question does not need to be selected explicitly when Native SQL or AMDP is used to access client-specific database tables or views.

Rule

Do not access the data of other clients

In the persistency services of business applications, access the data of the current client only.

Details

Each client within the application server is to be viewed as a self-contained unit. The additions USING CLIENT and CLIENT SPECIFIED should not be used in Open SQL statements of business applications. When Native SQL or AMDP is used, only the current client should be selected.

The system field sy-mandt does not generally need to be evaluated, unless Native SQL or AMDP is used to access client-specific database tables or views. The client ID is then needed to select the data of the current client explicitly.

Notes

-   Cross-client database tables (tables without client ID) are usually system tables. This means that cross-client access to these tables is also reserved for system programs.

-   If Open SQL has to be used to access data in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is more simple.

Bad Example

The following source code shows an Open SQL access to a database table where the current client is specified explicitly. This makes a further explicit WHERE condition necessary. The system field sy-mandt cannot be specified directly when using the addition USING CLIENT.

SELECT SINGLE ...
       FROM dbtab CLIENT SPECIFIED
       WHERE mandt = @sy-mandt AND
             ...
       INTO ...

Good Example

The following source code shows how Open SQL is generally used for implicit automatic client handling.

SELECT SINGLE ...
       FROM dbtab
       WHERE ...
       INTO ...



**📖 Source**: [abenclient_handling_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_guidl.htm)

### abenuse_shared_memory_guidl.htm

> **📖 Official SAP Documentation**: [abenuse_shared_memory_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_memory_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_guidl.htm'\)) → 

Using the Shared Memory

Background

The shared memory of an application server is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows:

-   To buffer data from database tables implicitly using [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"), which can be determined when defining the tables in ABAP Dictionary

-   To explicitly store data clusters in the cross-transaction application buffer using the statements EXPORT TO SHARED MEMORY or EXPORT TO SHARED BUFFER

-   To explicitly handle (data) objects stored there using shared objects, which are created using the addition AREA HANDLE of the statements CREATE OBJECT or CREATE DATA

Rule

Implement the explicit buffering in the shared memory using shared objects

Work with shared objects to explicitly use the shared memory for cross-program data buffering. The appropriate application scenarios are shared buffer and exclusive buffer. The access to shared objects should be wrapped in loader and broker classes.

Details

For explicit access to the shared memory, shared objects (CREATE AREA HANDLE) provide the following advantages compared to the cross-transaction application buffer (SHARED MEMORY, SHARED BUFFER):

-   Any number of (data) objects can be saved, including their mutual interdependencies.

-   (Data) objects can be used in the shared objects memory just like objects in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). Technically, the shared objects memory can be considered an extension of the internal session during the time the memory is bound to it.

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

-   Central management of the internal session’s connection to the shared objects memory and the associated locks

-   Central exception handling and respective fallback strategies (for example, if the shared object’s memory overflows, it is possible to ensure that objects in the internal session are used without the using program having to be notified of this).

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



**📖 Source**: [abenuse_shared_memory_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_memory_guidl.htm)

### abenuse_shared_objects_guidl.htm

> **📖 Official SAP Documentation**: [abenuse_shared_objects_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_objects_guidl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenuse_shared_objects_guidl.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_objects_guidl.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_guidl.htm'\)) → 

Using Shared Objects

Background

Access to [shared objects](javascript:call_link\('abenabap_shared_objects.htm'\)) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when they are accessed using area handles.

Rule

Shared buffer and exclusive buffer are suitable application scenarios for shared objects.

The access to shared objects should be wrapped in loader and broker classes.

Details

How locks work depends on how shared objects are used as follows:

-   Scenario 1 - Use as a shared buffer

A shared buffer is a data store that is rarely changed (once a day up to a maximum of once an hour), usually by a single consumer only. The amount of data can be very large. In general, many consumers can perform reads on a shared buffer at the same time. A typical use of a shared buffer is to store a catalog.

-   Scenario 2 - Use as an exclusive buffer

An exclusive buffer is a data store where only one consumer performs reads or writes or, in rare cases, where one consumer performs writes and another performs reads. The data stored in an exclusive buffer should be available longer term, that is, longer than a program’s lifetime. A typical use of an exclusive buffer is to store a shopping basket that is filled initially by the shopper and then read by the salesperson later.

General shared memory programming is not possible. The current lock logic does not enable you to set specific locks for the following requirements:

-   Many parallel reads and writes

-   Frequent writes

-   Split into modifiable and non-modifiable areas

Although the lock logic makes the first two points technically possible, they are not practical because most accesses would be rejected.

Wrapping

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Central administration of an area in the shared memory

-   An application program does not need to worry about area handles and locks.

-   Central administration of locks

-   Option to implement central authorization checks
