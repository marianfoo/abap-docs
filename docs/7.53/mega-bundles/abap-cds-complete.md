# ABAP CDS - Complete Reference (7.53)

**Generated**: 2025-09-01T11:14:58.537Z
**Bundles Combined**: 23
**Category**: cds

---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") and [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") and also makes it possible to define annotations and associations. The syntax and semantics basically match the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept.

-   [General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))

-   [Language Elements](javascript:call_link\('abencds_language_elements.htm'\))

Continue
[ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))
[ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\))


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") for defining [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.

-   A name can have a maximum of 30 characters.

-   A name can consist of letters, numbers, underscores (\_), and slashes (/).

-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

-   The separator for names with multiple parts is a period (.). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.

-   The following CDS keywords cannot be used as names:
    ALL, AND, AS, ASSOCIATION, AVG, CASE, CAST, COUNT, CROSS, DISTINCT, EXISTS, EXTEND, EXTENSION, FROM, FULL, GROUP, HAVING, INNER, JOIN, KEY, LEFT, MAX, MIN, NOT, NULL, ON, OR, ORDER, RIGHT, SELECT, SUM, UNION, VIEW, WHEN, WHERE

-   Literals

-   Numeric literals must always be specified in full and a decimal point (.) used as a decimal separator if necessary.

-   Character literals are enclosed in single quotation marks (').

-   Comments

-   Two forward slashes (//) introduce a comment, which continues until the end of the line.

-   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.

-   Separators

-   Statements can be closed using a semicolon (;). Sometimes this is mandatory.

-   Protected words

-   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the database table TRESE.

Notes

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.

-   In [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [CDS data definitions](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") and [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") for [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.

-   MYVIEW, myview, and myView all identify the same operand.

-   0.5 is a valid numeric literal, but .5 is not.


### abencds_language_elements.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), arranged by topics.

-   [DDL](#abencds-language-elements-1--------cds-annotation-definitions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)

-   [CDS Views](#abencds-language-elements-3--------cds-view-enhancements---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)

-   [CDS Table Functions](#abencds-language-elements-5--------cds-hierarchies---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)

-   [Abstract CDS Entities](#abencds-language-elements-7--------cds-metadata-extensions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)

-   [DCL](#abencds-language-elements-9--------cds-roles---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)

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


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Definition of Annotations

**Files**: 9 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))


### abencds_annotations_abap_ddla.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
   };
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   privilegedAssociations: array of AssociationRef;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),#HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
          output: Boolean;
       }
    };
};

API-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation API
{
   state : array of String(40) enum {
      NOT\_RELEASED;
      RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
      RELEASED\_FOR\_KEY\_USER\_APPS;
   };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }    
   }
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
         allowedChanges.value: \[ #NONE \] } }    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};


### abencds_annotations_abap_tables.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Annotation Syntax

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))


### abencds_annotations_abap_ddla.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
   };
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   privilegedAssociations: array of AssociationRef;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),#HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
          output: Boolean;
       }
    };
};

API-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation API
{
   state : array of String(40) enum {
      NOT\_RELEASED;
      RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
      RELEASED\_FOR\_KEY\_USER\_APPS;
   };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }    
   }
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
         allowedChanges.value: \[ #NONE \] } }    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};


### abencds_annotations_abap_tables.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS Metadata Extensions

**Files**: 10 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))


### abencds_annotations_abap_ddla.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
   };
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   privilegedAssociations: array of AssociationRef;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),#HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
          output: Boolean;
       }
    };
};

API-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation API
{
   state : array of String(40) enum {
      NOT\_RELEASED;
      RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
      RELEASED\_FOR\_KEY\_USER\_APPS;
   };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }    
   }
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
         allowedChanges.value: \[ #NONE \] } }    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};


### abencds_annotations_abap_tables.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Evaluation of Annotations

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))


### abencds_annotations_abap_ddla.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
   };
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   privilegedAssociations: array of AssociationRef;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),#HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
          output: Boolean;
       }
    };
};

API-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation API
{
   state : array of String(40) enum {
      NOT\_RELEASED;
      RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
      RELEASED\_FOR\_KEY\_USER\_APPS;
   };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }    
   }
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
         allowedChanges.value: \[ #NONE \] } }    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};


### abencds_annotations_abap_tables.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) → 

ABAP CDS - ABAP Annotations

ABAP annotations are [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") that are evaluated by the ABAP runtime environment. The following sections show the associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"):

-   [ABAP annotation definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))

-   [ABAP annotation syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))

The detailed meanings of the ABAP annotations is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

Note

An ABAP annotation can also be evaluated by frameworks of other software components.

