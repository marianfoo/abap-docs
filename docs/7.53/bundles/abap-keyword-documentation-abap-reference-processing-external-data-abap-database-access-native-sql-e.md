# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP Database Access / Native SQL / EXEC SQL - Embedded Native SQL

Included pages: 14


### abennativesql.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) → 

EXEC SQL - Embedded Native SQL

The following ABAP statements are used to embed [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statically in ABAP programs:

[EXEC SQL](javascript:call_link\('abapexec.htm'\))
  ...
[ENDEXEC](javascript:call_link\('abapendexec.htm'\))

Native SQL statements embedded between EXEC SQL and ENDEXEC do not fall within the scope of ABAP and do not follow ABAP syntax. Mainly, database-specific [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements can be embedded that are passed unchanged from the Native SQL interface to a database system, and executed there. Almost the full SQL language scope of the relevant database can be used and the addressed database tables do not have to be declared in ABAP Dictionary. In addition, a small set of SAP-specific Native SQL statements and additions are available that can only be specified between EXEC SQL and ENDEXEC and that are subject to special handling by the Native SQL interface.

Programming Guideline

[Using ABAP SQL](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Note

If Native SQL is used instead of ABAP SQL, the use of [ADBC](javascript:call_link\('abenadbc.htm'\)) is recommended.

Continue
[EXEC SQL](javascript:call_link\('abapexec.htm'\))
[EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\))


### abapexec.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) → 

EXEC SQL

[Quick Reference](javascript:call_link\('abapexec_sql_shortref.htm'\))

Syntax

EXEC SQL.
  ...
ENDEXEC.

Effect

These statements define an area in an ABAP program in which one or more [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be specified statically. The area between EXEC and ENDEXEC is not checked completely by the syntax check. The statements entered there are passed to the Native SQL interface and processed there as follows:

-   SQL statements that are valid for the addressed database system can be included between EXEC and ENDEXEC, in particular the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statements. These SQL statements are passed from the Native SQL interface to the database system largely unchanged. The syntax rules are specified by the database system, in particular the case sensitivity rules for database objects. If the syntax allows a separator character between individual statements, multiple Native SQL statements can be included between EXEC and ENDEXEC. Generally, the semicolon (;) is used as the separator character.
    
-   SAP-specific Native SQL language elements can also be included between EXEC and ENDEXEC. These statements are not passed directly from the Native SQL interface to the database, but are converted appropriately. These SAP-specific language elements are:
    

-   [Literals](javascript:call_link\('abapexec_literal.htm'\))

-   [Host variables](javascript:call_link\('abapexec_host.htm'\))

-   [INTO clause](javascript:call_link\('abapexec_into.htm'\))

-   [Statements for cursor processing](javascript:call_link\('abapexec_cursor.htm'\))

-   [Database procedure calls](javascript:call_link\('abapexec_procedure.htm'\))

-   [Statements for establishing database connections](javascript:call_link\('abapexec_connection.htm'\))

All Native SQL statements bypass [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"). Automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is not performed.

System Fields

The statement ENDEXEC sets the system fields sy-subrc and sy-dbcnt. When using the obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)), note that implicit cursor processing is carried out and the system fields are set for every read.

sy-subrc

Meaning

0

The statements between EXEC and ENDEXEC were executed successfully.

4

The statements between EXEC and ENDEXEC were not successful. After implicit cursor processing with PERFORMING, sy-subrc always contains the value 4.

The statement ENDEXEC sets sy-dbcnt to the number of table rows processed in the last Native SQL statement. After implicit cursor processing with PERFORMING, sy-dbcnt contains the total number of rows read. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Notes

-   Programs with Native SQL statements are generally dependent on the database system used, so that they cannot be executed in all [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") systems. This is especially true for the examples in this section, which were tested on a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") (unless otherwise stated).
    
-   If insertions or modifications using the Native SQL statements INSERT or UPDATE would produce duplicate rows with respect to the primary table key, no exception is raised. Instead, sy-subrc is set to 4. However, if another operation, such as executing a [Stored Procedure](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry"), would produce a duplicate row, an exception would be raised.
    
-   The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table or a view must be specified explicitly. Note that application programs should only use data from the current client. See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    

-   When the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [client-specific](javascript:call_link\('abencds_client_handling.htm'\)) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) is generally evaluated here. Only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). Its current value is used here. On other platforms, there can be unexpected behavior or the program may crash.
    

-   The obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)) (not allowed in classes) executes implicit cursor processing and must no longer be used. The obsolete statement [EXIT FROM SQL](javascript:call_link\('abapexit_sql.htm'\)) can be used to exit this type of processing.
    
-   Native SQL statements used for transaction control (COMMIT and ROLLBACK) are detected by the database interface and the actions required at the end of a transaction are performed.
    
-   The static embedding of Native SQL statements between EXEC SQL and ENDEXEC is replaced by dynamic passes to objects from [ADBC](javascript:call_link\('abenadbc.htm'\)) classes. New features in the Native SQL interface are now developed only in ADBC. Only ADBC should be used in new programs.
    

