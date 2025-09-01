  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) → 

INSERT dbtab

[Short Reference](javascript:call_link\('abapinsert_dbtab_shortref.htm'\))

Syntax

INSERT *{* INTO [target](javascript:call_link\('abapiumd_target.htm'\)) *\[* [connection](javascript:call_link\('abapiumd_conn.htm'\))*\]* VALUES [wa](javascript:call_link\('abapinsert_source.htm'\)) *}*
     *|* *{*      [target](javascript:call_link\('abapiumd_target.htm'\)) *\[* [connection](javascript:call_link\('abapiumd_conn.htm'\))*\]* FROM [wa](javascript:call_link\('abapinsert_source.htm'\)) *}*
     *|* *{*      [target](javascript:call_link\('abapiumd_target.htm'\)) *\[* [connection](javascript:call_link\('abapiumd_conn.htm'\))*\]* FROM [TABLE itab](javascript:call_link\('abapinsert_source.htm'\)) *}*
     *|* *{*      [target](javascript:call_link\('abapiumd_target.htm'\)) *\[* [connection](javascript:call_link\('abapiumd_conn.htm'\))*\]* FROM [( SELECT subquery\_clauses *\[*UNION ...*\]* )](javascript:call_link\('abapinsert_source.htm'\)) *}*.

Variants:

[1\. INSERT INTO target VALUES wa.](#!ABAP_VARIANT_1@1@)
[2\. INSERT target FROM wa.](#!ABAP_VARIANT_2@2@)
[3\. INSERT target FROM TABLE itab.](#!ABAP_VARIANT_3@3@)
[4\. INSERT target FROM ( SELECT subquery\_clauses *\[*UNION ...*\]* ).](#!ABAP_VARIANT_4@4@)

Effect

The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement INSERT inserts one or more rows into the DDIC database table or [DDIC table view](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") specified in target. The rows to be inserted are taken from a work area [wa](javascript:call_link\('abapinsert_source.htm'\)), an internal table [itab](javascript:call_link\('abapinsert_source.htm'\)), or the result set of an embedded subquery [SELECT subquery\_clauses](javascript:call_link\('abapinsert_source.htm'\)). The addition [connection](javascript:call_link\('abapiumd_conn.htm'\)) can be used to specify a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").

If VALUES is used, INTO must be specified between INSERT and [target](javascript:call_link\('abapiumd_target.htm'\)). If FROM is used, INTO must not be specified.

System Fields
The statement INSERT sets the values of the system fields sy-subrc (see below) and sy-dbcnt. sy-dbcnt is set to the number of rows that are inserted. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2 when inserting a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") with a component for [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry"), sy-dbcnt is also set to -1 (meaning undefined).

Hints

-   The inserted rows are included permanently in the table in the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Until then, they can still be removed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) defines whether the inserted data can be read into other [database LUWs](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") before or only after the database commit.
-   The statement INSERT sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") as an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").
-   The number of rows that can be inserted into the tables of a database within a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is limited on a database-dependent level, since a database system can only manage a limited amount of locks and data in the rollback area.
-   Once rows have been inserted into a [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)), this table must be emptied again explicitly before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") using the ABAP SQL statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without WHERE or using an explicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)), otherwise the runtime error COMMIT\_GTT\_ERROR is produced.
-   The statement INSERT cannot be applied to the system table TRDIR.

Variant 1   

INSERT INTO target VALUES wa.

Variant 2   

INSERT target FROM wa.

Effect

These two variants insert a single row contained in a work area [wa](javascript:call_link\('abapinsert_source.htm'\)). Both variants have the same behavior and only their syntax is different.

System Fields
These variants of the statement INSERT set the value of the system field sy-subrc as follows:

sy-subrc

Meaning

0

The row specified in the work area in [wa](javascript:call_link\('abapinsert_source.htm'\)) was inserted.

2

When a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") was specified with a component for [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry"), the non-LOB handle components were not yet written to the database, and are passed, at the latest, when the stream is closed instead. Whether this situation occurs or not depends on the database. See [LOB handles](javascript:call_link\('abenium_lob.htm'\)).

