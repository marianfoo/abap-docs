  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) → 

ABAP CDS - DEFINE VIEW, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines input parameters [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in in a comma-separated list.

An input parameter called pname can be used as an operand in the following places in the [SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) statement of the view using the syntax [:pname](javascript:call_link\('abencds_f1_parameter.htm'\)) or [$parameters.pname](javascript:call_link\('abencds_f1_parameter.htm'\)):

-   [Element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\))

-   Operand of an [arithmetic expression](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   Operand operand directly after case in a [case distinction](javascript:call_link\('abencds_f1_case_expression.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where.htm'\)) of an expression [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clause or [HAVING clause](javascript:call_link\('abencds_f1_having_clause.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where.htm'\)) of an expression [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an ON condition in an [ABAP join](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) or an [association](javascript:call_link\('abencds_f1_association.htm'\))

-   [Right side](javascript:call_link\('abencds_cond_expr_where.htm'\)) of an expression [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [filter condition](javascript:call_link\('abencds_path_expression_attr.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\))

Example

The following CDS view has a list of three input parameters used in the [WHERE clause](javascript:call_link\('abencds_f1_where_clause.htm'\)) of the SELECT statement. For information about passing actual parameters in a SELECT statement in ABAP, see the executable example [SELECT, CDS View with Input Parameters](javascript:call_link\('abenselect_cds_para_abexa.htm'\)).

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