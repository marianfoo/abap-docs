  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - case\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm) → 

ABAP CDS - searched\_case\_expr

Syntax

... CASE WHEN [cond\_expr1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) THEN result1
        *\[*WHEN [cond\_expr2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) THEN result2*\]*
        *\[*WHEN [cond\_expr3](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm) (searched case) in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). The case distinction evaluates the conditions [cond\_expr1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), [cond\_expr2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm), ... and returns the operand result as the result after the first THEN for which the condition is true. If none of the conditions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"). Special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_case.htm) apply when specifying the conditions. The same applies for result1, result2, ... as for [simple case distinction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_simple_case_expression.htm).

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.

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
distance < 2000 then 'medium-haul flight'
when distance < 1000 then 'short-haul flight'
else 'error'
end as flight\_type
}
where
distid = 'MI'    

The program DEMO\_CDS\_SEARCHED\_CASE uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view and shows the result.