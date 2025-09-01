# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.51

Included pages: 11


### abennews-751.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 7.51, ABENNEWS-751, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 7.51

The kernel release for Release 7.51 is 7.49.

-   [Enumerated Types in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-types.htm)
-   [Assignments in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-assignments.htm)
-   [ABAP SQL in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-abap_sql.htm)
-   [ABAP CDS in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-abap_cds.htm)
-   [AMDP in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-amdp.htm)
-   [Data Clusters in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-data_cluster.htm)
-   [Messages in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-messages.htm)
-   [Transformations in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-transformations.htm)
-   [ABAP Channels in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-channels.htm)
-   [Further Changes in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-others.htm)

Continue
[Enumerated Types in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-types.htm)
[Assignments in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-assignments.htm)
[ABAP SQL in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-abap_sql.htm)
[ABAP CDS in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-abap_cds.htm)
[AMDP in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-amdp.htm)
[Data Clusters in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-data_cluster.htm)
[Messages in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-messages.htm)
[Transformations in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-transformations.htm)
[ABAP Channels in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-channels.htm)
[Further Changes in Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751-others.htm)


### abennews-751-types.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Enumerated Types in Release 7.51, ABENNEWS-751-TYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Enumerated Types in Release 7.51

Modification

Enumerated Types

The statement [TYPES BEGIN OF ENUM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_enum.htm) can be used to define [enumerated types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm "Glossary Entry") for [enumerated variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), which can have only [enumerated values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_value_glosry.htm "Glossary Entry") defined for this type.

The document [Enumerated Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_types_usage.htm) summarizes the properties of enumerated types and enumerated objects.


### abennews-751-assignments.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.51, ABENNEWS-751-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.51

Modification

System Class for Dynamic Mapping

The new methods [CREATE\_USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_2.htm) and [EXECUTE\_USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_2.htm) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm).

If the method [EXECUTE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_1.htm) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm)), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm) is used reflexively.


### abennews-751-abap_sql.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.51, ABENNEWS-751-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.51

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

The new ABAP SQL statement [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) enables [common table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") (CTEs) to be defined for use in the WITH statement. A common table expression creates a results set that is used in the queries of the WITH statement as a data source. The [main query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmainquery_glosry.htm "Glossary Entry") of the WITH statement has an INTO clause and transfers its results set to ABAP data objects.

Modification 2   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm).

Modification 3   

New Addition OFFSET in SELECT

In the additions named under [additional\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) in the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm), an addition [OFFSET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) can now be specified to specify the first row of the results set.

Modification 4   

SQL Functions

-   The new numeric function [DIVISION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm) enables divisions with decimal places.
-   The new string functions [LOWER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) and [UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) implement uppercase and lowercase.
-   The new string functions [LEFT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), [INSTR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), and [RPAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) perform operations on strings.
-   In the string functions [LPAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), [LTRIM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), and [RTRIM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), arguments passed as constants or literals can now contain special characters.
-   The new date functions [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm) and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm) execute operations with date fields.
-   An addition [AS dtype](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_avg_as.htm) can now be specified in the aggregate function [AVG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) to define the data type of the result.

Modification 5   

Extended Result

The new addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_extended_result.htm) of an [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause can be used to provide an extended result for an object of the class CL\_OSQL\_EXTENDED\_RESULT, which can be queried using methods of the class.

Modification 6   

New Additions in DELETE dbtab

In the variant DELETE FROM target of the statement [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab.htm), the additions [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm), [OFFSET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm), and [UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_where.htm) can now be specified to restrict the number of rows to delete.

Modification 7   

Inline Declaration for OPEN CURSOR

An [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") with the [declaration operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) can now also be specified at the operand position for dbcur of the [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm) statement.

Modification 8   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_751.htm), which handles the statement more strictly than the regular syntax check.

Modification 9   

Access to Cached Views of the SAP HANA Database

Under certain conditions, a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") can read data from the cache when accessing a [cached view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"). This can be checked using the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_extended_result.htm) of an [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause.

Modification 10   

Session Variables in the SAP HANA Database

A new [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) CDS\_CLIENT for the client ID is modified by the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) in ABAP SQL reads. The [CDS session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) client is now linked to this HANA session variable.

Modification 11   

Restrictions Removed

-   The addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) of the [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement can now also be specified if a column is specified multiple times in the [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) list, without the same name being blocked by alternative names.
-   The components of a [replacement object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreplacement_object_glosry.htm "Glossary Entry") must no longer be in the same order as the associated components of the replaced database table or classic view.
-   When accessing [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") that use [session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm), the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) can now be used. When accessing [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") that do not use the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) client, the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) can now be used.


### abennews-751-abap_cds.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.51, ABENNEWS-751-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.51

