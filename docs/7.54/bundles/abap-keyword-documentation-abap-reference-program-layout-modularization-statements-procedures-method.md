# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Procedures / Methods

Included pages: 5


### abenabap_methods.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) → 

Methods

Methods are the [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") of a class whose functions are implemented between the following statements:

[METHOD](javascript:call_link\('abapmethod.htm'\))
  ...
[ENDMETHOD](javascript:call_link\('abapendmethod.htm'\))

The statement METHOD does not usually have any additions. Exceptions to this rule are:

-   Methods used to implement [ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) (AMDP)

-   [Kernel methods](javascript:call_link\('abapmethod_kernel_module_internal.htm'\)) for internal use

Continue
[METHOD](javascript:call_link\('abapmethod.htm'\))
[ENDMETHOD](javascript:call_link\('abapendmethod.htm'\))


### abapmethod.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) → 

METHOD

[Quick Reference](javascript:call_link\('abapmethod_shortref.htm'\))

Syntax

METHOD meth.
  ...
ENDMETHOD.

Effect

Between the statements METHOD and ENDMETHOD, the function of a [method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") meth declared using [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)) is implemented in a class. The implementation of a method is only possible in an implementation part of a class that begins with [CLASS class IMPLEMENTATION](javascript:call_link\('abapclass.htm'\))

Local data types and data objects can be declared within the method. It is also possible to access the formal parameters of the method and all the components of all instances of its own class.

In [instance methods](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry"), all components of the class of the method and the instance of the method can also be addressed explicitly using the [self reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me->, as well as using their names. In addition, all components of other instances from the class of the method can be addressed using reference variables.

A method can be called [statically](javascript:call_link\('abenmethod_calls_static.htm'\)) or [dynamically](javascript:call_link\('abenmethod_calls_dynamic.htm'\)). For static calls, both standalone and functional call forms are available. Dynamic calls are always standalone calls.

Notes

-   When a method of an interface intf is implemented, meth can be specified either as the name declared in the interface (prefixed with intf~) or as an alias name of the class defined using [ALIASES](javascript:call_link\('abapaliases.htm'\)). The method must exist in the interface. If not, a syntax error occurs. If intf~ is used, only a syntax warning appears for global interfaces, so that classes are not immediately rendered invalid if an unused method is deleted from a global interface.
    
-   The addition [BY DATABASE PROCEDURE](javascript:call_link\('abapmethod_by_db_proc.htm'\)) transforms a method implemented in a database-specific language (and not in ABAP) and executed in the database system to an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
    

Example

In this example, the two methods m1 and m2 of the class c1 between METHOD and ENDMETHOD are implemented. Although the local data object a1 obscures the attribute of the same name, the attribute a1 can be addressed using me->a1.

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
[METHOD - Internal Additions](javascript:call_link\('abapmethod_kernel_module_internal.htm'\))


### abapmethod_kernel_module_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) →  [METHOD](javascript:call_link\('abapmethod.htm'\)) → 

METHOD - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Addition:

... ... BY KERNEL MODULE p1 ...

Effect

This addition of the statement METHOD defines the method meth as a [kernel method](javascript:call_link\('abenkernel_methods.htm'\)). This means that the method meth is not implemented in ABAP but in the kernel instead by using one of the kernel modules p1 specified here. No statements are allowed between METHOD and ENDMETHOD.

Note

In global classes, the addition must be entered directly in the source code editor in Class Builder and is not specified under the properties of the method there.


### abapmethod.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) → 

METHOD

[Quick Reference](javascript:call_link\('abapmethod_shortref.htm'\))

Syntax

METHOD meth.
  ...
ENDMETHOD.

Effect

Between the statements METHOD and ENDMETHOD, the function of a [method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") meth declared using [*\[*CLASS-*\]*](javascript:call_link\('abapclass-methods.htm'\))[METHODS](javascript:call_link\('abapmethods.htm'\)) is implemented in a class. The implementation of a method is only possible in an implementation part of a class that begins with [CLASS class IMPLEMENTATION](javascript:call_link\('abapclass.htm'\))

Local data types and data objects can be declared within the method. It is also possible to access the formal parameters of the method and all the components of all instances of its own class.

In [instance methods](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry"), all components of the class of the method and the instance of the method can also be addressed explicitly using the [self reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me->, as well as using their names. In addition, all components of other instances from the class of the method can be addressed using reference variables.

A method can be called [statically](javascript:call_link\('abenmethod_calls_static.htm'\)) or [dynamically](javascript:call_link\('abenmethod_calls_dynamic.htm'\)). For static calls, both standalone and functional call forms are available. Dynamic calls are always standalone calls.

Notes

-   When a method of an interface intf is implemented, meth can be specified either as the name declared in the interface (prefixed with intf~) or as an alias name of the class defined using [ALIASES](javascript:call_link\('abapaliases.htm'\)). The method must exist in the interface. If not, a syntax error occurs. If intf~ is used, only a syntax warning appears for global interfaces, so that classes are not immediately rendered invalid if an unused method is deleted from a global interface.
    
-   The addition [BY DATABASE PROCEDURE](javascript:call_link\('abapmethod_by_db_proc.htm'\)) transforms a method implemented in a database-specific language (and not in ABAP) and executed in the database system to an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
    

Example

In this example, the two methods m1 and m2 of the class c1 between METHOD and ENDMETHOD are implemented. Although the local data object a1 obscures the attribute of the same name, the attribute a1 can be addressed using me->a1.

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
[METHOD - Internal Additions](javascript:call_link\('abapmethod_kernel_module_internal.htm'\))


### abapendmethod.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) → 

ENDMETHOD

[Quick Reference](javascript:call_link\('abapmethod_shortref.htm'\))

Syntax

ENDMETHOD.

Effect

The statement ENDMETHOD closes a method implementation introduced using [METHOD](javascript:call_link\('abapmethod.htm'\)).
