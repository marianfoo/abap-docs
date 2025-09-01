  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, case\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20simple_case_expr%2C%20ABENCDS_SIMPLE_CASE_EXPRESSION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

CDS DDL - DDIC-Based View, simple\_case\_expr

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v1.htm) (simple case) in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The case distinction compares the values of operand operand with operands operand1, operand2, ... and produces the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").

-   The following can be specified for operand:
    -   [Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm) of the current CDS view
    -   [Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v1.htm)
    -   [Session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm)
    -   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) that identify a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm)
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v1.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v1.htm)
-   The following can be specified for operand1, operand2, ... :
    -   [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v1.htm) without a domain prefix
    -   Fields of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm) of the current CDS view
    -   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) that identify a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm)
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v1.htm)
    -   A further case distinction
-   The following can be specified for result1, result2, ...:
    -   [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v1.htm) without a domain prefix
    -   Fields of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm) of the current CDS view
    -   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) that identify a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v1.htm)
    -   [Casting expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v1.htm)
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v1.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v1.htm)
    -   A further case distinction

The operand operand must be [comparable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_types_v1.htm) with operand1, operand2, ... When the CDS view is activated, a result type is determined from the operands result1, result2, ... that covers their types. The operands must be compatible with each other.

The operands cannot have the [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

Example

Case distinction in a SELECT list.

case partner.bp\_role
    when '01' then 'customer'
    when '02' then 'supplier'
end as partner\_role