[1\. Client Handling](#!ABAP_MODIFICATION_1@1@)
[2\. Expressions and Functions](#!ABAP_MODIFICATION_2@2@)
[3\. Cross Join](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Associations](#!ABAP_MODIFICATION_4@4@)
[5\. Session Variables](#!ABAP_MODIFICATION_5@5@)
[6\. CDS View Extensions](#!ABAP_MODIFICATION_6@6@)
[7\. Annotations](#!ABAP_MODIFICATION_7@7@)
[8\. Metadata Extensions](#!ABAP_MODIFICATION_8@8@)
[9\. Access Control](#!ABAP_MODIFICATION_9@9@)
[10\. Key Fields](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Client Handling

The new annotation @ClientHandling specifies the client handling of [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) and [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_func_client_handling.htm). It replaces the annotation @ClientDependent and makes it obsolete.

Modification 2   

Expressions and Functions

The following enhancements have been implemented:

-   [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm)
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm), operands of the types SSTRING can now be cast to types other than themselves and back. Here, the type SSTRING behaves like the data type CHAR.
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm), operands of the types CLNT, LANG, TIMS, and UNIT can now be cast to the types CHAR and SSTRING. Here, the target type must be specified as a data element.
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm), the data types CHAR, SSTR, and NUMC can now be cast to ACCP, and the other way round.
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm) can now be used as operands in a [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm).
-   New Functions
    -   The following additional string functions are now supported: [UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm) and [LOWER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)
    -   The following additional date/time functions are now supported: [ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v1.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v1.htm), [TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm), and [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)
    -   A new built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v1.htm) can be used to convert arguments of type FLTP to packed numbers.
-   An addition [AS dtype](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_avg_as_v1.htm) can now be specified for the [aggregate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm) AVG to determine the data type of the return value.
-   Conditions
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm) can now be specified on the right side of a [cond\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) condition of a [WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_where_v1.htm), an [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_joined_data_source_v1.htm), a [filter condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_filter_v1.htm), or a [complex case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_case_v1.htm).
    -   In [cond\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) conditions, fields of data sources of the type ACCP can now be [compared](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v1.htm) with fields of the same type, and with literals of the type NUMC.

The following changes have been made:

-   In [CAST expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match precisely. This restriction can now be applied as an optional restriction using the new addition PRESERVING TYPE. This addition specifies explicitly that casts are to be applied to the semantic properties of a data element. PRESERVING TYPE suppresses the syntax warning that handles casts of identical technical types.

Modification 3   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_joined_data_source_v1.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm).

Modification 4   

CDS Associations

-   [Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v1.htm) can now be published for union sets formed with [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm). In this case, special rules apply.
-   WITH DEFAULT FILTER can be used to specify a default filter condition for an [association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v1.htm). This condition is used as a filter condition in a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm) if no condition is specified for the association here.
-   In a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm), [\*:](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_card_v1.htm) can be used to declare an association as a non-unique association explicitly.

Modification 5   

Session Variables

When a [CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") is accessed using ABAP SQL, it is possible to access the new session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) in which the values of the system field sy-datum are available.

Modification 6   

CDS View Extensions

The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_view.htm) can now be used to extend the following CDS views too:

-   CDS views with [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm) and a [GROUP-BY clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_group_by_v1.htm)
-   CDS views with a [UNION clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm) for union sets

For enhancements of the GROUP-BY clause and UNION clauses, the existing CDS view must contain the new annotation array [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) with suitable values. The value #NONE of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS view enhancements.

Modification 7   

Annotations

-   Annotation for Key Fields
    
    The new view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) can be used to override the default behavior of the addition [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    
-   Null Values of Annotations
    
    For each [element annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm) that is not part of an [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_array.htm), the special value [null](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_value.htm) can be specified (without quotation marks). This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.
    

Modification 8   

Metadata Extensions

[Metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extensions.htm) are new [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") that allow [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") for a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") to be created and transported separately from their [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). Metadata extensions are [included](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm) by default in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Metadata extensions are created using the DDL statement [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view.htm) and can be joined to new [CDS variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry"), enabling different extensions to be created for a CDS entity. Furthermore, each metadata extension is linked to a layer, such as a branch, customer, or partner, which determines the priority if there is an identical variant or no variant.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Modification 9   

Access Control

The following enhancements have been implemented in CDS access control:

-   As well as [conditional access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm), there are now also [full access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm) and [inherited access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_inherited_rule.htm).
-   There is a new operator ?= for [access conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm), which checks not only for a specified value but also the initial value or the null value.
-   A new [user condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_user.htm) compares the value of an element of a CDS entity with the current user name.

Modification 10   

Key Fields

