---
title: "Persistence Service"
description: |
  The persistence service manages objects from persistent classes. Persistent classes are created by object-relational mappings in Class Builder(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm 'Glossary Entry'). The mappings are based on existing database tabl
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_persist.htm"
abapFile: "abenabap_object_services_persist.htm"
keywords: ["do", "if", "try", "class", "data", "abenabap", "object", "services", "persist"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm) → 

Persistence Service

The persistence service manages objects from persistent classes. Persistent classes are created by object-relational mappings in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry"). The mappings are based on existing database tables in ABAP Dictionary.

The attributes of these persistent objects can be saved persistently in the associated database table. Administration is made possible using the class (class agent) generated for every persistent class and various interfaces implemented by the persistent class and its class agent. The persistent class and the class agent contain predefined generated components and can both be enhanced. The class agent is the class-specific part of the persistence service. The interfaces of the persistence service, on the other hand, are the same for all persistent classes.

-   [Persistence Service Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_terms.htm)

-   [Components of the Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_comps.htm)

-   [Management States in the Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_state.htm)

-   [Object-Relational Mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_mapping.htm)

-   [Inheritance of Persistent Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_inheritance.htm)

-   [Persistent Object References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_refs.htm)

-   [Saving Persistent Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_commit.htm)

Continue
[Persistence Service Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_terms.htm)
[Components of the Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_comps.htm)
[Management States in the Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_state.htm)
[Object-Relational Mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_mapping.htm)
[Inheritance of Persistent Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_inheritance.htm)
[Persistent Object References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_refs.htm)
[Saving Persistent Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persistence_commit.htm)
![Example](exa.gif "Example") [Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_persist_abexa.htm)