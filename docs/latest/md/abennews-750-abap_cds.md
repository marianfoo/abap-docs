  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS in ABAP Release 7.50

[1\. CDS Table Functions](#!ABAP_MODIFICATION_1@1@)
[2\. CDS Access Control](#!ABAP_MODIFICATION_2@2@)
[3\. Expressions and Functions](#!ABAP_MODIFICATION_3@3@)
[4\. Session Variables](#!ABAP_MODIFICATION_4@4@)
[5\. Annotation for Input Parameters](#!ABAP_MODIFICATION_5@5@)
[6\. API for Evaluation of Annotations](#!ABAP_MODIFICATION_6@6@)
[7\. Exposing CDS Associations](#!ABAP_MODIFICATION_7@7@)
[8\. Extensions](#!ABAP_MODIFICATION_8@8@)
[9\. CDS Views with Input Parameters](#!ABAP_MODIFICATION_9@9@)

Modification 1   

CDS Table Functions

The new DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_table_function.htm) can be used to define [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a new category of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). In platform-specific SQL, a CDS table function is implemented in an associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry").

Modification 2   

CDS Access Control

[ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm), introduced in [ABAP release 7.40, SP10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp10-abap_cds.htm), was expanded to include implicit evaluations of [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") defined in the [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") [DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) in ABAP SQL. If a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") is associated with a CDS role, an additional [access condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

Modification 3   

Expressions and Functions

The following enhancements have been implemented:

-   Enhancements to the [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"):
    -   A [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) now contain nested cast expressions and [case distinctions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm) as an operand.
    -   Data elements can now be specified as the target type in [CAST expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm). This passes its semantic properties to the result. This also makes it possible to map more built-in types to itself than previously.
    -   In [CAST expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm), the restriction no longer applies that casts of operands of the types DEC, CURR, and QUAN to the same types expect the target type to be long enough. In casts from NUMC to NUMC, however, the lengths must now match exactly.
    -   [CAST expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) can now be used to cast operands of the types DATS and TIMS to CHAR (if the length of the target type is sufficient).
-   A one character literal with the type NUMC can now be [compared](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_types_v1.htm) with a data source of the type LANG.
-   New SQL functions for [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"):
    -   String functions: [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [INSTR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LEFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LENGTH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [LTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [RIGHT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm), [RPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm),[RTRIM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)
    -   Byte string functions: [BINTOHEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm)
-   Date functions and time functions for [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"):
    -   The special date functions [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm), and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm) make it possible to calculate with values of the built-in dictionary type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry").
    -   The new date function [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm) checks the validity of dates.
    -   The new time function [TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_time_functions_v1.htm) checks the validity of times.
    -   The new time stamp functions [TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm) and [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm) perform operations with [time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm) in packed numbers.
-   [Input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm) of a CDS view can be passed to many arguments of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm).
-   In the [conversion functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v1.htm) UNIT\_CONVERSION and DECIMAL\_SHIFT, the result type was set to the data type [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 31 and 14 decimal places.

Modification 4   

Session Variables

When a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") is accessed using ABAP SQL, three session variables ([$session.user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm), [$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm), and [$session.system\_language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm)) can be accessed here. In these variables, the values of the system fields sy-uname, sy-mandt and sy-langu are available.

Modification 5   

Annotation for Input Parameters

An [input parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") can now be annotated with an annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") of this type is used a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [#CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm) enables the client ID of the current client to be passed implicitly, which provides support for client handling in Native SQL of the implementation of a CDS table function.

Modification 6   

API for Evaluation of Annotations

The class CL\_DD\_DDL\_ANNOTATION\_SERVICE contains methods for evaluating the [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

Modification 7   

Exposing CDS Associations

Path expressions can now be published with more than one association in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of a CDS view. The fields of the source data source from the ON condition of the published associated, which then also need to be specified, must be defined using an appropriately specified path.

Modification 8   

Extensions

The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm) for [CDS DDIC-based view extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extend_glosry.htm "Glossary Entry") was expanded as follows:

-   [Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v1.htm) for the SELECT statement of the extended CDS view can now be specified after EXTEND VIEW.
-   The following can now be specified in the extension list select\_list\_extension:
    -   [Input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm) of the extended CDS view
    -   [Path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) for custom associations and for associations of the extended CDS view
    -   [Special functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_special_functions_v1.htm)

Modification 9   

CDS Views with Input Parameters

In ABAP release 7.50 and higher, the [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_dbfeatures.htm). Querying this property results in a warning check from the syntax check.