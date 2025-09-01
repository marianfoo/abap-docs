  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access to Objects in HANA XS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_xsc_obsolete.htm) →  [Access to SAP HANA XSC Objects (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Procedure%20Proxy%20%28Obsolete%29%2C%20ABENDATABASE_PROCEDURE_PROXY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Database Procedure Proxy (Obsolete)

For each standalone [SQLScript procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), database procedure proxies can be created as [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). This makes it possible to address the database procedure in the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_database_procedure.htm). A database procedure proxy can be created as follows:

-   Using a tool in the ABAP perspective of the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). The SQLScript procedure must exist in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_repository_glosry.htm "Glossary Entry").
-   Using an API in the database procedure proxy library. This makes it possible to create and delete database procedure proxies for SQLScript procedures from any [database schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). The API is based on objects from the class CL\_DBPROC\_PROXY, accessed using the interface IF\_DBPROC\_PROXY\_PUBLIC\_API. A API of this type is created using the factory method GET\_PROXY\_PUBLIC\_API from the factory class CL\_DBPROC\_PROXY\_FACTORY. A further factory method GET\_PROXY\_QUERY\_API makes it possible to create another API, which is used to get information about SQLScript procedures and database procedure proxies.

The database procedure proxy defines the mapping between the database types of the parameter interface of the SQLScript procedure and ABAP data types. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

HANA Type

Meaning

Type in ABAP Dictionary

SMALLINT

2-byte integer

INT2

INTEGER

4-byte integer

INT4

BIGINT

8-byte integer

INT8

DECIMAL

Packed number

DEC

SMALLDECIMAL

Packed number

DEC

FLOAT

Binary floating point number

FLTP

NVARCHAR

Unicode character string

CHAR

VARBINARY

Byte string

RAW

BLOB

Byte string

RAWSTRING

NCLOB

Unicode character string

STRING

The mapping of HANA types DATE, TIME, and TIMESTAMP to dictionary types DATN, TIMN, and UTCLONG is not supported.

The default mapping can be overwritten, but this can also modify the parameter names. A [database procedure interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry") is generated for each database procedure proxy. Appropriate ABAP types are declared in this interface.

Hints

-   More specifically, database procedure proxies can be created for [SAP HANA XSC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsc_glosry.htm "Glossary Entry") SQLScript procedures in the SAP HANA Repository. No database procedure proxies can be used, on the other hand, for SQLScript procedures in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsa_glosry.htm "Glossary Entry"). Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) or [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry") must be used instead.
-   [SAP HANA XSC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry") and database procedure proxies cannot be used here.
-   In exceptional cases, the API of the database procedure proxy library can be used to access SQLScript procedures that are not managed in the SAP HANA Repository. The interfaces and classes from the database procedure proxy library are documented in the Class Builder. They are accessed most easily from the factory class CL\_DBPROC\_PROXY\_FACTORY.
-   If, when mapping parameter types between database types and ABAP types, a reference is made for the latter to data types of the ABAP Dictionary and such a dictionary type is modified at a later time, the database procedure proxy cannot be generated automatically. This can cause database inconsistencies. In cases like this, the database procedure proxy must be regenerated explicitly.
-   [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) (AMDP) do not need any database procedure proxies and can be used whenever SQLScript procedures are created only for calls from ABAP and the [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is an SAP HANA database. Any SQLScript procedure can be called from AMDP, which means they can replace database procedure proxies, except when a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is needed to access an SAP HANA database.
-   It is possible to create database procedure proxies for database procedures managed by [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm), but this is not a good idea.

Executable Example

The example [Database Procedure Call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_db_procedure_abexa.htm) uses a database procedure proxy created by the program to call a database procedure from the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") created using [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry").