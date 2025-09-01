  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %pid, ABAPDERIVED_TYPES_PID, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%pid

Use

%pid is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used as a preliminary ID that is only available if [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) is defined in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

To identify a newly created instance for internal processing during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and before the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"), %pid is assigned as a temporary identifier for [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") in the methods for [create operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm). It works as a substitute as long as there are no final key values. Hence, instances are referred to by %pid. To assign the real and final key values to the instances, the method [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm) is called before the actual saving happens with the [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm) method. The adjust\_numbers method transforms %pid into the final key values. This late key value assignment ensures that the instance can be written to the database.

Late numbering is usually specified in the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry"). Thus, late numbering gets inherited to the composition tree. Consequently, %pid components must also be reflected in the hierarchy of RAP BO instances and non-composition associations before finally setting the keys.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm)

Type

The component has the following type: ABP\_BEHV\_PID

Where used

%pid occurs in late numbering scenarios only. It is not available in static actions and functions, TYPE TABLE FOR KEY OF or TYPE STRUCTURE FOR KEY OF. In case of create operations, %pid must be filled in the [mapped](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) response parameter only.

Hint

In late numbering scenarios, not only %pid but also [%key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_key.htm) can contain preliminary keys during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"). The preliminary keys are transformed into final key values with the adjust\_numbers method.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM demonstrates the component %pid in the context of a create method that is responsible for creating %pid and mapping it to [%cid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm) in an unmanaged scenario. See the executable program for this example in the topic [Using %pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pid_abexa.htm).

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

-   The example [Using %pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pid_abexa.htm) demonstrates the use of %pid with an unmanaged RAP BO in a late numbering scenario.
-   The example [Using %pre / %tmp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pre_tmp_abexa.htm) also touches upon the use of %pid.