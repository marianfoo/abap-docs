  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS in ABAP Release 7.52

[1\. Annotations as CDS Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_2@2@)
[3\. Access Control](#!ABAP_MODIFICATION_3@3@)
[4\. Extensions](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Annotations as CDS Objects

From ABAP release 7.52, it is possible to define [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") as standalone [CDS objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") using the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_annotation.htm) in [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry").

A [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") dictates precisely how the annotation needs to be specified in [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry") in [annotation syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry").

In [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), annotation definitions are covered by source code coloring and Code Completion. In [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and [DDLX source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"), the definitions are also covered by the syntax check.

SAP delivers annotation definitions for the [SAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_annotation_glosry.htm "Glossary Entry"). No other annotations should be used at present.

Modification 2   

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm), an addition TO ONE or TO MANY can be specified for the cardinality. This addition is evaluated by an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") as a note for optimization.

This option exists in earlier releases in ABAP CDS, but has been documented only from ABAP release 7.52. In [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752-abap_sql.htm), the corresponding syntax was introduced in ABAP release 7.52.

Modification 3   

Access Control

The following enhancements have been implemented in CDS access control:

-   [CDS roles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") can now also be defined for [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry"). When a CDS table function is accessed in ABAP SQL. The access conditions are evaluated by default.
-   Extensions in DDL for defining CDS roles:
    -   When [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_expr.htm) are specified, there are no longer any restrictions on how Boolean operators and parentheses are used. The Boolean operator NOT can now also be used and any combination of parentheses is possible.
    -   The operators [BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm) and [IS NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm) are now available for literal conditions as part of an access condition.
    -   When a path is specified for an element in an [access condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry"), multivalue associations are now also tracked.
    -   Further conditions can now be appended after [INHERIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_inherited_rule.htm) using AND.
    -   In a [literal condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_literal.htm) *\[*NOT*\]* LIKE, it is now possible to specify an escape character using ESCAPE.
    -   Blanks are now no longer forced in certain positions.

Modification 4   

Extensions

[CDS DDIC-based view extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are now connected to [Switch Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_glosry.htm "Glossary Entry").