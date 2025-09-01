  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP CDS in Release 7.50

[1\. CDS table functions](#!ABAP_MODIFICATION_1@1@)
[2\. CDS access control](#!ABAP_MODIFICATION_2@2@)
[3\. Expressions and functions](#!ABAP_MODIFICATION_3@3@)
[4\. Session variables](#!ABAP_MODIFICATION_4@4@)
[5\. CDS views with input parameters](#!ABAP_MODIFICATION_5@5@)
[6\. Annotation for input parameters](#!ABAP_MODIFICATION_6@6@)
[7\. Key fields](#!ABAP_MODIFICATION_7@7@)
[8\. Evaluation of annotations](#!ABAP_MODIFICATION_8@8@)
[9\. Publishing associations](#!ABAP_MODIFICATION_9@9@)
[10\. Extensions](#!ABAP_MODIFICATION_10@10@)

Modification 1

CDS Table Functions

The new DDL statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) can be used to define [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as a new category of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). In platform-specific SQL, a CDS table function is implemented in an associated [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry").

Modification 2

CDS Access Control

[ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [access control](javascript:call_link\('abencds_access_control.htm'\)), introduced in [Release 7.40, SP10](javascript:call_link\('abennews-740_sp10-abap_cds.htm'\)), was expanded to include implicit evaluations of [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [DDL](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) in ABAP SQL. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is associated with a CDS role, an additional [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

Modification 3

Expressions and Functions

The following enhancements have been implemented:

-   Enhancements to the [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   A [CAST expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)) now now contain nested cast expressions and [case distinctions](javascript:call_link\('abencds_case_expression_v1.htm'\)) as an operand.

-   Data elements can now be specified as the target type in [CAST expressions](javascript:call_link\('abencds_cast_expression_v1.htm'\)). This passes its semantic attributes to the result. This also makes it possible to map more built-in types to itself than previously.

-   In [CAST expressions](javascript:call_link\('abencds_cast_expression_v1.htm'\)), the restriction no longer applies that casts of operands of the types DEC, CURR, and QUAN to the same types expect the target type to be long enough. In castes from NUMC to NUMC, however, the lengths must now match exactly.

-   [CAST expressions](javascript:call_link\('abencds_cast_expression_v1.htm'\)) can now be used to cast operands of the types DATS and TIMS to CHAR (if the length of the target type is sufficient).

-   A one character literal with the type NUMC can now be [compared](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) with a data source of the type LANG.

-   New SQL functions for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   String functions: [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [INSTR](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LEFT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LENGTH](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RIGHT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RPAD](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)),[RTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

-   Byte string functions: [BINTOHEX](javascript:call_link\('abencds_conv_func_types_v1.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

-   Date functions and time functions for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   The special date functions [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v1.htm'\)), and [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v1.htm'\)) make it possible to calculate with values of the built-in dictionary type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

-   The new date function [DATS\_IS\_VALID](javascript:call_link\('abencds_date_functions_v1.htm'\)) checks the validity of dates.

-   The new time function [TIMS\_IS\_VALID](javascript:call_link\('abencds_time_functions_v1.htm'\)) checks the validity of times.

-   The new time stamp functions [TSTMP\_IS\_VALID](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)) and [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)) perform operations with [time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) in packed numbers.

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of a CDS view can be passed to many arguments of [built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)).

-   In the [conversion functions](javascript:call_link\('abencds_conversion_functions_v1.htm'\)) UNIT\_CONVERSION and DECIMAL\_SHIFT, the result type was set to the data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 31 and 14 decimal places.
    

Modification 4

Session Variables

When a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is accessed using ABAP SQL, three session variables ([$session.user](javascript:call_link\('abencds_session_variable_v1.htm'\)), [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)), and [$session.system\_language](javascript:call_link\('abencds_session_variable_v1.htm'\))) can be accessed here. In these variables, the values of the system fields sy-uname, sy-mandt and sy-langu are available.

Modification 5

CDS Views with Input Parameters

In Release 7.50 and higher, the [input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)). Querying this property results in a warning check from the syntax check.

Modification 6

Annotation for Input Parameters

An [input parameter](javascript:call_link\('abencds_f1_param.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can now be annotated with an annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of this type is used a [data source](javascript:call_link\('abapselect_data_source.htm'\)) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) enables the client ID of the current client to be passed implicitly, which provides support for client handling in Native SQL of the implementation of a CDS table function.

Modification 7

Key Fields

-   The key fields of a CDS view that are defined with [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).

-   The new view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_view_anno_v1.htm'\)) can be used to override the default behavior of the addition [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    

Modification 8

Evaluation of Annotations

The class CL\_DD\_DDL\_ANNOTATION\_SERVICE contains methods for evaluating the [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Modification 9

Publishing Associations

Path expressions can now be published with more than one association in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a CDS view. The fields of the source data source from the ON condition of the published associated, which then also need to be specified, must be defined using an appropriately specified path.

Modification 10

Enhancements

The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) for [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") was expanded as follows:

-   [Associations](javascript:call_link\('abencds_association_v1.htm'\)) for the SELECT statement of the extended CDS view can now be specified after EXTEND VIEW.

-   The following can now be specified in the extension list select\_list\_extension:

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) of the extended CDS view

-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) for custom associations and for associations of the extended CDS view

-   [Special functions](javascript:call_link\('abencds_special_functions_v1.htm'\))