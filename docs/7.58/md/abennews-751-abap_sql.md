  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.51](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL in ABAP Release 7.51

[1\. Common Table Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Cross Join](#!ABAP_MODIFICATION_2@2@)
[3\. New Addition OFFSET in SELECT](#!ABAP_MODIFICATION_3@3@)
[4\. SQL Functions](#!ABAP_MODIFICATION_4@4@)
[5\. Extended Result](#!ABAP_MODIFICATION_5@5@)
[6\. New Additions in DELETE dbtab](#!ABAP_MODIFICATION_6@6@)
[7\. Inline Declaration for OPEN CURSOR](#!ABAP_MODIFICATION_7@7@)
[8\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_8@8@)
[9\. Access to Cached Views of the SAP HANA Database](#!ABAP_MODIFICATION_9@9@)
[10\. Session Variables in the SAP HANA Database](#!ABAP_MODIFICATION_10@10@)
[11\. Restrictions Removed](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Common Table Expressions

The new ABAP SQL statement [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) enables [common table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") (CTEs) to be defined for use in the WITH statement. A common table expression creates a results set that is used in the queries of the WITH statement as a data source. The [main query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmainquery_glosry.htm "Glossary Entry") of the WITH statement has an INTO clause and transfers its results set to ABAP data objects.

Modification 2   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm).

Modification 3   

New Addition OFFSET in SELECT

In the additions named under [additional\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm) in the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm), an addition [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) can now be specified to specify the first row of the results set.

Modification 4   

SQL Functions

The following changes have been made:

-   The new numeric function [DIVISION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) enables divisions with decimal places.
-   The new string functions [LOWER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) and [UPPER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) implement uppercase and lowercase.
-   The new string functions [LEFT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [INSTR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), and [RPAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) perform operations on strings.
-   In the string functions [LPAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [LTRIM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), and [RTRIM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), arguments passed as constants or literals can now contain special characters.
-   The new date functions [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm) and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm) execute operations with date fields.
-   An addition [AS dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_avg_as.htm) can now be specified in the aggregate function [AVG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) to define the data type of the result.

Modification 5   

Extended Result

The new addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_extended_result.htm) of an [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause can be used to provide an extended result for an object of the class CL\_OSQL\_EXTENDED\_RESULT, which can be queried using methods of the class.

Modification 6   

New Additions in DELETE dbtab

In the variant DELETE FROM target of the statement [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), the additions [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_where.htm), [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_where.htm), and [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_where.htm) can now be specified to restrict the number of rows to delete.

Modification 7   

Inline Declaration for OPEN CURSOR

An [inline declaration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declaration_glosry.htm "Glossary Entry") with the [declaration operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) can now also be specified at the operand position for dbcur of the [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) statement.

Modification 8   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_751.htm), which handles the statement more strictly than the regular syntax check.

Modification 9   

Access to Cached Views of the SAP HANA Database

Under certain conditions, a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") can read data from the cache when accessing a [cached view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"). This can be checked using the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_extended_result.htm) of an [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause.

Modification 10   

Session Variables in the SAP HANA Database

A new [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_session_variables.htm) CDS\_CLIENT for the client ID is modified by the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) in ABAP SQL reads. The [CDS session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm) client is now linked to this HANA session variable.

Modification 11   

Restrictions Removed

The following restrictions were removed:

-   The addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) of the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement can now also be specified if a column is specified multiple times in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) list, without the same name being blocked by alternative names.
-   The components of a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreplacement_object_glosry.htm "Glossary Entry") must no longer be in the same order as the associated components of the replaced database table or classic view.
-   When accessing [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") that use [session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm), the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) can now be used. When accessing [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") that do not use the [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm) client, the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) can now be used.