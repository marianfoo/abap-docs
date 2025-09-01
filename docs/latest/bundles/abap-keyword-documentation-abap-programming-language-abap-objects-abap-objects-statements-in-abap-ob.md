# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Statements in ABAP Objects

Included pages: 6


### abenabap_objects_statements.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Statements%20in%20ABAP%20Objects%2C%20ABENABAP_OBJECTS_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ABAP Objects - Statements in ABAP Objects

The statements in ABAP Objects can be differentiated as follows:

-   [Statements for defining classes and interfaces](javascript:call_link\('abendefining_classes_interfaces.htm'\))
    
    These statements define classes and interfaces and their components. They can be used for local and global classes or interfaces.
    
-   [Statements for implementing methods](javascript:call_link\('abendefining_methods.htm'\))
    
    These statements implement the functions of classes in methods.
    
-   [Statements in class pools and interface pools](javascript:call_link\('abenclass_interace_pools.htm'\))
    
    In addition to the statements for defining the global class, statements for local declarations and implementations can also be used in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"). In [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"), only the global interface can be declared. The obsolete statement [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) is also syntactically possible.
    

A language cleanup was performed in ABAP Objects. The [stricter ABAP syntax](javascript:call_link\('abenabap_objects_strict.htm'\)) now applies to all statements in ABAP Objects.

Continue
[ABAP Objects - Statements for Defining Classes and Interfaces](javascript:call_link\('abendefining_classes_interfaces.htm'\))
[ABAP Objects - Statements for Implementing Methods](javascript:call_link\('abendefining_methods.htm'\))
[ABAP Objects - Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\))
[ABAP Objects - Keywords](javascript:call_link\('abenobjects_keywords.htm'\))
[ABAP Objects - Stricter Syntax Rules](javascript:call_link\('abenabap_objects_strict.htm'\))


### abendefining_classes_interfaces.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Statements%20for%20Defining%20Classes%20and%20Interfaces%2C%20ABENDEFINING_CLASSES_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Statements for Defining Classes and Interfaces

These statements are used to define classes and interfaces and their components. They can be used in any ABAP program where classes and interfaces can be defined.

Statements for Defining Classes   

Defining the Declaration Part

CLASS ... DEFINITION ...
...
ENDCLASS ...

Defining the Implementation Part

CLASS ... IMPLEMENTATION ...
...
ENDCLASS ...

Statements for Defining Components of Classes   

Statements in the Declaration Part

PUBLIC SECTION.
PROTECTED SECTION.
PRIVATE SECTION.
TYPES ...
INTERFACES ...
ALIASES ...
CONSTANTS ...
CLASS-DATA ...
DATA ...
CLASS-METHODS ...
METHODS ...
CLASS-EVENTS ...
EVENTS ...

Statements in the Implementation Part

METHOD ...
...
ENDMETHOD.

Statements for Defining Interfaces   

Declaring the Interface

INTERFACE ...
...
ENDINTERFACE ...

Statements for Declaring Components of Interfaces   

The same statements can be used to declare components in interfaces as in the declaration part of classes.

Note   

