  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [typing Addition](javascript:call_link\('abentyping_syntax.htm'\)) → 

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

-   The data types of the ABAP Dictionary that can be referred to with TYPE include specifically the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ([CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"), and [abstract CDS entities](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")).

-   Complete data types, which can be referenced with TYPE, or indirectly using LIKE, also include [enumerated types](javascript:call_link\('abaptypes_enum.htm'\)).

-   LIKE can be used to reference the public attributes of global classes.

-   In a LIKE reference to an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the header line is used. To reference the table type, \[\] must be appended to the name in the usual way. A formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.

-   Outside classes, LIKE can also be used for an [obsolete type reference](javascript:call_link\('abenlike_obsolete.htm'\)).

-   The predefined generic data type [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) cannot currently be specified after REF TO.

Example

In the following example, the field symbol <spfli> is fully typed with the structured data type spfli from ABAP Dictionary, and can therefore be used like a structure of that data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...