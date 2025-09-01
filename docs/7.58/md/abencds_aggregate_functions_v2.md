  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20aggr_expr%2C%20ABENCDS_AGGREGATE_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - CDS View Entity, aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* arg )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* arg )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* arg [AS dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_avg_as_v2.htm) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* arg )
    *|* COUNT( DISTINCT arg )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). An aggregate expression calculates a single value from multiple rows of the operand arg. The operands can have any [data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) except for LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB. The following table shows the possible aggregate functions:

Aggregate Function

Meaning

Result Type

MAX

Returns the greatest value of arg

Data type of arg

MIN

Returns the least value of arg

Data type of arg

AVG

Average value of arg. Must be specified with the addition [AS dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_avg_as_v2.htm). The following data types are supported: [INT1, INT2, INT4, INT8](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [D16N](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [D34N](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).

Must be specified explicitly after [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_avg_as_v2.htm). Possible data types are DEC, CURR, QUAN, D16N,D34N, and FLTP.

SUM

Sum of arg. The following data types are supported: [INT1, INT2, INT4, INT8](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [D16N](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [D34N](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).

Data type of arg

COUNT

If DISTINCT arg is specified, the number of distinct values of arg is counted; if \* is specified, the number of rows in the result set is counted.

[INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

If ALL is used, all rows in the result set are respected, which is the standard setting. If DISTINCT is used, only distinct values of arg are respected.

Null values:

-   If an argument of an aggregate function has the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"), it is ignored when the function is evaluated. This also applies to COUNT with the addition DISTINCT: null values are not considered as a distinct value, and are not counted.
-   The result of an aggregate function is a null value only if all the rows in the column in question contain a null value.
-   The aggregate function COUNT counts rows and never produces the null value.

The following can be specified for arg:

-   A [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)
-   A field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the current CDS view entity
-   A [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm)
-   A [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm)
-   A [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm)
-   A case distinction [CASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm) that returns a value
-   A cast expression
-   Any built-in function that returns a suitable data type
-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v2.htm)
-   A [reuse expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using $projection

The data type of the result is defined when the CDS view entity is activated. It depends on the aggregate function used and the value range of the data types of the operands. The result of aggregate function AVG must always be specified with the addition [AS dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_avg_as_v2.htm).

Amounts and Quantities in Aggregate Expressions

If the operand arg of an aggregate function is a [CDS amount field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), a [CDS quantity field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), the result type might require a reference annotation as well. The following table shows the result type depending on the operand type of all available aggregate functions.

Aggregate Function

Type of Operand

Result Type

MAX, MIN, SUM, AVG

amount

amount

MAX, MIN, SUM, AVG

quantity

quantity

MAX, MIN, SUM, AVG

calculated quantity

calculated quantity

COUNT

amount, quantity, calculated quantity

number of type INT4

Operand positions:

-   Aggregate expressions can be used as [elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm). There they need an alternative element name defined using AS and require a [GROUP BY clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_group_by_v2.htm). The [GROUP BY clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_group_by_v2.htm) must list all non-aggregated fields from the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm).
-   Aggregate expressions can be compared with [literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) in a [HAVING condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_having_clause_v2.htm).
-   Aggregate expressions can be used as operands in [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm), [cast expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm), or [case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm).
-   An aggregate expression can be used in the condition cds\_cond of a [complex case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_searched_case_expr_v2.htm) as the operand lhs or as the operand rhs if a comparison operator is used as relational operator.

Hints

-   The aggregate expression SUM is calculated on the database. The database platform determines whether an overflow occurs if the result of SUM exceeds its value range.
    
    See also:
    
    -   [SAP HANA SQL Reference Guide, SUM Function (Aggregate)](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/03958a1eb0ad4950b00dedd8fdda475a)
    -   [SAP HANA SQL Reference Guide, Numerical Effects](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/4ee2f261e9c44003807d08ccc2e249ac)
-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as user-defined names.
-   It is possible to add aggregate expressions to the SELECT list of a CDS view entity by means of a CDS view entity extension (using [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view_entity.htm)). The following conditions must be met: The extended entity must explicitly allow aggregate expressions and the annotation [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) must be set to #PROJECTION\_LIST and #GROUP\_BY.

Example

The following CDS view entity demonstrates the usage of the aggregate expressions AVG, SUM, MIN, MAX, and COUNT(\*). An alternative element name is defined for each aggregation. The class CL\_DEMO\_CDS\_AGGREGATE\_VE fills the underlying database table, reads the view entity and returns the result.

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
group by
  id

Example

Example for counting rows using COUNT. Field count1 returns the result 1, field countNull returns 0. This demonstrates that COUNT with the addition DISTINCT ignores null values.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_AGGREGATES\_VE
  as select from scarr
{
  count( distinct case carrid when 'LH' then 'LH' end ) as count1,
  count( distinct case carrid when 'XX' then 'LH' end ) as countNull
}
where
  carrid = 'LH'

The following code snippet accesses the CDS view entity with ABAP SQL and returns the result.

SELECT \* FROM demo\_cds\_aggregates\_ve INTO TABLE @FINAL(result).

Continue
[CDS DDL - CDS View Entity, AVG, AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_avg_as_v2.htm)