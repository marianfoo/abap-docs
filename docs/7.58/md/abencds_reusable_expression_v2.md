  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20%24projection%2C%20ABENCDS_REUSABLE_EXPRESSION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - CDS View Entity, $projection

Syntax

... $projection.reuse\_exp ...

Effect

$projection.reuse\_exp reuses expressions defined in the SELECT list [select\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in an operand position of the SELECT list of the same CDS view entity.

Reuse expressions can currently be used in the following operand positions:

-   In the SELECT list as part of an expression.
-   In the ON clause of an [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") (as described in topic [CDS DDL - CDS View Entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm).

The reused expression reuse\_exp can contain the following operands or expressions:

-   A [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the current CDS view entity
-   a [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)
-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v2.htm)
-   A [cast expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm)
-   A [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm)
-   A [SQL-based scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm)
-   A [case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm)

Restrictions

-   Cycles must not occur and result in a syntax check error.
    
    The following represents a cycle and is not allowed.
    
    ... {
          a + $projection.z as x,
          2 \* $projection.x as y,
          b + $projection.y as z
        } ...
    Explanation: element x uses z, which in turns uses y, which again uses x.
    
-   Currently, reuse expressions cannot be used in the [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v2.htm), [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_group_by_v2.htm), or [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_having_clause_v2.htm) clause or within a [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v2.htm).
-   [Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), [session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm), [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm), and [aggregate functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm) are currently not possible as part of the reuse expression. If you try to reuse such an element of the SELECT list, an error message occurs.
-   If a field is specified as [CDS amount field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field.htm) or [CDS quantity field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_field.htm) by assigning a currency key or unit key, and if this field is reused in the same view with $projection, then the reference information is lost and the field is handled as normal numeric value.
    
    If a [calculated quantity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_quantity.htm) is reused via $projection, the reference information is lost, but the characteristic as calculated quantity is kept. The required reference information needs to be assigned to the result.
    

Example

Reuse of expressions in a SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, expression reuse'
define view entity DEMO\_CDS\_EXPRESSION\_REUSE
  as select from demo\_expressions
{
      //field
  key id                                     as field1,
      concat($projection.field1, 'x')        as field\_reuse,
      //literal
      abap.char'hallo'                                as lit1,
      concat($projection.lit1, 'x')          as lit\_reuse,
      //arithmetic expression
      abap.decfloat34'123.45E6'              as arith,
      $projection.arith \* 2                  as arith\_reuse,
      //cast expression
      cast(char1 as abap.numc(10))           as cast1,
      coalesce($projection.cast1, numc2)     as cast\_reuse,
      //built-in function
      abs(dec1)                              as builtIn,
      cast($projection.builtIn as abap.int4) as builtIn\_reuse,
      //case distinction
      case char2
          when 'Anna' then 'X'
          when 'Lisa' then 'Y'
          else '-'
          end                                as case1,
      left($projection.case1, 1)             as case\_reuse
}