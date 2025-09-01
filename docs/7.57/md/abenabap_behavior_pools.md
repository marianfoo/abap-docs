  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Behavior Pools \(ABP\), ABENABAP_BEHAVIOR_POOLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Behavior Pools (ABP)

The [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is a special class pool for an ABAP behavior implementation and based on a [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The [global class](javascript:call_link\('abapclass_for_behavior_of.htm'\)) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](javascript:call_link\('abenabp_handler_class.htm'\)) and one RAP [saver class](javascript:call_link\('abenabp_saver_class.htm'\)) in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") when the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is accessed.

-   [CLASS, FOR BEHAVIOR OF](javascript:call_link\('abapclass_for_behavior_of.htm'\))
-   [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\))
-   [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\))

Further Information

Make sure that you fulfill the [RAP Business Object Contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](javascript:call_link\('abaprap_bo_contract.htm'\)).

Continue
[CLASS, FOR BEHAVIOR OF](javascript:call_link\('abapclass_for_behavior_of.htm'\))
[RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\))
[RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\))