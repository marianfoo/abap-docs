  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) →  [CDS DDL - projection\_view, element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) →  [CDS DDL - projection\_view, expose\_assoc](javascript:call_link\('abencds_proj_view_expose_assoc.htm'\)) → 

CDS DDL - projection\_view, expose associations

This example demonstrates how to read fields via exposed associations in a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

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
      INTO TABLE @DATA(result).
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
    DATA(lo\_random\_number) = cl\_abap\_random\_int=>create(
      min  = 0
      max  = 100
    ).
    TRY.
        DO 20 TIMES.
          DATA(lv\_material\_index) =
              ( sy-index MOD lines( lt\_materials ) ) + 1.
          DATA(lv\_random\_number)  = lo\_random\_number->get\_next( ).
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