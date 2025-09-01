  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

CDS BDL - CDS projection behavior definitions

[CDS projection behavior definitions](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [CDS BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

To obtain a [RAP projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), a projection layer must be created for the some or all of the nodes of the CDS view model. Afterwards, a projection behavior definition can be created for the CDS root projection view. This projection behavior definition represents a projection of the underlying base BDEF of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"). It exposes a subset of the base BO's elements.

The following image shows the role of CDS projection behavior definitions for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry").

![Figure](rojection_bdef.jpg)
Continue
[CDS BDL - CDS behavior definition header, projection BDEF](javascript:call_link\('abenbdl_bdef_projection_header.htm'\))
[CDS BDL - entity behavior definition, projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\))