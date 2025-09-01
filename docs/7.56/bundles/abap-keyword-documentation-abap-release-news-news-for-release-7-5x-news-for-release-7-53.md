# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.53

Included pages: 15


### abennews-753.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) → 

News for Release 7.53

The kernel release for Release 7.53 is 7.73.

-   [ABAP Dictionary in Release 7.53](javascript:call_link\('abennews-753-ddic.htm'\))
-   [Assignments in Release 7.53](javascript:call_link\('abennews-753-assignments.htm'\))
-   [Internal Tables in Release 7.53](javascript:call_link\('abennews-753-itab.htm'\))
-   [ABAP SQL in Release 7.53](javascript:call_link\('abennews-753-abap_sql.htm'\))
-   [ABAP CDS in Release 7.53](javascript:call_link\('abennews-753-abap_cds.htm'\))
-   [AMDP in Release 7.53](javascript:call_link\('abennews-753-amdp.htm'\))
-   [Native SQL in Release 7.53](javascript:call_link\('abennews-753-native_sql.htm'\))
-   [Shared Objects in Release 7.53](javascript:call_link\('abennews-753-shared_objects.htm'\))
-   [Exception Handling in Release 7.53](javascript:call_link\('abennews-753-exceptions.htm'\))
-   [Transformations in Release 7.53](javascript:call_link\('abennews-753-transformations.htm'\))
-   [Dynpros in Release 7.53](javascript:call_link\('abennews-753-dynpros.htm'\))
-   [Type Checks in Release 7.53](javascript:call_link\('abennews-753-type_checks.htm'\))
-   [Further Changes in Release 7.53](javascript:call_link\('abennews-753-others.htm'\))
-   [ABAP RESTful Programming Model in Release 7.53](javascript:call_link\('abennews-753-restful.htm'\))

Continue
[ABAP Dictionary in Release 7.53](javascript:call_link\('abennews-753-ddic.htm'\))
[Assignments in Release 7.53](javascript:call_link\('abennews-753-assignments.htm'\))
[Internal Tables in Release 7.53](javascript:call_link\('abennews-753-itab.htm'\))
[ABAP SQL in Release 7.53](javascript:call_link\('abennews-753-abap_sql.htm'\))
[ABAP CDS in Release 7.53](javascript:call_link\('abennews-753-abap_cds.htm'\))
[AMDP in Release 7.53](javascript:call_link\('abennews-753-amdp.htm'\))
[Native SQL in Release 7.53](javascript:call_link\('abennews-753-native_sql.htm'\))
[Shared Objects in Release 7.53](javascript:call_link\('abennews-753-shared_objects.htm'\))
[Exception Handling in Release 7.53](javascript:call_link\('abennews-753-exceptions.htm'\))
[Transformations in Release 7.53](javascript:call_link\('abennews-753-transformations.htm'\))
[Dynpros in Release 7.53](javascript:call_link\('abennews-753-dynpros.htm'\))
[Type Checks in Release 7.53](javascript:call_link\('abennews-753-type_checks.htm'\))
[Further Changes in Release 7.53](javascript:call_link\('abennews-753-others.htm'\))
[ABAP RESTful Programming Model in Release 7.53](javascript:call_link\('abennews-753-restful.htm'\))


### abennews-753-ddic.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

ABAP Dictionary in Release 7.53

