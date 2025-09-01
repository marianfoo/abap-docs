  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

General Rules for Typing

The general rules for checking apply strictly to:

-   The assignment of all data objects to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry")

-   The binding of named data objects to [input](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), [input/output](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or formal parameters, the system checks whether the [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") of the assigned data object are a subset of the generic type. The type attributes that are not defined by typing are inherited from the actual parameter.

-   In assignments to completely typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. In assignments to field symbols or formal parameters typed with [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.

-   The result of the typing check when actual parameters are passed to formal parameters is independent of the pass by type. In a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the check for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is always carried out, even though this can be stricter than necessary in individual cases.

-   If reference variables are passed, [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") are possible but [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") is passed to the parameters, an up cast is not possible in any case.

-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.

-   In assignments to generically and completely typed field symbols or formal parameters, only the [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") are checked. The following are not checked:

-   Names of structure components (but the names of [mesh nodes](javascript:call_link\('abenmesh_node_glosry.htm'\) "Glossary Entry") and [mesh associations](javascript:call_link\('abenmesh_association_glosry.htm'\) "Glossary Entry") are checked).

-   Semantic properties of data types defined in the ABAP Dictionary (conversion routines, documentation, and so on)

-   Initial memory requirement of internal tables

If generally typed formal parameters or field symbols are accessed dynamically, these properties are inherited from the type of the actual parameter. In static access to generically typed formal parameters or field symbols, these properties are inherited from the typing of the formal parameter.

-   When assigning to field symbols or formal parameters that have a structure with the obsolete addition STRUCTURE and that are called in Standard ABAP, elementary data structures must be character-like and flat and for structures the [fragment views](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must match. The assigned data object must be at least as long as the structure.

Hints

-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules and externally called subroutines, the typing is only checked at the time of the assignment, that is, at runtime. In the case of completely typed field symbols and formal parameters of methods and internally called subroutines, the check is performed by the [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry").

-   The constructor operators [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) are well suited to convert or cast invalid actual parameters to the type of a formal parameter.