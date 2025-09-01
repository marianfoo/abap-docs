  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Keys and RAP BO Instance Identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %pre, ABAPDERIVED_TYPES_PRE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%pre

Use

%pre is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It contains [%tmp](javascript:call_link\('abapderived_types_tmp.htm'\)) and [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) as components and is used in the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") within the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method. The component group is only available in [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios and relevant for the [mapped](javascript:call_link\('abaptype_response_for.htm'\)) parameter to map preliminary to final key values or assign final key values to [%key](javascript:call_link\('abapderived_types_key.htm'\)) respectively.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   MAPPED LATE

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3 demonstrates the component %pre in the context of an [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method that is responsible for assigning the final keys. See the executable program for this example further down.

...
APPEND VALUE #( %pre = VALUE #( %pid = <fs>-pid
                                %tmp-key\_field = <fs>-tmp\_key )
                %key-key\_field = final\_key
              ) TO mapped-demo\_umanaged\_root\_late\_num3.
...

Executable Example

The example [Using %pre / %tmp / %pky](javascript:call_link\('abenderived_types_pre_tmp_abexa.htm'\)) demonstrates the use of %pre with an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") in a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario.