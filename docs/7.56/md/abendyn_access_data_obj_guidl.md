---
title: "Accessing Data Objects Dynamically"
description: |
  Background Field symbols and data references are used to access data objects whose name and attributes are not known until runtime. -   Field symbols A field symbol is a symbolic name for a data object declared with FIELD-SYMBOLS, to which memory areas can be assigned using the ASSIGN statement or,
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_access_data_obj_guidl.htm"
abapFile: "abendyn_access_data_obj_guidl.htm"
keywords: ["loop", "do", "if", "try", "method", "class", "data", "internal-table", "field-symbol", "abendyn", "access", "obj", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) → 

Accessing Data Objects Dynamically

Background

Field symbols and data references are used to access data objects whose name and attributes are not known until runtime.

-   Field symbols
    
    A field symbol is a symbolic name for a data object declared with FIELD-SYMBOLS, to which memory areas can be assigned using the ASSIGN statement or, if internal tables are processed, using the ASSIGNING addition. Field symbols are typed either generically or completely and can be used like a data object in all appropriate operand positions. For typing, the same rules apply as for [formal parameters of procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_formal_param_guidl.htm "Guideline"). When accessing field symbols, value semantics applies, which means that the assigned memory content is addressed directly. Field symbols are thus always handled like dereferenced pointers.
    
-   Data references
    
    A data reference is the content of a data reference variable that is declared using REF TO and points to any data objects or parts of data objects. Data references are needed to create anonymous data objects using CREATE DATA or [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm). They can also be generated for existing data objects, however, using the statement GET REFERENCE, the reference operator [REF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_ref.htm), or, if internal tables are processed, using the REFERENCE INTO addition. A data reference variable is either completely generic or completely typed. When accessing data reference variables, reference semantics applies, which means that the data reference itself is addressed. To access the referenced memory content, a data reference variable must be dereferenced explicitly using the dereferencing operator (->\*).
    

Field symbols and data references are closely related because only completely typed data reference variables can be dereferenced in any operand position. Completely generic data reference variables (REF TO data) can be dereferenced in the ASSIGN statement only.

Data reference variables can be [declared](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_variables_guidl.htm "Guideline") in the same context as all other data objects, especially also as attributes of classes. Field symbols, in contrast, can only be declared within procedures ([methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) or in the global declaration part. However, the latter is [no longer allowed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_variables_guidl.htm "Guideline").

Rule

Use field symbols and data references in appropriate ways

Use field symbols and data references for the purpose that best matches their semantics:

-   Field symbols for value access (value semantics)
-   Data references for working with the references (reference semantics)

Details

Both field symbols and data references can be understood as pointers to memory areas. The main difference is in the different access semantics.

-   Due to their value semantics, field symbols should always be used if the focus is on the access to referenced data. Field symbols provide specific functions for this purpose, which are not available for data references:
    -   Dynamic access to attributes of classes and objects
        
        ASSIGN (class\_name)=>(attr\_name) ...
        ASSIGN oref->(attr\_name) ...
        
    -   Dynamic access to structure components
        
        ASSIGN ... COMPONENT ...
        
    -   Explicit casting
        
        ASSIGN ... CASTING ...
        
    -   Dereferencing of generic data reference variables
        
        ASSIGN dref->\* ...
        
-   Due to their reference semantics, data references are to be used if the focus is on the explicit handling of references to data objects. Data references are vital for creating anonymous data objects or complex dynamic data structures, such as trees or chained lists in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") or in the shared objects memory. Furthermore, data references are the preferred element for implementing explicit sharing between any data objects, and for passing pointers to data objects to procedures.

Note

Actually, data reference variables can be better used in programs that are based on [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") because they have the same semantics as object reference variables and therefore represent a more [modern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodern_abap_guidl.htm "Guideline") programming concept. Field symbols, on the other hand, provide more functions than data references and can thus not always be replaced by them. Consequently, the usage of field symbols for dynamic accesses to data objects is still recommended, although the sole use of data references would be preferred for consistency and simplicity reasons.

Bad Example

The following source code shows a loop for an internal table in which the system is supposed to directly [access the current line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_output_guidl.htm "Guideline"). If a generic data reference variable is used for this purpose, a field symbol is also needed for its dereferencing.

METHOD some\_method.
  "IMPORTING i\_itab TYPE INDEX TABLE
  DATA dref TYPE REF TO data.
  FIELD-SYMBOLS <fs> TYPE data.
  ...
  LOOP AT i\_itab REFERENCE INTO dref.
    ASSIGN dref->\* TO <fs>.
    <fs> = ...
  ENDLOOP.
  ...
ENDMETHOD.

Good Example

The following source code simplifies the above example by using a field symbol, which is required to access table lines anyway, directly and without using a data reference. The direct use of the field symbol thus also complies with the [KISS principle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkiss_principle_guidl.htm "Guideline").

METHOD some\_method.
  "IMPORTING i\_itab TYPE INDEX TABLE
  FIELD-SYMBOLS <fs> TYPE data.
  ...
  LOOP AT i\_itab ASSIGNING <fs>.
    <fs> = ...
  ENDLOOP.
...
ENDMETHOD.