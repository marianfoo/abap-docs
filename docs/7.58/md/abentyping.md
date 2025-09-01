  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Typing%2C%20ABENTYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Typing

Typing means specifying a generic or complete data type for a [formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or for a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"). When an actual parameter is assigned to a formal parameter, or a data object to a field symbol, the systems performs a a [check](javascript:call_link\('abentyping_check.htm'\)) whether the data type matches the typing.

Generically Typed   

Unlike data objects, where the data type has a specific property and is always completely known, formal parameters and field symbols that are generically typed receive their complete data type only when an actual parameter is passed in a procedure call or when a memory area is assigned using [ASSIGN](javascript:call_link\('abapassign.htm'\)).

When using generically typed formal parameters or field symbols, a distinction must be made between static and dynamic access.

-   In static access to a generically typed formal parameter, field symbol, or their components, the type properties specified by the typing of the formal parameter are used. In static accesses where a complete data type is required, a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") is used if possible.
-   In dynamic access to a generically typed formal parameter, field symbol, or their components, the type properties of the actual parameter are used.

The properties of the actual parameter, which are not [checked](javascript:call_link\('abentyping_check.htm'\)) in calls or assignments, can be different from those of the formal parameter. This can produce different behavior in static and dynamic accesses. A dynamic access to components of generically typed formal parameters will result in a runtime error if the components do not exist in the actual parameter.

Completely Typed   

During compilation and at runtime, formal parameters and field symbols that are completely typed are handled like data objects with completely known data types.

When completely typed formal parameters, or field symbols are used, the properties specified by the typing are used, regardless of whether they are accessed statically or dynamically.

Hints

-   The typing of formal parameters or field symbols defines some or all of the type properties before the actual specification of the type. This allows the use of formal parameters and field symbols in operand positions that require certain type properties.
-   If the typing of an existing field symbol or formal parameter is made weaker, note that there may then be fewer options for static accesses and that the associated standard type may change if they are used in [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry").
-   The static type of data reference variables is always completely generic (data) or completely typed (see [DATA - reference variables](javascript:call_link\('abapdata_references.htm'\))).
-   An obsolete [table parameter](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") can be typed completely or generically with respect to the table key and the same rules apply as to other formal parameters.

Programming Guideline

[Be as specific as possible when typing formal parameters](javascript:call_link\('abentype_formal_param_guidl.htm'\) "Guideline")

Executable Example

[Generic Typing and Complete Typing](javascript:call_link\('abentyping_abexa.htm'\))

Continue
[typing Addition](javascript:call_link\('abentyping_syntax.htm'\))
[Checking Typing](javascript:call_link\('abentyping_check.htm'\))
![Example](exa.gif "Example") [Generic Typing and Complete Typing](javascript:call_link\('abentyping_abexa.htm'\))