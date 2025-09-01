# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - case_expr

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)
- [abencds_f1_simple_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_simple_case_expression.htm)
- [abencds_f1_searched_case_expr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_searched_case_expr.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.362Z

---

### abencds_f1_case_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - case\_expr

Syntax Forms

[Simple case distinction](javascript:call_link\('abencds_f1_simple_case_expression.htm'\))
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\))
2\. ... CASE WHEN cond\_expr1 THEN result1
          *\[*WHEN cond\_expr2 THEN result2*\]*
          *\[*WHEN cond\_expr3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). Either a [simple case distinction](javascript:call_link\('abencds_f1_simple_case_expression.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)) (searched case).

Case distinctions can be specified in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) and in operand positions of other expressions.

Continue
[ABAP CDS - simple\_case\_expr](javascript:call_link\('abencds_f1_simple_case_expression.htm'\))
[ABAP CDS - searched\_case\_expr](javascript:call_link\('abencds_f1_searched_case_expr.htm'\))



**📖 Source**: [abencds_f1_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)

### abencds_f1_simple_case_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_simple_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_simple_case_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - case\_expr](javascript:call_link\('abencds_f1_case_expression.htm'\)) → 

ABAP CDS - simple\_case\_expr

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simplex [case distinction](javascript:call_link\('abencds_f1_case_expression.htm'\)) (simple case) in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The case distinction compares the values of operand operand with operands operand1, operand2, ... and produces the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   The following can be specified for operand:

-   [Fields](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view

-   [Parameters](javascript:call_link\('abencds_f1_parameter.htm'\))

-   [Session variables](javascript:call_link\('abencds_f1_session_variable.htm'\))

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))

-   [Built-in functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   The following can be specified for operand1, operand2, ... :

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\)) without a domain prefix

-   Fields of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))

-   [Built-in functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\))

-   A further case distinction

-   The following can be specified for result1, result2, ...:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\)) without a domain prefix

-   Fields of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))

-   [Aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\))

-   [Casting expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\))

-   [Built-in functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   A further case distinction

The operand operand must be comparable with operand1, operand2, ... When the CDS view is activated, a result type is determined from the operands result1, result1, ... that covers their types. The operands must be compatible with each other.

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.

Example

Case distinction in a SELECT list.

case partner.bp\_role
    when '01' then 'customer'
    when '02' then 'supplier'
end as partner\_role



**📖 Source**: [abencds_f1_simple_case_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_simple_case_expression.htm)

### abencds_f1_searched_case_expr.htm

> **📖 Official SAP Documentation**: [abencds_f1_searched_case_expr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_searched_case_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_searched_case_expr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_searched_case_expr.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - case\_expr](javascript:call_link\('abencds_f1_case_expression.htm'\)) → 

ABAP CDS - searched\_case\_expr

Syntax

... CASE WHEN [cond\_expr1](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) THEN result1
        *\[*WHEN [cond\_expr2](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) THEN result2*\]*
        *\[*WHEN [cond\_expr3](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](javascript:call_link\('abencds_f1_case_expression.htm'\)) (searched case) in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The case distinction evaluates the conditions [cond\_expr1](javascript:call_link\('abencds_f1_conditional_expression.htm'\)), [cond\_expr2](javascript:call_link\('abencds_f1_conditional_expression.htm'\)), ... and returns the operand result as the result after the first THEN for which the condition is true. If none of the conditions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). Special [rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) apply when specifying the conditions. The same applies for result1, result2, ... as for [simple case distinction](javascript:call_link\('abencds_f1_simple_case_expression.htm'\)).

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.

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

The program DEMO\_CDS\_SEARCHED\_CASE uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view and shows the result.
