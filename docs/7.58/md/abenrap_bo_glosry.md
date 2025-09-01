  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20business%20object%2C%20ABENRAP_BO_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP business object

RAP BO for short. [Business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") in the context of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A RAP BO is mainly described by a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") that defines the [RAP business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") for a set of special hierarchical [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in form of RAP behavior operations and behavior characteristics. A RAP BO has [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") to handle its data that are available in a [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). There are two kinds of RAP BOs:

-   [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are fully or partly provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")
-   [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is implemented in an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

A RAP BO can be exposed as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") for access from outside [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") and is consumed by the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") then. For access to RAP BOs from inside AS ABAP, ABAP contains a subset called [ABAP Entity Manipulation Language (EML)](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry").