  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_procedures.htm) →  [Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_methods.htm) → 

METHOD

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_shortref.htm)

Syntax

METHOD meth.
  ...
ENDMETHOD.

Effect

Between the statements METHOD and ENDMETHOD, the functionality of a [method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_glosry.htm "Glossary Entry") meth declared using [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods.htm)[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) is implemented in a class. The implementation of a method is only possible in an implementation part of a class that was initiated using [CLASS class IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm).

Local data types and data objects can be declared within the method. It is also possible to access the formal parameters of the method as well as all components of all instances of its own class.

In [instance methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_method_glosry.htm "Glossary Entry"), all components of the class and instance of the method can be addressed explicitly using the [self-reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_reference_glosry.htm "Glossary Entry") me->, besides their names. In addition, all components of other instances of the class of the method can be addressed using reference variables.

A method can be called [statically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls_static.htm) or [dynamically](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls_dynamic.htm). For static calls, there is a standalone and a functional call form. Dynamic calls are always standalone calls.

Hints

-   During the implementation of a method of an interface intf, either the name declared in the prefix with intf~ or an alias name of the class defined with [ALIASES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapaliases.htm), can be specified for meth. The method must exist in the interface, otherwise a syntax error occurs. If intf~ is used, a syntax warning occurs for global interfaces only if an unused methods is deleted from the global interface, so that initial classes do not immediately become invalid because of this.
-   The addition [BY DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_by_db_proc.htm) transforms a method that is implemented in a database-specific language and not in ABAP and is executed in the database system into an [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry").

Example

In this example, the two methods m1 and m2 of the class c1 between METHOD and ENDMETHOD are implemented. Although the local data object a1 hides the attribute of the same name, the attribute a1 can be addressed using me->a1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS m1 IMPORTING p1 TYPE string.
  PRIVATE SECTION.
    DATA a1 TYPE string.
    METHODS m2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    a1 = p1.
    m2( ).
  ENDMETHOD.
  METHOD m2.
    DATA a1 TYPE string.
    a1 = me->a1.
  ENDMETHOD.
ENDCLASS.

Continue
[METHOD, Internal Additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_kernel_module_internal.htm)