  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

Visibility Sections in Classes

The [declaration part](javascript:call_link\('abendeclaration_section_glosry.htm'\) "Glossary Entry") of a class can be split into up to four different visibility sections.

These sections define the external visibility of the [class components](javascript:call_link\('abenclass_components.htm'\)) and therefore the interfaces of the class for all consumers allowed by the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"). Each component of a class must be explicitly assigned to one of the visibility sections. Only the [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of a class ignore the associated restrictions.

-   Public visibility section
    All components declared in the public visibility section defined using [PUBLIC SECTION](javascript:call_link\('abappublic.htm'\)) are accessible to all consumers as well as in the methods of all inheritors and the class itself. The public components of the class form the interface between the class and its consumers.

-   Protected visibility section
    All components declared in the protected visibility section defined with [PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)) are accessible in the methods of all inheritors and in the class itself. Protected components form a special interface between a class and its subclasses.

-   Private visibility section
    All components declared in the private visibility section defined with [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)) are only accessible in the class itself, and are also not visible to the inheritors. The private components therefore do not form an interface to the consumers of the class.

The following table summarizes the visibilities of a class:

Visible for

PUBLIC SECTION

PROTECTED SECTION

PRIVATE SECTION

Same class and its friends

X

X

X

Any subclasses

X

X

\-

Any repository objects

X

\-

\-

Note

A subclass can generally never access the protected components of a subclass from a different branch in the inheritance hierarchy, even if they are inherited from a common superclass. This rule can only be lifted by a friendship.

Encapsulation

The three visibility sections form the basis for the important feature of encapsulation in ABAP Objects. When declaring a class, as few components as possible must be declared in the public section and these public components must be designed with care. The public components of global classes may not be changed once the class has been released.

Programming Guideline

[Exploit the benefits of encapsulation](javascript:call_link\('abenencapsulation_guidl.htm'\) "Guideline")

Note

The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class, except for the components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses, if they are not their [friends](javascript:call_link\('abenfriends.htm'\)).

Example

In method m1 of class c1, reference variables of static type c1 can be used to access the protected attribute a11 and the private attribute a12 of any objects of c1. In method m2 of subclass c2, reference variables of static type c1 or c2 can similarly be used to access the protected attribute a11. It is not possible to access the private attribute of the superclass with either reference variable.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS m1.
  PROTECTED SECTION.
    DATA a11 TYPE i.
  PRIVATE SECTION.
    DATA a12 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    DATA lref1 TYPE REF TO c1.
    lref1->a11 = 0. "OK
    lref1->a12 = 0. "OK
  ENDMETHOD.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS m2.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    DATA: lref1 TYPE REF TO c1,
          lref2 TYPE REF TO c2.
    lref1->a11 = 0. "OK
    lref2->a11 = 0. "OK
    "lref1->a12 = 0. "Syntax error, access to a11 not permitted
    "lref2->a12 = 0. "Syntax error, a12 not visible
  ENDMETHOD.
ENDCLASS.