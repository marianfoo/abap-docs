  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character.htm) → 

CDS BDL - saving options

Syntax

... *{*with additional save *\[*and cleanup*\]**}*
  *|* *{*with unmanaged save *\[*and cleanup*\]**}* ...

Variants:

[1\. ... with additional save *\[*and cleanup*\]*](#!ABAP_VARIANT_1@1@)
[2\. ... with unmanaged save *\[*and cleanup*\]*](#!ABAP_VARIANT_2@2@)

Additions:

[1\. ... and cleanup](#!ABAP_ADDITION_1@1@)

Effect

The syntax additions described in this topic are available only in a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").

The additions with additional save and with unmanaged save can be used to enhance or to replace the default save sequence in a managed RAP BO. Per default, the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry") performs a managed save. With an [additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_add_save_glosry.htm "Glossary Entry"), you can add steps to the managed save. An [unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_unman_save_glosry.htm "Glossary Entry") prevents the default and allows you to implement your own saving strategy. Both additions require a reimplementation of the [save\_modified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm) method of the [RAP saver class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

There are two options for notation:

-   In the [BDEF header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry"), directly after the keyword managed. In this case, the additional save or unmanaged save is enabled for all entities of the business object.
    
    Example: managed with additional save implementation in class ...;
    
-   As an [entity behavior property](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry"). In this case, it can be specified for each entity individually.

Example

The following example shows a managed BDEF that defines an additional save in the BDEF header.

managed with additional save
implementation in class bp\_demo\_managed\_additional\_sav unique;
strict;
define behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}

In the ABAP behavior pool, the method save\_modified tracks data changes in a log table. The complete implementation can be seen in the CCIMP include.

The ABAP program DEMO\_RAP\_MANAGED\_ADD\_SAVE uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object. It performs a create, update, and delete operations. The changes are saved and tracked in internal log tables.

Executable Example

The example shown above is displayed and explained in detail in topic [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_additional_save_abexa.htm).

Variant 1   

... with additional save

Effect

Allows you to invoke additional functionality during the standard save sequence, for example, change documents and an application log.

An implementation in the local saver class is required.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Additional Save.

Variant 2   

... with unmanaged save

Effect

Prevents the BO's managed runtime from saving changes and allows you to implement an own saving strategy instead. In case of an unmanaged save, a [persistent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_persistent_table.htm) cannot be specified.

An implementation in the local saver class is required.

Executable Example

An example for a managed RAP BO with unmanaged save is shown in topic [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_managed_unm_save_abexa.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Unmanaged Save.

Addition 1   

... and cleanup

Effect

If specified, the RAP saver method [cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm) must be redefined.