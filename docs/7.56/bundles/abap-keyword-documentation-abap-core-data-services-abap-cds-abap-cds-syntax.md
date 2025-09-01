# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Syntax

Included pages: 3


### abencds_syntax.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) → 

ABAP CDS - Syntax

The syntax of the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") and the [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry") in ABAP CDS comprises elements of the general [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") [DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_glosry.htm "Glossary Entry") and [DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_glosry.htm "Glossary Entry") and also makes it possible to define annotations and CDS associations. The syntax and semantics basically match the general [CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_glosry.htm "Glossary Entry") concept.

-   [ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_general_syntax_rules.htm)
-   [ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_language_elements.htm)

Continue
[ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_general_syntax_rules.htm)
[ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_language_elements.htm)


### abencds_general_syntax_rules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_syntax.htm) → 

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry"), and [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") for defining [CDS objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") are as follows:

-   Keywords
    -   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.
-   Names
    -   Names are not case-sensitive.
    -   A name must contain at least 2 characters but no more than 30 characters.
    -   A name can consist of letters, numbers, underscores (\_), and slashes (/).
    -   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry").
    -   The separator for names with multiple parts is a period (.). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.
    -   The following CDS keywords cannot be used as names:
        
        ALL, AND, AS, ASSOCIATION, AVG, CASE, CAST, COUNT, CROSS, DISTINCT, EXISTS, EXTEND, EXTENSION, FROM, FULL, GROUP, HAVING, INNER, JOIN, KEY, LEFT, MAX, MIN, NOT, NULL, ON, OR, ORDER, RIGHT, SELECT, SUM, UNION, VIEW, WHEN, WHERE
        
-   Literals
    -   In general ABAP CDS, [untyped](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuntyped_literal_glosry.htm "Glossary Entry") numeric and untyped character literals are available:
        
        An untyped character literal is a character string enclosed in single quotation marks (').
        An untyped numeric literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit.
        
    -   In [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [typed literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyped_literal_glosry.htm "Glossary Entry") are available for [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and [CDS hierarchies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). Typed literals are available for almost all built-in ABAP Dictionary data types. A typed literal is specified by writing an ABAP Dictionary data type with the type namespace abap. as prefix followed by the character-like representation of the value in single quotation marks (').
        
        Example: abap.dats'20200101'
        
    -   Escaping literals in ABAP CDS:
        
        A single quote (') is escaped with a single quote:'...''...'.
        A backslash (\\) is escaped with a backslash: '...\\\\...'
        
        Exception: Escaping with a backslash is not supported in [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
        
-   Comments
    -   Two forward slashes (//) introduce a comment, which continues until the end of the line.
    -   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.
-   Separators
    -   Statements can be closed using a semicolon (;). Sometimes this is mandatory.
-   Protected words
    -   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the DDIC database table TRESE.

Hints

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.
-   In [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS data definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_definition_glosry.htm "Glossary Entry") and [DCL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), in [DDLX source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and in [BDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_source_code_glosry.htm "Glossary Entry") for behavior definitions.

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.
-   MYVIEW, myview, and myView all identify the same operand.
-   0.5 is a valid numeric literal, but .5 is not.


### abencds_language_elements.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_syntax.htm) → 

ABAP CDS - Language Elements

The following sections summarize the language elements of the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry"), and [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry"), arranged by topics.

-   [DDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_1)
    -   [CDS Annotation Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_2)
    -   [CDS Views](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_3)
    -   [CDS Entity Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_4)
    -   [CDS Table Functions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_5)
    -   [CDS Hierarchies](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_6)
    -   [CDS Custom Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_7)
    -   [CDS Abstract Entities](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_8)
    -   [CDS Metadata Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_9)
-   [BDL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_10)
    -   [CDS Behavior Definitions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_11)
    -   [BDEF Extensions](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_12)
-   [DCL](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_13)
    -   [CDS Roles](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_14)
    -   [CDS access policy](#@@ITOC@@ABENCDS_LANGUAGE_ELEMENTS_15)

In addition to the language elements shown here, CDS source code can also contain [annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) with metadata.

DDL

CDS Annotation Definitions

Keywords and Additions

Language Element

Meaning

[define annotation ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation.htm)

Defines a [CDS annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[enum](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm)

Defines enumeration symbols of a [CDS annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[default](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm)

Defines default values of a [CDS annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry")

[array of](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_arr.htm)

Defines an [annotation arras](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_array_glosry.htm "Glossary Entry").

CDS Views

Keywords and Additions

Language Element

Meaning

[DEFINE VIEW...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm)[AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm)

Defines a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

[DEFINE VIEW ENTITY...AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm)

Defines a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry")

[DEFINE VIEW ENTITY... AS PROJECTION ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_as_projection.htm)

Defines a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry")

[ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm)

Defines a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") as a [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry")

[PROVIDER CONTRACT TRANSACTIONAL\_QUERY
                 ANALYTICAL\_QUERY
                 { }](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm)

Specifies the scenario in which a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") is used.

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm)

Defines input parameters of a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry")

[SELECT *\[*DISTINCT*\]* ... FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

SELECT statement of a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry")

[INNER JOIN ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v2.htm)

Inner join in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[LEFT*|*RIGHT OUTER JOIN ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v2.htm)

Outer join in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[ASSOCIATION ... TO ... AS ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v2.htm)

Defines a CDS association for a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[REDEFINE ASSOCIATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_redefined_assoc.htm)

Redefines a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") in a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry").

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v2.htm)

Specifies a default filter condition of a CDS association

[1:](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_card_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm)

[INNER ... WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm)

[LEFT OUTER ... WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_jointype_v2.htm)

Attribute of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm)

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_v2.htm)

Defines a CDS composition

[ASSOCIATION TO PARENT ... AS ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_to_parent_assoc_v2.htm)

Defines a CDS to-parent association

[KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm)

Defines an element of a [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm) as key field

[AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm)

Defines an alias name for an element of a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm) list

[$EXTENSION.\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm)

Elements of an extension in a [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm) (only available in CDS DDIC-based views)

[$PROJECTION.\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm)

Allows to reuse expressions defined in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in an operand position of the SELECT list of the same CDS view entity.

[WHERE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm)

WHERE clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[GROUP BY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm)

GROUP-BY clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[HAVING ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm)

HAVING clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[EXCEPT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_except_v2.htm)

EXCEPT clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm), currently only available for [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

[INTERSECT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_intersect_v2.htm)

INTERSECT clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm), currently only available for [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

[UNION *\[*ALL*\]* ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v2.htm)

UNION clause of a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[VIRTUAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm)

Defines a new element of a CDS projection view

[LOCALIZED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm)

Defines the [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry") of a text association

[REDIRECTED TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element.htm)

Redirects a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") in a CDS projection view to a projection of the association target.

[REDIRECTED TO COMPOSITION CHILD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm)

Redirects a [CDS composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") in a CDS projection view to a projection of the composition target.

[REDIRECTED TO PARENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_expose_assoc.htm)

Redirects a [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") in a CDS projection view to a projection of the association target.

Expressions

Operators

Meaning

[MAX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), [MIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), [AVG *\[*AS dtype*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), [SUM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm), [COUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm)

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[+](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm), [\-](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm), [\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm), [/](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm)

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), [WHEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), [THEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), [ELSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm), [END](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm)

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[CAST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cast_expression_v2.htm)

Cast expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[\=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [<>](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [<](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [\>](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [<=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [\>=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v2.htm), [BETWEEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_betw_v2.htm), [LIKE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_like_v2.htm), [IS NULL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_null_v2.htm), [NOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm), [AND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm), [OR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm)

Relational expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

Built-In Functions

Function

Meaning

[ABS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [CEIL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [DIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [DIVISION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [FLOOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm), [ROUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm)

Numeric function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[CONCAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [INSTR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [LEFT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [LENGTH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [LPAD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [LOWER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [LTRIM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [RIGHT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [RPAD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [RTRIM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [SUBSTRING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm), [UPPER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm)

String function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[BINTOHEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_types_v2.htm), [HEXTOBIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_types_v2.htm)

Byte string function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[COALESCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_coalesce_expression_v2.htm)

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_types_v2.htm), [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm), [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v1.htm), [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm), [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm)

Conversion functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v2.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v2.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v2.htm), [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v2.htm)

Date function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[TIMS\_IS\_VALID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_time_functions_v2.htm)

Time function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[TSTMP\_IS\_VALID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_CURRENT\_UTCTIMESTAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v2.htm), [TSTMP\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v2.htm)

Time stamp function in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[ABAP\_SYSTEM\_TIMEZONE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timezone_functions_v2.htm), [ABAP\_USER\_TIMEZONE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timezone_functions_v2.htm)

Time zone functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

[TSTMP\_TO\_DATS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v2.htm), [TSTMP\_TO\_TIMS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v2.htm), [TSTMP\_TO\_DST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v2.htm), [DATS\_TIMS\_TO\_TSTMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v2.htm)

Date/time conversions functions in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)

CDS Entity Extensions

Keywords and Additions

Language Element

Meaning

[EXTEND VIEW ENTITY...WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm)

Extends a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") using a [CDS view entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry")

EXTEND CUSTOM ENTITY...WITH

Extends a [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") using a [CDS custom entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cus_entity_extend_glosry.htm "Glossary Entry")

[EXTEND ABSTRACT ENTITY...WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_abstract_entity.htm)

Extends a [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") using a [CDS abstract entity extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abs_entity_extend_glosry.htm "Glossary Entry")

[EXTEND VIEW ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view.htm)[WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view.htm)

Extends a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") using a [CDS view extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extend_glosry.htm "Glossary Entry")

CDS Table Functions

Keywords and Additions

Language Element

Meaning

[DEFINE TABLE FUNCTION ... RETURNS ... IMPLEMENTED BY METHOD ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_table_function.htm)

Defines a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry")

CDS Hierarchies

Keywords and Additions

Language Element

Meaning

[DEFINE HIERARCHY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_hiera_parameter_list.htm)

Defines input parameters of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[AS PARENT CHILD HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") using parent-child relationships

[SOURCE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Specifies the data source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[CHILD TO PARENT ASSOCIATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[PERIOD FROM ... TO ... VALID FROM ... TO ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines a [temporal hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry")

[DIRECTORY ... FILTER BY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Specifies a condition for the source of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[START WHERE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Specifies the start condition of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[SIBLINGS ORDER BY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Specifies the sort order of [sibling nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensibling_node_glosry.htm "Glossary Entry") in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[DEPTH ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Delimits the [hierarchy levels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[NODETYPE ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines an element as a node type for a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[MULTIPLE PARENTS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if multiple [parent nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[ORPHANS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [orphan nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenorphan_node_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[CYCLES ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Defines the behavior that applies if [node cycles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennode_cycle_glosry.htm "Glossary Entry") are specified in a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

[GENERATE SPANTREE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm)

Reduces a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") to a tree

CDS Custom Entities

Keywords and Additions

Language Element

Meaning

[DEFINE CUSTOM ENTITY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity

[ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm)

Defines a CDS custom entity as a root entity

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_parameter_list.htm)

Defines input parameters of a CDS custom entity

[ASSOCIATION ... TO ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_association.htm)[ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm) of a CDS custom entity.

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_association.htm)

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_composition.htm)

Defines a CDS composition in the element list of a CDS custom entity

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_tp_association.htm)

Defines a CDS to-parent association in the element list of a CDS custom entity

CDS Abstract Entities

Keywords and Additions

Language Element

Meaning

[DEFINE ABSTRACT ENTITY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_abstract_entity.htm)

Defines an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

[ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_abstract_entity.htm)

Defines a CDS abstract entity as a root entity

[WITH PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_parameter_list.htm)

Defines input parameters of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

[ASSOCIATION ... TO ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_association.htm)

Defines a CDS association in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

[WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_association.htm)

Specifies a default filter condition of a CDS association

[COMPOSITION ... OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_absent_composition.htm)

Defines a CDS composition in the element list of a CDS abstract entity

[ASSOCIATION TO PARENT ... ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_absent_to_parent_assoc.htm)

Defines a CDS to-parent association in the element list of a CDS abstract entity

CDS Metadata Extensions

Keywords and Additions

Language Element

Meaning

[ANNOTATE ENTITY*|*VIEW ... WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry")

[VARIANT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)

Joins a [CDS metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") with a [CDS variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_variant_glosry.htm "Glossary Entry")

[PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_para_list.htm)

Extends the annotations of the input parameters of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry")

BDL

CDS Behavior Definitions

CDS behavior definition header

Language Element

Meaning

[managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)

Defines a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")

[unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)

Defines an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")

[abstract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)

Defines an abstract BDEF

[projection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm)

Defines a projection RAP BO

[implementation in class *\[*unique*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_in_class_unique.htm)

Class for manual method implementation

[strict](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm)

Enables BDEF strict mode

[extensible *{*
*\[*with validations on save*\]*
*\[*with determinations on save*\]*
*\[*with determinations on modify*\]*
*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extensible.htm)

Allows [BDEF extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_extension_glosry.htm "Glossary Entry") for the indicated entities

[with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm)

Enables the draft concept for a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry")

[use draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm)

Reuse of [RAP draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") in a [CDS projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

[with privileged mode disabling *\[*base context *\[*and*\]**\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm)

Enables privileged access to a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry")

[foreign entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_foreign.htm)

Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

Entity behavior definition

Language Element

Meaning

[define behavior for...alias](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm)

Defines an [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry")

Authorization context definition

Language Element

Meaning

[define authorization context ...
*\[*for disable *{*modify*|*read*|*modify,read*}**\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm)

Defines an [authorization context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_auth_context_glosry.htm "Glossary Entry")

Entity behavior characteristics

Language Element

Meaning

[persistent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_persistent_table.htm)

Defines a persistent database table for storing the data changes that result from transactional behavior.

[draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_table.htm)

Defines the [draft database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry") used to store draft data.

[with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm), [with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm), [and cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm)

User-defined saving strategy for managed RAP BOs

[etag master](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm), [etag dependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm), [total etag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm)

Defines an ETag field for optimistic concurrency control

[use etag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm)

Reuse of ETag fields for optimistic concurrency control in a [CDS projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

[lock master *\[*unmanaged*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm), [lock dependent,](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm) [lock:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm)

Defines an exclusive lock that enables pessimistic concurrency control

[authorization master *{* ( global ) *|* ( instance ) *|* ( global, instance ) *}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm), [authorization dependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm), [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm), [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm)

Defines an authorization concept for a business object to protect it against unauthorized access to data.

[early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm)

Defines unmanaged [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry") for all primary key fields of a business object entity.

[late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm)

Enables gapless assignment for unique keys when creating new entity instances.

Entity behavior body

Language Element

Meaning

[field *{* *\[*(readonly)*\]*
      *|**\[*(mandatory)*\]*
       *|**\[*(features:instance)*\]*
      *|**\[*(mandatory:create)*\]*
      *|**\[*(readonly:update)*\]*
      *|**\[*(numbering:managed)*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm)
*|* *\[*([suppress)*\]* *}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm)

Defines field additions

[field (modify)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)

Augmentation of a [CDS virtual element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in a [CDS projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

[group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_grouping.htm)

Splits the implementation-relevant parts of a business object's logic into multiple groups to allow simultaneous work.

[create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm)

Enables [CRUD operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") for a RAP business object.

[use](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm)

Reuse of [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") in a [CDS projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

[association ... abbreviation ...
*\[*with draft*\]* *\[*without response*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm)

Enables read-by-association and create-by-association operations for associations.

[*\[*static*\]**\[*factory*\]**\[*static factory*\]* action ... *\[*external*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm)

Defines an action

[*\[*static*\]* function ... *\[*external*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm)

Defines a function

[determine action ... *\[*always*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm)

Defines a [determine action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry") that allows a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to execute [determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_validation_glosry.htm "Glossary Entry") on request.

   [draft action Edit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)
*|*  [draft action Activate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)
*|*  [draft action Discard](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)
*|*  [draft action Resume *\[*with additional implementation*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)
*|*  [draft determine action Prepare](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)

Defines a draft action in a draft-enabled scenario

[parameter ... *\[*$self*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm)

Defines an input parameter for an action or function

[result *\[*selective*\]* \[cardinality\] *{* $self *|* entity *}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm)

Defines an output parameter for an action or function

[mapping for ... *\[*control ... *\]* *\[*corresponding*\]* *\[*except*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm)

Maps field names from database tables to field names from the current data model

[validation ... on save { ... }](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm)

Defines a validation which is called when during the save sequence.

[determination ... on save { ... } *|* on modify { ... }](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm)

Defines a determination which is called during the save sequence or immediately after data has been changed.

[features: global, features: instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)

RAP BO operation addition. Can be used to define global or instance feature control for a RAP BO operation.

[internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)

Defines a RAP BO operation as internal.

[precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)

Prevents illegal changes from reaching the application buffer by prechecking modify operations.

[augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)

Augments modify requests on the projection layer in a [CDS projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Abstract behavior definitions

Language Element

Meaning

[with hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_abstract_header.htm)

Causes the construction of a new kind of BDEF derived type. Only available in abstract BDEFs.

[with control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_abstract.htm)

Optional addition of the define behavior statement that is only available in abstract BDEFs. Adds the %control structure to the corresponding derived type structure.

[scalar entity ... field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_abstract.htm)

Alternative to an entity behavior definition that is only available in abstract BDEFs. Integrates a node of the CDS composition tree into the hierarchical derived type of the abstract BDEF as a scalar type.

[association ... *\[*with hierarchy*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association_abstract.htm)

In an abstract BDEF, an association can be defined with the optional addition with hierarchy. This addition is available for to-parent associations and cross-BO associations to include them several times in the type structure.

[deep mapping for ... *\[*corresponding*\]* *\[*sub*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping_abstract.htm)

Defines a deep mapping in an abstract BDEF.

BDEF Extensions

Keywords and Additions

Language Element

Meaning

...

...

DCL

CDS Roles

Keywords and Additions

Language Element

Meaning

[DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm)

Defines a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[GRANT SELECT ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_rules.htm)

Defines an access rule in a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[COMBINATION MODE OR*|*AND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm)

Specifies multiple access rules for the same CDS entity

[REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm)

Specifies the only existing access rule for the CDS entity

[WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm)

WHERE clause in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[AND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm), [OR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm), [NOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm)

Boolean operator in a conditional access rule of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_inherited_rule.htm)

Defines an inherited access rule of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") (obsolete)

[ASPECT pfcg\_auth](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_pfcg.htm),
[ASPECT user](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_user.htm)

Conditions for [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_pfcg_mapping.htm)

Specifies a [PFCG mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in a [PFCG condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

[INHERIT ... FOR GRANT SELECT ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit.htm)

Defines an [inheritance condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninherit_condition_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry")

...[\=*|*<>*|*<*|*\>*|*<=*|*\>=*|*?=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_cond_expression.htm)*|*[BETWEEN*|*LIKE*|*IS NULL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_literal.htm) ...

Operators for literal conditions

[BYPASS WHEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_pfcg.htm)

Specifies the condition for authorization filtering

[IN SCENARIO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_pfcg.htm)

Specifies the switchable authorization check

[INHERIT CONDITIONS FROM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role

[INHERIT CONDITIONS FROM SUPER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit.htm)

Defines an inheritance condition of a CDS role

CDS access policy

Keywords and Additions

Language Element

Meaning

[DEFINE ACCESSPOLICY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_accesspolicy.htm)

Defines a [CDS access policy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_policy_glosry.htm "Glossary Entry")

[DEFINE PFCG\_MAPPING ... BETWEEN ... AND ... USING ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_pfcg_mapping.htm)

Defines a [PFCG mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") in an access policy

[DEFINE ASPECT ... AS SELECT FROM ... WITH USER ELEMENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_generic_aspect.htm)

Defines a self-defined aspect as part of a CDS access policy
