  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) → 

CDS BDL - determine actions

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* determine action
          *\[*([authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))  *|* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)))*\]*
           DetermineActionName
          {
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* MyDetermination1;
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* MyDetermination2;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* MyValidation1;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* MyValidation2;
           [determination](javascript:call_link\('abenbdl_determinations.htm'\)) *\[*(always)*\]* Child~ChildDetermination;
           [validation](javascript:call_link\('abenbdl_validations.htm'\)) *\[*(always)*\]* Child~ChildValidation;
           ...
          }

Effect

[Determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") allow the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to execute [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) and [validations](javascript:call_link\('abenbdl_validations.htm'\)) on request. Whenever a determine action is executed, the determinations and validations assigned to it are evaluated and then only those determinations and validations are executed whose trigger conditions are fulfilled. A determine action can include determinations defined as on save and validations. Determinations defined as on modify are not allowed.

If the optional addition always is used, then all determinations and validations that are part of the determine action are executed regardless of their trigger conditions. After a determination with the flag always has been executed, it can be triggered again by other determinations belonging to the same determine action.

Determinations and validations of [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") can be included using the syntax child~childDetermination or child~childValidation, as long as these validations and determinations do not include the trigger operation delete.

Execution order: Determinations are executed first, validations afterwards. The execution order among determinations or validations themselves is defined by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") and is independent of the specified order within the determine action.

The following [CDS BDL operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) are possible:

-   [internal](javascript:call_link\('abenbdl_internal.htm'\)) to make the respective determine action accessible only from within the business object implementation.
-   [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\)) excludes the operation in question from [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)).
-   [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)) delegates the [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) to the authorization check that is implemented for the update operation.

Availability

-   [Managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and [draft-enabled](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") RAP BOs.
    
    Caution: Not available for unmanaged, non-draft RAP BOs.
    
-   [Projection BOs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry")

In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), determine actions don't require an implementation in the [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), but the determinations and validations included in a determine action must be implemented.

In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), determine actions require an implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)) in the ABAP behavior pool.

In a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), determine actions from the base BDEF can be reused. For details on reuse, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is not possible to specify new determine actions in a projection BDEF.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Action Definition.

Hint

The [draft determine action](javascript:call_link\('abenbdl_draft_action.htm'\)) Prepare is the draft pendant to determine actions. It is documented in topic [CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)).

Example

The following example shows a managed BDEF based on the on the CDS root view entity DEMO\_SALES\_CDS\_SO\_3. The root view entity represents a sales order and the child entity represents a sales order item. The determine action trigger\_all includes the following two determinations, one from in the root entity and one from the child entity:

-   setID assigns values to the semantic key field SalesOrderId during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") whenever a new entity instance is created.
-   TotalPrice sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.
    
    managed implementation in class bp\_demo\_sales\_cds\_so\_3 unique;
    strict;
    define behavior for DEMO\_SALES\_CDS\_SO\_3 alias SalesOrder
    persistent table demo\_sales\_order
    lock master
    authorization master (instance)
    {
      create;
      update;
      association \_SalesOrderItem { create; }
      determination setID on save { create; }
      determine action trigger\_all
      {
        determination ( always ) setID;
        determination ( always ) SalesOrderItem ~ TotalPrice;
      }
      mapping for DEMO\_SALES\_ORDER
      {
        SoKey = so\_key;
        SalesOrderId = id;
        BuyerId = buyer\_id;
        Status = lifecycle\_status;
        ShipToId = ship\_to\_id;
        QuantitySum = quantity\_sum;
        UomSum = uom\_sum;
        AmountSum = amount\_sum;
        CurrencySum = currency\_sum;
        CompanyCode = company\_code;
      }
    }
    define behavior for DEMO\_SALES\_CDS\_SO\_I\_3 alias SalesOrderItem
    persistent table demo\_sales\_so\_i
    lock dependent by \_SalesOrder
    authorization dependent by \_SalesOrder
    {
      update;
      delete;
      field ( readonly : update ) ParentKey;
      determination TotalPrice on save { create; }
      association \_SalesOrder { }
      mapping for DEMO\_SALES\_SO\_I corresponding
      {
        SoItemKey = so\_item\_key;
        ParentKey = parent\_key;
        GrossAmount = gross\_amount;
      }
    }
    

The determinations are implemented in the behavior pool BP\_DEMO\_SALES\_CDS\_SO\_3.

The program DEMO\_CDS\_DETERMINE\_ACTION accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and carries out the following steps:

-   It first inserts data into the BO's [persistent database tables](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). That means that BO entity instances are available in the database, but the determinations haven't yet been triggered.
-   The determine action trigger\_all is executed with the statement MODIFY ENTITIES for two entity instances. For these two entity instances, the fields ID and TotalPrice are determined.
    
    Code snippet:
    

MODIFY ENTITIES OF demo\_sales\_cds\_so\_3
       ENTITY SalesOrder
       EXECUTE trigger\_all
       FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' )
                     ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA'   ) )
       MAPPED DATA(mapped)
       FAILED DATA(failed)
       REPORTED DATA(reported) .
    COMMIT ENTITIES.

-   The determined values are committed to the database with the statement COMMIT ENTITIES.

Result: values for the fields ID and TotalPrice are determined.

![Figure](bdoc_det_action.png)