Continue
[ABAP CDS - ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\))
[ABAP CDS - ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\))


### abencds_annotations_abap_ddla.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Definitions

The following [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shows the [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") in all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS.

-   The meaning of the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") shown here can be found in the documentation for [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)).

-   The semantics of the annotations can be found in the links in the DDLA source code.

The detailed meanings of these ABAP annotations are described under the relevant [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) defined after [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in the documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-ddla-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-ddla-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-ddla-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-ddla-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-ddla-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-ddla-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_12)

-   [Metadata-Annotations](#abencds-annotations-abap-ddla-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-ddla-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

Note

See also [ABAP Annotation Syntax](javascript:call_link\('abencds_annotations_abap_tables.htm'\)).

AbapAnnotation-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation AbapAnnotation {
  definitionHidden : Boolean default true;
};

AbapCatalog-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
@CompatibilityContract.c2.usageAllowed: false
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation AbapCatalog
{
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   buffering
   {
      status : String(20) enum { NOT\_ALLOWED; ACTIVE; SWITCHED\_OFF; } default #SWITCHED\_OFF;
      type : String(10) enum { SINGLE; GENERIC; FULL; NONE; } default #NONE;
      numberOfKeyFields : Integer default 000;
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ANY\],
           value: \[#ANY\]
       }
   }
   dbHints : array of
   {
      dbSystem : String(3) enum
      {
         ADA;
         DB2;
         DB4;
         DB6;
         INF;
         MSS;
         ORA;
         HDB;
         ASE;
         ALL;
      };
      hint : String(1298);
   };
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   viewEnhancementCategory : array of String(20) enum
   {
      NONE;
      PROJECTION\_LIST;
      GROUP\_BY;
      UNION;
   };
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#NONE\],
           value: \[#NONE\]
       }
   }
   preserveKey : Boolean default true;
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }
   }
   compiler
   {
      compareFilter : Boolean default true;
   };
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      setChange : String(30);  
      inheritedType : Boolean default true;    
   };
   @Scope:\[[#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
   @CompatibilityContract.c1.usageAllowed: false
   sqlViewAppendName : String(16);
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
   @MetadataExtension.usageAllowed: false
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]    
   sqlName : String(256);    
};

AccessControl-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\)), [#HIERARCHY](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))\]
annotation AccessControl
{
  @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
   authorizationCheck : String(20) enum { NOT\_REQUIRED; NOT\_ALLOWED; CHECK; PRIVILEGED\_ONLY; } default #CHECK;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   privilegedAssociations: array of AssociationRef;
   @CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD \],
                        value: \[#ANY \]
                      }
       }
   }
   personalData
   {
      blocking : String(30) enum { NOT\_REQUIRED; REQUIRED; BLOCKED\_DATA\_EXCLUDED; };
   };
@Scope: \[ #ASPECT \]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                       }
        },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#ANY \]
                      }
       }
   }
   aspect
   {
      fullAuthorization
        {
        value : String(60);
        operator : String(20) enum { EQUALS; IS\_NULL; IS\_NOT\_NULL; } default #EQUALS;
        }
   };
   @CompatibilityContract: {
       c1: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] },
       c2: { usageAllowed: true,
             allowedChanges.annotation: \[ #ANY \],
             allowedChanges.value: \[ #ANY \] }
       }
    @MetadataExtension.usageAllowed: true
    @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)),#HIERARCHY\]
    readAccess {
       logging {
            logdomain: array of
              {
                area: String(30);
                domain: String(30);
              }
          @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
          output: Boolean;
       }
    };
};

API-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation API
{
   state : array of String(40) enum {
      NOT\_RELEASED;
      RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
      RELEASED\_FOR\_KEY\_USER\_APPS;
   };
};

ClientDependent-Annotations

Obsolete annotations for scopes [#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

ClientHandling-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    }
}  
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation ClientHandling
{
   type : String(20) enum { CLIENT\_DEPENDENT; CLIENT\_INDEPENDENT; INHERITED; } default #INHERITED;
   algorithm : String(20) enum { NONE; AUTOMATED; SESSION\_VARIABLE; };
};

CompatibilityContract-Annotations

@Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
define annotation CompatibilityContract {
  c0 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c1 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };
  c2 {  
    usageAllowed: Boolean default true;
    allowedChanges {
      annotation: array of String(20) enum {ADD; REMOVE; ANY; NONE; CUSTOM;};
      value: array of String(20) enum {ADD; REMOVE; UPDATE; FALSE\_TO\_TRUE; TRUE\_TO\_FALSE; ANY; NONE; CUSTOM;};
    };
  };    
}

