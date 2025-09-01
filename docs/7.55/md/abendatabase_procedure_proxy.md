---
title: "Database Procedure Proxy"
description: |
  For each standalone SQL Script procedure(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_procedure_glosry.htm 'Glossary Entry') in the SAP HANA database(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm 'Glossary Entry'), database p
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_procedure_proxy.htm"
abapFile: "abendatabase_procedure_proxy.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "types", "abendatabase", "procedure", "proxy"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script.htm) → 

Database Procedure Proxy

For each standalone [SQL Script procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") in the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"), database procedure proxies can be created as [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). This makes it possible to address the database procedure in the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_database_procedure.htm). A database procedure proxy can be created as follows:

-   Using a tool in the ABAP perspective of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"). The SQLScript procedure must exist in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_hana_repository_glosry.htm "Glossary Entry").

-   Using an API in the database procedure proxy library. This makes it possible to create and delete database procedure proxies for SQLScript procedures from any [database schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). The API is based on objects from the class CL\_DBPROC\_PROXY, accessed using the interface IF\_DBPROC\_PROXY\_PUBLIC\_API. A API of this type is created using the factory method GET\_PROXY\_PUBLIC\_API from the factory class CL\_DBPROC\_PROXY\_FACTORY. A further factory method, GET\_PROXY\_QUERY\_API, makes it possible to create another API, which is used to get information about SQL Script procedures and database procedure proxies.

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

The default mapping can be overwritten, but this also modifies the parameter names. A [database procedure interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_proc_intf_glosry.htm "Glossary Entry") is generated for each database procedure proxy. Appropriate ABAP types are declared in this interface.

Hints

-   More specifically, database procedure proxies can be created for [SAP HANA XSC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsc_glosry.htm "Glossary Entry") SQLScript procedures in the SAP HANA Repository. No database procedure proxies can be used, on the other hand, for SQLScript procedures in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsa_glosry.htm "Glossary Entry"). Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) or [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry") must be used instead.

-   In exceptional cases, the API of the database procedure proxy library can be used to access SQLScript procedures that are not managed in the SAP HANA Repository. The interfaces and classes from the database procedure proxy library are documented in Class Builder. They are accessed most easily from the factory class CL\_DBPROC\_PROXY\_FACTORY.

-   If, when mapping parameter types between database types and ABAP types, a reference is made for the latter to data types of ABAP Dictionary and the dictionary type in question is modified at a later time, the database procedure proxy cannot be generated automatically. This can cause database inconsistencies. In cases like this, the database procedure proxy must be generated again explicitly.

-   [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) (AMDP) do not need any database procedure proxies and can be used whenever SQL Script procedures are created only for calls from ABAP and the [standard database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the current AS ABAP is an SAP HANA database. Any SQL Script procedure can be called from AMDP, which means they can replace database procedure proxies (except when a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is needed to access an SAP HANA database).

-   It is possible to create database procedure proxies for database procedures managed by [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm), but this is not a good idea.

Executable Example

The example [Database Procedure Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_db_procedure_abexa.htm) uses a database procedure proxy created in the program to call a database procedure from the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") created using [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry").