  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Amounts and Quantities](javascript:call_link\('abencds_calc_quan.htm'\)) → 

ABAP CDS - Calculated Quantity with Calculated Unit

A [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry") is a component of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") used to store a quantity in a specific unit. A calculated quantity is always the result type of a calculation using [ABAP CDS amount fields](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry") and/or [ABAP CDS quantity fields](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry"). The DDIC data type of a calculated quantity is [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)). A calculated quantity must be linked with a [ABAP CDS calculated unit](javascript:call_link\('abencds_calculated_unit_glosry.htm'\) "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure: 'calculatedUnit'](javascript:call_link\('abencds_f1_element_annotation.htm'\)). A calculated unit is a component of the same CDS view entity of data type CHAR that specifies a self-defined unit which is not contained in any list of pre-defined values. The DDIC data element DD\_CDS\_CALCULATED\_UNIT and DDIC domain DD\_CDS\_CALCULATED\_UNIT can be used to type a calculated unit, but this is not mandatory.

In CDS view entities, the following functions are available for amount and quantity fields:

-   [GET\_NUMERIC\_VALUE](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)) removes reference information from an amount or quantity field.
-   [CURR\_TO\_DECFLOAT\_AMOUNT](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)) converts an amount field of data type CURR to data type DECFLOAT34, including shifting. The result remains an amount.

Calculated quantities can be the result type of the following expressions in CDS view entities:

-   [Arithmetic expressions](javascript:call_link\('abencds_arit_exp_calc_v2.htm'\))
-   [Aggregate functions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))
-   [Simple](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) and [complex case expressions](javascript:call_link\('abencds_searched_case_expr_v2.htm'\))
-   Note: [Cast expressions](javascript:call_link\('abencds_cast_expression_v2.htm'\)) do not handle calculated quantities.

Moreover, special rules apply in the following operand positions in CDS view entities:

-   [UNION views](javascript:call_link\('abencds_union_v2.htm'\))
-   [INTERSECT views](javascript:call_link\('abencds_intersect_v2.htm'\))

Hints

-   Reference annotations to currency or unit of measurement keys are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them.
-   Currently, CDS calculated quantities are only available in CDS view entities and in CDS projection views. They are not supported in any other [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
-   If a field is a calculated quantity, this characteristic is inherited when a view entity selects from another view entity.
-   A calculated unit can be used as reference only once in a view. If a view contains several calculated quantity fields, each field needs a different calculated unit.

Example

In the following CDS view entity, the field rent\_per\_size divides the amount of the rent for an apartment by the apartment size. The result is the cost per square meter. The calculated unit is EUR/MTK, MTK being the unit ID for square meter.

@AccessControl.authorizationCheck: #NOT\_ALLOWED
@EndUserText.label: 'CDS view entity, calculated quantity'
define view entity DEMO\_CDS\_CALCULATED\_QUANTITY
  as select from demo\_rent
{
  key apartment\_id                     as ApartmentId,
      apartment\_size                   as ApartmentSize,
      apartment\_unit                   as ApartmentUnit,
      currency                         as Currency,
      
      // currency field and unit field in arith expression
      @Semantics.quantity.unitOfMeasure: 'calculatedUnit'
      rent\_decfloat34 / apartment\_size as rent\_per\_size,
      concat( concat(currency, '/' ), apartment\_unit )  
                                       as calculatedUnit
}

The program DEMO\_CDS\_CALCULATED\_QUANTITY accesses the view, inserts values into the underlying database table, and displays the result.