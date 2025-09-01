  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - CL\_SQL\_STATEMENT](javascript:call_link\('abencl_sql_statement.htm'\)) → 

ADBC - Queries

Queries can be executed using the following instance method from class CL\_SQL\_STATEMENT:

-   EXECUTE\_QUERY

The method has a mandatory input parameter STATEMENT of type string that must be passed to a SELECT statement with correct syntax. As with [DML statements](javascript:call_link\('abenadbc_ddl_dml.htm'\)), the method SET\_PARAM can be used to bind ABAP data objects to place holders ?.

As the result of a query, a reference to an object of the class CL\_SQL\_RESULT\_SET is returned in the return value RESULT\_SET. The methods of this object allow access to the results set of the query. To preserve the results set beyond the end of a database LUW, the input parameter HOLD\_CURSOR of the EXECUTE\_QUERY method can be filled with "X".

The class CL\_SQL\_RESULT\_SET of the result object provides the following instance methods for reading the results sets into ABAP data objects:

-   SET\_PARAM, NEXT, and CLOSE
    These methods provide access to individual rows and columns of the results set. Using SET\_PARAM, compatible ABAP data objects must be assigned to the columns from left to right by passing corresponding data references for each column to the method. NEXT is used to address the rows of the results set one after another. The return value is 1 if the row can be addressed and 0 if not. Reads are closed using CLOSE. If the parameter binding between two calls of NEXT is to be modified, the method CLEAR\_PARAMETERS must be called first.

-   SET\_PARAM\_STRUCT, NEXT, and CLOSE
    These methods provide access to individual rows of the results set. SET\_PARAM\_STRUCT must be used to assign a fully compatible ABAP structure to the rows of the results set by passing corresponding data references to the method. An internal table that specifies the names and order of the columns to be read can be passed to the parameter CORRESPONDING\_FIELDS. For the remaining methods, the same applies as to SET\_PARAM.

-   SET\_PARAM\_TABLE, NEXT\_PACKAGE, and CLOSE
    These methods provide access to multiple rows of the results set. SET\_PARAM\_TABLE must be used to assign a fully compatibly structured internal table to the rows of the results set by passing a corresponding data reference to the method. As with SET\_PARAM\_STRUCT, a CORRESPONDING\_FIELDS parameter is used to specify which columns are to be transported. Here, NEXT\_PACKAGE is used instead of NEXT. It reads at most the number of rows that are passed to the input parameter UPTO. If no value is passed to UPTO, all the rows are read. In each call of NEXT\_PACKAGE, the rows read are appended to the internal table without deleting the previous contents and the number of rows read is returned in the return value ROWS\_RET. The same applies when changing parameter bindings and to CLOSE as to SET\_PARAM.

Notes

-   A data reference to an indicator variable with the built-in type INT2 from ABAP Dictionary can be passed to the optional input parameter IND\_REF of the method SET\_PARAM. Here, the value -1 can be used to display whether a zero value existed on the database.

-   For security reasons, it is better to define the parameters of a query using the placeholder ? rather than chaining dynamic content. This is also a way of preventing [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry"). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions (using placeholders), the statement cannot be modified from outside.

-   In assignments between fields in database tables and ABAP data objects, a [mapping](javascript:call_link\('abennative_sql_type_mapping.htm'\)) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

-   The method EXECUTE\_QUERY can also be used to call [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry"). In databases that meet the requirements, internal tables, for example, can then be bound to the results set. This is not possible with the method [EXECUTE PROCEDURE](javascript:call_link\('abenadbc_procedure.htm'\)) (see the example under this method).

Example

Uses ADBC to read rows sequentially from a database table filled previously using ABAP SQL to a work area.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ).
DATA result TYPE demo\_update.
TRY.
    DATA(query) = NEW cl\_sql\_statement( )->execute\_query(
       \`SELECT client, id, col1, col2, col3, col4 \` &&
       \`       FROM demo\_update \` &&
       \`       WHERE client = '\` && sy-mandt && \`' \`  ).
    query->set\_param\_struct( struct\_ref = REF #( result ) ).
    WHILE query->next( ) > 0.
      cl\_demo\_output=>write( result ).
    ENDWHILE.
    query->close( ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display( ).

Example

Uses ADBC to read rows from to a database table filled previously with ABAP SQL to an internal table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ).
DATA result TYPE TABLE OF demo\_update WITH EMPTY KEY.
TRY.
    DATA(query) = NEW cl\_sql\_statement( )->execute\_query(
       \`SELECT client, id, col1, col2, col3, col4 \` &&
       \`       FROM demo\_update \` &&
       \`       WHERE client = '\` && sy-mandt && \`' \`  ).
    query->set\_param\_table( itab\_ref = REF #( result ) ).
    query->next\_package( ).
    query->close( ).
  CATCH cx\_sql\_exception INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display( result ).

Executable Examples

-   [ADBC, Query](javascript:call_link\('abenadbc_query_abexa.htm'\))

-   [ADBC, DDL, and DML](javascript:call_link\('abenadbc_dml_ddl_abexa.htm'\)), [ADBC, Parameter Binding](javascript:call_link\('abenadbc_dml_ddl_binding_abexa.htm'\)), [ADBC, Bulk Access](javascript:call_link\('abenadbc_dml_ddl_bulk_abexa.htm'\))

Further Example

The program ADBC\_QUERY allows interactive queries that are executed using ADBC to be entered.