  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Behavior Definition Header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_header.htm) →  [RAP - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20strict%2C%20ABENBDL_STRICT_1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - strict

Syntax

...
strict;
...

Effect

The addition strict enables [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), version 1.

strict must always appear as the second line in a [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

A complete list of additional syntax requirements in BDEF strict mode is provided in the development guide for the ABAP RESTful Application Programming Model, section [Strict Mode - Implementation Requirements](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/761d389302e8463a9c3509907f22f22f?version=sap_cross_product_abap).

Related information:

[RAP BDL - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm)

[RAP BDL - strict(2)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict_2.htm)

Example - Managed

The following RAP behavior definition demonstrates the syntax for enabling strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry").

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

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
  field ( readonly:update ) key\_field;
}

Example - Unmanaged

The following RAP behavior definition shows an unmanaged BDEF with strict mode. It is mandatory that the keyword strict is the second statement of the behavior definition.

In this example, strict mode enforces the following:

-   Each entity must be defined as lock master or lock dependent
-   Each entity must be defined as authorization master or authorization dependent
-   The child entity must explicitly specify the to-parent association
-   The field key\_field, which is used in the ON condition of the to-parent association \_parent, must be specified as readonly.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

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
  field ( readonly ) key\_field;
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