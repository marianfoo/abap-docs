  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Inheritance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance.htm) → 

Inheritance and Visibility

You cannot change the [visibility area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_visibility.htm) to which a component is assigned using inheritance. Component visibility affects inheritance as follows:

Public components

The public visibility area of a subclass consists of all its own public components plus the public components of all its superclasses. From outside the class, public components are visible without restrictions.

Protected components

The protected visibility area of a subclass consists of all its own protected components plus the protected components of all its superclasses. The protected section is visible only in the class itself and in all its subclasses. Viewed from outside, protected is the same as private.

Private components

The private visibility area of a subclass includes only the private components of this class. They are visible only in this class. The private components of superclasses cannot be used in subclasses. Only methods inherited from superclasses use (provided they have not been redefined) the private attributes of the superclass (even if the subclass has private attributes with the same name).

Example of protected components

Within a subnode in the inheritance tree, you can always access the protected components of superclasses. The classes involved, such as the static types of reference variables, must however be part of the inheritance tree.

In the following example, the reference variables lrefx and lref2 can see the protected components of cx in the context of the subclass c2. The static type of lref1 is c1 and is in another subnode of the inheritance tree. It cannot see any protected components of cx, in the context of c2. In a stricter model (C++ or Java), access in this example would only be possible using lref2. Access using lrefx would not be permitted, since it would involve classes (not subclasses) seeing protected components from outside. At present, ABAP extends the view of lrefx but only in a specific context. We intend, however, to introduce a stricter model and forbid access using lrefx. For this reason, you should not use this option; it causes a warning to be displayed in the extended program check.

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