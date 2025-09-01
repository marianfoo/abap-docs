  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [INSERT dbtab](javascript:call_link\('abapinsert_dbtab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20dbtab%2C%20source%2C%20ABAPINSERT_SOURCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT dbtab, source

[Short Reference](javascript:call_link\('abapinsert_dbtab_shortref.htm'\))

Syntax

...  @wa*|*@( expr )
  *|* *{* TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* *}*
  *|* ( SELECT [subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Alternatives:

[1\. ... @wa*|*@( expr ) ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ( SELECT subquery\_clauses *\[*UNION*|*INTERSECT*|*EXCEPT ...*\]* ) ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

Data sources of the ABAP SQL [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statement:

-   After the additions VALUES and FROM, a non-table-like data object can be specified as a host variable [@wa](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)).
-   After FROM TABLE, an internal table can be specified as a host variable [@itab](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)).
-   After FROM TABLE, a [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) can be specified.

The content of the row or rows to be inserted is taken from these data objects or from the result set of the subquery.

Hint

Host variables without the escape character @ are [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from ABAP release 7.40, SP05.

Alternative 1   

... @wa*|*@( expr ) ...

Effect

After [VALUES](javascript:call_link\('abapinsert_dbtab.htm'\)) and [FROM](javascript:call_link\('abapinsert_dbtab.htm'\)), a non-table-like work area can be specified as a host variable [@wa](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or as a host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), from whose content a row is created for insertion into the DDIC database table. The work area must meet the [prerequisites](javascript:call_link\('abenabap_sql_wa.htm'\)) for use in ABAP SQL statements.

-   When specifying a work area that does not contain any reference variables for [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry"), the content of the row to be inserted is taken from the work area wa while ignoring its data type and from left to right in accordance with the structure of the DDIC database table or the [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry"). No conversion is made to the ABAP type that is assigned to a column using its [dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)).
-   When a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") is specified, it must be constructed exactly like the structure of the DDIC database table, in accordance with the [prerequisites](javascript:call_link\('abenabap_sql_wa.htm'\)). The components of the work area that are not [LOB Handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") are assigned directly to the corresponding columns of the new row. In the case of a LOB handle component of a read stream type, this type is created. In the case of a type for a locator, this must exist and is used as a source. For details, see [LOB handles](javascript:call_link\('abenium_lob.htm'\)).

The new row is inserted into the DDIC database table if it does not already contain a row with the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or the same unique secondary index. If it does, the row is not inserted and sy-subrc is set to 4. When the row is inserted, the content of the work area assigned to the individual columns of the DDIC database table is mapped by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") to its data types and converted if necessary. If content is not suitable, overflows or invalid values may raise exceptions.

If a view is specified in [target](javascript:call_link\('abapiumd_target.htm'\)) that does not include all columns in the DDIC database table, these are set to either their type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") or the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in the inserted rows. The latter is only the case if the property [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) is not selected in the database for the columns in question in the DDIC database table.

[Implicit ABAP SQL client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) applies, in which a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to the client specified in wa.

Hints

-   The work area wa should always be declared in relation to the DDIC database table or the DDIC view in the ABAP Dictionary. For the derivation of [LOB handle structures](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry"), there are special [additions](javascript:call_link\('abaptypes_lob_handle.htm'\)) of the statements TYPES and *\[*CLASS-*\]*DATA.
-   Exceptions due to invalid values can be raised in compatible work areas. For example, components of the types d and t can contain invalid dates and times that are not accepted by columns of the types DATN and TIMN.
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") is specified as a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) for the work area wa, for which the data type is inferred using the # character, a structure consisting of all the database table columns is created as the type.
-   If the DDIC database table or the DDIC view is specified statically, an obsolete [short form](javascript:call_link\('abapinsert_obsolete.htm'\)) of the specification outside of classes is possible. This means that the specification of the work area using FROM wa in the variant without INTO can be omitted if a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab for the corresponding DDIC database table or the DDIC view is declared using the statement TABLES. The runtime framework then adds the addition FROM dbtab to the statement INSERT implicitly.

Example

Insertion of a new airline into the DDIC database table SCARR using a work area wa.

DATA scarr\_wa TYPE scarr.
scarr\_wa = VALUE #(
  carrid   = 'FF'
  carrname = 'Funny Flyers'
  currcode = 'EUR'
  url      = 'http://www.funnyfly.com' ).
INSERT INTO scarr VALUES @scarr\_wa.

Example

Insertion of a new airline into the DDIC database table SCARR with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) in a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)).

