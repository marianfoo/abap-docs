  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Keys and RAP BO Instance Identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25tky%2C%20ABAPDERIVED_TYPES_TKY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%tky

Use

%tky is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") and specifies the transactional key. A [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") must always be uniquely identifiable by its transactional key for internal processing during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

%tky contains [%key](javascript:call_link\('abapderived_types_key.htm'\)) and the draft indicator [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)) as components which makes it particularly suitable for [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios. Since %tky includes %key, %tky can also be used in non-draft scenarios for referring to the primary keys. Its use in non-draft scenarios is even recommended as a preparation for a possible later switch to a draft scenario. In doing so, lots of adaptations to the code regarding the keys and the inclusion of [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)) can be avoided.

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

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") except for RAP create operations, %tky can be specified, too.

Hint

As outlined in the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\)), the use of %tky is generally preferable in whatever context. However, there are special cases in which %tky is not available and [%pky](javascript:call_link\('abapderived_types_pky.htm'\)) can be used instead, for example, implementations with [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)) or save actions.

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_TKY demonstrates the component %tky.

MODIFY ENTITY demo\_managed\_draft\_root
UPDATE FIELDS ( field2 ) WITH VALUE #(
    ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                      %key-key\_field = 4 )
      field2 = 'up\_draft1' )
    ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                      %key-key\_field = 5 )
      field2 = 'up\_draft2' )
    ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                      %key-key\_field = 6 )
      field2 = 'up\_draft3' ) )
    MAPPED FINAL(mapped)
    FAILED FINAL(failed)
    REPORTED FINAL(reported).

Executable Example

The example [Using %tky](javascript:call_link\('abenderived_types_tky_abexa.htm'\)) demonstrates the use of %tky with a managed RAP BO in a draft and non-draft scenario.