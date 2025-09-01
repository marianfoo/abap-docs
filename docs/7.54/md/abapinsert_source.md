---
title: "INSERT dbtab - source"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab_shortref.htm) Syntax ...  @wa@( expr )   TABLE @itab@( expr ) ACCEPTING DUPLICATE KEYS   ( SELECT subquery_clauses(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/aba
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm"
abapFile: "abapinsert_source.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapinsert", "source"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Write Accesses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) →  [INSERT dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) → 

INSERT dbtab - source

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab_shortref.htm)

Syntax

...  @wa*|*@( expr )
  *|* *{* TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* *}*
  *|* ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_from_select.htm) *\[*[UNION ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm)*\]* ) ...

Alternatives:

[1\. ... @wa*|*@( expr ) ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ( SELECT subquery\_clauses *\[*UNION ...*\]* ) ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

A non-table-like data object can be specified as a host variable [@wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) as a data source after the additions VALUES and FROM of the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm). After FROM TABLE, an internal table or a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_from_select.htm) can be specified. The internal table can also be specified as a host variable [@itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm). The content of the inserted row or rows is taken from these data objects or from the results set of the subquery.

Note

Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.

Alternative 1

... @wa*|*@( expr ) ...

Effect

After [VALUES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) and [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm), a non-table-like work area can be specified as a host variable [@wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or as a host expression [@( expr )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm), from whose content a row is created for insertion into the database table. The work area must meet the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm) for use in ABAP SQL statements.

-   When specifying a work area that does not contain any reference variables for [LOB handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry"), the content of the row to insert is taken from the work area wa while ignoring its data type and from left to right in accordance with the structure of the database table or the [view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenview_glosry.htm "Glossary Entry") . No conversion is made to the ABAP type that is assigned to a column using its [dictionary type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).
    
-   When a [LOB handle structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") is specified, it must be constructed (in accordance with the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm)) exactly like the structure of the database table. The components of the work area that are not [LOB Handle components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") are assigned directly to the corresponding columns of the new row. In the case of a LOB handle component of a read stream type, this type is created. In this case of a type for a locator: this must exist and is used as a source. For details, see LOB handles.
    

The new row is inserted in the database table if this does not already contain a row with the same [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") or the same unique secondary index. If it does, the row is not inserted and sy-subrc is set to 4. When the row is inserted, the content of the work area assigned to the individual columns of the database table is mapped by the [database interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_interface_glosry.htm "Glossary Entry") to its data types and converted if necessary. If content is not suitable, overflows or invalid values may raise exceptions.

If a view is specified in target that does not include all columns in the database table, these are set to the type-dependent [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_glosry.htm "Glossary Entry") or to the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") in the inserted rows. The latter applies only if, for the columns of the database table in question, the attribute [NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) is not selected in the database.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) applies, in which a [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) can be used to switch to the client specified in wa.

Notes

-   The work area wa should always be declared in relation to the database table or the view in ABAP Dictionary. For the derivation of [LOB handle structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry"), there are special [additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm) of the statements TYPES and *\[*CLASS-*\]*DATA.
    
-   Exceptions due to invalid values can be raised in compatible work areas too. For example, components of the types d and t can contain invalid dates and times that are not accepted by columns of the types DATN and TIMN.
    
-   If a [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") is specified as a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) for the work area wa, for which the data type is inferred using the # character, a structure consisting of all the database table columns is created as the type.
    
-   If the database table or the view is specified statically, an obsolete [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_obsolete.htm) of the specification outside of classes is possible. This means that the specification of the work area using FROM wa in the variant without INTO can be omitted. The prerequisite is that a [table work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab for the respective database table or the view is declared using the statement TABLES. The runtime environment then adds the addition FROM dbtab to the statement INSERT implicitly.
    

Example

Inserts a new airline into the database table SCARR using a work area wa.

DATA scarr\_wa TYPE scarr.
scarr\_wa = VALUE #(
  carrid   = 'FF'
  carrname = 'Funny Flyers'
  currcode = 'EUR'
  url      = 'http://www.funnyfly.com' ).
INSERT INTO scarr VALUES @scarr\_wa.

Example

Inserts a new airline into the database table SCARR with the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) in a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm).

INSERT INTO scarr VALUES @( VALUE #(
  carrid   = 'FF'
  carrname = 'Funny Flyers'
  currcode = 'EUR'
  url      = 'http://www.funnyfly.com' ) ).

Alternative 2

... TABLE @itab*|*@( expr ) *\[*ACCEPTING DUPLICATE KEYS*\]* ...

Effect

An internal table itab can be specified as a host variable [@itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) after [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) and TABLE, from whose content multiple rows are created for insertion into the database table. The row type of the internal table must meet the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm) for use in ABAP SQL statements.

