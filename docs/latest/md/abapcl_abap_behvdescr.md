  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Related ABAP Language Elements and Topics](javascript:call_link\('abenabap_rap_other.htm'\)) →  [RAP-Related System Classes and Functionality](javascript:call_link\('abaprap_system_classes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHVDESCR%2C%20ABAPCL_ABAP_BEHVDESCR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHVDESCR

The class CL\_ABAP\_BEHVDESCR contains methods for [Runtime Type Creation (RTTI)](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") and [Runtime Type Creation (RTTC)](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") in the context of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") in RAP. This means that BDEF derived type information can be retrieved at runtime. Derived types can also be defined at runtime.

The following list shows a selection of available methods:

-   GET\_ROOT, GET\_ROOTS\_OF\_ENTITIES: Getting the root entity or entities for a given entity
-   GET\_TYPE: Getting runtime type information for entities and operations
-   CREATE\_DATA: Creating data objects typed with BDEF derived types (CRUD or action)
-   GET\_ABS\_TYPENAME: Getting the [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") for entities and operations
-   SET\_CONTROL\_FLAG, GET\_CONTROL\_FLAG, GET\_CONTROL\_FIELDS: Filling or getting [%control](javascript:call_link\('abapderived_types_control.htm'\)) fields
-   GET\_FOREIGN\_ENTITIES: Getting [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") and aliases
-   GET\_CONTRACTS: Getting [API classification](javascript:call_link\('abapapi_classification.htm'\))

Further Information

For more information, see the class documentation and the [Runtime Type Services (RTTS)](javascript:call_link\('abenrtti.htm'\)) topic.

Executable Example

[Getting Type Information Using CL\_ABAP\_BEHVDESCR](javascript:call_link\('abenrap_type_info_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Getting BDEF Derived Type Information Using CL\_ABAP\_BEHVDESCR](javascript:call_link\('abenrap_type_info_abexa.htm'\))