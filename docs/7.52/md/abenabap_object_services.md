---
title: "Object Services"
description: |
  Object Services is an object-oriented framework for working with relational databases. Instead of working directly with Open SQL statements, persistent objects(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_object_glosry.htm 'Glossary Entry') are used whose attributes ar
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm"
abapFile: "abenabap_object_services.htm"
keywords: ["do", "try", "class", "data", "abenabap", "object", "services"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) → 

Object Services

Object Services is an object-oriented framework for working with relational databases. Instead of working directly with Open SQL statements, [persistent objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_object_glosry.htm "Glossary Entry") are used whose attributes are mapped to database content. In this way the actual database access is encapsulated by the classes and interfaces of Object Services.

Object Services provide the following services for handling persistent objects on the database:

-   [Persistence service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_persist.htm)

-   [Transaction service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_transact.htm)

-   [Query service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_query.htm)

Persistent objects are based on [persistent classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpersistent_class_glosry.htm "Glossary Entry"). The creation of persistent classes is supported in Class Builder by generating an object-relational mapping using the attributes of the class and automatic creation of associated class agents.

Continue
[Persistence Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_persist.htm)
[transaction service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_transact.htm)
[Query Service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_query.htm)
[Exception Classes of Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_exceptions.htm)