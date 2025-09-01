  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20path_expr%2C%20attributes%2C%20ABENCDS_PATH_EXPR_ATTR_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

CDS DDL - CDS View Entity, path\_expr, attributes

Syntax

... \[ [*\[*cardinality*\]*](javascript:call_link\('abencds_path_expr_card_v2.htm'\)) [*\[*INNER*|**{*LEFT OUTER*}**\]*](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\)) [*\[*WHERE*\]* *\[*cds\_cond*\]*](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) \] ...

Effect

For every CDS association [\_assoc](javascript:call_link\('abencds_association_v2.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following attributes can be specified:

-   With [cardinality](javascript:call_link\('abencds_path_expr_card_v2.htm'\)), the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the section can be specified.
-   With [INNER*|**{*LEFT OUTER*}*](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\)) the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") can be specified.
-   With [*\[*WHERE*\]* cds\_cond](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)) a filter condition cds\_cond can be specified.

Example

The CDS view entity contains path expressions with filter conditions in the FROM clause, in the SELECT list, and in the WHERE clause.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_PATH\_EXPR\_1
  as select from
    DEMO\_SALES\_CDS\_SO\_I.\_SalesOrder  
      \[lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]
    association to exact one demo\_so\_inv\_he as \_invoice\_header
      on DEMO\_SALES\_CDS\_SO.id = \_invoice\_header.buyer\_id
    {
      key so\_key as soKey,
          lifecycle\_status,
          \_invoice\_header.dunning\_level,
          DEMO\_SALES\_CDS\_SO.\_Buyer,
          DEMO\_SALES\_CDS\_SO\[inner\].buyer\_id,
          DEMO\_SALES\_CDS\_SO.id
    }
    where
      \_invoice\_header.dunning\_level > '0' and
      \_Items\[to one:currency <> 'EUR'\].material = 'WOOD'

Continue
[CDS DDL - CDS View Entity, path\_expr, cardinality](javascript:call_link\('abencds_path_expr_card_v2.htm'\))
[CDS DDL - CDS View Entity, path\_expr, join\_type](javascript:call_link\('abencds_path_expr_jointype_v2.htm'\))
[CDS DDL - CDS View Entity, path\_expr, Filter](javascript:call_link\('abencds_path_expression_filter_v2.htm'\))