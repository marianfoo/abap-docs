  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\)) →  [OS - Persistence Service](javascript:call_link\('abenabap_object_services_persist.htm'\)) → 

OS - Persistent Object References

At runtime, the persistence service works with the instances of persistent classes, which are generally addressed and kept alive using references, as is usual in ABAP Objects. If a reference to a persistent object is to be persisted beyond the runtime of an ABAP program, for example, to work with the same object later in another ABAP program, it must be stored persistently.

To store this information in a database, two table fields of the type OS\_GUID are needed. The first field contains the class GUID generated when the persistent class is created, while the second contains the instance GUID that provides the unique global identifier for the object and its values. Both of these together form an object ID (or OID). References to objects of persistent classes that are defined by mappings and business keys cannot be stored in this way since they do not have an instance GUID.

Both fields of an OID of this type can be mapped to a single attribute of a persistent class. This attribute provides a reference to the relevant persistent object. The persistence service then handles this reference, which is not a reference variable in the original ABAP Objects sense. It also loads the persistent object to which the reference points from the database.

Creating these two fields for the class GUID and the instance GUID does not make sense unless the tables are used as the basis for a persistent class. The most common use case is to save references to other persistent objects in a persistent object accessed by a semantic key (business key), where these other objects are managed by instance GUIDs, and cannot be accessed otherwise, that is, where objects are closely interlinked.

Hint

When a persistent object is loaded that contains a reference to another persistent object as an attribute, an instance is created in the memory for the latter, but its persistent attributes are only loaded when required and not straight away.