4

The row specified in the work area in [wa](javascript:call_link\('abapinsert_source.htm'\)) was not inserted, since a row with the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or a unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") already exists in the DDIC database table.

Example

Insertion of two individual rows into a DDIC database table.

DELETE FROM demo\_expressions.
DATA wa TYPE demo\_expressions.
wa = VALUE #( id = 'X' num1 = 111 ).
INSERT INTO demo\_expressions VALUES wa.
wa = VALUE #( id = 'Y' num1 = 222 ).
INSERT demo\_expressions FROM wa.

A [host expression](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used instead of an explicit work area.

DELETE FROM demo\_expressions.
INSERT INTO demo\_expressions VALUES @( VALUE #( id = 'X' num1 = 111
) ).
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 111 ) ).

Variant 3   

INSERT target FROM TABLE itab.

Effect

This variant inserts the rows contained in an internal table [itab](javascript:call_link\('abapinsert_source.htm'\)).

Hint

There is no syntax variant with VALUES for internal tables.

System Fields
This variant of the statement INSERT can raise exceptions if an attempt is made to insert rows from the internal table for rows with the same key already exist in the DDIC database table. If no exception is raised, the value of the system field sy-subrc is set as follows:

sy-subrc

Meaning

0

All rows of the internal table [itab](javascript:call_link\('abapinsert_source.htm'\)) were inserted or the internal table is empty.

4

The addition [ACCEPTING DUPLICATE KEYS](javascript:call_link\('abapinsert_source.htm'\)) is specified and not all rows of the internal table were inserted, since a row with the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or a unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") already exists in the DDIC database table.

For more information about exceptions when inserting rows from internal tables, see [TABLE itab](javascript:call_link\('abapinsert_source.htm'\)).

Example

Insertion of two individual rows into a DDIC database table.

DELETE FROM demo\_expressions.
DATA itab TYPE TABLE OF demo\_expressions.
itab = VALUE #( ( id = 'X' num1 = 111 )
                ( id = 'Y' num1 = 222 ) ).
INSERT demo\_expressions FROM TABLE itab.

A [host expression](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used instead of an explicit internal table.

DELETE FROM demo\_expressions.
INSERT demo\_expressions
       FROM TABLE @( VALUE #( ( id = 'X' num1 = 111 )
                              ( id = 'Y' num1 = 222 ) ) ).

Variant 4   

INSERT target FROM ( SELECT subquery\_clauses *\[*UNION ...*\]* ).

Effect

This variant inserts the rows of the [result set](javascript:call_link\('abapinsert_from_select.htm'\)) of an embedded [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") [SELECT subquery\_clauses](javascript:call_link\('abapinsert_source.htm'\)), where multiple result sets can be joined with [UNION](javascript:call_link\('abapunion.htm'\)).

System Fields
This variant of the statement INSERT sets the value of the system field sy-subrc as follows:

sy-subrc

Meaning

0

All rows of the result set of the embedded subquery were inserted.

4

The result set of the embedded subquery is empty, and no rows were inserted.

Hints

-   The statement INSERT with subquery cannot be used if [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is enabled for the table to be filled.
-   If a row cannot be inserted when the result set of the embedded subquery was inserted because a row with the same primary key or the same unique secondary index exists, a catchable exception of the class CX\_SY\_OPEN\_SQL\_DB is always raised and the system field sy-subrc is not set.

Example

Insertion of all rows of the DDIC database table DEMO\_JOIN1 into the table DEMO\_JOIN3.

DELETE FROM demo\_join1.
INSERT demo\_join1
  FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' )
                         ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' )
                         ( a = 'a3' b = 'b3' c = 'd3' d = 'd3' ) ) ).
DELETE FROM demo\_join3.
INSERT demo\_join3  FROM ( SELECT \* FROM demo\_join1 ).
SELECT \*
       FROM demo\_join3
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Continue
[INSERT dbtab, source](javascript:call_link\('abapinsert_source.htm'\))