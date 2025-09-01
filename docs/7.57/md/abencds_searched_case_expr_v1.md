  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, case\_expr](javascript:call_link\('abencds_case_expression_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, searched_case_expr, ABENCDS_SEARCHED_CASE_EXPR_V1, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, searched\_case\_expr

Syntax

... CASE WHEN [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result1
        *\[*WHEN [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result2*\]*
        *\[*WHEN [cds\_cond3](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\)) (searched case) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The case distinction evaluates the conditions [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), ... and returns the operand result as the result after the first THEN for which the condition is true. If none of the conditions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). For the operands, [general](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) and [special rules](javascript:call_link\('abencds_cond_expr_case_v1.htm'\)) apply when specifying the conditions. The same applies to result1, result2, ... as to [simple case distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\)).

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the HANA-specific SQL documentation.

Example

The following CDS view has a complex case distinction in the SELECT list.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SCASE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_searched\_case
  as select from
    spfli
    {
      key carrid,
      key connid,
          distance,
          distid,
          case
            when distance >= 2000 then 'long-haul flight'
            when distance >= 1000 and
                 distance <  2000 then 'medium-haul flight'
            when distance <  1000 then 'short-haul flight'
                                  else 'error'
          end as flight\_type
    }
    where
      distid = 'MI'

The program DEMO\_CDS\_SEARCHED\_CASE uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view and shows the result.

Continue
[CDS DDL - DDIC-Based View, cds\_cond, CASE](javascript:call_link\('abencds_cond_expr_case_v1.htm'\))