  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) → 

CDS BDL - CDS projection behavior definitions

[CDS projection behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") are created using the behavior definition language [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_source_code_glosry.htm "Glossary Entry").

To obtain a [RAP projection business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), a projection layer must be created for the some or all of the nodes of the CDS view model. Afterwards, a projection behavior definition can be created for the CDS root projection view. This projection behavior definition represents a projection of the underlying base BDEF of type [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") or [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"). It exposes a subset of the base BO's elements.

The following image shows the role of CDS projection behavior definitions for a [business service](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_service_glosry.htm "Glossary Entry").

![Figure](rojection_bdef.jpg)
Continue
[CDS BDL - CDS behavior definition header, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_projection_header.htm)
[CDS BDL - entity behavior definition, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_projection.htm)