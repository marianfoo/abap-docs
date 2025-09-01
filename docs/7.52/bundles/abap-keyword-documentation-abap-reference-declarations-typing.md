# ABAP - Keyword Documentation / ABAP - Reference / Declarations / Typing

Included pages: 12


### abentyping.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

Typing

Typing means defining a generic or complete data type for a [formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or for a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"). When an actual parameter is assigned to a formal parameter, or a data object to a field symbol, a [check](javascript:call_link\('abentyping_check.htm'\)) is carried out to make sure the data type matches the typing.

Generically Typed

Unlike data objects, where the data type has a specific property and is always identified in full, formal parameters and field symbols that are generically typed receive their complete data type only when an actual parameter is passed in a procedure call or when a memory area is assigned using [ASSIGN](javascript:call_link\('abapassign.htm'\)).

When using generically typed formal parameters or field symbols, a difference is made between static and dynamic access.

-   In static access to a generically typed formal parameter, field symbol, or their components, the type attributes specified by the typing of the formal parameter are used. In static accesses where a complete data type is required, a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") is used if possible.

-   In static access to a generically typed formal parameter, field symbol ,or their components, the type attributes of the actual parameter are used.

The attributes of the actual parameter, which are not [checked](javascript:call_link\('abentyping_check.htm'\)) in calls or assignments, can be different from those of the formal parameter. This can produce different behavior in static and dynamic accesses. Dynamic access to components of generically typed formal parameters produces a runtime error, if the components are not available in the actual parameter.

Fully Typed

During compilation and at runtime, formal parameters and field symbols that are completely typed are handled in the same way as data objects with completely known data types.

During the use of completely typed formal parameters, or field symbols, the attributes specified by the typing are used, regardless of whether they are accessed statically or dynamically.

Notes

-   The typing of formal parameters or field symbols defines some or all of the type attributes before the actual specification of the type. This permits the use of formal parameters and field symbols in operand positions that require certain type attributes.

-   If the typing of an existing field symbol or formal parameter is made weaker, note that there may then be fewer options for static accesses and that the associated standard type may change if they are used in [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry").

-   The static type of data reference variables is always completely generic (data) or completely typed (see [DATA - reference variables](javascript:call_link\('abapdata_references.htm'\))).

Programming Guideline

[Be as specific as possible when typing formal parameters](javascript:call_link\('abentype_formal_param_guidl.htm'\) "Guideline")

Executable Example

[Generic Typing and Full Typing](javascript:call_link\('abentyping_abexa.htm'\))

Continue
[typing Addition](javascript:call_link\('abentyping_syntax.htm'\))
[Checking Typing](javascript:call_link\('abentyping_check.htm'\))
![Example](exa.gif "Example") [Generic and Complete Typing](javascript:call_link\('abentyping_abexa.htm'\))


### abentyping_syntax.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

typing Addition

[Quick Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))

-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))

-   [FORM](javascript:call_link\('abapform.htm'\))

-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and full typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing is not necessary, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place (if no typing is specified explicitly).

Notes

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). Only the types in ABAP Dictionary may be used for typings of public interface parameters visible across the system in Function Builder or Class Builder,

-   More information about typing parameters of function modules can be found under [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).

Continue
[typing Addition - generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing - Addition - complete\_type](javascript:call_link\('abentyping_complete.htm'\))


### abentyping_generic.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [typing Addition](javascript:call_link\('abentyping_syntax.htm'\)) → 

typing Addition - generic\_type

[Quick Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... *{* TYPE [generic\_type](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) *}*
  *|* *{* LIKE <generic\_fs>*|*generic\_para *}* ...

Effect

To generically type a formal parameter or a field symbol,

-   specify any generic ABAP type [generic\_type](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) (except object) after TYPE.

-   specify a field symbol visible at this position (<generic\_fs>) or a formal parameter (generic\_para) with generic typing, after LIKE. The typing defined is applied when the field symbol/parameter is declared. In method parameters, all generic typings are possible. No complete generic typings are possible in parameters of subroutines and field symbols.

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](javascript:call_link\('abentyping_check.htm'\)) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used as operands anywhere that is not excluded by this typing. The following exceptions apply:

