---
title: "Accessing Class Components"
description: |
  When accessing class components, there is a difference between access from inside and outside the same class. When a component is accessed from inside, that is within a method of the same class, the name of the component is sufficient. When a component is accessed from outside, the object for instan
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components_addressing.htm"
abapFile: "abenclass_components_addressing.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "internal-table", "field-symbol", "abenclass", "components", "addressing"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject.htm) → 

Accessing Class Components

When accessing class components, there is a difference between access from inside and outside the same class. When a component is accessed from inside, that is within a method of the same class, the name of the component is sufficient. When a component is accessed from outside, the object for instance components and the class for static components must be specified with an [object component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_component_select_glosry.htm "Glossary Entry") or [class component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component_select_glosry.htm "Glossary Entry"). There are static and dynamic variants.

For static access, object reference variables can only be used to access components that are known to the reference variable. These are the components that are available in the static type of the reference variable (class or interface). Class reference variables that are typed with reference to a superclass but point to subclasses know only the superclass components. Interface references know only interface components.

With dynamic access, the dynamic type is used to get the component for class reference variables. This is the type of the object to which the reference refers, and not the type used for typing the reference. For interface reference variables the static type is also used for dynamic access, that is, the type that was used to type the reference.

This means that reference variables that have been typed with reference to a superclass. They point to subclasses that can be used to dynamically access any component of the subclass for which dynamic access is possible. In particular, reference variables of the type REF TO OBJECT can be used to dynamically access components. However, it is not possible to use interface reference variables to access class-specific components dynamically; only the associated interface components can be accessed. It is not possible to access class-specific components using interface reference variables, because, when accessing with interface reference variables, the implicit use of the intf~ prefix is always required.

Static Access

The following syntax applies (oref is an object reference variable):

-   Accessing an instance attribute attr: oref->attr

-   Calling an instance method meth: oref->meth( ... )

In addition to reference variables, the class name can be used for accessing [static components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_component_glosry.htm "Glossary Entry") :

-   Accessing a static attribute attr: class=>attr

-   Calling a static method meth: class=>meth( ... )

In this context, it is important to note that the properties of instance methods behave like static components. Therefore, in a LIKE addition, the class component selector or reference variables can be used to refer to visible attributes of a class, without first creating an object.

In addition to specifying the name, accessing the components of a class is also possible using the self-reference me:

-   Accessing attributes within the class attr: me->attr

-   Calling a method within the same class meth: me->meth( ... )

Self-reference allows an object to pass a reference to itself to other objects. In addition, attributes within an object can be accessed in methods which are obscured by the local attributes of the method.

Within a redefined method of a subclass, the [pseudo reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpseudo_reference_glosry.htm "Glossary Entry") super can be used to access the obscured method in one of the superclasses:

-   Calling an obscured method meth: super->meth( ... )

Within the instance constructor of a subclass, the pseudo reference super must be used to call the instance constructor of the direct superclass:

-   Calling the constructor of the direct superclass:
    super->constructor( ... )

As a specific method for accessing attributes, the [attributes for key access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_attributes_as_key.htm) to internal tables can be used if they contain reference variables.

Dynamic Access

Dynamic access to class components is only possible for attributes (dynamic access) and for [method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_dynamic.htm) (dynamic invoke).

Accessing Attributes Dynamically

Dynamic access to attributes is possible using the [dynamic ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_access.htm) to field symbols.

The following variants can be used (oref is an object reference variable):

-   Fully dynamic specification:
    ASSIGN (f) TO <fs>.

-   Partly dynamic specification for instance attributes:
    ASSIGN oref->(f) TO <fs>.

-   Partly dynamic specification for static attributes:
    ASSIGN (f1)=>(f2) TO <fs>.

The contents of the fields f, f1 and f2 are interpreted as descriptors of attributes. In a completely dynamic case, f can, for example, have the content 'oref->attr'. In the case of the partly dynamic specification for instance attributes, f only describes the attribute (which itself can in turn describe another attribute). f1 and f2 can be class names and static attributes.

Dynamic Method Calls

The following syntax applies (oref is an object reference variable):

-   Calling an instance method meth:
    CALL METHOD oref->(f)

-   Calling a static method meth:
    CALL METHOD class=>(f)
    CALL METHOD (c)=>meth
    CALL METHOD (c)=>(f)

-   Calling a method within the same class meth:
    CALL METHOD (f)
    CALL METHOD me->(f)

f and c are fields containing the name of the method meth or class class.

In the case of dynamic method calls, the actual parameter can be passed dynamically to [specific internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameter_tables.htm), similarly to calling function modules.