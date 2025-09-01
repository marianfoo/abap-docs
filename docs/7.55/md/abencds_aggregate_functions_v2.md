  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) → 

CDS DDL - CDS View Entity, aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* operand )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* operand )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* operand [AS dtype](javascript:call_link\('abencds_avg_as_v2.htm'\)) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* operand )
    *|* COUNT( DISTINCT operand )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). An aggregate expression calculates a single value from multiple rows of operand operand. The operands can have any [data type](javascript:call_link\('abenddic_builtin_types.htm'\)) except LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB. The following table shows the possible aggregate functions:

Aggregate Function

Meaning

Result Type

MAX

Returns the greatest value of operand

Data type of operand

MIN

Returns the least value of operand

Data type of operand

AVG

Average value of operand. Must be specified with the addition [AS dtype](javascript:call_link\('abencds_avg_as_v2.htm'\)). The following data types are supported: [INT1, INT2, INT4, INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [D16N](javascript:call_link\('abenddic_builtin_types.htm'\)), and [D34N](javascript:call_link\('abenddic_builtin_types.htm'\)).

Must be specified explicitly after [AS](javascript:call_link\('abencds_avg_as_v2.htm'\)). Possible data types are DEC, CURR, QUAN, D16N,D34N, and FLTP.

SUM

Sum of operand.The following data types are supported: [INT1, INT2, INT4, INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [D16N](javascript:call_link\('abenddic_builtin_types.htm'\)), and [D34N](javascript:call_link\('abenddic_builtin_types.htm'\)).

Data type of operand

COUNT

If DISTINCT operand is specified, the number of distinct values of operand is counted; if \* is specified, the number of rows in the result set is counted.

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

If ALL is used, all rows in the result set are respected, which is the standard setting. If DISTINCT is used, only distinct values of operand are respected.

The following can be specified for operand:

-   A [literal](javascript:call_link\('abencds_literal_v2.htm'\))

-   A field of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity

-   A [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

-   A [session variable](javascript:call_link\('abencds_session_variable_v2.htm'\))

-   A [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)) that identifies a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\))

-   A case distinction [CASE](javascript:call_link\('abencds_case_expression_v2.htm'\)) that returns a value

-   A cast expression

-   Any built-in function that returns a suitable data type

-   An [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))

The data type of the result is defined when the CDS view entity is activated. It depends on the aggregate function used and the value range of the data types of the operands. The result of aggregate function AVG must always be specified with the addition [AS dtype](javascript:call_link\('abencds_avg_as_v2.htm'\)).

Operand positions:

-   Aggregate expressions can be used as [elements](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)). There they need an alternative element name defined using AS and require a [GROUP BY clause](javascript:call_link\('abencds_group_by_v2.htm'\)).

-   Aggregate expressions can be compared with [literals](javascript:call_link\('abencds_literal_v2.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_having_clause_v2.htm'\)).

-   Aggregate expressions can be used as operands in [built-in functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)), [cast expressions](javascript:call_link\('abencds_cast_expression_v2.htm'\)), or [case distinctions](javascript:call_link\('abencds_case_expression_v2.htm'\)).

-   An aggregate expression can be used in the condition cds\_cond of a [complex case distinction](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)) as operand lhs or as operand rhs if a comparison operator is used as relational operator.

Hints

-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as self-defined names.

-   To add aggregate expressions in the SELECT list to a CDS view entity using [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)), the values #PROJECTION\_LIST and #GROUP\_BY must be specified with the annotation [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_entity_anno.htm'\)).

Example

In the SELECT list of the CDS view entity DEMO\_SALES\_CDS\_SO\_VW, aggregate expressions calculate the sum, the minimum, and the maximum of the amounts of a sales order. Also, the number of orders is determined. An alternative element name is defined for each aggregation. The non-aggregated fields so\_key and currency\_sum are specified in the GROUP BY clause.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_VW
  as select from
    DEMO\_SALES\_CDS\_SO
    {
      key so\_key,
          currency\_sum,
          @Semantics.amount.currencyCode: 'currency\_sum'
          sum(amount\_sum)                    as sum\_amount,
          @Semantics.amount.currencyCode: 'currency\_sum'
          min(amount\_sum)                    as min\_amount,
          @Semantics.amount.currencyCode: 'currency\_sum'
          max(amount\_sum)                    as max\_amount,
          @Semantics.amount.currencyCode: 'currency\_sum'
          avg(amount\_sum as abap.curr(15,2)) as avg\_amount,
          count(\*)                           as sales\_orders\_count
    }
    group by
      so\_key,
      currency\_sum

Example

The following CDS view entity demonstrates the nesting of aggregate functions and built-in CDS functions. Built-in CDS functions can serve as operands of aggregate functions, as long as they return a result with a suitable data type.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_AGGREGATES\_VE  
  as select from demo\_expressions  
{
  key id,
      max( substring( char1, 1, 2 ) )  as maxStringFunc,
      min( ceil( dec2 ) )              as MinNumericFunc,
      avg( case num2  
           when 1 then 5 else 2  
           end                        
           as abap.dec(10,2) )         as avgCase,
      sum( fltp\_to\_dec(  
           fltp1 as abap.dec(18,2) ) ) as sumConv,
      count( distinct cast(  
             num1 as abap.int4) )      as countCast,        
      min( coalesce( num1, num1 ) )    as MinCoalesce,  
      min( datn\_days\_between(  
           datn1, datn2 ) )            as MinTimeConv,
      max( abap\_system\_timezone(
           $session.client, 'NULL' ) ) as MaxTimezone  
}
group by  
  id

Continue
[CDS DDL - CDS View Entity, AVG, AS](javascript:call_link\('abencds_avg_as_v2.htm'\))