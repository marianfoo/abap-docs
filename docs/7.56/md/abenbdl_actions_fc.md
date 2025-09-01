  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - RAP BO operation, additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

CDS BDL - feature control

Syntax

... (features:instance)
  *|* (features:global) ...

Variants:

[1\. ... (features:instance)](#!ABAP_VARIANT_1@1@)
[2\. ... (features:global)](#!ABAP_VARIANT_2@2@)

Effect

Defines [feature control](javascript:call_link\('abenrap_feature_control_glosry.htm'\) "Glossary Entry") for a [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"). With feature control, operations can be enabled or disabled.

There are two variants available:

-   [Instance feature control](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry")
    
    Operations of a business object can be enabled or disabled depending on instance-specific criteria, for example on the value of a specific field or the value of referenced data. For example, if the status of a BO instance is set to archived, all modifying operations can be disabled by means of instance feature control.
    
    An implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR INSTANCE FEATURES](javascript:call_link\('abaphandler_meth_features.htm'\)) is mandatory.
    
-   [Global feature control](javascript:call_link\('abenrap_glo_feature_control_glosry.htm'\) "Glossary Entry")
    
    Operations of a business object can be enabled or disabled globally. That means, the decision is independent of the state of the individual entity instance. An operation can be globally enabled or disabled, for example, by interpreting a feature toggle state.
    
    An implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR GLOBAL FEATURES](javascript:call_link\('abaphandler_meth_global_features.htm'\)) is mandatory.
    

If an operation is disabled by means of feature control, it is grayed out on the user interface of an OData application. If an external [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") tries to execute a disabled operation with EML, the operation fails and an entry is returned in the [failed](javascript:call_link\('abapeml_response.htm'\)) structure.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Feature Control.

Hints

-   Feature control can't be used for [internal operations](javascript:call_link\('abenbdl_internal.htm'\)).
-   Feature control runtime checks are not evaluated for EML calls with the addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)).
-   The EML statement [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) can be used to get information about disabled operations.
-   In UI scenarios, feature control is displayed as [RAP consumer hint](javascript:call_link\('abenrap_consumer_hint_glosry.htm'\) "Glossary Entry").

Variant 1   

... features:instance

Effect

Instance feature control enables or disables operations depending on the state of the BO entity instance. Instance feature control can be defined for the following operations:

-   the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) update and delete
-   [operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [actions](javascript:call_link\('abenbdl_action.htm'\))
-   the [draft action Edit](javascript:call_link\('abenbdl_draft_action.htm'\)).

Example

The following example shows a managed BDEF that defines dynamic feature control for the standard operation update.

managed implementation in class bp\_demo\_rap\_operation\_fc unique;
strict;
define behavior for DEMO\_RAP\_OPERATION\_FC
persistent table demo\_dbtab\_field
lock master
authorization master (global)
{
  create;
  update ( features : instance );
  delete;
}

In the ABAP behavior pool, the following is specified: if field int\_field1 > 50, then the update operation is disabled.

METHOD get\_instance\_features.
  READ ENTITIES OF demo\_rap\_operation\_fc IN LOCAL MODE
  ENTITY demo\_rap\_operation\_fc
        FIELDS (  int\_field1 int\_field2 )
          WITH CORRESPONDING #( keys )
            RESULT DATA(lt\_result)
            REPORTED reported
            FAILED failed.
  LOOP AT lt\_result INTO DATA(ls\_so).
    result = VALUE #( FOR ls\_result IN lt\_result
             ( %key = ls\_result-%key
               %features-%update = COND #(
                                   WHEN ls\_so-int\_field1 > 50
                                   THEN if\_abap\_behv=>fc-o-disabled
                                   ELSE if\_abap\_behv=>fc-o-enabled
                                   ) ) ).
  ENDLOOP.
ENDMETHOD.

For the complete implementation, see CCIMP include

The ABAP program DEMO\_RAP\_FC\_OPERATION uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object.

-   First, it inserts two entity instances directly onto the database using ABAP SQL INSERT:
    -   one of them has the value '1' for field int\_field1.
    -   the second one has value '55' for field int\_field1. Therefore, it fulfills the condition that triggers feature control: for this instance, the update operation is disabled.
-   An EML [UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) operation is executed on both instances, which updates field int\_field2.
-   Using the ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the content of the underlying database table is displayed.

Result: the first entity instance is updated successfully. For the second entity instance, the update operation fails and an entry is returned in the failed structure. The update was prevented by the dynamic feature control runtime check.

![Figure](bdoc_fc_op.png)

Variant 2   

... features:global

Effect

Global feature control enables or disables operations instance-independently. Global feature control can be defined for the following operations:

-   the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete
-   [operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [actions](javascript:call_link\('abenbdl_action.htm'\))

Example

The following example shows an unmanaged BDEF that defines global feature control for the standard operation delete.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_fc unique;
strict;
define behavior for DEMO\_RAP\_UNMANAGED\_FC
lock master
authorization master ( instance )
{
  create;
  update;
  delete ( features : global );
}

In the ABAP behavior pool, the following is specified: delete operations are allowed only in the time period between 10 pm and 6 am.

METHOD get\_global\_features.
  DATA(time1) = CONV t( '060000' ).
  DATA(time2) = CONV t( '220000' ).
  result = VALUE #( %delete = COND #( WHEN sy-uzeit
                                    BETWEEN time1 AND time2
                                    THEN if\_abap\_behv=>fc-o-disabled
                                    ELSE if\_abap\_behv=>fc-o-enabled )
                  ).
  IF result-%delete = if\_abap\_behv=>fc-o-disabled.
    APPEND VALUE #( %msg  = new\_message\_with\_text(
          text     = 'Delete is only allowed between 10 pm and 6 am.'
          severity = if\_abap\_behv\_message=>severity-error )
          %global = if\_abap\_behv=>mk-on )
          TO reported-demo\_rap\_unmanaged\_fc.
  ENDIF.
ENDMETHOD.

For the complete implementation, see CCIMP include

The ABAP program DEMO\_RAP\_UNMANAGED\_FC uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object.

-   Three entity instances are created.
-   An attempt is made to delete one of the entity instances.
    -   In the time period between 10 pm and 6 am (night shift), the delete operation is successful.
    -   In the time period between 6 am and 10 pm (day shift), the delete operation is disabled and an error message is returned.

Result: In this example, the delete operation is not allowed and an error message is returned.

![Figure](bdoc_global_fc.jpg)