-   [Operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") that expect internal tables. Here, only formal parameters or field symbols (as internal tables) with the appropriate table category are allowed.

-   [Reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") (known statically) is expected, such as the source field of an assignment to an [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are allowed here. In [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in reading positions too.

The type attributes specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the attributes of the actual parameter or memory area assigned apply.

If an actual parameter is not specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") in accordance with the following rules:

-   any and data are converted to the type c with length 4.

-   c, clike, csequence, and simple are converted to the type c with length 1.

-   n is converted to the type n with length 1.

-   numeric and p are converted to the type p with length 8 without decimal places.

-   x and xsequence are converted to the type x with length 1.

-   ANY TABLE and INDEX TABLE are converted to STANDARD TABLE.

-   For ANY TABLE, INDEX TABLE, *\[*STANDARD*\]* TABLE SORTED TABLE, and HASHED TABLE, the row type is set to c with length 1.

-   For generic table types without specification of a primary table key, the standard key is completed for standard tables and the entire table row (without any table-like parts) is completed as the key specification for sorted tables and hashed tables.

-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.

-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [WITH FURTHER SECONDARY KEYS](javascript:call_link\('abaptypes_keydef.htm'\)).

If a replacement parameter is specified, the type attributes of this parameter are applied.

Note

When formal parameters are typed, the addition LIKE can be used to reference formal parameters (in the same procedure) that have already been declared.

Example

In the following example, two generically typed field symbols are used in [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) statement. To avoid syntax errors, <any\_table> must be defined as an internal table. However, the system does not check the type of <any\_object> until runtime, to ensure that the type of the data object assigned to it is compatible with the row type of the table.

FIELD-SYMBOLS: <any\_object> TYPE ANY,
               <any\_table>  TYPE ANY TABLE.
...
LOOP AT <any\_table> INTO <any\_object>.
  ...
ENDLOOP.


### abentyping_complete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [typing Addition](javascript:call_link\('abentyping_syntax.htm'\)) → 

typing - Addition - complete\_type

[Quick Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO type*}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

To completely type a formal parameter or a field symbol, you can

-   specify any non-generic type (complete\_type) after TYPE. complete\_type can be a non-generic data type from ABAP Dictionary, a non-generic public data type from a global class, a non-generic program-local type already defined using [TYPES<](javascript:call_link\('abaptypes.htm'\)), or a non-generic [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)).

-   By specifying a data object dobj after LIKE. dobj is specified based on the rules [TYPES ... LIKE](javascript:call_link\('abaptypes_referring.htm'\)). The bound type of the data object is applied. If field symbols and formal parameters are specified for dobj, they must be fully typed, to make sure that their typing is full.

If complete\_type or the data type of dobj is table-like, LINE OF can be used to reference the appropriate row type.

REF TO types the formal parameter or field symbol as a reference variable. In this case, the same rules apply as for the [definition of reference types in TYPES](javascript:call_link\('abaptypes_references.htm'\)). Typings with TYPE REF TO data or TYPE REF TO object are also considered as full typings.

If an actual parameter or a memory area is assigned to fully typed formal parameters or field symbols, the technical attributes of the specified data type must match the typing exactly (see [Typing Check](javascript:call_link\('abentyping_check.htm'\))), except when passing literals. Completely typed formal parameters and field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type attributes specified by the typing are used during both static and dynamic access to a fully typed formal parameter or field symbol.

Notes

-   The data types in ABAP Dictionary that can be referenced using TYPE also include the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ([CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")).

-   Complete data types, which can be referenced with TYPE, or indirectly using LIKE, also include [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)).

-   LIKE can be used to reference the public attributes of global classes.

-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters (in the same procedure) that have already been declared.

-   In a LIKE reference to an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the header line is used. To reference the table type, \[\] must be appended to the name in the usual way. A formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.

-   Outside classes, LIKE can also be used for an [obsolete type reference](javascript:call_link\('abenlike_obsolete.htm'\)).

-   The predefined generic data type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) cannot currently be specified after REF TO.

Example

In the following example, the field symbol <spfli> is fully typed with the structured data type spfli from ABAP Dictionary, and can therefore be used like a structure of that data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...


### abentyping_syntax.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

typing Addition

[Quick Reference](javascript:call_link\('abentyping_shortref.htm'\))

Syntax

... [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) *|* [complete\_type](javascript:call_link\('abentyping_complete.htm'\))  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](javascript:call_link\('abapmethods.htm'\))

-   [*\[*CLASS-*\]*EVENTS](javascript:call_link\('abapevents.htm'\))

-   [FORM](javascript:call_link\('abapform.htm'\))

-   [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))

The addition allows generic typing with [generic\_type](javascript:call_link\('abentyping_generic.htm'\)) and full typing with [complete\_type](javascript:call_link\('abentyping_complete.htm'\)). In positions where the addition typing is not necessary, implicit typing with the generic type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) takes place (if no typing is specified explicitly).

Notes

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") or [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). Only the types in ABAP Dictionary may be used for typings of public interface parameters visible across the system in Function Builder or Class Builder,

