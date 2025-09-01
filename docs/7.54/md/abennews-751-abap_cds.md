  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

ABAP CDS in Release 7.51

[1\. Client handling](#!ABAP_MODIFICATION_1@1@)

[2\. Expressions and functions](#!ABAP_MODIFICATION_2@2@)

[3\. Cross join](#!ABAP_MODIFICATION_3@3@)

[4\. Associations](#!ABAP_MODIFICATION_4@4@)

[5\. Session variables](#!ABAP_MODIFICATION_5@5@)

[6\. CDS view enhancements](#!ABAP_MODIFICATION_6@6@)

[7\. Annotations](#!ABAP_MODIFICATION_7@7@)

[8\. Access control](#!ABAP_MODIFICATION_8@8@)

Modification 1

Client Handling

The new annotation @ClientHandling specifies the client handling of [CDS views](javascript:call_link\('abencds_client_handling.htm'\)) and [CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). It replaces the annotation @ClientDependent and makes it obsolete.

Modification 2

Expressions and Functions

The following enhancements have been implemented:

-   [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\))
    

-   In a [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)), operands of the types SSTRING can now be cast to types other than themselves and back. Here, the type SSTRING behaves like the data type CHAR.

-   In a [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)), operands of the types CLNT, LANG, TIMS, and UNIT can now be cast to the types CHAR and SSTRING. Here, the target type must be specified as a data element.

-   In a [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)), the data types CHAR, SSTR, and NUMC can now be cast to ACCP, and the other way round.

-   [Aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) can now be used as operands in a [CAST expression](javascript:call_link\('abencds_f1_cast_expression.htm'\)).

-   New Functions
    

-   The following additional string functions are now supported: [UPPER](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)) and [LOWER](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))

-   The following additional date/time functions are now supported: [ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_f1_timezone_functions.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_f1_timezone_functions.htm'\)), [TSTMP\_TO\_DATS](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), and [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

-   A new built-in conversion function [FLTP\_TO\_DEC](javascript:call_link\('abencds_f1_conv_func_types.htm'\)) can be used to convert arguments of type FLTP to packed numbers.

-   An addition [AS dtype](javascript:call_link\('abencds_f1_avg_as.htm'\)) can now be specified for the [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) AVG to determine the data type of the return value.
    
-   Conditions
    

-   [Built-in functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) can now be specified on the right side of a [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) condition of a [WHERE condition](javascript:call_link\('abencds_cond_expr_where.htm'\)), an [ON condition](javascript:call_link\('abencds_cond_expr_on_join.htm'\)), a [filter condition](javascript:call_link\('abencds_cond_expr_filter.htm'\)), or a [complex case distinction](javascript:call_link\('abencds_cond_expr_case.htm'\)).

-   In [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) conditions, fields of data sources of the type ACCP can now be [compared](javascript:call_link\('abencds_cond_expr_types.htm'\)) with fields of the same type, and with literals of the type NUMC.

The following changes have been made:

-   In [CAST expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match precisely. This restriction can now be applied as an optional restriction using the new addition PRESERVING TYPE. This addition specifies explicitly that casts are to be applied to the semantic attributes of a data element. PRESERVING TYPE suppresses the syntax warning that handles casts of identical technical types.
    

Modification 3

Cross Join

As well as an inner and outer join, it is now possible to use a [cross join](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)).

Modification 4

Associations

-   [Associations](javascript:call_link\('abencds_f1_association.htm'\)) can now be published for union sets formed with [UNION](javascript:call_link\('abencds_f1_union.htm'\)). In this case, special rules apply.
    
-   WITH DEFAULT FILTER can be used to specify a default filter condition for an [association](javascript:call_link\('abencds_f1_association.htm'\)). This condition is used as a filter condition in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) if no condition is specified for the association here.
    
-   In a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)), [\*:](javascript:call_link\('abencds_path_expression_attr.htm'\)) can be used to declared an association as a polyvalent association explicitly.
    

Modification 5

Session Variables

When a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is accessed using ABAP SQL, it is possible to access the new session variable [$session.system\_date](javascript:call_link\('abencds_f1_session_variable.htm'\)) in which the values of the system field sy-datum are available.

Modification 6

CDS View Enhancements

The statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) can now be used to extend the following CDS views too:

-   CDS views with [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) and a [GROUP-BY clause](javascript:call_link\('abencds_f1_group_by.htm'\))
    
-   CDS views with a [UNION clause](javascript:call_link\('abencds_f1_union.htm'\)) for union sets
    

For enhancements of the GROUP-BY clause and UNION clauses, the existing CDS view must contain the new annotation array [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) with suitable values. The value #NONE of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS view enhancements.

Modification 7

Annotations

-   Annotation for Key Fields
    

The new view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to override the default behavior of the addition [KEY](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) for defining key fields of a CDS view. If the annotation is specified with the value true, the key fields defined using KEY are also used for the associated CDS database view.

-   Null Values of Annotations
    

For each [element annotation](javascript:call_link\('abencds_f1_element_annotation.htm'\)) that is not part of an [annotation array](javascript:call_link\('abencds_annotations_syntax_array.htm'\)), the special value [null](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) can be specified (without quotation marks). This means that the annotations are ignored in the [evaluation](javascript:call_link\('abencds_annotations_analysis.htm'\)) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.

-   Metadata Extensions
    

[Metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) are new [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that allow [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") for a [CDS entity](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") to be created and transported separately from their [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). Metadata extensions are [included](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) by default in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Metadata extensions are created using the DDL statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) and can be joined to new [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"), enabling different extensions to be be created for a CDS entity. Furthermore, each metadata extension is linked to a layer, such as a branch, customer, or partner, which determines the priority if there is an identical variant or no variant.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Modification 8

Access Control

The following enhancements have been implemented in CDS access control:

-   As well as [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)), there are now also [full access rules](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) and [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)).
    
-   There is a new operator ?= for [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)), which checks not only for a specified value but also the initial value or the null value.
    
-   A new [user condition](javascript:call_link\('abencds_f1_cond_user.htm'\)) compares the value of an element of a CDS entity with the current user name.