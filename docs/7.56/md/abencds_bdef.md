  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) → 

ABAP CDS - Behavior Definitions

A [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (BDEF for short) is an ABAP repository object that defines the transactional behavior of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the context of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). The transactional behavior defines and restricts how a RAP BO can be accessed by a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). A BDEF is always based on a CDS data model that consists of at least one [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") and it refers to the root entity. A root entity can have no more that one BDEF.

A CDS behavior definition consists of a [header part](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and at least one [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry"). The entity behavior definition, in turn, is made up of [entity characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") and a [body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry"). One or more [authorization contexts](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can optionally be defined.

The following image shows the structure of a CDS behavior definition:

![Figure](bdoc_bdef_structure.png)

Further details on the parts of a CDS behavior definition can be found in the following sections:

-   [BDEF header](javascript:call_link\('abenbdl_bdef_header.htm'\))
-   [entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\))
-   [entity behavior characteristics](javascript:call_link\('abenbdl_character.htm'\))
-   [entity behavior body](javascript:call_link\('abenbdl_body.htm'\))
-   [authorization context](javascript:call_link\('abenbdl_authorization_context.htm'\))

Further Information

An exhaustive description of RAP business objects, behavior characteristics, and transactional behavior can be found in the development guide for the RESTful Application Programming Model, in section Business Object.

Continue
[ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\))