  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, path\_expr, attributes

Syntax

... \[ [*\[*1*|*\*:*\]*](javascript:call_link\('abencds_path_expr_card_v1.htm'\)) [*\[*INNER*|**{*LEFT OUTER*}**\]*](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) [*\[*WHERE*\]* *\[*cds\_cond*\]*](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) \] ...

Effect

For every CDS association [\_assoc](javascript:call_link\('abencds_association_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following attributes can be specified:

-   With [1*|*\*:](javascript:call_link\('abencds_path_expr_card_v1.htm'\)), the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the section can be specified.

-   With [INNER*|**{*LEFT OUTER*}*](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") can be specified.

-   With [*\[*WHERE*\]* cds\_cond](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) a filter condition cds\_cond can be specified.

Continue
[CDS DDL - DDIC-based View, path\_expr, cardinality](javascript:call_link\('abencds_path_expr_card_v1.htm'\))
[CDS DDL - DDIC-based View, path\_expr, join\_type](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))
[CDS DDL - DDIC-based View, path\_expr, filter](javascript:call_link\('abencds_path_expression_filter_v1.htm'\))