  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) → 

CDS DDL - DDIC-based View, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... as input parameters of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") in a comma-separated list.

An input parameter called pname can be used as an operand in the following places in the [SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) statement of the view using the syntax [:pname](javascript:call_link\('abencds_parameter_v1.htm'\)) or [$parameters.pname](javascript:call_link\('abencds_parameter_v1.htm'\)):

-   [Element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\))

-   Operand of an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

-   Operand operand directly after case in a [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) of an expression [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\)) clause or [HAVING clause](javascript:call_link\('abencds_having_clause_v1.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) of an expression [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in an ON condition in an [ABAP join](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) or a [CDS association](javascript:call_link\('abencds_association_v1.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) of an expression [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) of an expression [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in the [default filter condition](javascript:call_link\('abencds_association_v1.htm'\)) of a [CDS association](javascript:call_link\('abencds_association_v1.htm'\))

Example

The following CDS view has a list of three input parameters used in the [WHERE clause](javascript:call_link\('abencds_where_clause_v1.htm'\)) of the SELECT statement. The ABAP program DEMO\_CDS\_PARAMETERS accesses the view and assigns actual parameters to the input parameters.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARA'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions
@EndUserText.label: 'Demo für Parameter-View'
define view demo\_cds\_parameters
  with parameters
    p\_distance\_l :s\_distance,
    p\_distance\_u :s\_distance,
    p\_unit       :s\_distid
  as select from
    spfli
    {
      key carrid,
      key connid,
          cityfrom,
          cityto,
          distance,
          distid
    }
    where
          distid   =       :p\_unit
      and distance between :p\_distance\_l and :p\_distance\_u;