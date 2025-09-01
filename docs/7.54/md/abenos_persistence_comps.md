---
title: "Components of the Persistence Service"
description: |
  The persistence service is a software layer that manages persistent objects. This software layer consists of a general part and a class-specific part. It is made up of global classes and interfaces from the Class Library. The class-specific part is specially generated for each existing persistent cl
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenos_persistence_comps.htm"
abapFile: "abenos_persistence_comps.htm"
keywords: ["delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenos", "persistence", "comps"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services.htm) →  [Persistence Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_object_services_persist.htm) → 

Components of the Persistence Service

The persistence service is a software layer that manages persistent objects. This software layer consists of a general part and a class-specific part. It is made up of global classes and interfaces from the Class Library. The class-specific part is specially generated for each existing persistent class.

-   [CL\_persistent](#abenos-persistence-comps-1--------classes-ca--persistent-and-cb--persistent---@ITOC@@ABENOS_PERSISTENCE_COMPS_2)

-   [Interfaces for the Class Agent](#abenos-persistence-comps-3--------management-interface-for-the-persistent-class---@ITOC@@ABENOS_PERSISTENCE_COMPS_4)

-   [Other Interfaces and Classes](#abenos-persistence-comps-5--------agent-attribute-of-the-class-agent---@ITOC@@ABENOS_PERSISTENCE_COMPS_6)

-   [Most Important Methods of the Class Agent](#abenos-persistence-comps-7--------methods-inherited-from-cb--persistent---@ITOC@@ABENOS_PERSISTENCE_COMPS_8)

-   [Methods of the Interface IF\_OS\_FACTORY](#abenos-persistence-comps-9--------methods-of-the-interface-if--os--ca--persistency---@ITOC@@ABENOS_PERSISTENCE_COMPS_10)

-   [Methods of the Interface IF\_OS\_CA\_INSTANCE](#abenos-persistence-comps-11--------methods-of-if--os--state---@ITOC@@ABENOS_PERSISTENCE_COMPS_12)

CL\_persistent

The class CL\_persistent is a class created as a persistent class using Class Builder. The objects of this class are managed by the persistence service. These objects are known as managed objects (note that a managed object does not necessarily have to be a persistent object). Class Builder generates the SET and GET methods for the attributes of this class.

Classes CA\_persistent and CB\_persistent

For each persistent class (CL\_persistent), Class Builder generated two further classes: CA\_persistent and CB\_persistent. These classes form the class-specific part of the persistence service. CB\_persistent is a subclass of a general abstract superclass of all class agents, CL\_OS\_CA\_COMMON.

CA\_persistent is known as the class agent (or class actor), which is used to manage the managed object of the class CL\_persistent, and where database accesses actually take place. The class agent inherits its methods from the abstract superclass CB\_persistent. The developer can expand the class agent and redefine its methods (in particular, those for accessing the database). The superclass CB\_persistent cannot be modified. Each class agent is a friend of the managed class. The class agent is a singleton: only one instance of a class agent is created when it is accessed for the first time.

Interfaces for the Class Agent

The class agent implements the interfaces IF\_OS\_FACTORY, IF\_OS\_CA\_PERSISTENCY and IF\_OS\_CA\_INSTANCE. The interface methods can be used alongside the class methods. Interfaces also offer generic access by means of interface reference variables. In the ABAP program, interface reference variables of the same type can be used to access different class agents for different persistent classes. The interfaces represent the general part of the persistence service.

Management Interface for the Persistent Class

The persistent class implements the management interface IF\_OS\_STATE, which enables the managed objects of different persistent classes to be accessed in the same way.

Other Interfaces and Classes

The persistent class and the class agent are related to other interfaces and classes in the persistence service, but these are mainly used internally. To find the names of these object types, refer to the definition of the persistent class and class agent in Class Builder.

AGENT Attribute of the Class Agent

The static attribute AGENT is a reference variable with the type of the class CA\_persistent. The first time this attribute is accessed in an ABAP program, the static constructor of the class CA\_persistent creates exactly one instance of this class, to which the attribute AGENT then points. This object is part of the persistence service; its methods are then used to manage the object of the persistent class. There is only one object of the class CA\_persistent. The class agent manages one or more objects of the appropriate class. Each object must have a unique key.

Most Important Methods of the Class Agent

Class Builder generates the following methods the persistent class is created. They can then be redefined in the class CA\_persistent. There are other methods available for internal use within the persistence service.

Methods Inherited from CB\_persistent

-   CREATE\_PERSISTENT

Creates a new persistent object. The interface is generated in accordance with the [mapping](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenos_persistence_mapping.htm) between the persistent class and ABAP Dictionary. If the persistent object is managed using business keys, the interface contains the relevant input parameters. If the persistent object is managed using GUIDs, a new instance GUID is generated when the object is created. There are optional importing parameters for all persistent attributes, regardless of which keys manage the object. The return value RESULT has the type of the persistent class and contains a reference to the new persistent object. Each program can contain only one object for each key. The object is saved to the database using the statement COMMIT WORK. When the persistence service creates the object, it does not check whether the object already exists in the database. An error occurs only when an attempt is made to save an existing object. It is therefore best to check whether the object already exists using the method GET\_PERSISTENT.

-   GET\_PERSISTENT

Loads a persistent object from the database and generates a suitable instance in the ABAP program. The interface is generated in accordance with the mapping between the persistent class and ABAP Dictionary. The method exists only if the persistent object is managed using business keys and has the relevant input parameters. The return value RESULT has the type of the persistent class and contains a reference to the loaded persistent object. If an object with the same key already exists in the program, it is not loaded again; instead, the system returns the reference to the object already loaded. Changes to the attributes of the instance are committed to the database using the statement COMMIT WORK.

-   DELETE\_PERSISTENT

Deletes a persistent object. To delete the persistent object in the database as well, the statement COMMIT WORK must be executed. The interface is generated in accordance with the mapping between the persistent class and ABAP Dictionary. The method exists only if the persistent object is managed using business keys and has the relevant input parameters.

-   CREATE\_TRANSIENT

Creates a transient object of the persistent class. The method interface is the same as the interface for the method CREATE\_PERSISTENT. Objects created using CREATE\_TRANSIENT are managed by the persistence service but have no connection to the database. CREATE\_TRANSIENT cannot be used to create more than one object with the same key in the program.

-   GET\_TRANSIENT

Gets the reference to a transient object of the persistent class. The method interface is the same as the interface for the method CREATE\_PERSISTENT. The object must have already been created with the method CREATE\_TRANSIENT. The system does not look for a corresponding persistent object in the database.

Methods of the Interface IF\_OS\_FACTORY

-   IF\_OS\_FACTORY~CREATE\_PERSISTENT

If the persistent class is not managed using business keys, this interface method can be used (instead of the class method CREATE\_PERSISTENT) to create a persistent object of the class CL\_persistent. The return value RESULT has the type of the persistent class and contains a reference to the new persistent object. When the object is created, a new instance GUID is generated.

-   IF\_OS\_FACTORY~CREATE\_PERSISTENT\_BY\_KEY

If the persistent class is managed using business keys, this interface method can be used (instead of the class method CREATE\_PERSISTENT) to create a persistent object of the class CL\_persistent. The key is passed as a structure (with key fields as components) to the generic parameter I\_KEY of type ANY. The return value RESULT has the general type REF TO OBJECT and contains a reference to the new persistent object. If the persistent object is managed using GUIDs, a new instance GUID is generated when the object is created.

-   IF\_OS\_FACTORY~REFRESH\_PERSISTENT

This method forces the system to load the current attributes of a persistent object from the database into the ABAP program. It does this by passing the object reference to the input parameter I\_OBJECT of type IF\_OS\_STATE. The current attributes are then fetched from the database when it is next accessed (on-request loading). The management state of the object must be either OSCON\_OSTATUS\_LOADED or OSCON\_OSTATUS\_NOT\_LOADED. Immediately after the method has been executed, but before the attribute has been accessed, the management state is OSCON\_OSTATUS\_NOT\_LOADED.

-   IF\_OS\_FACTORY~DELETE\_PERSISTENT

Deletes a persistent object. It does this by passing the object reference to the input parameter I\_OBJECT of type IF\_OS\_STATE. To delete the persistent object in the database as well, the statement COMMIT WORK must be executed.

-   IF\_OS\_FACTORY~CREATE\_TRANSIENT

If the persistent class is not managed using business keys, this interface method can be used (instead of the class method CREATE\_TRANSIENT) to create a transient object of the class CL\_persistent. The return value RESULT has the type of the persistent class and contains a reference to the generated persistent object.

-   IF\_OS\_FACTORY~CREATE\_TRANSIENT\_BY\_KEY

If the persistent class is managed using business keys, this interface method can be used (instead of the class method CREATE\_TRANSIENT) to generate a persistent object of the class CL\_persistent. The key is passed to the generic parameter I\_KEY of type ANY as a structure whose components are the key fields. The return value RESULT has the general type REF TO OBJECT and contains a reference to the generated transient object.

-   IF\_OS\_FACTORY~RELEASE

Completely removes an object managed by the class agent from the management of the persistence service. It does this by passing the object reference to the input parameter I\_OBJECT of type IF\_OS\_STATE. The management state of the object must be either OSCON\_OSTATUS\_LOADED or OSCON\_OSTATUS\_NOT\_LOADED.

Methods of the Interface IF\_OS\_CA\_PERSISTENCY

-   IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_OID

If the persistent class is not managed using business keys, you can use this interface method (instead of the class method GET\_PERSISTENT) to get a persistent object from the database and generate a suitable instance in the ABAP program. The object ID is passed to the parameter I\_OID of type OS\_GUID. The return value RESULT has the general type REF TO OBJECT and contains a reference to the persistent object.

-   IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_KEY

If the persistent class is managed using business keys, you can use this interface method (instead of the class method GET\_PERSISTENT) to get a persistent object from the database and generate a suitable instance in the ABAP program. The key is passed as a structure (with key fields as components) to the generic parameter I\_KEY of type ANY. The return value RESULT has the general type REF TO OBJECT and contains a reference to the persistent object.

-   IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_OID\_TAB

If the persistent class is managed using business keys, you can use this interface method to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. The object IDs are passed to the I\_OID\_TAB parameter of type INDEX TABLE in an internal table. The return value RESULT is of general type OSREFTAB and contains a table of references to the persistent objects loaded. For each entry in the table, the result table has a corresponding entry at the same position that either contains an object reference to the loaded object or is initial if no object was found for the relevant ID. There is no corresponding method in the class agent.

-   IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_KEY\_TAB

If the persistent class is managed using business keys, this interface method can be used to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. The object keys are passed in an internal table, whose row type has the key fields as components, to generic parameter I\_KEY\_TAB of type INDEX TABLE. The return value RESULT is of general type OSREFTAB and contains a table of references to the persistent objects loaded. For each entry in the key table, the result table has a corresponding entry at the same position that either contains an object reference to the loaded object or is initial if no object was found for the relevant key. There is no corresponding method in the class agent. This method can only be used if the persistent class must have been generated for multiple access.

-   IF\_OS\_CA\_PERSISTENCY~GET\_PERSISTENT\_BY\_QUERY

This interface method can be used to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. A logical expression, which compares the attributes of the persistent class with a choice of parameters or values, determines which persistent objects are loaded. The logical expression is implemented by an instance of a class that implements the interface IF\_OS\_QUERY. An instance of this type is a query object, often abbreviated to query, and can be generated using the method CREATE\_QUERY of the interface IF\_OS\_QUERY\_MANAGER. A reference to the query is passed to the parameter I\_QUERY. The comparison values for the query are passed in an internal table to the I\_PARAMETER\_TAB parameter. If the query requires a maximum of three comparison values with an elementary type, these can also be passed individually to parameters I\_PAR1, I\_PAR2, and I\_PAR3. Use the I\_SUBCLASSES parameter to determine whether instances of subclasses of the persistent class are also loaded. Use the I\_UPTO parameter to determine the maximum number of instances that can be loaded. The return value RESULT is of general type OSREFTAB and contains a table of references to the persistent objects loaded. The query can also be used to determine how the object references are sorted. There is no corresponding method in the class agent. This method can only be used if the persistent class must have been generated for multiple access.

Methods of the Interface IF\_OS\_CA\_INSTANCE

-   IF\_OS\_CA\_INSTANCE~GET\_STATUS

Gets the management state of a managed object. The input parameter, with the general type REF TO OBJECT, passes a reference to the managed object. The return value RESULT has the type OS\_STATUS and can have the value 0, 1, 2, 3, 4, or 10. This corresponds to the constants OSTATUS\_... of the type group OSCON.

-   IF\_OS\_CA\_INSTANCE~GET\_NOT\_LOADED

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_NOT\_LOADED (0). The return value is an internal table with the general row type REF TO object.

-   IF\_OS\_CA\_INSTANCE~GET\_CREATED

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_NEW (1). The return value is an internal table with the general row type REF TO object.

-   IF\_OS\_CA\_INSTANCE~GET\_LOADED

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_LOADED (2). The return value is an internal table with the general row type REF TO object.

-   IF\_OS\_CA\_INSTANCE~GET\_CHANGED

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_CHANGED (3). The return value is an internal table with the general row type REF TO object.

-   IF\_OS\_CA\_INSTANCE~GET\_DELETED

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_DELETED (4). The return value is an internal table with the general row type REF TO object.

-   IF\_OS\_CA\_INSTANCE~TRANSIENT

Gets all the objects managed by the class agent in the management state OSCON\_OSTATUS\_TRANSIENT (10). The return value is an internal table with the general row type REF TO object.

Methods of IF\_OS\_STATE

The interface IF\_OS\_STATE defines the interface of a class that can be managed with Object Services. It enables the objects of this class to be monitored and managed.

-   IF\_OS\_STATE~INIT

Is called when a persistent or transient object is created and when a persistent object is loaded after persistent attributes have been set. Here, for example, transient attributes can be initialized and checking agents or event handlers registered.

-   IF\_OS\_STATE~INVALIDATE

Is called; when a persistent object is deleted, when forcing the reload of a persistent object, and when starting a subsequent transaction after resetting the persistent attributes for persistent objects. Here, for example, transient attributes can be reset and event handlers deregistered. It is also called when the UNDO service is used for resetting.

-   IF\_OS\_STATE~HANDLE\_EXCEPTION

Is called when an exception is raised in the GET and SET methods. It raises the exception, which is passed as a parameter. The exceptions raised can be handled here. In general, however, the exceptions should be handled by the consumer of these methods.

-   IF\_OS\_STATE~GET and IF\_OS\_STATE~SET

These methods are for internal use and must not be changed.