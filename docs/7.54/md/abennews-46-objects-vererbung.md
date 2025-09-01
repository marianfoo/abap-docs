  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

ABAP Objects - Inheritance and Compound Interfaces in Release 4.6A

In Release 4.6A the following components are added to the core functionality of ABAP Objects:

[1\. Inheritance](#!ABAP_MODIFICATION_1@1@)

[2\. Compound interfaces](#!ABAP_MODIFICATION_2@2@)

Modification 1

Inheritance

ABAP Objects enables [inheritance](javascript:call_link\('abeninheritance.htm'\)). The addition INHERITING FROM for the statement [CLASS class DEFINITION](javascript:call_link\('abapclass.htm'\)) can be used to derive a class from a superclass. Each subclass inherits all components from all superclasses and provides for specialization by adding its own components and by using the [REDEFINITION](javascript:call_link\('abapmethods.htm'\)) previous methods. This makes it possible to define inheritance trees that become more and more specific from subclass to subclass, starting from the root node OBJECT.

The additions ABSTRACT and FINAL for the statements [CLASS](javascript:call_link\('abapclass.htm'\)) and [METHODS](javascript:call_link\('abapmethods.htm'\)) make it possible to define abstract and final classes and methods. Abstract classes cannot be instantiated. Abstract methods are not implemented in their class and can occur only in abstract classes. Abstract methods can be implemented in a subclass of the abstract class. Final classes cannot have any subclasses. Final methods cannot be redefined. All methods of final classes are automatically final.

Modification 2

Compound Interfaces

Interfaces can be [nested](javascript:call_link\('abeninterface_composition.htm'\)) by specifying other interfaces as components in the definition of an interface:
[INTERFACE i.](javascript:call_link\('abapinterface.htm'\))
...
[INTERFACES: i1, i2  ...](javascript:call_link\('abapinterfaces.htm'\))
...
[ENDINTERFACE.](javascript:call_link\('abapendinterface.htm'\))