Example

The following example demonstrates how an embedded Native SQL statement can be replaced by [ADBC](javascript:call_link\('abenadbc.htm'\)). For single statements, the use of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) removes the need for a helper variable of type CL\_SQL\_STATEMENT when creating objects.

"Embedded Native SQL
EXEC SQL.
  INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 )
ENDEXEC.
"ADBC
NEW cl\_sql\_statement( )->execute\_update(
  |INSERT INTO demo\_update VALUES( '{ sy-mandt }', 'X', 1, 2, 3, 4 )| ).

Executable Example

[Static Native SQL](javascript:call_link\('abennative_sql_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

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
    
-   Cause: An SQL error occurred while executing a native SQL command.
    Runtime error: DBIF\_DSQL2\_SQL\_ERROR
    
-   Cause: The maximum number of secondary connections was exceeded.
    Runtime error: EXSQL\_CONNECTION\_LIMIT
    
-   Cause: The maximum number of database cursors was exceeded.
    Runtime error: EXSQL\_DSQL\_CURSOR\_LIMIT
    

Non-Handleable Exceptions

-   Cause: The specified cursor does not exist. A CLOSE or SELECT command in Native SQL has a specified cursor, but this cursor is unknown to cursor administration.
    Runtime error: EXSQL\_DSQL\_CURSOR\_NOT\_FOUND
    
-   Cause: The specified cursor is already open. An OPEN command in Native SQL has a specified cursor, which the cursor administration knows is already open.
    Runtime error: EXSQL\_DSQL\_DUPLICATE\_CURSOR
    
-   Cause: There is insufficient roll memory available. When a Native SQL statement is processed, the internal memory is required to prepare the SQL Call.
    Runtime error: EXSQL\_DSQL\_NOROLL
    
-   Cause: An indicator variable has an incorrect type. It must be the type INT2.
    Runtime error: EXSQL\_DSQL\_WRONG\_IVAR\_TYPE
    
-   Cause: The connection name has already been used for another connection. A CONNECT command in Native SQL has a specified connection name, which is already used for another connection.
    Runtime error: EXSQL\_ILLEGAL\_CONNECTION
    
-   Cause: The connection "DEFAULT" was specified for a DISCONNECT command in Native SQL. This connection cannot be terminated with DISCONNECT.
    Runtime error: EXSQL\_ILLEGAL\_DISCONNECTION
    
-   Cause: A Native SQL command contains too many variables. In this context, variables means all ABAP fields preceded by a colon (":"). If the INTO clause has the form INTO :wa for a work area wa, then all the fields of wa also count as variables.
    Runtime error: EXSQL\_TOO\_MANY\_VARS
    
-   Cause: A SET CONNECTION or DISCONNECT command in Native SQL has a specified connection that is unknown to the connection administration.
    Runtime error: EXSQL\_UNKNOWN\_CONNECTION
    
-   Cause: The target area specified in the INTO clause is not structured despite the assertion INTO STRUCTURE.
    Runtime error: EXSQL\_UNSTRUCTURED\_INTO
    
-   Cause: A LOB variable has the wrong type. LOB variables must have the type string, xstring, c, x, or n.
    Runtime error: EXSQL\_WRONG\_TYPE\_FOR\_LOB
    

Continue
[EXEC SQL - Literals](javascript:call_link\('abapexec_literal.htm'\))
[EXEC SQL - Host Variables](javascript:call_link\('abapexec_host.htm'\))
[EXEC SQL - INTO](javascript:call_link\('abapexec_into.htm'\))
[EXEC SQL - OPEN, FETCH, CLOSE](javascript:call_link\('abapexec_cursor.htm'\))
[EXEC SQL - EXECUTE PROCEDURE](javascript:call_link\('abapexec_procedure.htm'\))
[EXEC SQL - CONNECT](javascript:call_link\('abapexec_connection.htm'\))
[ENDEXEC](javascript:call_link\('abapendexec.htm'\))


### abapexec_literal.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - Literals

Appropriate [literals](javascript:call_link\('abenliteral_glosry.htm'\) "Glossary Entry") can be specified in ABAP syntax in suitable reading positions in embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements.

The [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") cannot be used in static Native SQL.

Example

Reads a row from the database table SPFLI using static Native SQL. The required row is specified using literals. The target range of the [INTO clause](javascript:call_link\('abapexec_into.htm'\)) is specified as a [host variable](javascript:call_link\('abapexec_host.htm'\)). If a row was found, sy-subrc is set to 0; if not, it is set to 4.

DATA: BEGIN OF wa,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF wa.
EXEC SQL.
  SELECT cityfrom, cityto
         INTO :wa
         FROM spfli
         WHERE mandt  = '100' AND
               carrid = 'LH'  AND connid = '0400'
ENDEXEC.


### abapexec_host.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - Host Variables

[Host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") are global or local variables (usually variables) declared in the ABAP program that are used in operand positions of embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements. [Named](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") data objects can be identified by an escape character (a colon :) placed in front of the names of the data objects. Instead of the data object itself, a field symbol to which the data object is assigned can be specified. Dereferenced data reference variables cannot be dereferenced.

Usually, only flat elementary fields and flat structures with elementary components can be used as host variables. If a structure is specified after the [INTO clause](javascript:call_link\('abapexec_into.htm'\)) by Native SQL, it is transformed by the Native SQL interface as if its components were specified as individual fields separated by commas.

In assignments between host variables and fields in database tables, a [mapping](javascript:call_link\('abennative_sql_type_mapping.htm'\)) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Notes

-   When passed to a host variable, a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is transformed to its type-dependent initial value.
    
-   The indicator variables provided in the SAP standard, which can be specified after an operand to identify null values, can be specified in static Native SQL by a host variable that has to be of an [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") INT2.
    
-   Host variables cannot be [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").
    

Example

Like the example for [literals](javascript:call_link\('abapexec_literal.htm'\)). Here, the row to read is specified using host variables.

DATA: carrid TYPE spfli-carrid VALUE 'LH',
      connid TYPE spfli-connid VALUE '400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF wa,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF wa.
EXEC SQL.
  SELECT cityfrom, cityto
         INTO :wa
         FROM spfli
         WHERE mandt  = :sy-mandt AND
               carrid = :carrid AND connid = :connid
ENDEXEC.
cl\_demo\_output=>display( wa ).


### abapexec_into.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - INTO

Syntax

EXEC SQL.
  SELECT ... INTO \[STRUCTURE\] :host1 *\[*, host2*\]* ...
ENDEXEC.

Effect

In a native SELECT or FETCH statement specified between EXEC and ENDEXEC, an INTO clause can be specified to pass the read data to [host variables](javascript:call_link\('abapexec_host.htm'\)) host1, host2, ... specified after the statement. If there are multiple rows in the results set, any one of the rows is read.

If a structure is specified as a [host variable](javascript:call_link\('abapexec_host.htm'\)) in after INTO, it is transformed by the Native SQL interface as if its components were specified as individual fields separated by commas. The addition STRUCTURE can be specified between INTO and a single host variable. This addition has the effect that the host variable is handled like a structure, even if a non-typed formal parameter or a non-typed field symbol is specified. Otherwise, when multiple values are being passed, depending on the platform, either the first value only is passed or an exception is raised.

Notes

-   The SAP-specific addition INTO is removed from the statement by the Native SQL interface before it can be passed to the database.
    
-   The addition INTO can only be used in statements introduced using SELECT and FETCH. In a statement introduced using WITH to define a common table expression (CTE), for example, INTO is not possible. In cases like this, either [OPEN](javascript:call_link\('abapexec_cursor.htm'\)) or [ADBC](javascript:call_link\('abenadbc.htm'\)) (recommended) must be used.
    

Example

As in the example for [host variables](javascript:call_link\('abapexec_host.htm'\)). The addition STRUCTURE is specified after INTO. However, this is not necessary since wa is known statically as a structure. The structure wa is handled in the INTO clause as if all substrings were specified separately: INTO :wa-cityfrom, :wa-cityto.

DATA: carrid TYPE spfli-carrid VALUE 'LH',
      connid TYPE spfli-connid VALUE '400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF wa,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF wa.
EXEC SQL.
  SELECT cityfrom, cityto
         INTO STRUCTURE :wa
         FROM spfli
         WHERE mandt  = :sy-mandt AND
               carrid = :carrid AND connid = :connid
ENDEXEC.
cl\_demo\_output=>display( wa ).


### abapexec_cursor.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - OPEN, FETCH, CLOSE

In embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), similar statements to those in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") can be specified to read data using a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").

Syntax

EXEC SQL.
  OPEN dbcur FOR SELECT ...
ENDEXEC.

Effect

Opens a database cursor dbcur. For dbcur, a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like [host variable](javascript:call_link\('abapexec_host.htm'\)) can be specified.

Note

The number of database cursor open simultaneously is restricted by platform. Any attempts to open too many database cursors raise an exception of the class CX\_SY\_NATIVE\_SQL\_ERROR.

Syntax

EXEC SQL.
  FETCH NEXT dbcur INTO ...
ENDEXEC.

Effect

Uses an open database cursor dbcur to read data to the [host variables](javascript:call_link\('abapexec_host.htm'\)) specified after [INTO](javascript:call_link\('abapexec_into.htm'\)).

Syntax

EXEC SQL.
  CLOSE dbcur
ENDEXEC.

Effect

Closes an opened database cursor dbcur.

If no row can be read using FETCH, sy-subrc is set to 4 by ENDEXEC. After a FETCH statement, the system field sy-dbcnt is set to the number of rows read up to that point using the cursor in question. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Note

It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the results set or not. For this reason, it is advisable to use the statement CLOSE dbcur explicitly.

Example

Reads multiple rows from the database table SPFLI using cursor handling and host variables in static Native SQL. If rows are found, sy-subrc is set to 0 and sy-dbcnt is increased by one for each row read.

DATA: carrid   TYPE spfli-carrid VALUE 'LH',
      connid   TYPE spfli-connid,
      cityfrom TYPE spfli-cityfrom,
      cityto   TYPE spfli-cityto.
cl\_demo\_input=>request( CHANGING field = carrid ).
EXEC SQL.
  OPEN dbcur FOR
    SELECT connid, cityfrom, cityto
           FROM spfli
           WHERE mandt  = :sy-mandt AND
                 carrid = :carrid
ENDEXEC.
DO.
  EXEC SQL.
    FETCH NEXT dbcur INTO :connid, :cityfrom, :cityto
  ENDEXEC.
  IF sy-subrc <> 0.
    EXIT.
  ELSE.
    cl\_demo\_output=>write(
      |{ carrid }, { connid }, { cityfrom }, { cityto }| ).
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).
EXEC SQL.
  CLOSE dbcur
ENDEXEC.


### abapexec_procedure.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - EXECUTE PROCEDURE

Syntax

EXEC SQL.
  EXECUTE PROCEDURE proc ( IN    p\_in1,    IN    p\_in2, ...
                           OUT   p\_out1,   OUT   p\_out2, ...
                           INOUT p\_inout1, INOUT p\_inout2, ... )
ENDEXEC.

Effect

In database systems, procedures can be defined as [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry"). Since the syntax for calling this type of procedure and the associated parameter passing can vary widely for various database systems, a uniform command exists in statically embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").

The statement EXECUTE PROCEDURE calls a procedure proc stored in the database. For all formal parameters of the procedure, the actual parameters must be specified, separated by commas. IN, OUT, or INOUT must be specified before every actual parameter, to indicate whether the parameter is an input, output, or input/output parameter. Literals or [host variables](javascript:call_link\('abapexec_host.htm'\)) indicated by colons (:) can be used for the actual parameters.

Notes

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the stored procedures are [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") written in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). In ABAP, these procedures can be managed and called using [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) and the special statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)). This statement enables access using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
    
-   EXECUTE PROCEDURE can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions (see [Executable Example](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))).
    

Example

Defines a procedure abap\_docu\_demo\_incprice using database-specific SQL statements and by calling the procedure with the SAP-specific Native SQL statement EXECUTE PROCEDURE. The execution of the program section raises the price of every flight for the current client in the table SFLIGHT by a specific amount. See also the corresponding executable [example for ADBC](javascript:call_link\('abenadbc_procedure_abexa.htm'\)).

DATA incprice TYPE sflight-price VALUE '0.5'.
cl\_demo\_input=>request( CHANGING field = incprice ).
TRY.
    EXEC SQL.
      DROP PROCEDURE abap\_docu\_demo\_incprice;
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error.
ENDTRY.
TRY.
    EXEC SQL.
      CREATE PROCEDURE
        abap\_docu\_demo\_incprice ( IN inc  DECIMAL(15,2),
                                  IN clnt NVARCHAR(3) ) AS
          BEGIN
            UPDATE sflight SET price = price + inc
                           WHERE mandt = clnt;
          END;
    ENDEXEC.
    EXEC SQL.
      EXECUTE PROCEDURE abap\_docu\_demo\_incprice ( IN :incprice,
                                                  IN :sy-mandt )
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display( ).


### abapexec_connection.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - CONNECT

A connection must be defined with the database before [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be used. When [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") is started, a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") from the database interface to the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is opened. This connection is defined as the current connection for embedded Native SQL statements and as a standard connection for [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements when an ABAP program is started. Use the following SAP-specific Native SQL statements, to start additional database connections. These connections can be accessed in static Native SQL.

The possible additional AS ABAP connections to database systems are [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") defined in the database table DBCON or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") whose name starts with R/3\*.

-   [Open Connection](#abapexec-connection-1--------selecting-a-connection---@ITOC@@ABAPEXEC_CONNECTION_2)

-   [Determining the Connection](#abapexec-connection-3--------close-connection---@ITOC@@ABAPEXEC_CONNECTION_4)

-   [Example](#abapexec-connection-5---note--detailed-information-about-database-connections-can-be-found--here--javascript-call-link---abenopensql-multiconnect-htm-------open-connection--syntax--exec-sql----connect-to-conn-----as-name-----endexec---effect--this-static-native-sql-statement-requests-a-database-connection-called-conn--this-connection-is-opened--or-reused--if-it-already-exists-in-an-inactive-state-for-the-current-work-process--once-connect-to-is-executed--the-specified-connection-is-the-current-connection-of-the-internal-session--which-means-that-all-subsequent-static-native-sql-statements-work-with-this-connection-until-a-connection-other-than-the-current-is-set-using-a-new-connect-to-statement-or-using-set-connection---for-conn--a-a-literal-or-a--host-variable--javascript-call-link---abapexec-host-htm-----that-contains-one-of-the-following-values-can-be-specified-------a-name-from-the-column-con--name-of-the-database-table-dbcon-used-to-specify-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry------------a-name-with-the-prefix-r-3---used-to-specify-a--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry---------both-of-these-instances-are-case-sensitive--if-a-secondary-connection-that-is-not-in-the-database-table-dbcon-is-specified--a-handleable-exception-of-the-class-cx--sy--native--sql--error-is-raised--if-a--secondary-database--javascript-call-link---abensecondary-db-glosry-htm-----glossary-entry---cannot-be-reached--sy-subrc-is-set-to-4---the-addition-as-can-be-used-to-specify-a-name-name-for-the-connection--for-name--a-literal-or-a-character-like-host-variable-can-be-specified-whose-content-is-used-as-the-name--a-connection-called-name-is-not-the-same-connection-as-a-connection-requested-without-using-the-addition-as--this-makes-it-possible-to-open-parallel-connections-with-separate-database-luws-for-the-same-secondary-connection-or-service-connection-within-an-internal-session--in-an-internal-session--only-one-active-database-session-can-be-called-name--any-attempt-to-activate-a-further-connection-with-the-same-name-produces-a-runtime-error--a-connection-called-name-can-only-be-specified-in-the-statement-set-connection-using-this-name---notes------the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---cannot-be-requested-using-connect-to-----------a-name-granted-using-as-can-also-be-used-in-abap-sql-after-the-addition-connection-and-in-the-statements--commit-connection--javascript-call-link---abapcommit-rollback-connection-htm-----and--rollback-connection--javascript-call-link---abapcommit-rollback-connection-htm------as-long-as-it-is-in-uppercase-letters--------selecting-a-connection--syntax--exec-sql----set-connection----conn---default----endexec---effect--this-static-native-sql-statement-sets-the-current-connection-for-all-following-static-native-sql-statements--for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-connection-activated-in-the-current-connection-------default-in-uppercase-letters-or-default-specified-directly-can-be-used-to-specified-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry-------------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn-----------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name--------all-of-these-instances-are-case-sensitive--when-an-unknown-connection-is-specified--the-current-connection-remains-unchanged-and-sy-subrc-is-set-to-4---notes------when-a-current-connection-is-switched-to-a-different-current-connection--no-database-luw-is-closed-and-no-new-luw-is-opened-----------any-changes-to-the-current-connection-are-applied-only-in-static-native-sql-after-exec-sql--abap-sql-and-any-other-variant-of-native-sql-remain-unaffected-----------the-current-connection-is-switched-regardless-of-whether-the-connections-in-question-are-active-or--after-their-database-luws-are-closed--inactive--------determining-the-connection--syntax--exec-sql----get-connection--conn-endexec---effect--this-static-native-sql-statement-assigns-the-name-of-the-current-connection-to-conn--conn-expects-a-character-like-host-variable--if-the-current-connection-was-activated-using-the-statement-connect-to-and-as-was-used-to-give-it-a-name-at-the-same-time--this-name-is-assigned--if-the-connection-is-activated-without-being-given-a-name--the-name-of-the-secondary-connection-or-service-connection-is-assigned--if-the-current-connection-is-the-standard-connection--the-value-default-is-assigned---note--the-current-connection-can-be-active-or--after-its-database-luw-is-closed--inactive---close-connection--syntax--exec-sql----disconnect-conn-endexec---effect--this-static-native-sql-statement-closes-the-connection-conn-for-the-current-work-process--which-discards-all-database-changes-not-yet-committed-using-a--database-commit--javascript-call-link---abendb-commit-htm------for-conn--a-literal-or-a-character-like-host-variable-can-be-specified-that-contains-the-name-of-a-secondary-connection-or-service-connection-activated-in-the-internal-session-------a-secondary-or-service-connection-activated-using-connect-to-without-specifying-a-name-after-as-can-be-specified-under-its-name-conn-----------a-secondary-or-service-connection-activated-using-connect-to-while-specifying-a-name-after-as-can-be-specified-under-this-name-name--------if-anything-else-is-specified--most-specifically-default---a-runtime-error-occurs--if-the-closed-secondary-connection-or-service-connection-is-the-current-connection--the-standard-connection-is-set-as-the-new-current-connection-implicitly--all-of-these-instances-are-case-sensitive---notes------the-closed-connection-can-be-active-or--after-its-database-luw-is-closed--inactive-----------it-is-recommended-that-database-connections-are-only-closed-implicitly-by-the-abap-runtime-environment-and-not-explicitly--since-it-takes-a-lot-of-resources-to-restore-a-connection--------example--example--opens-a-connection-to-an-sap-hana-database-and-imports-all-entries-of-a-column-in-the-database-table-scarr---data-conn-type-dbcon-con--name--cl--demo--input--request--changing-field---conn----select-single-dbms--------from-dbcon--------where-con--name---conn AND
             dbms     = 'HDB'
       INTO @DATA(dbtype).
IF sy-subrc <> 0.
  RETURN.
ENDIF.
TRY.
    EXEC SQL.
      CONNECT TO :conn
    ENDEXEC.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx\_sy\_native\_sql\_error
        EXPORTING
          textid = cx\_sy\_native\_sql\_error=>cx\_sy\_native\_sql\_error.
    ENDIF.
    EXEC SQL.
      OPEN dbcur FOR
        SELECT carrid
               FROM scarr
               WHERE mandt = :sy-mandt
    ENDEXEC.
    DATA carrid TYPE scarr-carrid.
    DO.
      EXEC SQL.
        FETCH NEXT dbcur INTO :carrid
      ENDEXEC.
      IF sy-subrc <> 0.
        EXIT.
      ELSE.
        cl\_demo\_output=>write( |{ carrid }| ).
      ENDIF.
    ENDDO.
    EXEC SQL.
      CLOSE dbcur
    ENDEXEC.
    EXEC SQL.
      DISCONNECT :conn
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display( ).


### abapendexec.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

ENDEXEC

[Quick Reference](javascript:call_link\('abapexec_sql_shortref.htm'\))

Syntax

ENDEXEC.

Effect

The statement ENDEXEC closes an embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement introduced using [EXEC SQL](javascript:call_link\('abapexec.htm'\)).


### abapexec.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) → 

EXEC SQL

[Quick Reference](javascript:call_link\('abapexec_sql_shortref.htm'\))

Syntax

EXEC SQL.
  ...
ENDEXEC.

Effect

These statements define an area in an ABAP program in which one or more [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be specified statically. The area between EXEC and ENDEXEC is not checked completely by the syntax check. The statements entered there are passed to the Native SQL interface and processed there as follows:

-   SQL statements that are valid for the addressed database system can be included between EXEC and ENDEXEC, in particular the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statements. These SQL statements are passed from the Native SQL interface to the database system largely unchanged. The syntax rules are specified by the database system, in particular the case sensitivity rules for database objects. If the syntax allows a separator character between individual statements, multiple Native SQL statements can be included between EXEC and ENDEXEC. Generally, the semicolon (;) is used as the separator character.
    
-   SAP-specific Native SQL language elements can also be included between EXEC and ENDEXEC. These statements are not passed directly from the Native SQL interface to the database, but are converted appropriately. These SAP-specific language elements are:
    

-   [Literals](javascript:call_link\('abapexec_literal.htm'\))

-   [Host variables](javascript:call_link\('abapexec_host.htm'\))

-   [INTO clause](javascript:call_link\('abapexec_into.htm'\))

-   [Statements for cursor processing](javascript:call_link\('abapexec_cursor.htm'\))

-   [Database procedure calls](javascript:call_link\('abapexec_procedure.htm'\))

-   [Statements for establishing database connections](javascript:call_link\('abapexec_connection.htm'\))

All Native SQL statements bypass [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"). Automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is not performed.

System Fields

The statement ENDEXEC sets the system fields sy-subrc and sy-dbcnt. When using the obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)), note that implicit cursor processing is carried out and the system fields are set for every read.

sy-subrc

Meaning

0

The statements between EXEC and ENDEXEC were executed successfully.

4

The statements between EXEC and ENDEXEC were not successful. After implicit cursor processing with PERFORMING, sy-subrc always contains the value 4.

The statement ENDEXEC sets sy-dbcnt to the number of table rows processed in the last Native SQL statement. After implicit cursor processing with PERFORMING, sy-dbcnt contains the total number of rows read. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Notes

-   Programs with Native SQL statements are generally dependent on the database system used, so that they cannot be executed in all [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") systems. This is especially true for the examples in this section, which were tested on a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") (unless otherwise stated).
    
-   If insertions or modifications using the Native SQL statements INSERT or UPDATE would produce duplicate rows with respect to the primary table key, no exception is raised. Instead, sy-subrc is set to 4. However, if another operation, such as executing a [Stored Procedure](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry"), would produce a duplicate row, an exception would be raised.
    
-   The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table or a view must be specified explicitly. Note that application programs should only use data from the current client. See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    

-   When the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a [client-specific](javascript:call_link\('abencds_client_handling.htm'\)) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) is generally evaluated here. Only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). Its current value is used here. On other platforms, there can be unexpected behavior or the program may crash.
    

-   The obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)) (not allowed in classes) executes implicit cursor processing and must no longer be used. The obsolete statement [EXIT FROM SQL](javascript:call_link\('abapexit_sql.htm'\)) can be used to exit this type of processing.
    
-   Native SQL statements used for transaction control (COMMIT and ROLLBACK) are detected by the database interface and the actions required at the end of a transaction are performed.
    
-   The static embedding of Native SQL statements between EXEC SQL and ENDEXEC is replaced by dynamic passes to objects from [ADBC](javascript:call_link\('abenadbc.htm'\)) classes. New features in the Native SQL interface are now developed only in ADBC. Only ADBC should be used in new programs.
    

Example

The following example demonstrates how an embedded Native SQL statement can be replaced by [ADBC](javascript:call_link\('abenadbc.htm'\)). For single statements, the use of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) removes the need for a helper variable of type CL\_SQL\_STATEMENT when creating objects.

"Embedded Native SQL
EXEC SQL.
  INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 )
ENDEXEC.
"ADBC
NEW cl\_sql\_statement( )->execute\_update(
  |INSERT INTO demo\_update VALUES( '{ sy-mandt }', 'X', 1, 2, 3, 4 )| ).

Executable Example

[Static Native SQL](javascript:call_link\('abennative_sql_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

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
    
-   Cause: An SQL error occurred while executing a native SQL command.
    Runtime error: DBIF\_DSQL2\_SQL\_ERROR
    
-   Cause: The maximum number of secondary connections was exceeded.
    Runtime error: EXSQL\_CONNECTION\_LIMIT
    
-   Cause: The maximum number of database cursors was exceeded.
    Runtime error: EXSQL\_DSQL\_CURSOR\_LIMIT
    

Non-Handleable Exceptions

-   Cause: The specified cursor does not exist. A CLOSE or SELECT command in Native SQL has a specified cursor, but this cursor is unknown to cursor administration.
    Runtime error: EXSQL\_DSQL\_CURSOR\_NOT\_FOUND
    
-   Cause: The specified cursor is already open. An OPEN command in Native SQL has a specified cursor, which the cursor administration knows is already open.
    Runtime error: EXSQL\_DSQL\_DUPLICATE\_CURSOR
    
-   Cause: There is insufficient roll memory available. When a Native SQL statement is processed, the internal memory is required to prepare the SQL Call.
    Runtime error: EXSQL\_DSQL\_NOROLL
    
-   Cause: An indicator variable has an incorrect type. It must be the type INT2.
    Runtime error: EXSQL\_DSQL\_WRONG\_IVAR\_TYPE
    
-   Cause: The connection name has already been used for another connection. A CONNECT command in Native SQL has a specified connection name, which is already used for another connection.
    Runtime error: EXSQL\_ILLEGAL\_CONNECTION
    
-   Cause: The connection "DEFAULT" was specified for a DISCONNECT command in Native SQL. This connection cannot be terminated with DISCONNECT.
    Runtime error: EXSQL\_ILLEGAL\_DISCONNECTION
    
-   Cause: A Native SQL command contains too many variables. In this context, variables means all ABAP fields preceded by a colon (":"). If the INTO clause has the form INTO :wa for a work area wa, then all the fields of wa also count as variables.
    Runtime error: EXSQL\_TOO\_MANY\_VARS
    
-   Cause: A SET CONNECTION or DISCONNECT command in Native SQL has a specified connection that is unknown to the connection administration.
    Runtime error: EXSQL\_UNKNOWN\_CONNECTION
    
-   Cause: The target area specified in the INTO clause is not structured despite the assertion INTO STRUCTURE.
    Runtime error: EXSQL\_UNSTRUCTURED\_INTO
    
-   Cause: A LOB variable has the wrong type. LOB variables must have the type string, xstring, c, x, or n.
    Runtime error: EXSQL\_WRONG\_TYPE\_FOR\_LOB
    

Continue
[EXEC SQL - Literals](javascript:call_link\('abapexec_literal.htm'\))
[EXEC SQL - Host Variables](javascript:call_link\('abapexec_host.htm'\))
[EXEC SQL - INTO](javascript:call_link\('abapexec_into.htm'\))
[EXEC SQL - OPEN, FETCH, CLOSE](javascript:call_link\('abapexec_cursor.htm'\))
[EXEC SQL - EXECUTE PROCEDURE](javascript:call_link\('abapexec_procedure.htm'\))
[EXEC SQL - CONNECT](javascript:call_link\('abapexec_connection.htm'\))
[ENDEXEC](javascript:call_link\('abapendexec.htm'\))


### abenexec_sql_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) → 

EXEC SQL - Examples

Continue
![Example](exa.gif "Example") [EXEC SQL, Use](javascript:call_link\('abennative_sql_abexa.htm'\))
![Example](exa.gif "Example") [EXEC SQL, Accessing a Database Function](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))


### abennative_sql_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

EXEC SQL, Use

This example demonstrates the use of embedded static Native SQL.

Source Code

REPORT demo\_exec\_sql.
PARAMETERS: p\_create RADIOBUTTON GROUP grp,
            p\_insert RADIOBUTTON GROUP grp,
            p\_select RADIOBUTTON GROUP grp,
            p\_drop   RADIOBUTTON GROUP grp.
SELECTION-SCREEN SKIP.
PARAMETERS  p\_key TYPE i DEFAULT 1.
CLASS native\_sql DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: wa1 TYPE c LENGTH 10,
                wa2 TYPE c LENGTH 10,
                err TYPE REF TO cx\_sy\_native\_sql\_error.
    CLASS-METHODS: create RAISING cx\_sy\_native\_sql\_error,
                   insert RAISING cx\_sy\_native\_sql\_error,
                   select RAISING cx\_sy\_native\_sql\_error,
                   drop   RAISING cx\_sy\_native\_sql\_error.
ENDCLASS.
CLASS native\_sql IMPLEMENTATION.
  METHOD main.
    TRY.
        IF p\_create = 'X'.
          create( ).
          MESSAGE 'Create was successful' TYPE 'S'.
        ELSEIF p\_insert = 'X'.
          insert( ).
          MESSAGE 'Insert was successful' TYPE 'S'.
        ELSEIF p\_select = 'X'.
          select( ).
          MESSAGE 'Select was successful' TYPE 'S'.
        ELSEIF p\_drop   = 'X'.
          drop( ).
          MESSAGE 'Drop was successful' TYPE 'S'.
        ENDIF.
      CATCH cx\_sy\_native\_sql\_error INTO err.
        MESSAGE err TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD create.
    EXEC SQL.
      CREATE TABLE abap\_docu\_demo\_mytab (
               val1 char(10) NOT NULL,
               val2 char(10) NOT NULL,
               PRIMARY KEY (val1)      )
    ENDEXEC.
  ENDMETHOD.
  METHOD insert.
    DO 100 TIMES.
      wa1 = sy-index.
      wa2 = sy-index \*\* 2.
      EXEC SQL.
        INSERT INTO abap\_docu\_demo\_mytab VALUES (:wa1, :wa2)
      ENDEXEC.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx\_sy\_native\_sql\_error
          EXPORTING
            textid = cx\_sy\_native\_sql\_error=>key\_already\_exists.
      ENDIF.
    ENDDO.
  ENDMETHOD.
  METHOD select.
    DATA: msg TYPE c LENGTH 30,
          key TYPE c LENGTH 10.
    p\_key = cl\_abap\_dyn\_prg=>escape\_quotes( CONV string( p\_key ) ).
    key = p\_key.
    EXEC SQL.
      SELECT val1, val2
             INTO :wa1, :wa2
             FROM abap\_docu\_demo\_mytab
             WHERE val1 = :key
    ENDEXEC.
    IF sy-subrc = 0.
      WRITE: 'Result:' TO msg,
             wa1 TO msg+10,
             wa2 TO msg+20.
    ELSE.
      msg = 'No entry found'.
    ENDIF.
    MESSAGE msg TYPE 'I'.
  ENDMETHOD.
  METHOD drop.
    EXEC SQL.
      DROP TABLE abap\_docu\_demo\_mytab
    ENDEXEC.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  native\_sql=>main( ).

Description

The program is the static equivalent of the executable [ADBC](javascript:call_link\('abenadbc_dml_ddl_abexa.htm'\)) example. The name of the database abap\_docu\_demo\_mytab cannot be modified. Instead of passing the SQL statements dynamically to methods of the class CL\_SQL\_STATEMENT, they are specified statically between EXEC and ENDEXEC. Attempts to insert rows that already exist are caught using sy-subrc and the corresponding SQL exception must be raised explicitly.


### abenexec_sql_db_function_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

EXEC SQL, Accessing a Database Function

This example demonstrates how a database function is accessed using static Native SQL.

Source Code

REPORT demo\_exec\_sql\_db\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        EXEC SQL.
          DROP FUNCTION abap\_docu\_demo\_scalar\_function;
        ENDEXEC.
        EXEC SQL.
          CREATE FUNCTION
            abap\_docu\_demo\_scalar\_function
              ( IN p1 NVARCHAR(5), IN p2 NVARCHAR(5) )
              RETURNS r NVARCHAR(10) AS
              BEGIN
                r = concat(p1,p2);
              END;
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions
      FROM TABLE @( VALUE #( ( id = 'X' char1 = 'xxxxxaaaaa' )
                             ( id = 'Y' char1 = 'yyyyybbbbb' )
                             ( id = 'Z' char1 = 'zzzzzccccc' ) ) ).
    DATA in1 TYPE c LENGTH 5 VALUE 'yyyyy'.
    DATA in2 TYPE c LENGTH 5 VALUE 'bbbbb'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = in1
      )->add\_field( CHANGING field = in2 )->request( ).
    DATA result TYPE demo\_expressions-id.
    TRY.
        EXEC SQL.
          select id
                 from demo\_expressions
                 where char1 = abap\_docu\_demo\_scalar\_function(:in1,
                                                              :in2)
                 into :result
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO exc.
        cl\_demo\_output=>write( exc->get\_text( ) ).
    ENDTRY.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

After [EXEC SQL](javascript:call_link\('abapexec.htm'\)), this example creates a scalar [database function](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") with two input parameters and uses this function in the WHERE condition of a SELECT statement.


### abenexec_sql_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) → 

EXEC SQL - Examples

Continue
![Example](exa.gif "Example") [EXEC SQL, Use](javascript:call_link\('abennative_sql_abexa.htm'\))
![Example](exa.gif "Example") [EXEC SQL, Accessing a Database Function](javascript:call_link\('abenexec_sql_db_function_abexa.htm'\))
