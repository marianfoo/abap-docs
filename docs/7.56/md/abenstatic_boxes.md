  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects_structure.htm) →  [Boxed Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_components.htm) → 

Static Boxes

Static boxes are [boxed components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_components.htm) whose components are known statically, and which are subject to [initial value sharing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry"). Declarations of static boxes generally require less memory for structures that occur multiple times but are rarely used.

The following can currently be declared as static boxes:

-   Substructures of structured data with the addition [BOXED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_boxed.htm) of the statement [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm)
-   Structured attributes of classes or interfaces with the addition [BOXED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_boxed.htm) of the statement [*\[*CLASS-*\]*DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm).

A static box can have one of two states:

-   Initial value sharing
    
    As long as none of the actions named in the following point have been executed, initial value sharing applies to a static box. The internal reference refers to a type-dependent initial value of the structure, which is stored exactly once for each [AS instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") in its [PXA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpxa_glosry.htm "Glossary Entry"). The memory requirement in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") is determined only by the internal reference and its [administration](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_consumption.htm).
    
-   Revoked initial value sharing
    
    The following actions revoke initial value sharing for a static box:
    
    -   Writes to the static box or one of its components
    -   Assigning the static box or one of its components to a [field symbol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") using [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm)
    -   Addressing the static box or one of its components using a [data reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_glosry.htm "Glossary Entry")
    -   Using a static box or one of its components as an [actual parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenactual_parameter_glosry.htm "Glossary Entry") for procedure calls
    
    The internal reference then refers to an instance of the structure in the current internal session. The memory requirement is the same as for a regular structure plus the administration costs for the internal reference.
    

In initial value sharing, the memory required for the internal session of a static box is not defined at the start of program execution. However, unlike in real [dynamic data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), the length of a static box is always known statically. Static boxes can be used in the same way as a regular component of the same type. When a structure that contains a static box is accessed, however, it should be ensured that it is a deep component.

Hints

-   Static boxes can be used to optimize the memory requirement of structures that are used more than once. If, for example, the line structure of an internal table contains substructures, the memory requirement of the substructure accumulates without the use of static boxes for each line, even if the substructure is initial. If static boxes are used, initial substructures do not require multiple memories as long as only reads are performed.
-   In addition to the optimized memory requirements, static boxes generally have a positive impact on runtime performance, since assignments between components for which initial value sharing is active only require the internal reference (and no additional data) to be copied.
-   The statements CLEAR and FREE do not affect a static box that has the initial value sharing state like a write statement and the state is retained. On the other hand, once the initial value sharing state is revoked, these statements do not currently free up any memory and provide the local instance of the static box with type-specific initial values instead.

Example

Declaration of a substructure scarr as a static box.

TYPES:
  BEGIN OF struct,
    comp  TYPE c LENGTH 10,
    scarr TYPE scarr BOXED,
  END OF struct.