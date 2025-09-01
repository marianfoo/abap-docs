  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Behavior Definition Header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_header.htm) →  [RAP - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20strict%282%29%2C%20ABENBDL_STRICT_2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - strict(2)

...
strict(2);
...

Effect

The addition strict(2) enables [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), version 2. When strict mode is switched on, outdated syntax which normally produces a syntax check warning leads to a syntax check error. Strict mode version 2 introduces mainly stricter checks for the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Contract violations lead to [runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"), instead of failed [assertions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glosry.htm "Glossary Entry"). Strict mode version 2 is a prerequisite for releasing a RAP BO under the [C0 contract, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry").

Strict mode version 2 must always appear as the second line in a [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Strict mode version 2 applies all checks from strict mode version 1, plus some additional syntax checks.

A complete list of additional syntax requirements in BDEF strict mode version 2 is provided in the development guide for the ABAP RESTful Application Programming Model, section [Strict Mode - Implementation Requirements](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/761d389302e8463a9c3509907f22f22f?version=sap_cross_product_abap).

Related information:

[RAP BDL - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm)

[RAP BDL - strict](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict_1.htm)

Example

The following RAP behavior definition DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL. It is intended to be released as API for extensibility under the C0 contract. Therefore, it uses strict(2).

Note: This RAP behavior definition demonstrates the design of a released API, but it is not actually released for C0.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}