---
title: "RAP - save action"
description: |
  Syntax internal(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm) static(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_static.htm)factory save(finalizeadjustnumbersfinalize, adjustnumbers) action (  featur
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_onsave.htm"
abapFile: "abenbdl_action_onsave.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "abenbdl", "action", "onsave"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20save%20action%2C%20ABENBDL_ACTION_ONSAVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - save action

Syntax

*\[*[internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)*\]**\[* [static](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_static.htm)*\]**\[*factory*\]*
  save(finalize*|*adjustnumbers*|*finalize, adjustnumbers) action
                  *\[*(
                  *\[* [features: global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_global.htm)*\]*
                  *\[* [authorization:instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_instance.htm)*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[*[OutputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm)*\]*;

Effect

Defines a [RAP save action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_action_glosry.htm "Glossary Entry"). RAP save actions are [RAP actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") that can only be called during a specified [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") in the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Any call during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") leads to a [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Save actions are characterized by the syntax addition save. The name of the [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") during which the action can be executed is specified in brackets. finalize, adjustnumbers, or both can be specified in brackets to indicate the saver method during which the action can be called.

[Non-factory actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_nonfactory.htm) and [factory actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_factory.htm) (instance-bound and static) can be defined as save action. A default factory action, however, cannot be a save action. The respective syntax rules of the kind of action apply (non-factory, static factory, instance-bound factory).

The following [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations_additions.htm) are allowed for save actions:

-   [internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm) to make the respective action accessible only from within the business object implementation.
-   Global feature control with [(features:global)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm) enables or disables the action depending on BO-external preconditions.
-   [precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm) prevents unwanted changes from reaching the application buffer.
-   [authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth.htm) excludes the operation in question from [authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm).
-   [authorization:global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_global.htm) replaces the [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm) that is specified in the [authorization master entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry") and applies global authorization checks instead.
-   [authorization:instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_instance.htm) replaces the [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm) that is specified in the [authorization master entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry") and applies instance authorization checks instead.
-   Input parameters [InputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_input_param.htm) and output parameters [OutputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm) can optionally be added to the action signature.

Calling RAP Save Actions

A RAP save action can be called in the following contexts:

-   From an external [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").
-   In the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), from a [finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_finalize.htm) or [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) RAP saver method, according to the specification in brackets.
-   A save(finalize) action can be called from the implementation of a [RAP determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") on save.
    
    Note: This does not apply to save(adjustnumbers) actions. save(adjustnumbers) actions must not be called in determinations on save. Any attempt to do so results in a short dump.
    
    Caution: If a determination on save is executed as part of a [RAP BO determine action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry"), the execution takes place during the interaction phase. Therefore, if a RAP save action is called in a determination on save and the determination is executed as part of a determine action, a short dump occurs.
    

RAP save actions must not be called in the following contexts:

-   A RAP saver method other than the one specified in brackets. For example, a save(finalize) action must not be called during the RAP saver method adjust\_numbers. Any attempt to do so leads to a syntax check error.
-   In the implementation of a [RAP determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") on modify. If this is done, a short dump occurs.
-   If called from the implementation of any other [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"), a short dump occurs.
    
    Note: Save actions cannot be called from other save actions of the same saver method. For example, a save(adjustnumber) cannot call another save(adjustnumber) action. Any attempt to do so results in a short dump.
    

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Base BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_base_bdef_ext_glosry.htm "Glossary Entry").
-   Not available in BDEFs of any other implementation type.

Hints

-   Save actions without a RAP saver method specification are obsolete. The following syntax is not valid: save action MySaveAction. Existing save actions that do not specify a RAP saver method in brackets are automatically interpreted as save(finalize).
-   RAP save actions are required for the RAP representation of certain existing functionality which does not maintain a [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") but (from a RAP perspective) only has a save phase.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

Example - 1: Valid Calls of RAP Save Actions

The following example shows an unmanaged BDEF with four save actions.

Note: This example is intentionally kept short and simple and focuses on specific RAP aspects. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry").

unmanaged implementation in class bp\_demo\_rap\_save\_action\_u unique;
strict ( 2 );
define behavior for DEMO\_RAP\_SAVE\_ACTION\_U alias Root
late numbering
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field(readonly) key\_field;
  save ( finalize ) action A1;
  static save ( adjustnumbers ) action A2;
  factory save ( finalize, adjustnumbers ) action A3 \[1\];
  static factory save ( finalize, adjustnumbers ) action A4 \[1\];
}

The save actions are implemented in behavior pool BP\_DEMO\_RAP\_SAVE\_ACTION\_U.

The following calls are valid:

-   The save(finalize) action A1 can be called from an external EML consumer as demonstrated in the following code snippet:

    MODIFY ENTITIES OF DEMO\_RAP\_SAVE\_ACTION\_U
      ENTITY Root
      EXECUTE A1
      FROM VALUE #( ( %key-key\_field = 1 ) ).
    COMMIT ENTITIES.

-   The save(finalize) action A1 can be called from the RAP saver method finalize as follows:
    
    METHOD finalize.
      MODIFY ENTITIES OF demo\_rap\_save\_action\_u IN LOCAL MODE
        ENTITY Root
        EXECUTE A1
        FROM VALUE #( ( %key-key\_field = 2 ) ).
    ENDMETHOD.
    
-   The save(finalize) action A1 can be called from the implementation of a determination on save from another RAP BO, namely, DEMO\_RAP\_SAVE\_ACTION\_M.
    
    METHOD det\_on\_save.
    MODIFY ENTITIES OF demo\_rap\_save\_action\_u
      ENTITY Root
      EXECUTE a1
      FROM VALUE #( ( %key-key\_field = 1 ) ).
    ENDMETHOD.
    

Example - 2: Invalid Call of a RAP Save Action

The following example shows a RAP save action that is executed in an invalid context and leads to a short dump.

Note: This example is intentionally kept short and simple and focuses on specific RAP aspects. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry").

managed implementation in class bp\_demo\_rap\_save\_action\_m unique;
strict ( 2 );
define behavior for DEMO\_RAP\_SAVE\_ACTION\_M alias Root
persistent table demo\_cs\_rap\_tab1
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field ( readonly : update ) key\_field;
  save ( finalize ) action ( features : global ) A4;
  save ( adjustnumbers ) action ( features : instance ) A5;
  static factory save ( finalize, adjustnumbers ) action A6 \[1\];
  determination det\_on\_save on save { create; }
  determination det\_on\_save1 on save { create; }
  determination det\_on\_modify on modify { field key\_field; }
  determine action TriggerAll {determination(always) det\_on\_save1; }
}

The determination det\_on\_save1 calls the save(finalize) action A4. The implementation looks as follows:

METHOD det\_on\_save1.
MODIFY ENTITIES OF demo\_rap\_save\_action\_m in local mode
  ENTITY Root
  EXECUTE a4
  FROM VALUE #( ( %key-key\_field = 1 ) ).
ENDMETHOD.

If executed, the determine action TriggerAll executes the determination det\_on\_save1 during the RAP interaction phase. The determination det\_on\_save1 then calls the save(finalize) action A4. This is an invalid call and a short dump occurs.

MODIFY ENTITIES OF DEMO\_RAP\_SAVE\_ACTION\_M
    ENTITY Root
    EXECUTE TriggerAll
    FROM VALUE #( ( %key-key\_field = 1 ) ).
COMMIT ENTITIES.