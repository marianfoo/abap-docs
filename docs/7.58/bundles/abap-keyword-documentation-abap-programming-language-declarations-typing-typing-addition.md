# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Typing / typing Addition

Included pages: 3


### abentyping_syntax.htm

---
title: "Syntax"
description: |
  ... generic_type(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)  complete_type(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)  ... Effect The addition typing is part of the definition of formal parameters and field sym
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm"
abapFile: "abentyping_syntax.htm"
keywords: ["do", "if", "try", "method", "class", "types", "field-symbol", "abentyping", "syntax"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20ABENTYPING_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_shortref.htm)

Syntax

... [generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm) *|* [complete\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm)
-   [*\[*CLASS-*\]*EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm)
-   [FORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform.htm)
-   [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols.htm)

The addition allows generic typing with [generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm) and complete typing with [complete\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm). In positions where the addition typing does not have to be specified, implicit typing with the generic type [any](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm) takes place if no typing is specified explicitly.

Hints

-   For more information about typing parameters of function modules, see [Function Module Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_parameters.htm).
-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters of the same procedure that have already been declared.
-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). For a typing of system wide visible public interface parameters to be carried out in the Function Builder or Class Builder, only the types in the ABAP Dictionary may be referenced.

Continue
[typing Addition, generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm)
[typing Addition, complete\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm)


### abentyping_generic.htm

---
title: "Syntax"
description: |
  ...  TYPE generic_type(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm)    LIKE <generic_fs>generic_para  ... Effect To type a formal parameter or a field symbol generically, the following is possible: -   specify any generic ABAP type
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm"
abapFile: "abentyping_generic.htm"
keywords: ["do", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abentyping", "generic"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20generic_type%2C%20ABENTYPING_GENERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition, generic\_type

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE [generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm) *}*
  *|* *{* LIKE <generic\_fs>*|*generic\_para *}* ...

Effect

To type a formal parameter or a field symbol generically, the following is possible:

-   specify any generic ABAP type [generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm) (except object) after TYPE.
-   specify a field symbol visible at this position (<generic\_fs>) or a formal parameter (generic\_para) with generic typing, after LIKE. The typing defined in the declaration of the field symbol/parameter is applied. In method parameters, all generic typing is possible. No complete generic typing is possible in parameters of subroutines and field symbols.

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used at any operand position that is not excluded by this typing. The following exceptions apply:

-   [Operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_position_glosry.htm "Glossary Entry") that expect internal tables. Here, only formal parameters or field symbols typed as internal table types of the corresponding table category are allowed.
-   [Read positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_position_glosry.htm "Glossary Entry") in which a statically recognizable [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is expected, such as the source field of an assignment to an [enumerated variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") are allowed here. In [write positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_position_glosry.htm "Glossary Entry"), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is also only made at runtime in read positions.

The type properties specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the properties of the assigned actual parameter or memory area assigned apply.

If no actual parameter is specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_type_glosry.htm "Glossary Entry") in accordance with the following rules:

-   any and data are converted to the type c with length 4.
-   c, clike, csequence, and simple are converted to the type c with length 1.
-   n is converted to the type n with length 1.
-   numeric and p are converted to the type p with length 8 without decimal places.
-   x and xsequence are converted to the type x with length 1.
-   ANY TABLE and INDEX TABLE are converted to STANDARD TABLE.
-   For ANY TABLE, INDEX TABLE, *\[*STANDARD*\]* TABLE SORTED TABLE, and HASHED TABLE, the line type is set to c with length 1.
-   For generic table types without specification of a primary table key, the standard key is added for standard tables and the entire table line, except for any table-like parts, is added as the key specification for sorted tables and hashed tables.
-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.
-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [WITH FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_keydef.htm).

If a replacement parameter is specified, its type properties are applied.

Hint

In typing formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm), it should be noted that no [numeric functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), no [description functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescription_function_glosry.htm "Glossary Entry"), and no [arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) to the actual parameter. This restriction does not apply to the generic type any.

Example

In the following example, two generically typed field symbols are used in [READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) statement. To avoid syntax errors, <index\_table> must be typed as an index table. However, the system does not check until runtime for <any\_object> whether the data object assigned to it matches the line type of the table.

FIELD-SYMBOLS: <any\_object>   TYPE any,
               <index\_table>  TYPE index table.
...
READ TABLE <index\_table> INDEX 1
                         INTO <any\_object>.


### abentyping_complete.htm

---
title: "Syntax"
description: |
  ...  TYPE LINE OF complete_type  REF TO type    LIKE LINE OF dobj  REF TO dobj  ... Effect To completely type a formal parameter or a field symbol: -   Any non-generic type complete_type can be specified after TYPE. complete_type can be
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_complete.htm"
abapFile: "abentyping_complete.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "field-symbol", "abentyping", "complete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%20Addition%2C%20complete_type%2C%20ABENTYPING_COMPLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing Addition, complete\_type

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO type*}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

To completely type a formal parameter or a field symbol:

-   Any non-generic type complete\_type can be specified after TYPE. complete\_type can be a non-generic data type from the ABAP Dictionary or ABAP CDS, a non-generic public data type from a global class, a non-generic program-local type already defined using [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm), or a non-generic [built-in ABAP type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm).
-   A data object dobj can be specified after LIKE. dobj according to the rules [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_referring.htm). The bound type of the data object is transferred. If field symbols and formal parameters are specified for dobj, they must be completely typed to create the corresponding complete typing.

If complete\_type or the data type of dobj is table-like, LINE OF can be used to refer to the appropriate line type.

REF TO types the formal parameter or field symbol as a reference variable, whereby the same rules apply as to the [definition of reference types in TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_references.htm). Typing with TYPE REF TO data or TYPE REF TO object is also considered a complete typing.

If an actual parameter or a memory area is assigned to completely typed formal parameters or field symbols, the technical properties of the specified data type must match the typing exactly (see [Typing Check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm)), except when passing literals. Completely typed formal parameters or field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type properties specified by the typing are used during both static and dynamic access to a completely typed formal parameter or field symbol.

Hints

-   The data types that can be referred to with TYPE include specifically [CDS types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_type_glosry.htm "Glossary Entry").
-   Complete data types, which can be referred to with TYPE, or indirectly using LIKE, also include [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm).
-   LIKE can be used to refer to data objects, including the public attributes of global classes.
-   In a LIKE reference to an internal table with a [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry"), the header line is used. To refer to the table type, \[\] must be appended to the name as per usual. A formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_parameter_glosry.htm "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.
-   The predefined generic data type [any](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm) cannot currently be specified after REF TO.
-   Outside classes, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlike_obsolete.htm).

Example

In the following example, the field symbol <spfli> is completely typed with the structured data type spfli from the ABAP Dictionary, and can therefore be used like a structure of this data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...
