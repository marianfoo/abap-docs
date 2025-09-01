---
title: "Table Buffering - Restrictions"
description: |
  Only transparent tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm 'Glossary Entry') and pooled tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm 'Glossary Entry') can be buffered. There is no special re
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_restrictions.htm"
abapFile: "abenbuffer_restrictions.htm"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "internal-table", "abenbuffer", "restrictions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) →  [Open SQL - Table Buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm) → 

Table Buffering - Restrictions

Only [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry") and [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") can be buffered. There is no special restriction of the key length of the table when buffering, which means that keys in buffered tables can be up to [900 bytes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm) long. Buffering is not possible for [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry"). The table buffer is not used on principle in the case of database reads using [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry").

Any [writes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) access the data in the database table directly and entail [asynchronous buffer synchronization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm). After the invalidation of an entry in the buffer using a write statement, the next five reads that should have accessed the entry bypass the buffer of the current application server by default. The next read performed on the changed entry reloads it into the buffer and removes the invalidation. The number of reads that bypass the buffer before the reload is specified in the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") zcsa/sync\_reload\_c.

The fact that certain operations can only be performed on the database and not in the table buffer produces the further restrictions for reads listed below. If these restrictions are not respected, [Open SQL read statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) bypass the [table buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_buffer_glosry.htm "Glossary Entry") implicitly and access the database tables or views directly.

-   The following reads always bypass the table buffer:

-   Use of [subqueries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry"), more specifically the statement [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm).

-   The Open SQL language element [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)

-   Reads on a database table or database view for which a [replacement object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) is defined.

-   Reads using a [database connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry") specified explicitly using the addition [CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm). This also applies when the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is specified explicitly.

-   Reads redirected using the class [CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_osql_replace.htm) during a unit test.

-   Reads on a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") that does not meet the [prerequisites](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_sap_puffer.htm) for buffering.

-   The following applies in a [main query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmainquery_glosry.htm "Glossary Entry"):

-   No [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) can be used in the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) list.

-   [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) cannot be used.

-   The additions [DISTINCT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) and [FOR UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_single.htm) cannot be used.

-   No [JOIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) expressions can be specified.

-   The [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) clause cannot be used. This also excludes the [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) clause.

-   The [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm) clause cannot be used in cases where single columns are specified as sort keys and these columns are not a left-aligned subset of the primary key (in the correct order) or if the addition DESCENDING is specified in a column.

-   The addition CLIENT SPECIFIED can be specified to switch off automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") in client-specific data sources only if their client column is specified in a WHERE condition.

-   Restrictions for the WHERE [condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm)

-   When a table or view with single record buffering is accessed, all key fields of the primary key must be specified using equality conditions joined using AND.

-   When a generically buffered area is accessed, it must be specified in full using equality conditions joined using AND.

-   The condition [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_null.htm) cannot be used.

-   [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) cannot be used on the left side of a relational expression.

-   Only [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_variable_glosry.htm "Glossary Entry") or [host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expression_glosry.htm "Glossary Entry") can be used on the right side of a relational expression.

-   No column can be [compared](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) with another column in a data source specified after FROM.

-   If [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_itab.htm) is used when accessing a table or view with generic buffering, the generic area must be specified exactly and multiple generic areas cannot be joined using OR.

Notes

-   For performance reasons, the fact that the table buffer is bypassed when these restrictions are not met should always be remembered when accessing buffered database tables or views.

-   To bypass the table buffer in the statement SELECT explicitly, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) should always be used. It is not enough to rely on the implicit behavior itself.

-   In cases where an [internal table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry"), the read restrictions also determine whether the table can be evaluated on the application server or whether its content needs to be transported to the database.