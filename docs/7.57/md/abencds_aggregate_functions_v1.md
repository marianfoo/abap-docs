  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, aggr_expr, ABENCDS_AGGREGATE_FUNCTIONS_V1, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, aggr\_expr

Syntax

... *{* MAX( *\[*ALL*|*DISTINCT*\]* arg )
    *|* MIN( *\[*ALL*|*DISTINCT*\]* arg )
    *|* AVG( *\[*ALL*|*DISTINCT*\]* arg [*\[*AS dtype*\]*](javascript:call_link\('abencds_avg_as_v1.htm'\)) )
    *|* SUM( *\[*ALL*|*DISTINCT*\]* arg )
    *|* COUNT( DISTINCT arg )
    *|* COUNT(\*) *}* ...

Effect

Aggregate expression in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). An aggregate expression calculates a single value from an operand arg by calling an aggregate function from multiple rows of a result set. The operands can have any [data type](javascript:call_link\('abenddic_builtin_types.htm'\)) except LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB. The following table shows the possible aggregate functions:

Aggregate Function

Meaning

Result Type

MAX

Greatest value of arg

Data type of arg

MIN

Least value of arg

Data type of arg

AVG

Average value of arg (arg must be numeric). Type [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) is only supported with addition [AS dtype](javascript:call_link\('abencds_avg_as_v1.htm'\)). The types [DF16\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_...](javascript:call_link\('abenddic_builtin_types.htm'\)) for decimal free floating numbers are not supported. The types [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UTCL](javascript:call_link\('abenddic_builtin_types.htm'\)) are not supported either.

,[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), platform-dependent interim result or [dtype](javascript:call_link\('abencds_avg_as_v1.htm'\))

SUM

Sum of arg (arg must be numeric). The types [DF16\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_...](javascript:call_link\('abenddic_builtin_types.htm'\)) for decimal free floating numbers are not supported. The types [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UTCL](javascript:call_link\('abenddic_builtin_types.htm'\)) are not supported either.

Data type of arg

COUNT

If DISTINCT arg is specified, the number of distinct values of arg is counted; if \* is specified, the number of rows in the result set is counted.

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

If ALL is used, all rows in the result set are respected, which is the standard setting. If DISTINCT is used, only distinct values of arg are respected.

The following can be specified for arg:

-   A [literal](javascript:call_link\('abencds_literal_v1.htm'\))
-   A field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view
-   A [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identifies a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
-   A case distinction [CASE](javascript:call_link\('abencds_case_expression_v1.htm'\)) that returns a value

The data type of the result is defined when the CDS view is activated and is determined by the aggregate function and the value range of the data types of the operands. If the result of aggregate function AVG is returned in a result set, the result type is FLTP. As the interim result in a clause, the result type can be platform-dependent. With addition [AS dtype](javascript:call_link\('abencds_avg_as_v1.htm'\)), the result type can be defined for every operand position.

Aggregate expressions can be used as [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). Here they need an alternative element name defined using AS and require a [GROUP BY clause](javascript:call_link\('abencds_group_by_v1.htm'\)) to be used. Aggregate expressions can be compared with [literals](javascript:call_link\('abencds_literal_v1.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_having_clause_v1.htm'\)).

Hints

-   The aggregate expression SUM is calculated on the database. The database platform determines whether an overflow occurs if the result of an aggregate expression exceeds its value range.
    
    See also:
    
    -   [SAP HANA SQL Reference Guide, SUM Function (Aggregate)](https://help.sap.com/docs/HANA_SERVICE_CF/7c78579ce9b14a669c1f3295b0d8ca16/03958a1eb0ad4950b00dedd8fdda475a.html)
    -   [SAP HANA SQL Reference Guide, Numerical Effects](https://help.sap.com/docs/HANA_SERVICE_CF/7c78579ce9b14a669c1f3295b0d8ca16/4ee2f261e9c44003807d08ccc2e249ac.html)
-   The names of the aggregate functions AVG, COUNT, MAX, MIN, and SUM are protected and cannot be used as self-defined names.
-   To add aggregate expressions in the SELECT list to a CDS view using [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)), the values #PROJECTION\_LIST and #GROUP\_BY must be specified with the annotation [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_anno_v1.htm'\)).
-   The result of the aggregate functions AVG in data type FLTP is platform-dependent.
-   Caution: When using count(\*) on a [client-dependent](javascript:call_link\('abenclient_dependent_glosry.htm'\) "Glossary Entry") table which has no entries, then no result is returned. The expected behavior would be that a '0' is returned, but instead, the result field remains empty (it also does not contain the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")).
    
    count(\*) on an empty, [client-independent](javascript:call_link\('abenclient_dependent_glosry.htm'\) "Glossary Entry") table returns '0', as expected.
    

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
[CDS DDL - DDIC-Based View, AVG, AS](javascript:call_link\('abencds_avg_as_v1.htm'\))