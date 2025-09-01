  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

ABAP SQL in Release 7.51

[1\. Common table expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Cross join](#!ABAP_MODIFICATION_2@2@)
[3\. New addition OFFSET in SELECT](#!ABAP_MODIFICATION_3@3@)
[4\. SQL and aggregate functions expanded](#!ABAP_MODIFICATION_4@4@)
[5\. Extended result](#!ABAP_MODIFICATION_5@5@)
[6\. New additions in DELETE dbtab](#!ABAP_MODIFICATION_6@6@)
[7\. Inline declaration for OPEN CURSOR](#!ABAP_MODIFICATION_7@7@)
[8\. Strict mode in the syntax check](#!ABAP_MODIFICATION_8@8@)
[9\. Access to cached views of the SAP HANA database](#!ABAP_MODIFICATION_9@9@)
[10\. Session variables in the SAP HANA database](#!ABAP_MODIFICATION_10@10@)
[11\. Restrictions removed](#!ABAP_MODIFICATION_11@11@)

Modification 1

General Table Expressions

The new ABAP SQL statement [WITH](javascript:call_link\('abapwith.htm'\)) enables [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") (CTEs) to be defined for use in the WITH statement. A common table expression creates a results set that is used in the queries of the WITH statement as a data source. The [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of the WITH statement has an INTO clause and transfers its results set to ABAP data objects.

Modification 2

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](javascript:call_link\('abapselect_join.htm'\)) in a [SELECT statement](javascript:call_link\('abapselect.htm'\)).

Modification 3

New Addition OFFSET in SELECT

In the additions named under [additional\_options](javascript:call_link\('abapselect_additions.htm'\)) in the statement [SELECT](javascript:call_link\('abapselect.htm'\)), an addition [OFFSET](javascript:call_link\('abapselect_additions.htm'\)) can now be specified to specify the first row of the results set.

Modification 4

SQL and Aggregate Functions Expanded

-   The new numeric function [DIVISION](javascript:call_link\('abensql_arith_func.htm'\)) enables divisions with decimal places.

-   The new string functions [LOWER](javascript:call_link\('abensql_string_func.htm'\)) and [UPPER](javascript:call_link\('abensql_string_func.htm'\)) implement uppercase and lowercase.

-   The new string functions [LEFT](javascript:call_link\('abensql_string_func.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abensql_string_func.htm'\)), [INSTR](javascript:call_link\('abensql_string_func.htm'\)), and [RPAD](javascript:call_link\('abensql_string_func.htm'\)) perform operations on strings.

-   In the string functions [LPAD](javascript:call_link\('abensql_string_func.htm'\)), [LTRIM](javascript:call_link\('abensql_string_func.htm'\)), and [RTRIM](javascript:call_link\('abensql_string_func.htm'\)), arguments passed as constants or literals can now contain special characters.

-   The new date functions [DATS\_IS\_VALID](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)) and [DATS\_ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\)) execute operations with date fields.

-   An addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)) can now be specified in the aggregate function [AVG](javascript:call_link\('abapselect_aggregate.htm'\)) to define the data type of the result.
    

Modification 5

Extended Result

The new addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) of an [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause can be used to provide an extended result for an object of the class CL\_OSQL\_EXTENDED\_RESULT, which can be queried using methods of the class.

Modification 6

New Additions in DELETE dbtab

In the variant DELETE FROM target of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), the additions [ORDER BY](javascript:call_link\('abapdelete_where.htm'\)), [OFFSET](javascript:call_link\('abapdelete_where.htm'\)), and [UP TO](javascript:call_link\('abapdelete_where.htm'\)) can now be specified to restrict the number of rows to delete.

Modification 7

Inline Declaration for OPEN CURSOR

An [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with the [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) can now also be specified at the operand position for dbcur of the [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) statement.

Modification 8

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_751.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 9

Access to Cached Views of the SAP HANA Database

Under certain conditions, a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") can read data from the cache when accessing a [cached view](javascript:call_link\('abenhana_cached_views.htm'\)) of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). This can be checked using the addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) of an [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause.

Modification 10

Session Variables in the SAP HANA Database

A new [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CDS\_CLIENT for the client ID is modified by the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) in ABAP SQL reads. The [CDS session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) client is now linked to this HANA session variable.

Modification 11

Restrictions Removed

-   The addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)) of the [SELECT](javascript:call_link\('abapselect.htm'\)) statement can now also be specified if a column is specified multiple times in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list, without the same name being blocked by alternative names.

-   The components of a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry") must no longer be in the same order as the associated components of the replaced database table or classic view.

-   When accessing [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that use [session variables](javascript:call_link\('abencds_session_variable_v1.htm'\)), the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) can now be used. When accessing [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that do not use the [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) client, the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) can now be used.