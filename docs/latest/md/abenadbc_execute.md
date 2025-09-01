  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) →  [ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_statement.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20All%20Statements%2C%20ABENADBC_EXECUTE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - All Statements

The generic method EXECUTE of class CL\_SQL\_STATEMENT allows all SQL statements mentioned in the preceding topics to be executed.

Instead of the specific methods EXECUTE\_DDL, EXECUTE\_UPDATE, ... also method EXECUTE can be used.

Hint

The type of the return value of EXECUTE is a reference to CL\_SQL\_RESULT\_SET. EXECUTE can fully replace methods with a return value of the same type. Methods with a return value of another type can only replaced without problems, if the return value is not assigned to a data object. Otherwise, the method call must be appropriately adopted.

Example

Same as the example from [ADBC -DDL and DML Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_ddl_dml.htm) but with EXECUTE instead of EXECUTE\_UPDATE. The type of the return values differ but are not evaluated.

DELETE FROM demo\_update.
TRY.
    FINAL(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param\_struct( NEW demo\_update(
      client = sy-mandt id = 'X'
      col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
    sql->execute(
      \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ).
  CATCH cx\_sql\_exception INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
SELECT SINGLE \*
       FROM demo\_update
       WHERE id = 'X'
       INTO @FINAL(wa).
cl\_demo\_output=>display( wa ).

Example

Same as the example from [ADBC - Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_query.htm) but with EXECUTE instead of EXECUTE\_QUERY. The type of the return values are the same and can be evaluated in the same way.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 )
           ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ).
DATA result TYPE demo\_update.
TRY.
    FINAL(query) = NEW cl\_sql\_statement( )->execute(
       \`SELECT client, id, col1, col2, col3, col4 \` &&
       \`       FROM demo\_update \` &&
       \`       WHERE client = '\` && sy-mandt && \`' \`  ).
    query->set\_param\_struct( struct\_ref = REF #( result ) ).
    WHILE query->next( ) > 0.
      cl\_demo\_output=>write( result ).
    ENDWHILE.
    query->close( ).
  CATCH cx\_sql\_exception INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display( ).

Executable Example

[ADBC - Multiple Result Sets](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_multi_result_abexa.htm)