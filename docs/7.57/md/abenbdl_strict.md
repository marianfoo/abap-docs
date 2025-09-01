  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS Behavior Definition Header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bdef_header.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Strict Mode, ABENBDL_STRICT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

CDS BDL - BDEF Strict Mode

[BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") applies additional syntax checks to [CDS behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). It ensures, for example, that no outdated syntax is used, implicitly available operations are declared explicitly, and a RAP BO complies to best practices. The implementation of BDEF strict mode is provided by the [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry"), no implementation in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

BDEF strict mode is available for CDS behavior definitions of type [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), [projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), and [abstract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"). To use BDEF strict mode in a CDS projection behavior definition, the base BDEF must use strict mode as a prerequisite. Base and projection must use the same version of strict mode.

Currently, there exist the following versions of strict mode:

-   Strict mode version 1, specified using [strict](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_1.htm)
-   Strict mode version 2, specified using [strict(2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm)

Strict mode version 2 covers all rules from strict mode version 1, plus some additional checks.

It is recommended that the most recent version of strict mode is used. In some scenarios, strict mode is even mandatory, for example when declaring a RAP BO as extensible or when releasing a BDEF as [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Strict Mode.

Continue
[CDS BDL - strict](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_1.htm)
[CDS BDL - strict(2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm)