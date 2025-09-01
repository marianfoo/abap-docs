  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) →  [Constructors of Classes](javascript:call_link\('abenconstructor.htm'\)) → 

Visibility of Instance Constructors

For technical reasons, the the instance constructor of a class is declared in a [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") and is therefore theoretically visible to the corresponding consumers. However, an instance constructor is only executed when an object of this class is created using CREATE OBJECT. Therefore, the instance constructor is only visible to those consumers of a class that can also create objects of this class.

The additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](javascript:call_link\('abapclass.htm'\)) determine whether every consumer, only the heirs, or just the class itself can create objects of the class. This means that these additions define the actual visibility of the instance constructor. Therefore the following applies:

-   The instance constructor of a class defined using CREATE PUBLIC can be called by any consumer.

-   The instance constructor of a class defined using CREATE PROTECTED can only be called by the class itself and its subclasses.

-   The instance constructor of a class defined using CREATE PRIVATE can only be called by the class itself.

This has the following important consequence:

If a class was defined using CREATE PRIVATE, only the class itself can instantiate itself. Subclasses of this class cannot even instantiate themselves, because they would have to call the superclass constructor using [CALL super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)) (also see [Inheritance and Instance Creation](javascript:call_link\('abeninheritance_instantiation.htm'\))).