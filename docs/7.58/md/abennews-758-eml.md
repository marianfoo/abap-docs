  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.58](javascript:call_link\('abennews-758.htm'\)) →  [ABAP RESTful Application Programming Model in ABAP Release 7.58](javascript:call_link\('abennews-758-restful.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-EML%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML in ABAP Release 7.58

Modification

Entity Manipulation Language

-   [SET ENTITIES](javascript:call_link\('abapset_entities.htm'\))
    
    It is now possible block or unblock the ABAP EML access to RAP business objects using this statement.
    
-   [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\))
    
    Raises a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry").
    
-   [METHODS, FOR ENTITY EVENT](javascript:call_link\('abenmethod_for_entity_event.htm'\))
    
    Supports [RAP event handler method](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry") definitions.
    
-   [CLASS, FOR EVENTS OF](javascript:call_link\('abenclass_for_events.htm'\))
    
    Support the creation of [RAP event handler classes](javascript:call_link\('abenrap_event_handler_class_glosry.htm'\) "Glossary Entry").
    
-   [CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER](javascript:call_link\('abencl_abap_behavior_event_handler.htm'\))
    
    Local classes that inherit from CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER can be implemented in the CCIMP include of a RAP event handler class to locally consume RAP business events.
    
-   [CL\_ABAP\_TX](javascript:call_link\('abaprap_cl_abap_tx.htm'\))
    
    Used to explicitly set transitions for RAP transactional phases.
    
-   [Classifying APIs for Transactional Consistency](javascript:call_link\('abapapi_classification.htm'\))
    
    Released APIs can contain classifications for methods to ensure transactional consistency of custom extensions within the SAP LUW. Classifications with IF\_ABAP\_TX\_\* are available for this.