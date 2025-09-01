---
title: "Notes"
description: |
  -   Exactly one SQL statement can be passed to each method of class CL_SQL_STATEMENT for execution. Passing multiple SQL statements separated by delimiters such as ; is not possible. -   The CL_SQL_STATEMENT class allows the statement passed to be executed once. To execute a statement multiple t
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_statement.htm"
abapFile: "abencl_sql_statement.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abencl", "sql", "statement"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) → 

ADBC - CL\_SQL\_STATEMENT

The CL\_SQL\_STATEMENT class contains instance methods that receive and execute dynamically created SQL statements.

Instances of the CL\_SQL\_STATEMENT class can be created using the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm) or the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm), which allow a reference to an object of the [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_connection.htm) class to be passed to the constructor. If no database connection is passed, the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") from the database interface to the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry") is used.

-   [DDL and DML Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_ddl_dml.htm)

-   [Queries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_query.htm)

-   [Stored Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_procedure.htm)

Notes

-   Exactly one SQL statement can be passed to each method of class CL\_SQL\_STATEMENT for execution. Passing multiple SQL statements separated by delimiters such as ; is not possible.

-   The CL\_SQL\_STATEMENT class allows the statement passed to be executed once. To execute a statement multiple times with different parameters, you can use the subclass [CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_prepared_statement.htm).

-   An object of the class CL\_SQL\_STATEMENT is often only intended to be used once, which means it is also only addressed once. In this case, the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) with appended method call can be used to create the instance. This removes the need to declare a reference variable explicitly.

-   The methods in the class CL\_SQL\_STATEMENT should not be used to execute transaction-control statements (COMMIT, ROLLBACK). This is because they are not detected by the database interface, which then might not execute the actions required at the end of a transaction. Only the appropriate [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_transaction.htm) in the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_connection.htm) can be used for transaction control.

Continue
[ADBC - DDL and DML Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_ddl_dml.htm)
[ADBC - Queries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_query.htm)
[ADBC - Stored Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_procedure.htm)