---
title: "ABAP CDS - Analytical Scalar Functions"
description: |
  Analytical scalar functions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_glosry.htm 'Glossary Entry') are scalar functions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm 'Glossary Entry') that are evaluated by an ana
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_function.htm"
abapFile: "abencds_ana_scalar_function.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "ana", "scalar", "function"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Analytical%20Scalar%20Functions%2C%20ABENCDS_ANA_SCALAR_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP CDS - Analytical Scalar Functions

[Analytical scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry") are [scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") that are evaluated by an analytical runtime environment.

They can be specified in the [element list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) of [analytical projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry").

Analytical scalar functions are delivered by SAP. They can only be defined and implemented internally by SAP. They are available for internal and external use in [CDS analytical queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_analytic_query_glosry.htm "Glossary Entry").

SAP-Delivered Analytical Scalar Functions

The following analytical scalar functions are delivered by SAP. They are released under the [C1 contract for system-internal use](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_glosry.htm "Glossary Entry").

-   CALENDAR\_OPERATION
-   CALENDAR\_SHIFT
-   DEVIATION\_RATIO
-   HRY\_NODE\_SIGN\_VALUE
-   RATIO\_OF
-   SQRT

Example

The following example demonstrates the use of an analytical scalar function provided by SAP.

-   The projected entity DEMO\_CDS\_CUBE\_VIEW is a cube view.
-   The provider contract is set to ANALYTICAL\_QUERY.
-   The analytical scalar function RATIO\_OF is used in the element list to calculate the ratio of the final value of the field amount\_sum compared to the original value. The final value subtracts a discount from the original value and adds taxes.
    
    @EndUserText.label: 'Analytical scalar function'
    @AccessControl.authorizationCheck: #NOT\_ALLOWED
    define transient view entity DEMO\_CDS\_USE\_ANA\_SCALAR
      provider contract analytical\_query
      as projection on DEMO\_CDS\_CUBE\_VIEW
    {
              @AnalyticsDetails.query.axis: #FREE
              so\_key                as SalesOrderKey,
              @AnalyticsDetails.query.axis: #ROWS
              lifecycle\_status      as LifecycleStatus,
              @AnalyticsDetails.query.axis: #ROWS
              created\_on            as SellingDate,
              @AnalyticsDetails.query.axis: #COLUMNS
              amount\_sum            as AmountSum,
              @AnalyticsDetails.query.axis: #COLUMNS
              $projection.AmountSum as DuplicatedAmountSum,
              @AnalyticsDetails.query.hidden: true
              currency\_sum          as CurrencyOfAmount,
              @AnalyticsDetails.query.axis: #COLUMNS
              quantity\_sum          as QuantitySum,
              @AnalyticsDetails.query.hidden: true
              uom\_sum               as UnitOfQuantity,
              @Aggregation.default: #FORMULA
              abap.decfloat34'0.05' as Discount,
              @Aggregation.default: #FORMULA
              abap.decfloat34'1.19' as Tax,
              @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'
              @Aggregation.default: #FORMULA
              curr\_to\_decfloat\_amount( amount\_sum )
                                         / $projection.QuantitySum
                                    as AmountPerQuantity,
      virtual AmPerQuanUnit : abap.char(3),
              @Semantics.amount.currencyCode: 'CurrencyOfAmount'
              @Aggregation.default: #FORMULA
              curr\_to\_decfloat\_amount( amount\_sum )
                - ( curr\_to\_decfloat\_amount( amount\_sum )
                \* $projection.Discount )
                                    as AmountSumDiscounted,
              @Semantics.amount.currencyCode: 'CurrencyOfAmount'
              @Aggregation.default: #FORMULA
              $projection.AmountSumDiscounted \* $projection.Tax
                                    as AmountSumDiscountedTaxed,
              @Aggregation.default: #FORMULA
              ratio\_of(
                portion => ( get\_numeric\_value( amount\_sum )
                              - get\_numeric\_value( amount\_sum )
                              \* $projection.Discount ) \* $projection.Tax,
                total   => get\_numeric\_value( amount\_sum ) )
                                    as AmountRatioFinalToOriginal
    }