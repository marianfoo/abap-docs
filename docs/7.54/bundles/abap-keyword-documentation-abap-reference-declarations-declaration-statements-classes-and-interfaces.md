# ABAP Keyword Documentation / ABAP − Reference / Declarations / Declaration Statements / Classes and Interfaces / Components in Classes and Interfaces / Implementing and including interfaces

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeninterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterfaces.htm)
- [abapinterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)
- [abapinterfaces_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_class.htm)
- [abapinterfaces_ifac.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_ifac.htm)
- [abapaliases.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.945Z

---

### abeninterfaces.htm

> **📖 Official SAP Documentation**: [abeninterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) → 

Implementing and including interfaces

Interfaces can be implemented by classes using the statement

-   [INTERFACES](javascript:call_link\('abapinterfaces.htm'\))

or can be included by other interfaces.

Alias names can be defined for interface components using the statement

-   [ALIASES](javascript:call_link\('abapaliases.htm'\))

.

Continue
[INTERFACES](javascript:call_link\('abapinterfaces.htm'\))
[ALIASES](javascript:call_link\('abapaliases.htm'\))



**📖 Source**: [abeninterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterfaces.htm)

### abapinterfaces.htm

> **📖 Official SAP Documentation**: [abapinterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Implementing and including interfaces](javascript:call_link\('abeninterfaces.htm'\)) → 

INTERFACES

[Quick Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax Forms

[Implementing Interfaces in Classes](javascript:call_link\('abapinterfaces_class.htm'\))
1\. INTERFACES intf
    *\[*[PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))*\]*
    *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
       *\[*FINAL METHODS meth1 meth2 ... *\]**}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
    *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.
[Integrating Interfaces into Interfaces](javascript:call_link\('abapinterfaces_ifac.htm'\))
2\. INTERFACES intf.

Effect

This statement implements interfaces in classes or integrates interfaces into other interfaces. It can be used in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of classes and in [interface declarations](javascript:call_link\('abapinterface_definition.htm'\)).

Continue
[INTERFACES - implementation](javascript:call_link\('abapinterfaces_class.htm'\))
[INTERFACES - integration](javascript:call_link\('abapinterfaces_ifac.htm'\))



**📖 Source**: [abapinterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)

### abapinterfaces_class.htm

> **📖 Official SAP Documentation**: [abapinterfaces_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_class.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Implementing and including interfaces](javascript:call_link\('abeninterfaces.htm'\)) →  [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) → 

INTERFACES - implementation

[Quick Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax

INTERFACES intf
  *\[*[PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))*\]*
  *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
     *\[*FINAL METHODS meth1 meth2 ... *\]**}*
  *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
  *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.

Extras:

[1\. ... ABSTRACT METHODS meth1 meth2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... FINAL METHODS meth1 meth2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... ALL METHODS *{*ABSTRACT*|*FINAL*}*](#!ABAP_ADDITION_3@3@)
[4\. ... DATA VALUES attr1 = val1 attr2 = val2 ...](#!ABAP_ADDITION_4@4@)

Effect

In the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"), the statement INTERFACES implements the interface intf in the class. Additions can also be defined to determine the properties of interface components in the class.

Any local or global interfaces can be specified for intf here that are not already bound in a superclass of the current class. The components of the interfaces become public components of the class after the implementation. An interface component called comp has the name intf~comp in the class, where intf is the name of the interface and the character ~ is the interface component selector. A class must implement all methods of the interface in its implementation part, with the following exceptions:

-   Interface methods declared as optional using the addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)).
    
-   Interface methods specified in the class after the addition ABSTRACT METHODS (making them abstract).
    
-   Partial implementations are permitted in test classes using the addition [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\)).
    

Notes

-   A class can implement any number of different interfaces. All of the interfaces implemented by a class are of equal status. If one of the interfaces intf implemented in a class is a composite (meaning it contains component interfaces), these are implemented in the class like individual interfaces, regardless of their nesting hierarchy, and their components are called using the name of their component interface instead of using the name intf. Multiple use of the interface component selection in a name (such as intf1~intf2~comp) is generally not supported.
    
