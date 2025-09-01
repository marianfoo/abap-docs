  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Inheritance and Visibility, ABENINHERITANCE_VISIBILITY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Inheritance and Visibility

It is not possible to change the [visibility section](javascript:call_link\('abenclass_visibility.htm'\)) to which a component is assigned using inheritance. The visibility of components has the following consequences in inheritance:

Public Components   

The public visibility area of a subclass consists of all its own public components plus the public components of all its superclasses. Public components are visible externally without restrictions.

Protected Components   

The protected visibility section of a subclass consists of all its own protected components plus the protected components of all superclasses. The protected section is only visible in the class itself and in all its subclasses. Externally, protected is the same as private.

Private Components   

The private visibility section of a subclass includes only the private components of this class. They are visible only in this class. The private components of superclasses cannot be used in subclasses. Only methods inherited from superclasses use private attributes of the superclass that were not redefined, even if the subclass has private attributes with the same name.

Example of Protected Components   

Within a subnode in the inheritance tree, the protected components of superclasses can always be accessed. The classes involved, such as the static types of reference variables, must however be part of the inheritance tree.

In the following example, the reference variables lrefx and lref2 know the protected components of cx in the context of the subclass c2. The static type of lref1 is c1 and is in another subnode of the inheritance tree. It does not know any protected components of cx, in the context of c2. In a stricter model (C++ or Java), access in the above example would only be possible using lref2. Access using lrefx would not be allowed, since it would involve access from outside. ABAP currently expands the view of lrefx depending on the context. The intention, however, is to introduce a stricter view and to forbid access using lrefx. This option should not be used for this reason and it causes a warning from the extended program check.

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