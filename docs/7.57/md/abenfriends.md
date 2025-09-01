---
title: "ABAP Objects - Friends, Friendship Between Classes"
description: |
  There is normally a strict separation between external (PUBLIC) and internal (PROTECTED and PRIVATE) classes. A user can only access the public components of a class. This allows the internal implementation of a class to be changed without invalidating its users. In rare cases, however, classes must
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriends.htm"
abapFile: "abenfriends.htm"
keywords: ["do", "while", "if", "case", "try", "class", "data", "abenfriends"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Friends, Friendship Between Classes, ABENFRIENDS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Friends, Friendship Between Classes

There is normally a strict separation between external (PUBLIC) and internal (PROTECTED and PRIVATE) classes. A user can only access the public components of a class. This allows the internal implementation of a class to be changed without invalidating its users.

In rare cases, however, classes must work so closely together that they require access to their mutually invisible components. The concept of friendship between classes was developed so that these components do not need to be made available to all users at the same time.

Friends   

A class can grant friendship to other classes and interfaces (and thus to all classes that implement the interface). To do this, the FRIENDS additions of the [CLASS ... DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) statement must be used, which lists all of the classes and interfaces to which friendship should be granted. These friends are given access to all components of the class granting the friendship, regardless of their [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry") or the addition [READ-ONLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm), and can always create instances of this class regardless of the addition CREATE of the statement [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm).

Hint

Caution is advised when granting friendship to a global interface. Each class that implements the interface becomes a friend of the class granting the friendship. The use of a global interface should be limited by means like the [package concept](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpackage_concept_glosry.htm "Glossary Entry") in order to restrict this group.

Friendship is Unilateral   

Granting friendship is a unilateral principle. A class that grants friendship is not automatically a friend of its friends. If the class that grants friendship wants to access the non-public components of a friend, the latter must also explicitly grant friendship.

Inheritance, Interfaces, and Friendship   

Heirs of [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry") and interfaces that contain a friend as a component interface also become friends. For this reason, extreme care should be taken when offering a friendship. The higher a friend is in the inheritance tree, the more subclasses are given access to all of the components of the class granting friendship. A class that grants friendship to the root class object is given all classes from ABAP Objects as friends and therefore has no privacy whatsoever. Conversely, it is relatively safe to grant friendship to a final class since only this class is specified as a friend.

Granting friendship is not inherited, in contrast to the [friend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry") property. A friend of a superclass is, therefore, not automatically a friend of its subclasses.

The FRIENDS Additions   

The CLASS ... DEFINITION statement has three different FRIENDS additions:

-   [... FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm)
    
    This addition can be specified when defining any local class of a program. Friendship can be granted to all classes or interfaces of the same program and to the classes and interfaces of the class library. In particular, the local classes of a class pool can grant friendship to the global class of that class pool.
    
-   [... GLOBAL FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm)
    
    This addition can only be used with global classes. It is generated when a class is defined using the [Class Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_builder_glosry.htm "Glossary Entry"). Friendship can be granted to all other global classes and interfaces.
    
-   [... LOCAL FRIENDS cif1 ... cifn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_local_friends.htm)
    
    This addition is not specified when the class is declared, but instead defines its own statement. In a class pool, the global class can use this statement to grant friendship to the local classes and interfaces of its own class pool. While the CLASS statement for the actual class declaration is valid for the entire class, the statement
    
    CLASS ... DEFINITION LOCAL FRIENDS cif1 ... cifn.
    
    is specified directly in the include program for defining local classes and interfaces.
    

Executable Example

[Friendship](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriends_abexa.htm)