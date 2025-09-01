  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.53, ABENNEWS-753-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.53

[1\. Open SQL Renamed as ABAP SQL](#!ABAP_MODIFICATION_1@1@)
[2\. Access to Hierarchy Data](#!ABAP_MODIFICATION_2@2@)
[3\. Secondary Connections](#!ABAP_MODIFICATION_3@3@)
[4\. Relational Expression IS INITIAL](#!ABAP_MODIFICATION_4@4@)
[5\. Date/Time Functions](#!ABAP_MODIFICATION_5@5@)
[6\. Exposing CDS Associations of Common Table Expressions](#!ABAP_MODIFICATION_6@6@)
[7\. Numeric Literals in the SELECT List](#!ABAP_MODIFICATION_7@7@)
[8\. Enhanced Cast Matrix](#!ABAP_MODIFICATION_8@8@)
[9\. Client Handling in Subquery of the Statement INSERT](#!ABAP_MODIFICATION_9@9@)
[10\. Subquery as Data Source of MODIFY](#!ABAP_MODIFICATION_10@10@)
[11\. USING CLIENT and Session Variable client](#!ABAP_MODIFICATION_11@11@)
[12\. Null Values in the Table Buffer](#!ABAP_MODIFICATION_12@12@)
[13\. Restrictions Removed](#!ABAP_MODIFICATION_13@13@)
[14\. Weaker Check](#!ABAP_MODIFICATION_14@14@)
[15\. New Check](#!ABAP_MODIFICATION_15@15@)
[16\. Replacement Service in Program Calls](#!ABAP_MODIFICATION_16@16@)
[17\. GROUP BY Addition GROUPING SETS](#!ABAP_MODIFICATION_17@17@)
[18\. Aggregate Function GROUPING](#!ABAP_MODIFICATION_18@18@)
[19\. Stricter Checks on Syntax Rules](#!ABAP_MODIFICATION_19@19@)

Modification 1   

Open SQL Renamed as ABAP SQL

The existing name [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") has been changed to [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). This renaming reflects that some parts of ABAP SQL now only support certain database platforms, specifically SAP HANA database, and hence that it is no longer fully platform-independent.

Modification 2   

Access to Hierarchy Data

In queries, both

-   [hierarchies](javascript:call_link\('abenselect_hierarchy.htm'\)) and
-   [hierarchy navigators](javascript:call_link\('abenselect_hierarchy_navigators.htm'\))

can be specified as [data sources](javascript:call_link\('abapselect_data_source.htm'\)). Accessing hierarchy data triggers the [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 3   

Secondary Connections

On an AS ABAP with a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as its [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), only those [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") should be used from the database table DBCON whose [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is also a SAP HANA database. Alongside the CONNECTION addition in ABAP SQL, this also applies to Native SQL (ADBC and EXEC SQL).

SAP HANA Smart Data Access (SDA) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names across the standard connection. This is only possible in AMDP and Native SQL. Database Shared Libraries (DBSL) are no longer required here.

Modification 4   

Relational Expression IS INITIAL

The relational expression [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\)) can now be used in a condition [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) to compare operands with their type-dependent initial value.

When used, this expression requires the [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 5   

Date/Time Functions

ABAP SQL now supports the following new date/time functions:

-   [Time functions](javascript:call_link\('abensql_time_func.htm'\))
    -   TIMS\_IS\_VALID
-   [Time stamp functions](javascript:call_link\('abensql_timestamp_func.htm'\))
    -   TSTMP\_IS\_VALID
    -   TSTMP\_CURRENT\_UTCTIMESTAMP
    -   TSTMP\_SECONDS\_BETWEEN
    -   TSTMP\_ADD\_SECONDS
-   [Date/time conversions](javascript:call_link\('abensql_date_time_conversions.htm'\))
    -   TSTMP\_TO\_DATS
    -   TSTMP\_TO\_TIMS
    -   TSTMP\_TO\_DST
    -   DATS\_TIMS\_TO\_TSTMP
-   [Time zone functions](javascript:call_link\('abensql_timezone_func.htm'\))
    -   ABAP\_SYSTEM\_TIMEZONE
    -   ABAP\_USER\_TIMEZONE

When used, these functions require the [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 6   

Exposing CDS Associations of Common Table Expressions

When [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") are accessed within a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)) of the statement [WITH](javascript:call_link\('abapwith.htm'\)) can now be used to publish [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of these views for use in [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) of the current WITH statement. The addition REDIRECTED TO can also be used to replace the target data source of the published association with a previous CTE or the current CTE.

When used, this addition requires the [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 7   

Numeric Literals in the SELECT List

Until now, only those [numeric literals](javascript:call_link\('abennumeric_literal_glosry.htm'\) "Glossary Entry") whose value matched the value range of the type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) could be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of a query. Now numeric literals of up to 31 digits can be specified, which are interpreted as numbers of the type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) if the value range of INT4 is exceeded.

Modification 8   

Enhanced Cast Matrix

A [cast expression](javascript:call_link\('abensql_cast.htm'\)) can now be used to convert the data types INT1, INT2, INT4, and INT8 to DEC.

Modification 9   

Client Handling in Subquery of the Statement INSERT

The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) can now be specified in a [subquery](javascript:call_link\('abapinsert_from_select.htm'\)). This means that the client specified for the target table of the insert operation can be different from the client specified for the data source of the subquery.

If USING CLIENT is not specified in the subquery, the current client ID is now always applied to automatic client handling. Before Release 7.53, the client ID specified after INSERT using [USING CLIENT](javascript:call_link\('abapiumd_target.htm'\)) was also used in the subquery.

The FROM clause of the subquery can now access the database table or classic view filled using the INSERT statement. This makes it possible to copy the data from one client to another.

In the subquery, using USING CLIENT or accessing the database table or classic view filled by the INSERT statement enables [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 10   

Subquery as Data Source of MODIFY

In the ABAP SQL write statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), a parenthesized subquery [SELECT subquery\_clauses](javascript:call_link\('abapinsert_source.htm'\)) can now be specified as a data source after FROM. The rows of the results set of the subquery are modified or inserted in the target table directly on the database. No data transport is required between the database and AS ABAP. When used in MODIFY, a subquery demands [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 11   

USING CLIENT and Session Variable client

In an ABAP SQL read in which multiple [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") access client-specific [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and the client handling method is defined using the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](javascript:call_link\('abencds_view_client_handling_v1.htm'\)), the [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) client (which corresponds to the [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CDS\_CLIENT on the SAP HANA database) must be set to the same value in all of these queries. The runtime error SAPSQL\_DIFFERENT\_CLIENT\_VALUES occurs if [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is used to specify a different client ID in one of these queries. This situation can occur in the statement [WITH](javascript:call_link\('abapwith.htm'\)) or when using [UNION](javascript:call_link\('abapunion.htm'\)).

Modification 12   

Null Values in the Table Buffer

The [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") now supports real [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). In [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), null values are no longer transformed to type-dependent initial values. When the buffer is accessed, the same results are produced as when the database is accessed directly. The corresponding restrictions now no longer apply. The following are some of the aspects affected:

-   [Relational expressions](javascript:call_link\('abenasql_cond.htm'\)) with operands that contain null values. The result of a comparison of this type is now also unknown when the comparison is made in the buffer (except in the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))).
-   If used, [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) no longer bypasses table buffering.
-   Accesses to [buffered CDS views](javascript:call_link\('abencds_v1_buffering.htm'\)). When the buffer is accessed, the same results are now produced as when the database is accessed directly. Null values are often produced by [outer joins](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) or in expressions such as [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\)) expressions. The restriction specifying that only those CDS views are buffered whose elements do not contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") no longer applies.

Modification 13   

Restrictions Removed

-   For [certain SQL expressions and functions](javascript:call_link\('abenbuffer_expressions.htm'\)), an ABAP SQL read statement no longer bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").
-   ABAP SQL read statements no longer bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") in cases where a column is specified on the right side of [comparisons](javascript:call_link\('abenwhere_logexp_compare.htm'\)) or of [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)) in a [condition](javascript:call_link\('abenasql_cond.htm'\)) that is not required to identify a single row or a generic range. The prerequisite for this is that both operands are numeric but do not have the type DF16\_DEC or DF34\_DEC, that both operands are character-like, or that both operands have the type RAW with the same lengths.

Modification 14   

Weaker Check

ABAP SQL statements that exploit a database property not supported by all database platforms no longer produce a syntax check warning and produce a syntax warning in the [extended program checks](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") instead.

Modification 15   

New Check

If the data of the [internal table](javascript:call_link\('abapselect_itab.htm'\)) needs to be transported to the database in cases where the internal table is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), a syntax check warning occurs that can be hidden using the pragma ##itab\_db\_select.

Modification 16   

Replacement Service in Program Calls

The method ACTIVATE\_REPLACEMENT of the class [CL\_OSQL\_REPLACE](javascript:call_link\('abencl_osql_replace.htm'\)) has the new parameter FLG\_SURVIVE\_SUBMIT, which now also permits redirections in called programs.

Modification 17   

GROUP BY Addition GROUPING SETS

In a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) can now be used. The addition GROUPING SETS makes it possible to group multiple grouping sets under one GROUP BY clause. This is the same as specifying [UNION ALL](javascript:call_link\('abapunion.htm'\)) with different GROUP BY clauses. The addition GROUPING SETS has an advantage over a UNION clause grouping because the SELECT clause only needs to be specified once.

Using GROUPING SETS triggers [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Modification 18   

Aggregate Function GROUPING

The aggregate function [GROUPING](javascript:call_link\('abengrouping_function.htm'\)) can now be used in a [SELECT](javascript:call_link\('abapselect.htm'\)) statement. The grouping function GROUPING can be used to verify whether a specific column is part of the [aggregation](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry"). The grouping function can be used only if the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause contains the addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)).

Modification 19   

Stricter Checks on Syntax Rules

A violation of the following rules now always produces a syntax error. In the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check, these violations already produced a syntax error. Outside the strict modes, they produced a syntax check warning and in most cases a runtime error when the program was executed.

-   When a view is accessed, its key fields must be located together at the start.
-   The additions [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be used when a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is accessed that is associated with a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry").
-   Even when using [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)), the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) can only be used for client-specific data sources.
-   When a [column is specified](javascript:call_link\('abenabap_sql_columns.htm'\)), the actual names of the components must be used for a database table containing an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), and not the names of any groups defined in ABAP Dictionary.
-   An alternative column name of the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list defined using AS can have a maximum of 30 characters. Alternative column names with more than 30 characters are also not allowed after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)).
-   Columns of the types LCHR and LRAW can be read in a query only if they are read together with the associated length fields.
-   The following applies when using [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) in the SELECT statement:
    -   The decimal places in the comparisons between columns of a data source and columns of the internal table of type p must match.
    -   All columns of the primary key specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) using PRIMARY KEY must also occur in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list.
    -   The pseudo component table\_line can be specified only for internal tables with an elementary row type.
-   A [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) grouping must be applied to columns specified after [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) outside aggregate functions. The same applies to columns specified directly in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when a HAVING clause is specified, but that are not specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).
-   If a [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is specified as \*, a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause can only be used together with a [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\)).
-   If an [alternative name](javascript:call_link\('abapselect_list.htm'\)) is used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), this name must be unique and cannot be the same name as a column that does not have any alternative names.
-   A work area wa specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause has fewer components than explicit columns in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list.
-   A column specified explicitly in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list cannot be [assigned](javascript:call_link\('abenselect_into_conversion.htm'\)) to the associated component of a structured work area wa specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause or to a data object dobj specified in a parenthesized comma-separated list.
-   No [character literals](javascript:call_link\('abencharacter_literal_glosry.htm'\) "Glossary Entry") or [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") can be specified on the right side of [LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\)) that are more than twice as long as the left side.
-   The statements [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)) are used to access a [projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") in which all fields are key fields.
-   A reference that is too general is specified in the statements [INSERT FROM](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)), or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)) when a [writer stream](javascript:call_link\('abenabap_sql_streaming.htm'\)) is created.
-   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)), a column can occur only on the left side of a single [update expression](javascript:call_link\('abapupdate_set_expression.htm'\)).