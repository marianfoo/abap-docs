  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Strict%20Mode%2C%20ABENBDL_STRICT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BDEF Strict Mode

[BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") applies additional syntax checks to [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). It ensures, for example, that no outdated syntax is used, implicitly available operations are declared explicitly, and a RAP BO complies to best practices. The implementation of BDEF strict mode is provided by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry"), no implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

BDEF strict mode is available for RAP behavior definitions of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), and [abstract](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry"). To use BDEF strict mode in a RAP projection behavior definition, the base BDEF must use strict mode as a prerequisite. Base and projection must use the same version of strict mode.

Currently, there exist the following versions of strict mode:

-   Strict mode version 1, specified using [strict](javascript:call_link\('abenbdl_strict_1.htm'\))
-   Strict mode version 2, specified using [strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))

Strict mode version 2 covers all rules from strict mode version 1, plus some additional checks.

It is recommended that the most recent version of strict mode is used. In some scenarios, strict mode is even mandatory, for example when declaring a RAP BO as extensible or when releasing a BDEF as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Strict Mode](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/cbb86e63a8464e63bbdd43b7bfa5fc4f?version=sap_cross_product_abap).

Continue
[RAP - strict](javascript:call_link\('abenbdl_strict_1.htm'\))
[RAP - strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))