The content of each row of the internal table is composed using the same rules as for a single work area wa with the exception that when inserting from an internal table [locators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocator_glosry.htm "Glossary Entry") operate as the source but no [writer streams](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriter_stream_glosry.htm "Glossary Entry") can be created.

If no row with the same [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") or with the same unique secondary index exists in the database table for any of the rows to be inserted, all rows are inserted and sy-subrc is set to 0. If the internal table is empty, no rows are inserted. However sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are inserted.

If a row with the same primary key or the same unique secondary index exists in the database table for one or more of the rows to be inserted, these rows cannot be inserted. In this situation, there are the following options:

-   Using ACCEPTING DUPLICATE KEYS
    If the addition ACCEPTING DUPLICATE KEYS is specified, all rows are inserted for which this is possible. All rows that would produce duplicate entries with respect to the primary key or to a unique secondary index are discarded and sy-subrc set to 4. The system field sy-dbcnt is set to the number of rows that are inserted.
    
-   No use of ACCEPTING DUPLICATE KEYS
    

-   Handling of the exception CX\_SY\_OPEN\_SQL\_DB
    If the addition ACCEPTING DUPLICATE KEYS is not specified, the handleable exception CX\_SY\_OPEN\_SQL\_DB is raised when a duplicate row is inserted. Rows continue to be inserted until the exception is raised and handled. The number of inserted rows is undefined. The system fields sy-subrc and sy-dbcnt retain their previous value.
    

-   No handling of the exception CX\_SY\_OPEN\_SQL\_DB
    If the addition ACCEPTING DUPLICATE KEYS is not specified and if the exception is not handled, a runtime error occurs when a duplicate row is inserted. This executes a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_rollback.htm) that rolls back all changes to the current [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_transaction.htm). This applies in particular to rows that were inserted before the duplicate entry was made.
    

Notes

-   The addition ACCEPTING DUPLICATE KEYS does not indicate that duplicate key entries are accepted in the strict sense of the word. More specifically, no change is made to an existing entry as is the case when [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm) is used. Instead, ACCEPTING DUPLICATE KEYS prevents the associated exception from being raised and sets the return code sy-subrc to 4.
    
-   If the runtime error produced by inserting existing rows is prevented by handling an exception, instead of by using the addition ACCEPTING DUPLICATE KEYS, then, if a database rollback is wanted, it must be initiated explicitly.
    
-   When an internal table is used, package by package processing causes only some of the rows being inserted to be visible to any reads running in parallel with the INSERT.
    
-   If a [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") as a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table (whose row type consists of all the database table columns) with an empty table key is created as the type.
    

Example

Inserts multiple rows in a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) using the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm). This example shows the two ways of dealing with duplicate rows.

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

... ( SELECT subquery\_clauses *\[*UNION ...*\]* ) ...

Effect

A parenthesized [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") can be specified as a data source after [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm). The lines of the result set of a subquery are inserted, which is defined by the corresponding clauses [subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_from_select.htm). The language element [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) can be used to combine the results sets of multiple subqueries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) apply for specifying clauses.

If a subquery is used as a data source, two cases must be distinguished in client handling of the INSERT statement:

-   If the subquery uses [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) of the SELECT statement by default or switches it using the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm), implicit client handling of the INSERT statement cannot be switched using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm). The client column of a client-specific database table or classic view filled using the INSERT statement is filled with the ID of the current client or the client specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm), regardless of the results set of the subquery.
    
-   If the subquery switches [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) of the SELECT statement using one of the additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm), implicit client handling of the INSERT statement must be switched using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm). The results set of a subquery of this type can contain multiple client IDs and these are inserted in the client column of the target of the INSERT statement.
    

The data from the results set is inserted into the database table or classic view in question column by column in the database system. Columns are assigned using their position. The columns names in the result set are not important for assignment purposes. The columns assigned to each other must have the same type attributes with respect to [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), length, and number of digits after the decimal point, with the following exceptions:

-   In the case of the numeric types [INT1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), and [INT8](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), columns with a lesser value range can be assigned to a column with a greater value range.
    
