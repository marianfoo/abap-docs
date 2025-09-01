---
title: "Use"
description: |
  %pky is a component group(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It serves as an identifier in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pky.htm"
abapFile: "abapderived_types_pky.htm"
keywords: ["do", "if", "case", "try", "types", "abapderived", "pky"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %pky, ABAPDERIVED_TYPES_PKY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%pky

Use

%pky is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It serves as an identifier in a transaction in which a [RAP BO instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") is created. In non-[late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenarios, %pky is equal to [%key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_key.htm) (and, thus, serves, in principle, also as an identifier for persisted RAP BO instances). In a late numbering scenario, it is equal to the combination of [%pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pid.htm) and %key. This identifier does not change between the creation of an instance and the next saving.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm)

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") except for RAP create operations, %pky can be specified, too.
-   %pky is basically another option to refer to the keys. In non-late numbering scenarios, %key is, in principal, the same as %pky since %pid is not available. In scenarios without late numbering and without [draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm), %pky is, in principal, [%tky](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_tky.htm) since [%is\_draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_is_draft.htm) is not available. As outlined in the topic [Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_keys_identifiers.htm), the use of %tky is generally preferable to %pky. However, there are special cases in which %tky is not available and %pky can be used instead, for example, implementations with [draft actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm) or save actions.

Executable Example

The example [Using %pre / %tmp / %pky](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pre_tmp_abexa.htm) demonstrates the use of %pky with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenario.