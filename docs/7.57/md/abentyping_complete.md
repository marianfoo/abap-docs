  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: typing Addition, complete_type, ABENTYPING_COMPLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

typing Addition, complete\_type

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO type*}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

To completely type a formal parameter or a field symbol:

-   Any non-generic type complete\_type can be specified after TYPE. complete\_type can be a non-generic data type from the ABAP Dictionary or ABAP CDS, a non-generic public data type from a global class, a non-generic program-local type already defined using [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm), or a non-generic [built-in ABAP type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_complete.htm).
-   A data object dobj can be specified after LIKE. dobj according to the rules [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_referring.htm). The bound type of the data object is transferred. If field symbols and formal parameters are specified for dobj, they must be completely typed to create the corresponding complete typing.

If complete\_type or the data type of dobj is table-like, LINE OF can be used to refer to the appropriate line type.

REF TO types the formal parameter or field symbol as a reference variable, whereby the same rules apply as to the [definition of reference types in TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_references.htm). Typing with TYPE REF TO data or TYPE REF TO object is also considered a complete typing.

If an actual parameter or a memory area is assigned to completely typed formal parameters or field symbols, the technical properties of the specified data type must match the typing exactly (see [Typing Check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_check.htm)), except when passing literals. Completely typed formal parameters or field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type properties specified by the typing are used during both static and dynamic access to a completely typed formal parameter or field symbol.

Hints

-   The data types of the ABAP Dictionary that can be referred to with TYPE include specifically the [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") ([CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry"), [CDS hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), and [CDS abstract entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")).
-   Complete data types, which can be referred to with TYPE, or indirectly using LIKE, also include [enumerated types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_enum.htm).
-   LIKE can be used to refer to data objects, including the public attributes of global classes.
-   In a LIKE reference to an internal table with a [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"), the header line is used. To refer to the table type, \[\] must be appended to the name as per usual. A formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.
-   Outside classes, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlike_obsolete.htm).
-   The predefined generic data type [any](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) cannot currently be specified after REF TO.

Example

In the following example, the field symbol <spfli> is completely typed with the structured data type spfli from the ABAP Dictionary, and can therefore be used like a structure of this data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...