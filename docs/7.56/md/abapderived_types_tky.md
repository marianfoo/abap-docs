---
title: "Use"
description: |
  %tky is a component group(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It contains %key(https://hel
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_tky.htm"
abapFile: "abapderived_types_tky.htm"
keywords: ["update", "do", "if", "case", "try", "data", "types", "abapderived", "tky"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Components related to keys and RAP BO instance identification](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_keys_id.htm) → 

%tky

Use

%tky is a [component group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It contains [%key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_key.htm) and the draft indicator [%is\_draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_is_draft.htm) as components. Hence, it is predominantly used in [draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm) scenarios for referring to the primary key because the draft indicator is already included.

Since %tky includes %key, %tky can also be used in non-draft scenarios for referring to the primary keys. Its use in non-draft scenarios is even recommended as a preparation for a later switch to a draft scenario. In doing so, lots of adaptations to the code regarding the keys and the inclusion of [%is\_draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_is_draft.htm) can be avoided.

Note: Moving %tky between two distinct types (for example, ...-%tky = ...-%tky) must be avoided to prevent errors. Instead, an expression with the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm) should be used, for example, ...-%tky = CORRESPONDING #(...-%tky).

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_keys_identifiers.htm)

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   Wherever %key can be specified within ABAP EML statements during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") except for RAP create operations, %tky can be specified, too.

Hint

As outlined in the topic [Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_keys_identifiers.htm), the use of %tky is generally preferable in whatever context. However, there are special cases in which %tky is not available and [%pky](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_pky.htm) can be used instead, for example, implementations with [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) or save actions.

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_TKY demonstrates the component %tky.

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
    MAPPED DATA(mapped)
    FAILED DATA(failed)
    REPORTED DATA(reported).

Executable Example

The example [Using %tky](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_tky_abexa.htm) demonstrates the use of %tky with a managed RAP BO in a draft and non-draft scenario.