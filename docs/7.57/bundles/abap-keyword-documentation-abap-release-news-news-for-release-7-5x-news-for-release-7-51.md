# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.51

Included pages: 11


### abennews-751.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 7.51, ABENNEWS-751, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 7.51

The kernel release for Release 7.51 is 7.49.

-   [Enumerated Types in Release 7.51](javascript:call_link\('abennews-751-types.htm'\))
-   [Assignments in Release 7.51](javascript:call_link\('abennews-751-assignments.htm'\))
-   [ABAP SQL in Release 7.51](javascript:call_link\('abennews-751-abap_sql.htm'\))
-   [ABAP CDS in Release 7.51](javascript:call_link\('abennews-751-abap_cds.htm'\))
-   [AMDP in Release 7.51](javascript:call_link\('abennews-751-amdp.htm'\))
-   [Data Clusters in Release 7.51](javascript:call_link\('abennews-751-data_cluster.htm'\))
-   [Messages in Release 7.51](javascript:call_link\('abennews-751-messages.htm'\))
-   [Transformations in Release 7.51](javascript:call_link\('abennews-751-transformations.htm'\))
-   [ABAP Channels in Release 7.51](javascript:call_link\('abennews-751-channels.htm'\))
-   [Further Changes in Release 7.51](javascript:call_link\('abennews-751-others.htm'\))

Continue
[Enumerated Types in Release 7.51](javascript:call_link\('abennews-751-types.htm'\))
[Assignments in Release 7.51](javascript:call_link\('abennews-751-assignments.htm'\))
[ABAP SQL in Release 7.51](javascript:call_link\('abennews-751-abap_sql.htm'\))
[ABAP CDS in Release 7.51](javascript:call_link\('abennews-751-abap_cds.htm'\))
[AMDP in Release 7.51](javascript:call_link\('abennews-751-amdp.htm'\))
[Data Clusters in Release 7.51](javascript:call_link\('abennews-751-data_cluster.htm'\))
[Messages in Release 7.51](javascript:call_link\('abennews-751-messages.htm'\))
[Transformations in Release 7.51](javascript:call_link\('abennews-751-transformations.htm'\))
[ABAP Channels in Release 7.51](javascript:call_link\('abennews-751-channels.htm'\))
[Further Changes in Release 7.51](javascript:call_link\('abennews-751-others.htm'\))


### abennews-751-types.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Enumerated Types in Release 7.51, ABENNEWS-751-TYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Enumerated Types in Release 7.51

Modification

Enumerated Types

The statement [TYPES BEGIN OF ENUM](javascript:call_link\('abaptypes_enum.htm'\)) can be used to define [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") for [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), which can have only [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") defined for this type.

The document [Enumerated Objects](javascript:call_link\('abenenumerated_types_usage.htm'\)) summarizes the properties of enumerated types and enumerated objects.


### abennews-751-assignments.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.51, ABENNEWS-751-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.51

Modification

System Class for Dynamic Mapping

The new methods [CREATE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) and [EXECUTE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)).

If the method [EXECUTE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) is used reflexively.


### abennews-751-abap_sql.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

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

The new ABAP SQL statement [WITH](javascript:call_link\('abapwith.htm'\)) enables [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") (CTEs) to be defined for use in the WITH statement. A common table expression creates a results set that is used in the queries of the WITH statement as a data source. The [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of the WITH statement has an INTO clause and transfers its results set to ABAP data objects.

Modification 2   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](javascript:call_link\('abapselect_join.htm'\)) in a [SELECT statement](javascript:call_link\('abapselect.htm'\)).

Modification 3   

New Addition OFFSET in SELECT

In the additions named under [additional\_options](javascript:call_link\('abapselect_additions.htm'\)) in the statement [SELECT](javascript:call_link\('abapselect.htm'\)), an addition [OFFSET](javascript:call_link\('abapselect_additions.htm'\)) can now be specified to specify the first row of the results set.

Modification 4   

SQL Functions

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

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)), which handles the statement more strictly than the regular syntax check.

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


### abennews-751-abap_cds.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

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

