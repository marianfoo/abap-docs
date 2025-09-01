# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Typing

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentyping.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm)
- [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)
- [abentyping_generic.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)
- [abentyping_complete.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)
- [abentyping_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm)
- [abentyping_check_general.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)
- [abentyping_return_values.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)
- [abentyping_literals.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)
- [abentyping_arith_expr.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)
- [abentyping_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_abexa.htm)

**Bundle Contains**: 10 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.957Z

---

### abentyping.htm

> **📖 Official SAP Documentation**: [abentyping.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abentyping.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm)

### abentyping_syntax.htm

> **📖 Official SAP Documentation**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20ABENTYPING_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition

[Short Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))
-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))
-   [FORM](javascript:call_link\('abapform.htm'\))
-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and complete typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing does not have to be specified, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place if no typing is specified explicitly.

Hints

-   For more information about typing parameters of function modules, see [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).
-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters of the same procedure that have already been declared.
-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in the Function Builder or Class Builder, only the types in the ABAP Dictionary may be referenced.

Continue
[typing Addition, generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing Addition, complete\_type](javascript:call_link\('abentyping_complete.htm'\))



**📖 Source**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)

### abentyping_generic.htm

> **📖 Official SAP Documentation**: [abentyping_generic.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_generic.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [typing Addition](javascript:call_link\('abentyping_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20generic_type%2C%20ABENTYPING_GENERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition, generic\_type

[Short Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... *{* TYPE [generic\_type](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) *}*
  *|* *{* LIKE <generic\_fs>*|*generic\_para *}* ...

Effect

To type a formal parameter or a field symbol generically, the following is possible:

-   specify any generic ABAP type [generic\_type](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) (except object) after TYPE.
-   specify a field symbol visible at this position (<generic\_fs>) or a formal parameter (generic\_para) with generic typing, after LIKE. The typing defined in the declaration of the field symbol/parameter is applied. In method parameters, all generic typing is possible. No complete generic typing is possible in parameters of subroutines and field symbols.

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](javascript:call_link\('abentyping_check.htm'\)) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used at any operand position that is not excluded by this typing. The following exceptions apply:

-   [Operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") that expect internal tables. Here, only formal parameters or field symbols typed as internal table types of the corresponding table category are allowed.
-   [Read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry") in which a statically recognizable [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is expected, such as the source field of an assignment to an [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") are allowed here. In [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is also only made at runtime in read positions.

The type properties specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the properties of the assigned actual parameter or memory area assigned apply.

If no actual parameter is specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") in accordance with the following rules:

-   any and data are converted to the type c with length 4.
-   c, clike, csequence, and simple are converted to the type c with length 1.
-   n is converted to the type n with length 1.
-   numeric and p are converted to the type p with length 8 without decimal places.
-   x and xsequence are converted to the type x with length 1.
-   ANY TABLE and INDEX TABLE are converted to STANDARD TABLE.
-   For ANY TABLE, INDEX TABLE, *\[*STANDARD*\]* TABLE SORTED TABLE, and HASHED TABLE, the line type is set to c with length 1.
-   For generic table types without specification of a primary table key, the standard key is added for standard tables and the entire table line, except for any table-like parts, is added as the key specification for sorted tables and hashed tables.
-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.
-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [WITH FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\)).

If a replacement parameter is specified, its type properties are applied.

Hint

In typing formal parameters with the generic type [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), it should be noted that no [numeric functions](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry"), no [description functions](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry"), and no [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) to the actual parameter. This restriction does not apply to the generic type any.

Example

In the following example, two generically typed field symbols are used in [READ TABLE](javascript:call_link\('abapread_table.htm'\)) statement. To avoid syntax errors, <index\_table> must be typed as an index table. However, the system does not check until runtime for <any\_object> whether the data object assigned to it matches the line type of the table.

FIELD-SYMBOLS: <any\_object>   TYPE any,
               <index\_table>  TYPE index table.
...
READ TABLE <index\_table> INDEX 1
                         INTO <any\_object>.



**📖 Source**: [abentyping_generic.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)

### abentyping_complete.htm

> **📖 Official SAP Documentation**: [abentyping_complete.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_complete.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [typing Addition](javascript:call_link\('abentyping_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20complete_type%2C%20ABENTYPING_COMPLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition, complete\_type

[Short Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO type*}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

To completely type a formal parameter or a field symbol:

-   Any non-generic type complete\_type can be specified after TYPE. complete\_type can be a non-generic data type from the ABAP Dictionary or ABAP CDS, a non-generic public data type from a global class, a non-generic program-local type already defined using [TYPES](javascript:call_link\('abaptypes.htm'\)), or a non-generic [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)).
-   A data object dobj can be specified after LIKE. dobj according to the rules [TYPES ... LIKE](javascript:call_link\('abaptypes_referring.htm'\)). The bound type of the data object is transferred. If field symbols and formal parameters are specified for dobj, they must be completely typed to create the corresponding complete typing.

If complete\_type or the data type of dobj is table-like, LINE OF can be used to refer to the appropriate line type.

REF TO types the formal parameter or field symbol as a reference variable, whereby the same rules apply as to the [definition of reference types in TYPES](javascript:call_link\('abaptypes_references.htm'\)). Typing with TYPE REF TO data or TYPE REF TO object is also considered a complete typing.

If an actual parameter or a memory area is assigned to completely typed formal parameters or field symbols, the technical properties of the specified data type must match the typing exactly (see [Typing Check](javascript:call_link\('abentyping_check.htm'\))), except when passing literals. Completely typed formal parameters or field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type properties specified by the typing are used during both static and dynamic access to a completely typed formal parameter or field symbol.

Hints

-   The data types that can be referred to with TYPE include specifically [CDS types](javascript:call_link\('abencds_type_glosry.htm'\) "Glossary Entry").
-   Complete data types, which can be referred to with TYPE, or indirectly using LIKE, also include [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)).
-   LIKE can be used to refer to data objects, including the public attributes of global classes.
-   In a LIKE reference to an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the header line is used. To refer to the table type, \[\] must be appended to the name as per usual. A formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.
-   The predefined generic data type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) cannot currently be specified after REF TO.
-   Outside classes, LIKE can also be used for an [obsolete type reference](javascript:call_link\('abenlike_obsolete.htm'\)).

Example

In the following example, the field symbol <spfli> is completely typed with the structured data type spfli from the ABAP Dictionary, and can therefore be used like a structure of this data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...



**📖 Source**: [abentyping_complete.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)

### abentyping_syntax.htm

> **📖 Official SAP Documentation**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20ABENTYPING_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition

[Short Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))
-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))
-   [FORM](javascript:call_link\('abapform.htm'\))
-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and complete typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing does not have to be specified, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place if no typing is specified explicitly.

Hints

-   For more information about typing parameters of function modules, see [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).
-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters of the same procedure that have already been declared.
-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in the Function Builder or Class Builder, only the types in the ABAP Dictionary may be referenced.

Continue
[typing Addition, generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing Addition, complete\_type](javascript:call_link\('abentyping_complete.htm'\))



**📖 Source**: [abentyping_syntax.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm)

### abentyping_check.htm

> **📖 Official SAP Documentation**: [abentyping_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20Typing%2C%20ABENTYPING_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checking Typing

When data objects are assigned to typed [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") are assigned to typed [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](javascript:call_link\('abentyping_check_general.htm'\))

Special rules apply to:

-   [Return values of functional methods](javascript:call_link\('abentyping_return_values.htm'\))
-   [Literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\))
-   [Functions and expressions as actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\))

Hint

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))
[Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))
[Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))
[Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))



