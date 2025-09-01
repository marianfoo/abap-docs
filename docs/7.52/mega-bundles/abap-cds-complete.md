# ABAP CDS - Complete Reference (7.52)

**Generated**: 2025-09-01T11:14:58.743Z
**Bundles Combined**: 20
**Category**: cds

---



## 🔗 Complete Source Documentation

**📖 Official Documentation**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)
**🏷️ Category**: CDS
**🔍 Search Specific Topics**: Use `abap_search query:"cds"` for focused results
**📄 Individual Pages**: All source URLs included in each section below

### 🎯 Quick Navigation
- **Search for specific statements**: `abap_search query:"SELECT"` or `abap_search query:"LOOP"`
- **Get individual bundles**: Use `abap_get` with specific bundle doc_id
- **Browse by difficulty**: Look for **Difficulty** markers in each section

---

## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

**Files**: 3 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

> **📖 Official SAP Documentation**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_glosry.htm "Glossary Entry") [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_glosry.htm "Glossary Entry") and [DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendcl_glosry.htm "Glossary Entry") and also makes it possible to define annotations and associations. The syntax and semantics basically match the general [CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_glosry.htm "Glossary Entry") concept.

-   [General Syntax Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm)

-   [Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_language_elements.htm)

Continue
[ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm)
[ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_language_elements.htm)



**📖 Source**: [abencds_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm)

### abencds_general_syntax_rules.htm

> **📖 Official SAP Documentation**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") for defining [CDS objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") are as follows:

-   Keywords

-   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.

-   Names

-   Names are not case-sensitive.

-   A name can have a maximum of 30 characters.

-   A name can consist of letters, numbers, underscores (\_), and slashes (/).

-   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm).

-   The separator for names with multiple parts is a period (.). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.

-   The following CDS keywords cannot be used as names: ALL, AND, AS, ASSOCIATION, AVG, CASE, CAST, CROSS, COUNT, DISTINCT, EXISTS, EXTEND, FROM, FULL, GROUP, HAVING, INNER, JOIN, KEY, LEFT, MAX, MIN, NOT, NULL, ON, OR, ORDER, RIGHT, SELECT, SUM, UNION, VIEW, WHEN, WHERE

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

