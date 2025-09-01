  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components related to keys and RAP BO instance identification](javascript:call_link\('abapderived_types_keys_id.htm'\)) → 

%tmp

Use

%tmp is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It contains the preliminary key values and is used in the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") within the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method and, thus, only available in [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios. It is relevant for the [mapped](javascript:call_link\('abaptype_response_for.htm'\)) parameter to map preliminary to final key values in [%key](javascript:call_link\('abapderived_types_key.htm'\)), especially in case [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) is not used and temporary keys are used in [%key](javascript:call_link\('abapderived_types_key.htm'\)) during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

Further Information

[Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\))

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   MAPPED LATE

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3 demonstrates the component %tmp in the context of an [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method that takes care of assigning the final keys. See the executable program for this example further down.

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

The example [Using %pre / %tmp](javascript:call_link\('abenderived_types_tky_abexa.htm'\)) demonstrates the use of %tmp with an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") in a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario.