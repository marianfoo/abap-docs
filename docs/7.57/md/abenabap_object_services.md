---
title: "Object Services (OS)"
description: |
  Object Services is an object-oriented framework for handling relational databases. Instead of working directly with ABAP SQL statements, persistent objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpersistent_object_glosry.htm 'Glossary Entry') are used whose attributes are ma
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services.htm"
abapFile: "abenabap_object_services.htm"
keywords: ["do", "if", "try", "class", "data", "abenabap", "object", "services"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Object Services \(OS\), ABENABAP_OBJECT_SERVICES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Object Services (OS)

Object Services is an object-oriented framework for handling relational databases. Instead of working directly with ABAP SQL statements, [persistent objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpersistent_object_glosry.htm "Glossary Entry") are used whose attributes are mapped to database content. In this way the actual database access is encapsulated by the classes and interfaces of Object Services.

Object Services provide the following services for handling persistent objects on the database:

-   [Persistence service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_persist.htm)
-   [Transaction service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_transact.htm)
-   [Query service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_query.htm)

The creation of persistent classes is supported in the Class Builder by generating an object-relational mapping using the attributes of the class and automatic creation of associated class agents.

Continue
[OS - Persistence Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_persist.htm)
[OS - Transaction Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_transact.htm)
[OS - Query Service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_query.htm)
[OS - Exception Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenos_exceptions.htm)