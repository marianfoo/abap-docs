# ABAP CDS - Complete Reference (7.54)

**Generated**: 2025-09-01T11:14:58.226Z
**Bundles Combined**: 24
**Category**: cds

---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") and [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept.

-   [General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))

-   [Language Elements](javascript:call_link\('abencds_language_elements.htm'\))

Continue
[ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))
[ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\))


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") for defining [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.

-   A name must contain at least 2 characters but no more than 30 characters.

-   A name can consist of letters, numbers, underscores (\_), and slashes (/).

-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

Defines a CDS association for a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\))

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_association.htm'\))

Specifies a default filter condition of a CDS association

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

Built-In Functions

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

[WITH PARAMETERS](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\))

Defines input parameters of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[AS PARENT CHILD HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") using parent-child relationships

[SOURCE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the data source of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[CHILD TO PARENT ASSOCIATION](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[PERIOD FROM ... TO ... VALID FROM ... TO ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines a [temporal hierarchy](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry")

[DIRECTORY ... FILTER BY ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies a condition for the source of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[START WHERE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the start condition of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[SIBLINGS ORDER BY ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Specifies the sort order of [sibling nodes](javascript:call_link\('abensibling_node_glosry.htm'\) "Glossary Entry") in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[DEPTH ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Delimits the [hierarchy levels](javascript:call_link\('abenhierarchy_level_glosry.htm'\) "Glossary Entry") of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[NODETYPE ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines an element as a node type for a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[MULTIPLE PARENTS ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if multiple [parent nodes](javascript:call_link\('abenparent_node_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[ORPHANS ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if [orphan nodes](javascript:call_link\('abenorphan_node_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[CYCLES ...](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Defines the behavior that applies if [node cycles](javascript:call_link\('abennode_cycle_glosry.htm'\) "Glossary Entry") are specified in a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

[GENERATE SPANTREE](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

Reduces a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") to a tree

Abstract CDS Entities

Keywords and Additions

Language Element

Meaning

[DEFINE ABSTRACT ENTITY ...](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

[WITH PARAMETERS](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\))

Defines input parameters of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

[ASSOCIATION ... TO ... ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Publishes a CDS association in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_absent_association.htm'\))

Specifies a default filter condition of a CDS association

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
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
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
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

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

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

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

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

Obsolete: Replaced by Consumption.dbHints\[ \]

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

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

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

Texts, implicit annotation for data element header

 

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

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Annotation Syntax

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
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
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
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

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

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

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

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

Obsolete: Replaced by Consumption.dbHints\[ \]

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

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

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

Texts, implicit annotation for data element header

 

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

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS Metadata Extensions

**Files**: 10 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
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
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
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

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

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

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

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

Obsolete: Replaced by Consumption.dbHints\[ \]

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

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

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

Texts, implicit annotation for data element header

 

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

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Evaluation of Annotations

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
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
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
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

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

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

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

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

Obsolete: Replaced by Consumption.dbHints\[ \]

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

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

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

Texts, implicit annotation for data element header

 

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

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

Included pages: 3


### abencds_annotations_abap.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [ObjectModel-Annotations](#abencds-annotations-abap-ddla-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_DDLA_16)

-   [Semantics-Annotations](#abencds-annotations-abap-ddla-17---note--see-also--abap-annotation-syntax--javascript-call-link---abencds-annotations-abap-tables-htm-------abapannotation-annotations--Scope: \[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
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
   @API.state: \[#RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM, #RELEASED\_FOR\_KEY\_USER\_APPS\]    
   sqlViewName : String(16);
   @CompatibilityContract.c1: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
       }
   }
   @CompatibilityContract.c2: {
       usageAllowed: true,
       allowedChanges: {
           annotation: \[#ADD\],
           value: \[#FALSE\_TO\_TRUE\]
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
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      @AbapAnnotation.definitionHidden: true
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
      @API.state: \[#NOT\_RELEASED\]        
      caseJoin : Boolean default true;
   };
   @AbapAnnotation.definitionHidden: true
   @CompatibilityContract.c1.usageAllowed: false
   @API.state: \[#NOT\_RELEASED\]
   internal
   {  
      @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
      isMandt : Boolean default true;
      @Scope: \[[#VIEW](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), [#EXTEND\_VIEW](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))\]
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

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

API-Annotations

define annotation API
{
  @Scope:\[[#ANNOTATION](javascript:call_link\('abencds_f1_define_anno_annos.htm'\))\]
  state: array of String(40) enum {
    NOT\_RELEASED;
    RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM;
    RELEASED\_FOR\_KEY\_USER\_APPS;
  };
  @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
  @CompatibilityContract.c1.usageAllowed: true
  @CompatibilityContract.c2.usageAllowed: false
  element {    
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    releaseState: String(30) enum {DEPRECATED;};
    @CompatibilityContract.c1.allowedChanges: {annotation: \[#CUSTOM\], value: \[#CUSTOM\]}
    successor: ElementRef;
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

ObjectModel-Annotations

See [Framework Specific Annotation Definitions](javascript:call_link\('abencds_annotations_frmwrk_ddla.htm'\)).

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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]        
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
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
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]          
   currencyCode        : Boolean default true;
   @Scope:\[[#ELEMENT](javascript:call_link\('abencds_f1_element_annotation.htm'\))\]
   @CompatibilityContract: {
   c1: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] },    
   c2: { usageAllowed: true,
         allowedChanges.annotation: \[ #NONE \],
         allowedChanges.value: \[ #NONE \] } }      
   @API.state: \[ #RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM \]      
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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - ABAP Annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) → 

ABAP CDS - ABAP Annotation Syntax

The following tables summarize the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry") of all [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](javascript:call_link\('abencds_annotations_syntax_name.htm'\)). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry"). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The API column indicates whether the annotation can be used in CDS entities defined in [ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). The detailed meanings of each ABAP annotation is documented for the corresponding [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) in this documentation.

-   [AbapAnnotation-Annotations](#abencds-annotations-abap-tables-1--------abapcatalog-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_2)

-   [AccessControl-Annotations](#abencds-annotations-abap-tables-3--------api-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_4)

-   [ClientDependent-Annotations](#abencds-annotations-abap-tables-5--------clienthandling-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_6)

-   [CompatibilityContract-Annotations](#abencds-annotations-abap-tables-7--------dataaging-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_8)

-   [EndUserText-Annotations](#abencds-annotations-abap-tables-9--------environment-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_10)

-   [LanguageDependency-Annotations](#abencds-annotations-abap-tables-11--------mappingrole-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_12)

-   [Metadata-Annotations](#abencds-annotations-abap-tables-13--------metadataextension-annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_14)

-   [ObjectModel-Annotations](#abencds-annotations-abap-tables-15--------scope------annotations---@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_16)

-   [Semantics-Annotations](#@@ITOC@@ABENCDS_ANNOTATIONS_ABAP_TABLES_17)

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

Obsolete: Replaced by Consumption.dbHintsCalculatedBy

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

Obsolete: Replaced by Consumption.dbHints\[ \]

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

RELEASED\_FOR\_KEY\_USER\_APPSRELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

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

API.element.releaseState

Element annotation, release element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

String(30)

#DEPRECATED

\-

\-

\-

\-

API.element.successor

Element annotation, successor of rejected element

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

\-

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

Texts, implicit annotation for data element header

 

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

ObjectModel-Annotations

Annotation

Meaning

Scope

Typ

Enums

Default

Text

MDE

API

ObjectModel.usageType.dataClass

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#CUSTOMIZING
#MASTER
#META
#MIXED
#ORGANIZATIONAL
#TRANSACTIONAL

#MIXED

\-

\-

\-

ObjectModel.usageType.serviceQuality

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(30)

#A
#B
#C
#D
#P
#X

#X

\-

\-

\-

ObjectModel.usageType.sizeCategory

undocumented

[Table Function](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[View](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))

String(3)

#L
#M
#S
#XL
#XXL

#S

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

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.currencyCode

Currency key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.quantity.unitOfMeasure

Quantity field

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

ElementRef

\-

\-

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM

Semantics.unitOfMeasure

Unit key

[Element](javascript:call_link\('abencds_f1_element_annotation.htm'\))

Boolean

\-

true

\-

\-

RELEASED\_FOR\_SAP\_CLOUD\_PLATFORM


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Views / ABAP CDS - Client Handling in CDS Views

**Files**: 4 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Hierarchies

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, clauses

**Files**: 5 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE HIERARCHY / ABAP CDS - DEFINE HIERARCHY, element_list

**Files**: 4 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

-   [Parameter list](javascript:call_link\('abencds_f1_hiera_parameter_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

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

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possible only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of one of the following:

-   [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [A CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_dcl_pm_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)) *|* [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) *|* \= [Literal](javascript:call_link\('abencds_f1_literal.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, literal_condition

**Files**: 2 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_dcl_pm_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)) *|* [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) *|* \= [Literal](javascript:call_link\('abencds_f1_literal.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition / ABAP CDS - DEFINE ROLE, pfcg_condition

**Files**: 3 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_dcl_pm_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)) *|* [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) *|* \= [Literal](javascript:call_link\('abencds_f1_literal.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---


## ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

**Files**: 6 | **Difficulty**: advanced

# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ACCESSPOLICY

Included pages: 6


### abencds_f1_define_accesspolicy.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY

Syntax

*\[*[@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))*\]*
*\[*DEFINE*\]* ACCESSPOLICY access\_policy {
  [pfcg\_mapping\_definition](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) *|* generic\_aspect\_definition
}

Effect

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") access\_policy in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") to be used as a framework for further definitions.

An ACCESSPOLICY contains the definition of one of the following objects (which must have the same name as the access policy):

-   A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

-   A generic aspect DEFINE GENERIC\_ASPECT.

DEFINE ACCESSPOLICY can be used to specify the optional annotation [@access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) in front of the actual definition of the access policy.

Notes

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS access policy.

-   The [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a CDS access policy must have the same name as this policy.

Continue
[ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\))
[ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ASPECT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))


### abencds_f1_dcl_ap_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ACCESSPOLICY, access\_policy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an access policy annotation in the definition of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the CDS role.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS access policy

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages.


### abencds_f1_define_pfcg_mapping.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING

Syntax

*\[*[pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))*\]*
*\[*DEFINE*\]* PFCG\_MAPPING pfcg\_mapping(output1*\[*, output2 ...*\]*)
  BETWEEN mapping\_entity AND auth\_object *\[*IN SCENARIO scenario\_name*\]*
  { input1 = auth\_field1 *\[*CONSTRAINT ID*\]**\[*,
    input2 = auth\_field2 *\[*CONSTRAINT ID*\]* ... *\]* }

Effect

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the PFCG mapping must match the name of the CDS access policy.

The definition of a PCFG mapping contains the following:

-   A comma-separated list after the name pfcg\_mapping in which the output fields of the PFCG mapping are defined. These fields must be elements of the CDS entity mapping\_entity specified after BETWEEN. The specified order applies.

-   A CDS entity mapping\_entity specified after the keyword BETWEEN to define the fields used in the mapping. This definition specifies the input and output fields of the mapping.

-   An [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object specified after the keyword AND. The PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in precisely those [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in which this authorization object is specified after ASPECT pfcg\_auth.

-   A comma-separated unordered list in curly brackets that associates the input fields input1, input2, ... of the mapping with [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") auth\_field of the authorization object auth\_object.

-   The input fields on the left sides must be elements of the CDS entity mapping\_entity specified after BETWEEN.

-   Authorization fields of the authorization object auth\_object must be specified on the right sides.

-   Any number of optional assignments can be flagged using the addition CONSTRAINT ID.

A PFCG mapping can be [used](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) in a [PFCG](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) condition of the same authorization object. It is transformed to specific access conditions as follows when the condition is evaluated:

-   The values of the current user for the authorization fields assigned to the input fields fill the input fields of the mapping.

-   The output fields of the mapping are assigned to the elements within the [curly brackets](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) of the PFCG condition in the specified order.

-   The following applies to the input fields flagged with CONSTRAINT ID:

-   Only those authorization fields of the authorization object can be assigned that contain a single value in a specific authorization. Multiple values or patterns are not allowed (with the exception of full authorization using the value "\*"). Otherwise the PFCG mapping in the PFCG condition returns the value "false" for the authorization in question.

-   Full authorization can be assigned only when applied to all input fields of the PFCG mapping.

-   If full authorization exists for all input fields of the PFCG mapping (value "\*"), the PFCG mapping in the PFCG condition returns the value "true" when evaluated. This makes it possible to read entries of the protected entity for which there are no output fields in the mapping.

Addition

... IN SCENARIO

To use a PFCG mapping in a PFCG condition where the authorization object is subject to the switchable authorization check, the PFCG mapping must also name the same scenario (as well as the same authorization object). For more information, see the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) of the statement DEFINE ROLE.

Note

In ABAP SQL access to a CDS entity assigned a role of this type, PFCG mappings are defined internally using a subquery after EXISTS. This can be seen in an [SQL trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry").

Example

The following example shows the definition of a PFCG mapping demo\_cds\_auth\_pfcg\_mapping based on the CDS entity demo\_cds\_mapping\_entity below. The output fields of the PFCG mapping are the authorization fields OBJECT, OBJ\_NAME, and DEVCLASS of the authorization object S\_DEVELOP. The input fields of the PFCG mapping are the elements of the CDS entity to which the output fields are assigned. The [example](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) that demonstrates how a PFCG mapping is specified in a role shows how the mapping is used.

-   PFCG Mapping

define accesspolicy demo\_cds\_pfcg\_mapping  {
  define pfcg\_mapping demo\_cds\_pfcg\_mapping( map\_object,  
                                             map\_obj\_name,  
                                             map\_devclass )
    between demo\_cds\_mapping\_entity
      and S\_DEVELOP
      { map\_devclass = devclass,
        map\_object   = objtype,
        map\_obj\_name = objname } }

-   CDS Entity

@AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_dcl_pm_annotations.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) →  [ABAP CDS - DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) → 

ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a PFCG mapping annotation in front of the statement [PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in the definition of a [CDS PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry"). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ROLE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings. No other annotations can be specified.

-   [EndUserText Annotations](#abencds-f1-dcl-pm-annotations-1---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---endusertext-annotations--translatable-texts-of-the-cds-role---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--endusertext-label--translatable-short-text-of-the-pfcg-mapping--character-string-with-maximum-60-characters----------note--abap-annotations-introduced-using-endusertext-are-used-to-define-translatable-semantic-texts-for-a--cds-object--javascript-call-link---abencds-object-glosry-htm-----glossary-entry----the-value-of-an-annotation-like-this-is-saved-in-special-tables-that-have-a-language-key-and-that-are-translatable--the-value-specified-in-the-source-code-should-consist-of-text-in-the-original-language-of-the-cds-source-code-and-is-translated-into-the-required-languages--------abencds-f1-define-pfcg-mapping-htm-------------as-abap-release-754---copyright-2019-sap-se--all-rights-reserved----abap-keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---access-control--javascript-call-link---abencds-authorizations-htm---------abap-cds---dcl-statements--javascript-call-link---abencds-f1-dcl-syntax-htm---------abap-cds---define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm---------abap-cds---define-pfcg--mapping--syntax-------pfcg--mapping--annot--javascript-call-link---abencds-f1-dcl-pm-annotations-htm-------------define-----pfcg--mapping-pfcg--mapping-output1------output2------------between-mapping--entity-and-auth--object-----in-scenario-scenario--name---------input1---auth--field1-----constraint-id--------------input2---auth--field2-----constraint-id-----------------effect--defines-a--pfcg-mapping--javascript-call-link---abencds-pfcg-mapping-glosry-htm-----glossary-entry---pfcg--mapping-as-part-of-a--cds-access-policy--javascript-call-link---abencds-access-policy-glosry-htm-----glossary-entry---defined-using--define-accesspolicy--javascript-call-link---abencds-f1-define-accesspolicy-htm------the-name-of-the-pfcg-mapping-must-match-the-name-of-the-cds-access-policy---the-definition-of-a-pcfg-mapping-contains-the-following-------a-comma-separated-list-after-the-name-pfcg--mapping-in-which-the-output-fields-of-the-pfcg-mapping-are-defined--these-fields-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between--the-specified-order-applies-------a-cds-entity-mapping--entity-specified-after-the-keyword-between-to-define-the-fields-used-in-the-mapping--this-definition-specifies-the-input-and-output-fields-of-the-mapping-------an--authorization-object--javascript-call-link---abenauthorization-object-glosry-htm-----glossary-entry---auth--object-specified-after-the-keyword-and--the-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-precisely-those--pfcg-conditions--javascript-call-link---abencds-f1-cond-pfcg-htm-----in-which-this-authorization-object-is-specified-after-aspect-pfcg--auth-------a-comma-separated-unordered-list-in-curly-brackets-that-associates-the-input-fields-input1--input2------of-the-mapping-with--authorization-fields--javascript-call-link---abenauthorization-field-glosry-htm-----glossary-entry---auth--field-of-the-authorization-object-auth--object-------the-input-fields-on-the-left-sides-must-be-elements-of-the-cds-entity-mapping--entity-specified-after-between-------authorization-fields-of-the-authorization-object-auth--object-must-be-specified-on-the-right-sides-------any-number-of-optional-assignments-can-be-flagged-using-the-addition-constraint-id---a-pfcg-mapping-can-be--used--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----in-a--pfcg--javascript-call-link---abencds-f1-cond-pfcg-htm-----condition-of-the-same-authorization-object--it-is-transformed-to-specific-access-conditions-as-follows-when-the-condition-is-evaluated-------the-values-of-the-current-user-for-the-authorization-fields-assigned-to-the-input-fields-fill-the-input-fields-of-the-mapping-------the-output-fields-of-the-mapping-are-assigned-to-the-elements-within-the--curly-brackets--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----of-the-pfcg-condition-in-the-specified-order-------the-following-applies-to-the-input-fields-flagged-with-constraint-id-------only-those-authorization-fields-of-the-authorization-object-can-be-assigned-that-contain-a-single-value-in-a-specific-authorization--multiple-values-or-patterns-are-not-allowed--with-the-exception-of-full-authorization-using-the-value--------otherwise-the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--false--for-the-authorization-in-question-------full-authorization-can-be-assigned-only-when-applied-to-all-input-fields-of-the-pfcg-mapping-------if-full-authorization-exists-for-all-input-fields-of-the-pfcg-mapping--value--------the-pfcg-mapping-in-the-pfcg-condition-returns-the-value--true--when-evaluated--this-makes-it-possible-to-read-entries-of-the-protected-entity-for-which-there-are-no-output-fields-in-the-mapping---addition------in-scenario--to-use-a-pfcg-mapping-in-a-pfcg-condition-where-the-authorization-object-is-subject-to-the-switchable-authorization-check--the-pfcg-mapping-must-also-name-the-same-scenario--as-well-as-the-same-authorization-object---for-more-information--see-the--pfcg-condition--javascript-call-link---abencds-f1-cond-pfcg-htm-----of-the-statement-define-role---note--in-abap-sql-access-to-a-cds-entity-assigned-a-role-of-this-type--pfcg-mappings-are-defined-internally-using-a-subquery-after-exists--this-can-be-seen-in-an--sql-trace--javascript-call-link---abensql-trace-glosry-htm-----glossary-entry-----example--the-following-example-shows-the-definition-of-a-pfcg-mapping-demo--cds--auth--pfcg--mapping-based-on-the-cds-entity-demo--cds--mapping--entity-below--the-output-fields-of-the-pfcg-mapping-are-the-authorization-fields-object--obj--name--and-devclass-of-the-authorization-object-s--develop--the-input-fields-of-the-pfcg-mapping-are-the-elements-of-the-cds-entity-to-which-the-output-fields-are-assigned--the--example--javascript-call-link---abencds-f1-cond-pfcg-mapping-htm-----that-demonstrates-how-a-pfcg-mapping-is-specified-in-a-role-shows-how-the-mapping-is-used-------pfcg-mapping--define-accesspolicy-demo--cds--pfcg--mapping------define-pfcg--mapping-demo--cds--pfcg--mapping--map--object-------------------------------------------------map--obj--name-------------------------------------------------map--devclass-------between-demo--cds--mapping--entity-------and-s--develop---------map--devclass---devclass----------map--object-----objtype----------map--obj--name---objname----------cds-entity--AbapCatalog.sqlViewName: 'DEMOCDSMAPPENT'
define view demo\_cds\_mapping\_entity
  as select from
    tadir
    {
      devclass as map\_devclass,
      object   as map\_object,
      obj\_name as map\_obj\_name
    }
    where
          devclass =    'SABAPDEMOS'
      and object   =    'PROG'
      and obj\_name like 'DEMO%'

Continue
[ABAP CDS - DEFINE PFCG\_MAPPING, pfcg\_mapping\_annot](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\))


### abencds_f1_define_generic_aspect.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)) → 

ABAP CDS - DEFINE ASPECT

Syntax

*\[*DEFINE*\]* ASPECT generic\_aspect AS SELECT FROM aspect\_entity
  WITH USER ELEMENT user\_element
{
    output1 *\[*BYPASS WHEN aspect\_bypass\_condition*\]*
    *\[*, ... *\]*
}

Effect

Defines a generic aspect generic\_aspect as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") defined using [DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\)). The name of the generic aspect must be the same as the name of the CDS access policy.

The definition of a generic aspect contains the following:

-   An aspect entity aspect\_entity, specified after the name generic\_aspect, which is used as a data source.

-   An element user\_element of the aspect entity that is used as an input field for the user name of the logged on user.

-   A comma-separated list that specifies the output fields output1, output2, ... of the generic aspect. The specified order applies.

-   Any number of output fields that can be tagged with a condition using the addition BYPASS WHEN aspect\_bypass\_condition. Typical bypass values are \* or an empty value. The following are possible as aspect bypass conditions aspect\_bypass\_condition: [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)) *|* [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) *|* \= [Literal](javascript:call_link\('abencds_f1_literal.htm'\))

At runtime, the field user\_element is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the generic aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk) can be used to indicate that any values of the protected entity are allowed.

Special Requirements in the Aspect Entity

The content of the aspect entity has a particular relevance for audits by being used in a generic aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, aspect entities do not specify their data sources and whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To highlight this requirement, however, the aspect entity must have the following annotations:

-   An auditing type with the annotation @AccessControl.auditing.type. Currently only the value #CUSTOM is possible.

-   A component with the annotation @AccessControl.auditing.specification specifying (as text) how the content of the entity is audited.
    

Notes

-   Just adding the annotations, however, does not activate auditing. It must first be ensure that auditing is actually possible.

-   Auditing must respect all data sources of the aspect entity.

-   If auditing cannot be ensured, the aspect entity cannot be used in a generic aspect.

-   In ABAP SQL access to a CDS entity assigned a role of this type, generic aspects are defined internally using a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after EXISTS. This can be seen in an SQL trace.


---
