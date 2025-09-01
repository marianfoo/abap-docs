  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20General%20Rules%20for%20Typing%2C%20ABENTYPING_CHECK_GENERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

General Rules for Typing

The general rules for checking the typing apply strictly to:

-   The assignment of all data objects to [field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry")
-   The binding of named data objects to [input](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [input/output](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or formal parameters, the system checks whether the [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the assigned data object are a subset of the generic type. The type properties that are not defined by typing are inherited from the actual parameter.
-   In assignments to completely typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. In assignments to field symbols or formal parameters typed with [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.
-   The result of the typing check when actual parameters are passed to formal parameters is independent of the pass by type. In a [pass by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always carried out, even though this can be stricter than necessary in individual cases.
-   If reference variables are passed, [upcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") are possible but [downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry") is passed to the parameters, an upcast is not possible in any case.
-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.
-   In assignments to generically and completely typed field symbols or formal parameters, only the [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") are checked. The following properties are not checked:
    
    -   Names of structure components (but the names of [mesh nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_node_glosry.htm "Glossary Entry") and [mesh associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_association_glosry.htm "Glossary Entry") are checked).
    -   Semantic properties of data types defined in the ABAP Dictionary (conversion exits, documentation, and so on)
    -   [Initial memory requirement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") of internal tables
    
    If generally typed formal parameters or field symbols are accessed dynamically, these properties are inherited from the type of the actual parameter. In static access to generically typed formal parameters or field symbols, these properties are inherited from the typing of the formal parameter.
    
-   When assigning to field symbols or formal parameters that have a structure with the obsolete addition STRUCTURE and that are called in Standard ABAP, elementary data structures must be character-like and flat and for structures the [fragment views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match. The assigned data object must be at least as long as the structure.

Hints

-   The constructor operators [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) and [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_cast.htm) are well suited to convert or cast invalid actual parameters to the type of a formal parameter.
-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules, the typing is only checked at the time of the assignment, that is, at runtime. In the case of completely typed field symbols and formal parameters of methods, the check is performed by the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry").
-   In addition in the case of formal parameters of externally called subroutines, the typing is only checked at the time of the assignment. In the case of formal parameters of internally called subroutines, the check is performed by the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry").