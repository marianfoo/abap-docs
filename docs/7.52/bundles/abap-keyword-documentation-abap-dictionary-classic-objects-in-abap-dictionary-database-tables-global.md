# ABAP - Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Database Tables / Global Temporary Tables

Included pages: 2


### abenddic_database_tables_gtt.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) → 

Global Temporary Tables

Global temporary tables (GTTs) are special [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry") used as repositories for temporary data. This data exists only within a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") and can be accessed only by one consumer. GTTs are used to save temporary subtotals thereby splitting complicated database processes into multiple steps. GTTs are designed for this purpose only and hence incur far lower administration costs than regular transparent tables.

The GTT concept specifies that a GTT is always empty at the start of a database LUW and hence always has to be cleared at the end of each database LUW. Generally, database systems provide native support for this concept by defining data in a GTT database table as transaction-specific data implicitly. This data is deleted automatically at the end of a database LUW (in a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry")).

In ABAP Dictionary, the [table category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_tab_type.htm) global temporary table can be specified for a database table. Tables in this category have the variant GTT in the database. The following additional rules apply in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") access to GTTs in ABAP Dictionary to avoid platform-dependent behavior and unexpected responses when handling GTTs:

-   If an ABAP Dictionary GTT was filled by a modifying [Open SQL statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm), it must be cleared explicitly before the end of the current [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). The following can be used here:

-   The Open SQL statement [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) without specifying a WHERE condition.

-   All explicit [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm) and [database rollbacks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_rollback.htm), such as the Open SQL statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm), [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm), [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm), [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) plus all associated [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") statements and calls.

-   If an ABAP Dictionary GTT filled using Open SQL was not cleared explicitly using one of these methods before an [implicit database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm), the runtime error COMMIT\_GTT\_ERROR occurs independently of its content.

-   The use of the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) is not allowed in any Open SQL statement.

Alongside these rules, GTTs can be used like regular transparent tables. With respect to their definition in ABAP Dictionary, the following settings have predefined values that cannot be modified:

-   The [data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_dat_type.htm) and [size category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_siz_cat.htm) are ignored and undefined.

-   [Table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_buffer.htm) is not allowed.

-   [Logging](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_protocol.htm) is switched off.

-   The [storage type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_storage.htm) is row store.

-   The [delivery class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_delivery.htm) is L.

-   No [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) can be used.

The number of [key fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm) of a GTT is limited to 15.

Notes

-   When accessed using Open SQL, explicit clears of ABAP Dictionary GTTs are forced before implicit database commits for the following reasons:

-   For making the program easier to understand. If an implicit database commit occurs within a programming module, for example due to an [RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_glosry.htm "Glossary Entry"), a developer may be surprised to find that the table is empty afterwards, since the database system deleted it implicitly at the end of the database LUW.

-   It prevents errors caused by any platform dependencies. It cannot be guaranteed that every database platform deletes the data of a GTT in an implicit database commit. This is guaranteed, however, when the GTT is cleared explicitly.

-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) clear the GTTs of all currently open [database connections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry"), whereas [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) and [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) only delete the GTTs of the specified connection.

-   Only the variant [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) without a WHERE condition specified prevents the runtime error COMMIT\_GTT\_ERROR. Other variants of the DELETE statement do not prevent the runtime error, even if they clear the entire table.

-   These additional rules apply only to [writes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) using [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"). If a GTT is filled using only [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") methods, no exceptions are raised in the case of implicit database commits. The GTT is then generally cleared by the database system. Conversely, using Native SQL or AMDP to clear a table filled using Open SQL does not prevent the runtime error COMMIT\_GTT\_ERROR.

-   It is advisable to only use [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") to access ABAP Dictionary GTTs.

-   [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm) statements with a [subquery](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry") after [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_source.htm) are particularly well suited for filling GTTs, since the operation is then performed only on the database and no data transports are required between the database and the application server.

-   If the data of a GTT is only required when accessing a database, it is possible to make the corresponding request using [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").

-   When an ABAP Dictionary GTT is accessed using Open SQL, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

Executable Examples

-   [Global Temporary Tables, Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_gtt_abexa.htm)

-   [Union with Global Temporary Table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_union_sum_gtt_abexa.htm)

Continue
![Example](exa.gif "Example") [Global Temporary Tables, Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_gtt_abexa.htm)


### abenddic_gtt_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Global Temporary Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm) → 

Global Temporary Tables, Access

This example demonstrates how [global temporary tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm) in ABAP Dictionary are accessed.

Source Code

REPORT demo\_gtt.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(o) = cl\_demo\_output=>new( ).
    DATA delete TYPE abap\_bool.
    cl\_demo\_input=>request(
      EXPORTING text         = \`Delete lines before implicit commit\`
                as\_checkbox = abap\_true
      CHANGING  field       = delete ).
    "Fill GTT with Open SQL
    INSERT demo\_gtt FROM @( VALUE #( id = 'X' col = 111 ) ).
    SELECT SINGLE \* FROM demo\_gtt INTO @DATA(wa).
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after open insert\`
                      ELSE \`No line found after open insert\` ) ).
    IF delete = abap\_true.
      DELETE FROM demo\_gtt.
    ENDIF.
    WAIT UP TO 1 SECONDS.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after implicit commit\`
                      ELSE \`No line found after implicit commit\` ) ).
    "Fill GTT with Native SQL (for demonstration only!)
    wa = VALUE demo\_gtt( id = 'X' col = 111 ).
    EXEC SQL.
      INSERT INTO DEMO\_GTT VALUES ( :wa-id, :wa-col )
    ENDEXEC.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after native insert\`
                      ELSE \`No line found after native insert\` ) ).
    WAIT UP TO 1 SECONDS.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after implicit commit\`
                      ELSE \`No line found after implicit commit\` ) ).
    o->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") and [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") are used to access a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") DEMO\_GTT:

-   After the GTT is filled using the Open SQL statement [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), the table is cleared again (after user input) using the Open SQL statement [DELETE FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) without a WHERE condition. If the DELETE statement is not executed, the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm) (which performs an implicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry")) produces the runtime error COMMIT\_GTT\_ERROR, which can be found in the ABAP dump analysis (ST22).

-   After the GTT has been filled using a static native INSERT statement between [EXEC SQL - ENDEXEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm), the table is not cleared explicitly. Instead it is cleared in most database platforms using an implicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") raised by the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm).

Note

Native SQL is used to fill the GTT here for demonstration purposes only. Only Open SQL should be used to access GTTs.
