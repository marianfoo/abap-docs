---
title: "Table Buffering - Restrictions"
description: |
  Only transparent tables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm 'Glossary Entry') can be buffered. Global temporary tables(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm 'Glossary Entr
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_restrictions.htm"
abapFile: "abenbuffer_restrictions.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abenbuffer", "restrictions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_puffering.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Table%20Buffering%20-%20Restrictions%2C%20ABENBUFFER_RESTRICTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Table Buffering - Restrictions

Only [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry") can be buffered. [Global temporary tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") cannot be buffered. There is no special restriction on the key length of the table when buffering, which means that keys in buffered tables can be up to [900 bytes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm) long. For database accesses using [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry"), the table buffer is not used in principle.

Any [writes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) access the data in the database table directly and trigger [asynchronous buffer synchronization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_synchro.htm). After the invalidation of an entry in the buffer using a write statement, the next five reads that should have accessed the entry bypass the buffer of the current AS instance by default. The next read performed on the changed entry reloads it into the buffer and removes the invalidation. The number of reads that bypass the buffer before the reload is specified in the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") zcsa/sync\_reload\_c.

A [read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) statement should generally access the table buffer, but there are some restrictions that lead to bypassing the buffer. Than the statement is processed on the database and access the DDIC database tables, DDIC views or CDS view entities directly.

-   For read accesses, the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") is used that does not support all elements of ABAP SQL statements. If an ABAP SQL statement is used that is [not supported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_restr.htm) by the ABAP SQL engine, the table buffer is bypassed.
-   For the [buffering types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_type.htm) [single record buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_single_buffering.htm) and [generic buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_generic_buffering.htm) there are additional restrictions for WHERE conditions that can also cause bypassing the buffer:
    -   When a table or view with single record buffering is accessed, all key fields of the primary key must be listed using equality conditions joined using AND.
    -   When a generically buffered area is accessed, it must be specified completely using equality conditions joined using AND.
    -   Only [host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_variable_glosry.htm "Glossary Entry") or [host expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_expression_glosry.htm "Glossary Entry") can be used on the right side of a relational expression that is used to identify a single record or a generically buffered area.
    -   If [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_all_entries.htm) is used when accessing a table or view with generic buffering, the generic area must be specified exactly, and multiple generic areas cannot be joined using OR.
    -   In the variant of the operator IN with an [operand list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm), only column specifications are allowed on the left side of IN and only host variables or expressions on the right side.
-   Reads on a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that does not meet the [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_buffering.htm) for buffering bypass the buffer.

Hints

-   For performance reasons, the fact that the table buffer is bypassed when these restrictions are not met should always be remembered when accessing buffered tables or views.
-   To bypass the table buffer in the statement SELECT explicitly, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm) should always be used. It is not enough to rely on the implicit behavior itself.
-   [JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm) expressions currently always bypass the buffer. The ABAP SQL engine supports join expressions for internal tables accessed by [SELECT ... FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) but not yet for database tables in the table buffer.
-   The prerequisites for [table buffering of CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_buffering.htm) are checked as restrictions for the view itself. If a CDS view entity can be enabled for table buffering and buffering is switched on with a [CDS entity buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry"), there should be no reason for ABAP SQL to bypass the buffer.