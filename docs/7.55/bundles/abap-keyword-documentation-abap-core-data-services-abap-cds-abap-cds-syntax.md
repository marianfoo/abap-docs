# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") and [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept.

-   [General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))

-   [Language Elements](javascript:call_link\('abencds_language_elements.htm'\))

Continue
[ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))
[ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\))


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

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

-   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the DDIC database table TRESE.

Hints

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.

-   In [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [CDS data definitions](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") and [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") for [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.

-   MYVIEW, myview, and myView all identify the same operand.

-   0.5 is a valid numeric literal, but .5 is not.


### abencds_language_elements.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), arranged by topics.

-   [DDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_1)

-   [CDS Annotation Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)

-   [CDS Views](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_3)

-   [CDS View Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)

-   [CDS Table Functions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_5)

-   [CDS Hierarchies](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)

-   [CDS Custom Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_7)

-   [CDS Abstract Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)

-   [CDS Metadata Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_9)

-   [DCL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)

-   [CDS Roles](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_11)

-   [CDS access policy](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_12)

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

[DEFINE VIEW ...](javascript:call_link\('abencds_define_view_v1.htm'\))[AS](javascript:call_link\('abencds_define_view_v1.htm'\))

Defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[DEFINE VIEW ENTITY...AS](javascript:call_link\('abencds_define_view_entity.htm'\))

Defines a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")

[DEFINE VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry")

[ROOT](javascript:call_link\('abencds_define_root_view_v1.htm'\))

Defines a CDS view as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")

[WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v1.htm'\))

Defines input parameters of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](javascript:call_link\('abencds_select_statement_v1.htm'\))

SELECT statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[INNER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v1.htm'\))

Inner join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[LEFT*|*RIGHT OUTER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v1.htm'\))

Outer join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_association_v1.htm'\))

Defines a CDS association for a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[WITH DEFAULT FILTER](javascript:call_link\('abencds_association_v1.htm'\))

Specifies a default filter condition of a CDS association

[1:](javascript:call_link\('abencds_path_expr_card_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

[INNER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

[LEFT OUTER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

[COMPOSITION ... OF](javascript:call_link\('abencds_composition_v1.htm'\))

Defines a CDS composition

[ASSOCIATION TO PARENT ... AS ... ON](javascript:call_link\('abencds_to_parent_assoc_v1.htm'\))

Defines a CDS to-parent association

[KEY ... AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Element of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\))

[$EXTENSION.\*](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Elements of an extension in a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\))

[WHERE ...](javascript:call_link\('abencds_where_clause_v1.htm'\))

WHERE clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[GROUP BY ...](javascript:call_link\('abencds_group_by_v1.htm'\))

GROUP-BY clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[HAVING ...](javascript:call_link\('abencds_having_clause_v1.htm'\))

HAVING clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[UNION ALL ...](javascript:call_link\('abencds_union_v1.htm'\))

UNION clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a CDS projection view

[VIRTUAL](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines a new element of a CDS projection view

[LOCALIZED](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of a text association

[REDIRECTED TO](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines the redirect of a CDS association

[REDIRECTED TO COMPOSITION CHILD](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))

Defines the redirect of a CDS composition

[REDIRECTED TO PARENT](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))

Defines the redirect of a CDS to-parent association

Expressions

Operators

Meaning

[MAX](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [MIN](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [AVG *\[*AS dtype*\]*](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [SUM](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), [COUNT](javascript:call_link\('abencds_aggregate_functions_v1.htm'\))

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[+](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)), [\-](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)), [\*](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)), [/](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

Arithmetic expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[CASE](javascript:call_link\('abencds_case_expression_v1.htm'\)), [WHEN](javascript:call_link\('abencds_case_expression_v1.htm'\)), [THEN](javascript:call_link\('abencds_case_expression_v1.htm'\)), [ELSE](javascript:call_link\('abencds_case_expression_v1.htm'\)), [END](javascript:call_link\('abencds_case_expression_v1.htm'\))

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\))

Cast expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[\=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<>](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [\>](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [<=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [\>=](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v1.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v1.htm'\)), [NOT](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [AND](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [OR](javascript:call_link\('abencds_conditional_expression_v1.htm'\))

Relational expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

Built-In Functions

Function

Meaning

[ABS](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [CEIL](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [DIV](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [DIVISION](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [FLOOR](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [MOD](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [ROUND](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[CONCAT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [INSTR](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LEFT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LENGTH](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LPAD](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LOWER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [LTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [REPLACE](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RIGHT](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RPAD](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [RTRIM](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [SUBSTRING](javascript:call_link\('abencds_sql_functions_character_v1.htm'\)), [UPPER](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[BINTOHEX](javascript:call_link\('abencds_conv_func_types_v1.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

Byte string function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[COALESCE](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v1.htm'\)), [UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\)), [DECIMAL\_SHIFT](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[DATS\_IS\_VALID](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v1.htm'\)), [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v1.htm'\))

Date function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[TIMS\_IS\_VALID](javascript:call_link\('abencds_time_functions_v1.htm'\))

Time function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[TSTMP\_IS\_VALID](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v1.htm'\)), [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

Time stamp function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v1.htm'\))

Time zone functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

[TSTMP\_TO\_DATS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)), [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

Date/time conversions functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\))

CDS View Extensions

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ...](javascript:call_link\('abencds_extend_view.htm'\))[WITH](javascript:call_link\('abencds_f1_extend_view.htm'\))

Extends a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")

[EXTEND VIEW ENTITY...WITH](javascript:call_link\('abencds_extend_view_entity.htm'\))

Extends a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")

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

CDS Custom Entities

Keywords and Additions

Language Element

Meaning

[DEFINE CUSTOM ENTITY ...](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))

Defines a CDS custom entity

[ROOT](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))

Defines a CDS custom entity as a root entity

[WITH PARAMETERS](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))

Defines input parameters of a CDS custom entity

[ASSOCIATION ... TO ...](javascript:call_link\('abencds_f1_custom_association.htm'\))[ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Defines a CDS association in the [element list](javascript:call_link\('abencds_f1_custom_element.htm'\)) of a CDS custom entity.

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_custom_association.htm'\))

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](javascript:call_link\('abencds_f1_custom_composition.htm'\))

Defines a CDS composition in the element list of a CDS custom entity

[ASSOCIATION TO PARENT ... ON](javascript:call_link\('abencds_f1_custom_tp_association.htm'\))

Defines a CDS to-parent association in the element list of a CDS custom entity

CDS Abstract Entities

Keywords and Additions

Language Element

Meaning

[DEFINE ABSTRACT ENTITY ...](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")

[ROOT](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

Defines a CDS abstract entity as a root entity

[WITH PARAMETERS](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\))

Defines input parameters of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

[ASSOCIATION ... TO ... ON](javascript:call_link\('abencds_f1_absent_association.htm'\))

Defines a CDS association in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")

[WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_absent_association.htm'\))

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](javascript:call_link\('abencds_absent_composition.htm'\))

Defines a CDS composition in the element list of a CDS abstract entity

[ASSOCIATION TO PARENT ... ON](javascript:call_link\('abencds_absent_to_parent_assoc.htm'\))

Defines a CDS to-parent association in the element list of a CDS abstract entity

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

[COMBINATION MODE OR*|*AND](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

Specifies multiple access rules for the same CDS entity

[REDEFINITION](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))

Specifies the only existing access rule for the CDS entity

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

[BYPASS WHEN](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))

Specifies the condition for authorization filtering

[IN SCENARIO](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))

Specifies the switchable authorization check

[INHERIT CONDITIONS FROM ENTITY](javascript:call_link\('abencds_f1_cond_inherit.htm'\))

Defines an inheritance condition of a CDS role

[INHERIT CONDITIONS FROM SUPER](javascript:call_link\('abencds_f1_cond_inherit.htm'\))

Defines an inheritance condition of a CDS role

CDS access policy

Keywords and Additions

Language Element

Meaning

[DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry")

[DEFINE PFCG\_MAPPING ... BETWEEN ... AND ... USING ...](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in an access policy

[DEFINE ASPECT ... AS SELECT FROM ... WITH USER ELEMENT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines a self-defined aspect as part of a CDS access policy
