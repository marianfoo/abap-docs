  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Persistence Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_persist.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Object-Relational%20Mapping%2C%20ABENOS_PERSISTENCE_MAPPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Object-Relational Mapping

Technically speaking, all objects in ABAP Objects, including persistent objects managed by the Persistence Service, exist only transiently in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an ABAP program. Conversely, AS ABAP data exists persistently in the database. The persistence of objects is achieved by object-relational mapping between database tables and the attributes of persistent classes. The mapping of existing persistent classes is defined using the Mapping Assistant of the Class Builder. The support of the Mapping Assistant is stopped, and no new mappings should be created.

Mapping by Business Key   

When business keys are used to map objects, object-oriented programming is applied to existing relational database tables in existing applications. The Class Builder generated a key attribute in the persistent class for each field of the primary key of a database table. Mapping by business key involves mapping the key attributes to the primary key of an existing database table. At runtime, the Persistence Service links each managed object of such a persistent class to the table entry whose key field values match the key attributes.

The key attributes of a persistent class cannot be modified. There are only GET methods, no SET methods. The key attributes form the business key of a persistent class. Thus, a business key is a semantic key that is visible externally.

Example

See the persistent class CL\_SPFLI\_PERSISTENT. This class has a persistence mapping to columns in the database table SPFLI. The key fields CARRID and CONNID in the table SPFLI are mapped to identically named key attributes in the class. The other columns are linked to value attributes.

Mapping by Instance-GUID   

To map database tables and objects using instance GUIDs, special tables must be created that have exactly one primary key field of the type OS\_GUID from the ABAP Dictionary. The Persistence Service uses the key field to address the managed objects internally. The persistent class does not have a corresponding key attribute.

The key column of this special table is filled with the instance GUIDs. Each instance GUID is unique within a client. At runtime, the Persistence Service distinguishes each object of the persistent class using its instance GUID and assigns it to a single row in the database table accordingly. All remaining fields in the database table can then be mapped to value attributes of the persistent class.

Thus, the instance GUID is a fixed-length technical key that is externally invisible and that allows simple access to instances, particularly where the objects are closely interlinked.

When mapping a persistent object by business key, a reference to it can be obtained by specifying a semantic key. However, this is not possible for objects mapped by instance GUID. The reference must be obtained in a different way before the object is first accessed in a program and must then manage itself (in an internal table, for example). Mapping by instance GUID and business key can be used to simplify this process.

Mapping solely by instance GUID is best suited to objects that are purely dependent on other objects, since they do not have to be accessed explicitly in the ABAP program. These objects can be stored long-term by storing their object references persistently.

Mapping by Instance GUID and Business Key   

This type of mapping is a combination of mapping by business key and mapping by instance GUID. The relevant tables must have a field of the type OS\_GUID from the ABAP Dictionary, as well as their application-specific primary key. To do this, either special tables must be created or a field of type OS\_GUID added to existing tables. The system generates a key attribute and thus a business key for each primary key field, just as in mapping by business key. The type OS\_GUID field acts as an independent key that provides access to the object using an instance GUID. It is advisable to create this field as a unique secondary index.

Each table row can thus be uniquely identified either using the instance GUID or a business key. The Persistence Service manages the objects of persistent classes mapped to these database tables internally, using the instance GUID. However, it also allows them to be addressed using business keys.

In an ABAP program, for example, the business key can be used to get a reference to object of this type, which can then be used for further processing.

Single-Table Mapping   

In the simplest form of mapping, exactly one database table is assigned to one persistent class. This is known as single-table mapping. At runtime, the system links one persistent object of the persistent class to exactly one entry in this table. Within an internal session, the Persistence Service provides a unique connection between the table entry and the object.

Multitable Mapping   

In multitable mapping, multiple database tables are assigned to a persistent class. Then at runtime, the system links each persistent object of this class to an entry in each of the tables involved. The key of each of these tables must have the same type.

Structure Mapping   

In this case, the mapping is performed to the ABAP Dictionary structures, rather than to database tables or DDIC database views. The application developer therefore has to program the type of persistent data storage in the relevant methods of the class agent.

A structure mapping is necessary, for example, if a persistent object is to contain table-like attributes. Database tables can only have flat structures, which prevents the object from being mapped to a table in this case. Even if a different form of persistent data storage is to be used, for example, files on the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the AS instance, structure mapping has to be used.