  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DELETE dbtab, ABAPDELETE_DBTAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

DELETE dbtab

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab_shortref.htm)

Syntax

DELETE *{* FROM [target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm) *\[* [connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_conn.htm)*\]* *\[* [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm)*\]* *\[*[db\_hints](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_db_hints.htm)*\]*
                                  [*\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm)*\]* *}*
     *|* *{* [target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm) *\[* [connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_conn.htm)*\]* FROM [source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_source.htm) *}*
       *\[*[MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmapping_from_entity.htm)*\]*.

Variants:

[1\. DELETE FROM target ...](#!ABAP_VARIANT_1@1@)
[2\. DELETE target FROM source.](#!ABAP_VARIANT_2@2@)

Addition:

[... MAPPING FROM ENTITY](#!ABAP_ONE_ADD@1@)

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement DELETE deletes one or more rows from the DDIC database table or [DDIC table view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_view_glosry.htm "Glossary Entry") specified in target. The rows to be deleted can be specified as follows:

-   In a variant DELETE FROM target using [conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm)
-   In a variant DELETE target FROM using data objects in [source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_source.htm)

The addition [connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_conn.htm) can be used to specify a [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

System Fields
The statement DELETE sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

In the variant DELETE FROM target, at least one row was deleted if a WHERE condition was specified and all or n rows were deleted if no condition was specified. In the variant DELETE target FROM, the specified row was deleted if a work area was specified in source and all specified rows were deleted if an internal table was specified in source or the internal table is empty.

4

In the variant DELETE FROM target, no row was deleted if a WHERE condition was specified or no row was deleted if no condition was specified, since the database table was already empty. In the variant DELETE target FROM, no row was deleted if a work area was specified in source or not all specified rows were deleted if an internal table was specified in source.

The statement DELETE sets sy-dbcnt to the number of deleted rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Hints

-   The rows are deleted permanently from the DDIC database table in the next [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). Until that point, they can still be undone using a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") The current [isolation level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_isolation.htm) defines whether the deleted data can no longer be read into other [database LUWs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry") before or only after the database commit.
-   The statement DELETE sets a [database lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_lock_glosry.htm "Glossary Entry") as an [exclusive lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeadlock_glosry.htm "Glossary Entry").
-   The number of rows that can be deleted from the tables of a database within a [database LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
-   The statement DELETE FROM dbtab has the statement [DELETE FROM itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_lines.htm) with identical syntax. If an internal table has the same name as a DDIC database table, a statement like this accesses the internal table.

Variant 1   

DELETE FROM target ...

Effect

In the variant DELETE FROM target, either all rows are deleted or the rows to be deleted are restricted using a [WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm) or additions [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm), [OFFSET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm), and [UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm).

Example

Deletion of a row in a DDIC database table. The row is specified using a WHERE condition.

DELETE FROM demo\_update WHERE id = 'X'.

Variant 2   

DELETE target FROM source.

Effect

In the variant DELETE target FROM, either a row specified by a [work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_source.htm) is deleted or multiple rows specified by an [internal table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_source.htm) are deleted.

Example

Deletion of a row in a DDIC database table. The row is specified using a work area.

DELETE demo\_update FROM @( VALUE #( id = 'X' ) ).

Addition   

... MAPPING FROM ENTITY

Effect

The addition MAPPING FROM ENTITY is used to handle structures and internal tables that are typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). Find more information in the topic [ABAP SQL Statements with MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmapping_from_entity.htm).

Continue
[DELETE dbtab, cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm)
[DELETE dbtab, source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_source.htm)