The components of classes or interfaces, that is, their attributes, methods, and events) are declared in their declaration parts. TYPES can also be used to declare local data types. ALIASES can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must be assigned to one of the four [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") defined by the corresponding statements.

The implementation part of a class can only contain method implementations between METHOD - ENDMETHOD. In methods, only the [statements for method implementations](javascript:call_link\('abendefining_methods.htm'\)) can be used.

No statements other than those specified above are necessary for defining classes or interfaces and therefore no other statements are allowed between CLASS - ENDCLASS or INTERFACE - ENDINTERFACE outside of methods.

The [stricter syntax](javascript:call_link\('abenabap_objects_strict.htm'\)) in ABAP Objects applies to all statements for class and interface definitions.


### abendefining_methods.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Statements%20for%20Implementing%20Methods%2C%20ABENDEFINING_METHODS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

ABAP Objects - Statements for Implementing Methods

The functions of classes are implemented in methods, that is, between METHOD - ENDMETHOD.

The statements allowed in methods include the entire ABAP language range that is allowed in all procedures. It must be noted, however, that all statements in methods are subject to the [stricter syntax](javascript:call_link\('abenabap_objects_strict.htm'\)) of ABAP Objects.


### abenclass_interace_pools.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Statements%20in%20Class%20Pools%20and%20Interface%20Pools%2C%20ABENCLASS_INTERACE_POOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion%20for%20improvement:)

ABAP Objects - Statements in Class Pools and Interface Pools

Class pools and interface pools are the ABAP programs where [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") and [global interfaces](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry") of the class library are defined. They are created in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or using the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   A program of [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") class pool is introduced using the statement [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\)).
-   A program of [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") interface pool is introduced using the statement [INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\)).

These statements are generated in the master program when a class or interface pool is created.

Each class pool or interface pool can only contain one global class or one global interface. The global class or global interfaces are declared using the following statements:

-   [CLASS ... PUBLIC. ... ENDCLASS.](javascript:call_link\('abapclass.htm'\))
-   [INTERFACE ... PUBLIC. ... ENDINTERFACE.](javascript:call_link\('abapinterface.htm'\))

Further Statements in Class Pools   

In addition to the declaration of the global class, a class pool can only contain the following statements:

-   Declaration of local data types using the statement [TYPES](javascript:call_link\('abaptypes.htm'\)). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local constants using the statement [CONSTANTS](javascript:call_link\('abapconstants.htm'\)). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local interfaces using the statements [INTERFACE ... ENDINTERFACE](javascript:call_link\('abapinterface.htm'\)). These can be used by the global class in the private visibility section and in the implementation part.
-   Declaration and implementation of local classes using the statements [CLASS ... ENDCLASS](javascript:call_link\('abapclass.htm'\)). These can be used by the global class in the private visibility section and in the implementation part.
-   Definition of [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") using [DEFINE ... END-OF-DEFINITION](javascript:call_link\('abapdefine.htm'\)). These macros can be used by the global class in the implementation part.

Locally defined types, classes, and interfaces in class pools can be used in the following ways:

-   Only the methods of the global class access the local declarations and implementations in the program. These provide auxiliary methods, for example, which should not be visible in the interface of the global class. This is the most common scenario. Any changes made to local declarations in the program do not affect the interface of the global class.
-   Apart from the methods of the global class, declarations in the private visibility section of the class also refer to the local declarations in the program. This is a more unusual scenario, in which changes made to the local declarations affect the interface of the global class and [subclasses](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry"), and [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of the global class are recompiled before the next execution.

Hint

The obsolete statement [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) is also possible but ignored.

Further Statements in Interface Pools   

In addition to the declaration of the global interface, an interface pool cannot contain its own declarations or implementations.

Hint

The obsolete statement [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) is also possible but ignored.

Program Organization   

Like any other ABAP program, class and interface pools consist of a global declaration part for declarations and an implementation part for implementations (procedures).

-   The global declaration part of a class pool can therefore contain the declarations of local data types, local interfaces, and local classes, in addition to the actual declaration part of the global class. The implementation part of a class pool can contain the implementation parts of local classes in addition to the implementation part of the global class.
-   The global declaration part of an interface pool can only contain the declaration of the global interface and the implementation part of an interface pool is always empty.

The [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or Class Builder organize the various declarations and implementations of a class or interface pool in [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") whose names are usually not visible to the developer. Include programs exist for:

-   Each visibility section in the declaration part of the global class
-   Each implementation of a method of the global class
-   Local declarations and implementations ([CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") and [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry")).
-   Test classes in ABAP Unit

The actual organization of class and interface pools in include programs and the naming conventions for the includes can be found under [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\)) and [INTERFACE-POOL](javascript:call_link\('abapclass-pool.htm'\)).

Restrictions

Apart from the statements listed above, no statements other than CLASS - ENDCLASS and INTERFACE - ENDINTERFACE are required and are therefore not allowed in class pools. The [stricter syntax](javascript:call_link\('abenabap_objects_strict.htm'\)) of ABAP Objects applies to all allowed statements.

The following restrictions are particularly important:

-   No processing blocks except methods
    
    Event blocks such as START-OF-SELECTION, AT SELECTION-SCREEN,GET, or AT LINE-SELECTION and dialog modules defined by MODULE - ENDMODULE are not allowed. This means that runtime framework events cannot be processed. ABAP Objects has its own event concept for this. Neither [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") nor [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") can be defined using FUNCTION - ENDFUNCTION or FORM - ENDFORM. The methods of a class pool can still call external function modules and subroutines in addition methods.
    
-   No interface work areas to other programs
    
    The statements TABLES and NODES and the addition COMMON PART of the DATA statement are not possible. This means that class and interface pools do not support any global data areas across programs within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").
    
-   No own [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry")
    
    Screen processing as performed in other ABAP programs is not possible. No [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") can be defined in a class pool or interface pool. If classic dynpros, including [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), are required, it is best to encapsulate them in [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"). It is recommended that other suitable output media instead of classic lists are used. For tabular list output, the classes of the SAP List Viewer (ALV), such as CL\_SALV\_TABLE, should be used. For simple text output, wrappers of the browser control, such as dynamic documents or text edit control wrappers, should be used.
    
-   No processing of extracts
    
    [Extract data sets](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") cannot be processed in global classes since the defining statement [FIELD-GROUPS](javascript:call_link\('abapfield-groups.htm'\)) is forbidden in class or interface pools.


### abenobjects_keywords.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Keywords%2C%20ABENOBJECTS_KEYWORDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Keywords

The following list shows the keywords introduced specifically for ABAP objects.

[ALIASES](javascript:call_link\('abapaliases.htm'\))

Declares an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry")

[CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\))

Calls a [method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") dynamically

[CLASS ... ENDCLASS](javascript:call_link\('abapclass.htm'\))

Defines a [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry")

[CLASS-DATA](javascript:call_link\('abapclass-data.htm'\))

Declares a [static attribute](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry")

[CLASS-EVENTS](javascript:call_link\('abapclass-events.htm'\))

Declares a [static event](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry")

[CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\))

Declares a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry")

[CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\))

Creates an [object](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry")

[EVENTS](javascript:call_link\('abapevents.htm'\))

Declares an [instance event](javascript:call_link\('abeninstance_event_glosry.htm'\) "Glossary Entry")

[INTERFACE ... ENDINTERFACE](javascript:call_link\('abapinterface.htm'\))

Defines an [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")

[INTERFACES](javascript:call_link\('abapinterfaces.htm'\))

Includes an [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")

[METHOD ... ENDMETHOD](javascript:call_link\('abapmethod.htm'\))

Defines a [method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry")

[METHODS](javascript:call_link\('abapmethods.htm'\))

Declares an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry")

[PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\))

Introduces the package [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry")

[PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\))

Introduces the protected [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry")

[PUBLIC SECTION](javascript:call_link\('abappublic.htm'\))

Introduces the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry")

[RAISE EVENT](javascript:call_link\('abapraise_event.htm'\))

Raises an [event](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry")

[SET HANDLER](javascript:call_link\('abapset_handler.htm'\))

Registers an [event](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry")


### abenabap_objects_strict.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Stricter%20Syntax%20Rules%2C%20ABENABAP_OBJECTS_STRICT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP Objects - Stricter Syntax Rules

The ABAP language has been cleaned up in ABAP Objects. As part of this language cleanup, stricter syntax checks are performed for constructs that were previously allowed, or obsolete statements are no longer allowed at all. The stricter syntax checks usually result in syntax that should also be used outside of ABAP Objects, but where the old versions cannot be forbidden for compatibility reasons.

The various syntax revisions are listed in the documentation of the language elements and in particular in the list of [obsolete language elements](javascript:call_link\('abenabap_obsolete.htm'\)).

The stricter syntax applies to all [statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)).