The new annotation @ClientHandling specifies the client handling of [CDS views](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) and [CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). It replaces the annotation @ClientDependent and makes it obsolete.

Modification 2   

Expressions and Functions

The following enhancements have been implemented:

-   [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\))
    -   In a [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)), operands of the types SSTRING can now be cast to types other than themselves and back. Here, the type SSTRING behaves like the data type CHAR.
    -   In a [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)), operands of the types CLNT, LANG, TIMS, and UNIT can now be cast to the types CHAR and SSTRING. Here, the target type must be specified as a data element.
    -   In a [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)), the data types CHAR, SSTR, and NUMC can now be cast to ACCP, and the other way round.
    -   [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) can now be used as operands in a [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)).
-   New Functions
    -   The following additional string functions are now supported: [UPPER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)) and [LOWER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))
    -   The following additional date/time functions are now supported: [ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\)), [TSTMP\_TO\_DATS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), and [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))
    -   A new built-in conversion function [FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v1.htm'\)) can be used to convert arguments of type FLTP to packed numbers.
-   An addition [AS dtype](javascript:call_link\('abencds_avg_as_v1.htm'\)) can now be specified for the [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) AVG to determine the data type of the return value.
-   Conditions
    -   [Built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) can now be specified on the right side of a [cond\_expr](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) condition of a [WHERE condition](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)), an [ON condition](javascript:call_link\('abencds_joined_data_source_v1.htm'\)), a [filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)), or a [complex case distinction](javascript:call_link\('abencds_cond_expr_case_v1.htm'\)).
    -   In [cond\_expr](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) conditions, fields of data sources of the type ACCP can now be [compared](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) with fields of the same type, and with literals of the type NUMC.

The following changes have been made:

-   In [CAST expressions](javascript:call_link\('abencds_cast_expression_v1.htm'\)) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match precisely. This restriction can now be applied as an optional restriction using the new addition PRESERVING TYPE. This addition specifies explicitly that casts are to be applied to the semantic properties of a data element. PRESERVING TYPE suppresses the syntax warning that handles casts of identical technical types.

Modification 3   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)).

Modification 4   

CDS Associations

-   [Associations](javascript:call_link\('abencds_association_v1.htm'\)) can now be published for union sets formed with [UNION](javascript:call_link\('abencds_union_v1.htm'\)). In this case, special rules apply.
-   WITH DEFAULT FILTER can be used to specify a default filter condition for an [association](javascript:call_link\('abencds_association_v1.htm'\)). This condition is used as a filter condition in a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) if no condition is specified for the association here.
-   In a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)), [\*:](javascript:call_link\('abencds_path_expr_card_v1.htm'\)) can be used to declare an association as a non-unique association explicitly.

Modification 5   

Session Variables

When a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is accessed using ABAP SQL, it is possible to access the new session variable [$session.system\_date](javascript:call_link\('abencds_session_variable_v1.htm'\)) in which the values of the system field sy-datum are available.

Modification 6   

CDS View Extensions

The statement [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)) can now be used to extend the following CDS views too:

-   CDS views with [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) and a [GROUP-BY clause](javascript:call_link\('abencds_group_by_v1.htm'\))
-   CDS views with a [UNION clause](javascript:call_link\('abencds_union_v1.htm'\)) for union sets

For enhancements of the GROUP-BY clause and UNION clauses, the existing CDS view must contain the new annotation array [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_anno_v1.htm'\)) with suitable values. The value #NONE of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS view enhancements.

Modification 7   

Annotations

-   Annotation for Key Fields
    
    The new view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_view_anno_v1.htm'\)) can be used to override the default behavior of the addition [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    
-   Null Values of Annotations
    
    For each [element annotation](javascript:call_link\('abencds_f1_element_annotation.htm'\)) that is not part of an [annotation array](javascript:call_link\('abencds_annotations_syntax_array.htm'\)), the special value [null](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) can be specified (without quotation marks). This means that the annotations are ignored in the [evaluation](javascript:call_link\('abencds_annotations_analysis.htm'\)) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.
    

Modification 8   

Metadata Extensions

[Metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) are new [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that allow [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") for a [CDS entity](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") to be created and transported separately from their [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). Metadata extensions are [included](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) by default in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Metadata extensions are created using the DDL statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) and can be joined to new [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"), enabling different extensions to be created for a CDS entity. Furthermore, each metadata extension is linked to a layer, such as a branch, customer, or partner, which determines the priority if there is an identical variant or no variant.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Modification 9   

Access Control

The following enhancements have been implemented in CDS access control:

-   As well as [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)), there are now also [full access rules](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) and [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)).
-   There is a new operator ?= for [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)), which checks not only for a specified value but also the initial value or the null value.
-   A new [user condition](javascript:call_link\('abencds_f1_cond_user.htm'\)) compares the value of an element of a CDS entity with the current user name.

