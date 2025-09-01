# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - aggr_expr

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_aggregate_functions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm)
- [abencds_f1_avg_as.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_avg_as.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.899Z

---

### abencds_f1_aggregate_functions.htm

> **📖 Official SAP Documentation**: [abencds_f1_aggregate_functions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* operand )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* operand )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* operand [*\[*AS dtype*\]*](javascript:call_link\('abencds_f1_avg_as.htm'\)) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* operand )
    *|* COUNT( DISTINCT operand )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). An aggregate expression calculates a single value from an operand operand by calling an aggregate function from multiple rows of a results set. The following table shows the possible aggregate functions:

Aggregate Function

Meaning

Result Type

MAX

Greatest value of operand

Data type of operand

MIN

Least value of operand

Data type of operand

AVG

Average value of operand (the operand must be numeric). Type [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) is only supported with addition [AS dtype](javascript:call_link\('abencds_f1_avg_as.htm'\)). The types [DF16\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_...](javascript:call_link\('abenddic_builtin_types.htm'\)) for decimal free floating numbers are not supported.

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), platform-specific interim result or [dtype](javascript:call_link\('abencds_f1_avg_as.htm'\))

SUM

Sum of operand (the operand must be numeric). The types [DF16\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_...](javascript:call_link\('abenddic_builtin_types.htm'\)) for decimal free floating numbers are not supported.

Data type of operand

COUNT

If DISTINCT operand is specified, the number of distinct values of operand; if \* is specified, the number of rows in the results set.

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

If ALL is used, all rows in the results set are respected (standard setting). If DISTINCT is used, only distinct values of operand are respected.

The following can be specified for operand:

-   A [literal](javascript:call_link\('abencds_f1_literal.htm'\))

-   A field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view

-   A [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identifies a field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))

-   A case distinction [CASE](javascript:call_link\('abencds_f1_case_expression.htm'\)) that returns a value

The data type of the result is defined when the CDS view is activated and is determined by the aggregate function and the value range of the data types of the operands. If the result of aggregate function AVG is returned in a results set, the result type is FLTP. As the interim result in a clause, the result type can be platform-specific. With addition [AS dtype](javascript:call_link\('abencds_f1_avg_as.htm'\)), the result type can be defined for every operand position.

Aggregate expressions can be used as [elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)). Here they need an alternative element name defined using AS and require a [GROUP BY clause](javascript:call_link\('abencds_f1_group_by.htm'\)) to be used. Aggregate expressions can be compared with [literals](javascript:call_link\('abencds_f1_literal.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_f1_having_clause.htm'\)).

The operands cannot have the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Notes

-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as self-defined names.

-   To add aggregate expressions in the SELECT list to a CDS view using [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)), the values #PROJECTION\_LIST and #GROUP\_BY must be specified with the annotation [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

-   The result of the aggregate functions AVG in data type FLTP is platform-dependent.

Example

In the SELECT list of the CDS view sales\_order, aggregate expressions calculate the sum, the minimum, and the maximum of the gross amounts of each business partner. Also, the number of requests is determined. An alternative element name is defined for each aggregation. The non-aggregated fields buyer\_guid and currency\_code are specified in the GROUP BY clause.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
  { key buyer\_guid,
       @Semantics.currencyCode
        currency\_code,
       @Semantics.amount.currencyCode: 'currency\_code'
        sum(gross\_amount) as sum\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        min(gross\_amount) as min\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        max(gross\_amount) as max\_gross\_amount,
       @Semantics.amount.currencyCode: 'currency\_code'
        avg(gross\_amount) as avg\_gross\_amount,
        count(\*) as sales\_orders\_count }
  group by buyer\_guid, currency\_code

Continue
[ABAP CDS - AVG, AS](javascript:call_link\('abencds_f1_avg_as.htm'\))



**📖 Source**: [abencds_f1_aggregate_functions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm)

### abencds_f1_avg_as.htm

> **📖 Official SAP Documentation**: [abencds_f1_avg_as.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_avg_as.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_avg_as.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_avg_as.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - aggr\_expr](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) → 

ABAP CDS - AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* operand AS dtype ) ...

Effect

Aggregate expression [AVG](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") with a data type dtype specified. The data type determines the result type in which the average value is returned.

The same can be specified for the operand as for all [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) with one exception; [CASE](javascript:call_link\('abencds_f1_case_expression.htm'\)) cannot be specified. The data type of operand must be numeric and have one of the types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data type dtype can have the built-in numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). The data type FLTP, however, can only be specified for operands of type FLTP. The data type dtype can be specified as follows:

-   Using a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") with a permitted type.

-   Directly as a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

The value range of the data type dtype must cover the value range of the operand type:

-   If operand is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.

-   If operand has type DEC, CURR, QUAN, a type dtype of type DEC, CURR, QUAN must have at least any many integer digits and decimal places.

-   If operand has type FLTP, this type must also be specified for dtype.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Notes

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)).

-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.

-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)) expression.

-   An aggregate expression AVG cannot be applied to operands with the data type INT8 without using the addition AS. The addition AS can also be used to form average values for columns with data type INT8.

-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype.

-   If FLTP is specified explicitly for operands of type FLTP, this ensures that the result of AVG actually has this type at each operand position, which cannot be guaranteed otherwise.

Example

The following CDS view demonstrates different uses of the aggregate expression AVG. The program DEMO\_CDS\_AVG accesses the view. The average value is calculated with and without addition DISTINCT and is returned in various types.

@AbapCatalog.sqlViewName: 'DEMOCDSAVG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Avg
  as select from
    demo\_expressions
    {
      avg(          num1                   ) as avg\_no\_type,
      avg( distinct num1                   ) as avg\_no\_type\_distinct,
      avg(          num1 as abap.dec(10,0) ) as avg\_dec0,
      avg( distinct num1 as abap.dec(10,0) ) as avg\_dec0\_distinct,
      avg(          num1 as abap.dec(12,2) ) as avg\_dec2,
      avg( distinct num1 as abap.dec(12,2) ) as avg\_dec2\_distinct
    }