-   Each interface appears only once in a class and every interface component comp is always clearly accessible using the intf~comp. When the components of an interface, if they are components of more than one interface, appear to be used more than once in a class, even they appear only once.
    
-   If the implementation of a non-optional method of a global interface implemented using INTERFACES is missing in a class, a syntax warning occurs instead of a syntax error. This prevents classes from becoming unusable when later enhancements are made to global interfaces. Calls of a missing implementation, however, always raise an exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD and produce the runtime error CALL\_METHOD\_NOT\_IMPLEMENTED if the exception is not handled. A real syntax error is produced when local interfaces are used and the implementation is missing.
    
-   If a class implements a method intf~... of a global interface intf implemented using INTERFACES in its implementation part and the method is not declared in the interface, a warning is displayed in the syntax check. This type of method implementation is dead coding that cannot be executed and is to be removed. Classes become unusable with a syntax error if methods were later deleted from an implemented global interface, and which were implemented without class and had no values. An actual syntax error results when local interfaces are used.
    

Example

Implementation of an interface intf in a class cls.

INTERFACE intf.
  CLASS-DATA selfref TYPE REF TO intf.
  CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO intf.
  ...
ENDINTERFACE.
CLASS cls DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES intf.
    ALIASES:
      selfref FOR intf~selfref,
      factory FOR intf~factory.
    ...
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD factory.
    IF selfref IS INITIAL.
      selfref = NEW cls( ).
      ref = selfref.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(iref) = cls=>factory( ).

Addition 1

... ABSTRACT METHODS meth1 meth2 ...

Addition 2

... FINAL METHODS meth1 meth2 ...

Effect

Using the additions ABSTRACT METHODS and FINAL METHODS, the individual instance methods meth of the interface are made either abstract or final in the class to be implemented. The same rules apply as to the additions [ABSTRACT](javascript:call_link\('abapmethods_abstract_final.htm'\)) and [FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\)) of the statement [METHODS](javascript:call_link\('abapmethods.htm'\)). In particular, the whole class must be abstract if an interface method is made abstract and no interface methods can be executed at the same time after ABSTRACT METHODS and FINAL METHODS.

The following can be specified as methods meth1, meth2, ...

-   Instance methods that are declared in the interface intf itself.
    
-   Alias names declared in the interface intf for instance methods declared in interfaces that are bound in intf.
    
-   Instance methods that are declared in interfaces bound in intf using the name of its own interface and the interface component selector (~). In this case the component interface cannot itself be bound with the statement INTERFACES.
    

If an interface is bound using multiple INTERFACES statements, the information in the additions FINAL and ABSTRACT must not produce contradictory definitions for the same method.

Example

Definition of abstract methods when binding two interfaces intf1 and intf2 in an abstract class cls.

INTERFACE intf1.
  METHODS meth1.
ENDINTERFACE.
INTERFACE intf2.
  INTERFACES intf1.
  METHODS meth2.
ENDINTERFACE.
CLASS cls DEFINITION ABSTRACT.
  PUBLIC SECTION.
    INTERFACES intf1 ABSTRACT METHODS meth1.
    INTERFACES intf2 ABSTRACT METHODS meth2.
ENDCLASS.

Example

Short form of the preceding example. Since intf2 binds the interface intf1, its methods can be specified as intf1~meth1. This means that a separate statement INTERFACES intf1 is no longer possible in this class.

INTERFACE intf1.
  METHODS meth1.
ENDINTERFACE.
INTERFACE intf2.
  INTERFACES intf1.
  METHODS meth2.
ENDINTERFACE.
CLASS cls DEFINITION ABSTRACT.
  PUBLIC SECTION.
    INTERFACES intf2 ABSTRACT METHODS intf1~meth1 meth2.
ENDCLASS.

Addition 3

... ALL METHODS *{*ABSTRACT*|*FINAL*}*

Effect

Instead of making individual interface methods in the class abstract or final it is possible, using the addition ALL METHODS *{*ABSTRACT*|*FINAL*}*, to make all interface methods either [abstract](javascript:call_link\('abapmethods_abstract_final.htm'\)) or [final](javascript:call_link\('abapmethods_abstract_final.htm'\)).

