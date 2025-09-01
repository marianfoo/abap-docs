---
title: "EXEC SQL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_sql_shortref.htm) Syntax EXEC SQL. ... ENDEXEC. Effect These statements define an area in an ABAP program in which one or more Native SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec.htm"
abapFile: "abapexec.htm"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "catch", "class", "data", "abapexec"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennativesql.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXEC SQL, ABAPEXEC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

EXEC SQL

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_sql_shortref.htm)

Syntax

EXEC SQL.
  ...
ENDEXEC.

Effect

These statements define an area in an ABAP program in which one or more [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") statements can be specified statically. The area between EXEC and ENDEXEC is not checked completely by the syntax check. The statements specified there are passed to the Native SQL interface and processed there as follows:

-   SQL statements that are valid for the addressed database system can be listed between EXEC and ENDEXEC, in particular the [DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_glosry.htm "Glossary Entry") statements. These SQL statements are passed from the Native SQL interface to the database system largely unchanged. The syntax rules are determined by the database system, in particular the case sensitivity rules for database objects. If the syntax allows a separator between individual statements, multiple Native SQL statements can be included between EXEC and ENDEXEC. Generally, the semicolon (;) is used as the separator.
-   SAP-specific Native SQL language elements can also be specified between EXEC and ENDEXEC. These statements are not passed directly from the Native SQL interface to the database, but are converted appropriately. These SAP-specific language elements are:
    -   [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_literal.htm)
    -   [Host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_host.htm)
    -   [INTO clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_into.htm)
    -   [Statements for cursor processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_cursor.htm)
    -   [Database procedure calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_procedure.htm)
    -   [Statements for establishing database connections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_connection.htm)

All Native SQL statements bypass [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry"), and no [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) is performed.

System Fields

The statement ENDEXEC sets the system fields sy-subrc and sy-dbcnt. When using the obsolete addition [PERFORMING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_implicit.htm), it should be noted that implicit cursor processing is carried out and the system fields are set for every read.

sy-subrc

Meaning

0

The statements between EXEC and ENDEXEC were executed successfully.

4

The statements between EXEC and ENDEXEC were not successful. After implicit cursor processing with PERFORMING, sy-subrc always contains the value 4.

The statement ENDEXEC sets sy-dbcnt to the number of table rows processed in the last Native SQL statement. After implicit cursor processing with PERFORMING, sy-dbcnt contains the total number of rows read. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Hints

-   Programs with Native SQL statements are generally dependent on the database system used and cannot be executed in all [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") systems. This is especially true for the examples in this section, which were tested on a [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"), unless otherwise stated.
-   If insertions or modifications using the Native SQL statements INSERT or UPDATE would produce duplicate rows with respect to the primary table key, no exception is raised. Instead, sy-subrc is set to 4. However, if another operation, such as executing a [Stored Procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstored_procedure_glosry.htm "Glossary Entry"), would produce a duplicate row, an exception would be raised.
-   The [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table or a view must be specified explicitly. It should be noted that application programs should only use data from the current client. See also the associated [security note](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_guidl.htm "Guideline").
-   When the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) is generally evaluated here. Only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm). Its current value is used here. On other platforms, unexpected behavior or program terminations may occur.
-   The obsolete addition [PERFORMING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_implicit.htm), which is not allowed in classes, executes implicit cursor processing and must no longer be used. The obsolete statement [EXIT FROM SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_sql.htm) can be used to exit this type of processing.
-   Native SQL statements used for transaction control (COMMIT and ROLLBACK) are detected by the database interface and the actions required at the end of a transaction are performed.
-   The static embedding of Native SQL statements between EXEC SQL and ENDEXEC is replaced by dynamic passes to objects from [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) classes. New features in the Native SQL interface are now developed only in ADBC. Only ADBC should be used in new programs.

Example

The following example demonstrates how an embedded Native SQL statement can be replaced by [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm). For single statements, the use of the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) removes the need for a helper variable of type CL\_SQL\_STATEMENT when creating objects.

"Embedded Native SQL
EXEC SQL.
  INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 )
