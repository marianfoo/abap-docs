  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

ABAP Objects - Methods of Classes

Methods are internal [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") of a class that determine the behavior of an object. They can access all attributes of all instances of their class and can therefore change the status of an object. Methods have a parameter interface that is used to supply values to them when they are called, and which can be used to return values to the caller. The private attributes of a class can only be changed using methods of the same class.

-   [Definition](#@@ITOC@@ABENCLASS_METHODS_1)

-   [Instance Methods](#@@ITOC@@ABENCLASS_METHODS_2)

-   [Static Methods](#@@ITOC@@ABENCLASS_METHODS_3)

-   [Constructors](#@@ITOC@@ABENCLASS_METHODS_4)

-   [Functional Methods](#@@ITOC@@ABENCLASS_METHODS_5)

-   [Optional Methods](#@@ITOC@@ABENCLASS_METHODS_6)

-   [Special Methods](#@@ITOC@@ABENCLASS_METHODS_7)

-   [AMDP Methods](#@@ITOC@@ABENCLASS_METHODS_8)

-   [Kernel Methods](#@@ITOC@@ABENCLASS_METHODS_9)

Definition

A method meth is declared in the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") of a class using the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) and implemented in the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of the class using the following [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"):

[METHOD meth.](javascript:call_link\('abapmethod.htm'\))
  ...
[ENDMETHOD.](javascript:call_link\('abapendmethod.htm'\))

As in all procedures, local data types and data objects can be declared in methods. Methods are called [statically](javascript:call_link\('abenmethod_calls_static.htm'\)) using the expression meth( ... ) or [dynamically](javascript:call_link\('abenmethod_calls_dynamic.htm'\)) using the statement [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)) (known as a dynamic invoke).

Hint

In the methods of a class, one method of the class [hides](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) a [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") with the same name. This hiding is independent of the type and number of method parameters and the type and number of arguments of the function. This means that a method should not have the same name as a built-in function.

Instance Methods

Instance methods are declared using the statement [METHODS](javascript:call_link\('abapmethods.htm'\)). They can access all the attributes of a class and can raise all of its events.

Hint

Any attempt to call an instance method using an initial [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") raises a catchable exception.

Static Methods

Static methods are declared using the statement [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). It can access [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") of a class and it can only raise [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry").

Constructors

In addition to the regular methods that are [called explicitly](javascript:call_link\('abenmethod_calls.htm'\)), there are two special methods called [constructor and class\_constructor](javascript:call_link\('abenconstructor.htm'\)), which are called implicitly when an object is created or when a class component is accessed for the first time.

Functional Methods

Functional methods are methods with exactly one [RETURNING](javascript:call_link\('abapmethods_functional.htm'\)) parameter and any number of other formal parameters. Functional methods cannot just be called as [standalone statements](javascript:call_link\('abapcall_method_static_short.htm'\)), but also as [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)) in [operand positions for functions and expressions](javascript:call_link\('abenexpression_positions.htm'\)). Here, they can be also be combined into [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry").

Optional Methods

In interfaces, methods can be made optional using the addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, the definition defines a default behavior for calls of non-implemented methods. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.

Special Methods

AMDP Methods

[AMDP methods](javascript:call_link\('abenamdp_methods.htm'\)) are implemented as [ABAP Managed Database Procedures](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry") using the addition [BY DATABASE PROCEDURE](javascript:call_link\('abapmethod_by_db_proc.htm'\)) or [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) in a database-specific language and executed in the database system.

Kernel Methods

For internal use, [kernel methods](javascript:call_link\('abenkernel_methods.htm'\)) are implemented in the kernel using the addition [BY KERNEL MODULE](javascript:call_link\('abapmethod_kernel_module_internal.htm'\)).

Continue
[ABAP Objects - Interface Parameters in Methods](javascript:call_link\('abenmethod_parameters.htm'\))
[ABAP Objects - The C Destructor](javascript:call_link\('abenc_destructor.htm'\))
[ABAP Objects - Kernel Methods](javascript:call_link\('abenkernel_methods.htm'\))