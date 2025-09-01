  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20WHERE%2C%20ABENCDS_WHERE_CLAUSE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

CDS DDL - DDIC-Based View, SELECT, WHERE

Syntax

... WHERE [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) ...

Effect

Defines a WHERE condition for the result set of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). When the CDS view is accessed, the result set contains only the data from the data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) that meets the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). For the operands, [general](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) and [special rules](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) apply when specifying the condition.

Hint

Unlike in the [HAVING condition](javascript:call_link\('abencds_having_clause_v1.htm'\)), [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) cannot be specified in the WHERE condition.

Example

When the CDS view demo\_sales\_order\_old4 is accessed, the result set contains only orders where the company name of the business partner starts with S and that were created between January and March 2013.

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW4'
define view DEMO\_SALES\_ORDER\_OLD4
  as select from snwd\_so
  association to snwd\_bpa as \_partner
    on snwd\_so.buyer\_guid = \_partner.node\_key
{
  key   so\_id,
        snwd\_so.buyer\_guid,
        \_partner.company\_name,
        snwd\_so.created\_at,
        @Semantics.currencyCode
        currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
        gross\_amount
}
where
      \_partner.company\_name like    'S%'
  and created\_at            between 2013010100000.0
      and 20130401000000.0; //Jan-March

Continue
[CDS DDL - DDIC-Based View, cds\_cond, WHERE](javascript:call_link\('abencds_cond_expr_where_v1.htm'\))