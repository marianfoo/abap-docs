  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Components Related to Keys and RAP BO Instance Identification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_id.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25pre%2C%20ABAPDERIVED_TYPES_PRE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%pre

Use

%pre is a [component group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It contains [%tmp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_tmp.htm) and [%pid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_pid.htm) as components and is used in the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") within the [adjust\_numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_adjust_numbers.htm) method. The component group is only available in [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm) scenarios and relevant for the [mapped](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm) parameter to map preliminary to final key values or assign final key values to [%key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_key.htm) respectively.

Further Information

[Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_identifiers.htm)

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm):

-   MAPPED LATE

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3 demonstrates the component %pre in the context of an [adjust\_numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_adjust_numbers.htm) method that is responsible for assigning the final keys. See the executable program for this example further down.

...
APPEND VALUE #( %pre = VALUE #( %pid = <fs>-pid
                                %tmp-key\_field = <fs>-tmp\_key )
                %key-key\_field = final\_key
              ) TO mapped-demo\_umanaged\_root\_late\_num3.
...

Executable Example

The example [Using %pre / %tmp / %pky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_pre_tmp_abexa.htm) demonstrates the use of %pre with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm) scenario.