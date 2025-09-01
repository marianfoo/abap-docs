  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) → 

Friends - Friendship Between Classes

There is normally a strict division between external (PUBLIC) and internal (PROTECTED and PRIVATE) classes. A consumer can only access the public components of a class. This allows the internal implementation of a class to be changed without invalidating its consumers.

In rare cases, however, classes have to work so closely together that they require access to their mutually invisible components. The concept of friendship between classes was developed so that these components do not need to be made available to all consumers at the same time.

Friends

A class can grant friendship to other classes and interfaces (and thus to all classes that implement this interface). To create this relationship, use the FRIENDS additions of the [CLASS ... DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) statement, which lists all of the classes and interfaces to be treated as friends. These friends are granted access to all components of the class offering the friendship, regardless of their [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") or the addition [READ-ONLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) and can always create instances of this class regardless of the addition CREATE of the statement [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm).

Note

We advise caution when granting a global interface friendship. Each class that implements the interface becomes a friend of the class granting the friendship. If a global interface is used, the extent of this friendship should be limited using the [package concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpackage_concept_glosry.htm "Glossary Entry"), for example.

Friendship is unilateral

Friendship is a unilateral principle. A class that grants friendship is not automatically a friend of its friends. If the class that grants friendship wants to access the private or protected components of its friend, the latter must grant friendship explicitly.

Inheritance, Interfaces, and Friendship

Subclasses of [friends](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriend_glosry.htm "Glossary Entry") and interfaces that are assigned a friend as a component interface also become friends. For this reason, extreme care should be taken when defining a friendship. The higher a friend is in the inheritance tree, the greater the number of subclasses that can access all of the components of the class granting friendship. A class that grants friendship to the root class object gains all of the ABAP Objects classes as friends and therefore has no privacy whatsoever. Conversely, it is relatively safe to grant friendship to a final class since this class alone is specified as a friend.

Friendship granted is not inherited, in contrast to the [friend](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriend_glosry.htm "Glossary Entry") attribute. A friend of a superclass is, therefore, not automatically a friend of its subclasses.

The FRIENDS Additions

The CLASS ... DEFINITION statement has three different FRIENDS additions:

-   [... FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm)
    This addition can be specified when defining any local class of a program. Friendship can be granted to all classes or interfaces of the same program and to the classes and interfaces in the class library. Note, in particular, that the local classes of a class pool can grant friendship to the global class of that class pool.
    

-   [... GLOBAL FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm)
    This addition can only be used with global classes. It is generated when a class is defined using [Class Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_builder_glosry.htm "Glossary Entry"). Friendship can be granted to all other global classes and interfaces.
    

-   [... LOCAL FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_local_friends.htm)
    This addition is not specified when the class is declared, but instead defines its own statement. In a class pool, the global class can use this statement to grant friendship to the local classes and interfaces of its own class pool. While Class Builder generates the CLASS statement for the actual class declaration for the full class, the statement
    CLASS ... DEFINITION LOCAL FRIENDS cif1 ... cifn.
    is specified directly in the include program for defining local classes and interfaces.

Executable Example

[Friendship](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfriends_abexa.htm)