# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry") and the [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_glosry.htm "Glossary Entry") [DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddl_glosry.htm "Glossary Entry") and [DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_glosry.htm "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_glosry.htm "Glossary Entry") concept.

-   [General Syntax Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm)

-   [Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_language_elements.htm)

Continue
[ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm)
[ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_language_elements.htm)


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_syntax.htm) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") for defining [CDS objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_object_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.

-   A name must contain at least 2 characters but no more than 30 characters.

-   A name can consist of letters, numbers, underscores (\_), and slashes (/).

-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry").

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

-   In [DDL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS data definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_definition_glosry.htm "Glossary Entry") and [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and in [DDLX source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.

-   MYVIEW, myview, and myView all identify the same operand.

-   0.5 is a valid numeric literal, but .5 is not.


### abencds_language_elements.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_syntax.htm) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry"), arranged by topics.

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

In addition to the language elements shown here, CDS source code can also contain [annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) with metadata.

DDL

CDS Annotation Definitions

Keywords and Additions

Language Element

Meaning

[define annotation ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation.htm)

Defines a [CDS annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[enum](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm)

Defines enumeration symbols of a [CDS annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[default](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm)

Defines default values of a [CDS annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[array of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_arr.htm)

Defines an [annotation arras](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_array_glosry.htm "Glossary Entry").

CDS Views

Keywords and Additions

Language Element

Meaning

[DEFINE VIEW ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)[AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)

Defines a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")

[DEFINE VIEW ENTITY...AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm)

Defines a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry")

[DEFINE VIEW ENTITY... AS PROJECTION ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm)

Defines a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry")

[ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_root_view_v1.htm)

Defines a CDS view as a [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry")

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm)

Defines input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

SELECT statement of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_joined_data_source_v1.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_joined_data_source_v1.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm)

Defines a CDS association for a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm)

Specifies a default filter condition of a CDS association

[1:](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_card_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm)

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_jointype_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm)

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_jointype_v1.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm)

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_v1.htm)

Defines a CDS composition

[ASSOCIATION TO PARENT ... AS ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_to_parent_assoc_v1.htm)

Defines a CDS to-parent association

[KEY ... AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm)

Element of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm)

[$EXTENSION.\*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm)

Elements of an extension in a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm)

