---
title: "AMDP - Database Connections"
description: |
  An AMDP method(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_methods.htm) is always implemented on the standard database(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm 'Glossary Entry'). By default, the call is made using the standard
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_db_connections.htm"
abapFile: "abenamdp_db_connections.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abenamdp", "connections"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) → 

AMDP - Database Connections

An [AMDP method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_methods.htm) is always implemented on the [standard database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm "Glossary Entry"). By default, the call is made using the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"). An optional [service connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") can be specified for an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_methods.htm).

To specify the database connection explicitly, an input parameter (with the predefined name connection) can be declared for an AMDP procedure implementation. This parameter must be of type DBCON\_NAME. When the AMDP method is called, the following values can be passed to the parameter to specify the database connection:

-   When the initial value or the value "DEFAULT" is passed, the standard connection is used.

-   When a name "R/3\*name" is passed, which consists of the prefix "R/3\*" (uppercase characters) and a user-defined name "name" (case sensitive), a [service connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") of this name to the standard database is used. The names "R/3\*AMDP\_SYNC" and "R/3\*AMDP\_ADBC" are exceptions. They are used by the AMDP framework itself.

All other names raise an exception.

Hints

-   Detailed information about database connections can be found [here](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_multiconnect.htm).

-   The parameter connection cannot be used to implement the AMDP method.

-   The input parameter connection cannot be declared for an [AMDP function implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_methods.htm). This applies in particular to the parameter list of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   The parameter connection cannot be used to specify connections to databases other than the standard database.

-   [Service connections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the standard database are useful for performing operations in a [database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_transaction.htm), which does not depend on the LUW of the standard connection.

-   The statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_database_procedure.htm) or [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry") methods can be used to call database procedures on databases other than the standard database. This involves creating an object of the class [CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_sql_statement.htm) while passing an object of the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_sql_connection.htm) and using the method [EXECUTE\_PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_procedure.htm).

Executable Example

[AMDP Method with Specified Service Connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_connection_abexa.htm)