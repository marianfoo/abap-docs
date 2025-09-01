  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-753.htm) → 

ABAP SQL in Release 7.53

[1\. Open SQL renamed as ABAP SQL](#!ABAP_MODIFICATION_1@1@)
[
2\. Access to hierarchy data](#!ABAP_MODIFICATION_2@2@)

[3\. Secondary connections](#!ABAP_MODIFICATION_3@3@)

[4\. Relational expression IS INITIAL](#!ABAP_MODIFICATION_4@4@)

[5\. Date/time functions](#!ABAP_MODIFICATION_5@5@)

[6\. Publishing associations of common table expressions](#!ABAP_MODIFICATION_6@6@)

[7\. Numeric literals in the SELECT list](#!ABAP_MODIFICATION_7@7@)

[8\. Enhanced cast matrix](#!ABAP_MODIFICATION_8@8@)

[9\. Client handling in subquery of the statement INSERT](#!ABAP_MODIFICATION_9@9@)

[10\. Subquery as data source of MODIFY](#!ABAP_MODIFICATION_10@10@)

[11\. USING CLIENT and session variable client](#!ABAP_MODIFICATION_11@11@)

[12\. Null values in the table buffer](#!ABAP_MODIFICATION_12@12@)

[13\. Restrictions removed](#!ABAP_MODIFICATION_13@13@)

[14\. Weaker check](#!ABAP_MODIFICATION_14@14@)

[15\. New check](#!ABAP_MODIFICATION_15@15@)

[16\. Replacement service in program calls](#!ABAP_MODIFICATION_16@16@)

[17\. GROUP BY addition GROUPING SETS](#!ABAP_MODIFICATION_17@17@)

[18\. Aggregate function GROUPING](#!ABAP_MODIFICATION_18@18@)

[19\. Stricter checks for syntax rules](#!ABAP_MODIFICATION_19@19@)

Modification 1

Open SQL Renamed as ABAP SQL

The existing name [Open SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_old_glosry.htm "Glossary Entry") has been changed to [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). This renaming reflects that some parts of ABAP SQL now only support certain database platforms, specifically SAP HANA database, and hence that it is no longer fully platform-independent.

Modification 2

Access to Hierarchy Data

In queries, both

-   [hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm) and
    
-   [hierarchy navigators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm)
    

can be specified as [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm). Accessing hierarchy data triggers the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 3

Secondary Connections

On an AS ABAP with a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") as its [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry"), only those [secondary connections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") should be used from the database table DBCON whose [secondary database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_glosry.htm "Glossary Entry") is also a SAP HANA database. Alongside the CONNECTION addition in , this also applies to ABAP SQL and Native SQL (ADBC and EXEC SQL).

SAP HANA Smart Data Access (SDA) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names across the standard connection. This is only possible in AMDP and Native SQL. Database Shared Libraries (DBSL) are no longer required here.

Modification 4

Relational Expression IS INITIAL

The relational expression [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_initial.htm) can now be used in a condition sql\_cond to compare operands with their type-dependent initial value.

When used, this expression requires the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 5

Date/Time Functions

ABAP SQL now supports the following new date/time functions:

-   [Time functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_time_func.htm)
    

-   TIMS\_IS\_VALID

-   [Time stamp functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)
    

-   TSTMP\_IS\_VALID

-   TSTMP\_CURRENT\_UTCTIMESTAMP

-   TSTMP\_SECONDS\_BETWEEN

-   TSTMP\_ADD\_SECONDS

-   [Date/time conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)
    

-   TSTMP\_TO\_DATS

-   TSTMP\_TO\_TIMS

-   TSTMP\_TO\_DST

-   DATS\_TIMS\_TO\_TSTMP

-   [Time zone functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timezone_func.htm)
    

-   ABAP\_SYSTEM\_TIMEZONE

-   ABAP\_USER\_TIMEZONE

When used, these functions require the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 6

Publishing Associations of Common Table Expressions

When [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") are accessed within a [common table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"), the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations.htm) of the statement [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) can now be used to publish [associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") of these views for use in [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) of the current WITH statement. The addition REDIRECT TO can also be used to replace the target data source of the published association with a previous CTE or the current CTE.

When used, this addition requires the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 7

Number Literals in the SELECT List

Until now, only those [numeric literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_literal_glosry.htm "Glossary Entry") whose value matched the value range of the type [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)[INT4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_elem.htm) could be specified as elementary SQL expressions in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of a query. Now numeric literals of up to 31 digits can be specified, which are interpreted as numbers of the type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) if the value range of INT4 is exceeded.

Modification 8

Enhanced Cast Matrix

A [cast expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) can now be used to convert the data types INT1, INT2, INT4, and INT8 to DEC.

Modification 9

Client Handling in Subquery of the Statement INSERT

The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) can now be specified in a [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_from_select.htm). This means that the client specified for the target table of the insert operation can be different from the client specified for the data source of the subquery.

If USING CLIENT is not specified in the subquery, the current client ID is now always applied to [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm). Before Release 7.53, the client ID specified after INSERT using USING CLIENT was also used in the subquery.

The FROM clause of the subquery can now access the database table or classic view filled using the INSERT statement. This makes it possible to copy the data from one client to another.

In the subquery, using USING CLIENT or accessing the database table or classic view filled by the INSERT statement enables [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 10

Subquery as Data Source of MODIFY

In the ABAP SQL write statement [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm), a parenthesized subquery [SELECT subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm) can now be specified as a data source after FROM. The rows of the results set of the subquery are modified or inserted in the target table directly on the database. No data transport is required between the database and AS ABAP. When used in MODIFY, a subquery demands [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 11

USING CLIENT and Session Variable client

In an ABAP SQL read in which multiple [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") access client-specific [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") and the client handling method is defined using the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm), the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) client (which corresponds to the [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_session_variables.htm) CDS\_CLIENT on the SAP HANA database) must be set to the same value in all of these queries. The runtime error SAPSQL\_DIFFERENT\_CLIENT\_VALUES occurs if [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) is used to specify a different client ID in one of these queries. This situation can occur in the statement [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) or when using [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm).

Modification 12

Null Values in the Table Buffer

The [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry") now supports real [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"). In [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry"), null values are no longer transformed to type-dependent initial values. When the buffer is accessed, the same results are produced as when the database is accessed directly. The corresponding restrictions now no longer apply. The following are some of the aspects affected:

-   [Relational expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) with operands that contain null values. The result of a comparison of this type is now also unknown when the comparison is made in the buffer (except in the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm)).
    
-   If used, [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm) no longer bypasses table buffering.
    
-   Accesses to [buffered CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_sap_puffer.htm). When the buffer is accessed, the same results are now produced as when the database is accessed directly. Null values are often produced by [outer joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_joined_data_source.htm) or in expressions such as [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm) expressions. The restriction specifying that only those CDS views are buffered whose elements do not contain [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") no longer applies.
    

Modification 13

Restrictions Removed

-   For [certain SQL expressions and functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_expressions.htm), an ABAP SQL read statement no longer bypasses [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   ABAP SQL read statements no longer bypass [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") in cases where a column is specified on the right side of [comparisons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm) or of [BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_interval.htm) in a [condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) that is not required to identify a single row or a generic range. The prerequisite for this is that both operands are numeric but do not have the type DF16\_DEC or DF34\_DEC, that both operands are character-like, or that both operands have the type RAW with the same lengths.
    

Modification 14

Weaker Check

ABAP SQL statements that exploit a database property not supported by all database platforms no longer produce a syntax check warning and produce a syntax warning in the [extended program checks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_program_check_glosry.htm "Glossary Entry") instead.

Modification 15

New Check

If the data of the [internal table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_itab.htm) needs to be transported to the database in cases where the internal table is used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), a syntax check warning occurs that can be hidden using the pragma ##itab\_db\_select.

Modification 16

Replacement Service in Program Calls

The method ACTIVATE\_REPLACEMENT of the class [CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_replace.htm) has the new parameter FLG\_SURVIVE\_SUBMIT, which now also permits redirections in called programs.

Modification 17

GROUP BY Addition GROUPING SETS

In a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement, the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) addition [GROUPING SETS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgrouping_sets_clause.htm) can now be used. The addition GROUPING SETS makes it possible to group multiple grouping sets under one GROUP BY clause. This is the same as specifying [UNION ALL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) with different GROUP BY clauses. The addition GROUPING SETS has an advantage over a UNION clause grouping because the SELECT clause only needs to be specified once.

Using GROUPING SETS triggers [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Modification 18

Aggregate Function GROUPING

The aggregate function [GROUPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengrouping_function.htm) can now be used in a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement. The grouping function GROUPING can be used to verify whether a specific column is part of the [aggregation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry"). The grouping function can be used only if the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause contains the addition [GROUPING SETS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgrouping_sets_clause.htm).

Modification 19

Stricter Checks on Syntax Rules

A violation of the following rules now always produces a syntax error. In the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check, these violations already produced a syntax error. Outside the strict modes, they produced a syntax check warning and in most cases a runtime error when the program was executed.

-   When a view is accessed, its key fields must be located together at the start.
    
-   The additions [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) cannot be used when a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") is accessed that is associated with a [CDS role](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry").
    
-   Even when using [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm), the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) can only be used for client-specific data sources.
    
-   When a [column is specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm), the actual names of the components must be used for a database table containing an [include structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_include_structure.htm), and not the names of any groups defined in ABAP Dictionary.
    
-   An alternative column name of the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list defined using AS can have a maximum of 30 characters. Alternative column names with more than 30 characters are also not allowed after [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm).
    
-   Columns of the types LCHR and LRAW can be read in a query only if they are read together with the associated length fields.
    
-   The following applies when using [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm) in the SELECT statement:
    

-   The decimal places in the comparisons between columns of a data source and columns of the internal table of type p must match.

-   All columns of the primary key specified after [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) using PRIMARY KEY must also occur in the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list.

-   The pseudo component table\_line can be specified only for internal tables with an elementary row type.

-   A [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) grouping must be applied to columns specified after [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) outside aggregate functions. The same applies to columns specified directly in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) when a HAVING clause is specified, but that are not specified after [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm).
    
-   If a [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) is specified as \*, a [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause can only be used together with a [GROUP BY clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm).
    
-   If an [alternative name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) is used after [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm), this name must be unique and cannot be the same name as a column that does not have any alternative names.
    
-   A work area wa specified in the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause has fewer components than explicit columns in the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list.
    
-   A column specified explicitly in the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list cannot be [assigned](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm) to the associated component of a structured work area wa specified in the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause or to a data object dobj specified in a parenthesized comma-separated list.
    
-   No [character literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_literal_glosry.htm "Glossary Entry") or [constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstant_glosry.htm "Glossary Entry") can be specified on the right side of [LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_like.htm) that are more than twice as long as the left side.
    
-   The statements [UPDATE FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm) are used to access a [projection view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprojection_view_glosry.htm "Glossary Entry") in which all fields are key fields.
    
-   A reference that is too general is specified in the statements [INSERT FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm), [UPDATE FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm), or [MODIFY FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm) when a [writer stream](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_streaming.htm) is created.
    
-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm), a column can occur only on the left side of a single [update expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate_set_expression.htm).