INSERT INTO scarr VALUES @( VALUE #(
  carrid   = 'FF'
  carrname = 'Funny Flyers'
  currcode = 'EUR'
  url      = 'http://www.funnyfly.com' ) ).

Alternative 2   

... TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* ...

Effect

An internal table itab can be specified as a host variable [@itab](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) after [FROM](javascript:call_link\('abapinsert_dbtab.htm'\)) and TABLE, from whose content multiple rows are created for insertion into the DDIC database table. The row type of the internal table must meet the [prerequisites](javascript:call_link\('abenabap_sql_wa.htm'\)) for use in ABAP SQL statements.

The content of each row of the internal table is assembled into a row to be inserted using the same rules as for a single work area wa with the exception that when inserting from an internal table, [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") operate as the source but no [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry") can be created.

If no row with the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or with the same unique secondary index exists in the DDIC database table for any of the rows to be inserted, all rows are inserted and sy-subrc is set to 0. If the internal table is empty, no rows are inserted. However, sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are inserted.

If a row with the same primary key or the same unique secondary index exists in the DDIC database table for one or more of the rows to be inserted, these rows cannot be inserted. In this situation, there are the following options:

-   Use of ACCEPTING DUPLICATE KEYS
    
    If the addition ACCEPTING DUPLICATE KEYS is specified, all rows are inserted for which this is possible. All rows that would produce duplicate entries with respect to the primary key or to a unique secondary index are discarded and sy-subrc set to 4. The system field sy-dbcnt is set to the number of rows that are inserted.
    
-   No use of ACCEPTING DUPLICATE KEYS
    -   Handling of the exception CX\_SY\_OPEN\_SQL\_DB
        
        If the addition ACCEPTING DUPLICATE KEYS is not specified, the catchable exception CX\_SY\_OPEN\_SQL\_DB is raised when a duplicate row is inserted. Rows continue to be inserted until the exception is raised and handled. The number of inserted rows is undefined. The system fields sy-subrc and sy-dbcnt retain their previous value.
        
    -   No handling of the exception CX\_SY\_OPEN\_SQL\_DB
        
        If the addition ACCEPTING DUPLICATE KEYS is not specified and if the exception is not handled, a runtime error occurs when a duplicate row is inserted. This executes a [database rollback](javascript:call_link\('abendb_rollback.htm'\)) that undoes all changes to the current [database LUW](javascript:call_link\('abendb_transaction.htm'\)). This applies in particular to rows that were inserted before the duplicate entry was made.
        

Hints

-   The addition ACCEPTING DUPLICATE KEYS does not indicate that duplicate key entries are accepted in the strict sense of the word. More specifically, no change is made to an existing entry as is the case when [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) is used. Instead, ACCEPTING DUPLICATE KEYS prevents the associated exception from being raised and sets the return code sy-subrc to 4.
-   If the runtime error produced by inserting existing rows is prevented by handling an exception instead of using the addition ACCEPTING DUPLICATE KEYS, a database rollback must be initiated explicitly, if required.
-   If an internal table is used, package-by-package processing causes any read accesses running in parallel to INSERT to view only some of the rows to be inserted.
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") as a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.

Example

Insertion of multiple rows in a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)). This example shows the two ways of dealing with duplicate rows.

TRY.
    INSERT scarr FROM TABLE @( VALUE #(
      ( carrid   = 'FF'
        carrname = 'Funny Flyers'
        currcode = 'EUR'
        url      = 'http://www.funnyfly.com' )
      ( carrid   = 'XXL'
        carrname = 'Extra Large Line'
        currcode = 'USD'
        url      = 'http://www.xxlline.com' ) ) ).
  CATCH cx\_sy\_open\_sql\_db.
    ...
