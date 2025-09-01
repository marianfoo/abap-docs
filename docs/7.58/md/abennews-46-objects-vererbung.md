  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Nested%20Interfaces%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-OBJECTS-VERERBUNG%2C%20758%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Inheritance and Nested Interfaces in ABAP Release 4.6A

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Inheritance](#!ABAP_MODIFICATION_1@1@)
[2\. Nested Interfaces](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Inheritance

ABAP Objects enables [inheritance](javascript:call_link\('abeninheritance.htm'\)). The addition INHERITING FROM of the statement [CLASS class DEFINITION](javascript:call_link\('abapclass.htm'\)) can be used to derive a class from a superclass. Each subclass inherits all components from all superclasses and enables specialization by adding its own components and by using the [REDEFINITION](javascript:call_link\('abapmethods.htm'\)) of previous methods. This makes it possible to define inheritance trees that become more and more specific from subclass to subclass, starting from the root node OBJECT.

The additions ABSTRACT and FINAL of the statements [CLASS](javascript:call_link\('abapclass.htm'\)) and [METHODS](javascript:call_link\('abapmethods.htm'\)) make it possible to define abstract and final classes and methods. Abstract classes cannot be instantiated. Abstract methods are not implemented in their class and can occur only in abstract classes. Abstract methods can be implemented in a subclass of the abstract class. Final classes cannot have any subclasses. Final methods cannot be redefined. All methods of final classes are automatically final.

Modification 2   

Nested Interfaces

Interfaces can be [nested](javascript:call_link\('abeninterface_composition.htm'\)) by specifying other interfaces as components in the definition of an interface:

[INTERFACE i.](javascript:call_link\('abapinterface.htm'\))

...

[INTERFACES: i1, i2  ...](javascript:call_link\('abapinterfaces.htm'\))

...

[ENDINTERFACE.](javascript:call_link\('abapendinterface.htm'\))