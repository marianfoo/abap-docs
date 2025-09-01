  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP for RAP Business Objects, ABENABAP_FOR_RAP_BOS, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

ABAP for RAP Business Objects

This section describes the ABAP language elements for providing and consuming [RAP business objects (RAP BOs)](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A RAP BO is mainly defined by a [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The Behavior Definition defines:

-   The [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"), which can consist of [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operations and other actions.
-   The provisioning type of the RAP BO that can be [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

The data content of a RAP BO is stored in a [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). The RAP BO operations work with the transactional buffer and must follow the [REST](javascript:call_link\('abenrest_glosry.htm'\) "Glossary Entry") paradigm.

-   For managed RAP BOs, the transactional buffer is provided and handled as a [managed transactional buffer](javascript:call_link\('abenmanaged_trans_buff_glosry.htm'\) "Glossary Entry") by the RAP BO provider. In non-standard operations of a managed RAP BO, the managed transactional buffer can be accessed by [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") statements.
-   For unmanaged RAP BOs, the transactional buffer as well as the operations of a RAP BO must be provided by [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") as an [unmanaged transactional buffer](javascript:call_link\('abenunmanaged_trans_buff_glosry.htm'\) "Glossary Entry"). There are no syntactical constraints on how an unmanaged transactional buffer is provided or handled, but it should fulfill the expectations of the [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry").

[RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") trigger the RAP BO operations. A RAP BO consumer is either the [RAP runtime framework](javascript:call_link\('abenrap_runt_framework_glosry.htm'\) "Glossary Entry") that handles requests from outside the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") or an ABAP program using [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry").

ABAP language contains elements for providing RAP BOs and for consuming RAP BOs:

-   The language elements for providing RAP BOs are necessary for [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"):
    -   [ABAP Behavior Pools (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") are special class pools for implementing the non-standard RAP BO operations. Classes of an ABP access the transactional buffer of the RAP BO, which is either managed or unmanaged.
    -   In case of a managed transactional buffer, ABAP EML must be used in the behavior implementation for accessing it. There are special EML variants that can be used in behavior implementations only.
-   The language elements for accessing RAP BOs from any ABAP program are provided by the [ABAP Entity Manipulation Language (EML)](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry"). ABAP EML statements call the operations of a RAP BO that work with the transactional buffer. The operations can be implemented by the managed RAP BO provider or in ABAP behavior implementations (unmanaged).

The following topics document the ABAP language elements for consuming and providing RAP BOs:

-   [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\))
-   [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\))
-   [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\))
-   [RAP Glossary](javascript:call_link\('abenrap_glossary.htm'\))
-   [RAP Business Object Contract - Overview](javascript:call_link\('abaprap_bo_contract.htm'\))
-   [RAP-Related System Classes](javascript:call_link\('abaprap_system_classes.htm'\))

Continue
[ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\))
[ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\))
[Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\))
[RAP Glossary](javascript:call_link\('abenrap_glossary.htm'\))
[RAP Business Object Contract - Overview](javascript:call_link\('abaprap_bo_contract.htm'\))
[RAP-Related System Classes](javascript:call_link\('abaprap_system_classes.htm'\))