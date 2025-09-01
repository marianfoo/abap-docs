  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: OS - Persistence Service, ABENABAP_OBJECT_SERVICES_PERSIST, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

OS - Persistence Service

The persistence service manages objects from persistent classes. Persistent classes are created by object-relational mappings in the [Class Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_builder_glosry.htm "Glossary Entry"). The mappings are based on existing database tables in the ABAP Dictionary.

The attributes of these persistent objects can be stored persistently in the associated database table. Administration takes place using the class (class agent) generated for every persistent class and various interfaces implemented by the persistent class and its class agent. The persistent class and the class agent contain predefined generated components and can both be enhanced. The class agent is the class-specific part of the persistence service. The interfaces of the persistence service, on the other hand, are the same for all persistent classes.

-   [Persistence Service Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_terms.htm)
-   [Components of the Persistence Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_comps.htm)
-   [Management States in the Persistence Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_state.htm)
-   [Object-Relational Mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_mapping.htm)
-   [Inheritance of Persistent Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_inheritance.htm)
-   [Persistent Object References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_refs.htm)
-   [Saving Persistent Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_commit.htm)

Continue
[OS - Persistence Service, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_terms.htm)
[OS - Components of the Persistence Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_comps.htm)
[OS - Management States in the Persistence Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_state.htm)
[OS - Object-Relational Mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_mapping.htm)
[OS - Inheritance of Persistent Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_inheritance.htm)
[OS - Persistent Object References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_refs.htm)
[OS - Saving Persistent Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persistence_commit.htm)
![Example](exa.gif "Example") [OS - Persistency Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_persist_abexa.htm)