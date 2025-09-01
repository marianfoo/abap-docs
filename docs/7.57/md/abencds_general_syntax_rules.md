  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - General Syntax Rules, ABENCDS_GENERAL_SYNTAX_RULES, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - General Syntax Rules

The general syntax rules for the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_glosry.htm "Glossary Entry"), and [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") for defining [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") are as follows:

-   Keywords
    -   Keywords must be all uppercase, all lowercase, or in lowercase with an uppercase initial letter. Other mixes of uppercase and lowercase are not allowed.
-   Names
    -   Names are not case-sensitive.
    -   A name must contain at least 2 characters but no more than 30 characters.
    -   A name can consist of letters, numbers, underscores (\_), and slashes (/).
    -   A name must start with a letter, slash character, or underscore. Underscores are recommended as the naming convention for [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry").
    -   The separator for names with multiple parts is a period (.). Names with multiple parts can be paths, columns with a prefixed data source, and structured annotations.
    -   The following CDS keywords cannot be used as names:
        
        ALL, AND, AS, ASSOCIATION, AVG, CASE, CAST, COUNT, CROSS, DISTINCT, EXISTS, EXTEND, EXTENSION, FROM, FULL, GROUP, HAVING, INNER, JOIN, KEY, LEFT, MAX, MIN, NOT, NULL, ON, OR, ORDER, RIGHT, SELECT, SUM, UNION, VIEW, WHEN, WHERE
        
-   Literals
    -   In general ABAP CDS, [untyped](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuntyped_literal_glosry.htm "Glossary Entry") numeric and untyped character literals are available:
        
        An untyped character literal is a character string enclosed in single quotation marks (').
        An untyped numeric literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit.
        
    -   In [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyped_literal_glosry.htm "Glossary Entry") are available for [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and [CDS hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). Typed literals are available for almost all built-in ABAP Dictionary data types. A typed literal is specified by writing an ABAP Dictionary data type with the type namespace abap. as prefix followed by the character-like representation of the value in single quotation marks (').
        
        Example: abap.dats'20200101'
        
    -   Escaping literals in ABAP CDS:
        
        A single quote (') is escaped with a single quote:'...''...'.
        A backslash (\\) is escaped with a backslash: '...\\\\...'
        
        Exception: Escaping with a backslash is not supported in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
        
-   Comments
    -   Two forward slashes (//) introduce a comment, which continues until the end of the line.
    -   Comments within lines or that span multiple lines are enclosed by the characters /\* and \*/.
-   Separators
    -   Statements can be closed using a semicolon (;). Sometimes this is mandatory.
-   Protected words
    -   Certain keywords are protected and cannot be used as self-defined names. The reserved names that cannot be used are specified in the DDIC database table TRESE.

Hints

-   The closing semicolon after a statement is sometimes optional because one piece of CDS source code can currently only contain a single statement.
-   In [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS data definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_definition_glosry.htm "Glossary Entry") and [DCL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendcl_source_code_glosry.htm "Glossary Entry") for [CDS roles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry"), as well as two slashes, two dashes (\--) can also be used to introduce a comment. Slashes (//), however, are the recommended method. Two dashes are not allowed in [DDLA source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddla_source_code_glosry.htm "Glossary Entry") for [annotation definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), in [DDLX source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") for [metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and in [BDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_source_code_glosry.htm "Glossary Entry") for behavior definitions.

Examples

-   SELECT, select, and Select are all valid ways of specifying a keyword. seLect and SeLect, on the other hand, produce syntax errors.
-   MYVIEW, myview, and myView all identify the same operand.
-   0.5 is a valid numeric literal, but .5 is not.