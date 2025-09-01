# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Syntax, ABENCDS_SYNTAX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

ABAP CDS - Syntax

The syntax of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") and [DCL](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept.

-   [ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))
-   [ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\))

Continue
[ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\))
[ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\))


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - General Syntax Rules, ABENCDS_GENERAL_SYNTAX_RULES, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"), and [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") for defining [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are as follows:

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
    -   In general ABAP CDS, [untyped](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry") numeric and untyped character literals are available:
        
        An untyped character literal is a character string enclosed in single quotation marks (').
        An untyped numeric literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit.
        
    -   In [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [typed literals](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry") are available for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"). Typed literals are available for almost all built-in ABAP Dictionary data types. A typed literal is specified by writing an ABAP Dictionary data type with the type namespace abap. as prefix followed by the character-like representation of the value in single quotation marks (').
        
        Example: abap.dats'20200101'
        
    -   Escaping literals in ABAP CDS:
        
        A single quote (') is escaped with a single quote:'...''...'.
        A backslash (\\) is escaped with a backslash: '...\\\\...'
        
        Exception: Escaping with a backslash is not supported in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").
        
-   Comments
    -   Two forward slashes (//) introduce a comment, which continues until the end of the line.
    -   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.
-   Separators
    -   Statements can be closed using a semicolon (;). Sometimes this is mandatory.
-   Protected words
    -   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the DDIC database table TRESE.

Hints

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.
-   In [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [CDS data definitions](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") and [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") for [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"), and in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry") for behavior definitions.

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.
-   MYVIEW, myview, and myView all identify the same operand.
-   0.5 is a valid numeric literal, but .5 is not.


### abencds_language_elements.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Syntax](javascript:call_link\('abencds_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Language Elements, ABENCDS_LANGUAGE_ELEMENTS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"), and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), arranged by topics.

-   [DDL](#abencds-language-elements-1-----------cds-annotation-definitions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)
    -   [CDS Views](#abencds-language-elements-3-----------cds-entity-extensions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)
    -   [CDS Table Functions](#abencds-language-elements-5-----------cds-hierarchies---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)
    -   [CDS Custom Entities](#abencds-language-elements-7-----------cds-abstract-entities---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)
    -   [CDS Metadata Extensions](#abencds-language-elements-9-------bdl---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)
    -   [CDS Behavior Definitions](#abencds-language-elements-11-----------bdef-extensions---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_12)
-   [DCL](#abencds-language-elements-13-----------cds-roles---@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_14)
    -   [CDS Access Policy](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_15)

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

[DEFINE VIEW...](javascript:call_link\('abencds_define_view_v1.htm'\))[AS](javascript:call_link\('abencds_define_view_v1.htm'\))

Defines a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

[DEFINE VIEW ENTITY...AS](javascript:call_link\('abencds_define_view_entity.htm'\))

Defines a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")

[DEFINE VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))

Defines a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry")

[DEFINE TRANSIENT VIEW ENTITY... AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_analytical.htm'\))

Defines a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry")

[ROOT](javascript:call_link\('abencds_define_root_view_v2.htm'\))

Defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")

[PROVIDER CONTRACT TRANSACTIONAL\_QUERY
                 TRANSACTIONAL\_INTERFACE
                 ANALYTICAL\_QUERY
                 { }](javascript:call_link\('abencds_pv_provider_contract.htm'\))

Specifies the scenario in which a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") is used.

[WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v2.htm'\))

Defines input parameters of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](javascript:call_link\('abencds_select_statement_v2.htm'\))

SELECT statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

[INNER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v2.htm'\))

Inner join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[LEFT*|*RIGHT OUTER JOIN ... ON](javascript:call_link\('abencds_joined_data_source_v2.htm'\))

Outer join in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[ASSOCIATION ... TO ... AS ... ON](javascript:call_link\('abencds_association_v2.htm'\))

Defines a CDS association for a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[REDEFINE ASSOCIATION](javascript:call_link\('abencds_proj_view_redefined_assoc.htm'\))

Redefines a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

[WITH DEFAULT FILTER](javascript:call_link\('abencds_association_v2.htm'\))

Specifies a default filter condition of a CDS association

[1:](javascript:call_link\('abencds_path_expr_card_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

[INNER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

[LEFT OUTER ... WHERE](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\))

Attribute of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

[COMPOSITION ... OF](javascript:call_link\('abencds_composition_v2.htm'\))

Defines a CDS composition

[ASSOCIATION TO PARENT ... AS ... ON](javascript:call_link\('abencds_to_parent_assoc_v2.htm'\))

Defines a CDS to-parent association

[KEY](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Defines an element of a [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) as key field

[AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Defines an alias name for an element of a [SELECT](javascript:call_link\('abencds_select_list_v2.htm'\)) list

[$EXTENSION.\*](javascript:call_link\('abencds_select_list_entry_v1.htm'\))

Elements of an extension in a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) (only available in CDS DDIC-based views (obsolete))

[$PROJECTION.\*](javascript:call_link\('abencds_select_list_entry_v2.htm'\))

Reuses expressions defined in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") in an operand position of the SELECT list of the same CDS view entity.

[WHERE ...](javascript:call_link\('abencds_where_clause_v2.htm'\))

WHERE clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[GROUP BY ...](javascript:call_link\('abencds_group_by_v2.htm'\))

GROUP-BY clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[HAVING ...](javascript:call_link\('abencds_having_clause_v2.htm'\))

HAVING clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[EXCEPT ...](javascript:call_link\('abencds_except_v2.htm'\))

EXCEPT clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)), currently only available for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

[INTERSECT ...](javascript:call_link\('abencds_intersect_v2.htm'\))

INTERSECT clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)), currently only available for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

[UNION *\[*ALL*\]* ...](javascript:call_link\('abencds_union_v2.htm'\))

UNION clause of a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[VIRTUAL](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines a new element of a CDS projection view

[LOCALIZED](javascript:call_link\('abencds_proj_view_element.htm'\))

Defines the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of a text association

[REDIRECTED TO](javascript:call_link\('abencds_proj_view_element.htm'\))

Redirects a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in a CDS projection view to a projection of the association target.

[REDIRECTED TO COMPOSITION CHILD](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))

Redirects a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") in a CDS projection view to a projection of the composition target.

[REDIRECTED TO PARENT](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\))

Redirects a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in a CDS projection view to a projection of the association target.

Expressions

Operators

Meaning

[MAX](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [MIN](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [AVG *\[*AS dtype*\]*](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [SUM](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)), [COUNT](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[+](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [\-](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [\*](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)), [/](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))

Arithmetic expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[CASE](javascript:call_link\('abencds_case_expression_v2.htm'\)), [WHEN](javascript:call_link\('abencds_case_expression_v2.htm'\)), [THEN](javascript:call_link\('abencds_case_expression_v2.htm'\)), [ELSE](javascript:call_link\('abencds_case_expression_v2.htm'\)), [ELSE NULL](javascript:call_link\('abencds_case_expression_v2.htm'\)), [END](javascript:call_link\('abencds_case_expression_v2.htm'\))

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\))

Cast expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[\=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<>](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [\>](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [<=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [\>=](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), [NOT](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [AND](javascript:call_link\('abencds_conditional_expression_v2.htm'\)), [OR](javascript:call_link\('abencds_conditional_expression_v2.htm'\))

Relational expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

Built-In Functions

Function

Meaning

[ABS](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [CEIL](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [DIV](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [DIVISION](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [FLOOR](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [MOD](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)), [ROUND](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

Numeric function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[CONCAT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [INSTR](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LEFT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LENGTH](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LPAD](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LOWER](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [LTRIM](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [REPLACE](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RIGHT](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RPAD](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [RTRIM](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [SUBSTRING](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)), [UPPER](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

String function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[BINTOHEX](javascript:call_link\('abencds_conv_func_types_v2.htm'\)), [HEXTOBIN](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

Byte string function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[COALESCE](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[FLTP\_TO\_DEC](javascript:call_link\('abencds_conv_func_types_v2.htm'\)), [UNIT\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [DECIMAL\_SHIFT](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\)), [GET\_NUMERIC\_VALUE](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)), [CURR\_TO\_DECFLOAT\_AMOUNT](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

Conversion functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[DATS\_IS\_VALID](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v2.htm'\)), [DATS\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v2.htm'\))

Date function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[TIMS\_IS\_VALID](javascript:call_link\('abencds_time_functions_v2.htm'\))

Time function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[TSTMP\_IS\_VALID](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_CURRENT\_UTCTIMESTAMP](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)), [TSTMP\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

Time stamp function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[ABAP\_SYSTEM\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v2.htm'\)), [ABAP\_USER\_TIMEZONE](javascript:call_link\('abencds_timezone_functions_v2.htm'\))

Time zone functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

[TSTMP\_TO\_DATS](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMP\_TO\_TIMS](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [TSTMP\_TO\_DST](javascript:call_link\('abencds_date_time_conversions_v2.htm'\)), [DATS\_TIMS\_TO\_TSTMP](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

Date/time conversions functions in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\))

CDS Entity Extensions   

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ENTITY...WITH](javascript:call_link\('abencds_extend_view_entity.htm'\))

Extends a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") using a [CDS view entity extension](javascript:call_link\('abencds_view_entity_extend_glosry.htm'\) "Glossary Entry")

[EXTEND CUSTOM ENTITY...WITH](javascript:call_link\('abencds_extend_custom_entity.htm'\))

Extends a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") using a [CDS custom entity extension](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry")

[EXTEND ABSTRACT ENTITY...WITH](javascript:call_link\('abencds_extend_abstract_entity.htm'\))

Extends a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") using a [CDS abstract entity extension](javascript:call_link\('abencds_abs_entity_extend_glosry.htm'\) "Glossary Entry")

[EXTEND VIEW ...](javascript:call_link\('abencds_extend_view.htm'\))[WITH](javascript:call_link\('abencds_extend_view.htm'\))

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

BDL   

CDS Behavior Definitions   

CDS Behavior Definition Header

Language Element

Meaning

[managed](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")

[unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")

[abstract](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines an abstract BDEF

[projection](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a projection RAP BO

[interface](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a RAP BO interface

[implementation in class *\[*unique*\]*](javascript:call_link\('abenbdl_in_class_unique.htm'\))

Class for manual method implementation

[strict](javascript:call_link\('abenbdl_strict_1.htm'\)) *|* [strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))

Enables BDEF strict mode

[extensible *{*
*\[*with validations on save*\]*
*\[*with determinations on save*\]*
*\[*with determinations on modify*\]*
*}*](javascript:call_link\('abenbdl_extensible.htm'\))

Enables [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") for the indicated entities

[with draft](javascript:call_link\('abenbdl_with_draft.htm'\))

Enables the draft concept for a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry")

[use draft](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

[with privileged mode disabling *\[*base context *\[*and*\]**\]*](javascript:call_link\('abenbdl_privileged_mode.htm'\))

Enables privileged access to a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry")

[foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))

Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

Entity Behavior Definition

Language Element

Meaning

[define behavior for...alias](javascript:call_link\('abenbdl_define_beh.htm'\))

Defines an [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry")

Authorization Context Definition

Language Element

Meaning

[define authorization context ...
*\[*for disable *{*modify*|*read*|*modify,read*}**\]*](javascript:call_link\('abenbdl_def_auth_context.htm'\))

Defines an [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that lists [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") that can be skipped when the respective authorization context is activated.

[define own authorization context *\[*by privileged mode *\[*and*\]**\]*{...}](javascript:call_link\('abenbdl_def_own_auth_context.htm'\))

Defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") that documents authorization objects used in the implementation of the RAP BO in question.

Entity Behavior Characteristics

Language Element

Meaning

[persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))

Defines a persistent database table for storing the data changes that result from transactional behavior.

[draft table](javascript:call_link\('abenbdl_draft_table.htm'\))

Defines the [draft database table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") used to store draft data.

[with additional save](javascript:call_link\('abenbdl_saving.htm'\)), [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)), [and cleanup](javascript:call_link\('abenbdl_saving.htm'\)), [with full data](javascript:call_link\('abenbdl_saving.htm'\))

User-defined saving strategy for managed RAP BOs

[etag master](javascript:call_link\('abenbdl_etag.htm'\)), [etag dependent](javascript:call_link\('abenbdl_etag.htm'\)), [total etag](javascript:call_link\('abenbdl_etag.htm'\))

Defines an ETag field for optimistic concurrency control

[use etag](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of ETag fields for optimistic concurrency control in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

[lock master *\[*unmanaged*\]*](javascript:call_link\('abenbdl_locking.htm'\)), [lock dependent,](javascript:call_link\('abenbdl_locking.htm'\)) [lock:none](javascript:call_link\('abenbdl_locking.htm'\))

Defines an exclusive lock that enables pessimistic concurrency control

[authorization master *{* ( global ) *|* ( instance ) *|* ( global, instance ) *}*](javascript:call_link\('abenbdl_authorization.htm'\)), [authorization dependent](javascript:call_link\('abenbdl_authorization.htm'\)), [authorization:none](javascript:call_link\('abenbdl_authorization.htm'\)), [authorization:update](javascript:call_link\('abenbdl_authorization.htm'\))

Defines an authorization concept for a business object to protect it against unauthorized access to data.

[early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))

Defines unmanaged [early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry") for all primary key fields of a business object entity.

[late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))

Enables gapless assignment for unique keys when creating new entity instances.

Entity Behavior Body

Language Element

Meaning

[field *{* *\[*(readonly)*\]*
      *|**\[*(mandatory)*\]*
       *|**\[*(features:instance)*\]*
      *|**\[*(mandatory:create)*\]*
      *|**\[*(readonly:update)*\]*
      *|**\[*(numbering:managed)*\]*    
       *|**\[*(suppress)*\]* *}*](javascript:call_link\('abenbdl_field_char.htm'\))

Defines field additions

[field (modify)](javascript:call_link\('abenbdl_augment_projection.htm'\))

Augmentation of a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

[group](javascript:call_link\('abenbdl_grouping.htm'\))

Splits the implementation-relevant parts of a business object's logic into multiple groups to allow simultaneous work.

[create](javascript:call_link\('abenbdl_standard_operations.htm'\)), [update](javascript:call_link\('abenbdl_standard_operations.htm'\)), [delete](javascript:call_link\('abenbdl_standard_operations.htm'\))

Enables [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") for a RAP business object.

[use](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

[association ... abbreviation ...
*\[*with draft*\]* *\[*without response*\]*](javascript:call_link\('abenbdl_association.htm'\))

Enables read-by-association and create-by-association operations for associations.

[*\[*static*\]**\[*factory*\]**\[*static factory*\]* action ... *\[*external*\]*](javascript:call_link\('abenbdl_action.htm'\))

Defines an action

[*\[*static*\]* function ... *\[*external*\]*](javascript:call_link\('abenbdl_function.htm'\))

Defines a function

[determine action ... *\[*always*\]*](javascript:call_link\('abenbdl_determine_action.htm'\))

Defines a [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") that allows a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to execute [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") on request.

   [draft action Edit](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Activate](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Discard](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Resume *\[*with additional implementation*\]*](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft determine action Prepare](javascript:call_link\('abenbdl_draft_action.htm'\))

Defines a draft action in a draft-enabled scenario

[parameter ... *\[*$self*\]*](javascript:call_link\('abenbdl_action_input_param.htm'\))

Defines an input parameter for an action or function

[result *\[*selective*\]* \[cardinality\] *{* $self *|* entity *}*](javascript:call_link\('abenbdl_action_output_para.htm'\))

Defines an output parameter for an action or function

[mapping for ... *\[*control ... *\]* *\[*corresponding*\]* *\[*except*\]*](javascript:call_link\('abenbdl_type_mapping.htm'\))

Maps field names from database tables to field names from the current data model

[validation ... on save { ... }](javascript:call_link\('abenbdl_validations.htm'\))

Defines a validation which is called during the save sequence.

[determination ... on save { ... } *|* on modify { ... }](javascript:call_link\('abenbdl_determinations.htm'\))

Defines a determination which is called during the save sequence or immediately after data has been changed.

[features: global, features: instance](javascript:call_link\('abenbdl_actions_fc.htm'\))

RAP BO operation addition. Can be used to define global or instance feature control for a RAP BO operation.

[internal](javascript:call_link\('abenbdl_internal.htm'\))

Defines a RAP BO operation as internal.

[precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Prevents illegal changes from reaching the application buffer by prechecking modify operations.

[augment](javascript:call_link\('abenbdl_augment_projection.htm'\))

Augments modify requests on the projection layer in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

Abstract Behavior Definitions

Language Element

Meaning

[with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\))

Causes the construction of a new kind of BDEF derived type. Only available in abstract BDEFs.

[with control](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))

Optional addition of the define behavior statement that is only available in abstract BDEFs. Adds the %control structure to the corresponding derived type structure.

[scalar entity ... field](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))

Alternative to an entity behavior definition that is only available in abstract BDEFs. Integrates a node of the CDS composition tree into the hierarchical derived type of the abstract BDEF as a scalar type.

[association ... *\[*with hierarchy*\]*](javascript:call_link\('abenbdl_association_abstract.htm'\))

In an abstract BDEF, an association can be defined with the optional addition with hierarchy. This addition is available for to-parent associations and cross-BO associations to include them multiple times in the type structure.

[deep mapping for ... *\[*corresponding*\]* *\[*sub*\]*](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))

Defines a deep mapping in an abstract BDEF.

BDEF Extensions   

Keywords and Additions

This list displays special language elements for BDEF extensions. You can also use statements from [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Language Element

Meaning

[extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\))

Defines a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry").

[extend behavior for](javascript:call_link\('abenbdl_extend_beh.htm'\))

Defines a [RAP entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry").

[extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\))

Extends an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry").

[extend determine action](javascript:call_link\('abenbdl_determine_action_ext.htm'\))

Extends an existing [RAP BO determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").

[extend draft determine action Prepare](javascript:call_link\('abenbdl_draft_action_ext.htm'\))

Extends an existing [draft determine action Prepare](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry").

[extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\))

Extends an existing [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry").

[extension for projection](javascript:call_link\('abenbdl_extensibility_projection.htm'\))

Extends a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

[ancestor association](javascript:call_link\('abenbdl_ancestor_ext.htm'\))

Defines a CDS association as ancestor association. The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must be an extension node.

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

CDS Access Policy   

Keywords and Additions

Language Element

Meaning

[DEFINE ACCESSPOLICY](javascript:call_link\('abencds_f1_define_accesspolicy.htm'\))

Defines a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry")

[DEFINE PFCG\_MAPPING ... BETWEEN ... AND ... USING ...](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

Defines a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") in an access policy

[DEFINE ASPECT ... AS SELECT FROM ... WITH USER ELEMENT](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\))

Defines a self-defined aspect as part of a CDS access policy
