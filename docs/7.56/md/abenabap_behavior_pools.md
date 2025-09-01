  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) → 

ABAP Behavior Pools (ABP)

The [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is a special class pool for an ABAP behavior implementation and based on a [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The [global class](javascript:call_link\('abapclass_for_behavior_of.htm'\)) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](javascript:call_link\('abenabp_handler_class.htm'\)) and one RAP [saver class](javascript:call_link\('abenabp_saver_class.htm'\)) in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") when the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is accessed.

-   [CLASS, FOR BEHAVIOR OF](javascript:call_link\('abapclass_for_behavior_of.htm'\))
-   [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\))
-   [RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\))

Continue
[CLASS, FOR BEHAVIOR OF](javascript:call_link\('abapclass_for_behavior_of.htm'\))
[RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\))
[RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\))