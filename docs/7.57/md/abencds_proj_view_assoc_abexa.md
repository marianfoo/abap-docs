  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) →  [CDS DDL - projection\_list, Transactional Query](javascript:call_link\('abencds_proj_view_element_list.htm'\)) →  [CDS DDL - proj\_element, Transactional Query](javascript:call_link\('abencds_proj_view_element.htm'\)) →  [CDS DDL - expose\_assoc, Transactional Query](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) →  [CDS DDL - redirected, Transactional Query](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, Expose Associations, ABENCDS_PROJ_VIEW_ASSOC_ABEXA, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, Expose Associations

This example demonstrates how to read fields via exposed associations in a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

CDS projection view

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Projection View SO Item'
@Metadata.allowExtensions: true
define view entity DEMO\_SALES\_PV\_SO\_I
  as projection on
    DEMO\_SALES\_CDS\_SO\_I
    {
      key so\_item\_key                   as SalesOrderItemKey,
          parent\_key                    as SalesOrderKey,
          posnr                         as PositionNumber,
          @ObjectModel.text.element: \['MaterialName'\]
          material                      as MaterialId,
          \_Material.\_Text.material\_name as MaterialName : localized,
          @Semantics.amount.currencyCode: 'Currency'
          gross\_amount                  as GrossAmount,
          currency                      as Currency,
          @Semantics.quantity.unitOfMeasure: 'Unit'
          quantity                      as Quantity,
          unit                          as Unit,
          \_SalesOrder   :  
                  redirected to parent DEMO\_SALES\_PV\_SO,
          \_SalesOrder.buyer\_id          as BuyerID,
          \_ScheduleLine :  
                  redirected to composition child DEMO\_SALES\_PV\_SO\_I\_SL
    }

Source Code   

REPORT demo\_proj\_view\_read\_assoc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT \*
      FROM demo\_sales\_pv\_so\_i
      WHERE positionnumber > 10
      ORDER BY materialname
      INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_sales\_bupa.
    DELETE FROM demo\_sales\_mat.
    DELETE FROM demo\_sales\_order.
    DELETE FROM demo\_sales\_so\_i.
\*  Create Material
    DATA lt\_materials TYPE TABLE OF demo\_sales\_mat.
    lt\_materials = VALUE #(
      (
        matnr = 1
        mtgrp = 'METAL'
        mtart = 'METAL'
      )
      (
        matnr = 2
        mtgrp = 'HEAVY\_METAL'
        mtart = 'METAL'
      )
      (
        matnr = 3
        mtgrp = 'HEAVY\_METAL'
        mtart = 'METAL'
      )
      (
        matnr = 4
        mtgrp = 'LIGHT\_METAL'
        mtart = 'METAL'
      )
    ).
    MODIFY demo\_sales\_mat FROM TABLE lt\_materials.
\*  Create Sales Order
    DATA lt\_sales\_order TYPE TABLE OF demo\_sales\_order.
    TRY.
        lt\_sales\_order = VALUE #(
          (
            so\_key          = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            id              = 'SO\_ID0001'
            created\_at      = ''
            created\_by      = sy-uname
            created\_on      = ''
            last\_changed\_at = ''
            last\_changed\_by = ''
            last\_changed\_on = ''
            ship\_to\_id      = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            buyer\_id        = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            lifecycle\_status = 'A'
          )
          (
            so\_key          = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            id              = 'SO\_ID0002'
            created\_at      = ''
            created\_by      = sy-uname
            created\_on      = ''
            last\_changed\_at = ''
            last\_changed\_by = ''
            last\_changed\_on = ''
            ship\_to\_id      = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            buyer\_id        = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            lifecycle\_status = 'A'
          )
        ).
      CATCH cx\_uuid\_error.
    ENDTRY.
    MODIFY demo\_sales\_order FROM TABLE lt\_sales\_order.
\* Create Sales Order Items
    DATA lt\_sales\_order\_items TYPE TABLE OF demo\_sales\_so\_i.
    FINAL(lo\_random\_number) = cl\_abap\_random\_int=>create(
      min  = 0
      max  = 100
    ).
    TRY.
        DO 20 TIMES.
          FINAL(lv\_material\_index) =
              ( sy-index MOD lines( lt\_materials ) ) + 1.
          FINAL(lv\_random\_number)  = lo\_random\_number->get\_next( ).
          INSERT VALUE #(
            so\_item\_key = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            parent\_key  = lt\_sales\_order\[ 1 \]-so\_key
            posnr       = sy-index
            material    = lt\_materials\[ lv\_material\_index \]-matnr
            quantity    = lv\_random\_number
            unit        = 'KG'
            gross\_amount = lv\_random\_number \* '1.15'
            currency    = 'EUR'
          ) INTO TABLE lt\_sales\_order\_items.
          INSERT VALUE #(
            so\_item\_key = cl\_system\_uuid=>create\_uuid\_c32\_static( )
            parent\_key  = lt\_sales\_order\[ 2 \]-so\_key
            posnr       = sy-index
            material    = lt\_materials\[ 1 \]-matnr
            quantity    = lv\_random\_number
            unit        = 'KG'
            gross\_amount = lv\_random\_number \* '1.15'
            currency    = 'EUR'
          ) INTO TABLE lt\_sales\_order\_items.
        ENDDO.
      CATCH cx\_uuid\_error.
    ENDTRY.
    MODIFY demo\_sales\_so\_i FROM TABLE lt\_sales\_order\_items.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The CDS projection view DEMO\_SALES\_PV\_SO\_I is based on the CDS view DEMO\_SALES\_CDS\_SO\_I and exposes a subset of its fields. It also redirects the to-parent association to a new target and exposes one of the parent entity's fields, namely, BuyerID. The SELECT statement reads all the fields, orders them and filters them.