  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Global%20Temporary%20Tables%2C%20ABENDDIC_DATABASE_TABLES_GTT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Global Temporary Tables

Global temporary tables (GTTs) are a special kind of [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry") intended for storing temporary data. This data exists only within a [database LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry") and can be accessed only by a consumer. GTTs are used to store temporary interim results to split complicated database processes into multiple steps. GTTs are designed for this purpose only and hence incur far lower administration costs than regular transparent tables.

The GTT concept specifies that a GTT is always empty at the start of a database LUW and hence always must be cleared at the end of each database LUW. Most database systems provide native support for this concept by implicitly defining data in a GTT database table as transaction-specific data. This data is deleted automatically at the end of a database LUW, that means, during a [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").

In ABAP Dictionary, the [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_tab_cat.htm) global temporary table can be specified for a DDIC database table. Tables in this category are created as a GTT in the database. The following additional rules apply in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") access to GTTs to avoid platform-dependent behavior and unexpected responses when handling GTTs:

-   If an ABAP Dictionary GTT was filled by a modifying ABAP SQL statement, it must be cleared explicitly before the end of the current [database LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). The following can be used here:
    -   The ABAP SQL statement [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) without specifying a WHERE condition.
    -   All explicit [database commits](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm) and [database rollbacks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm), such as the ABAP SQL statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm), [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm), [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback.htm), [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm) and all associated [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") statements and calls.
-   If an ABAP Dictionary GTT filled using ABAP SQL was not cleared explicitly using one of these methods before an [implicit database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm), the runtime error COMMIT\_GTT\_ERROR occurs independently of its content.
-   The obsolete addition CLIENT SPECIFIED is forbidden. This includes the use of [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) in queries and the use of [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapud_client_obsolete.htm) in UPDATE SET and DELETE FROM. The [non-obsolete form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm) of CLIENT SPECIFIED in write statements is allowed.

Besides these rules, GTTs can be used like regular transparent tables. Regarding their definition in ABAP Dictionary, the following settings are predefined and cannot be modified:

-   The [data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_dat_type.htm) and [size category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_siz_cat.htm) are irrelevant and undefined.
-   [Table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_buffer.htm) is not allowed.
-   [Logging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_protocol.htm) is disabled.
-   The [storage type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_storage.htm) is row store.
-   The [delivery class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm) is L.
-   No [replacement objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm) can be defined.

The number of [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm) of a GTT is limited to 15.

Hints

-   Only the variant [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) without a WHERE condition specified prevents the runtime error COMMIT\_GTT\_ERROR. Other variants of the DELETE statement do not prevent the runtime error, even if they clear the entire table.
-   It is advisable to only use [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") to access ABAP Dictionary GTTs.
-   [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm) statements with a [subquery](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") after [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_source.htm) are particularly well suited for filling GTTs, since the operation is then performed only on the database and no data transports are required between the database and the AS ABAP.
-   If the data of a GTT is only required for the time span of a database access, [common table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") might be an alternative option.
-   When accessed using ABAP SQL, explicit clears of ABAP Dictionary GTTs are enforced before implicit database commits for the following reasons:
    -   It prevents errors caused by any platform dependencies. It cannot be guaranteed that every database platform deletes the data of a GTT in an implicit database commit. This is guaranteed, however, when the GTT is cleared explicitly.
    -   For making the program easier to understand. If an implicit database commit occurs within a programming unit, for example due to an [RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_glosry.htm "Glossary Entry"), a developer may be surprised to find that the table is empty afterwards, since the database system deleted it implicitly at the end of the database LUW.
-   These additional rules apply only to [writes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) using [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"). If a GTT is filled using only [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") or [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") methods, no exceptions are raised in the case of implicit database commits. The GTT is then generally cleared by the database system. Conversely, using Native SQL or AMDP to clear a table filled using ABAP SQL does not prevent the runtime error COMMIT\_GTT\_ERROR.
-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback.htm) clear the GTTs of all currently open [database connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_connection_glosry.htm "Glossary Entry"), whereas [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm) and [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_rollback_connection.htm) only delete the GTTs of the specified connection.
-   When an ABAP Dictionary GTT is accessed using ABAP SQL, the syntax check is performed in [strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.

Executable Examples

-   [Global Temporary Tables, Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_gtt_abexa.htm)
-   [Union with Global Temporary Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_union_sum_gtt_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - Global Temporary Tables, Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_gtt_abexa.htm)