DataAging-Annotations

@Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#TABLE\_FUNCTION](javascript:call_link\('abencds_f1_function_annotations.htm'\))\]
@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ADD\],
            value: \[#FALSE\_TO\_TRUE\]
        }
    }
}  
annotation DataAging
{
   noAgingRestriction : Boolean default true;
};

EndUserText-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    },
    c2: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#ANY\],
            value: \[#ANY\]
        }
    }        
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation EndUserText
{
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 40
   @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), #ASPECT, [#PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)), [#ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)), #SERVICE\]
   label : String(60);
   @MetadataExtension.usageAllowed : true
   @LanguageDependency.maxLength : 67  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\)), [#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), [#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
   quickInfo : String(100);
   @LanguageDependency.maxLength : 37
   @Scope:\[#SIMPLE\_TYPE\]
   @CompatibilityContract: {
       c1: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       },
       c2: {
           usageAllowed: true,
           allowedChanges: {
               annotation: \[#NONE\],
               value: \[#NONE\]
           }
       }    
   }
   @API.state: \[#NOT\_RELEASED\]
   heading : String(55);
};

Environment-Annotations

@CompatibilityContract: {
    c1: {
        usageAllowed: true,
        allowedChanges: {
            annotation: \[#NONE\],
            value: \[#NONE\]
        }
    },
    c2.usageAllowed: false
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation Environment
{
   @Scope:\[[#PARAMETER](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))\]
   systemField : String(20) enum { CLIENT; SYSTEM\_LANGUAGE; USER; SYSTEM\_DATE; SYSTEM\_TIME; };
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   sql
   {
      passValue : Boolean default true;
   };
};

LanguageDependency-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation LanguageDependency {
  maxLength : Integer;
};

MappingRole-Annotations

@Scope:\[[#ROLE](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))\]
@CompatibilityContract: {
   c1: { usageAllowed: true },
   c1: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       },
   c2: { usageAllowed: true },
   c2: {
      allowedChanges: { annotation: \[#ADD, #REMOVE \],
                        value: \[#FALSE\_TO\_TRUE \] }
       }
}
@API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
annotation MappingRole
: Boolean default true
;

Metadata-Annotations

annotation Metadata {
  @Scope:\[[#ENTITY](javascript:call_link\('abencds_f1_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#ADD\],
              value: \[#FALSE\_TO\_TRUE\]
          }
      },
      c2.usageAllowed: false
  }
  allowExtensions : Boolean default true;
  @Scope:\[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))\]
  @CompatibilityContract: {
      c1: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      },
      c2: {
          usageAllowed: true,
          allowedChanges: {
              annotation: \[#NONE\],
              value: \[#NONE\]
          }
      }
  }
  @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM\]
  ignorePropagatedAnnotations : Boolean default true;
  @MetadataExtension.usageAllowed : true
  @Scope:\[[#ANNOTATE](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))\]
  @CompatibilityContract.c1: {
      usageAllowed: true,
      allowedChanges: {
          annotation: \[#NONE\],
          value: \[#NONE\]
      }
  }
  @CompatibilityContract.c2.usageAllowed: false
  layer : Integer  
    enum {
      CORE;      
      LOCALIZATION;
      INDUSTRY;
      PARTNER;
      CUSTOMER;
    };
};

MetadataExtension-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation MetadataExtension {
  usageAllowed : Boolean default true;
};

Scope\[ \]-Annotations

@Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
annotation Scope : array of String(20)  
  enum {  
    ENTITY;                
    VIEW;                  
    TABLE\_FUNCTION;        
    EXTEND\_VIEW;          
    ROLE;                  
    ACCESSPOLICY;          
    ANNOTATION;            
    ANNOTATE;              
    SERVICE;              
    CUSTOM\_ENTITY;        
    HIERARCHY;            
    PARAMETER;            
    ELEMENT;              
    ASPECT;                
    PFCG\_MAPPING;          
    SIMPLE\_TYPE;          
  };

Semantics-Annotations

...
define annotation Semantics
{
  ...
         allowedChanges.value: \[ #NONE \] } }    
   amount      
   {      
       currencyCode    : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }    
   quantity      
   {      
       unitOfMeasure   : ElementRef;  
   };      
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   unitOfMeasure       : Boolean default true;  
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: false },    
   c2: { usageAllowed: false } }  
   booleanIndicator    : Boolean default true;
  ...
};


### abencds_annotations_abap_tables.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The MDE column indicates if the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [Scope\[ \]-Annotations](#abencds-annotations-abap-tables-15--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

Note

See also [ABAP Annotation Definitions](javascript:call_link\('abencds_annotations_abap_ddla.htm'\)).

AbapAnnotation-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapAnnotation.definitionHidden

Annotation definition, test annotation or demonstration annotation that cannot be used in production CDS source code

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

AbapCatalog-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AbapCatalog.buffering.numberOfKeyFields

Table buffering, number of key fields when buffering generic areas

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Integer

\-

000

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.status

Table buffering, enables and disables buffering

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#ACTIVE
#NOT\_ALLOWED
#SWITCHED\_OFF

#SWITCHED\_OFF

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.buffering.type

Table buffering, defines the buffering type

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(10)

#FULL
#GENERIC
#NONE
#SINGLE

#NONE

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.compiler.compareFilter

CDS view, specifies how filter conditions are evaluated in path expressions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].dbSystem

CDS view, database hints evaluated by SADL, database system

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#ADA
#ALL
#ASE
#DB2
#DB4
#DB6
#HDB
#INF
#MSS
#ORA

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.dbHints\[ \].hint

CDS view, database hints evaluated by SADL, hint

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(1298)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.preserveKey

CDS view, specifies the definition of the key fields in the associated database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewAppendName

CDS view extension, name of the append view

[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.sqlViewName

CDS view, name of the database view

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(16)

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AbapCatalog.viewEnhancementCategory\[ \]

CDS view, specifies how the view can be extended using CDS view extensions

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#GROUP\_BY
#NONE
#PROJECTION\_LIST
#UNION

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

AccessControl-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

AccessControl.authorizationCheck

CDS access control, specifies implicit access control

[Hierarchy](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\))
[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CHECK
#NOT\_ALLOWED
#NOT\_REQUIRED
#PRIVILEGED\_ONLY

#CHECK

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

API-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

API.state\[ \]

Annotation definition, release annotation

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(40)

#NOT\_RELEASED
#RELEASED\_FOR\_KEY\_USER\_APPS
#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

\-

\-

\-

\-

ClientDependent-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientDependent

Specifies client dependency and how clients are handled (obsolete)

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

ClientHandling-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ClientHandling.algorithm

Specifies client handling

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#AUTOMATED
#NONE
#SESSION\_VARIABLE

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

ClientHandling.type

Specifies client dependency

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(20)

#CLIENT\_DEPENDENT
#CLIENT\_INDEPENDENT
#INHERITED

#INHERITED

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

CompatibilityContract-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

CompatibilityContract.c0.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c0.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c0.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c1.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c1.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c1.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

CompatibilityContract.c2.allowedChanges.annotation\[ \]

Modifiability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#NONE
#REMOVE

\-

\-

\-

\-

CompatibilityContract.c2.allowedChanges.value\[ \]

Modifiability of annotation values in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ADD
#ANY
#CUSTOM
#FALSE\_TO\_TRUE
#NONE
#REMOVE
#TRUE\_TO\_FALSE
#UPDATE

\-

\-

\-

\-

CompatibilityContract.c2.usageAllowed

Usability of an annotation in released CDS entities

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

DataAging-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

DataAging.noAgingRestriction

Data aging on SAP HANA, specifies how old data is handled

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

EndUserText-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

EndUserText.heading

undocumented

 

String(55)

\-

\-

X

\-

NOT\_RELEASED

EndUserText.label

Texts, short text connected to translation

[Access Policy](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))
[View Extension](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
[PFCG Mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

String(60)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

EndUserText.quickInfo

Texts, tooltip connected to translation

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))
[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(100)

\-

\-

X

X

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Environment.sql.passValue

Defines pass-by-value of host variables in comparisons in ABAP SQL

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Environment.systemField

Environment, assigns an ABAP system field

[Parameter](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))

String(20)

#CLIENT
#SYSTEM\_DATE
#SYSTEM\_LANGUAGE
#SYSTEM\_TIME
#USER

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

LanguageDependency-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

LanguageDependency.maxLength

Annotation definition, specifies the translatibility of texts

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Integer

\-

\-

\-

\-

\-

MappingRole-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MappingRole

Access control, specifies the assignment of a CDS role to users

[Role](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Metadata.allowExtensions

Metadata, specifies extensibility using metadata extensions

[Entity](javascript:call_link\('abencds_f1_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

\-

Metadata.ignorePropagatedAnnotations

Metadata, specifies how propagated annotations are evaluated using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE

[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Metadata.layer

Metadata, specfies layer in CDS metadata extension

[Meta Data Extension](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))

Integer

#CORE
#CUSTOMER
#INDUSTRY
#LOCALIZATION
#PARTNER

\-

\-

X

\-

MetadataExtension-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

MetadataExtension.usageAllowed

Annotation definition, specifies the distribution of the annotation in CDS metadata extensions

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

Boolean

\-

true

\-

\-

\-

Scope\[ \]-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Scope\[ \]

Annotation definition (defines the range of validity of the annotation)

[Annotation Definition](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))

String(20)

#ACCESSPOLICY
#ANNOTATE
#ANNOTATION
#ASPECT
#CUSTOM\_ENTITY
#ELEMENT
#ENTITY
#EXTEND\_VIEW
#HIERARCHY
#PARAMETER
#PFCG\_MAPPING
#ROLE
#SERVICE
#SIMPLE\_TYPE
#TABLE\_FUNCTION
#VIEW

\-

\-

\-

\-

Semantics-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

Semantics.amount.currencyCode

Currency field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

\-


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Views / ABAP CDS - Client Handling in CDS Views

**Files**: 4 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, data_source

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, ASSOCIATION / ABAP CDS - path_expr

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, select_list / ABAP CDS - SELECT, element

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CD- SELECT, clauses

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - aggr_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - case_expr

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cast_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cond_expr

**Files**: 16 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - EXTEND VIEW

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE HIERARCHY

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE ABSTRACT ENTITY

**Files**: 8 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, access_rules

**Files**: 6 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))*\]* }

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-ap-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-cds-access-policy--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping---between--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm---------and-auth--object-------using-pfcg--mapping--value--definition-----input1---auth--field1----------input2---auth--field2-------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-pfcg-mapping-definition--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-output-fields-of-the-mapping--currently-only-a-special-cds-entity-can-be-specified-here-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-pfcg-mapping-value-definition-pfcg--mapping--value--definition-specified-after-the-keyword-using-that-creates-the-relationship-between-the---input-fields-and-output-fields-defined-using-pfcg--mapping--field--definition--this-is-a-suitable-type-of-cds-entity-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input-of-the-mapping-with-authorization-fields-auth--field-of-the-authorization-object-auth--object---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object-and-is-transformed-to-specific-access-conditions-when-the-condition-is-evaluated---note--the-actual-output-fields-of-a-pfcg-mapping-cannot-be-viewed-directly-in-the-definition-of-the-mapping-or-in-any-cds-role-that-uses-the-mapping--they-are-defined-in-pfcg--mapping--field--definition-and-are-mapped-to-input-fields-pfcg--mapping--value--definition--which-are-themselves-associated-with-authorization-fields---example--the-following-abstract-example-shows-the-definition-of-a-pfcg-mapping-mapping-based-on-a-pfcg-mapping-field-definition-mapping--field--definition-and-a-pfcg-mapping-value-definition-mapping--field--definition--the-pfcg-mapping-value-definition-has-the-input-fields-in--1-and-in--2-used-as-the-left-sides-of-the-comma-separated-list-in-the-definition-of-the-pfcg-mapping--plus-the-output-field-out--which-is-not-visible-in-the-pfcg-mapping---define-pfcg--mapping-mapping---between-----mapping--field--definition-------and-auth---------using-mapping--value--definition-----in--1---f2------in--2---f3----continue--abap-cds---define-pfcg--mapping--pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----------abencds-f1-dcl-pm-annotations-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--annot--syntax------[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-dcl-pm-mapping-spcl-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--these-language-elements-should-be-used-only-by-specialists-with-in-depth-knowledge-of-the-corresponding-environment---syntax-------pfcg--mapping--field--definition------effect--specifies-the-pfcg-mapping-field-definition-in-the-statement--define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm-----used-to-define-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry----currently--a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---containing-the-following--framework-specific-annotation--javascript-call-link---abencds-annotations-frmwrk-htm-----can-be-specified-for-the-pfcg-mapping-field-definition---ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\)) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

Note

The actual output fields of a PFCG mapping cannot be viewed directly in the definition of the mapping or in any CDS role that uses the mapping. They are defined in pfcg\_mapping\_field\_definition and are mapped to input fields pfcg\_mapping\_value\_definition, which are themselves associated with authorization fields.

Example

The following abstract example shows the definition of a PFCG mapping mapping based on a PFCG mapping field definition mapping\_field\_definition and a PFCG mapping value definition mapping\_field\_definition. The PFCG mapping value definition has the input fields IN\_1 and IN\_2 used as the left sides of the comma-separated list in the definition of the PFCG mapping, plus the output field out, which is not visible in the PFCG mapping.

DEFINE PFCG\_MAPPING mapping
  BETWEEN
    mapping\_field\_definition
      AND auth
        USING mapping\_value\_definition
  { IN\_1 = F2,
    IN\_2 = F3 }

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, literal_condition

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))*\]* }

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-ap-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-cds-access-policy--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping---between--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm---------and-auth--object-------using-pfcg--mapping--value--definition-----input1---auth--field1----------input2---auth--field2-------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-pfcg-mapping-definition--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-output-fields-of-the-mapping--currently-only-a-special-cds-entity-can-be-specified-here-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-pfcg-mapping-value-definition-pfcg--mapping--value--definition-specified-after-the-keyword-using-that-creates-the-relationship-between-the---input-fields-and-output-fields-defined-using-pfcg--mapping--field--definition--this-is-a-suitable-type-of-cds-entity-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input-of-the-mapping-with-authorization-fields-auth--field-of-the-authorization-object-auth--object---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object-and-is-transformed-to-specific-access-conditions-when-the-condition-is-evaluated---note--the-actual-output-fields-of-a-pfcg-mapping-cannot-be-viewed-directly-in-the-definition-of-the-mapping-or-in-any-cds-role-that-uses-the-mapping--they-are-defined-in-pfcg--mapping--field--definition-and-are-mapped-to-input-fields-pfcg--mapping--value--definition--which-are-themselves-associated-with-authorization-fields---example--the-following-abstract-example-shows-the-definition-of-a-pfcg-mapping-mapping-based-on-a-pfcg-mapping-field-definition-mapping--field--definition-and-a-pfcg-mapping-value-definition-mapping--field--definition--the-pfcg-mapping-value-definition-has-the-input-fields-in--1-and-in--2-used-as-the-left-sides-of-the-comma-separated-list-in-the-definition-of-the-pfcg-mapping--plus-the-output-field-out--which-is-not-visible-in-the-pfcg-mapping---define-pfcg--mapping-mapping---between-----mapping--field--definition-------and-auth---------using-mapping--value--definition-----in--1---f2------in--2---f3----continue--abap-cds---define-pfcg--mapping--pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----------abencds-f1-dcl-pm-annotations-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--annot--syntax------[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-dcl-pm-mapping-spcl-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--these-language-elements-should-be-used-only-by-specialists-with-in-depth-knowledge-of-the-corresponding-environment---syntax-------pfcg--mapping--field--definition------effect--specifies-the-pfcg-mapping-field-definition-in-the-statement--define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm-----used-to-define-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry----currently--a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---containing-the-following--framework-specific-annotation--javascript-call-link---abencds-annotations-frmwrk-htm-----can-be-specified-for-the-pfcg-mapping-field-definition---ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\)) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

Note

The actual output fields of a PFCG mapping cannot be viewed directly in the definition of the mapping or in any CDS role that uses the mapping. They are defined in pfcg\_mapping\_field\_definition and are mapped to input fields pfcg\_mapping\_value\_definition, which are themselves associated with authorization fields.

Example

The following abstract example shows the definition of a PFCG mapping mapping based on a PFCG mapping field definition mapping\_field\_definition and a PFCG mapping value definition mapping\_field\_definition. The PFCG mapping value definition has the input fields IN\_1 and IN\_2 used as the left sides of the comma-separated list in the definition of the PFCG mapping, plus the output field out, which is not visible in the PFCG mapping.

DEFINE PFCG\_MAPPING mapping
  BETWEEN
    mapping\_field\_definition
      AND auth
        USING mapping\_value\_definition
  { IN\_1 = F2,
    IN\_2 = F3 }

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, pfcg_condition

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))*\]* }

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-ap-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-cds-access-policy--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping---between--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm---------and-auth--object-------using-pfcg--mapping--value--definition-----input1---auth--field1----------input2---auth--field2-------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-pfcg-mapping-definition--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-output-fields-of-the-mapping--currently-only-a-special-cds-entity-can-be-specified-here-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-pfcg-mapping-value-definition-pfcg--mapping--value--definition-specified-after-the-keyword-using-that-creates-the-relationship-between-the---input-fields-and-output-fields-defined-using-pfcg--mapping--field--definition--this-is-a-suitable-type-of-cds-entity-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input-of-the-mapping-with-authorization-fields-auth--field-of-the-authorization-object-auth--object---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object-and-is-transformed-to-specific-access-conditions-when-the-condition-is-evaluated---note--the-actual-output-fields-of-a-pfcg-mapping-cannot-be-viewed-directly-in-the-definition-of-the-mapping-or-in-any-cds-role-that-uses-the-mapping--they-are-defined-in-pfcg--mapping--field--definition-and-are-mapped-to-input-fields-pfcg--mapping--value--definition--which-are-themselves-associated-with-authorization-fields---example--the-following-abstract-example-shows-the-definition-of-a-pfcg-mapping-mapping-based-on-a-pfcg-mapping-field-definition-mapping--field--definition-and-a-pfcg-mapping-value-definition-mapping--field--definition--the-pfcg-mapping-value-definition-has-the-input-fields-in--1-and-in--2-used-as-the-left-sides-of-the-comma-separated-list-in-the-definition-of-the-pfcg-mapping--plus-the-output-field-out--which-is-not-visible-in-the-pfcg-mapping---define-pfcg--mapping-mapping---between-----mapping--field--definition-------and-auth---------using-mapping--value--definition-----in--1---f2------in--2---f3----continue--abap-cds---define-pfcg--mapping--pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----------abencds-f1-dcl-pm-annotations-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--annot--syntax------[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-dcl-pm-mapping-spcl-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--these-language-elements-should-be-used-only-by-specialists-with-in-depth-knowledge-of-the-corresponding-environment---syntax-------pfcg--mapping--field--definition------effect--specifies-the-pfcg-mapping-field-definition-in-the-statement--define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm-----used-to-define-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry----currently--a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---containing-the-following--framework-specific-annotation--javascript-call-link---abencds-annotations-frmwrk-htm-----can-be-specified-for-the-pfcg-mapping-field-definition---ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\)) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