-   The key fields of a CDS view that are defined with [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm).
-   The new view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) can be used to override the default behavior of the addition [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS-managed DDIC view (obsolete).


### abennews-751-amdp.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP in Release 7.51, ABENNEWS-751-AMDP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

AMDP in Release 7.51

[1\. Logical Database Schemas](#!ABAP_MODIFICATION_1@1@)
[2\. Use of Logical Database Schemas in AMDP Methods](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Logical Database Schemas

[Logical database schemas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") were introduced as symbolic names for physical [database schemas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2   

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_macro_glosry.htm "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_logical_db_schemas.htm)

can be used to specify logical database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.


### abennews-751-data_cluster.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.51, ABENNEWS-751-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.51

Modification

New Structure for Export/Import Tables

[Export tables and import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a new [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) can now be used to save [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm).

In this [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm), the field CLUSTD has the data type RAWSTRING ([BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables and import tables.


### abennews-751-messages.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages in Release 7.51, ABENNEWS-751-MESSAGES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Messages in Release 7.51

Modification

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) (used to send a message) points to an object that includes the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm), the addition TYPE can be omitted. The message type from the interface attribute MSGTY of the object is then used implicitly.


### abennews-751-transformations.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Transformations in Release 7.51, ABENNEWS-751-TRANSFORMATIONS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Transformations in Release 7.51

[1\. New Domains for Mapping from ABAP to XML](#!ABAP_MODIFICATION_1@1@)
[2\. New Formats for format in the Attribute option of tt:value](#!ABAP_MODIFICATION_2@2@)
[3\. decimals New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_3@3@)
[4\. regime New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_4@4@)
[5\. noError New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_5@5@)

Modification 1   

New Domains for Mapping from ABAP to XML

The following new [special domains](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_schema.htm) have been introduced, which override the default mapping of elementary ABAP types to asXML.

-   XSDUUID\_BASE64 for 16-byte UUIDs in base64 format
-   XSDCURRCODE for ISO currency keys
-   XSDUNITCODE for ISO unit keys

Modification 2   

New Formats for format in the Attribute option of tt:value

The following new formats can be specified in parentheses after [format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) in the [option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) attribute of the ST command [tt:value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm):

-   hex for a hexadecimal display of byte-like values
-   uri and uri\_full for masking special characters in URIs
-   uri1 and uri2 for displaying literal values in URIs for OData.
-   currCode, unitCode for converting SAP-specific currency and unit keys in ISO units.
-   currency=CURRCODE, unit=UNITCODE for formatting numbers according to a currency or unit key
-   alpha for handling leading zeros in strings

Other enhancements:

-   dateTimeLocal, dateTimeOffset, and ticksOffset can now be used on the time stamp types TIMESTAMP and TIMESTAMPL.
-   guid can now also be used on the type c of length 22 for 16-byte UUIDs in base64 format.

Modification 3   

decimals New for the Attributeoption of tt:value

[decimals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) can now be specified in the attribute [option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) of the ST command [tt:value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm), where it defines the number of decimal places of numeric types.

Modification 4   

regime New for the Attributeoption of tt:value

[regime(num*|*char*|*bin)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) can now be specified in the attribute [option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) of the ST command [tt:value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm), where it can be used to force numeric, character-like, or byte-like handling.

Modification 5   

noError New for the Attributeoption of tt:value

[noError](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) now can be specified in the attribute [option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) of the ST command [tt:value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm), where it prevents exceptions in the formattings language, currCode, and unitCode. These formattings evaluate entries in database tables.


### abennews-751-channels.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Channels in Release 7.51, ABENNEWS-751-CHANNELS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Channels in Release 7.51

[1\. Length Restriction for AMC and APC](#!ABAP_MODIFICATION_1@1@)
[2\. Suppressing AMC Messages](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Length Restriction for AMC and APC

The length restriction for messages that can be sent using [AMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc.htm) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter rdisp/long\_messages/max\_length.

The same applies to [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) messages, which are sent with an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH.

Modification 2   

Suppressing AMC Messages

The new parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER can be used to control whether [AMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc.htm) messages can be sent to the current ABAP session or not.


### abennews-751-others.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.51, ABENNEWS-751-OTHERS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.51

[1\. Full Text Search in the SAP GUI Version of the ABAP Keyword Documentation](#!ABAP_MODIFICATION_1@1@)
[2\. Static ABAP with restricted object use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Full Text Search in the SAP GUI Version of the ABAP Keyword Documentation

Double quotation marks (") can now be used in the input field of the documentation display in the SAP GUI version of the ABAP keyword documentation to force a full text search for a search term. Up until now, the full text search was only available by choosing radio buttons in the dialog box of the documentation.

Modification 2   

Static ABAP with restricted object use

In Release 7.51, a new [ABAP version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") [Static ABAP with Restricted Object Use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_static_restr_glosry.htm "Glossary Entry") was introduced. The internal version ID in column UCCHECK of system table TRDIR is 3.