-   More information about typing parameters of function modules can be found under [Function Module Interface](javascript:call_link\('abenfunction_parameters.htm'\)).

Continue
[typing Addition - generic\_type](javascript:call_link\('abentyping_generic.htm'\))
[typing - Addition - complete\_type](javascript:call_link\('abentyping_complete.htm'\))


### abentyping_check.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

Checking Typing

When data objects are assigned to typed [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and when [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") are assigned to typed [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))

Special rules apply to:

-   [Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))

-   [Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))

-   [Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))

Note

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these types of helper variables can often be skipped by using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))
[Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))
[Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))
[Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))


### abentyping_check_general.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

General Rules for Typing

The general rules for checking apply strictly to the following:

-   The assignment of all data objects to [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry")

-   The linking of the said data objects to [input](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), [input/output](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or field parameters, the system checks whether the [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") of the assigned data object are a subset of the generic type. The type attributes that are not defined by typing are applied to the actual parameter.

-   If the assignment is made to fully typed field symbols or formal parameters, the technical attributes of the data type of the assigned data object must correspond exactly to the typing. If the assignment is made to field symbols or formal parameters typed with [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.

-   The result of the typing check when actual parameters are passed to formal parameters is independent of the passing type used. In a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the check for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is always carried out, even though this is stricter than necessary in individual cases.

-   If reference variables are passed, [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") are possible but [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") is passed to the parameters, an up cast is not possible.

-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.

-   If the assignment is made to generically and fully typed field symbols or formal parameters, only the [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") are checked. The following are not checked:

-   Names of structure components (names of nodes and associations of [meshes](javascript:call_link\('abenmesh_glosry.htm'\) "Glossary Entry") are possible here).

-   Semantic attributes of data types defined in ABAP Dictionary (conversion routines, documentation, and so on)

-   Initial memory requirement of internal tables

If generally typed formal parameters or field symbols are accessed dynamically, these attributes are applied to the type of the actual parameter. If generically typed formal parameters or field symbols are accessed statically, these attributes are applied to the typing of the formal parameter.

-   When assigning to field symbols or formal parameters for which a structure is defined with the obsolete STRUCTURE addition are called in Unicode programs, elementary data structures must be character type and flat and for structures the [fragment views](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must match.

Notes

-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules and externally called subroutines, the typing is checked first at the time of the assignment - that is, at runtime. In the case of fully typed field symbols and formal parameters of methods and internally called subroutines, the check is performed as part of the [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry").

-   The constructor operators [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) are well suited to converting or casting invalid actual parameters to the type of a formal parameter.


### abentyping_return_values.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Return Values of Functional Methods

The return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") is always fully typed and is always passed as a value. An actual parameter can be appended to the return value as follows:

-   By specifying the method in an [operand position](javascript:call_link\('abenoperands_expressions.htm'\))

If a function method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the full typing of the return value (a type-friendly actual parameter is implicitly associated with it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value does not match the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

If the return value of a functional method as an actual parameter is bound to a generically typed formal parameter of type p, this uses the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.

-   In a [method call](javascript:call_link\('abapcall_method_static.htm'\)) with the addition [RECEIVING](javascript:call_link\('abapcall_method_parameters.htm'\))

If an actual parameter is specified explicitly after RECEIVING, this parameter does not have to comply with the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, the exception cannot always be handled and a runtime error can occur instead (depending on the operand positions).

Notes

-   If reference variables are returned using RECEIVING, an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is possible but a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") is not.

-   The special rule that a generic formal parameter of type p gets a length of 16 when a functional method is passed does not apply to the other generic types any, data, simple, or numeric.


### abentyping_literals.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow it.

If the formal parameter has a generic type, the non-specified type attributes are defined by the contents of the specified literal (see table 1). When a literal is bound, the pass is always executed as a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements of the parameter, its contents are assigned to the formal parameter according to the relevant [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the target is exceeded.

Checking Character Literals

Table 1 shows the requirements that a character literal must meet to be assigned to a formal parameter. These rules apply to both text field literals and text string literals.

Table 1

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), [commercial](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"), or [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"). If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

f

The literal must contain a number in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") .

i, int8, (b, s)

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The literal must not contain any [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). If a generic formal parameter is used, the length is set to 16. The number of decimal spaces is set to the number of spaces specified in the literal. If the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a completely typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the attribute Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

string

The literal can have any length.

t

The literal must be six characters long.

x

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F". If the formal parameter has a fixed length, the length of the literal may not be more than twice this length. If the length is generic, the number of bytes specified in the literal determines the length of the formal parameter.

xstring

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F".

xsequence

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F". The formal parameter inherits the data type x. Its length is the number of bytes in the literal.

All other types have the same requirements of character literals as apply to other actual parameters. Generic formal parameters inherit the type of the actual parameter. With the exception of formal parameters listed in table 1, character literals can only be passed to formal parameters with types c or string.

Note

Character literals that are passed to actual parameters can be joined using the [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") &. The rules described above apply here. However, if a join with the [chaining operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && is used, the actual parameter is a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") of type string and the formal parameter must be typed accordingly.

Checking Numeric Literals

Table 2 shows the requirements for numeric literals that are to be passed to typed formal parameters.

Table 2

Typing

Requirement

f

All numeric literals are allowed.

decfloat, decfloat16, decfloat34

All numeric literals are allowed. If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

i, int8, (b, s)

All numeric literals are allowed.

n

The value of the literal must not be negative. If the formal parameter has a fixed length, the number of digits may not exceed this length. If the formal parameter is generic, its length is set to 10, if the literal has the data type i; its length is set to 31 if the literal has the data type p.

p

If a generic formal parameter is used, the length is set to 16 and the number of decimal spaces is set to 0. If the program attribute Fixed Point Arithmetic is deactivated, the formal parameter cannot have any decimal places or the literal must have the value 0.

All other types make the same requirements on numeric literals as on other actual parameters. Generic formal parameters inherit the type of the actual parameters. With the exception of formal parameters of the types listed in table 2, numeric literals can only be passed to formal parameters with data types i or p.


### abentyping_arith_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Functions and Expressions as Actual Parameters

[Functions and expressions](javascript:call_link\('abenoperands_expressions.htm'\)) can be specified as actual parameters in the following formal parameters:

-   Writing positions

-   [Output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"), [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), and [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)).

-   Reading positions

-   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") in [method calls](javascript:call_link\('abapcall_method_parameters.htm'\)), when [objects are created](javascript:call_link\('abapcreate_object_parameters.htm'\)), or when exceptions are raised using [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [condition exception](javascript:call_link\('abenconditional_expressions.htm'\))

-   [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in all variants of the statement [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)).

The parameters are read from left to right (and from inside to outside) and the procedure executed. A parameter cannot be modified by the method itself or by the evaluation of a preceding expression. This applies in particular to [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#abentyping-arith-expr-1--------calculation-type-and-calculation-length---@ITOC@@ABENTYPING_ARITH_EXPR_2)

-   [Passing Parameters](#abentyping-arith-expr-3--------fully-typed---@ITOC@@ABENTYPING_ARITH_EXPR_4)

-   [Generically Typed](#@@ITOC@@ABENTYPING_ARITH_EXPR_5)

Note

In the case of [dynamic method calls](javascript:call_link\('abapcall_method_dynamic.htm'\)), the same rules apply as to static method calls. However, the handling during runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of functions or arithmetic expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.

Checking Typing

-   A [numeric function](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry"), a [description function](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry"), or an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any numerically typed input parameter in a method call.

-   be bound to any appropriately typed input parameter in a function module call.

-   A [bit function](javascript:call_link\('abenbit_function_glosry.htm'\) "Glossary Entry") or a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any byte-like typed input parameter in a method call.

-   be passed to input parameters of the type x or a generic type covering x in function module calls.

-   A [string function](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") or a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") can

-   be bound to any character-like typed input parameter in a method call.

-   be passed to input parameters of the type string or a generic type covering string in function module calls.

-   A [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") can

-   be passed to every input parameter that matches the specified type [type](javascript:call_link\('abenconstructor_expressions.htm'\)) of the constructor expression in method calls. In this case (with the exception of conversion operator [CONV](javascript:call_link\('abenconv_constructor_inference.htm'\)) in the constructor operator), the # character can only be specified for type if the input parameter is typed in full and this type is used.

-   be passed to every input parameter that matches the specified type [type](javascript:call_link\('abenconstructor_expressions.htm'\)) of the constructor expression in function module calls. The character # cannot be specified for type ion the constructor expression since static derivations of types are not possible in function module calls.

-   A [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") can

-   be passed in method calls or function calls to every input parameter that matches the type of the result.

Note

In function module calls, the typing is not checked until runtime.

Calculation Type and Calculation Length

If calculation expressions are specified as actual parameters, the calculation type and calculation length are specified as follows:

-   The [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of an arithmetic expression is determined

-   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is fully typed. If the input parameter is typed generically, only the operands of the expression are evaluated.

-   in function module calls from the operands of the expression. The typing of the input parameter is ignored.

-   The [calculation length](javascript:call_link\('abencalculation_length_glosry.htm'\) "Glossary Entry") of a bit expression is the length of the largest operand of the expression.

Passing Parameters

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if the formal parameter is defined as to be [passed by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").

Fully Typed

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](javascript:call_link\('abenconversion_rules.htm'\)), if necessary, to the type of the input parameter and passed.

Generically Typed

-   In a function, a constructor expression, or a table expression, the formal parameter inherits the type of the return value or result. Only bit functions are handled like bit expressions (see below).

-   With an arithmetic expression, the formal parameter takes over the calculation type determined by the operand. If the calculation type is p, the length is always 16. The number of decimal places is determined by the accuracy required by the calculation and therefore depends on the values of the operands.

-   In a bit expression or a bit function, the formal parameter is set to type x in the calculation length determined by the operands.

-   In a string expression, the formal parameter is set to the type string in the case of fully generic typing or the generic types csquence clike. In the case of the types c and n with generic lengths, the length is set to the length of the result of the string expression.

Example

The functional method m1 is called twice for each assignment to result. The first call is executed in an arithmetic expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter p1 has type p of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter p1 has the type decfloat34 in each assignment, because the calculation type of the arithmetic expression is determined by the return value of m1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1 TYPE numeric
                     RETURNING value(ret) TYPE decfloat34.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ret = p1.
  ENDMETHOD.
ENDCLASS.
DATA num1   TYPE p DECIMALS 2 VALUE '2.00'.
DATA num2   TYPE p DECIMALS 2 VALUE '1.00'.
DATA result TYPE decfloat34.
START-OF-SELECTION.
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 2 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 3 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num2 / 2 )  ).


### abentyping_check.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

Checking Typing

When data objects are assigned to typed [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and when [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") are assigned to typed [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))

Special rules apply to:

-   [Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))

-   [Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))

-   [Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))

Note

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these types of helper variables can often be skipped by using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](javascript:call_link\('abentyping_check_general.htm'\))
[Return Values of Functional Methods](javascript:call_link\('abentyping_return_values.htm'\))
[Literals as Actual Parameters](javascript:call_link\('abentyping_literals.htm'\))
[Functions and Expressions as Actual Parameters](javascript:call_link\('abentyping_arith_expr.htm'\))


### abentyping_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) → 

Generic and Complete Typing

The example shows how to access generically and completely typed formal parameters.

Source Code

REPORT demo\_typing.
CLASS demo\_typing DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS start.
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
    CLASS-METHODS sort\_itab IMPORTING VALUE(pg) TYPE itab2g
                                      VALUE(pc) TYPE itab2c.
ENDCLASS.
CLASS demo\_typing IMPLEMENTATION.
  METHOD start.
    DATA: tab TYPE itab1g,
          wa  LIKE LINE OF tab.
    tab = VALUE #(
      FOR j = 1 UNTIL j > 5
        ( cola = j colb = 6 - j ) ).
    sort\_itab( pg = tab
               pc = tab ).
  ENDMETHOD.
  METHOD sort\_itab.
    DATA(out) = cl\_demo\_output=>new( ).
    SORT pg BY cola.
    out->write\_data( pg ).
    SORT pg BY ('COLA').
    out->write\_data( pg ).
    SORT pc BY cola.
    out->write\_data( pc ).
    SORT pc BY ('COLA').
    out->write\_data( pc ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_typing=>start( ).

Description

In the class demo\_typing, three table types are declared:

-   itab1g has the line type struc1 with the components cola and colb. It is generic since the primary table key has not been specified.

-   itab2g has the line type struc2 with the components colb and cola. It is generic since the primary table key has not been specified.

-   itab2c has the line type struc2 with the components cola and colb. It is complete since the primary table key has been specified.

The method sort\_itab has two formal parameters:

-   pg is typed generically with itab2g.

-   pc is typed completely with itab2c.

In the method start, an internal table tab is declared by referring to itab1g. The key is specified implicitly. This table is filled and passed to the formal parameters of sort\_itab.

In sort\_itab, both formal parameters are sorted twice. In the first sort, the column cola is specified statically as a sort criterion, in the second sort, it is specified dynamically. The behaviour is as follows:

-   The first SORT statement statically accesses the generically typed formal parameter pg. In this case, the typing with itab2g takes priority in which cola is the second column.

-   The second SORT statement dynamically accesses the generically typed formal parameter pg. In this case, the type of the actual parameter itab1g takes priority in which cola is the first colulmn.

-   The third and fourth SORT statements dynamically or statically access the completely typed formal parameter pc. In these cases, the typing with itab2c takes priority in which cola is the second column.

If components of generically typed formal parameters are accessed dynamically, a runtime error may occur if the components do not exist in the actual parameter.
