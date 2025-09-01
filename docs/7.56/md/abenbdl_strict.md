  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_header.htm) → 

CDS BDL - strict

Syntax

...
strict;
...

Effect

The addition strict enables [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"). When strict mode is switched on, outdated syntax which normally produces a syntax check warning leads to a syntax check error. The implementation of BDEF strict mode is provided by the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry"), no implementation in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

strict must always appear as the second line in a [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

It is recommended, but currently not enforced, to always use strict mode. Strict mode is currently mandatory and a prerequisite for [BDEF extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extension.htm) and BOs that are released by a [release contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry").

Strict mode is available for business objects of type [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [projection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), and [abstract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry").

All syntax check requirements are documented in the respective keyword topics.

Example - managed

The following CDS behavior definition demonstrates the syntax for enabling strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces [authorization control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") (authorization master ( instance, global )).

managed implementation in class bp\_demo\_rap\_strict unique;
strict;
define behavior for DEMO\_RAP\_STRICT
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( global )
{
  create;
  update;
  delete;
}

Example - unmanaged

The following CDS behavior definition shows an unmanaged BDEF with strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces the following:

-   Each entity must be defined as lock master or lock dependent
-   Each entity must be defined as authorization master or authorization dependent
-   The child entity must explicitly specify the to-parent association
-   The field key\_field, which is used in the ON condition of the to-parent association \_parent, must be specified as readonly.
    
    unmanaged implementation in class bp\_demo\_unmanaged\_root\_strict unique;
    strict;
    define behavior for DEMO\_UNMANAGED\_ROOT\_STRICT
    lock master
    authorization master ( instance )
    {
      create;
      update;
      delete;
      association \_child { create; }
    }
    define behavior for DEMO\_UNMANAGED\_CHILD\_STRICT
    lock dependent by \_parent
    authorization dependent by \_parent
    {
      update;
      delete;
      association \_parent;
      field ( readonly ) key\_field;
    }