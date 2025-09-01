  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_components.htm) → 

ABAP Objects - Methods of Classes

Methods are internal [procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") of a class that determine the behavior of an object. They can access all attributes of all instances of their class and can therefore change the status of an object. Methods have a parameter interface that is used to supply values to them when they are called, and which can be used to return values to the caller. The private attributes of a class can only be changed using methods of the same class.

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

A method meth is declared in the [declaration part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_part_glosry.htm "Glossary Entry") of a class using the statements [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm) and implemented in the [implementation part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of the class using the following [processing block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocessing_block_glosry.htm "Glossary Entry"):

[METHOD meth.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod.htm)
  ...
[ENDMETHOD.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendmethod.htm)

As in all procedures, local data types and data objects can be declared in methods. Methods are called [statically](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls_static.htm) using the expression meth( ... ) or [dynamically](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls_dynamic.htm) using the statement [CALL METHOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_dynamic.htm) (known as a dynamic invoke).

Hint

In the methods of a class, one method of the class [hides](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_functions_syntax.htm) a [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") with the same name. This hiding is independent of the type and number of method parameters and the type and number of arguments of the function. This means that a method should not have the same name as a built-in function.

Instance Methods

Instance methods are declared using the statement [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm). They can access all the attributes of a class and can raise all of its events.

Hint

Any attempt to call an instance method using an initial [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") raises a catchable exception.

Static Methods

Static methods are declared using the statement [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm). It can access [static attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") of a class and it can only raise [static events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_event_glosry.htm "Glossary Entry").

Constructors

In addition to the regular methods that are [called explicitly](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls.htm), there are two special methods called [constructor and class\_constructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor.htm), which are called implicitly when an object is created or when a class component is accessed for the first time.

Functional Methods

Functional methods are methods with exactly one [RETURNING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_functional.htm) parameter and any number of other formal parameters. Functional methods cannot just be called as [standalone statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_static_short.htm), but also as [functional method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_functional.htm) in [operand positions for functions and expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions.htm). Here, they can be also be combined into [method chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry").

Optional Methods

In interfaces, methods can be made optional using the addition [DEFAULT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_default.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm). An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, the definition defines a default behavior for calls of non-implemented methods. DEFAULT IGNORE calls an empty method and DEFAULT FAIL raises an exception.

Special Methods

AMDP Methods

[AMDP methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_methods.htm) are implemented as [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") using the addition [BY DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) or [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) in a database-specific language and executed in the database system.

Kernel Methods

For internal use, [kernel methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_methods.htm) are implemented in the kernel using the addition [BY KERNEL MODULE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_kernel_module_internal.htm).

Continue
[ABAP Objects - Interface Parameters in Methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_parameters.htm)
[ABAP Objects - The C Destructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenc_destructor.htm)
[ABAP Objects - Kernel Methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_methods.htm)