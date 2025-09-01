  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

ABAP Objects - Definition of Classes and Interfaces

Classes and interfaces in ABAP Objects can be defined either globally or locally.

-   Global classes and interfaces are stored centrally in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry"). From a technical perspective, global classes and interfaces are defined in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"). The global classes and interfaces are visible for all ABAP programs of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). Access is managed by the package check. Global classes and interfaces are stored in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.
-   Local classes and interfaces can be defined in any programs except [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") and [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry"). They can only be used statically in the defining program. Dynamic access across program boundaries is possible, but not recommended. When a class is used in an ABAP program, the system first searches for a local class, then for a global class with the specified name. Otherwise, there is no differentiation between using global and local classes or interfaces.

In local classes that can only be used in a single program, it is usually sufficient to define the public interface, that is, the externally visible components, suitable for this program. However, global classes are available throughout the system, which means that its public interface can only be typed with reference to data types that are themselves visible throughout the system.

The syntax for defining classes and interfaces is essentially the same for local and global classes and interfaces. The only difference is in the addition PUBLIC, which makes a distinction between the global classes and interfaces and local declarations.

Global classes and interfaces can be edited in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"), either in form-based or source code-based mode. In form-based mode, the Class Builder generates the corresponding source code that can be accessed directly in source-code based mode. The [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") only offer the source code-based mode.

Defining Classes

Classes consist of [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry"), which is enclosed in the ABAP statements [CLASS - ENDCLASS](javascript:call_link\('abapclass.htm'\)). A complete class definition consists of a declaration part and, if required, an implementation part.

The declaration part of a class named class consists of a statement block:

[CLASS class DEFINITION.](javascript:call_link\('abapclass.htm'\))
...
[ENDCLASS.](javascript:call_link\('abapendclass.htm'\))

It contains the declaration of all [components](javascript:call_link\('abenclass_components.htm'\)) (attributes, methods, or events) of a class. All the components of a class must be assigned explicitly to a [visibility section](javascript:call_link\('abenclass_visibility.htm'\)) (PUBLIC SECTION, PROTECTED SECTION, or PRIVATE SECTION), which defines the location from where each component can be accessed. In local classes, the declaration part belongs to the global data declarations and should therefore also be at the beginning of the program.

If methods are declared in the declaration part of a class, the class also needs an implementation part. This consists of a statement block:

[CLASS class IMPLEMENTATION.](javascript:call_link\('abapclass.htm'\))
...
[ENDCLASS.](javascript:call_link\('abapendclass.htm'\))

The implementation part of a class contains the implementation of all [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of this class. Methods are [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), which makes them processing blocks of an ABAP program. The arrangement of the implementation part in the source code is therefore irrelevant. For clarity, all the implementation parts of local classes should be listed at the end of the program, or directly after the relevant definition part. In the latter case, however, it should be ensured that subsequent non-declarative statements must then be assigned explicitly to a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") such as START-OF-SELECTION, so that they can be accessed.

Defining Interfaces

The definition of an intf interface is enclosed in the following statements:

[INTERFACE intf.](javascript:call_link\('abapinterface.htm'\))
...
[ENDINTERFACE.](javascript:call_link\('abapendinterface.htm'\))

The definition contains the declaration of all components (attributes, methods, events) of the interface. In interfaces, the same components can be defined as in class definitions. The components of an interface cannot be assigned explicitly to a [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"), because interface components always expand the public area of a class in which they are implemented. Interfaces do not have an implementation part since their methods must be implemented in the classes that implement the interface.