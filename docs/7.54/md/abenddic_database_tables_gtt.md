  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

Global Temporary Tables

Global temporary tables (GTTs) are special [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") used as repositories for temporary data. This data exists only within a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") and can be accessed only by one consumer. GTTs are used to save temporary subtotals thereby splitting complicated database processes into multiple steps. GTTs are designed for this purpose only and hence incur far lower administration costs than regular transparent tables.

The GTT concept specifies that a GTT is always empty at the start of a database LUW and hence always has to be cleared at the end of each database LUW. Generally, database systems provide native support for this concept by defining data in a GTT database table as transaction-specific data implicitly. This data is deleted automatically at the end of a database LUW (in a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry")).

In ABAP Dictionary, the [table category](javascript:call_link\('abenddic_database_tables_tab_type.htm'\)) global temporary table can be specified for a database table. Tables in this category have the variant GTT in the database. The following additional rules apply in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") access to GTTs in ABAP Dictionary to avoid platform-dependent behavior and unexpected responses when handling GTTs:

-   If an ABAP Dictionary GTT was filled by a modifying ABAP SQL statement, it must be cleared explicitly before the end of the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). The following can be used here:

-   The ABAP SQL statement [DELETE FROM dbtab](javascript:call_link\('abapdelete_dbtab.htm'\)) without specifying a WHERE condition.

-   All explicit [database commits](javascript:call_link\('abendb_commit.htm'\)) and [database rollbacks](javascript:call_link\('abendb_rollback.htm'\)), such as the ABAP SQL statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) plus all associated [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements and calls.

-   If an ABAP Dictionary GTT filled using ABAP SQL was not cleared explicitly using one of these methods before an [implicit database commit](javascript:call_link\('abendb_commit.htm'\)), the runtime error COMMIT\_GTT\_ERROR occurs independently of its content.

-   The obsolete addition CLIENT SPECIFIED is forbidden. This includes the use of [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) in queries and the use of [CLIENT SPECIFIED](javascript:call_link\('abapud_client_obsolete.htm'\)) in UPDATE SET and DELETE FROM. The [non-obsolete form](javascript:call_link\('abapiumd_client.htm'\)) of CLIENT SPECIFIED in write statements is allowed.

Alongside these rules, GTTs can be used like regular transparent tables. With respect to their definition in ABAP Dictionary, the following settings have predefined values that cannot be modified:

-   The [data type](javascript:call_link\('abenddic_database_tables_dat_type.htm'\)) and [size category](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\)) are ignored and undefined.

-   [Table buffering](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) is not allowed.

-   [Logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is switched off.

-   The [storage type](javascript:call_link\('abenddic_database_tables_storage.htm'\)) is row store.

-   The [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) is L.

-   No [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) can be used.

The number of [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of a GTT is limited to 15.

Notes

-   When accessed using ABAP SQL, explicit clears of ABAP Dictionary GTTs are forced before implicit database commits for the following reasons:

-   For making the program easier to understand. If an implicit database commit occurs within a programming module, for example due to an [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry"), a developer may be surprised to find that the table is empty afterwards, since the database system deleted it implicitly at the end of the database LUW.

-   It prevents errors caused by any platform dependencies. It cannot be guaranteed that every database platform deletes the data of a GTT in an implicit database commit. This is guaranteed, however, when the GTT is cleared explicitly.

-   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) clear the GTTs of all currently open [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"), whereas [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) and [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) only delete the GTTs of the specified connection.

-   Only the variant [DELETE FROM dbtab](javascript:call_link\('abapdelete_dbtab.htm'\)) without a WHERE condition specified prevents the runtime error COMMIT\_GTT\_ERROR. Other variants of the DELETE statement do not prevent the runtime error, even if they clear the entire table.

-   These additional rules apply only to [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) using [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). If a GTT is filled using only [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") methods, no exceptions are raised in the case of implicit database commits. The GTT is then generally cleared by the database system. Conversely, using Native SQL or AMDP to clear a table filled using ABAP SQL does not prevent the runtime error COMMIT\_GTT\_ERROR.

-   It is advisable to only use [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") to access ABAP Dictionary GTTs.

-   [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statements with a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after [FROM](javascript:call_link\('abapinsert_source.htm'\)) are particularly well suited for filling GTTs, since the operation is then performed only on the database and no data transports are required between the database and the AS ABAP.

-   If the data of a GTT is only required when accessing a database, it is possible to make the corresponding request using [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry").

-   When an ABAP Dictionary GTT is accessed using ABAP SQL, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Executable Examples

-   [Global Temporary Tables, Access](javascript:call_link\('abenddic_gtt_abexa.htm'\))

-   [Union with Global Temporary Table](javascript:call_link\('abenselect_union_sum_gtt_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Global Temporary Tables, Access](javascript:call_link\('abenddic_gtt_abexa.htm'\))