-   In the case of the numeric type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), columns with shorter lengths can be assigned to columns with greater lengths. Furthermore, columns with fewer decimal places can be assigned to columns with more decimal places, as long as there are enough integer digits. The corresponding special types [CURR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled here like [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).
    
-   The numeric types [DF16\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [DF34\_DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled like the numbers of type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) (as they are saved) and the rule above applies with respect to lengths and decimal places.
    
-   In the case of the character-like type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), columns with shorter lengths can be assigned to columns with greater lengths. The corresponding special types [CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), and [UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are handled here like [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).
    

All other types must be exactly the same. This applies specifically to [NUMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [RAW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), where the lengths must match. The different categories of [strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_character_byte_types.htm) cannot be combined either.

The statement INSERT with subquery does not insert any [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") into the database table or classic view in question. Null values for insertion can be produced in the following cases:

-   As results of [outer joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm) in the FORM clause of the subquery
    
-   As results of [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) in the SELECT list of the subquery
    
-   If a field read by the subquery already contains a null value
    

In these cases, the following is done instead of inserting a null value:

-   The type-dependent [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) is inserted for columns that are not [key fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkey_field_glosry.htm "Glossary Entry") of the database table or classic view in question.
    
-   An exception that can be caught using the exception class CX\_SY\_OPEN\_SQL\_DB is raised in the case of columns that are [key fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkey_field_glosry.htm "Glossary Entry") of the database table or classic view in question. If it is known statically that null values can be inserted into key fields, a syntax check warning that can be hidden by the pragma null\_values is produced.
    

Columns of the database table or classic view in question that do not have a column in the results set of the subquery are also filled with their type-dependent initial value.

If it was possible to insert all rows of the results set, sy-subrc is set to 0. If it was not possible to insert a row from the results set (since a row with the same [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") or an identical unique secondary index exists), all previously inserted rows are discarded and a catchable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. If the results set of the subquery is empty, no row is inserted and sy-subrc is set to 4.

The statement INSERT with subquery cannot be used if [logging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_protocol.htm) is enabled for the table in question , and hence the corresponding [technical attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techspec.htm) of the database table and the profile parameter rec/client are set accordingly . If used for a database table with logging enabled, the non-handleable exception DBSQL\_DBPRT\_STATEMENT is raised.

Notes

-   Using subqueries produces better performance than using standalone SELECT statements to read data into an internal table and using this table as a data source.
    
-   Unlike when inserting rows from an internal table itab, the content of the modified table or classic view is always defined after the exception CX\_SY\_OPEN\_SQL\_DB is handled.
    
-   This variant of the INSERT statement is particularly well suited to filling [global temporary tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry").
    
-   In certain circumstances, [CAST expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) can be used in the SELECT list of the subquery for combinations between columns forbidden by the rules above.
    
-   A [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of the subquery specified using \* ignores all client columns, which means that client-specific [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") whose results sets do not have a client column can be accessed without any problems.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) can be used in the subquery to read the data of a client other than the client for which the data was written using INSERT. More specifically, the data from one client can be copied to a different client.
    
-   Attempts to fill [key fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkey_field_glosry.htm "Glossary Entry") with null values raise exceptions, which also prevents duplicate entries from being made in the table or classic view in question.
    
-   Database tables and views accessed using this variant of the INSERT statement should not be expanded independently from one another, to avoid syntax errors.
    
-   To avoid exceptions when performing writes to a database table with [logging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_protocol.htm) enabled. the method IS\_LOGGING\_ON of the system class CL\_DBI\_UTILITIES can be used to branch to an alternative implementation.
    
-   When a subquery is used, the syntax check is performed in [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm) from Release 7.50, which handles the statement more strictly than the regular syntax check.
    
-   If USING CLIENT is used or a table or view is accessed that is filled by the INSERT statement in the subquery, the syntax check runs in [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm) from Release 7.53, which handles the statement more strictly than the regular syntax check. If used, [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) applies [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_754.htm).
    

Example

Inserts all rows of a join set of the database tables DEMO\_JOIN1 and DEMO\_JOIN2 into the table DEMO\_JOIN3.

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
INSERT demo\_join3  FROM ( SELECT a,b,c,d FROM demo\_join1
                            UNION
                              SELECT d,e,f,g FROM demo\_join2 ).
SELECT \*
       FROM demo\_join3
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Examples

-   [INSERT, FROM SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninsert_from_select_abexa.htm)
    
-   [Union with Global Temporary Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_union_sum_gtt_abexa.htm)
    

Continue
![Example](exa.gif "Example") [INSERT, FROM SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninsert_from_select_abexa.htm)