ENDEXEC.
"ADBC
TRY.
    NEW cl\_sql\_statement( )->execute\_update(
          |INSERT INTO demo\_update VALUES( '{
           sy-mandt }', 'X', 1, 2, 3, 4 )| ).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Executable Example

[Static Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_NATIVE\_SQL\_ERROR

-   Cause: Error when making a secondary connection.
    Runtime error: DBIF\_DSQL2\_CONNECTERR
-   Cause: Illegal interruption of a database selection. The cursor was closed.
    Runtime error: DBIF\_DSQL2\_INVALID\_CURSOR:
-   Cause: There is insufficient memory available for a Native SQL statement.
    Runtime error: DBIF\_DSQL2\_NO\_MEMORY
-   Cause: Database object already exists in the database. An attempt was made to create a database object (for example, table, view, index) on the database, but this object already exists.
    Runtime error: DBIF\_DSQL2\_OBJ\_EXISTS
-   Cause: The name of a table or view that does not exist on the database was used.
    Runtime error: DBIF\_DSQL2\_OBJ\_UNKNOWN
-   Cause: An SQL error occurred while executing a native SQL statement.
    Runtime error: DBIF\_DSQL2\_SQL\_ERROR
-   Cause: The maximum number of secondary connections was exceeded.
    Runtime error: EXSQL\_CONNECTION\_LIMIT
-   Cause: The maximum number of database cursors was exceeded.
    Runtime error: EXSQL\_DSQL\_CURSOR\_LIMIT

Uncatchable Exceptions

-   Cause: The specified cursor does not exist. A CLOSE or SELECT statement in Native SQL has a specified cursor, but this cursor is unknown to cursor administration.
    Runtime error: EXSQL\_DSQL\_CURSOR\_NOT\_FOUND
-   Cause: The specified cursor is already open. An OPEN statement in Native SQL has a specified cursor, which the cursor administration knows is already open.
    Runtime error: EXSQL\_DSQL\_DUPLICATE\_CURSOR
-   Cause: There is insufficient roll memory available. When a Native SQL statement is processed, the internal memory is needed for preparing the SQL Call.
    Runtime error: EXSQL\_DSQL\_NOROLL
-   Cause: An indicator variable has an incorrect type. It must be the type INT2.
    Runtime error: EXSQL\_DSQL\_WRONG\_IVAR\_TYPE
-   Cause: The connection name has already been used for another connection. A CONNECT statement in Native SQL has a specified connection name, which is already used for another connection.
    Runtime error: EXSQL\_ILLEGAL\_CONNECTION
-   Cause: The connection DEFAULT was specified for a DISCONNECT statement in Native SQL. This connection cannot be terminated with DISCONNECT.
    Runtime error: EXSQL\_ILLEGAL\_DISCONNECTION
-   Cause: A Native SQL statement contains too many variables. In this context, variables means all ABAP fields preceded by a colon (":"). If the INTO clause has the form INTO :wa for a work area wa, then all the fields of wa also count as variables.
    Runtime error: EXSQL\_TOO\_MANY\_VARS
-   Cause: A SET CONNECTION or DISCONNECT statement in Native SQL has a specified connection that is unknown to the connection administration.
    Runtime error: EXSQL\_UNKNOWN\_CONNECTION
-   Cause: The target area specified in the INTO clause is not structured despite the assertion INTO STRUCTURE.
    Runtime error: EXSQL\_UNSTRUCTURED\_INTO
-   Cause: A LOB variable has the wrong type. LOB variables must have the type string, xstring, c, x, or n.
    Runtime error: EXSQL\_WRONG\_TYPE\_FOR\_LOB

Continue
[EXEC SQL - Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_literal.htm)
[EXEC SQL - Host Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_host.htm)
[EXEC SQL - INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_into.htm)
[EXEC SQL - OPEN, FETCH, CLOSE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_cursor.htm)
[EXEC SQL - EXECUTE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_procedure.htm)
[EXEC SQL - CONNECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_connection.htm)
[ENDEXEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendexec.htm)