[1\. Dependency Rules](#!ABAP_MODIFICATION_1@1@)
[2\. Pooled Tables and Cluster Tables Obsolete](#!ABAP_MODIFICATION_2@2@)
[3\. Expanded Limits](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Dependency Rules

In ABAP Dictionary, the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") can be used to define [dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) in the SAP HANA database. A dependency rule makes it possible to derive additional selection conditions from existing conditions when a database table is accessed. In the [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") concept, for example, dependency rules are used in the [optimization of access to old data](javascript:call_link\('abenhana_data_aging_druls.htm'\)).

Modification 2   

Pooled Tables and Cluster Tables Obsolete

All support for [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") has been dropped. Any existing pooled tables and cluster tables are transformed to [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). Any existing [table pools](javascript:call_link\('abentable_pool_glosry.htm'\) "Glossary Entry") and [table clusters](javascript:call_link\('abentable_cluster_glosry.htm'\) "Glossary Entry") are removed. All restrictions that applied when accessing pooled tables and cluster tables hence no longer apply.

Modification 3   

Expanded Limits

The following limits now apply to the number of fields and the length of the structure of a [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"), of a [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), and of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   Database tables
    -   A database table that is not part of the software component SAP\_BASIS can now contain 1000 fields for the storage type Row Store and 1500 fields for the storage type Column Store. The total of all field lengths is no longer checked in ABAP Dictionary.
    -   A database table that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4030.
-   Database views and CDS views
    -   A view that is not part of the software component SAP\_BASIS can contain 1500 view fields. The total of all field lengths is no longer checked in ABAP Dictionary.
    -   A view that is part of the software component SAP\_BASIS can contain a maximum of 749 fields (as before) and the total of the field lengths in ABAP Dictionary is still restricted to 4096.


### abennews-753-assignments.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Assignments in Release 7.53

Modification

Convertibility of Structures

The [conversion rules for flat structures](javascript:call_link\('abenconversion_flat_flat.htm'\)) are based on their [fragment views](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry"), where each [alignment gap](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") is considered as a fragment. Alignment gaps arise from the [alignment](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") requirements of the component's data types. For character-like components, the alignment requirement depends on the character representation:

-   For character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language, the memory address of character-like data objects must be divisible by 2.
-   For other character representations there are other alignment requirements. For example, the non-Unicode character representation [ASCII](javascript:call_link\('abenascii_glosry.htm'\) "Glossary Entry") has no alignment requirement while the Unicode character representation [UTF-32](javascript:call_link\('abenutf32_glosry.htm'\) "Glossary Entry") requires a divisibility by 4.

Before [only Unicode systems](javascript:call_link\('abennews-750-unicode.htm'\)) were supported, the conversion rules for structures had to take all possible alignment requirements for characters into account, regardless of the actual length of a character in its character representation.

Meanwhile, only [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") are supported. The system codepage is [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") and its subset [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") is supported in ABAP language. Any character is represented by 2 bytes and the alignment requirement is always a divisibility by 2.

Because of this, the conversion rules for flat structures can be less strict than before and the new determination of possible alignment gaps was introduced in Release 7.53. For example, the following assignment between two flat structures was not possible before Release 7.53 but is possible now.

TYPES:
  BEGIN OF incl1,
    num TYPE i,
    c2  TYPE c LENGTH 2,
  END OF incl1.
DATA:
  BEGIN OF struc1,
    c1 TYPE c LENGTH 2.
    INCLUDE TYPE incl1.
DATA:
    c3 TYPE c LENGTH 2,
  END OF struc1.
DATA:
  BEGIN OF struc2,
    c1  TYPE c LENGTH 2,
    num TYPE i,
    c2  TYPE c LENGTH 2,
    c3  TYPE c LENGTH 2,
  END OF struc2.
struc1 = struc2.

In the included substructure incl1, the character component has the same alignment as the integer component and there is no alignment gap. But as long as non-Unicode Systems were supported, an alignment gap had to be assumed behind the included structure in order to make the program executable in Unicode systems as well as in non-Unicode Systems.

Hint

When downporting programs from higher to lower releases, syntax errors might occur in the lower releases because of the stricter rules there.


### abennews-753-itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Internal Tables in Release 7.53

[1\. Predicates in WHERE Conditions](#!ABAP_MODIFICATION_1@1@)
[2\. Stricter Syntax Check in COLLECT](#!ABAP_MODIFICATION_2@2@)
[3\. Changes to Write-Protected Components](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Predicates in WHERE Conditions

In WHERE conditions of the statements [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)), [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)), and [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)), and in table iterations with [FOR](javascript:call_link\('abenfor_itab.htm'\)), [IS *\[*NOT*\]* INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) can now be specified alongside the predicate expressions [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) and [IS *\[*NOT*\]* BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).

Modification 2   

Stricter Syntax Check in COLLECT

Before the statement [COLLECT](javascript:call_link\('abapcollect.htm'\)) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

Modification 3   

Changes to Write-Protected Components

Before Release 7.53 it was possible to overwrite those write-protected components addressed using a data reference variable in a standard table, if the profile parameter abap/runt/write\_check\_fix was set to off. This profile parameter was removed in Release 7.53 and it is no longer possible to modify write-protected components.


### abennews-753-abap_sql.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

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

On an AS ABAP with a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as its [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), only those [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") should be used from the database table DBCON whose [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is also a SAP HANA database. Alongside the CONNECTION addition in , this also applies to ABAP SQL and Native SQL (ADBC and EXEC SQL).

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


### abennews-753-abap_cds.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

ABAP CDS in Release 7.53

[1\. CDS Hierarchies](#!ABAP_MODIFICATION_1@1@)
[2\. New Condition IS INITIAL](#!ABAP_MODIFICATION_2@2@)
[3\. Literals](#!ABAP_MODIFICATION_3@3@)
[4\. Annotation Definitions](#!ABAP_MODIFICATION_4@4@)
[5\. New Scope for Annotations](#!ABAP_MODIFICATION_5@5@)
[6\. CDS Abstract Entities](#!ABAP_MODIFICATION_6@6@)
[7\. Metadata Extensions for CDS Entities](#!ABAP_MODIFICATION_7@7@)
[8\. Access Control](#!ABAP_MODIFICATION_8@8@)

Modification 1   

CDS Hierarchies

The new statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can be used to create [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") that are accessed as [hierarchies](javascript:call_link\('abenhierarchy_glosry.htm'\) "Glossary Entry") in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") read statements.

Modification 2   

New Condition IS INITIAL

The new condition [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v1.htm'\)) can be used to check the initial value of operands.

Modification 3   

Literals

A [literal](javascript:call_link\('abencds_literal_v1.htm'\)) of a respective value is now always handled as a field of the type INT8, including in the definition of associations.

Modification 4   

Annotation Definitions

In the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") of a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") delivered by SAP, the new annotation [@CompatibilityContract](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be used to specify the usability of the annotation in CDS entities, depending on their [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry").

Modification 5   

New Scope for Annotations

In a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the new enumeration symbol #ENTITY, which defines a [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) for entity annotations, can be specified after the annotation [@scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). Annotations with this scope can be specified in the definitions of all [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in front of the statement DEFINE.

The [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") @EndUserText.label and @Metadata.allowExtensions were switched to this scope.

Modification 6   

CDS Abstract Entities

An [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") defines the type attributes of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") without creating an instance of a database object. An abstract CDS entity is defined using [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) in a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry").

Modification 7   

Metadata Extensions for CDS Entities

The variant [ANNOTATE ENTITY](javascript:call_link\('abencds_f1_annotate_view.htm'\)) was added to the previous statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). This makes it possible to define [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") for any [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") with the exception of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). Metadata extensions of this type can contain entity annotations, parameter annotations, and element annotations.

Modification 8   

Access Control

The following enhancements have been implemented in [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"):

-   New Boolean predicates [TRUE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) and [FALSE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) can now be used as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry").
-   New [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) can be used as [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) in [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"). They make the previous [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) obsolete. Some inheritance conditions apply conditions from existing CDS roles and some inheritance conditions apply access rules defined for other CDS entities.
-   In a [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") can be [mapped](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to an element list. This mapping assigns the CDS elements to the authorization fields of an authorization object. A PFCG mapping is defined in a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") using [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)).


### abennews-753-amdp.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

AMDP in Release 7.53

[1\. AMDP Scalar Functions](#!ABAP_MODIFICATION_1@1@)
[2\. Enhancement to Logical Database Schemas](#!ABAP_MODIFICATION_2@2@)
[3\. Access to the Current ABAP Database Schema](#!ABAP_MODIFICATION_3@3@)
[4\. Restrictions Removed](#!ABAP_MODIFICATION_4@4@)
[5\. Option CDS SESSION CLIENT Mandatory](#!ABAP_MODIFICATION_5@5@)

Modification 1   

AMDP Scalar Functions

[AMDP](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry") scalar functions are now supported alongside [AMDP table functions](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry"). The [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) of an AMDP scalar function has an elementary return value and can be used in ABAP like a regular function method.

In the implementation of [AMDP scalar functions](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry"), it is possible to specify the database-specific option [DETERMINISTIC](javascript:call_link\('abapmethod_by_db_proc.htm'\)) after OPTIONS. This buffers the result of the function for the duration of a query.

Modification 2   

Enhancement to Logical Database Schemas

In [logical database schemas](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry"), a new flag can be specified that allows the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") to be mapped in the transaction DB\_SCHEMA\_MAP. The predefined name :abap\_db\_schema should be used for mappings of this type.

Modification 3   

Access to the Current ABAP Database Schema

In an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"), a [logical database schema](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") to which the current [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is mapped (using the predefined name :abap\_db\_schema) can be specified in the macro [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)). For each logical database schema used in a macro like this, the new addition [USING SCHEMA](javascript:call_link\('abapmethod_by_db_proc.htm'\)) must be specified in the statement METHOD to declare the used objects. In this way, an AMDP method can access database objects located in different database schemas in different systems (including the ABAP database schema) without needing to modify the syntax.

Modification 4   

Restrictions Removed

The following restrictions were removed:

-   Tabular input parameters are now allowed in [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") for [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). Previously, only elementary input parameters were allowed. In AMDP function implementations for [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), however, the restriction that only elementary input parameters are allowed still applies.
-   Tabular input parameters of [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") and of [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") can now be made optional using [OPTIONAL](javascript:call_link\('abapmethods_parameters.htm'\)), but it is still not possible to specify a start value with [DEFAULT](javascript:call_link\('abapmethods_parameters.htm'\)).
-   When a replacement parameter declared using [DEFAULT](javascript:call_link\('abapmethods_general.htm'\)) is specified for an elementary input parameter of an [AMDP method](javascript:call_link\('abenamdp_methods.htm'\)), the following (previously undocumented) restrictions were lifted:
    
    -   Constants declared using the addition [VALUE IS INITIAL](javascript:call_link\('abapdata_options.htm'\)) can now be specified for the data types d, t, and x. This previously produced a syntax error.
    -   Constants declared using the addition [VALUE '00010101'](javascript:call_link\('abapdata_options.htm'\)) can now be specified for the data type d, or the literal '00010101' can be specified directly. Both previously produced a syntax error.
    -   Constants declared by specifying numeric literals after [VALUE](javascript:call_link\('abapdata_options.htm'\)) and whose lengths are not precisely 8 or 6 can now be specified for the data types d and t. This previously produced a syntax error. Until now, values of literals with lengths of precisely 8 or 6 were handled like a string. This incorrect behavior was also modified and the numeric value is handled as the number of days since 01.01.001 or as the number of seconds since 00:00:00. This modification is incompatible if an [AMDP procedure](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") or [function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") with an input parameter of this type is called from other [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") or [functions](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") without an actual parameter being assigned to the parameter in question.
    
    In AMDP methods, the addition DEFAULT now behaves in the same way as in regular methods. It still cannot be specified for the data types string, xstring, decfloat16, and decfloat34, however, and no literals can be specified that cannot be converted into the data type of the input parameter.
    

Modification 5   

Option CDS SESSION CLIENT Mandatory

The option [CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is now mandatory when an AMDP method accesses the [CDS managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") whose [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](javascript:call_link\('abencds_view_client_handling_v1.htm'\)). If this option is not specified in this case, a syntax error occurs. The option sets the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") of the database that can be addressed under the name [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") to a particular value when the method is called from ABAP. An exception of the class CX\_AMDP\_CDS\_CLIENT\_MISMATCH can now no longer be raised.


### abennews-753-native_sql.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Native SQL in Release 7.53

Modification

New Method GET\_ABAP\_CONNECTION in CL\_SQL\_CONNECTION

The new method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION works in the same way as the existing method [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) if the latter is passed the value abap\_true SHARABLE for a connection shared in ABAP SQL, Native SQL, and AMDP. GET\_ABAP\_CONNECTION can generally be used instead of GET\_CONNECTION, unless it needs to be called with the value abap\_false (default) for the parameter SHARABLE to create an exclusive connection.


### abennews-753-shared_objects.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Shared Objects in Release 7.53

Modification

Cross-Server Invalidations and Releases

Until now, cross-server invalidations and releases of [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") were only possible for [transactional areas](javascript:call_link\('abenshm_area_basic_properties.htm'\)). From Release 7.53, cross-server invalidations and releases can be performed for all areas with the Application Server [area binding](javascript:call_link\('abenshm_area_fixed_properties.htm'\)) by using the associated parameter AFFECT\_SERVER of the methods INVALIDATE\_... and FREE\_... of the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") in question. The parameter AFFECT\_SERVER is added to the methods of existing area classes when a new generation is performed in transaction SHMA.


### abennews-753-exceptions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Exception Handling in Release 7.53

[1\. Raising Runtime Errors](#!ABAP_MODIFICATION_1@1@)
[2\. Last Message in a Chain of Exception Objects](#!ABAP_MODIFICATION_2@2@)
[3\. Setting the Attribute IS\_RESUMABLE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Raising Runtime Errors

The new statement [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) raises [runtime errors](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") associated with an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry"). This means more information can now be passed to the [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") than was previously possible in an [exit message](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry").

Modification 2   

Last Message in a Chain of Exception Objects

The new method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER is used to return the last object in a chain of exception objects that has an [exception text](javascript:call_link\('abenexception_texts.htm'\)) defined by a message. Here, the chain is created using the attribute PREVIOUS.

Modification 3   

Setting the Attribute IS\_RESUMABLE

The attribute IS\_RESUMABLE of an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry") is now set after exceptions raised by the statement [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) only if the [CATCH](javascript:call_link\('abapcatch_try.htm'\)) statement in question has the addition BEFORE UNWIND. Previously in catches, the attribute was set for every exception raised in this way.

After an exception is raised using the statement [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and caught using the statement [CATCH BEFORE UNWIND](javascript:call_link\('abapcatch_try.htm'\)), the attribute IS\_RESUMABLE is set for all previous exception objects referenced in the attribute PREVIOUS and not just for the current exception object. Up until the first resumable exception in the chain IS\_RESUMABLE is set to the value of ABAP\_TRUE and is set to the value of ABAP\_FALSE otherwise.


### abennews-753-transformations.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Transformations in Release 7.53

Modification

Resumable Exceptions in Deserializations with ST

The new transformation option [OPTIONS exceptions = 'resumable'](javascript:call_link\('abapcall_transformation_options.htm'\)) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR into resumable exceptions. In handling with [CATCH BEFORE UNWIND](javascript:call_link\('abapcatch_try.htm'\)), the new attribute RESULT\_REF\_FOR\_RESUME of the exception object of the class CX\_ST\_DESERIALIZATION\_ERROR points to the target field where the exception was raised. The canceled transformation can be resumed using [RESUME](javascript:call_link\('abapresume.htm'\)).


### abennews-753-dynpros.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Dynpros in Release 7.53

Modification

Reference Value for Conversion Routines

An optional input parameter with the predefined name REFVAL can be created for the function modules for [conversion routines](javascript:call_link\('abenconversion_exits.htm'\)). When a dynpro field of the type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is converted, this parameter is given the value of a an associated reference field of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) automatically If [WRITE USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) is used, the input parameter REFVAL is not filled.


### abennews-753-type_checks.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Type Checks in Release 7.53

[1\. Checks on Common Data Areas](#!ABAP_MODIFICATION_1@1@)
[2\. Checks on STRUCTURE Typing](#!ABAP_MODIFICATION_2@2@)
[3\. Checks on Literals as Actual Parameters](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Checks on Common Data Areas

Obsolete common data areas with the same name and defined using [COMMON PART](javascript:call_link\('abapdata_common.htm'\)) must have identical layouts.

-   Common data areas are now viewed as structures whose [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must be identical and whose deep components must be compatible (pairwise). If not, the runtime error LOAD\_COMMON\_PART\_STRUCT occurs.
-   In common data areas it is now no longer possible to declare [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local structured types.

Modification 2   

Checks on STRUCTURE Typing

In obsolete STRUCTURE typing of formal parameters and field symbols, one assigned data object must be at least as long as the structure in question. Typing checks now respect the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") at the end of the data object and the structure.

Modification 3   

Checks on Literals as Actual Parameters

The value of a literal passed to a procedure must not be modified in the procedure. In certain cases this was, however, possible, namely when [literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\)) were passed to differently typed CHANGING parameters of subroutines. This is now prevented by stricter checks and always produces a runtime error.


### abennews-753-others.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Further Changes in Release 7.53

[1\. ABAP for Cloud Development](#!ABAP_MODIFICATION_1@1@)
[2\. Obsolete ABAP Language Versions](#!ABAP_MODIFICATION_2@2@)
[3\. New Methods for Handling Code Pages](#!ABAP_MODIFICATION_3@3@)
[4\. Error Message After SUBMIT VIA JOB](#!ABAP_MODIFICATION_4@4@)

Modification 1   

ABAP for Cloud Development

In Release 7.53, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") was introduced. The internal version ID in the column UCCHECK of the system table TRDIR is "5".

Modification 2   

Obsolete ABAP Language Versions

The [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry")

-   [static ABAP with restricted object use](javascript:call_link\('abenabap_static_restr_glosry.htm'\) "Glossary Entry")
-   [standard ABAP with restricted object use](javascript:call_link\('abenstandard_abap_restr_obj_glosry.htm'\) "Glossary Entry")

are now [obsolete](javascript:call_link\('abenabap_versions_obsolete.htm'\)) and should no longer be used.

Modification 3   

New Methods for Handling Code Pages

The methods CONVERT of the interfaces [IF\_ABAP\_CONV\_OUT](javascript:call_link\('abencl_abap_conv_codepage.htm'\)) and [IF\_ABAP\_CONV\_IN](javascript:call_link\('abencl_abap_conv_codepage.htm'\)) are more robust than the methods CONVERT\_TO and CONVERT\_FROM of the class [CL\_ABAP\_CODEPAGE](javascript:call_link\('abencl_abap_codepage_obsolete.htm'\)) and have replaced them.

Modification 4   

Error Message After SUBMIT VIA JOB

The method GET\_ERROR\_MESSAGE of the class CL\_ABAP\_SUBMIT\_HANDLING can now be used to read the last error message in cases where it was not possible to schedule a background task using [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)).


### abennews-753-restful.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

ABAP RESTful Programming Model in Release 7.53

From release 7.33 on, the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") is introduced.

This mainly involves:

-   [RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\))
-   [RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\))
    -   [BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\))
    -   [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\))
-   [ABAP EML](javascript:call_link\('abeneml.htm'\))
-   [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) in the ABAP type concept.

In the beginning, so-called [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") can be created with the addition [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) of the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") when defining a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). This scenario is intended for brownfield developments with existing application code. All operations and services must be implemented by the application developer.
