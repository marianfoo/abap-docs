  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20path_expr%2C%20attributes%2C%20ABENCDS_PATH_EXPR_ATTR_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

CDS DDL - DDIC-Based View, path\_expr, attributes

Syntax

... \[ [*\[*1*|*\*:*\]*](javascript:call_link\('abencds_path_expr_card_v1.htm'\)) [*\[*INNER*|**{*LEFT OUTER*}**\]*](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) [*\[*WHERE*\]* *\[*cds\_cond*\]*](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) \] ...

Effect

For every CDS association [\_assoc](javascript:call_link\('abencds_association_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following attributes can be specified:

-   With [1*|*\*:](javascript:call_link\('abencds_path_expr_card_v1.htm'\)), the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the section can be specified.
-   With [INNER*|**{*LEFT OUTER*}*](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") can be specified.
-   With [*\[*WHERE*\]* cds\_cond](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) a filter condition cds\_cond can be specified.

Continue
[CDS DDL - DDIC-Based View, path\_expr, Cardinality](javascript:call_link\('abencds_path_expr_card_v1.htm'\))
[CDS DDL - DDIC-Based View, path\_expr, join\_type](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\))
[CDS DDL - DDIC-Based View, path\_expr, Filter](javascript:call_link\('abencds_path_expression_filter_v1.htm'\))