Example

Integration of an interface intf in an abstract class cls1, in which all methods are made abstract and must be implemented in a subclass cls2.

INTERFACE intf.
  METHODS:
    meth1,
    meth2.
  ...
ENDINTERFACE.
CLASS cls1 DEFINITION ABSTRACT.
  PUBLIC SECTION.
    INTERFACES intf ALL METHODS ABSTRACT.
    ALIASES:
      meth1 FOR intf~meth1,
      meth2 FOR intf~meth2.
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PUBLIC SECTION.
    METHODS:
      meth1 REDEFINITION,
      meth2 REDEFINITION.
ENDCLASS.
CLASS cls2 IMPLEMENTATION.
  METHOD meth1.
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.

Addition 4

... DATA VALUES attr1 = val1 attr2 = val2 ...

Effect

Using the addition DATA VALUES, initial values can be assigned to individual attributes attr. For attributes, this addition functions in the same way as the addition VALUE of the statement [DATA](javascript:call_link\('abapdata.htm'\)) for attributes in its own class.

The following can be specified as attributes attr1, attr2, ...

-   Attributes that are declared in the interface intf itself.
    
-   Alias names declared in the interface intf for attributes declared in interfaces that are bound in intf.
    
-   Attributes that are declared in interfaces bound in intf using the name of its own interface and the interface component selector (~). In this case the component interface cannot itself be bound with the statement INTERFACES.
    

Constants declared in the interface or in a component interface with the statement [CONSTANTS](javascript:call_link\('abapconstants.htm'\)) cannot be specified after the addition DATA VALUES.

Example

Integration of an interface intf in a class cls, where the interface attributes are provided with start values.

INTERFACE intf.
  CLASS-DATA:
    attr1 TYPE string,
    attr2 TYPE string.
  ...
ENDINTERFACE.
CLASS cls DEFINITION ABSTRACT.
  PUBLIC SECTION.
    INTERFACES intf
      DATA VALUES attr1 = 'Hello'
                  attr2 = 'World'.
    ALIASES:
      attr1 FOR intf~attr1,
      attr2 FOR intf~attr2.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( |{ cls=>attr1 } { cls=>attr2 }| ).



**📖 Source**: [abapinterfaces_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_class.htm)

### abapinterfaces_ifac.htm

> **📖 Official SAP Documentation**: [abapinterfaces_ifac.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_ifac.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Implementing and including interfaces](javascript:call_link\('abeninterfaces.htm'\)) →  [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) → 

INTERFACES - integration

