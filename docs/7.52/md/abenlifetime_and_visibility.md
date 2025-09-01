---
title: "Validity and Visibility"
description: |
  The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared: -   Locally in procedures Local data in procedures(https://help.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlifetime_and_visibility.htm"
abapFile: "abenlifetime_and_visibility.htm"
keywords: ["select", "delete", "do", "while", "if", "try", "method", "class", "data", "types", "abenlifetime", "and", "visibility"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) → 

Validity and Visibility

The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared:

-   Locally in procedures
    Local data in [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") is valid while a procedure is being executed. It is created when the procedure is called, and deleted when the procedure is exited. In addition to their local data and formal parameters, procedures also 'see' the global data of the [master program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry"). Methods also 'see' the components of their class.

-   As components of classes
    [Static attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") of classes exist for as long as the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the ABAP program exists. [Instance attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") of classes are bound to the lifetime of objects. They are created when an object is instantiated and deleted along with the object by the [garbage collector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). Classes also see the global data of the master program.

-   Globally in the master program
    Global program data exists as long as the internal session of the ABAP program exists. The data is created when the program is loaded in the internal session, and deleted from the internal session when the program is removed. An ABAP program normally only sees its own global data (with the exception of [interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry")).
    

All contexts see the cross-program type definitions in ABAP Dictionary and the type definitions and data declarations in the public visibility sections of global classes. Local declarations, however, obscure global declarations with the same name. In statements in which it is possible to specify a data type, a class, or an interface dynamically, the obscuring of a global type by a local type can be canceled by specifying an [absolute type name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").

In addition to context-dependent visibility, the position of the declaration in the source code also plays a role. In a statement of an ABAP program, only previous declarations are visible, regardless of the context. To enable the order in the program to match the context-dependent visibility, all global declarations of a program should be specified at the start of the source code, before the first [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), and all local declarations should be specified directly after the introduction of a procedure. Viewed like this, the definition of an interface and the declaration part of a class are both global declarations. It must be ensured that reference variables that reference a class are not declared until after the class has been declared. The implementation part, on the other hand, is one of the processing blocks.

Notes

-   All data declared in the declaration part of an ABAP program is global to the program. With the exception of the event blocks AT SELECTION-SCREEN, all data declared within event blocks and dialog modules is also global to the program. The data declared in the above event blocks is local to these event blocks. Data that is declared between discrete processing blocks is also global to the program.

-   The [ABAP system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm) and the obsolete structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm) are outside the contexts specified above and are obscured by global program data objects with the same names.

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