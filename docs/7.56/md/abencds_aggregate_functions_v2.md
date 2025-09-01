  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v2.htm) → 

CDS DDL - CDS View Entity, aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* operand )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* operand )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* operand [AS dtype](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_avg_as_v2.htm) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* operand )
    *|* COUNT( DISTINCT operand )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). An aggregate expression calculates a single value from multiple rows of the operand operand. The operands can have any [data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) except LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB. The following table shows the possible aggregate functions:

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

Average value of operand. Must be specified with the addition [AS dtype](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_avg_as_v2.htm). The following data types are supported: [INT1, INT2, INT4, INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [D16N](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), and [D34N](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm).

Must be specified explicitly after [AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_avg_as_v2.htm). Possible data types are DEC, CURR, QUAN, D16N,D34N, and FLTP.

SUM

Sum of operand.The following data types are supported: [INT1, INT2, INT4, INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [D16N](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), and [D34N](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm).

Data type of operand

COUNT

If DISTINCT operand is specified, the number of distinct values of operand is counted; if \* is specified, the number of rows in the result set is counted.

[INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

If ALL is used, all rows in the result set are respected, which is the standard setting. If DISTINCT is used, only distinct values of operand are respected.

The following can be specified for operand:

-   A [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v2.htm)
-   A field of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm) of the current CDS view entity
-   A [parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v2.htm)
-   A [session variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v2.htm)
-   A [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v2.htm)
-   A case distinction [CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm) that returns a value
-   A cast expression
-   Any built-in function that returns a suitable data type
-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm)
-   A [reuse expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_reusable_expression_v2.htm) using $projection

The data type of the result is defined when the CDS view entity is activated. It depends on the aggregate function used and the value range of the data types of the operands. The result of aggregate function AVG must always be specified with the addition [AS dtype](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_avg_as_v2.htm).

Amounts and quantities in aggregate expressions:

If the operand operand of an aggregate function is a [CDS amount field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), a [CDS quantity field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), the result type might require a reference annotation as well. The following table shows the result type depending on the operand type of all available aggregate functions.

Aggregate Function

Type of Operand

Result Type

MAX, MIN, SUM, AVG

Amount

Amount

MAX, MIN, SUM, AVG

Quantity

Quantity

MAX, MIN, SUM, AVG

Calculated quantity

Calculated quantity

COUNT

Amount, Quantity, Calculated quantity

Number of type INT4

Operand positions:

-   Aggregate expressions can be used as [elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm). There they need an alternative element name defined using AS and require a [GROUP BY clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_group_by_v2.htm).
-   Aggregate expressions can be compared with [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v2.htm) in a [HAVING condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm).
-   Aggregate expressions can be used as operands in [built-in functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v2.htm), [cast expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cast_expression_v2.htm), or [case distinctions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm).
-   An aggregate expression can be used in the condition cds\_cond of a [complex case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v2.htm) as the operand lhs or as the operand rhs if a comparison operator is used as relational operator.

Hints

-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as self-defined names.
-   To add aggregate expressions in the SELECT list to a CDS view entity using [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_view_entity.htm), the values #PROJECTION\_LIST and #GROUP\_BY must be specified with the annotation [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm).

Example

The following CDS view entity demonstrates the usage of the aggregate expressions AVG, SUM, MIN, MAX, and COUNT(\*). An alternative element name is defined for each aggregation. The program DEMO\_CDS\_AGGREGATE\_VE fills the underlying database table, reads the view entity and returns the result.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_AGGREGATE\_VE
  as select from demo\_expressions
  {
    avg( abs(num1) as abap.dec(12,2)) as average\_numeric\_func7,
    sum( num1 )                       as sum\_num1,
    min( num1 )                       as min\_num1,
    max( num1 )                       as max\_num1,
    count(\*)                          as count1
  }

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
[CDS DDL - CDS View Entity, AVG, AS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_avg_as_v2.htm)