  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %key, ABAPDERIVED_TYPES_KEY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%key

Use

%key is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). The component group contains the primary key fields of a [RAP BO instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Thus, it serves as an identifier for persisted instances.

Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"), [%tky](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_tky.htm) can be specified, too. Since the component group %tky includes %key, it is recommended that %tky is specified instead of %key also in non- [draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm) scenarios. %tky also contains the draft indicator [%is\_draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_is_draft.htm). When using %tky in non-draft scenarios, you are prepared for a later switch to a draft scenario and you can avoid lots of adaptations in the code.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm)

Type

The key fields in %key have their original line type. In case of the use within [%control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_control.htm), the type of the key fields is ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   CREATE
-   UPDATE
-   DELETE
-   READ IMPORT
-   READ RESULT
-   READ LINK (here, as part of the structures SOURCE and TARGET)
-   ACTION IMPORT ([instance actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm))
-   ACTION RESULT (instance actions)
-   ACTION REQUEST (instance actions)
-   FUNCTION IMPORT ([instance functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm) )
-   FUNCTION RESULT (instance functions)
-   FUNCTION REQUEST (instance functions)
-   PERMISSIONS KEY
-   DETERMINATION
-   VALIDATION
-   FAILED \[EARLY*|*LATE\]
-   MAPPED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   CHANGE
-   \[INSTANCE\] FEATURES KEY
-   \[INSTANCE\] FEATURES RESULT
-   \[INSTANCE\] AUTHORIZATION KEY
-   \[INSTANCE\] AUTHORIZATION RESULT

The component also occurs within the following components

-   %control
-   [%param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_param.htm)
-   [%tmp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_tmp.htm)

Hints

-   In late numbering scenarios, not only [%pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pid.htm) but also %key can contain preliminary keys during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"). The preliminary keys are transformed into final key values with the [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm) method.
-   The components of an internal table typed with TYPE TABLE FOR KEY OF or a structure with the type TYPE STRUCTURE FOR KEY OF comprise the key fields directly and not as %key includes.

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_KEY demonstrates the component %key. It includes various options on how to refer to the key.

MODIFY ENTITY demo\_managed\_root\_4
    CREATE FROM VALUE #(
       %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                           field1 = if\_abap\_behv=>mk-on
                           field2 = if\_abap\_behv=>mk-on
                           field3 = if\_abap\_behv=>mk-on
                           field4 = if\_abap\_behv=>mk-on )
      ( %cid = 'cid1'
        %key-key\_field = 1
        field1 = 'aaa' field2 = 'bbb' field3 = 10 field4 = 11 )
      ( %cid = 'cid2'
        %key = VALUE #( key\_field = 2 )
        field1 = 'ccc' field2 = 'ddd' field3 = 20 field4 = 21 )
      ( %cid = 'cid3'
        key\_field = 3
        field1 = 'eee' field2 = 'fff' field3 = 30 field4 = 31 )
      ( %cid = 'cid4'
        %data-%key-key\_field = 4
        field1 = 'ggg' field2 = 'hhh' field3 = 40 field4 = 41 )
      ( %cid = 'cid5'
        %data-key\_field = 5
        field1 = 'iii' field2 = 'jjj' field3 = 50 field4 = 51 ) )
    "Other options for referring to the key besides using %key
    "are demonstrated.
    UPDATE FIELDS ( field2 ) WITH VALUE #(
      ( %key-key\_field = 1
        field2 = 'up1' )
      ( key\_field = 2
        field2 = 'up2' )
      ( %tky-%key-key\_field = 3
        field2 = 'up3' )
      ( %tky-key\_field = 4
        field2 = 'up4' )
      ( %tky-%pky-%key-key\_field = 5
        field2 = 'up5' )
      ( %tky-%pky-key\_field = 6
        field2 = 'up6' )
      ( %pky-key\_field = 7
        field2 = 'up7' )
      ( %pky-%key-key\_field = 8
        field2 = 'up8' )
      ( %data-%key-key\_field = 9
        field2 = 'up9' )
      ( %data-key\_field = 10
        field2 = 'up10' ) )
     MAPPED FINAL(mapped)
     FAILED FINAL(failed)
     REPORTED FINAL(reported).

Executable Example

The example [Using %key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_key_abexa.htm) demonstrates the use of %key with a managed RAP BO.