  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20behavior%20pool%2C%20ABENBEHAVIOR_POOL_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP behavior pool

ABP for short. A special [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") for an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). A behavior pool is based on a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The name of the [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") of a behavior pool is usually prefixed with BP\_ but does not implement the behavior itself. The [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") is coded in local [ABP handler classes](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") and [ABP saver classes](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the behavior pool. These classes implement the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is called by the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") when the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is accessed.

[→ More about](javascript:call_link\('abenabap_behavior_pools.htm'\))