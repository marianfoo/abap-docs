  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) → 

Table Buffering - Restrictions

Only [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") can be buffered. [Global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") cannot be buffered. There is no special restriction on the key length of the table when buffering, which means that keys in buffered tables can be up to [900 bytes](javascript:call_link\('abenddic_database_tables_key.htm'\)) long. The table buffer is not used on principle in the case of database reads using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

Any [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) access the data in the database table directly and trigger [asynchronous buffer synchronization](javascript:call_link\('abenbuffer_synchro.htm'\)). After the invalidation of an entry in the buffer using a write statement, the next five reads that should have accessed the entry bypass the buffer of the current AS instance by default. The next read performed on the changed entry reloads it into the buffer and removes the invalidation. The number of reads that bypass the buffer before the reload is specified in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") zcsa/sync\_reload\_c.

The fact that certain operations can only be performed on the database and not in the table buffer produces the further restrictions for reads listed below. If these restrictions are not respected, [read ABAP SQL statements](javascript:call_link\('abenopen_sql_reading.htm'\)) bypass the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") implicitly and access the DDIC database tables or DDIC views directly.

-   The following reads always bypass the table buffer:

-   Use of [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"), more specifically the statement [WITH](javascript:call_link\('abapwith.htm'\)).

-   The ABAP SQL language element [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)).

-   The ABAP SQL language element [UNION](javascript:call_link\('abapunion.htm'\)).

-   Reads on a DDIC database table or DDIC database view for which a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) is defined.

-   Reads using a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") specified explicitly using the addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)). This also applies when the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is specified explicitly.

-   Reads redirected using the class [CL\_OSQL\_REPLACE](javascript:call_link\('abencl_osql_replace.htm'\)) during a unit test.

-   Reads on a [CDS](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") view that does not meet the [prerequisites](javascript:call_link\('abencds_v1_buffering.htm'\)) for buffering.

-   The following applies in a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry"):

-   No [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can be used in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list.

-   Only [specific SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\)) can be used.

-   The additions [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) and [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) cannot be used.

-   No [JOIN](javascript:call_link\('abapselect_join.htm'\)) expressions can be specified.

-   The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause cannot be used. This also excludes the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.

-   The [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause cannot be used in cases where single columns are specified as sort keys and these columns are not a left-aligned subset of the primary key in the correct order or if the addition DESCENDING is specified in a column.

-   The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can be specified to disable [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) in client-dependent data sources only if their client column is specified in a WHERE condition.

-   Restrictions on the [SQL condition](javascript:call_link\('abenasql_cond.htm'\)) in the WHERE clause:

-   When a table or view with single record buffering is accessed, all key fields of the primary key must be listed using equality conditions joined using AND.

-   When a generically buffered area is accessed, it must be specified completely using equality conditions joined using AND.

-   Only [specific SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\)) can be used on the left side of a relational expression.

-   Only [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") or [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") can be used on the right side of a relational expression that is used to identify a single record or a generically buffered area. In any other relational expressions of a condition, columns can also be specified in [comparisons](javascript:call_link\('abenwhere_logexp_compare.htm'\)) or when [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)) is used. This applies in cases where neither numeric operand has the type DF16\_DEC or DF34\_DEC, both operands are character-like, or both operands have the type RAW with the same length.

-   No column can be [compared](javascript:call_link\('abenwhere_logexp_compare.htm'\)) with another column in a data source specified after FROM.

-   If [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is used when accessing a table or view with generic buffering, the generic area must be specified exactly, and multiple generic areas cannot be joined using OR.

-   The variant of the operator IN with an [operand list](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) on the left side cannot be used.

Hints

-   For performance reasons, the fact that the table buffer is bypassed when these restrictions are not met should always be remembered when accessing buffered DDIC database tables or DDIC views.

-   To bypass the table buffer in the statement SELECT explicitly, the addition [BYPASSING BUFFER](javascript:call_link\('abapselect_additions.htm'\)) should always be used. It is not enough to rely on the implicit behavior itself.

-   In cases where an [internal table](javascript:call_link\('abapselect_itab.htm'\)) is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), the read restrictions also determine whether the table can be evaluated on the AS ABAP or whether its content needs to be transported to the database.