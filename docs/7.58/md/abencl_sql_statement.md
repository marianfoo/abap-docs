---
title: "Hints"
description: |
  -   Exactly one SQL statement can be passed to each method of the class CL_SQL_STATEMENT to be executed. Passing multiple SQL statements separated by delimiters such as ; is not possible. -   The class CL_SQL_STATEMENT allows the statement passed to be executed once. The subclass CL_SQL_PREPA
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_statement.htm"
abapFile: "abencl_sql_statement.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abencl", "sql", "statement"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20CL_SQL_STATEMENT%2C%20ABENCL_SQL_STATEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - CL\_SQL\_STATEMENT

The class CL\_SQL\_STATEMENT contains instance methods that receive and execute dynamically created SQL statements.

Instances of the class CL\_SQL\_STATEMENT can be created using the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) or the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm), which allow a reference to an object of the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm) to be passed to the constructor. If no database connection is passed, the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") from the database interface to the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry") is used.

-   [ADBC - DDL and DML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_ddl_dml.htm)
-   [ADBC - Queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_query.htm)
-   [ADBC - Stored Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_procedure.htm)
-   [ADBC - All Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_execute.htm)

Hints

-   Exactly one SQL statement can be passed to each method of the class CL\_SQL\_STATEMENT to be executed. Passing multiple SQL statements separated by delimiters such as ; is not possible.
-   The class CL\_SQL\_STATEMENT allows the statement passed to be executed once. The subclass [CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_prepared_statement.htm) can be used to execute a statement multiple times with different parameters.
-   An object of the class CL\_SQL\_STATEMENT is often only intended to be used once, which means it is also only addressed once. In this case, the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) with appended method call can be used to create the instance. This removes the need to declare a reference variable explicitly.
-   The methods in the class CL\_SQL\_STATEMENT should not be used to execute transaction control statements (COMMIT, ROLLBACK) because they are not detected by the database interface, which then might not execute the actions required at the end of a transaction. Only the corresponding [methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_transaction.htm) in the class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm) can be used for transaction control.

Continue
[ADBC - DDL and DML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_ddl_dml.htm)
[ADBC - Queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_query.htm)
[ADBC - Stored Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_procedure.htm)
[ADBC - All Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_execute.htm)