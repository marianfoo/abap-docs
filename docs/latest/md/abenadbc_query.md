  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) →  [ADBC - CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_statement.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Queries%2C%20ABENADBC_QUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Queries

Queries can be executed using the following instance method from class CL\_SQL\_STATEMENT:

-   EXECUTE\_QUERY

The method has a mandatory input parameter STATEMENT of type string, to which a syntactically correct SELECT statement must be passed. As with [DML statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_ddl_dml.htm), the method SET\_PARAM can be used to bind ABAP data objects to place holders ?.

As the result of a query, a reference to an object of the class CL\_SQL\_RESULT\_SET is returned in the return value RESULT\_SET. The methods of this object allow access to the result set of the query. To preserve the result set beyond the end of a database LUW, the input parameter HOLD\_CURSOR of the method EXECUTE\_QUERY can be filled with X.

The class CL\_SQL\_RESULT\_SET of the result object provides the following instance methods for reading a result set into ABAP data objects:

-   SET\_PARAM, NEXT, and CLOSE
    
    These methods provide access to individual rows and columns of the result set. SET\_PARAM must be used to assign compatible ABAP data objects to the columns from left to right by passing corresponding data references for each column to this method. NEXT is used to address the rows of the result set one after another. The return value is 1 if the row can be addressed and 0 if not. Reads are closed using CLOSE. If the parameter binding between two calls of NEXT is to be modified, the method CLEAR\_PARAMETERS must be called first.
    
-   SET\_PARAM\_STRUCT, NEXT, and CLOSE
    
    These methods provide access to individual rows of the result set. SET\_PARAM\_STRUCT must be used to assign a fully compatible ABAP structure to the rows of the result set by passing corresponding data references to the method. An internal table that specifies the names and order of the columns to be read can be passed to the parameter CORRESPONDING\_FIELDS. For the remaining methods, the same applies as to SET\_PARAM.
    
-   SET\_PARAM\_TABLE, NEXT\_PACKAGE, and CLOSE
    
    These methods provide access to multiple rows of the result set. SET\_PARAM\_TABLE must be used to assign a fully compatibly structured internal table to the rows of the result set by passing a corresponding data reference to the method. As with SET\_PARAM\_STRUCT, a CORRESPONDING\_FIELDS parameter is used to specify which columns are to be transported. Here, NEXT\_PACKAGE is used instead of NEXT and reads at most the number of rows that are passed to the input parameter UPTO. If no value is passed to UPTO, all rows are read. In each call of NEXT\_PACKAGE, the rows read are appended to the internal table without deleting the previous content and the number of rows read is returned in the return value ROWS\_RET. The same applies when changing parameter bindings and to CLOSE as to SET\_PARAM.
    

If a query returns more than one result set, the above methods by default access the first result set and the method NEXT\_RESULT\_SET can be used to switch to the following result set. For each result set, the above SET\_... methods must be used again in order to attach an ABAP data object.

Hints

-   A data reference to an indicator variable with the built-in type INT2 from the ABAP Dictionary can be passed to the optional input parameter IND\_REF of the method SET\_PARAM. In this data reference, the value -1 indicates whether a null value existed on the database.
-   For security reasons, it is better parameterize a query using the placeholder ? rather than concatenating dynamic content. This is also a way of preventing [SQL injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm "Glossary Entry"). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions using placeholders and the statement cannot be modified from outside.
-   In assignments between fields in database tables and ABAP data objects, a [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_type_mapping.htm) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.
-   The method EXECUTE\_QUERY can also be used to call [stored procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstored_procedure_glosry.htm "Glossary Entry"). In databases that meet the requirements, internal tables, for example, can then be bound to the result set. This is not possible with the method [EXECUTE PROCEDURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_procedure.htm) (see the example under this method).
-   The generic method EXECUTE also has a return value of type CL\_SQL\_RESULT\_SET and can be used equally to EXECUTE\_QUERY.
-   Multiple results can occur e.g. when calling database procedures with more than one output parameters.

Example

Use of ADBC to read rows sequentially from a database table filled previously using ABAP SQL to a work area.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 )
           ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ).
DATA result TYPE demo\_update.
TRY.
    FINAL(query) = NEW cl\_sql\_statement( )->execute\_query(
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

Example

Use of ADBC to read rows from to a database table filled previously with ABAP SQL to an internal table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 )
           ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ).
DATA result TYPE TABLE OF demo\_update WITH EMPTY KEY.
TRY.
    FINAL(query) = NEW cl\_sql\_statement( )->execute\_query(
       \`SELECT client, id, col1, col2, col3, col4 \` &&
       \`       FROM demo\_update \` &&
       \`       WHERE client = '\` && sy-mandt && \`' \`  ).
    query->set\_param\_table( itab\_ref = REF #( result ) ).
    query->next\_package( ).
    query->close( ).
  CATCH cx\_sql\_exception INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display( result ).

Executable Examples

-   [ADBC - Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_query_abexa.htm)
-   [ADBC - DDL, and DML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_dml_ddl_abexa.htm), [ADBC - Parameter Binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_dml_ddl_binding_abexa.htm), [ADBC - Bulk Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_dml_ddl_bulk_abexa.htm)
-   [ADBC - Multiple Result Sets](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_multi_result_abexa.htm)

Example

The program ADBC\_QUERY allows interactive queries that are executed using ADBC to be entered.