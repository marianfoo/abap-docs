  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

DELETE dbtab

[Quick Reference](javascript:call_link\('abapdelete_dbtab_shortref.htm'\))

Syntax

DELETE *{* FROM [target](javascript:call_link\('abapdelete_target.htm'\)) *\[* [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\))*\]* *\[* [WHERE sql\_cond](javascript:call_link\('abapdelete_where.htm'\))*\]* *\[*[db\_hints](javascript:call_link\('abenosql_db_hints.htm'\))*\]*
                                  [*\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS](javascript:call_link\('abapdelete_where.htm'\))*\]* *}*
     *|* *{* [target](javascript:call_link\('abapdelete_target.htm'\)) *\[* [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\))*\]* FROM [source](javascript:call_link\('abapdelete_source.htm'\)) *}*.

Variants:

[1\. DELETE FROM target ...](#!ABAP_VARIANT_1@1@)
[2\. DELETE target FROM source.](#!ABAP_VARIANT_2@2@)

Effect

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement DELETE deletes one or more rows from the database table or classic view specified in [target](javascript:call_link\('abapdelete_target.htm'\)). The rows to delete can be specified as follows:

-   In a variant DELETE FROM target using [conditions](javascript:call_link\('abapdelete_where.htm'\))
    
-   In a variant DELETE target FROM using data objects in [source](javascript:call_link\('abapdelete_source.htm'\))
    

The addition [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\)) can be used to specify a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").

System Fields
The statement DELETE sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

In the variant DELETE FROM target, at least one row was deleted if a WHERE condition was specified and all or n rows were deleted if no condition was specified. In the variant DELETE target FROM, the specified row was deleted if a work area was specified in source and all specified rows were deleted if an internal table was specified in source or the internal table is empty.

4

In the variant DELETE FROM target, no row was deleted if a WHERE condition was specified or no row was deleted if no condition was specified, since the database table was already empty. In the variant DELETE target FROM, no row was deleted if a work area was specified in source or not all specified rows were deleted if an internal table was specified in source.

The statement DELETE sets sy-dbcnt to the number of deleted rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Notes

-   The rows are deleted permanently from the database table in the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Until that point, they can still be undone using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) defines whether the deleted data can be read into other [database LUWs](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") before or only after the database commit.
    
-   The statement DELETE sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") as an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").
    
-   The number of rows that can be deleted from the tables of a database within a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
    
-   The statement DELETE FROM dbtab has the statement [DELETE FROM itab](javascript:call_link\('abapdelete_itab_lines.htm'\)) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.
    

Variant 1

DELETE FROM target ...

Effect

In the variant DELETE FROM target, either all rows are deleted or the rows in question are restricted using a [WHERE condition](javascript:call_link\('abapdelete_where.htm'\)) or additions [ORDER BY](javascript:call_link\('abapdelete_where.htm'\)), [OFFSET](javascript:call_link\('abapdelete_where.htm'\)), and [UP TO](javascript:call_link\('abapdelete_where.htm'\)).

Example

Deletes a row in a database table. The row is specified using a WHERE condition.

DELETE FROM demo\_update WHERE id = 'X'.

Variant 2

DELETE target FROM source.

Effect

In the variant DELETE target FROM, either a row specified by a [work area](javascript:call_link\('abapdelete_source.htm'\)) is deleted or multiple rows specified by an [internal table](javascript:call_link\('abapdelete_source.htm'\)) are deleted.

Example

Deletes a row in a database table. The row is specified using a work area.

DELETE demo\_update FROM @( VALUE #( id = 'X' ) ).

Continue
[DELETE dbtab - target](javascript:call_link\('abapdelete_target.htm'\))
[DELETE dbtab - cond](javascript:call_link\('abapdelete_where.htm'\))
[DELETE dbtab - source](javascript:call_link\('abapdelete_source.htm'\))