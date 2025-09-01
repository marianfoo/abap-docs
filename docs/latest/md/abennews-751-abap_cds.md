  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.51](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS in ABAP Release 7.51

[1\. Client Handling](#!ABAP_MODIFICATION_1@1@)
[2\. Expressions and Functions](#!ABAP_MODIFICATION_2@2@)
[3\. Cross Join](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Associations](#!ABAP_MODIFICATION_4@4@)
[5\. Session Variables](#!ABAP_MODIFICATION_5@5@)
[6\. CDS DDIC-Based View Extensions](#!ABAP_MODIFICATION_6@6@)
[7\. Annotations](#!ABAP_MODIFICATION_7@7@)
[8\. Metadata Extensions](#!ABAP_MODIFICATION_8@8@)
[9\. Access Control](#!ABAP_MODIFICATION_9@9@)
[10\. Key Fields](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Client Handling

The new annotation @ClientHandling specifies the client handling of [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) and [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_func_client_handling.htm). It replaces the annotation @ClientDependent and makes it obsolete.

Modification 2   

Expressions and Functions

The following enhancements have been implemented:

-   [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm)
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm), operands of the type SSTRING can now be cast to types other than themselves and back. Here, the type SSTRING behaves like the data type CHAR.
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm), operands of the types CLNT, LANG, TIMS, and UNIT can now be cast to the types CHAR and SSTRING. Here, the target type must be specified as a data element.
    -   In a [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm), the data types CHAR, SSTR, and NUMC can now be cast to ACCP, and the other way round.
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) can now be used as operands in a [CAST expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm).
-   New Functions
    -   The following additional string functions are now supported: [UPPER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm) and [LOWER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)
    -   The following additional date/time functions are now supported: [ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm), [TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm), and [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm)
    -   A new built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v1.htm) can be used to convert arguments of type FLTP to packed numbers.
-   An addition [AS dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_avg_as_v1.htm) can now be specified for the [aggregate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) AVG to determine the data type of the return value.
-   Conditions
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm) can now be specified on the right side of a [cond\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) condition of a [WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_where_v1.htm), an [ON condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v1.htm), a [filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_filter_v1.htm), or a [complex case distinction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_case_v1.htm).
    -   In [cond\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) conditions, fields of data sources of the type ACCP can now be [compared](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_types_v1.htm) with fields of the same type, and with literals of the type NUMC.

The following changes have been made:

-   In [CAST expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match precisely. This restriction can now be applied as an optional restriction using the new addition PRESERVING TYPE. This addition specifies explicitly that casts are to be applied to the semantic properties of a data element. PRESERVING TYPE suppresses the syntax warning that handles casts of identical technical types.

Modification 3   

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v1.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm).

Modification 4   

CDS Associations

The following changes have been made:

-   [Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v1.htm) can now be published for union sets formed with [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm). In this case, special rules apply.
-   WITH DEFAULT FILTER can be used to specify a default filter condition for an [association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v1.htm). This condition is used as a filter condition in a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) if no condition is specified for the association here.
-   In a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm), [\*:](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_card_v1.htm) can be used to declare an association as a non-unique association explicitly.

Modification 5   

Session Variables

When a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") is accessed using ABAP SQL, it is possible to access the new session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm) in which the values of the system field sy-datum are available.

Modification 6   

CDS DDIC-Based View Extensions

The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view.htm) can now be used to extend the following CDS views too:

-   CDS views with [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) and a [GROUP-BY clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v1.htm)
-   CDS views with a [UNION clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm) for union sets

For enhancements of the GROUP-BY clause and UNION clauses, the existing CDS view must contain the new annotation array [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm) with suitable values. The value #NONE of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS view enhancements.

Modification 7   

Annotations

The following changes have been made:

-   Annotation for Key Fields
    
    The new view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm) can be used to override the default behavior of the addition [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.
    
-   Null Values of Annotations
    
    For each [element annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm) that is not part of an [annotation array](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_array.htm), the special value [null](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_value.htm) can be specified (without quotation marks). This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.
    

Modification 8   

Metadata Extensions

[Metadata extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_meta_data_extensions.htm) are new [CDS objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry") that allow [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") for a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry") to be created and transported separately from their [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). Metadata extensions are [included](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_meta_data_extension_eval.htm) by default in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Metadata extensions are created using the DDL statement [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_annotate_view.htm). Each metadata extension is linked to a layer, such as a branch, customer, or partner, which determines the priority.

Modification 9   

Access Control

The following enhancements have been implemented in CDS access control:

-   As well as [conditional access rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm), there are now also [full access rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_grant_rule.htm) and [inherited access rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_inherited_rule.htm).
-   There is a new operator ?= for [access conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm), which checks not only for a specified value but also the initial value or the null value.
-   A new [user condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_user.htm) compares the value of an element of a CDS entity with the current user name.

Modification 10   

Key Fields

The following changes have been made:

-   The key fields of a CDS view that are defined with [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm).
-   The new view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm) can be used to override the default behavior of the addition [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS-managed DDIC view (obsolete).