  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) → 

CDS DDL - DDIC-based View, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry")

-   LEFT OUTER determines a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](javascript:call_link\('abencds_select_statement_v1.htm'\)), it is an inner join (INNER JOIN)

-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

Hint

In the DDL Source Text Editor of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.

Executable Example

[Joins of CDS Associations](javascript:call_link\('abencds_assoc_join_v1_abexa.htm'\))