-   In [DDL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS data definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_definition_glosry.htm "Glossary Entry") and [DCL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and in [DDLX source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.

-   MYVIEW, myview, and myView all identify the same operand.

-   0.5 is a valid numeric literal, but .5 is not.



**📖 Source**: [abencds_general_syntax_rules.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm)

### abencds_language_elements.htm

> **📖 Official SAP Documentation**: [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_language_elements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_syntax.htm) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") of the [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry"), arranged by topics.

In addition to the language elements shown here, CDS source code can also contain [annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) with metadata.

DDL

CDS Annotation Definitions

Keywords and Additions

Language Element

Meaning

[define annotation ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation.htm)

Defines a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[enum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm)

Defines enumeration symbols of a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[default](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_type.htm)

Defines default values of a [CDS annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[array of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_arr.htm)

Defines an [annotation arras](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry").

CDS Views

Keywords and Additions

Language Element

Meaning

[DEFINE VIEW ... AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm)

Defines a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm)

Defines input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

SELECT statement of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)

Defines an association for a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[1:](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

[KEY ... AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)

Element of a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

[$EXTENSION.\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm)

Elements of an enhancement in a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

[WHERE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[GROUP BY ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_group_by.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[HAVING ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[UNION ALL ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

Expressions

Operators

Meaning

[MAX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [MIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [SUM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), [COUNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[+](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [\-](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm), [/](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [WHEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [THEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [ELSE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm), [END](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [\>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [<=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [\>=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_between.htm), [LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_like.htm), [IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_null.htm), [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), [AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), [OR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

Predefined Functions

Function

Meaning

[ABS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [CEIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [DIVISION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [FLOOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm), [ROUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[CONCAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [INSTR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LEFT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LENGTH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LPAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LOWER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [LTRIM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RIGHT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RPAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [RTRIM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm), [UPPER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_character.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[BINTOHEX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[COALESCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_coalesce_expression.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm), [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm), [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_functions.htm)

Date function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_time_functions.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm)

Time stamp function in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timezone_functions.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timezone_functions.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_conversions.htm)

Date/time conversions functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm)

CDS View Enhancements

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ... WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view.htm)

Enhancement of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") with an [CDS view enhancement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

CDS Table Functions

Keywords and Additions

Language Element

Meaning

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm)

Defines a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry")

CDS Metadata Extensions

Keywords and Additions

Language Element

Meaning

[ANNOTATE VIEW ... WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

[VARIANT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

Join of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") with a [CDS variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry")

[PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)

Extension of the annotations for the input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

DCL

CDS Roles

Keywords and Additions

Language Element

Meaning

[DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm)

Defines a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[GRANT SELECT ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm)

Defines an access rule in a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)

WHERE clause in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[AND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm), [OR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm), [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm)

INHERIT clause in an inherited access rule of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

[... ASPECT pfcg\_auth ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm),
[... ASPECT user ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)

Conditions for [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry")

...[\=*|*<>*|*<*|*\>*|*<=*|*\>=*|*?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)*|*[BETWEEN*|*LIKE*|*IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) ...

Operators for literal conditions


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Definition of Annotations

**Files**: 9 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_language_elements.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_language_elements.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Annotation Syntax

**Files**: 5 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS Metadata Extensions

**Files**: 10 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Evaluation of Annotations

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - ABAP Annotations

**Files**: 3 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - SAP Annotations / ABAP CDS - Framework-Specific Annotations / ABAP CDS - Framework-Specific Annotation Syntax

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_annotations_frmwrk_tables.htm

> **📖 Official SAP Documentation**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) → 

ABAP CDS - Framework-Specific Annotation Syntax

The following tables summarize the [annotation syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry") of all [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS. Any specified subannotations are shown using [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm). If square brackets \[ \] are specified after a name in the column Annotation, this means that the annotation in front of the square brackets is an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") (see [Executable Example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_array_abexa.htm)). Any enumeration symbols in an annotation are specified in the column Enums. The column Default shows the default values applied to the evaluation when an annotation is specified without a value. The columns Text and MDE indicate whether the annotation values are translatable texts and whether the annotation can be specified in a [metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). More information about framework-specific annotations can be found in the documentation CDS Annotations.

-   [AccessControl-Annotations](#abencds-annotations-frmwrk-tables-1--------aggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_2)

-   [Analytics-Annotations](#abencds-annotations-frmwrk-tables-3--------analyticsdetails-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_4)

-   [Consumption-Annotations](#abencds-annotations-frmwrk-tables-5--------defaultaggregation-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_6)

-   [EnterpriseSearch-Annotations](#abencds-annotations-frmwrk-tables-7--------hierarchy-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_8)

-   [OData-Annotations](#abencds-annotations-frmwrk-tables-9--------objectmodel-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_10)

-   [Search-Annotations](#abencds-annotations-frmwrk-tables-11--------semantics-annotations---@ITOC@@ABENCDS_ANNOTATIONS_FRMWRK_TABLES_12)

-   [UI-Annotations](#abencds-annotations-frmwrk-tables-13---note--see-also--framework-specific-annotation-definitions--javascript-call-link---abencds-annotations-frmwrk-ddla-htm-------accesscontrol-annotations--annotation--scope--typ--enums--default--text--mde--accesscontrol-personaldata-blocking--table-function-view--string-30----blocked--data--excluded--not--required--required--------------accesscontrol-privilegedassociations-------table-function-view--associationref------------------aggregation-annotations--annotation--scope--typ--enums--default--text--mde--aggregation-default--element--string-30----avg--count--distinct--formula--max--min--none--nop--sum--------------aggregation-referenceelement-------element--elementref------------------analytics-annotations--annotation--scope--typ--enums--default--text--mde--analytics-datacategory--table-function-view--string-20----aggregationlevel--cube--dimension--fact--------------analytics-dataextraction-delta-byelement-detectdeletedrecords--table-function-view--boolean------true----------analytics-dataextraction-delta-byelement-ignoredeletionafterdays--table-function-view--integer--------------x--analytics-dataextraction-delta-byelement-maxdelayinseconds--table-function-view--integer------1800------x--analytics-dataextraction-delta-byelement-name--table-function-view--elementref------------------analytics-dataextraction-enabled--table-function-view--boolean------true----------analytics-hidden--table-function-view--boolean------true----------analytics-hints--table-function-view--string-1298-------------------analytics-planning-enabled--table-function-view--boolean------true----------analytics-query--table-function-view--boolean------true----------analytics-settings-maxprocessingeffort--table-function-view--string-20----high--low--medium--unlimited---high----------analytics-settings-zerovalues-handling--table-function-view--string-20----hide--hide--if--all--show---show----------analytics-settings-zerovalues-hideonaxis--table-function-view--string-20----columns--rows--rows--columns---rows--columns----------analytics-writeback-classname--table-function-view--string-30-------------------analyticsdetails-annotations--annotation--scope--typ--enums--default--text--mde--analyticsdetails-exceptionaggregationsteps------exceptionaggregationbehavior--element--string-14----avg--count--count--distinct--first--last--max--min--nha--std--sum--------------analyticsdetails-exceptionaggregationsteps------exceptionaggregationelements-------element--elementref------------------analyticsdetails-planning-disaggregation--element--string-20----difference--none--total--------------analyticsdetails-planning-distribution--element--string-20----equal--proportional--proportional--ref--------------analyticsdetails-planning-distributionreference--element--elementref------------------analyticsdetails-planning-enabled--element--boolean------true----------analyticsdetails-query-axis--element--string-20----columns--free--rows--------------analyticsdetails-query-decimals--element--integer------------------analyticsdetails-query-display--element--string-20----key--key--text--text--text--key--------------analyticsdetails-query-displayhierarchy--element--string-20----filter--off--on--------------analyticsdetails-query-elementhierarchy-initiallycollapsed--element--boolean------true----------analyticsdetails-query-elementhierarchy-parent--element--elementref------------------analyticsdetails-query-formula--element--string-1298-------------------analyticsdetails-query-hidden--element--boolean------true----------analyticsdetails-query-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input--------------analyticsdetails-query-hierarchybinding------value--element--string-512-------------------analyticsdetails-query-hierarchybinding------variablesequence--element--integer------------------analyticsdetails-query-hierarchyinitiallevel--element--integer------------------analyticsdetails-query-hierarchysettings-hidepostednodesvalues--element--boolean------true----------analyticsdetails-query-resultvaluessource--element--string-10----cube--dimension--------------analyticsdetails-query-scaling--element--integer------------------analyticsdetails-query-sortdirection--element--string-20----asc--desc--------------analyticsdetails-query-totals--element--string-20----hide--show--------------analyticsdetails-query-variablesequence--element-parameter--integer------------------consumption-annotations--annotation--scope--typ--enums--default--text--mde--consumption-defaultvalue--parameter--string-1024---------------x--consumption-derivation-binding------targetelement--element-parameter--elementref--------------x--consumption-derivation-binding------targetparameter--element-parameter--parameterref--------------x--consumption-derivation-binding------type--element-parameter--string-12----constant--element--parameter--system--field----------x--consumption-derivation-binding------value--element-parameter--string-512---------------x--consumption-derivation-lookupentity--element-parameter--entityref--------------x--consumption-derivation-resultelement--element-parameter--elementref--------------x--consumption-derivation-resultelementhigh--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------hierarchyelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-mapping------lookupelement--element-parameter--elementref--------------x--consumption-derivation-resulthierarchynode-nodetypeelement--element-parameter--elementref--------------x--consumption-filter-defaulthierarchynode-nodetype--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------element--element--elementref--------------x--consumption-filter-defaulthierarchynode-node------value--element--string-512---------------x--consumption-filter-defaultvalue--element--string-1024---------------x--consumption-filter-defaultvaluehigh--element--string-1024---------------x--consumption-filter-hidden--element--boolean------true------x--consumption-filter-hierarchybinding------type--element--string-12----constant--element--parameter--system--field--user--input----------x--consumption-filter-hierarchybinding------value--element--string-512---------------x--consumption-filter-hierarchybinding------variablesequence--element--integer--------------x--consumption-filter-mandatory--element--boolean------true------x--consumption-filter-multipleselections--element--boolean------true------x--consumption-filter-selectiontype--element--string-20----hierarchy--node--interval--range--single----------x--consumption-groupwithelement--element--elementref--------------x--consumption-hidden--element-parameter--boolean------true----------consumption-labelelement--element-parameter--elementref--------------x--consumption-quickinfoelement--element-parameter--elementref------------------consumption-ranking-activefunctions------id--view--string-120---------------x--consumption-ranking-activefunctions------weight--view--decimal-3-2-------1------x--consumption-ranking-functionparameterbinding------functionid--element--string-120---------------x--consumption-ranking-functionparameterbinding------parameterid--element--string-120---------------x--consumption-semanticobject--element-parameter-table-function-view--string-120---------------x--consumption-valuehelp--element-parameter--elementref------------------consumption-valuehelpdefinition------additionalbinding------element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------additionalbinding------localelement--element-parameter--elementref--------------x--consumption-valuehelpdefinition------association--element-parameter--associationref--------------x--consumption-valuehelpdefinition------entity-element--element-parameter--elementref--------------x--consumption-valuehelpdefinition------entity-name--element-parameter--entityref--------------x--consumption-valuehelpdefinition------label--element-parameter--string-60-----------x--x--consumption-valuehelpdefinition------qualifier--element-parameter--string-120---------------x--defaultaggregation-annotations--annotation--scope--typ--enums--default--text--mde--defaultaggregation--element--string-30----avg--count--count--distinct--formula--max--min--none--sum--------------enterprisesearch-annotations--annotation--scope--typ--enums--default--text--mde--enterprisesearch-commonattributes-------element--string-100---------------x--enterprisesearch-defaultvaluesuggestelement--element--boolean------true------x--enterprisesearch-enabled--table-function-view--boolean------true------x--enterprisesearch-expand--element--boolean------true------x--enterprisesearch-fieldgroupforsearchquery------elements-------table-function-view--elementref--------------x--enterprisesearch-fieldgroupforsearchquery------name--table-function-view--string-128---------------x--enterprisesearch-filteringattribute-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringattribute-countnullvalues--element--boolean------true------x--enterprisesearch-filteringattribute-default--element--boolean------true------x--enterprisesearch-filteringattribute-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-caseinsensitiveaggregation--element--boolean------true------x--enterprisesearch-filteringfacet-collapse--element--boolean------true------x--enterprisesearch-filteringfacet-complexfilter--element--boolean------true------x--enterprisesearch-filteringfacet-countnullvalues--element--boolean------true------x--enterprisesearch-filteringfacet-default--element--boolean------true------x--enterprisesearch-filteringfacet-displayposition--element--integer--------------x--enterprisesearch-filteringfacet-numberofvalues--element--integer--------------x--enterprisesearch-filteringfacet-order-by--element--string-20----filter--element--label--filter--element--value--number--of--hits---number--of--hits------x--enterprisesearch-filteringfacet-order-byreference--element--elementref--------------x--enterprisesearch-filteringfacet-order-direction--element--string-4----asc--desc----------x--enterprisesearch-highlighted-begintag--element--string-128---------------x--enterprisesearch-highlighted-enabled--element--boolean------true------x--enterprisesearch-highlighted-endtag--element--string-128---------------x--enterprisesearch-maximumlength--element--integer--------------x--enterprisesearch-searchoptions--element--string-500---------------x--enterprisesearch-snippets-begintag--element--string-128---------------x--enterprisesearch-snippets-enabled--element--boolean------true------x--enterprisesearch-snippets-endtag--element--string-128---------------x--enterprisesearch-technicaldescription--element--boolean------true------x--hierarchy-annotations--annotation--scope--typ--enums--default--text--mde--hierarchy-parentchild------directory--view--associationref------------------hierarchy-parentchild------label--view--string-1298-------------------hierarchy-parentchild------multipleparents--view--boolean------true----------hierarchy-parentchild------name--view--string-127-------------------hierarchy-parentchild------orphanednode-handling--view--string-20----error--ignore--root--nodes--stepparent--node---root--nodes----------hierarchy-parentchild------orphanednode-stepparentnodeid-------view--string-1298-------------------hierarchy-parentchild------recurse-child-------view--elementref------------------hierarchy-parentchild------recurse-parent-------view--elementref------------------hierarchy-parentchild------recurseby--view--elementref------------------hierarchy-parentchild------rootnode-visibility--view--string-25----add--root--node--add--root--node--if--defined--do--not--add--root--node---add--root--node--if--defined----------hierarchy-parentchild------siblingsorder------by--view--elementref------------------hierarchy-parentchild------siblingsorder------direction--view--string-4----asc--desc---asc----------odata-annotations--annotation--scope--typ--enums--default--text--mde--odata-publish--table-function-view--boolean------true----------objectmodel-annotations--annotation--scope--typ--enums--default--text--mde--objectmodel-alternativekey------element-------table-function-view--elementref------------------objectmodel-alternativekey------id--table-function-view--string-30-------------------objectmodel-alternativekey------uniqueness--table-function-view--string-30----unique--unique--if--not--initial--------------objectmodel-association-draft-enabled--element--boolean------true----------objectmodel-association-draft-fieldnameprefix--element--string-16-------------------objectmodel-association-type-------element--string-30----to--composition--child--to--composition--parent--to--composition--root--------------objectmodel-compositionroot--table-function-view--boolean------true----------objectmodel-createenabled--element-table-function-view--boolean------true----------objectmodel-datacategory--table-function-view--string-30----hierarchy--text--------------objectmodel-deleteenabled--table-function-view--boolean------true----------objectmodel-draftenabled--table-function-view--boolean------true----------objectmodel-enabled--element--boolean------true----------objectmodel-entitychangestateid--table-function-view--elementref------------------objectmodel-filter-transformedby--element--string-255-------------------objectmodel-foreignkey-association--element--associationref------------------objectmodel-hierarchy-association--element--associationref------------------objectmodel-lifecycle-enqueue-expirybehavior--table-function-view--string-30----relative--to--enqueue--start--relative--to--last--change---relative--to--last--change----------objectmodel-lifecycle-enqueue-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-enqueue-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-expirybehavior--table-function-view--string-30----relative--to--last--change--relative--to--processing--start---relative--to--last--change----------objectmodel-lifecycle-processing-expiryinterval--table-function-view--string-20-------------------objectmodel-lifecycle-processing-notificationbeforeexpiryinterval--table-function-view--string-20-------------------objectmodel-mandatory--element--boolean------true----------objectmodel-modelcategory--table-function-view--string-30----business--object--------------objectmodel-readonly--element--boolean------true----------objectmodel-representativekey--table-function-view--keyelementref------------------objectmodel-resultset-sizecategory--view--string-3----xs--------------objectmodel-semantickey-------table-function-view--elementref------------------objectmodel-sort-transformedby--element--string-255-------------------objectmodel-text-association--element--associationref------------------objectmodel-text-element-------element--elementref------------------objectmodel-transactionalprocessingdelegated--table-function-view--boolean------true----------objectmodel-transactionalprocessingenabled--table-function-view--boolean------true----------objectmodel-transactionalprocessingunitroot--table-function-view--boolean------true----------objectmodel-updateenabled--table-function-view--boolean------true----------objectmodel-usagetype-dataclass--table-function-view--string-30----customizing--master--meta--mixed--organizational--transactional---mixed----------objectmodel-usagetype-servicequality--table-function-view--string-30----a--b--c--d--p--x---x----------objectmodel-usagetype-sizecategory--table-function-view--string-3----l--m--s--xl--xxl---s----------objectmodel-virtualelement--element--boolean------true----------objectmodel-virtualelementcalculatedby--element--string-255-------------------objectmodel-writeactivepersistence--table-function-view--string-16-------------------objectmodel-writedraftpersistence--table-function-view--string-16-------------------search-annotations--annotation--scope--typ--enums--default--text--mde--search-defaultsearchelement--element--boolean------true------x--search-fuzzinessthreshold--element--decimal-3-2---------------x--search-ranking--element--string-6----high--low--medium---medium------x--search-searchable--table-function-view--boolean------true------x--search-termmappingdictionary--element--string-128---------------x--search-termmappinglistid-------element--string-32---------------x--semantics-annotations--annotation--scope--typ--enums--default--text--mde--semantics-address-city--element-parameter--boolean------true----------semantics-address-country--element-parameter--boolean------true----------semantics-address-label--element-parameter--boolean------true----------semantics-address-number--element-parameter--boolean------true----------semantics-address-postbox--element-parameter--boolean------true----------semantics-address-region--element-parameter--boolean------true----------semantics-address-street--element-parameter--boolean------true----------semantics-address-streetnonumber--element-parameter--boolean------true----------semantics-address-subregion--element-parameter--boolean------true----------semantics-address-type-------element-parameter--string-10----home--other--pref--work--------------semantics-address-zipcode--element-parameter--boolean------true----------semantics-booleanindicator--element--boolean------true----------semantics-businessdate-at--element-parameter--boolean------true----------semantics-businessdate-from--element-parameter--boolean------true----------semantics-businessdate-to--element-parameter--boolean------true----------semantics-calendar-dayofmonth--element-parameter--boolean------true----------semantics-calendar-dayofyear--element-parameter--boolean------true----------semantics-calendar-halfyear--element-parameter--boolean------true----------semantics-calendar-month--element-parameter--boolean------true----------semantics-calendar-quarter--element-parameter--boolean------true----------semantics-calendar-week--element-parameter--boolean------true----------semantics-calendar-year--element-parameter--boolean------true----------semantics-calendar-yearhalfyear--element-parameter--boolean------true----------semantics-calendar-yearmonth--element-parameter--boolean------true----------semantics-calendar-yearquarter--element-parameter--boolean------true----------semantics-calendar-yearweek--element-parameter--boolean------true----------semantics-calendaritem-categories--element-parameter--boolean------true----------semantics-calendaritem-class--element-parameter--boolean------true----------semantics-calendaritem-completed--element-parameter--boolean------true----------semantics-calendaritem-contact--element-parameter--boolean------true----------semantics-calendaritem-description--element-parameter--boolean------true----------semantics-calendaritem-dtend--element-parameter--boolean------true----------semantics-calendaritem-dtstart--element-parameter--boolean------true----------semantics-calendaritem-due--element-parameter--boolean------true----------semantics-calendaritem-duration--element-parameter--boolean------true----------semantics-calendaritem-fbtype--element-parameter--boolean------true----------semantics-calendaritem-location--element-parameter--boolean------true----------semantics-calendaritem-percentcomplete--element-parameter--boolean------true----------semantics-calendaritem-priority--element-parameter--boolean------true----------semantics-calendaritem-status--element-parameter--boolean------true----------semantics-calendaritem-summary--element-parameter--boolean------true----------semantics-calendaritem-transparent--element-parameter--boolean------true----------semantics-calendaritem-wholeday--element-parameter--boolean------true----------semantics-contact-birthdate--element-parameter--boolean------true----------semantics-contact-note--element-parameter--boolean------true----------semantics-contact-photo--element-parameter--boolean------true----------semantics-contact-type--element-parameter--string-12----organization--person--------------semantics-durationinseconds--element-parameter--boolean------true----------semantics-email-address--element-parameter--boolean------true----------semantics-email-bcc--element-parameter--boolean------true----------semantics-email-body--element-parameter--boolean------true----------semantics-email-cc--element-parameter--boolean------true----------semantics-email-from--element-parameter--boolean------true----------semantics-email-keywords--element-parameter--boolean------true----------semantics-email-received--element-parameter--boolean------true----------semantics-email-sender--element-parameter--boolean------true----------semantics-email-subject--element-parameter--boolean------true----------semantics-email-to--element-parameter--boolean------true----------semantics-email-type-------element-parameter--string-10----home--other--pref--work--------------semantics-fiscal-period--element-parameter--boolean------true----------semantics-fiscal-year--element-parameter--boolean------true----------semantics-fiscal-yearperiod--element-parameter--boolean------true----------semantics-fiscal-yearvariant--element-parameter--boolean------true----------semantics-geolocation-cartoid--element-parameter--boolean------true----------semantics-geolocation-latitude--element-parameter--boolean------true----------semantics-geolocation-longitude--element-parameter--boolean------true----------semantics-geolocation-normalizedname--element-parameter--boolean------true----------semantics-imageurl--element-parameter--boolean------true----------semantics-language--element-parameter--boolean------true----------semantics-languagereference--element-parameter--elementref------------------semantics-largeobject-mimetype--element--string-1024-------------------semantics-mimetype--element-parameter--boolean------true----------semantics-name-additionalname--element-parameter--boolean------true----------semantics-name-familyname--element-parameter--boolean------true----------semantics-name-fullname--element-parameter--boolean------true----------semantics-name-givenname--element-parameter--boolean------true----------semantics-name-jobtitle--element-parameter--boolean------true----------semantics-name-nickname--element-parameter--boolean------true----------semantics-name-prefix--element-parameter--boolean------true----------semantics-name-suffix--element-parameter--boolean------true----------semantics-organization-name--element-parameter--boolean------true----------semantics-organization-role--element-parameter--boolean------true----------semantics-organization-unit--element-parameter--boolean------true----------semantics-systemdate-createdat--element-parameter--boolean------true----------semantics-systemdate-lastchangedat--element-parameter--boolean------true----------semantics-systemdatetime-createdat--element-parameter--boolean------true----------semantics-systemdatetime-lastchangedat--element-parameter--boolean------true----------semantics-systemtime-createdat--element-parameter--boolean------true----------semantics-systemtime-lastchangedat--element-parameter--boolean------true----------semantics-telephone-type-------element-parameter--string-10----cell--fax--home--pager--pref--text--text--phone--video--voice--work--------------semantics-text--element-parameter--boolean------true----------semantics-time--element-parameter--boolean------true----------semantics-url-mimetype--element-parameter--string-1024-------------------semantics-user-createdby--element-parameter--boolean------true----------semantics-user-id--element-parameter--boolean------true----------semantics-user-lastchangedby--element-parameter--boolean------true----------semantics-user-responsible--element-parameter--boolean------true----------ui-annotations--annotation--scope--typ--enums--default--text--mde--ui-badge-headline-criticality--table-function-view--elementref--------------x--ui-badge-headline-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-headline-iconurl--table-function-view--string-1024---------------x--ui-badge-headline-label--table-function-view--string-60-----------x--x--ui-badge-headline-targetelement--table-function-view--elementref--------------x--ui-badge-headline-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-headline-url--table-function-view--elementref--------------x--ui-badge-headline-value--table-function-view--elementref--------------x--ui-badge-imageurl--table-function-view--elementref--------------x--ui-badge-maininfo-criticality--table-function-view--elementref--------------x--ui-badge-maininfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-maininfo-iconurl--table-function-view--string-1024---------------x--ui-badge-maininfo-label--table-function-view--string-60-----------x--x--ui-badge-maininfo-targetelement--table-function-view--elementref--------------x--ui-badge-maininfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-maininfo-url--table-function-view--elementref--------------x--ui-badge-maininfo-value--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticality--table-function-view--elementref--------------x--ui-badge-secondaryinfo-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-secondaryinfo-iconurl--table-function-view--string-1024---------------x--ui-badge-secondaryinfo-label--table-function-view--string-60-----------x--x--ui-badge-secondaryinfo-targetelement--table-function-view--elementref--------------x--ui-badge-secondaryinfo-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-secondaryinfo-url--table-function-view--elementref--------------x--ui-badge-secondaryinfo-value--table-function-view--elementref--------------x--ui-badge-title-criticality--table-function-view--elementref--------------x--ui-badge-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-badge-title-iconurl--table-function-view--string-1024---------------x--ui-badge-title-label--table-function-view--string-60-----------x--x--ui-badge-title-targetelement--table-function-view--elementref--------------x--ui-badge-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-badge-title-url--table-function-view--elementref--------------x--ui-badge-title-value--table-function-view--elementref--------------x--ui-badge-typeimageurl--table-function-view--string-1024---------------x--ui-chart------actions------dataaction--table-function-view--string-120---------------x--ui-chart------actions------invocationgrouping--table-function-view--string-12----change--set--isolated---isolated------x--ui-chart------actions------label--table-function-view--string-60-----------x--x--ui-chart------actions------semanticobjectaction--table-function-view--string-120---------------x--ui-chart------actions------type--table-function-view--string-40----for--action--for--intent--based--navigation----------x--ui-chart------charttype--table-function-view--string-40----area--area--stacked--area--stacked--100--bar--bar--dual--bar--stacked--bar--stacked--100--bar--stacked--dual--bar--stacked--dual--100--bubble--bullet--column--column--dual--column--stacked--column--stacked--100--column--stacked--dual--column--stacked--dual--100--combination--combination--stacked--combination--stacked--dual--donut--heat--map--horizontal--area--horizontal--area--stacked--horizontal--area--stacked--100--horizontal--combination--stacked--horizontal--combination--stacked--dual--line--line--dual--pie--radar--scatter--tree--map--vertical--bullet--waterfall----------x--ui-chart------description--table-function-view--string-120-----------x--x--ui-chart------dimensionattributes------dimension--table-function-view--elementref--------------x--ui-chart------dimensionattributes------role--table-function-view--string-10----category--series----------x--ui-chart------dimensions-------table-function-view--elementref--------------x--ui-chart------measureattributes------asdatapoint--table-function-view--boolean------true------x--ui-chart------measureattributes------measure--table-function-view--elementref--------------x--ui-chart------measureattributes------role--table-function-view--string-10----axis--1--axis--2--axis--3----------x--ui-chart------measures-------table-function-view--elementref--------------x--ui-chart------qualifier--table-function-view--string-120---------------x--ui-chart------title--table-function-view--string-60-----------x--x--ui-datapoint-criticality--element--elementref--------------x--ui-datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-deviationrangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangehighvalueelement--element--elementref--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-datapoint-criticalitycalculation-tolerancerangelowvalueelement--element--elementref--------------x--ui-datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-datapoint-description--element--string-120-----------x--x--ui-datapoint-forecastvalue--element--elementref--------------x--ui-datapoint-longdescription--element--string-250-----------x--x--ui-datapoint-maximumvalue--element--decimalfloat--------------x--ui-datapoint-minimumvalue--element--decimalfloat--------------x--ui-datapoint-referenceperiod-description--element--string-120-----------x--x--ui-datapoint-referenceperiod-end--element--elementref--------------x--ui-datapoint-referenceperiod-start--element--elementref--------------x--ui-datapoint-responsible--element--elementref--------------x--ui-datapoint-responsiblename--element--string-120---------------x--ui-datapoint-targetvalue--element--decimalfloat--------------x--ui-datapoint-targetvalueelement--element--elementref--------------x--ui-datapoint-title--element--string-60-----------x--x--ui-datapoint-trend--element--elementref--------------x--ui-datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-downdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-isrelativedifference--element--boolean------true------x--ui-datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongdowndifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-strongupdifferenceelement--element--elementref--------------x--ui-datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-datapoint-trendcalculation-updifferenceelement--element--elementref--------------x--ui-datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-facet------exclude--element--boolean------true------x--ui-facet------id--element--string-120---------------x--ui-facet------importance--element--string-6----high--low--medium----------x--ui-facet------ismap--element--boolean------true------x--ui-facet------ispartofpreview--element--boolean------true------x--ui-facet------issummary--element--boolean------true------x--ui-facet------label--element--string-60-----------x--x--ui-facet------parentid--element--string-120---------------x--ui-facet------position--element--decimalfloat--------------x--ui-facet------purpose--element--string-40----filter--header--quick--create--quick--view--standard---standard------x--ui-facet------qualifier--element--string-120---------------x--ui-facet------targetelement--element--elementref--------------x--ui-facet------targetqualifier--element--string-120---------------x--ui-facet------type--element--string-40----address--reference--badge--reference--chart--reference--collection--contact--reference--datapoint--reference--fieldgroup--reference--headerinfo--reference--identification--reference--lineitem--reference--statusinfo--reference--url--reference----------x--ui-facet------url--element--elementref--------------x--ui-fieldgroup------criticality--element--elementref--------------x--ui-fieldgroup------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-fieldgroup------dataaction--element--string-120---------------x--ui-fieldgroup------exclude--element--boolean------true------x--ui-fieldgroup------grouplabel--element--string-60-----------x--x--ui-fieldgroup------iconurl--element--string-1024---------------x--ui-fieldgroup------importance--element--string-6----high--low--medium----------x--ui-fieldgroup------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-fieldgroup------label--element--string-60-----------x--x--ui-fieldgroup------position--element--decimalfloat--------------x--ui-fieldgroup------qualifier--element--string-120---------------x--ui-fieldgroup------semanticobjectaction--element--string-120---------------x--ui-fieldgroup------targetelement--element--elementref--------------x--ui-fieldgroup------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-fieldgroup------url--element--elementref--------------x--ui-fieldgroup------value--element--elementref--------------x--ui-fieldgroup------valuequalifier--element--string-120---------------x--ui-headerinfo-description-criticality--table-function-view--elementref--------------x--ui-headerinfo-description-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-description-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-description-label--table-function-view--string-60-----------x--x--ui-headerinfo-description-targetelement--table-function-view--elementref--------------x--ui-headerinfo-description-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-description-url--table-function-view--elementref--------------x--ui-headerinfo-description-value--table-function-view--elementref--------------x--ui-headerinfo-imageurl--table-function-view--elementref--------------x--ui-headerinfo-title-criticality--table-function-view--elementref--------------x--ui-headerinfo-title-criticalityrepresentation--table-function-view--string-12----without--icon--with--icon---without--icon------x--ui-headerinfo-title-iconurl--table-function-view--string-1024---------------x--ui-headerinfo-title-label--table-function-view--string-60-----------x--x--ui-headerinfo-title-targetelement--table-function-view--elementref--------------x--ui-headerinfo-title-type--table-function-view--string-40----standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-headerinfo-title-url--table-function-view--elementref--------------x--ui-headerinfo-title-value--table-function-view--elementref--------------x--ui-headerinfo-typeimageurl--table-function-view--string-1024---------------x--ui-headerinfo-typename--table-function-view--string-60-----------x--x--ui-headerinfo-typenameplural--table-function-view--string-60-----------x--x--ui-hidden--element--boolean------true------x--ui-identification------criticality--element--elementref--------------x--ui-identification------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-identification------dataaction--element--string-120---------------x--ui-identification------exclude--element--boolean------true------x--ui-identification------iconurl--element--string-1024---------------x--ui-identification------importance--element--string-6----high--low--medium----------x--ui-identification------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-identification------label--element--string-60-----------x--x--ui-identification------position--element--decimalfloat--------------x--ui-identification------semanticobjectaction--element--string-120---------------x--ui-identification------targetelement--element--elementref--------------x--ui-identification------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-identification------url--element--elementref--------------x--ui-identification------value--element--elementref--------------x--ui-identification------valuequalifier--element--string-120---------------x--ui-kpi------datapoint-criticality--element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------acceptancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------aggregationlevel-------element--elementref--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-constantthresholds------tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-deviationrangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-improvementdirection--element--string-8----maximize--minimize--target----------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangehighvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalitycalculation-tolerancerangelowvalue--element--decimalfloat--------------x--ui-kpi------datapoint-criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-kpi------datapoint-description--element--string-120-----------x--x--ui-kpi------datapoint-forecastvalue--element--decimalfloat--------------x--ui-kpi------datapoint-longdescription--element--string-250-----------x--x--ui-kpi------datapoint-maximumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-minimumvalue--element--decimalfloat--------------x--ui-kpi------datapoint-referenceperiod-description--element--string-120-----------x--x--ui-kpi------datapoint-referenceperiod-end--element--elementref--------------x--ui-kpi------datapoint-referenceperiod-start--element--elementref--------------x--ui-kpi------datapoint-responsible--element--elementref--------------x--ui-kpi------datapoint-responsiblename--element--string-120---------------x--ui-kpi------datapoint-targetvalue--element--decimalfloat--------------x--ui-kpi------datapoint-title--element--string-60-----------x--x--ui-kpi------datapoint-trend--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-downdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-isrelativedifference--element--boolean--------------x--ui-kpi------datapoint-trendcalculation-referencevalue--element--elementref--------------x--ui-kpi------datapoint-trendcalculation-strongdowndifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-strongupdifference--element--decimalfloat--------------x--ui-kpi------datapoint-trendcalculation-updifference--element--decimalfloat--------------x--ui-kpi------datapoint-valueformat-numberoffractionaldigits--element--integer--------------x--ui-kpi------datapoint-valueformat-scalefactor--element--decimalfloat--------------x--ui-kpi------datapoint-visualization--element--string-12----bullet--chart--donut--number--progress--rating----------x--ui-kpi------detail-alternativepresentationvariantqualifiers-------element--string-120---------------x--ui-kpi------detail-defaultpresentationvariantqualifier--element--string-120---------------x--ui-kpi------id--element--string-120---------------x--ui-kpi------qualifier--element--string-120---------------x--ui-kpi------selectionvariantqualifier--element--string-120---------------x--ui-lineitem------criticality--element--elementref--------------x--ui-lineitem------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-lineitem------dataaction--element--string-120---------------x--ui-lineitem------exclude--element--boolean------true------x--ui-lineitem------iconurl--element--string-1024---------------x--ui-lineitem------importance--element--string-6----high--low--medium----------x--ui-lineitem------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-lineitem------label--element--string-60-----------x--x--ui-lineitem------position--element--decimalfloat--------------x--ui-lineitem------qualifier--element--string-120---------------x--ui-lineitem------semanticobjectaction--element--string-120---------------x--ui-lineitem------targetelement--element--elementref--------------x--ui-lineitem------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-lineitem------url--element--elementref--------------x--ui-lineitem------value--element--elementref--------------x--ui-lineitem------valuequalifier--element--string-120---------------x--ui-masked--element--boolean------true------x--ui-multilinetext--element--boolean------true------x--ui-presentationvariant------groupby-------table-function-view--elementref--------------x--ui-presentationvariant------id--table-function-view--string-120---------------x--ui-presentationvariant------includegrandtotal--table-function-view--boolean------true------x--ui-presentationvariant------initialexpansionlevel--table-function-view--integer--------------x--ui-presentationvariant------maxitems--table-function-view--integer--------------x--ui-presentationvariant------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------requestatleast-------table-function-view--elementref--------------x--ui-presentationvariant------selectionfieldsqualifier--table-function-view--string-120---------------x--ui-presentationvariant------sortorder------by--table-function-view--elementref--------------x--ui-presentationvariant------sortorder------direction--table-function-view--string-4----asc--desc----------x--ui-presentationvariant------text--table-function-view--string-60-----------x--x--ui-presentationvariant------totalby-------table-function-view--elementref--------------x--ui-presentationvariant------total-------table-function-view--elementref--------------x--ui-presentationvariant------visualizations------element--table-function-view--elementref--------------x--ui-presentationvariant------visualizations------qualifier--table-function-view--string-120---------------x--ui-presentationvariant------visualizations------type--table-function-view--string-40----as--chart--as--datapoint--as--lineitem----------x--ui-selectionfield------element--element--elementref--------------x--ui-selectionfield------exclude--element--boolean------true------x--ui-selectionfield------position--element--decimalfloat--------------x--ui-selectionfield------qualifier--element--string-120---------------x--ui-selectionpresentationvariant------id--table-function-view--string-120---------------x--ui-selectionpresentationvariant------presentationvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------qualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------selectionvariantqualifier--table-function-view--string-120---------------x--ui-selectionpresentationvariant------text--table-function-view--string-60-----------x--x--ui-selectionvariant------filter--table-function-view--string-1024---------------x--ui-selectionvariant------id--table-function-view--string-120---------------x--ui-selectionvariant------parameters------name--table-function-view--parameterref--------------x--ui-selectionvariant------parameters------value--table-function-view--string-1024---------------x--ui-selectionvariant------qualifier--table-function-view--string-120---------------x--ui-selectionvariant------text--table-function-view--string-60-----------x--x--ui-statusinfo------criticality--element--elementref--------------x--ui-statusinfo------criticalityrepresentation--element--string-12----without--icon--with--icon---without--icon------x--ui-statusinfo------dataaction--element--string-120---------------x--ui-statusinfo------exclude--element--boolean------true------x--ui-statusinfo------iconurl--element--string-1024---------------x--ui-statusinfo------importance--element--string-6----high--low--medium----------x--ui-statusinfo------invocationgrouping--element--string-12----change--set--isolated---isolated------x--ui-statusinfo------label--element--string-60-----------x--x--ui-statusinfo------position--element--decimalfloat--------------x--ui-statusinfo------semanticobjectaction--element--string-120---------------x--ui-statusinfo------targetelement--element--elementref--------------x--ui-statusinfo------type--element--string-40----as--address--as--chart--as--contact--as--datapoint--for--action--for--intent--based--navigation--standard--with--intent--based--navigation--with--navigation--path--with--url---standard------x--ui-statusinfo------url--element--elementref--------------x--ui-statusinfo------value--element--elementref--------------x--ui-statusinfo------valuequalifier--element--string-120---------------x--ui-textarrangement--element-view--string-13----text--first--text--last--text--only--text--separate----------x--continue---example--exa-gif--example----abap-cds--annotation-array--javascript-call-link---abencds-annotation-array-abexa-htm-----------abencds-annotation-array-abexa-htm-------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--javascript-call-link---abenabap-dictionary-htm---------abap-cds-in-abap-dictionary--javascript-call-link---abencds-htm---------abap-cds---annotations--javascript-call-link---abencds-annotations-htm---------abap-cds---sap-annotations--javascript-call-link---abencds-annotations-sap-htm---------abap-cds---framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm---------abap-cds---framework-specific-annotation-syntax--javascript-call-link---abencds-annotations-frmwrk-tables-htm---------abap-cds--annotation-array--this-example-shows-how-an--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---is-evaluated-in-a-piece-of-ddl-source-code---source-code--report-demo--cds--annotation--array--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------cl--dd--ddl--analyze--get--annotations--------exporting-ddlnames---value-------demo--cds--annotation--array----------------------leaves--only---abap--true-------importing-----------------fieldannos----data-annos---------cl--demo--output--display--annos-----endmethod--endclass--start-of-selection----demo--main------description--the-program-reads-the-element-annotations-of-the-following-cds-view---AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Views / ABAP CDS - Client Handling in CDS Views

**Files**: 4 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_annotations_frmwrk_tables.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk_tables.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, data_source

**Files**: 3 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, ASSOCIATION

**Files**: 5 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, select_list

**Files**: 4 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS- SELECT, clauses

**Files**: 5 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - aggr_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - case_expr

**Files**: 3 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cast_expr

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cond_expr

**Files**: 15 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - EXTEND VIEW

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

**Files**: 2 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_f1_param.htm

> **📖 Official SAP Documentation**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines an input parameter with the name pname in the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry").

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each input parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm).

A CDS entity can be used with input parameters as one of the following:

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement from Open SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using a view with parameters (both within the CDS DDL in ABAP CDS and in Open SQL). In Open SQL , an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make Open SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)



**📖 Source**: [abencds_f1_param.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm)

### abencds_f1_parameter_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of an input parameter [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") or a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as a parameter name. Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1--------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls submission of parameters to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") to the input parameter for implicit parameter passing in Open SQL.

#CLIENT:
[sy-mandt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_DATE:
[sy-datum](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_TIME:
[sy-uzeit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#SYSTEM\_LANGUAGE:
[sy-langu](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)
#USER:
[sy-uname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm)

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. Open SQL always passes (implicitly) the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm). The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, Open SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm).

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


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, access_rules

**Files**: 6 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition

Included pages: 9



**📖 Source**: [abencds_f1_parameter_annotations.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)

### abencds_dcl_role_conditions.htm

> **📖 Official SAP Documentation**: [abencds_dcl_role_conditions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) → 

ABAP CDS - DEFINE ROLE, condition

Syntax

... [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)*|* [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)*|*[user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)  ...

Effect

Part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). Three categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) that associate an element of a CDS entity with [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm) (which are based on [authorization objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry")).

-   User conditions [user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm). The following restrictions apply:

-   Only certain [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm) are permitted.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry").

The result of a condition is true or false.

Notes

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases.

-   The way an access condition defined in a CDS role for a CDS entity is characterized when the CDS entity is accessed using Open SQL can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted). This makes it impossible to detect the access condition in the SQL trace.

Continue
[ABAP CDS - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
[ABAP CDS - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
[ABAP CDS - DEFINE ROLE, user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)
[ABAP CDS - DEFINE ROLE, Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)



**📖 Source**: [abencds_dcl_role_conditions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm)

### abencds_f1_cond_literal.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, literal\_condition

Syntax

... *{* element [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) *\[*'*\]*value*\[*'*\]* *}* ...
  *|* *{* element *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element IS *\[*NOT*\]* NULL *}* ...

Effect

Literal condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.

-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc’ in quotation marks for the placeholders.

-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").

The element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) or [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) or as individual conditions.

-   As with a CDS role that contains a [full control rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The character # is recommended as the escape character esc for the operator LIKE.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_literal. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITERAL'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_literal
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[ABAP CDS - DEFINE ROLE, operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)



**📖 Source**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)

### abencds_f1_dcl_cond_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_cond_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) →  [ABAP CDS - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) → 

ABAP CDS - DEFINE ROLE, operator

Syntax

... operator ...

Effect

Operator of a comparison expression in a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") in the definition of a role using [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The operator compares a left side and a right side. The left side is always an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

operator

True if

\=

The value of the left side is equal to the value of the right side.

<>

The value of the left side is not equal to the value of the right side.

<

The value of the left side is less than the value of the right side.

\>

The value of the left side is greater than the value of the right side.

<=

The value of the left side is less than or equal to the value of the right side.

\>=

The value of the left side is greater than or equal to the value of the right side.

?=

Like the operator \=. The condition is also met, however, if the value of the left side is the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or a type-dependent initial value.



**📖 Source**: [abencds_f1_dcl_cond_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)

### abencds_f1_cond_literal.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, literal\_condition

Syntax

... *{* element [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) *\[*'*\]*value*\[*'*\]* *}* ...
  *|* *{* element *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element IS *\[*NOT*\]* NULL *}* ...

Effect

Literal condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.

-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc’ in quotation marks for the placeholders.

-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").

The element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) or [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) or as individual conditions.

-   As with a CDS role that contains a [full control rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The character # is recommended as the escape character esc for the operator LIKE.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_literal. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITERAL'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_literal
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[ABAP CDS - DEFINE ROLE, operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)



**📖 Source**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)

### abencds_f1_cond_pfcg.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in the [authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or their type-dependent initial value.

The operator [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check.htm).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)



**📖 Source**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)

### abencds_f1_dcl_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) →  [ABAP CDS - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) → 

ABAP CDS - DEFINE ROLE, Mapping of Field Values

Elements of CDS entities are associated with an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") itself is generated from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the authorization object. Here, comparisons of the content of CDS elements with field values of the authorizations are created. The following points should be noted.

-   [Invalid Values](#abencds-f1-dcl-pfcg-mapping-1--------wildcard-characters---@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_2)

Invalid Values

The field values of authorizations are saved as text fields with length 40. For comparisons, they must be convertible to the [data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm) of the CDS elements:

-   The rules for [lossless assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") must be followed. If this is not possible, the field value is ignored.

-   If an authorization requests a pattern comparison using a wildcard character (\*), the data type of the CDS element must be character-like.

If a field value cannot be converted, the field value is ignored.

Notes

-   Field values that are ignored are, for example, field values that are longer than the CDS element or field values with a non-numeric content for a numeric CDS element.

-   If field values are ignored, CDS access control may block access completely.

-   Ignored field values are not logged, which means that they cannot be known to the system administrator or to the user.

Wildcard Characters

If a field value contains a wildcard character (\*) as its final character, it is used to create a LIKE condition in which the wildcard character \* is replaced by the SQL wildcard character %.

If the field value contains the SQL wildcard characters % and \_, the escape character # is assigned to them implicitly. This means that CDS access control checks the characters % and \_ in field values like regular characters.

Example

The field value "10%\*" produces the condition LIKE '10#%%' ESCAPE '#'.



**📖 Source**: [abencds_f1_dcl_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)

### abencds_f1_cond_pfcg.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in the [authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or their type-dependent initial value.

The operator [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check.htm).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)



**📖 Source**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)

### abencds_f1_cond_user.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_user.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, user\_condition

Syntax

... element [\=*|*<>*|*?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) ASPECT user ...

Effect

User condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). In a user condition, the predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_name_glosry.htm "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), [<>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), as in a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

Notes

-   User conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm).

-   A user condition acts like a comparison with the session variable [$session.user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry"). Session variables cannot currently be used in the DCL.

Example

The following CDS view contains an element uname, which contains a user name:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_USR'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_user
  as select from
    abdocmode
    {
      key uname,
      key langu,
          flag
    };  

The following role can be defined for the view:

@MappingRole: true
define role demo\_cds\_role\_user {  
  grant select on demo\_cds\_auth\_user
    where
      uname ?= aspect user; }

The role grants a user AS ABAP access to his or her own entries in the database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").



**📖 Source**: [abencds_f1_cond_user.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)

### abencds_f1_dcl_cond_data_types.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_cond_data_types.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) of an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") of declarable operand cannot all the [predefined data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). Only the following types are permitted:

-   Numeric Types

-   INT1, INT2, INT4, INT8

-   DEC

-   DF16\_DEC, DF16\_RAW

-   DF34\_DEC, DF34\_RAW

-   Character-Like Types

-   CHAR

-   SSTRING

-   Special Types

-   DATS, TIMS

-   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with CDS elements of the permitted data types and an appropriate [mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) takes place.


---


## ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition

**Files**: 9 | **Difficulty**: advanced

# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition

Included pages: 9



**📖 Source**: [abencds_f1_dcl_cond_data_types.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)

### abencds_dcl_role_conditions.htm

> **📖 Official SAP Documentation**: [abencds_dcl_role_conditions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) → 

ABAP CDS - DEFINE ROLE, condition

Syntax

... [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)*|* [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)*|*[user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)  ...

Effect

Part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). Three categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) that associate an element of a CDS entity with [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm) (which are based on [authorization objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry")).

-   User conditions [user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm). The following restrictions apply:

-   Only certain [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm) are permitted.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry").

The result of a condition is true or false.

Notes

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases.

-   The way an access condition defined in a CDS role for a CDS entity is characterized when the CDS entity is accessed using Open SQL can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted). This makes it impossible to detect the access condition in the SQL trace.

Continue
[ABAP CDS - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
[ABAP CDS - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
[ABAP CDS - DEFINE ROLE, user\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)
[ABAP CDS - DEFINE ROLE, Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)



**📖 Source**: [abencds_dcl_role_conditions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm)

### abencds_f1_cond_literal.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, literal\_condition

Syntax

... *{* element [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) *\[*'*\]*value*\[*'*\]* *}* ...
  *|* *{* element *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element IS *\[*NOT*\]* NULL *}* ...

Effect

Literal condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.

-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc’ in quotation marks for the placeholders.

-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").

The element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) or [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) or as individual conditions.

-   As with a CDS role that contains a [full control rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The character # is recommended as the escape character esc for the operator LIKE.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_literal. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITERAL'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_literal
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[ABAP CDS - DEFINE ROLE, operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)



**📖 Source**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)

### abencds_f1_dcl_cond_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_cond_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) →  [ABAP CDS - DEFINE ROLE, literal\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) → 

ABAP CDS - DEFINE ROLE, operator

Syntax

... operator ...

Effect

Operator of a comparison expression in a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") in the definition of a role using [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The operator compares a left side and a right side. The left side is always an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

operator

True if

\=

The value of the left side is equal to the value of the right side.

<>

The value of the left side is not equal to the value of the right side.

<

The value of the left side is less than the value of the right side.

\>

The value of the left side is greater than the value of the right side.

<=

The value of the left side is less than or equal to the value of the right side.

\>=

The value of the left side is greater than or equal to the value of the right side.

?=

Like the operator \=. The condition is also met, however, if the value of the left side is the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or a type-dependent initial value.



**📖 Source**: [abencds_f1_dcl_cond_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)

### abencds_f1_cond_literal.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, literal\_condition

Syntax

... *{* element [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) *\[*'*\]*value*\[*'*\]* *}* ...
  *|* *{* element *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element IS *\[*NOT*\]* NULL *}* ...

Effect

Literal condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.

-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc’ in quotation marks for the placeholders.

-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").

The element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) or [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm) or as individual conditions.

-   As with a CDS role that contains a [full control rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The character # is recommended as the escape character esc for the operator LIKE.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_literal. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITERAL'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_literal
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[ABAP CDS - DEFINE ROLE, operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm)



**📖 Source**: [abencds_f1_cond_literal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm)

### abencds_f1_cond_pfcg.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in the [authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or their type-dependent initial value.

The operator [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check.htm).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)



**📖 Source**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)

### abencds_f1_dcl_pfcg_mapping.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) →  [ABAP CDS - DEFINE ROLE, pfcg\_condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) → 

ABAP CDS - DEFINE ROLE, Mapping of Field Values

Elements of CDS entities are associated with an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). The [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") itself is generated from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the authorization object. Here, comparisons of the content of CDS elements with field values of the authorizations are created. The following points should be noted.

-   [Invalid Values](#abencds-f1-dcl-pfcg-mapping-1--------wildcard-characters---@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_2)

Invalid Values

The field values of authorizations are saved as text fields with length 40. For comparisons, they must be convertible to the [data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm) of the CDS elements:

-   The rules for [lossless assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") must be followed. If this is not possible, the field value is ignored.

-   If an authorization requests a pattern comparison using a wildcard character (\*), the data type of the CDS element must be character-like.

If a field value cannot be converted, the field value is ignored.

Notes

-   Field values that are ignored are, for example, field values that are longer than the CDS element or field values with a non-numeric content for a numeric CDS element.

-   If field values are ignored, CDS access control may block access completely.

-   Ignored field values are not logged, which means that they cannot be known to the system administrator or to the user.

Wildcard Characters

If a field value contains a wildcard character (\*) as its final character, it is used to create a LIKE condition in which the wildcard character \* is replaced by the SQL wildcard character %.

If the field value contains the SQL wildcard characters % and \_, the escape character # is assigned to them implicitly. This means that CDS access control checks the characters % and \_ in field values like regular characters.

Example

The field value "10%\*" produces the condition LIKE '10#%%' ESCAPE '#'.



**📖 Source**: [abencds_f1_dcl_pfcg_mapping.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)

### abencds_f1_cond_pfcg.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for an [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") in the [authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") or their type-dependent initial value.

The operator [NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_trace_glosry.htm "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [user conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check.htm).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm)



**📖 Source**: [abencds_f1_cond_pfcg.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm)

### abencds_f1_cond_user.htm

> **📖 Official SAP Documentation**: [abencds_f1_cond_user.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, user\_condition

Syntax

... element [\=*|*<>*|*?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm) ASPECT user ...

Effect

User condition as part of an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). In a user condition, the predefined [aspect](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_aspect_glosry.htm "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_name_glosry.htm "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), [<>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm), as in a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_expression.htm).

Notes

-   User conditions can be combined within an access rule using [literal conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) and [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm).

-   A user condition acts like a comparison with the session variable [$session.user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry"). Session variables cannot currently be used in the DCL.

Example

The following CDS view contains an element uname, which contains a user name:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_USR'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_user
  as select from
    abdocmode
    {
      key uname,
      key langu,
          flag
    };  

The following role can be defined for the view:

@MappingRole: true
define role demo\_cds\_role\_user {  
  grant select on demo\_cds\_auth\_user
    where
      uname ?= aspect user; }

The role grants a user AS ABAP access to his or her own entries in the database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").



**📖 Source**: [abencds_f1_cond_user.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_user.htm)

### abencds_f1_dcl_cond_data_types.htm

> **📖 Official SAP Documentation**: [abencds_f1_dcl_cond_data_types.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_dcl_cond_data_types.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_cond_data_types.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) of an [access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) of a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") of declarable operand cannot all the [predefined data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). Only the following types are permitted:

-   Numeric Types

-   INT1, INT2, INT4, INT8

-   DEC

-   DF16\_DEC, DF16\_RAW

-   DF34\_DEC, DF34\_RAW

-   Character-Like Types

-   CHAR

-   SSTRING

-   Special Types

-   DATS, TIMS

-   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") are compared with CDS elements of the permitted data types and an appropriate [mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_pfcg_mapping.htm) takes place.


---
