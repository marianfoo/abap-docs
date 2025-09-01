  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS Behavior Definition Header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bdef_header.htm) →  [CDS BDL - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - strict\(2\), ABENBDL_STRICT_2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CDS BDL - strict(2)

...
strict(2);
...

Effect

The addition strict(2) enables [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), version 2. When strict mode is switched on, outdated syntax which normally produces a syntax check warning leads to a syntax check error. Strict mode version 2 introduces mainly stricter checks for the [RAP BO contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Contract violations lead to [runtime errors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry"), instead of failed [assertions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassertion_glosry.htm "Glossary Entry"). Strict mode version 2 is a prerequisite for releasing a RAP BO under the [C0 stability contract for extensibility](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry").

Strict mode version 2 must always appear as the second line in a [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Strict mode version 2 applies all checks from strict mode version 1, plus some additional syntax checks.

A complete list of additional syntax requirements in BDEF strict mode version 2 is provided in the development guide for the ABAP RESTful Application Programming Model, section Strict Mode - Implementation Requirements.

Related information:

[CDS BDL - BDEF Strict Mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm)

[CDS BDL - strict](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_1.htm)

Example

The following CDS behavior definition DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL. It is intended to be released as API for extensibility under the C0 contract. Therefore, it uses strict(2).

Note: This CDS behavior definition demonstrates the design of a released API, but it is not actually released for C0.

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
}