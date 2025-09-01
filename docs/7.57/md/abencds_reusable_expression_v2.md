  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, $projection, ABENCDS_REUSABLE_EXPRESSION_V2, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, $projection

Syntax

... $projection.reuse\_exp ...

Effect

$projection.reuse\_exp reuses expressions defined in the SELECT list [select\_list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") in an operand position of the SELECT list of the same CDS view entity.

Reuse expressions can currently be used in the following operand positions:

-   In the SELECT list as part of an expression.
-   In the ON clause of an [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") (as described in topic [CDS DDL - CDS View Entity, ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\)).

The reused expression reuse\_exp can contain the following operands or expressions:

-   A [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity
-   a [literal](javascript:call_link\('abencds_literal_v2.htm'\))
-   An [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))
-   A [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\))
-   A [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\))
-   A [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\))

Restrictions

-   Cycles must not occur and result in a syntax check error.
    
    The following represents a cycle and is not allowed.
    
    ... {
          a + $projection.z as x,
          2 \* $projection.x as y,
          b + $projection.y as z
        } ...
    Explanation: element x uses z, which in turns uses y, which again uses x.
    
-   Currently, reuse expressions cannot be used in the [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)), [GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\)), or [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clause or within a [filter condition](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)).
-   [Parameters](javascript:call_link\('abencds_parameter_v2.htm'\)), [session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)), [path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)), and [aggregate functions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) are currently not possible as part of the reuse expression. If you try to reuse such an element of the SELECT list, an error message occurs.
-   If a field is specified as [CDS amount field](javascript:call_link\('abencds_amount_field.htm'\)) or [CDS quantity field](javascript:call_link\('abencds_quantity_field.htm'\)) by assigning a currency key or unit key, and if this field is reused in the same view with $projection, then the reference information is lost and the field is handled as normal numeric value.
    
    If a [calculated quantity](javascript:call_link\('abencds_calculated_quantity.htm'\)) is reused via $projection, the reference information is lost, but the characteristic as calculated quantity is kept. The required reference information needs to be assigned to the result.
    

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