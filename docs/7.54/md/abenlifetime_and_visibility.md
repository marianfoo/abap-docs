  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

Validity and Visibility

The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared:

-   Locally in procedures
    Local data in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is valid while a procedure is being executed. It is created when the procedure is called, and deleted when the procedure is exited. In addition to their local data and formal parameters, procedures also 'see' the global data of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry"). Methods also 'see' the components of their class.

-   As components of classes
    [Static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") of classes exist for as long as the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the ABAP program exists. Instance attributes of classes are related to the lifetime of objects. They are created when an object is instantiated and deleted along with the object by the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). Classes also see the global data of the master program.

-   Globally in the master program
    Global program data exists as long as the internal session of the ABAP program exists. The data is created when the program is loaded in the internal session, and deleted from the internal session when the program is removed. An ABAP program normally only sees its own global data (with the exception of [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry")).
    

All contexts see the cross-program type definitions in ABAP Dictionary and the type definitions and data declarations in the public visibility sections of global classes. Local declarations, however, obscure global declarations with the same name. In statements in which it is possible to specify a data type, a class, or an interface dynamically, the obscuring of a global type by a local type can be canceled by specifying an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").

In addition to context-dependent visibility, the position of the declaration in the source code also plays a role. In a statement of an ABAP program, only previous declarations are visible, regardless of the context. To enable the order in the program to match the context-dependent visibility, all global declarations of a program should be specified at the start of the source code, before the first [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"), and all local declarations should be specified directly after the introduction of a procedure. Viewed like this, the definition of an interface and the declaration part of a class are both global declarations. It must be ensured that reference variables that reference a class are not declared until after the class has been declared. The implementation part, on the other hand, is one of the processing blocks.

Notes

-   All data declared in the declaration part of an ABAP program is global to the program. With the exception of the event blocks AT SELECTION-SCREEN, all data declared within event blocks and dialog modules is also global to the program. The data declared in the above event blocks is local to these event blocks. Data that is declared between discrete processing blocks is also global to the program.

-   The [ABAP system fields](javascript:call_link\('abensystem_fields.htm'\)) and the obsolete structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) are outside the contexts specified above and are obscured by global program data objects with the same names.

Example

Declares a program-global field g\_field, an instance attribute attr of a class, and a local field field of a method. Reference is made to the outer declarations in the inner declarations.

DATA g\_field TYPE string VALUE 'global field'.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr LIKE g\_field VALUE 'instance attribute'.
    METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    DATA field LIKE attr VALUE 'local field'.
  ENDMETHOD.
ENDCLASS.