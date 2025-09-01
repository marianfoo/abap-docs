  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, case\_expr](javascript:call_link\('abencds_case_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, searched\_case\_expr

Syntax

... CASE WHEN [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result1
        *\[*WHEN [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result2*\]*
        *\[*WHEN [cds\_cond3](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\)) (searched case) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The case distinction evaluates the conditions [cds\_cond1](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), [cds\_cond2](javascript:call_link\('abencds_conditional_expression_v1.htm'\)), ... and returns the operand result as the result after the first THEN for which the condition is true. If none of the conditions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). For the operands, [general](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) and [special rules](javascript:call_link\('abencds_cond_expr_case_v1.htm'\)) apply when specifying the conditions. The same applies for result1, result2, ... as for [simple case distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\)).

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

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
[CDS DDL - DDIC-based View, cds\_cond, CASE](javascript:call_link\('abencds_cond_expr_case_v1.htm'\))