[Quick Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax

INTERFACES intf.

Effect

In the declaration of an interface, the statement INTERFACES binds the interface intf in the declared interface. You cannot specify an additions. As a result, the interface intf becomes a component interface of a composite interface.

An interface can be composed of any number of different component interfaces. All these interfaces are equally valid on one level. If a component interface itself is a composite (that is, it contains its own component interfaces) the nesting hierarchy is irrelevant for the composition of the interface. It is relevant, however, for accessing the interface components.

To access the component comp of a component interface intf within a composite interface, the expression intf~comp can be used with the interface component selector (~). Multiple use of the interface component selection in a name (such as intf1~intf2~comp) is generally not supported. In a composite interface, it is possible to use the interface component selector to access only interface components of the component interface that are bound in this interface using the statement INTERFACES. Since all nested interfaces are at the same level, however, all that is needed to access the interface components of all component interfaces is the name of their interface.

Notes

-   Each interface and its components appear only once in a composite interface. Even an interface that is seemingly implemented more than once in an interface, because it is an interface component of one or more other interfaces, really exists only once.
    
-   Since there are no separate namespaces for global and local interfaces, you have to make sure that compositions of local interfaces do not result in combinations of global and local interfaces with identical names, because they cannot be equally valid on the same level in their implementation.
    

Example

The following example demonstrates how the statement INTERFACES can be used to compose and implement interfaces. Class c1 implements the composite interfaces i2 and i3. Although i1 is a component interface of i2 and i3, it exists only once in class c1. A reference variables iref1 of the static type i1 is used to generate an object class c1 and call method i1~m1, which is implemented there.

INTERFACE i1.
  METHODS m1.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  METHODS m2.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i1.
  METHODS m3.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES: i2, i3.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~m1.
    ...
  ENDMETHOD.
  METHOD i2~m2.
    ...
  ENDMETHOD.
  METHOD i3~m3.
    ...
  ENDMETHOD.
ENDCLASS.
DATA iref1 TYPE REF TO i1.
START-OF-SELECTION.
  CREATE OBJECT iref1 TYPE c1.
  iref1->m1( ).



**📖 Source**: [abapinterfaces_ifac.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces_ifac.htm)

### abapinterfaces.htm

> **📖 Official SAP Documentation**: [abapinterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Implementing and including interfaces](javascript:call_link\('abeninterfaces.htm'\)) → 

INTERFACES

[Quick Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax Forms

[Implementing Interfaces in Classes](javascript:call_link\('abapinterfaces_class.htm'\))
1\. INTERFACES intf
    *\[*[PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\))*\]*
    *{* *{**\[*ABSTRACT METHODS meth1 meth2 ... *\]*
       *\[*FINAL METHODS meth1 meth2 ... *\]**}*
    *|* *\[*ALL METHODS *{*ABSTRACT*|*FINAL*}**\]* *}*
    *\[*DATA VALUES attr1 = val1 attr2 = val2 ...*\]*.
[Integrating Interfaces into Interfaces](javascript:call_link\('abapinterfaces_ifac.htm'\))
2\. INTERFACES intf.

Effect

This statement implements interfaces in classes or integrates interfaces into other interfaces. It can be used in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of classes and in [interface declarations](javascript:call_link\('abapinterface_definition.htm'\)).

Continue
[INTERFACES - implementation](javascript:call_link\('abapinterfaces_class.htm'\))
[INTERFACES - integration](javascript:call_link\('abapinterfaces_ifac.htm'\))



**📖 Source**: [abapinterfaces.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm)

### abapaliases.htm

> **📖 Official SAP Documentation**: [abapaliases.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapaliases.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapaliases.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Implementing and including interfaces](javascript:call_link\('abeninterfaces.htm'\)) → 

ALIASES

[Quick Reference](javascript:call_link\('abapaliases_shortref.htm'\))

Syntax

ALIASES alias FOR intf~comp.

Effect

In the declaration part of a class or interface, this statement declares an alias name alias for a component comp of the interface intf. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name alias. The interface intf must be implemented in the same class or included in the same interface. The alias name can be used instead of intf~comp in any position in which it is visible to access the interface component comp.

An alias name is a component of the class and the interface. It shares the namespace with the other components and is inherited by subclasses. In classes, an alias name can be declared in every [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry").

Notes

-   Within a context, such as a class declaration or method, only one name should be used to access components. The syntax check issues a warning if both the alias name and the full name intf~meth are used together.
    
-   When implementing interface methods in the implementation section of classes using METHOD and when [re-defining](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") methods using METHODS ... REDEFINITION, you are allowed to use the alias name.
    

Example

In the interfaces i2, i3 and the class c1, declares alias names for the methods of the included or implemented interfaces. In the implementation part of the class, the interface methods in the [METHODS](javascript:call_link\('abapmethods.htm'\)) statements are implemented using the interface component selector. The alias names of the classes can also be used here.

INTERFACE i1.
  METHODS meth.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  ALIASES m1 FOR i1~meth.
  METHODS meth.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i2.
  ALIASES: m1 FOR i2~m1,
           m2 FOR i2~meth.
  METHODS meth.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i3.
    ALIASES: m1 FOR i3~m1,
             m2 FOR i3~m2,
             m3 FOR i3~meth.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~meth.
    ... m2( ) ...
  ENDMETHOD.
  METHOD i2~meth.
    ... m3( ) ...
  ENDMETHOD.
  METHOD i3~meth.
    ... m1( ) ....
  ENDMETHOD.
ENDCLASS.