**📖 Source**: [abentyping_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm)

### abentyping_check_general.htm

> **📖 Official SAP Documentation**: [abentyping_check_general.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_check_general.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20General%20Rules%20for%20Typing%2C%20ABENTYPING_CHECK_GENERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

General Rules for Typing

The general rules for checking the typing apply strictly to:

-   The assignment of all data objects to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry")
-   The binding of named data objects to [input](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), [input/output](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or formal parameters, the system checks whether the [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") of the assigned data object are a subset of the generic type. The type properties that are not defined by typing are inherited from the actual parameter.
-   In assignments to completely typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. In assignments to field symbols or formal parameters typed with [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.
-   The result of the typing check when actual parameters are passed to formal parameters is independent of the pass by type. In a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the check for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is always carried out, even though this can be stricter than necessary in individual cases.
-   If reference variables are passed, [upcasts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") are possible but [downcasts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") is passed to the parameters, an upcast is not possible in any case.
-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.
-   In assignments to generically and completely typed field symbols or formal parameters, only the [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") are checked. The following properties are not checked:
    
    -   Names of structure components (but the names of [mesh nodes](javascript:call_link\('abenmesh_node_glosry.htm'\) "Glossary Entry") and [mesh associations](javascript:call_link\('abenmesh_association_glosry.htm'\) "Glossary Entry") are checked).
    -   Semantic properties of data types defined in the ABAP Dictionary (conversion exits, documentation, and so on)
    -   [Initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") of internal tables
    
    If generally typed formal parameters or field symbols are accessed dynamically, these properties are inherited from the type of the actual parameter. In static access to generically typed formal parameters or field symbols, these properties are inherited from the typing of the formal parameter.
    
-   When assigning to field symbols or formal parameters that have a structure with the obsolete addition STRUCTURE and that are called in Standard ABAP, elementary data structures must be character-like and flat and for structures the [fragment views](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must match. The assigned data object must be at least as long as the structure.

Hints

-   The constructor operators [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) are well suited to convert or cast invalid actual parameters to the type of a formal parameter.
-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules, the typing is only checked at the time of the assignment, that is, at runtime. In the case of completely typed field symbols and formal parameters of methods, the check is performed by the [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry").
-   In addition in the case of formal parameters of externally called subroutines, the typing is only checked at the time of the assignment. In the case of formal parameters of internally called subroutines, the check is performed by the [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abentyping_check_general.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)

### abentyping_return_values.htm

> **📖 Official SAP Documentation**: [abentyping_return_values.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_return_values.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Return%20Values%20of%20Functional%20Methods%2C%20ABENTYPING_RETURN_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Return Values of Functional Methods

The return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") is always completely typed and is always passed by value. An actual parameter can be appended to the return value as follows:

-   Specification of the method in an [operand position](javascript:call_link\('abenoperands_expressions.htm'\))
    
    If a functional method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the complete typing of the return value (a type-compliant actual parameter is implicitly bound to it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value is not compatible with the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").
    
    If the return value of a functional method is bound as an actual parameter to a generically typed formal parameter of type p, the method inherits the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.
    
-   [Method call](javascript:call_link\('abapcall_method_static.htm'\)) with the addition [RECEIVING](javascript:call_link\('abapcall_method_parameters.htm'\))
    
    If an actual parameter is specified explicitly after RECEIVING, it does not have to comply with the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).
    

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, it cannot always be handled, but cause a runtime error, depending on the operand position.

Hints

-   If reference variables are returned using RECEIVING, an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is possible but a [downcast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") is not.
-   The special rule that a generic formal parameter of type p gets the length of 16 when a functional method is passed does not apply to the other generic types any, data, simple, or numeric.



**📖 Source**: [abentyping_return_values.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)

### abentyping_literals.htm

> **📖 Official SAP Documentation**: [abentyping_literals.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_literals.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Literals%20as%20Actual%20Parameters%2C%20ABENTYPING_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this.

If the formal parameter has a generic type, the remaining type properties are defined by the content of the specified literal (see table 1). When a literal is bound, the pass is always executed as [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements, its content is assigned to the formal parameter according to the relevant [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") is exceeded.

-   [Checking Character Literals](#abentyping-literals-1-------checking-numeric-literals---@ITOC@@ABENTYPING_LITERALS_2)

Checking Character Literals   

The following table shows the requirements that character literals must meet to be assigned to typed formal parameters. These rules apply to both text field literals and text string literals.

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), [commercial](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"), or [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"). If generic typing with decfloat is used, the formal parameter is given the data type decfloat34.

f

The literal must contain a number in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry").

i, int8, (b, s)

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The literal must not contain any [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). For generic formal parameters, the length is set to 16. The number of decimal places is set to the decimal places specified in the literal. If the [program property](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a completely typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the property Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

string

The literal can have any length.

t

The literal must be six characters long.

x

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F. If the formal parameter has a fixed length, the length of the literal must be less than or equal to twice this length. If the length is generic, the number of bytes specified in the literal determines the length of the formal parameter.

xstring

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F.

xsequence

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F. The formal parameter inherits the data type x in the length of bytes specified in the literal.

utclong

The literal can be a left-aligned [character-like representation](javascript:call_link\('abents_value.htm'\)) of a time stamp, like yyyy-mm-ddThh:mm:ss.fffffff, or it can contain only blanks.

All other types have the same requirements for character literals as for other actual parameters. Generic formal parameters inherit the type of the actual parameter. Apart from the formal parameters listed in the table above, character literals can only be passed to formal parameters whose typing includes the data types c or string.

Hints

-   Character literals that are passed to actual parameters can be linked using the [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") & and the rules described above apply. However, for a linking with the [concatenation operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && is used, the actual parameter is a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") of type string and the formal parameter must be typed accordingly.
-   The requirements in the table above do not completely exclude character literals from being passed to actual parameters that do not match their value range. An exception is raised in this case.

Checking Numeric Literals   

The following table shows the requirements for numeric literals that are to be passed to typed formal parameters.

Typing

Requirement

f

All numeric literals are allowed.

decfloat, decfloat16, decfloat34

All numeric literals are allowed. In generic typing with decfloat, the formal parameter receives the data type decfloat34.

i, int8, (b, s)

All numeric literals are allowed.

n

The value of the literal must not be negative. If the formal parameter has a fixed length, the number of digits must be less than or equal to this length. If the length is generic and the literal has the data type i, the length of the formal parameter is set to 10. If the literal has the data type p, the length is set to 31.

p

In a generic formal parameter, the length is set to 16 and the number of decimal places is set to 0. If the program property Fixed Point Arithmetic is deactivated, the formal parameter cannot have any decimal places, or the literal must have the value 0.

All other types have the same requirements for numeric literals as for other actual parameters. Generic formal parameters inherit the type of the actual parameters. Apart from the formal parameters listed in the table above, numeric literals can only be passed to formal parameters whose typing includes the data types i or p.

Hint

The requirements in the table above do not completely exclude numeric literals from being passed to actual parameters that do not match their value range. An exception is raised in this case.



**📖 Source**: [abentyping_literals.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)

### abentyping_arith_expr.htm

> **📖 Official SAP Documentation**: [abentyping_arith_expr.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_arith_expr.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Functions%20and%20Expressions%20as%20Actual%20Parameters%2C%20ABENTYPING_ARITH_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Functions and Expressions as Actual Parameters

[Functions and expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified as actual parameters in the following formal parameters:

-   Write Positions
    -   [Output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"), [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)).
-   Read Positions
    -   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)), when [objects are created](javascript:call_link\('abapcreate_object_parameters.htm'\)), or when exceptions are raised using [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional exception](javascript:call_link\('abenconditional_expressions.htm'\))
    -   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") for all variants of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)).

The parameters are evaluated from left to right (and from inside to outside) and the procedure is executed. A parameter cannot be affected by the method itself but by the evaluation of a preceding expression. This applies in particular to [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#abentyping-arith-expr-1-------calculation-type-and-calculation-length---@ITOC@@ABENTYPING_ARITH_EXPR_2)
-   [Passing Parameters](#abentyping-arith-expr-3-----------complete-typing---@ITOC@@ABENTYPING_ARITH_EXPR_4)
    -   [Generic Typing](#abentyping-arith-expr-5---hints------in-the-case-of--dynamic-method-calls--javascript-call-link---abapcall-method-dynamic-htm------the-same-rules-apply-as-to-static-method-calls--however--handling-at-runtime-is-time-consuming--therefore--helper-variables-should-be-used-in-a-dynamic-call-instead-of-functions-or-expressions-if-possible--function-module-calls-are-always-dynamic-and--compared-to-method-calls--fewer-rules-apply------a--system-field--javascript-call-link---abensystem-field-glosry-htm-----glossary-entry---should--never-be-used-an-actual-parameter--javascript-call-link---abenuse-actual-parameters-guidl-htm-----guideline-----checking-typing---------a--numeric-function--javascript-call-link---abenmathematical-funktion-glosry-htm-----glossary-entry----a--description-function--javascript-call-link---abendescription-function-glosry-htm-----glossary-entry----or-an--arithmetic-expression--javascript-call-link---abenarithmetic-expression-glosry-htm-----glossary-entry---can---------be-bound-to-any-numeric-or-any-input-parameter-typed-using-the-type-any-in-a-method-call----------be-bound-to-any-appropriately-typed-input-parameter-in-a-function-module-call------a--bit-function--javascript-call-link---abenbit-function-glosry-htm-----glossary-entry---or-a--bit-expression--javascript-call-link---abenbit-expression-glosry-htm-----glossary-entry---can---------be-bound-to-any-byte-like-or-general-typed-input-parameter-in-a-method-call----------be-passed-to-input-parameters-of-type-x-or-a-generic-type-including-x-in-function-module-calls------a--string-function--javascript-call-link---abenstring-function-glosry-htm-----glossary-entry---or-a--string-expression--javascript-call-link---abenstring-expression-glosry-htm-----glossary-entry---can---------be-bound-to-any-character-like-or-general-typed-input-parameter-in-a-method-call----------be-passed-to-input-parameters-of-type-string-or-a-generic-type-including-string-in-function-module-calls------a--constructor-expression--javascript-call-link---abenconstructor-expression-glosry-htm-----glossary-entry---can---------be-passed-to-every-input-parameter-that-matches-the-specified-type--type--javascript-call-link---abenconstructor-expressions-htm-----of-the-constructor-expression-in-method-calls--in-this-case--with-the-exception-of-conversion-operator--conv--javascript-call-link---abenconv-constructor-inference-htm-----in-the-constructor-expression--the---character-can-only-be-specified-for-type-if-the-input-parameter-is-typed-completely-and-this-type-is-used----------be-passed-to-every-input-parameter-that-matches-the-specified-type--type--javascript-call-link---abenconstructor-expressions-htm-----of-the-constructor-expression-in-function-module-calls--the-character---cannot-be-specified-for-type-in-the-constructor-expression-since-no-static-derivations-of-types-are-possible-in-function-module-calls------a--table-expression--javascript-call-link---abentable-expression-glosry-htm-----glossary-entry---can---------be-passed-in-method-or-function-calls-to-every-input-parameter-that-matches-the-type-of-the-result---hints------in-function-module-calls--the-typing-is-not-checked-until-runtime------no-arithmetic-expressions--description-functions--or-numeric-functions-can-be-passed-to-formal-parameters-with-the-generic-type--data--javascript-call-link---abenbuilt-in-types-generic-htm------this-restriction-can-be-bypassed-using-the--conversion-operator--javascript-call-link---abenconversion-operator-glosry-htm-----glossary-entry----conv--javascript-call-link---abenconstructor-expression-conv-htm-----on-the-actual-parameter--this-restriction-does-not-apply-to-the-generic-type-any---calculation-type-and-calculation-length-----if-calculation-expressions-are-specified-as-actual-parameters--the-calculation-type-and-calculation-length-are-determined-as-follows-------the--calculation-type--javascript-call-link---abencalculation-type-glosry-htm-----glossary-entry---of-an-arithmetic-expression-is-determined---------in-method-calls-from-the-operands-of-the-expression-and-the-typing-of-the-input-parameter--if-this-parameter-is-completely-typed--if-the-input-parameter-is-typed-generically--only-the-operands-of-the-expression-are-evaluated----------in-function-module-calls-from-the-operands-of-the-expression--the-typing-of-the-input-parameter-is-ignored------the--calculation-length--javascript-call-link---abencalculation-length-glosry-htm-----glossary-entry---of-a-bit-expression-is-the-length-of-the-largest-operand-of-the-expression---passing-parameters-----when-binding-a-function--a-calculation-expression--a-constructor-expression--or-a-table-expression--the-parameters-are-always--passed-by-value--javascript-call-link---abenpass-by-value-glosry-htm-----glossary-entry----even-if-the-formal-parameter-is-defined-as-to-be--passed-by-reference--javascript-call-link---abenpass-by-reference-glosry-htm-----glossary-entry-----complete-typing-----the-return-value-of-a-function-or-the-result-of-a-calculation-expression--a-constructor-expression--or-a-table-expression-is--converted--javascript-call-link---abenconversion-rules-htm------if-necessary--to-the-type-of-the-input-parameter-and-passed---generic-typing---------in-a-function--a-constructor-expression--or-a-table-expression--the-formal-parameter-inherits-the-type-of-the-return-value-or-result--only-bit-functions-are-handled-like-bit-expressions--see-below-------with-an-arithmetic-expression--the-formal-parameter-inherits-the-calculation-type-determined-by-the-operand--if-the-calculation-type-is-p--the-length-is-always-16--the-number-of-decimal-places-is-determined-by-the-accuracy-required-for-the-calculation-and-therefore-depends-on-the-values-of-the-operands------in-a-bit-expression-or-a-bit-function--the-formal-parameter-is-set-to-type-x-in-the-calculation-length-determined-by-the-operands------in-a-string-expression--the-formal-parameter-is-set-to-the-type-string-for-completely-generic-typing-or-the-generic-types-csquence-clike--in-the-case-of-the-types-c-and-n-with-generic-length--the-length-is-set-to-the-length-of-the-result-of-the-string-expression---example--the-functional-method-m1-is-called-twice-for-each-assignment-to-result--the-first-call-is-executed-in-an-arithmetic-expression--which-is-passed-as-an-actual-parameter-in-the-second-call--in-the-first-call-of-each-assignment--the-formal-parameter-p1-has-type-p-of-length-16--the-number-of-decimal-places-is-0-in-the-first-assignment--14-in-the-second--and-1-in-the-third-assignment--in-the-second-call--the-formal-parameter-p1-has-the-type-decfloat34-in-each-assignment--because-the-calculation-type-of-the-arithmetic-expression-is-determined-by-the-return-value-of-m1---class-c1-definition----public-section------class-methods-m1-importing-p1---------type-numeric----------------------returning-value-ret--type-decfloat34--endclass--class-c1-implementation----method-m1------ret---p1----endmethod--endclass--class-exa-definition----public-section------class-methods-main--endclass--class-exa-implementation----method-main------data-num1---type-p-decimals-2-value--2-00-------data-num2---type-p-decimals-2-value--1-00-------data-result-type-decfloat34------result---c1--m1--sqrt--4------c1--m1--num1---2-----------result---c1--m1--sqrt--4------c1--m1--num1---3-----------result---c1--m1--sqrt--4------c1--m1--num2---2---------endmethod--endclass--------abentyping-check-htm-------------as-abap-release-758---copyright-2024-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------declarations--javascript-call-link---abendeclarations-htm---------typing--javascript-call-link---abentyping-htm---------------mail-gif-object-mail-gif--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20Typing%2C%20ABENTYPING_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checking Typing

When data objects are assigned to typed [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") are assigned to typed [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](javascript:call_link\('abentyping_check_general.htm'\))

Special rules apply to:

-   [Return values of functional methods](javascript:call_link\('abentyping_return_values.htm'\))
-   [Literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\))
-   [Functions and expressions as actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\))

Hint

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))
[Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))
[Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))
[Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))



**📖 Source**: [abentyping_arith_expr.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)

### abentyping_abexa.htm

> **📖 Official SAP Documentation**: [abentyping_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abentyping_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abentyping_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Generic%20Typing%20and%20Complete%20Typing%2C%20ABENTYPING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Generic Typing and Complete Typing

This example demonstrates how generically and completely typed formal parameters are accessed.

Source Code   

\* Public class definition
CLASS cl\_demo\_typing DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    TYPES: BEGIN OF struc1,
             cola TYPE i,
             colb TYPE i,
           END OF struc1,
           BEGIN OF struc2,
             colb TYPE i,
             cola TYPE i,
           END OF struc2,
           itab1g TYPE STANDARD TABLE OF struc1,
           itab2g TYPE STANDARD TABLE OF struc2,
           itab2c TYPE STANDARD TABLE OF struc2
                       WITH NON-UNIQUE DEFAULT KEY.
    METHODS sort\_itab IMPORTING VALUE(pg) TYPE itab2g
                                VALUE(pc) TYPE itab2c.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_typing IMPLEMENTATION.
  METHOD main.
    DATA: tab TYPE itab1g,
          wa  LIKE LINE OF tab.
    tab = VALUE #(
      FOR j = 1 UNTIL j > 5
        ( cola = j colb = 6 - j ) ).
    sort\_itab( pg = tab
               pc = tab ).
  ENDMETHOD.
  METHOD sort\_itab.
    SORT pg BY cola.
    out->write\_data( pg ).
    SORT pg BY ('COLA').
    out->write\_data( pg ).
    SORT pc BY cola.
    out->write\_data( pc ).
    SORT pc BY ('COLA').
    out->write\_data( pc ).
  ENDMETHOD.
ENDCLASS.

Description   

Three table types are declared in the class demo\_typing:

-   itab1g has the line type struc1 with the components cola and colb. It is generic since the primary table key is not specified.
-   itab2g has the line type struc2 with the components colb and cola. It is generic since the primary table key is not specified.
-   itab2c has the line type struc2 with the components cola and colb. It is complete since the primary table key is specified.

The method sort\_itab has two formal parameters:

-   pg is typed generically with itab2g.
-   pc is typed completely with itab2c.

In the method start, an internal table tab is declared with reference to itab1g. The key specification is added implicitly. This table is filled and passed to the formal parameters of sort\_itab.

In sort\_itab, both formal parameters are sorted twice. In the first sort, the column cola is specified statically and dynamically in the second sort as a sort criterion. The behavior is as follows:

-   The first SORT statement accesses the generically typed formal parameter pg statically. In this case, the typing with itab2g takes place, where cola is the second column.
-   The second SORT statement accesses the generically typed formal parameter pg dynamically. In this case, the type of the actual parameter itab1g takes place, where cola is the first column.
-   The third and fourth SORT statements access the completely typed formal parameter pc dynamically or statically. In these cases, the typing with itab2c takes place, where cola is the second column.

If components of generically typed formal parameters are accessed dynamically, a runtime error can also occur if the components do not exist in the actual parameter.
