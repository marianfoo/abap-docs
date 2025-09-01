  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

Definition of Classes and Interfaces

Classes and interfaces in ABAP Objects can be declared either globally or locally.

-   Global classes and interfaces are saved in the central [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") of the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry"). From a technical perspective, global classes and interfaces are defined in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"). All ABAP programs in an [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") can access these global classes and interfaces. Access is managed by the package check. Global classes and interfaces are stored in a namespace along with the [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") of [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

-   Local classes and interfaces can be defined in all programs except [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") and [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry"). They can be used statically only in the defining program. Dynamic access from other programs is possible but not advisable. When a class is used in an ABAP program, the system first searches for a local class with the specified name. If it does not find one, it then looks for a global class. Otherwise, there is no difference between using global and local classes or interfaces.

In local classes used only in a single program, it is usually sufficient to define the public interface (that is, the outwardly visible components) so that it fits into that program. Conversely, each global class is available throughout the system, which means that its public interface can only be specified with reference to data types that are themselves visible throughout the system.

The syntax for defining classes and interfaces is essentially the same for local and global classes and interfaces. The only difference is in the addition PUBLIC, which makes a distinction between the global classes and interfaces and local declarations.

Global classes and interfaces can be edited in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"), either in form-based mode or source code-based mode. In form-based mode, the Class Builder generates the relevant source code that can be accessed directly in source-code based mode.

Defining Classes

Classes consist of [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry"), enclosed in the ABAP statements [CLASS - ENDCLASS](javascript:call_link\('abapclass.htm'\)). A complete class definition consists of a declaration part and, if required, an implementation part.

The declaration part of a class named class consists of a statement block:

[CLASS class DEFINITION.](javascript:call_link\('abapclass.htm'\))
...
[ENDCLASS.](javascript:call_link\('abapendclass.htm'\))

It contains the declaration for all [components](javascript:call_link\('abenclass_components.htm'\)) (attributes, methods, or events) of the class. All the components of a class must be assigned explicitly to a [visibility section](javascript:call_link\('abenclass_visibility.htm'\)) (PUBLIC SECTION, PROTECTED SECTION, or PRIVATE SECTION), which defines the location from which each component can be accessed. In local classes, the declaration part belongs to the global program data and should therefore be placed at the beginning of the program.

If methods are declared in the declaration part of a class, an implementation part for must also be written for the class. This consists of a further statement block:

[CLASS class IMPLEMENTATION.](javascript:call_link\('abapclass.htm'\))
...
[ENDCLASS.](javascript:call_link\('abapendclass.htm'\))

The implementation part of a class contains the implementation of all [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of the class. Methods are [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), which makes them processing blocks of an ABAP program. The position of the implementation part in the source code is thus unimportant. For clarity, however, either all the implementation parts of local classes should be placed at the end of the program, or directly after the relevant definition part. In the latter case, subsequent non-declarative statements must then be assigned explicitly to a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") such as START-OF-SELECTION, so that they can be accessed.

Defining Interfaces

The definition of an intf interface is enclosed in the following statements:

[INTERFACE intf.](javascript:call_link\('abapinterface.htm'\))
...
[ENDINTERFACE.](javascript:call_link\('abapendinterface.htm'\))

The definition contains the declaration for all components (attributes, methods, events) of the interface. In interfaces, the same components can be defined as in class definitions. The components of an interface cannot be assigned explicitly to a [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"), because interface components always expand the public area of a class when they are implemented in it. Interfaces do not have an implementation part, since their methods are implemented in the class that implements the interface.