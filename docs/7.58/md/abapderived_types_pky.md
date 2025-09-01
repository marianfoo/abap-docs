  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25pky%2C%20ABAPDERIVED_TYPES_PKY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%pky

Use

%pky is a [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It serves as an identifier in a transaction in which a [RAP BO instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") is created. In non-[late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios, %pky is equal to [%key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_key.htm) (and, thus, serves also as an identifier for persisted RAP BO instances). In a late numbering scenario, it is equal to the combination of [%pid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_pid.htm) and %key. This identifier does not change between the creation of an instance and the next saving.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") except for RAP create operations, %pky can be specified, too.
-   %pky is basically another option to refer to the keys. In non-late numbering scenarios, %key is the same as %pky since %pid is not available. In scenarios without late numbering and without [draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm), %pky is [%tky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_tky.htm) since [%is\_draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_is_draft.htm) is not available. As outlined in the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_identifiers.htm), the use of %tky is generally preferable to %pky. However, there are special cases in which %tky is not available and %pky can be used instead, for example, implementations with [draft actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm) or save actions.

Assignment of Key Component Groups

As a general best practice, you should use a [RAP BO instance key component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkey_comp_group_glosry.htm "Glossary Entry") when referring to the entire key, rather than listing the individual key fields. It is recommended that you use %tky whenever possible.

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

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_keys_identifiers.htm)

Executable Example

The example [Using %pre / %tmp / %pky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_pre_tmp_abexa.htm) demonstrates the use of %pky with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenario.