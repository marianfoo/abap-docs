  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [INTERFACE](javascript:call_link\('abapinterface.htm'\)) → 

INTERFACE intf

[Short Reference](javascript:call_link\('abapinterface_shortref.htm'\))

Syntax

INTERFACE intf *\[*PUBLIC*\]*.
  *\[*[components](javascript:call_link\('abeninterface_component.htm'\))*\]*
ENDINTERFACE.

Addition:

[... PUBLIC](#!ABAP_ONE_ADD@1@)

Effect

The statement block INTERFACE - ENDINTERFACE defines an [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") intf. [Naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name intf. The [components](javascript:call_link\('abeninterface_component.htm'\)) of the interface are declared between INTERFACE and ENDINTERFACE.

An interface defined using INTERFACE can be implemented in classes and included in other interfaces using the statement [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)).

Hint

The definition of an interface can only be specified in the context described under [INTERFACE](javascript:call_link\('abapinterface.htm'\)).

Addition

... PUBLIC

Effect

The addition PUBLIC makes the interface intf a [global interface](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry") of the class library. The addition PUBLIC can only be used for the global interface of an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") and is created by the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") when a global interface is created .

Hint

A global interface is a global [object type](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") and is in the same namespace as all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

Example

In this example, an interface i1 is declared using three interface components a1, m1, and e1. The class c1 implements the interface and the interface components therefore become [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") components of the class, which can be addressed using the interface component selector (~).

INTERFACE i1.
  DATA    a1 TYPE string.
  METHODS m1.
  EVENTS  e1 EXPORTING value(p1) TYPE string.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i1.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~m1.
    RAISE EVENT i1~e1 EXPORTING p1 = i1~a1.
  ENDMETHOD.
ENDCLASS.

Continue
[INTERFACE, components](javascript:call_link\('abeninterface_component.htm'\))