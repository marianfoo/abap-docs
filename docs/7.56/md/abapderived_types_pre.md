  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Components related to keys and RAP BO instance identification](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_keys_id.htm) → 

%pre

Use

%pre is a [component group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It contains [%tmp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_tmp.htm) and [%pid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_pid.htm) as components and is used in the [RAP save sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") within the [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) method. The component group is only available in [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios and relevant for the [mapped](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) parameter to map preliminary to final key values or assign final key values to [%key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_key.htm) respectively.

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_keys_identifiers.htm)

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   MAPPED LATE

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3 demonstrates the component %pre in the context of an [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) method that takes care of assigning the final keys. See the executable program for this example further down.

METHOD adjust\_numbers.
  SELECT MAX( key\_field ) FROM demo\_tab\_root\_3 INTO @DATA(final\_key).
  LOOP AT lcl\_buffer=>root\_late\_num\_buffer ASSIGNING FIELD-SYMBOL(<fs>).
    IF <fs>-final\_key\_assigned = ''.
      final\_key += 1.
      "Assign final keys in transactional buffer.
      <fs>-key\_field = final\_key.
      <fs>-final\_key\_assigned = 'X'.
      "Fill MAPPED LATE table.
      APPEND VALUE #( %pre = VALUE #( %pid = <fs>-pid
                                      %tmp-key\_field = <fs>-tmp\_key )
                      %key-key\_field = final\_key "final key
                ) TO mapped-demo\_umanaged\_root\_late\_num3.
      "Fill internal table for demonstration purposes.
      APPEND VALUE #( %pre = VALUE #( %pid = <fs>-pid
                                      %tmp-key\_field = <fs>-tmp\_key )
                      %key-key\_field = final\_key
                ) TO bp\_demo\_umanaged\_root\_late\_nu3=>mapped\_late\_table.
      "Fill REPORTED LATE table.
      APPEND VALUE #( %msg = new\_message\_with\_text(
                              severity  = if\_abap\_behv\_message=>severity-success
                              text      = 'Final key assigned!' )
                      %pid = <fs>-pid
                      %key-key\_field = final\_key
                     ) TO reported-demo\_umanaged\_root\_late\_num3.
      "Fill internal table for demonstration purposes.
      APPEND VALUE #( %msg = new\_message\_with\_text(
                              severity  = if\_abap\_behv\_message=>severity-success
                              text      = 'Final key assigned!' )
                      %pid = <fs>-pid
                      %key-key\_field = final\_key
                     ) TO bp\_demo\_umanaged\_root\_late\_nu3=>reported\_late\_table.
    ENDIF.
  ENDLOOP.
ENDMETHOD.

Executable Example

The example [Using %pre / %tmp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_tky_abexa.htm) demonstrates the use of %pre with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenario.