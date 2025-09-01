# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm)
- [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)
- [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.905Z

---

### abencds_syntax.htm

> **📖 Official SAP Documentation**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_syntax.htm)

### abencds_general_syntax_rules.htm

> **📖 Official SAP Documentation**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm)

### abencds_language_elements.htm

> **📖 Official SAP Documentation**: [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_language_elements.htm)


  

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
