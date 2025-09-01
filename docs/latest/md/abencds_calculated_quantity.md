  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_types.htm) →  [ABAP CDS - Special Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/aben_cds_special_data_types.htm) →  [ABAP CDS - Amounts and Quantities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calc_quan.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Calculated%20Quantity%20with%20Calculated%20Unit%2C%20ABENCDS_CALCULATED_QUANTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

ABAP CDS - Calculated Quantity with Calculated Unit

A [CDS calculated quantity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry") is a component of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or of a [CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") used to store a quantity in a specific unit. A calculated quantity is always the result type of a calculation using [ABAP CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and/or [ABAP CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"). The DDIC data type of a calculated quantity is [DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). A calculated quantity must be linked with a [ABAP CDS calculated unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure: 'calculatedUnit'](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm). A calculated unit is a component of the same CDS view entity of data type CHAR that specifies a user-defined unit which is not contained in any list of pre-defined values. The DDIC data element DD\_CDS\_CALCULATED\_UNIT and DDIC domain DD\_CDS\_CALCULATED\_UNIT can be used to type a calculated unit, but this is not mandatory.

In CDS view entities, the following functions are available for amount and quantity fields:

-   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm) removes reference information from an amount or quantity field.
-   [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm) converts an amount field of data type CURR to data type DECFLOAT34, including shifting. The result remains an amount.

Calculated quantities can be the result type of the following expressions in CDS view entities:

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arit_exp_calc_v2.htm)
-   [Aggregate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm)
-   [Simple](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_case_expression_v2.htm) and [complex case expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_searched_case_expr_v2.htm)
-   Note: [Cast expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) do not handle calculated quantities.

Moreover, special rules apply in the following operand positions in CDS view entities:

-   [UNION views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v2.htm)
-   [INTERSECT views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_intersect_v2.htm)
-   [Comparisons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_types_v2.htm)

Hints

-   Reference annotations to currency or unit of measurement keys are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them.
-   Currently, CDS calculated quantities are only available in CDS view entities and in CDS projection views. They are not supported in any other [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").
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

The class CL\_DEMO\_CDS\_CALCULATED\_QUNTTY accesses the view, inserts values into the underlying database table, and displays the result.