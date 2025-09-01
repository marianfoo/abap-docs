---
title: "OS - Persistent Object References"
description: |
  At runtime, the persistence service works with the instances of persistent classes, which are generally addressed and kept alive using references, as is usual in ABAP Objects. If a reference to a persistent object is to be persisted beyond the runtime of an ABAP program, for example, to work with th
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_persistence_refs.htm"
abapFile: "abenos_persistence_refs.htm"
keywords: ["do", "while", "if", "case", "class", "data", "abenos", "persistence", "refs"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Persistence Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_persist.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Persistent%20Object%20References%2C%20ABENOS_PERSISTENCE_REFS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Persistent Object References

At runtime, the persistence service works with the instances of persistent classes, which are generally addressed and kept alive using references, as is usual in ABAP Objects. If a reference to a persistent object is to be persisted beyond the runtime of an ABAP program, for example, to work with the same object later in another ABAP program, it must be stored persistently.

To store this information in a database, two table fields of the type OS\_GUID are needed. The first field contains the class GUID generated when the persistent class is created, while the second contains the instance GUID that provides the unique global identifier for the object and its values. Both of these together form an object ID (or OID). References to objects of persistent classes that are defined by mappings and business keys cannot be stored in this way since they do not have an instance GUID.

Both fields of an OID of this type can be mapped to a single attribute of a persistent class. This attribute provides a reference to the relevant persistent object. The persistence service then handles this reference, which is not a reference variable in the original ABAP Objects sense. It also loads the persistent object to which the reference points from the database.

Creating these two fields for the class GUID and the instance GUID does not make sense unless the tables are used as the basis for a persistent class. The most common use case is to save references to other persistent objects in a persistent object accessed by a semantic key (business key), where these other objects are managed by instance GUIDs, and cannot be accessed otherwise, that is, where objects are closely interlinked.

Hint

When a persistent object is loaded that contains a reference to another persistent object as an attribute, an instance is created in the memory for the latter, but its persistent attributes are only loaded when required and not straight away.