[WHERE ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v1.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[GROUP BY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_group_by_v1.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[HAVING ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v1.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[UNION ALL ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_union_v1.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[AS PROJECTION ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm)

Defines a CDS projection view

[VIRTUAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm)

Defines a new element of a CDS projection view

[LOCALIZED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm)

Defines the [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") of a text association

[REDIRECTED TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element.htm)

Defines the redirect of a CDS association

[REDIRECTED TO COMPOSITION CHILD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm)

Defines the redirect of a CDS composition

[REDIRECTED TO PARENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_expose_assoc.htm)

Defines the redirect of a CDS to-parent association

Expressions

Operators

Meaning

[MAX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), [MIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), [SUM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm), [COUNT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[+](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm), [\-](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm), [\*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm), [/](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[CASE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), [WHEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), [THEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), [ELSE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm), [END](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v1.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[\=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [<>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [<](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [\>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [<=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [\>=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_betw_v1.htm), [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v1.htm), [IS NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v1.htm), [NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm), [AND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm), [OR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

Built-In Functions

Function

Meaning

[ABS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [CEIL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [DIV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [DIVISION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [FLOOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [MOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [ROUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[CONCAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [INSTR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [LEFT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [LENGTH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [LPAD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [LOWER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [LTRIM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [REPLACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [RIGHT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [RPAD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [RTRIM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm), [UPPER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[BINTOHEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[COALESCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v1.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm), [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm), [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

Date function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_time_functions_v1.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

Time stamp function in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v1.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v1.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

Date/time conversions functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)

CDS View Extensions

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)[WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)

Extends a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") using a [CDS view extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

[EXTEND VIEW ENTITY...WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view_entity.htm)

Extends a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry") using a [CDS view extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

CDS Table Functions

Keywords and Additions

Language Element

Meaning

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_table_function.htm)

Defines a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")

CDS Hierarchies

Keywords and Additions

Language Element

Meaning

[DEFINE HIERARCHY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm)

Defines input parameters of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[AS PARENT CHILD HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") using parent-child relationships

[SOURCE ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Specifies the data source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[CHILD TO PARENT ASSOCIATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[PERIOD FROM ... TO ... VALID FROM ... TO ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines a [temporal hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry")

[DIRECTORY ... FILTER BY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Specifies a condition for the source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[START WHERE ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Specifies the start condition of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[SIBLINGS ORDER BY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Specifies the sort order of [sibling nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensibling_node_glosry.htm "Glossary Entry") in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[DEPTH ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Delimits the [hierarchy levels](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[NODETYPE ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines an element as a node type for a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[MULTIPLE PARENTS ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if multiple [parent nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[ORPHANS ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [orphan nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenorphan_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[CYCLES ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [node cycles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennode_cycle_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[GENERATE SPANTREE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

Reduces a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") to a tree

CDS Custom Entities

Keywords and Additions

Language Element

Meaning

[DEFINE CUSTOM ENTITY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity

[ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity as a root entity

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_parameter_list.htm)

Defines input parameters of a CDS custom entity

[ASSOCIATION ... TO ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm)[ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element.htm) of a CDS custom entity.

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm)

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm)

Defines a CDS composition in the element list of a CDS custom entity

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_tp_association.htm)

Defines a CDS to-parent association in the element list of a CDS custom entity

CDS Abstract Entities

Keywords and Additions

Language Element

Meaning

[DEFINE ABSTRACT ENTITY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_abstract_entity.htm)

Defines an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

[ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_abstract_entity.htm)

Defines a CDS abstract entity as a root entity

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_parameter_list.htm)

Defines input parameters of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

[ASSOCIATION ... TO ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm)

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_composition.htm)

Defines a CDS composition in the element list of a CDS abstract entity

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_to_parent_assoc.htm)

Defines a CDS to-parent association in the element list of a CDS abstract entity

CDS Metadata Extensions

Keywords and Additions

Language Element

Meaning

[ANNOTATE ENTITY*|*VIEW ... WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry")

[VARIANT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_annotate_view.htm)

Joins a [CDS metadata extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") with a [CDS variant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_variant_glosry.htm "Glossary Entry")

[PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_annotate_view_para_list.htm)

Extends the annotations of the input parameters of a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry")

DCL

CDS Roles

Keywords and Additions

Language Element

Meaning

[DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm)

Defines a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[GRANT SELECT ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_rules.htm)

Defines an access rule in a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[COMBINATION MODE OR*|*AND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_rule.htm)

Specifies multiple access rules for the same CDS entity

[REDEFINITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_rule.htm)

Specifies the only existing access rule for the CDS entity

[WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_rule.htm)

WHERE clause in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[AND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm), [OR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm), [NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_inherited_rule.htm)

Defines an inherited access rule of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") (obsolete)

[ASPECT pfcg\_auth](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm),
[ASPECT user](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_user.htm)

Conditions for [CDS roles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg_mapping.htm)

Specifies a [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in a [PFCG condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT ... FOR GRANT SELECT ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm)

Defines an [inheritance condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninherit_condition_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")

...[\=*|*<>*|*<*|*\>*|*<=*|*\>=*|*?=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_cond_expression.htm)*|*[BETWEEN*|*LIKE*|*IS NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_literal.htm) ...

Operators for literal conditions

[BYPASS WHEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm)

Specifies the condition for authorization filtering

[IN SCENARIO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_pfcg.htm)

Specifies the switchable authorization check

[INHERIT CONDITIONS FROM ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role

[INHERIT CONDITIONS FROM SUPER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role

CDS access policy

Keywords and Additions

Language Element

Meaning

[DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_accesspolicy.htm)

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry")

[DEFINE PFCG\_MAPPING ... BETWEEN ... AND ... USING ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in an access policy

[DEFINE ASPECT ... AS SELECT FROM ... WITH USER ELEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_generic_aspect.htm)

Defines a self-defined aspect as part of a CDS access policy
