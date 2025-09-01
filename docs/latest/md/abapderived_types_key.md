  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Keys and RAP BO Instance Identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25key%2C%20ABAPDERIVED_TYPES_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%key

Use

%key is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). The component group contains the primary key fields of a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). Thus, it serves as an identifier for persisted instances.

Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"), [%tky](javascript:call_link\('abapderived_types_tky.htm'\)) can be specified, too. Since the component group %tky includes %key, it is recommended that %tky is specified instead of %key also in non- [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios. %tky also contains the draft indicator [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)). When using %tky in non-draft scenarios, you are prepared for a later switch to a draft scenario and you can avoid lots of adaptations in the code.

Type

The key fields in %key have their original line type. In case of the use within [%control](javascript:call_link\('abapderived_types_control.htm'\)), the type of the key fields is ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   CREATE
-   UPDATE
-   DELETE
-   READ IMPORT
-   READ RESULT
-   READ LINK (here, as part of the structures SOURCE and TARGET)
-   ACTION IMPORT ([instance actions](javascript:call_link\('abenbdl_action.htm'\)))
-   ACTION RESULT (instance actions)
-   ACTION REQUEST (instance actions)
-   FUNCTION IMPORT ([instance functions](javascript:call_link\('abenbdl_function.htm'\)) )
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

The component also occurs within the following component groups:

-   %control
-   [%param](javascript:call_link\('abapderived_types_param.htm'\))
-   [%tmp](javascript:call_link\('abapderived_types_tmp.htm'\))
-   [%pky](javascript:call_link\('abapderived_types_pky.htm'\))

Assignment of Key Component Groups

As a general best practice, you should use a [RAP BO instance key component group](javascript:call_link\('abenkey_comp_group_glosry.htm'\) "Glossary Entry") when referring to the entire key, rather than listing the individual key fields. It is recommended that you use %tky whenever possible.

In the following cases, type compatibility cannot be guaranteed in component group assignments, resulting in syntax warnings:

-   Mixing key component groups when they refer to the same RAP BO entity, e.g. wa-%tky = wa-%key. Such an assignment should also be avoided when both component groups have an identical scope in terms of components (e.g. %tky and %key in non-late-numbering and non-draft scenarios).
-   Mixing the same key component groups when referring to two different RAP BO entities, for example, wa\_root-%tky = wa\_child-%tky. In this case, adding more components later may cause syntax errors for an assignment that worked previously.
-   Defining structured types that have the same components as key component groups, and then assigning data objects of that type to those of the respective, original key component group.

In the above cases, the CORRESPONDING operator can be used to ensure type compatibility in assignments to key component groups:

... %tky = CORRESPONDING #( wa-%tky ) ...
... %key = CORRESPONDING #( wa-%key ) ...
... %pky = CORRESPONDING #( wa-%pky ) ...

In cases where different data objects of key component groups of a BDEF derived type are to be assigned to the same key component group of the same entity, a direct assignment works without a syntax warning because the content is identical. A direct assignment is recommended (...wa1\_root-%tky = wa2\_root-%tky ...). The use of the CORRESPONDING operator is unnecessary and less performant. This is true, for example, for key component group assignments in the context of RAP response parameters failed and reported.

APPEND VALUE #( %tky = wa-%tky
                  ...
               ) TO failed-root\_entity.

Hints

-   In late numbering scenarios, not only [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) but also %key can contain preliminary keys during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). The preliminary keys are transformed into final key values with the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method.
-   The components of an internal table typed with TYPE TABLE FOR KEY OF or a structure with the type TYPE STRUCTURE FOR KEY OF comprise the key fields directly and not as %key includes.

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_KEY demonstrates the component %key. It includes various options on how to refer to the key.

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

The example [Using %key](javascript:call_link\('abenderived_types_key_abexa.htm'\)) demonstrates the use of %key with a managed RAP BO.