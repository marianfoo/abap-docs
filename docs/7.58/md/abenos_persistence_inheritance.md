  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services.htm) →  [OS - Persistence Service](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_object_services_persist.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Inheritance%20of%20Persistent%20Classes%2C%20ABENOS_PERSISTENCE_INHERITANCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

OS - Inheritance of Persistent Classes

Persistent classes can have subclasses. These subclasses are also persistent classes, in that they inherit the persistence mapping of the superclass to the database table or tables. The persistence mapping of the superclass is defined in the subclass. If not, the general polymorphic principle of inheritance, in which the consumer handles subclasses in the same way as superclasses, is violated.

The mapping information and attributes of all superclasses are included in the class agents of a persistent subclass. There are two different methods for passing on mappings.

-   Vertical mapping
    
    In the subclass, the persistent attributes that were additionally defined in the subclass are mapped to separate tables, DDIC database views, or structures. The general rule for multiple table mapping applies: The keys for the additional tables, DDIC database views, or structures must be the same as the keys for the superclass tables, DDIC database views, or structures. The key fields are therefore mapped in the superclass and the subclass. Thus, additional attributes and their associated GET and SET methods are added to the subclass, without affecting the attributes and methods of the superclass. In the superclass, all persistent attributes must be mapped.
    
    A special case of vertical mapping exists when the persistent attributes that were additionally defined in the subclass are mapped to the same tables, DDIC database views, or structures as the superclass attributes. To find out the class to which a table entry belongs, a special field of the type OS\_GUID must exist in one of the tables, DDIC database views, or structures and be used as a type identifier.
    
-   Horizontal mapping
    
    If a persistent superclass is abstract, persistent attributes can be defined there without using concrete mappings. In every direct subclass, a mapping must be defined for the persistent attributes of the superclass. The subclasses can be mapped to different tables, database views, or structures. The system does not check whether the subclasses are mapped to different tables or structures.
    

Caution

The class agents of persistent classes that are in an inheritance relationship are not in a corresponding inheritance relationship. The same principle applies that a class agent only manages the objects of the corresponding classes and the subclass objects. As a result, private attributes of non-final persistent classes are not completely protected from reads or writes. Information that is to be protected must not be stored in private attributes of non-final persistent classes.

Polymorphism in the Class Agent Methods   

The methods DELETE\_PERSISTENT, REFRESH\_PERSISTENT, and RELEASE of the interface IF\_OS\_FACTORY of the class agent behave polymorphically. This means that, for a specified managed object, these methods can also be called in the class agent of a (non-abstract) superclass of this object. At runtime, the passed reference can be used to define the type of the managed object and call the relevant class agent of the subclass.

If an additional type field (type identifier) exists in one of the tables, DDIC database views, or structures that is mapped to the root class of the inheritance hierarchy, the methods GET\_PERSISTENT, DELETE\_PERSISTENT plus GET\_PERSISTENT\_BY\_KEY and GET\_PERSISTENT\_BY\_OID of the interface IF\_OS\_CA\_PERSISTENCY of the class agent behave polymorphically. This means that the agent of a (non-abstract) persistent class can also be used to use the key to read (business key or GUID) or delete (business key) a persistent object that belongs to a persistent subclass of the classes managed by this class agent. This is done by delegation to the class agent of the subclass, which can be determined at runtime using the information in the type identifier.

Specifying an additional type identifier ensures that the (business) key is unique in the entire inheritance hierarchy. It is therefore not possible to create a managed object with the same key as a managed object of another subclass, superclass, or the subclasses of this superclass.