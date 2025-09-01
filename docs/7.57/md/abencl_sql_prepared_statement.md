  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADBC - CL_SQL_PREPARED_STATEMENT, ABENCL_SQL_PREPARED_STATEMENT, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ADBC - CL\_SQL\_PREPARED\_STATEMENT

The class CL\_SQL\_PREPARED\_STATEMENT is a subclass of [CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_sql_statement.htm). It makes it possible to execute a SQL statement passed to it multiple times with different parameters.

For this purpose, the instance constructor contains a mandatory input parameter STATEMENT of type string, to which a syntactically correct SQL statement must be passed. The SQL statement can contain placeholder ?, as is the case with the methods of CL\_SQL\_STATEMENT.

Using the methods inherited from CL\_SQL\_STATEMENT, the placeholders can be linked to parameters and the instantiated SQL statement can be executed. In doing so, the SQL statement is not passed to the corresponding method.

After the work process has been switched (see [implicit database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm)), a prepared statement can no longer be used.

If a prepared statement is no longer needed, it should be closed using instance method close so that all resources that are needed in the database are released.

Hints

-   Unlike in JDBC, the use of ? placeholders in ADBC is not restricted to prepared statements. In ADBC, the use of prepared statements is not a prerequisite for using placeholders to prevent [SQL injections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_injection_glosry.htm "Glossary Entry"). Prepared statements are used only to improve performance in ADBC.
-   As with CL\_SQL\_STATEMENT, CL\_SQL\_PREPARED\_STATEMENT should not be used to execute transaction control statements.

Example

Insertion of multiple rows in a database table using a prepared statement in ADBC. The table is first emptied using ABAP SQL and then read using ABAP SQL. The values of the columns are determined by binding the components of temporary structures created using [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) to ? placeholders.

DELETE FROM demo\_update.
TRY.
    FINAL(sql) = NEW cl\_sql\_prepared\_statement(
      \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ).
    sql->set\_param\_struct( NEW demo\_update(
      client = sy-mandt id = 'X'
      col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
    sql->execute\_update( ).
    sql->set\_param\_struct( NEW demo\_update(
      client = sy-mandt id = 'Y'
      col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ).
    sql->execute\_update( ).
    sql->close( ).
  CATCH cx\_sql\_exception INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
SELECT \*
       FROM demo\_update
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[ADBC, Prepared Statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc_sql_prepared_abexa.htm)