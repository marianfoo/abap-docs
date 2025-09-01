---
title: "ADBC - DDL and DML Statements"
description: |
  The CL_SQL_STATEMENT class provides the following instance methods for executing DDL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_glosry.htm 'Glossary Entry') and DML(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendml_glosry.htm 'Glossary Entry') statement
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_ddl_dml.htm"
abapFile: "abenadbc_ddl_dml.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenadbc", "ddl", "dml"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc.htm) →  [ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_sql_statement.htm) → 

ADBC - DDL and DML Statements

The CL\_SQL\_STATEMENT class provides the following instance methods for executing [DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_glosry.htm "Glossary Entry") and [DML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendml_glosry.htm "Glossary Entry") statements

-   EXECUTE\_DDL

-   EXECUTE\_UPDATE

The first method is for DDL statements such as CREATE, DROP, or ALTER, whereas the second method is for the DML statements INSERT, UPDATE, and DELETE.

Both methods have a mandatory input parameter STATEMENT of type string that must be passed to an SQL statement with correct syntax. The method EXECUTE\_UPDATE also has a return value, ROWS\_PROCESSED, that returns the number of table rows processed.

In DML statements values that are passed to the database system can be parameterized using the placeholder ?. When the statement is executed, compatible ABAP Objects must be bound to these parameters. This binding is made using the following methods of the class CL\_SQL\_STATEMENT, which expect a reference to an elementary, structured, or table-like data object and can be used as an alternative:

-   SET\_PARAM

Before the SQL statement is executed, this method must be called exactly once for each placeholder ?. The order of the calls determines the assignment of the elementary data objects to the placeholders from left to right.

-   SET\_PARAM\_STRUCT

Before the SQL statement is executed, this method must be called exactly once. The components of the structure are bound to the placeholders from left to right. The structure must contain appropriate components for the number and type of the placeholders.

-   SET\_PARAM\_TABLE

This method is appropriate only for the modifying SQL statements INSERT, UPDATE, and DELETE. It must be called exactly once before the SQL statement is executed. As with a structure, the components of the internal table are bound to the placeholders from left to right. The Native SQL interface converts the content of the table rows to appropriate bulk accesses, such as bulk inserts or bulk deletes.

After all SQL statements are executed, the binding is removed.

Notes

-   The two methods EXECUTE\_DDL and EXECUTE\_UPDATE are technically different only in that EXECUTE\_UPDATE returns the number of rows processed. However, for reasons of readability of the program it is advisable to only use the methods as intended.

-   A data reference to an indicator variable of the built-in type INT2 in ABAP Dictionary can be passed to the optional input parameter IND\_REF of the method SET\_PARAM. If the value of this indicator variable is -1, the value 0 of a parameter on the database is converted to a null value.

-   For security reasons, it is better to define the parameters of a DML statement using the placeholder ? rather than chaining dynamic content. This is also a way of preventing [SQL injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm "Glossary Entry"). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions (using placeholders), the statement cannot be modified from outside.

-   In assignments between ABAP data objects and fields in database tables, a [mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_type_mapping.htm) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Example

Inserts a row in a database table with ADBC. The tables are first emptied using ABAP SQL and then read using ABAP SQL. The values of the columns are determined by binding the components of a temporary structure (created using instance operator [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm)) to ? placeholders.

DELETE FROM demo\_update.
TRY.
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param\_struct( NEW demo\_update(
      client = sy-mandt id = 'X'
      col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
    sql->execute\_update(
      \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
SELECT SINGLE \*
       FROM demo\_update
       WHERE id = 'X'
       INTO @DATA(wa).
cl\_demo\_output=>display( wa ).

Executable Examples

-   [ADBC, DDL, and DML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_dml_ddl_abexa.htm)

-   [ADBC, Parameter Binding](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_dml_ddl_binding_abexa.htm)

-   [ADBC, Bulk Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_dml_ddl_bulk_abexa.htm)