Note

The actual output fields of a PFCG mapping cannot be viewed directly in the definition of the mapping or in any CDS role that uses the mapping. They are defined in pfcg\_mapping\_field\_definition and are mapped to input fields pfcg\_mapping\_value\_definition, which are themselves associated with authorization fields.

Example

The following abstract example shows the definition of a PFCG mapping mapping based on a PFCG mapping field definition mapping\_field\_definition and a PFCG mapping value definition mapping\_field\_definition. The PFCG mapping value definition has the input fields IN\_1 and IN\_2 used as the left sides of the comma-separated list in the definition of the PFCG mapping, plus the output field out, which is not visible in the PFCG mapping.

DEFINE PFCG\_MAPPING mapping
  BETWEEN
    mapping\_field\_definition
      AND auth
        USING mapping\_value\_definition
  { IN\_1 = F2,
    IN\_2 = F3 }

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

**Files**: 6 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  *\[* [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))*\]* }

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

Currently, an access policy can contain precisely one definition of a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") with the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)). This definition must have the same name as the access policy.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-ap-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-cds-access-policy--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping---between--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm---------and-auth--object-------using-pfcg--mapping--value--definition-----input1---auth--field1----------input2---auth--field2-------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-pfcg-mapping-definition--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-output-fields-of-the-mapping--currently-only-a-special-cds-entity-can-be-specified-here-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-pfcg-mapping-value-definition-pfcg--mapping--value--definition-specified-after-the-keyword-using-that-creates-the-relationship-between-the---input-fields-and-output-fields-defined-using-pfcg--mapping--field--definition--this-is-a-suitable-type-of-cds-entity-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input-of-the-mapping-with-authorization-fields-auth--field-of-the-authorization-object-auth--object---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object-and-is-transformed-to-specific-access-conditions-when-the-condition-is-evaluated---note--the-actual-output-fields-of-a-pfcg-mapping-cannot-be-viewed-directly-in-the-definition-of-the-mapping-or-in-any-cds-role-that-uses-the-mapping--they-are-defined-in-pfcg--mapping--field--definition-and-are-mapped-to-input-fields-pfcg--mapping--value--definition--which-are-themselves-associated-with-authorization-fields---example--the-following-abstract-example-shows-the-definition-of-a-pfcg-mapping-mapping-based-on-a-pfcg-mapping-field-definition-mapping--field--definition-and-a-pfcg-mapping-value-definition-mapping--field--definition--the-pfcg-mapping-value-definition-has-the-input-fields-in--1-and-in--2-used-as-the-left-sides-of-the-comma-separated-list-in-the-definition-of-the-pfcg-mapping--plus-the-output-field-out--which-is-not-visible-in-the-pfcg-mapping---define-pfcg--mapping-mapping---between-----mapping--field--definition-------and-auth---------using-mapping--value--definition-----in--1---f2------in--2---f3----continue--abap-cds---define-pfcg--mapping--pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--javascript-call-link---abencds-f1-dcl-pm-mapping-spcl-htm-----------abencds-f1-dcl-pm-annotations-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--annot--syntax------[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-dcl-pm-mapping-spcl-htm-------------as-abap-release-753---copyright-2019-sap-ag--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm---------abap-cds---define-pfcg--mapping--pfcg--mapping--field--definition--these-language-elements-should-be-used-only-by-specialists-with-in-depth-knowledge-of-the-corresponding-environment---syntax-------pfcg--mapping--field--definition------effect--specifies-the-pfcg-mapping-field-definition-in-the-statement--define-pfcg--mapping--javascript-call-link---abencds-f1-define-pfcg-mapping-htm-----used-to-define-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry----currently--a--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---containing-the-following--framework-specific-annotation--javascript-call-link---abencds-annotations-frmwrk-htm-----can-be-specified-for-the-pfcg-mapping-field-definition---ObjectModel.dataCategory:#HIERARCHY