ENDTRY.
INSERT scarr FROM TABLE @( VALUE #(
  ( carrid   = 'FF'
    carrname = 'Funny Flyers'
    currcode = 'EUR'
    url      = 'http://www.funnyfly.com' )
  ( carrid   = 'XXL'
    carrname = 'Extra Large Line'
    currcode = 'USD'
    url      = 'http://www.xxlline.com' ) ) ) ACCEPTING DUPLICATE KEYS.
IF sy-subrc = 4.
  ...
ENDIF.

Alternative 3   

... ( SELECT subquery\_clauses *\[*UNION*|*INTERSECT*|*EXCEPT ...*\]* ) ...

Effect

A parenthesized [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") can be specified as a data source after [FROM](javascript:call_link\('abapinsert_dbtab.htm'\)). The rows of the result set of a subquery are inserted, which is defined by the corresponding clauses [subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\)). The [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply when specifying clauses.

The statement INSERT with subquery cannot be used if [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is enabled for the table to be filled. If used for a DDIC database table with logging enabled, the uncatchable exception DBSQL\_DBPRT\_STATEMENT is raised. The corresponding warning from the syntax check can be switched off with the pragma ##logging\_versus\_from\_select. Logging is enabled for a DDIC database table if the corresponding [technical property](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) of the DDIC database table and the profile parameter rec/client are set accordingly.

If a subquery is used as a data source, two cases must be considered in client handling of the INSERT statement:

-   If the subquery uses [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) of the SELECT statement by default or switches it using the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)), implicit client handling of the INSERT statement cannot be switched using the addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)). The client column of a client-dependent DDIC database table or DDIC table view filled using the INSERT statement is filled with the ID of the current client or the client specified using [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)), regardless of the result set of the subquery.
-   If the subquery switches [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) of the SELECT statement using one of the additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)), implicit client handling of the INSERT statement must be switched using the addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)). The result set of a subquery of this type can contain multiple client IDs and these are inserted into the client column of the target of the INSERT statement.

The data from the result set is inserted into the DDIC database table or DDIC view to be filled column by column in the database system. Columns are assigned using their position. The columns names in the result set are not important for assignment purposes. The columns assigned to each other must have the same type properties with respect to [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and number of decimal places, with the following exceptions:

-   In the case of the numeric types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), and [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), columns with a smaller value range can be assigned to a column with a greater value range.
-   In the case of the numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), columns with shorter lengths can be assigned to columns with greater lengths. Furthermore, columns with fewer decimal places can be assigned to columns with more decimal places, as long as there are enough integer digits. The corresponding special types [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled here like [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)).
-   The numeric types [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled like the numbers of type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) as they are stored and the rule above applies with respect to lengths and decimal places.
-   In the case of the character-like type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), columns with shorter lengths can be assigned to columns with greater lengths. The corresponding special types [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) are handled here like [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)).

All other types must be exactly the same. This applies specifically to [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)), where the lengths must match. The different categories of [strings](javascript:call_link\('abenddic_character_byte_types.htm'\)) cannot be combined either.

The statement INSERT with subquery does not insert [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") into the DDIC database table or DDIC view to be filled. Null values to be inserted can be produced in the following cases:

-   As results of [outer joins](javascript:call_link\('abapselect_join.htm'\)) in the FORM clause of the subquery.
-   As results of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) in the SELECT list of the subquery.
-   If a field read by the subquery already contains a null value.

In these cases, the following is done instead of inserting a null value:

