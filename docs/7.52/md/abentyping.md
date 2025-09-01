  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) → 

Typing

Typing means defining a generic or complete data type for a [formal parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") or for a [field symbol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry"). When an actual parameter is assigned to a formal parameter, or a data object to a field symbol, a [check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) is carried out to make sure the data type matches the typing.

Generically Typed

Unlike data objects, where the data type has a specific property and is always identified in full, formal parameters and field symbols that are generically typed receive their complete data type only when an actual parameter is passed in a procedure call or when a memory area is assigned using [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm).

When using generically typed formal parameters or field symbols, a difference is made between static and dynamic access.

-   In static access to a generically typed formal parameter, field symbol, or their components, the type attributes specified by the typing of the formal parameter are used. In static accesses where a complete data type is required, a [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used if possible.

-   In static access to a generically typed formal parameter, field symbol ,or their components, the type attributes of the actual parameter are used.

The attributes of the actual parameter, which are not [checked](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) in calls or assignments, can be different from those of the formal parameter. This can produce different behavior in static and dynamic accesses. Dynamic access to components of generically typed formal parameters produces a runtime error, if the components are not available in the actual parameter.

Fully Typed

During compilation and at runtime, formal parameters and field symbols that are completely typed are handled in the same way as data objects with completely known data types.

During the use of completely typed formal parameters, or field symbols, the attributes specified by the typing are used, regardless of whether they are accessed statically or dynamically.

Notes

-   The typing of formal parameters or field symbols defines some or all of the type attributes before the actual specification of the type. This permits the use of formal parameters and field symbols in operand positions that require certain type attributes.

-   If the typing of an existing field symbol or formal parameter is made weaker, note that there may then be fewer options for static accesses and that the associated standard type may change if they are used in [inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry").

-   The static type of data reference variables is always completely generic (data) or completely typed (see [DATA - reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_references.htm)).

Programming Guideline

[Be as specific as possible when typing formal parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_formal_param_guidl.htm "Guideline")

Executable Example

[Generic Typing and Full Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_abexa.htm)

Continue
[typing Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm)
[Checking Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm)
![Example](exa.gif "Example") [Generic and Complete Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_abexa.htm)