CDS entities of this type provide a view of a hierarchy and are known as CDS hierarchy views. The following applies when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping:

-   The input fields of the PFCG mapping must be elements of the CDS hierarchy view.

-   Multiple hierarchies can be defined in a single CDS hierarchy view. Those input fields of a PFCG mapping that specify a unique hierarchy in this case are known as hierarchy key fields. A CDS hierarchy view that defines only one hierarchy does not have any hierarchy key fields. The following applies to any hierarchy key fields:

-   All hierarchy key fields must be used in the PFCG mapping.

-   A hierarchy key field can only be assigned those authorization fields of the authorization object that contain single values. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). If this condition is not met, the PFCG mapping produces the value "false" in the PFCG condition when evaluated.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists (an authorization with the value "\*" for the assigned authorization field of the authorization object) for all input fields of the PFCG mapping, the PFCG mapping returns the value "true" in the PFCG condition when evaluated. This enables entries to be read that are not part of any hierarchy.

-   When CDS elements are [assigned](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to the PFCG mapping in a PFCG condition, the first element in the curly brackets specifies the CDS element on which the hierarchy is defined. This element has the annotation @ObjectModel.foreignKey.association in the CDS hierarchy view and in the target of the association it has the annotations @ObjectModel.representativeKey and @ObjectModel.Hierarchy.association.The latter has the CDS hierarchy view as a value. Any further fields can be specified in any order in the curly brackets.

Notes

-   Framework-specific knowledge is required when using a CDS hierarchy view as a PFCG mapping field definition in a PFCG mapping and this knowledge is not part of the DCL documentation in ABAP CDS. More information can be found, for example, in the framework-specific documentation of the annotation @ObjectModel.dataCategory:#HIERARCHY.

-   A field of a CDS hierarchy view is a hierarchy key field when it occurs in the ON condition of the association specified in the annotation @Hierarchy.parentChild.directory and is not defined as a date field in the target of the association using @Semantics.businessDate.

Example

A CDS entity has an element called "Cost Center". The PFCG authorizations of the users are defined on the "Controlling Area" level. These are not elements in the CDS entity, but a hierarchy exists in which the assignment of "Cost Centers” to "Controlling Areas” is defined. This assignment can be complex and can vary over time. To check the authorizations, a CDS hierarchy view that expresses this assignment can be used as a PFCG mapping field definition in a PFCG mapping for a CDS role of the CDS entity


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping
  BETWEEN [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))
    AND auth\_object
      USING pfcg\_mapping\_value\_definition
  { input1 = auth\_field1*\[*,
    input2 = auth\_field2 ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A PFCG mapping definition [pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\)) specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the output fields of the mapping. Currently only a special CDS entity can be specified here.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A PFCG mapping value definition pfcg\_mapping\_value\_definition specified after the keyword USING that creates the relationship between the , input fields and output fields defined using pfcg\_mapping\_field\_definition. This is a suitable type of CDS entity.

-   A comma-separated unordered list in curly brackets that associates the input fields input of the mapping with authorization fields auth\_field of the authorization object auth\_object.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object and is transformed to specific access conditions when the condition is evaluated.

Note

The actual output fields of a PFCG mapping cannot be viewed directly in the definition of the mapping or in any CDS role that uses the mapping. They are defined in pfcg\_mapping\_field\_definition and are mapped to input fields pfcg\_mapping\_value\_definition, which are themselves associated with authorization fields.

Example

The following abstract example shows the definition of a PFCG mapping mapping based on a PFCG mapping field definition mapping\_field\_definition and a PFCG mapping value definition mapping\_field\_definition. The PFCG mapping value definition has the input fields IN\_1 and IN\_2 used as the left sides of the comma-separated list in the definition of the PFCG mapping, plus the output field out, which is not visible in the PFCG mapping.

DEFINE PFCG\_MAPPING mapping
  BETWEEN
    mapping\_field\_definition
      AND auth
        USING mapping\_value\_definition
  { IN\_1 = F2,
    IN\_2 = F3 }

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_field\_definition](javascript:call_link\('abencds_f1_dcl_pm_mapping_spcl.htm'\))


---
