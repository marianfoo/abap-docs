  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), arranged by topics.

-   [DDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_1)

-   [CDS Annotation Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)

-   [CDS Views](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_3)

-   [CDS View Enhancements](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)

-   [CDS Table Functions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_5)

-   [CDS Hierarchies](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)

-   [Abstract CDS Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_7)

-   [CDS Metadata Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)

-   [DCL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_9)

-   [CDS Roles](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)

-   [CDS access policy](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_11)

In addition to the language elements shown here, CDS source code can also contain [annotations](javascript:call_link\('abencds_annotations.htm'\)) with metadata.

DDL

CDS Annotation Definitions

Keywords and Additions

Language Element

Meaning

[define annotation ...](javascript:call_link\('abencds_f1_define_annotation.htm'\))

Defines a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

[enum](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))

Defines enumeration symbols of a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

[default](javascript:call_link\('abencds_f1_define_annotation_type.htm'\))

Defines default values of a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

[array of](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\))

Defines an [annotation arras](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

CDS Views

Keywords and Additions

Language Element

Meaning

[DEFINE VIEW ... AS](javascript:call_link\('abencds_f1_define_view.htm'\))

Defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[WITH PARAMETERS](javascript:call_link\('abencds_f1_parameter_list.htm'\))

Defines input parameters of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](javascript:call_link\('abencds_f1_select_statement.htm'\))

SELECT statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[INNER JOIN ... ON](javascript:call_link\('abencds_f1_joined_data_source.htm'\))

Inner join in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[LEFT*|*RIGHT OUTER JOIN ... ON](javascript:call_link\('abencds_f1_joined_data_source.htm'\))

Outer join in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_f1_association.htm'\))

Defines an association for a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_association.htm'\))

Specifies a default filter condition of an association

[1:](javascript:call_link\('abencds_path_expression_attr.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\))

[INNER ... WHERE](javascript:call_link\('abencds_path_expression_attr.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\))

[LEFT OUTER ... WHERE](javascript:call_link\('abencds_path_expression_attr.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\))

[KEY ... AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\))

Element of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\))

[$EXTENSION.\*](javascript:call_link\('abencds_f1_select_list_entry.htm'\))

Elements of an enhancement in a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\))

[WHERE ...](javascript:call_link\('abencds_f1_where_clause.htm'\))

WHERE clause of a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[GROUP BY ...](javascript:call_link\('abencds_f1_group_by.htm'\))

GROUP-BY clause of a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[HAVING ...](javascript:call_link\('abencds_f1_having_clause.htm'\))

HAVING clause of a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[UNION ALL ...](javascript:call_link\('abencds_f1_union.htm'\))

UNION clause of a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

Expressions

Operators

Meaning

[MAX](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [MIN](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [AVG *\[*AS dtype*\]*](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [SUM](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), [COUNT](javascript:call_link\('abencds_f1_aggregate_functions.htm'\))

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[+](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [\-](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [\*](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)), [/](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

Arithmetic expression in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[CASE](javascript:call_link\('abencds_f1_case_expression.htm'\)), [WHEN](javascript:call_link\('abencds_f1_case_expression.htm'\)), [THEN](javascript:call_link\('abencds_f1_case_expression.htm'\)), [ELSE](javascript:call_link\('abencds_f1_case_expression.htm'\)), [END](javascript:call_link\('abencds_f1_case_expression.htm'\))

Case distinction in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\))

Cast expression in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[\=](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [<>](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [<](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [\>](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [<=](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [\>=](javascript:call_link\('abencds_cond_expr_comp.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_between.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)), [NOT](javascript:call_link\('abencds_f1_conditional_expression.htm'\)), [AND](javascript:call_link\('abencds_f1_conditional_expression.htm'\)), [OR](javascript:call_link\('abencds_f1_conditional_expression.htm'\))

Relational expression in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

Predefined Functions

Function

Meaning

[ABS](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [CEIL](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [DIV](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [DIVISION](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [FLOOR](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [MOD](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\)), [ROUND](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[CONCAT](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [INSTR](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LEFT](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LENGTH](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LOWER](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [LTRIM](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [REPLACE](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [RIGHT](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [RPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [RTRIM](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [SUBSTRING](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)), [UPPER](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[BINTOHEX](javascript:call_link\('abencds_f1_conv_func_types.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_f1_conv_func_types.htm'\))

Byte string function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[COALESCE](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[FLTP\_TO\_DEC](javascript:call_link\('abencds_f1_conv_func_types.htm'\)), [UNIT\_CONVERSION](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\)), [DECIMAL\_SHIFT](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[DATS\_IS\_VALID](javascript:call_link\('abencds_f1_date_functions.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_f1_date_functions.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_f1_date_functions.htm'\)), [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_f1_date_functions.htm'\))

Date function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[TIMS\_IS\_VALID](javascript:call_link\('abencds_f1_time_functions.htm'\))

Time function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[TSTMP\_IS\_VALID](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_f1_timestamp_functions.htm'\)), [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

Time stamp function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_f1_timezone_functions.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_f1_timezone_functions.htm'\))

Time zone functions in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[TSTMP\_TO\_DATS](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)), [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

Date/time conversions functions in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

CDS View Enhancements

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ... WITH](javascript:call_link\('abencds_f1_extend_view.htm'\))

Extends a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")

CDS Table Functions

Keywords and Additions

Language Element

Meaning

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](javascript:call_link\('abencds_f1_define_table_function.htm'\))

Defines a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

CDS Hierarchies

Keywords and Additions

Language Element

Meaning

[DEFINE HIERARCHY ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

Abstract CDS Entities

Keywords and Additions

Language Element

Meaning

[DEFINE ABSTRACT ENTITY ...](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

[WITH PARAMETERS](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\))

Defines input parameters of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

[ASSOCIATION ... TO ... ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Publishes an association in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_absent_association.htm'\))

Specifies a default filter condition of an association

CDS Metadata Extensions

Keywords and Additions

Language Element

Meaning

[ANNOTATE ENTITY*|*VIEW ... WITH](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") for a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")

[VARIANT](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Joins a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry")

[PARAMETERS](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))

Extends the annotations of the input parameters of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")

DCL

CDS Roles

Keywords and Additions

Language Element

Meaning

[DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\))

Defines a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[GRANT SELECT ON](javascript:call_link\('abencds_dcl_role_rules.htm'\))

Defines an access rule in a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[WHERE](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

WHERE clause in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[AND](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)), [OR](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)), [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))

Boolean operator in a conditional access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[INHERIT](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\))

Defines an inherited access rule of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") (obsolete)

[ASPECT pfcg\_auth](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)),
[ASPECT user](javascript:call_link\('abencds_f1_cond_user.htm'\))

Conditions for [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[PFCG\_MAPPING](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\))

Specifies a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in a [PFCG condition](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

[INHERIT ... FOR GRANT SELECT ON](javascript:call_link\('abencds_f1_cond_inherit.htm'\))

Defines an [inheritance condition](javascript:call_link\('abeninherit_condition_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")

...[\=*|*<>*|*<*|*\>*|*<=*|*\>=*|*?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))*|*[BETWEEN*|*LIKE*|*IS NULL](javascript:call_link\('abencds_f1_cond_literal.htm'\)) ...

Operators for literal conditions

CDS access policy

Keywords and Additions

Language Element

Meaning

[DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry")

[DEFINE PFCG\_MAPPING ... BETWEEN ... AND ... USING ...](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in an access policy