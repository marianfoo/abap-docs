  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20path_expr%2C%20join_type%2C%20ABENCDS_PATH_EXPR_JOINTYPE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

CDS DDL - CDS View Entity, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry")
-   LEFT OUTER determines a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](javascript:call_link\('abencds_select_statement_v2.htm'\)), it is an inner join
-   In all other locations, it is a left outer join

Hints

-   In the DDL source text editor of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.
-   For the last CDS association of a path expression, the specification of a join type property is not allowed. If a path expression consists of one single CDS association, then the join type cannot be specified.

Executable Example

[Joins of CDS Associations](javascript:call_link\('abencds_assoc_join_v2_abexa.htm'\))