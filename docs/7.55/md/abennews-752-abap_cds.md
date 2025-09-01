  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

ABAP CDS in Release 7.52

[1\. Annotations as CDS objects](#!ABAP_MODIFICATION_1@1@)
[2\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_2@2@)
[3\. Access control](#!ABAP_MODIFICATION_3@3@)
[4\. Extensions](#!ABAP_MODIFICATION_4@4@)

Modification 1

Annotations as CDS Objects

From Release 7.52, it is possible to define [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") as standalone [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") using the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) in [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry").

A [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") dictates precisely how the annotation needs to be specified in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") in [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry").

In [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), annotation definitions are covered by source code coloring and Code Completion. In [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") and [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"), the definitions are also covered by the syntax check.

SAP delivers annotation definitions for the [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry"). No other annotations should be used at present.

Modification 2

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\)), an addition TO ONE or TO MANY can be specified for the cardinality. This addition is evaluated by an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as a note for optimization.

This option exists in earlier releases in ABAP CDS, but has been documented only from Release 7.52. In [ABAP SQL](javascript:call_link\('abennews-752-open_sql.htm'\)), the corresponding syntax was introduced in Release 7.52.

Modification 3

Access Control

The following enhancements have been implemented in CDS access control:

-   [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") can now also be defined for [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). When a CDS table function is accessed in ABAP SQL. The access conditions are evaluated by default.

-   Extensions in DDL for defining CDS roles:

-   When [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) are specified, there are no longer any restrictions on how Boolean operators and parentheses are used. The Boolean operator NOT can now also be used and any combination of parentheses is possible.

-   When a path is specified for an element in an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry"), multi-value associations are now also tracked.

-   Further conditions can now be appended after [INHERIT](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) using AND.

-   In a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) *\[*NOT*\]* LIKE, it is now possible to specify an escape character using ESCAPE.

-   Blanks are now no longer forced in certain positions.
    

Modification 4

Extensions

[CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") are now connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").