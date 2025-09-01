---
title: "Use"
description: |
  %pid is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry') and of type ABP_BEHV_PID. It is used as a preliminary ID for RAP BO instances(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenra
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_pid.htm"
abapFile: "abapderived_types_pid.htm"
keywords: ["insert", "delete", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "abapderived", "pid"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25pid%2C%20ABAPDERIVED_TYPES_PID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%pid

Use

%pid is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and of type ABP\_BEHV\_PID. It is used as a preliminary ID for [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") and only available if [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) is defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). In the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"), %pid is transformed to the final key values.

Regarding %pid in the ...

-   [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"):
    -   %pid is assigned as a temporary identifier for [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") in the [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") for [create operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).
    -   In these methods, [%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm) must be mapped to %pid in the [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") mapped.
-   [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"):
    -   To assign the final key values to the instances, the method [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) is called before the actual saving happens with the [save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_method_save.htm) method. The adjust\_numbers method transforms %pid into the final key values.

Regarding the RAP BO instance identification in late numbering scenarios:

-   In contrast to %pid, %cid and [%cid\_ref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid_ref.htm) are only available on a short-term basis for the current ABAP EML request within the RAP interaction phase. They are no longer available in the RAP save sequence whereas %pid is indeed available there as the unique identifier for an instance. %pid is then transformed into the final keys in the RAP saver method adjust\_numbers. Hence, %pid serves as a long-term and stable ID until the final key creation which can happen at a later point in time after the instance has been created. For example, in case of a [draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm) scenario, the final key value creation can be days or weeks after the creation of an instance.
-   Apart from using %cid or %cid\_ref, the instance identification from a RAP consumer's point of view can also be done using %pid or, as it is recommended, the [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") [%tky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_tky.htm) which includes %pid and more (for example, [%key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_key.htm) if %key is to be used for containing the preliminary key instead of %pid).

Where used

-   %pid occurs in late numbering scenarios only. It is not available in static actions and functions, TYPE TABLE FOR KEY OF or TYPE STRUCTURE FOR KEY OF. In case of create operations, %cid must be mapped to a created %pid. Both must be inserted in the [mapped](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm) response parameter.
-   A RAP BO instance must always be identifiable uniquely by its transactional key (%tky) for internal processing during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"). However, in case of late numbering scenarios, instances are identified using preliminary keys in the interaction phase and the early phase of the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") before the [save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_method_save.htm) method is called. The final key value assignment only takes place in the [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) method. Therefore, the transactional key %tky also includes the preliminary ID %pid in late numbering scenarios to ensure the uniqueness also during more than one ABAP session, for example, in draft scenarios. Apart from %pid, %tky also includes %key. Depending on your use case, %key can also be used as a preliminary identifier by filling the key values with values that are only temporarily valid and transformed into the final keys not until the adjust\_numbers method. That means you can either use %pid or %key as preliminary identifiers and leave the other one initial, or you use both of them in combination for uniquely identifying RAP BO instances. In any case, the component group %tky must in total uniquely identify the instance.

Hints

-   If late numbering is specified in the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"), then late numbering is inherited by the composition tree. Consequently, %pid components must also be reflected in the hierarchy of RAP BO instances and non-composition associations before finally setting the keys.
-   %pid is contained in the component groups %tky and [%pky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_pky.htm) (while %pky itself is a component of %tky).

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_identifiers.htm)

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM demonstrates the component %pid in the context of a create method that is responsible for creating %pid and mapping it to [%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm) in an unmanaged scenario. See the executable program for this example in the topic [Using %pid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_pid_abexa.htm).

METHOD create.
  LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>).
    "Create %pid.
    DATA(system\_uuid) = cl\_uuid\_factory=>create\_system\_uuid( ).
    TRY.
        DATA(uuid\_x16) = system\_uuid->create\_uuid\_x16( ).
        system\_uuid->convert\_uuid\_x16( EXPORTING
                                         uuid = uuid\_x16
                                       IMPORTING
                                         uuid\_c22 = DATA(uuid\_c22)
                                         uuid\_c26 = DATA(uuid\_c26)
                                         uuid\_c32 = DATA(uuid\_c32) ).
      CATCH cx\_uuid\_error.
        APPEND VALUE #( %cid = <entity>-%cid )
                      TO failed-demo\_umanaged\_root\_late\_num.
    ENDTRY.
    "Insert values into unmanaged transactional buffer
    APPEND VALUE #(
    cid                = <entity>-%cid
    pid                = uuid\_x16
    instance-key\_field = <entity>-key\_field
    instance-field1    = COND #( WHEN <entity>-%control-field1
                                   NE if\_abap\_behv=>mk-off
                                 THEN <entity>-field1 )
    instance-field2    = COND #( WHEN <entity>-%control-field2
                                   NE if\_abap\_behv=>mk-off
                                 THEN <entity>-field2 )
    instance-field3    = COND #( WHEN <entity>-%control-field3
                                   NE if\_abap\_behv=>mk-off
                                 THEN <entity>-field3 )
    instance-field4    = COND #( WHEN <entity>-%control-field4
                                   NE if\_abap\_behv=>mk-off
                                 THEN <entity>-field4 )
    changed            = abap\_true
    deleted            = abap\_false ) TO lcl\_buffer=>root\_buffer.
    "Insert mapping information
    APPEND VALUE #( %pid = uuid\_x16
                    %cid = <entity>-%cid
                    %key = <entity>-%key )
                    TO mapped-demo\_umanaged\_root\_late\_num.
  ENDLOOP.
ENDMETHOD.

Executable Examples

-   The example [Using %pid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_pid_abexa.htm) demonstrates the use of %pid with an unmanaged RAP BO in a late numbering scenario.
-   The example [Using %pre / %tmp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_pre_tmp_abexa.htm) also touches upon the use of %pid.