  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Inheritance and Constructors

There are special rules governing [constructors](javascript:call_link\('abenconstructor.htm'\)) in inheritance.

Instance Constructors

Each class has an instance constructor called constructor. This is an exception to the rule that states that component names along a path in an inheritance tree must be unique. The instance constructors of the various classes in an inheritance tree, however, are fully independent of one another.

-   Instance constructors of superclasses cannot be redefined in subclasses.

-   Instance constructors cannot be called explicitly using constructor( ... ).

This means that no naming conflicts can occur.

The instance constructor is called when an object is created using the command [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or using the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)). A subclass contains all of the visible attributes of its superclasses that can also be set by instance constructors, which means that the instance constructor of a subclass has to ensure that the instance constructors of all of its superclasses are also called. This requires that the instance constructor of each subclass contains a [super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)) call of the instance constructor of the direct superclass even if it is not explicitly declared. The only exception to this rule are direct subclasses of the root node OBJECT.

In superclasses without an explicitly defined instance constructor, the implicit instance constructor is called. This automatically ensures that the instance constructor of the immediate superclass is called.

When instance constructors are called, all of their non-optional input parameters must be filled as follows:

-   Filling parameters in the case of CREATE OBJECT or NEW
    Starting from the class of the new object, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected. This is the instance constructor of the class itself or the first explicitly defined instance constructor of a superclass.

-   Filling parameters in the case of super->constructor( ... )
    Starting from the direct superclass, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected.

The interface of the first explicitly defined instance constructor is filled in the same way as in a regular method. This means that:

-   If no input parameters exist, no parameters are passed.

-   Optional input parameters can be filled using EXPORTING.

-   Non-optional input parameters must be filled using EXPORTING.

If there are no explicitly defined instance constructors in the path of the inheritance tree below the root class object, no parameters are passed.

In both CREATE OBJECT or NEW and super->constructor( ... ), the next available explicit instance constructor must be examined, and, if it has an interface, values passed to it. The same applies to exception handling for instance constructors. When working with inheritances, a precise knowledge of the entire inheritance tree is required. When a class at the bottom of the inheritance tree is instantiated, it may be necessary to pass parameters to the constructor of a class that is much nearer the root node.

The instance constructor of a subclass is divided into two parts by the call super->constructor( ... ) (demanded by the syntax). In the statements before the call, the constructor behaves like a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"), which means that the self reference me-> cannot be used and the constructor does not have access to the instance components of its class. me-> cannot be used until after the call and it is also possible to address instance components. The statements before the call are used to determine the actual parameters for the interface of the instance constructor of the superclass. Only [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") or other visible data can be used for this.

When a subclass is instantiated, therefore, a nested call of the instance constructors from the subclass to the superclasses takes place. Here, however, the instance attributes can only be addressed in the lowest nesting level (which is the top superclass). When the constructors of the lower subclasses are revisited, their instance attributes can be addressed there successively too.

The methods of subclasses are not visible in constructors. If an instance constructor calls an instance method of the same class using the implicit [self reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me, the method is called as implemented in the class of the instance constructor, and not in any redefined form that may occur in the subclass being instantiated. This is an exception to the rule that states that, when instance methods are called, the implementation is called in the class to whose instance the reference points.

Static Constructors

Every class has a [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") called class\_constructor. With respect to the namespace within an inheritance tree, the same applies to static constructors as to instance constructors.

When a subclass is addressed for the first time in program by creating an instance of the class or by a static component being addressed (except types and constants) using the class component selector, the static constructor is called. However, before it can be called, the static constructors of all of its superclasses must already have been executed. A static constructor may only be called once per program. Therefore, when a subclass is first addressed, the next highest superclass is found whose static constructor has not yet been called. It calls the static constructor of that class, followed by the static constructors of all classes between that class and the subclass addressed.