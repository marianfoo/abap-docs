  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) →  [RAP Saver Methods](javascript:call_link\('abenabp_saver_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: map_messages, RAP Saver Method, ABENSAVER_MAP_MESSAGES, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

map\_messages, RAP Saver Method

Syntax

Declaration part:

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) base\_class ...
     ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) map\_messages [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Implementation part:

[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\)).
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) map\_messages.
      ...
      [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

[RAP saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that is declared as part of a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It has the following implicit, predefined [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
-   It is available in [behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for those [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") whose [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") includes BOs that are defined as [foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
-   Its purpose is to handle messages of foreign entities, i. e. entities that are not directly exposed, within one [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"). Depending on your business requirements, these messages might be available for the exposed RAP BO and mapped to the business context or just ignored and deleted.
-   If a RAP BO is defined as foreign entity in a BDEF, the responses in the [reported](javascript:call_link\('abaptype_response_for.htm'\)) parameter of the exposed RAP BO also contains this foreign entity as component allowing the messages returned by the foreign entity to be mapped to the business context of the exposed RAP BO.
-   It is called if the RAP BOs that are defined as foreign entities return messages in their respective saver class.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Message Mapping.

Executable Example

The example [Example for RAP Saver Method map\_messages](javascript:call_link\('abenabp_map_messages_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using unmanaged RAP BOs.