Modification 10   

Key Fields

-   The key fields of a CDS view that are defined with [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).
-   The new view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_view_anno_v1.htm'\)) can be used to override the default behavior of the addition [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS-managed DDIC view (obsolete).


### abennews-751-amdp.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP in Release 7.51, ABENNEWS-751-AMDP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

AMDP in Release 7.51

[1\. Logical Database Schemas](#!ABAP_MODIFICATION_1@1@)
[2\. Use of Logical Database Schemas in AMDP Methods](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Logical Database Schemas

[Logical database schemas](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") were introduced as symbolic names for physical [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2   

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))

can be used to specify logical database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.


### abennews-751-data_cluster.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.51, ABENNEWS-751-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.51

Modification

New Structure for Export/Import Tables

[Export tables and import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") with a new [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) can now be used to save [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)).

In this [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)), the field CLUSTD has the data type RAWSTRING ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables and import tables.


### abennews-751-messages.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages in Release 7.51, ABENNEWS-751-MESSAGES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Messages in Release 7.51

Modification

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) (used to send a message) points to an object that includes the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)), the addition TYPE can be omitted. The message type from the interface attribute MSGTY of the object is then used implicitly.


### abennews-751-transformations.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

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

The following new [special domains](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) have been introduced, which override the default mapping of elementary ABAP types to asXML.

-   XSDUUID\_BASE64 for 16-byte UUIDs in base64 format
-   XSDCURRCODE for ISO currency keys
-   XSDUNITCODE for ISO unit keys

Modification 2   

New Formats for format in the Attribute option of tt:value

The following new formats can be specified in parentheses after [format](javascript:call_link\('abenst_option_format.htm'\)) in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)):

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

[decimals](javascript:call_link\('abenst_option_format.htm'\)) can now be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it defines the number of decimal places of numeric types.

Modification 4   

regime New for the Attributeoption of tt:value

[regime(num*|*char*|*bin)](javascript:call_link\('abenst_option_format.htm'\)) can now be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it can be used to force numeric, character-like, or byte-like handling.

Modification 5   

noError New for the Attributeoption of tt:value

[noError](javascript:call_link\('abenst_option_format.htm'\)) now can be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it prevents exceptions in the formattings language, currCode, and unitCode. These formattings evaluate entries in database tables.


### abennews-751-channels.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Channels in Release 7.51, ABENNEWS-751-CHANNELS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Channels in Release 7.51

[1\. Length Restriction for AMC and APC](#!ABAP_MODIFICATION_1@1@)
[2\. Suppressing AMC Messages](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Length Restriction for AMC and APC

The length restriction for messages that can be sent using [AMC](javascript:call_link\('abenamc.htm'\)) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter rdisp/long\_messages/max\_length.

The same applies to [APC](javascript:call_link\('abenapc.htm'\)) messages, which are sent with an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH.

Modification 2   

Suppressing AMC Messages

The new parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER can be used to control whether [AMC](javascript:call_link\('abenamc.htm'\)) messages can be sent to the current ABAP session or not.


### abennews-751-others.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

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

In Release 7.51, a new [ABAP version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") [Static ABAP with Restricted Object Use](javascript:call_link\('abenabap_static_restr_glosry.htm'\) "Glossary Entry") was introduced. The internal version ID in column UCCHECK of system table TRDIR is 3.
