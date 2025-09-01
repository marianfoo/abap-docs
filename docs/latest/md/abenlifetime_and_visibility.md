---
title: "Validity and Visibility"
description: |
  The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared: -   Locally in Procedures Local data in procedures(https://help.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlifetime_and_visibility.htm"
abapFile: "abenlifetime_and_visibility.htm"
keywords: ["select", "delete", "do", "while", "if", "try", "method", "class", "data", "types", "abenlifetime", "and", "visibility"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Validity%20and%20Visibility%2C%20ABENLIFETIME_AND_VISIBILITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Validity and Visibility

The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared:

-   Locally in Procedures
    
    Local data in [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") is valid while a procedure is being executed. It is created when the procedure is called and deleted when the procedure is exited. In addition to their local data and formal parameters, procedures see the global data of the [compilation unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). Methods also 'see' the components of their class.
    
-   As Components of Classes
    
    [Static attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") of classes exist for as long as the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the ABAP program exists. Instance attributes of classes are bound to the lifetime of objects. They are created when an object is instantiated and deleted along with the object by the [Garbage Collector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). Classes also see the global data of the compilation unit.
    
-   Globally in the Compilation Unit
    
    Global program data exists for as long as the internal session of the ABAP program exists. It is created when the program is loaded in the internal session, and deleted from the internal session when the program is removed. An ABAP program usually only sees its own global data (except for [interface work areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_work_area_glosry.htm "Glossary Entry")).
    

All contexts see the program-independent type definitions of ABAP CDS, of the ABAP Dictionary and the type definitions and data declarations in the public visibility sections of global classes. Local declarations, however, hide global declarations with the same name. The following methods can be used to unhide these declarations:

-   In methods, components of classes can be addressed using an [object component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_component_select_glosry.htm "Glossary Entry").
-   In statements in which a dynamic specification of a data type, a class, or an interface is possible, a global type can be addressed by specifying an [absolute type name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").

In addition to context-dependent visibility, the position of the declaration in the source text also plays a role. In a statement of an ABAP program only previous declarations are visible, regardless of the context. To ensure that the order in the program matches the context-dependent visibility, all global declarations of a program should be listed at the start of the source code, before the first [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), and all local declarations should be listed immediately after the introduction of a procedure. The definition of an interface and the declaration part of a class are global declarations in this view. Note that reference variables that refer to a class can only be declared after the class has been declared. The implementation part, on the other hand, is one of the processing blocks.

Hints

-   All data declared in the global declaration part of an ABAP program is global. Apart from the event block AT SELECTION-SCREEN, all data declared within event blocks and dialog modules is also global to the program. The data declared in the event blocks mentioned above is local to them. Data that is declared between closed processing blocks is also global in the program.
-   The [ABAP system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm) are located outside of the contexts listed above. They are hidden by global program data objects with the same names.
-   The same is true for the obsolete structure [screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_structure_obsolete.htm).

Example

Declaration of a program-global field g\_field, an instance attribute attr of a class, and a local field field of a method. Reference is made to the outer declarations in the inner declarations.

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