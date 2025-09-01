---
title: "ABAP Objects - Inheritance and Instantiation"
description: |
  When a subclass is instantiated, all superclasses are instantiated simultaneously, whereby the initialization of superclass attributes is ensured by calling the superclass constructors, as described in Inheritance and Constructors(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abe
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_instantiation.htm"
abapFile: "abeninheritance_instantiation.htm"
keywords: ["do", "if", "case", "try", "class", "abeninheritance", "instantiation"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Instantiation%2C%20ABENINHERITANCE_INSTANTIATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

ABAP Objects - Inheritance and Instantiation

When a subclass is instantiated, all superclasses are instantiated simultaneously, whereby the initialization of superclass attributes is ensured by calling the superclass constructors, as described in [Inheritance and Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_constructors.htm).

In each individual class, the additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass.htm) control who can create an instance of the class or, in other words, can call its instance constructor.

This has the following consequences:

If a superclass was defined in a path of the inheritance tree using the addition CREATE PRIVATE, external users cannot instantiate a subclass, and a subclass cannot even instantiate itself because it has no access to the instance constructor of the superclass.

It would therefore be useful to assign the addition FINAL to a class that was defined using the addition CREATE PRIVATE, to prevent subclasses from being derived. Otherwise subclasses of these superclasses have the implicit addition CREATE NONE.

The only exception to this rule is if a superclass that can be privately instantiated offers its [friendship](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriends.htm) to its subclasses. The direct path is rarely the case here because the superclass must know its subclasses for it to be possible. However, a superclass can also offer friendship to an interface which, in turn, can be implemented by its subclasses.

Conversely, objects of subclasses cannot be created in their superclass if these are declared using CREATE PROTECTED or CREATE PRIVATE, unless they are [friends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriend_glosry.htm "Glossary Entry") of its subclasses.

Overview of All Cases   

Superclass with No Addition or CREATE PUBLIC   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the property CREATE PUBLIC. The instance constructor of the superclass is visible to everyone. The subclass controls the visibility of its own instance constructor, independently of the superclass.

Superclass with Addition CREATE PROTECTED.   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the attribute CREATE PROTECTED. The superclass allows its subclasses unlimited instantiation and therefore also allow its [protected](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprotected_glosry.htm "Glossary Entry") instance constructor to be published.

Superclass with Addition CREATE PRIVATE   

Subclass is Not a Friend of the Superclass

The subclass has the implicit addition CREATE NONE. Nobody other than the superclass itself can call its instance constructor, which means that the subclass cannot be instantiated. None of the CREATE additions are allowed because this would definitely mean unauthorized publishing of the superclass constructor.

Subclass is a Friend of the Superclass

If the subclass has no addition, it inherits the attribute CREATE PRIVATE. However, all CREATE additions are allowed. As a friend, the subclass can publish the private constructor of the superclass in any form.