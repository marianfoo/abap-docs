  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components related to keys and RAP BO instance identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

%pky

Use

%pky is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It serves as an identifier in a transaction in which a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") is created. In non-[late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios, %pky is equal to [%key](javascript:call_link\('abapderived_types_key.htm'\)) (and, thus, serves, in principle, also as an identifier for persisted RAP BO instances). In a late numbering scenario, it is equal to the combination of [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) and %key. This identifier does not change between the creation of an instance and the next saving.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") except for RAP create operations, %pky can be specified, too.
-   %pky is basically another option to refer to the keys. In non-late numbering scenarios, %key is, in principal, the same as %pky since %pid is not available. In scenarios without late numbering and without [draft](javascript:call_link\('abenbdl_with_draft.htm'\)), %pky is, in principal, [%tky](javascript:call_link\('abapderived_types_tky.htm'\)) since [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)) is not available. As outlined in the topic [Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\)), the use of %tky is generally preferable to %pky. However, there are special cases in which %tky is not available and %pky can be used instead, for example, implementations with [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)) or save actions.