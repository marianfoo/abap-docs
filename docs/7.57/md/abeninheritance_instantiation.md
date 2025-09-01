  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Inheritance and Instantiation, ABENINHERITANCE_INSTANTIATION, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Inheritance and Instantiation

When a subclass is instantiated, all superclasses are instantiated simultaneously, whereby the initialization of superclass attributes is ensured by calling the superclass constructors, as described in [Inheritance and Constructors](javascript:call_link\('abeninheritance_constructors.htm'\)).

In each individual class, the additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](javascript:call_link\('abapclass.htm'\)) control who can create an instance of the class or, in other words, can call its instance constructor.

This has the following consequences:

If a superclass was defined in a path of the inheritance tree using the addition CREATE PRIVATE, external users cannot instantiate a subclass, and a subclass cannot even instantiate itself because it has no access to the instance constructor of the superclass.

It would therefore be useful to assign the addition FINAL to a class that was defined using the addition CREATE PRIVATE, to prevent subclasses from being derived. Otherwise subclasses of these superclasses have the implicit addition CREATE NONE.

The only exception to this rule is if a superclass that can be privately instantiated offers its [friendship](javascript:call_link\('abenfriends.htm'\)) to its subclasses. The direct path is rarely the case here because the superclass must know its subclasses for it to be possible. However, a superclass can also offer friendship to an interface which, in turn, can be implemented by its subclasses.

Conversely, objects of subclasses cannot be created in their superclass if these are declared using CREATE PROTECTED or CREATE PRIVATE, unless they are [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of its subclasses.

Overview of All Cases   

Superclass with No Addition or CREATE PUBLIC   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the property CREATE PUBLIC. The instance constructor of the superclass is visible to everyone. The subclass controls the visibility of its own instance constructor, independently of the superclass.

Superclass with Addition CREATE PROTECTED.   

Subclasses can have any CREATE addition, regardless of whether they are a friend of the superclass. Without an addition, they inherit the attribute CREATE PROTECTED. The superclass allows its subclasses unlimited instantiation and therefore also allow its [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") instance constructor to be published.

Superclass with Addition CREATE PRIVATE   

Subclass is Not a Friend of the Superclass

The subclass has the implicit addition CREATE NONE. Nobody other than the superclass itself can call its instance constructor, which means that the subclass cannot be instantiated. None of the CREATE additions are allowed because this would definitely mean unauthorized publishing of the superclass constructor.

Subclass is a Friend of the Superclass

If the subclass has no addition, it inherits the attribute CREATE PRIVATE. However, all CREATE additions are allowed. As a friend, the subclass can publish the private constructor of the superclass in any form.