  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Inheritance and Visibility

It is not possible to change the [visibility section](javascript:call_link\('abenclass_visibility.htm'\)) to which a component is assigned using inheritance. The visibility of components affects inheritance as follows:

Public components

The public visibility area of a subclass consists of all its own public components plus the public components of all its superclasses. From outside the class, public components are visible without restrictions.

Protected components

The protected visibility area of a subclass consists of all its own protected components plus the protected components of all its superclasses. The protected section is visible only in the class itself and in all its subclasses. Viewed from outside, protected is the same as private.

Private components

The private visibility area of a subclass includes only the private components of this class. They are visible only in this class. The private components of superclasses cannot be used in subclasses. Only methods inherited from superclasses use (provided they have not been redefined) the private attributes of the superclass (even if the subclass has private attributes with the same name).

Example of protected components

Within a subnode in the inheritance tree, you can always access the protected components of superclasses. The classes involved, such as the static types of reference variables, must however be part of the inheritance tree.

In the following example, the reference variables lrefx and lref2 can see the protected components of cx in the context of the subclass c2. The static type of lref1 is c1 and is in another subnode of the inheritance tree. It cannot see any protected components of cx, in the context of c2. In a stricter model (C++ or Java), access in this example would only be possible using lref2. Access using lrefx would not be permitted, since it would involve classes (not subclasses) seeing protected components from outside. At present, ABAP expands the view of lrefx, but only in a specific context. The intention, however, is to introduce a stricter view here too and forbid access using lrefx. This option should not be used for this reason , since it causes a warning to be displayed in the extended program check .

CLASS cx DEFINITION.
  PROTECTED SECTION.
    METHODS mx.
ENDCLASS.
CLASS cx IMPLEMENTATION.
  METHOD mx.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS c1 DEFINITION INHERITING FROM cx.
  ...
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM cx.
  PUBLIC SECTION.
    METHODS m2.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    DATA: lrefx TYPE REF TO cx,
          lref2 TYPE REF TO c2,
          lref1 TYPE REF TO c1.
    lrefx->mx( ). <--- Warning!!
    lref2->mx( ).
    lref1->mx( ). <--- Error!!
  ENDMETHOD.
ENDCLASS.