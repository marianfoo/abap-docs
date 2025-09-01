  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-750.htm) → 

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

The new DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm) can be used to define [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a new category of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"). In platform-specific SQL, a CDS table function is implemented in an associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_method_glosry.htm "Glossary Entry").

Modification 2

CDS Access Control

[ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm), introduced in [Release 7.40, SP10](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp10-abap_cds.htm), was expanded to include implicit evaluations of [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") defined in the [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") [DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) in ABAP SQL. If a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") is associated with a CDS role, an additional [access condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry") is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

Modification 3

Expressions and Functions

The following enhancements have been implemented:

-   Enhancements to the [CAST expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"):
    

-   A [CAST expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) now now contain nested cast expressions and [case distinctions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm) as an operand.

-   Data elements can now be specified as the target type in [CAST expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm). This passes its semantic attributes to the result. This also makes it possible to map more built-in types to itself than previously.

-   In [CAST expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm), the restriction no longer applies that casts of operands of the types DEC, CURR, and QUAN to the same types expect the target type to be long enough. In castes from NUMC to NUMC, however, the lengths must now match exactly.

-   [CAST expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cast_expression.htm) can now be used to cast operands of the types DATS and TIMS to CHAR (if the length of the target type is sufficient).

-   A one character literal with the type NUMC can now be [compared](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm) with a data source of the type LANG.
    
-   New SQL functions for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"):
    

-   String functions: [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [INSTR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [LEFT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [LENGTH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [LTRIM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [RIGHT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm), [RPAD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm),[RTRIM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

-   Byte string functions: [BINTOHEX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_types.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_types.htm)

-   Date functions and time functions for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"):
    

-   The special date functions [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm), and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm) make it possible to calculate with values of the built-in dictionary type [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry").

-   The new date function [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm) checks the validity of dates.

-   The new time function [TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm) checks the validity of times.

-   The new time stamp functions [TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm) and [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm) perform operations with [time stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) in packed numbers.

-   [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a CDS view can be passed to many arguments of [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_builtin_functions.htm).
    
-   In the [conversion functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conversion_functions.htm) UNIT\_CONVERSION and DECIMAL\_SHIFT, the result type was set to the data type [QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) or [CURR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 31 and 14 decimal places.
    

Modification 4

Session Variables

When a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") is accessed using ABAP SQL, three session variables ([$session.user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm), [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm), and [$session.system\_language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm)) can be accessed here. In these variables, the values of the system fields sy-uname, sy-mandt and sy-langu are available.

Modification 5

CDS Views with Input Parameters

In Release 7.50 and higher, the [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm). Querying this property results in a warning check from the syntax check.

Modification 6

Annotation for Input Parameters

An [input parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry") can now be annotated with an annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The potential values of the annotation assign ABAP system fields to the input parameters. If a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") of this type is used a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in ABAP SQL, the assigned values can be passed implicitly. In particular, the value [#CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) enables the client ID of the current client to be passed implicitly, which provides support for client handling in Native SQL of the implementation of a CDS table function.

Modification 7

Key Fields

-   The key fields of a CDS view that are defined with [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm).
    
-   The new view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) can be used to override the default behavior of the addition [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    

Modification 8

Evaluation of Annotations

The class CL\_DD\_DDL\_ANNOTATION\_SERVICE contains methods for evaluating the [annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry").

Modification 9

Publishing Associations

Path expressions can now be published with more than one association in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) of a CDS view. The fields of the source data source from the ON condition of the published associated, which then also need to be specified, must be defined using an appropriately specified path.

Modification 10

Enhancements

The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view.htm) for [CDS view extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_extend_glosry.htm "Glossary Entry") was expanded as follows:

-   [Associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_association.htm) for the SELECT statement of the extended CDS view can now be specified after EXTEND VIEW.
    
-   The following can now be specified in the extension list select\_list\_extension:
    

-   [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm) of the extended CDS view

-   [Path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) for custom associations and for associations of the extended CDS view

-   [Special functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_special_functions.htm)