-   The type-dependent [initial value](javascript:call_link\('abenddic_builtin_types.htm'\)) is inserted for columns that are not [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") of the DDIC database table or DDIC view to be filled.
-   A catchable exception of exception class CX\_SY\_OPEN\_SQL\_DB is raised in the case of columns that are [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") of the DDIC database table or DDIC view to be filled. If it is known statically that null values can be inserted into key fields, a syntax check warning that can be hidden by the pragma null\_values is produced.

Columns of the DDIC database table or DDIC view to be filled that do not have a column in the result set of the subquery are also filled with their type-dependent initial value.

If it was possible to insert all rows of the result set, sy-subrc is set to 0. If it was not possible to insert a row from the result set, since a row with the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or an identical unique secondary index exists, all previously inserted rows are discarded and a catchable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. If the result set of the subquery is empty, no row is inserted and sy-subrc is set to 4.

Hints

-   Using subqueries has better performance than using standalone SELECT statements to read data into an internal table and using this table as a data source.
-   Unlike when inserting rows from an internal table itab, the content of the modified table or DDIC view is always defined after the exception CX\_SY\_OPEN\_SQL\_DB is handled.
-   This variant of the INSERT statement is particularly well suited for filling [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry").
-   In certain circumstances, [CAST expressions](javascript:call_link\('abensql_cast.htm'\)) can be used in the SELECT list of the subquery for combinations between columns that are forbidden by the rules above.
-   A [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the subquery specified using \* ignores all client columns, which means that client-dependent [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") whose result sets do not have a client column can be accessed without any problems.
-   Attempts to fill [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") with null values raise an exception which prevents duplicate entries from being made in the table or DDIC view to be filled.
-   DDIC database tables and DDIC views accessed using this variant of the INSERT statement should not be expanded independently of each other to avoid syntax errors.
-   To avoid exceptions when performing writes to a DDIC database table with [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) enabled, the method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to branch to an alternative implementation.
-   [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) can be used in the subquery to read the data of a client other than the client for which the data was written using INSERT. More specifically, the data of one client can be copied to a different client.
-   When a subquery is used, the syntax check is performed in [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)) from ABAP release 7.50, which handles the statement more strictly than the regular syntax check.
-   When USING CLIENT is used or the table or DDIC view that is filled by the INSERT statement is accessed in the subquery, the syntax check is performed in [strict mode](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)) from ABAP release 7.53, which handles the statement more strictly than the regular syntax check. If used, [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) results in [strict mode from ABAP release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

Insertion of all rows of a union set of the DDIC database tables DEMO\_JOIN1 and DEMO\_JOIN2 into the table DEMO\_JOIN3. Only if logging is disabled for DEMO\_JOIN3, a subquery can be used. Otherwise, the data must be inserted into an internal table using selection.

DELETE FROM demo\_join1.
INSERT demo\_join1
  FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' )
                         ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' )
                         ( a = 'a3' b = 'b3' c = 'd3' d = 'd3' ) ) ).
DELETE FROM demo\_join2.
INSERT demo\_join2
  FROM TABLE @( VALUE #( ( d = 'd1' e = 'e1' f = 'f1' g = 'g1' )
                         ( d = 'd2' e = 'e2' f = 'f2' g = 'g2' )
                         ( d = 'd3' e = 'e3' f = 'f3' g = 'g3' ) ) ).
DELETE FROM demo\_join3.
IF cl\_dbi\_utilities=>is\_logging\_on( 'DEMO\_JOIN3' ) IS INITIAL.
  INSERT demo\_join3 FROM ( SELECT a,b,c,d FROM demo\_join1
                             UNION
                               SELECT d,e,f,g FROM demo\_join2 )
                           ##logging\_versus\_from\_select\[demo\_join3\].
ELSE.
  SELECT a,b,c,d FROM demo\_join1
    UNION
      SELECT d AS a, e AS b, f AS c, g AS d FROM demo\_join2
      INTO TABLE @FINAL(buffer).
  INSERT demo\_join3 FROM TABLE @buffer.
ENDIF.
SELECT \*
       FROM demo\_join3
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [INSERT, FROM SELECT](javascript:call_link\('abeninsert_from_select_abexa.htm'\))
-   [Union with Global Temporary Table](javascript:call_link\('abenselect_union_sum_gtt_abexa.htm'\))

Continue
![Example](exa.gif "Example") [INSERT, FROM SELECT](javascript:call_link\('abeninsert_from_select_abexa.htm'\))