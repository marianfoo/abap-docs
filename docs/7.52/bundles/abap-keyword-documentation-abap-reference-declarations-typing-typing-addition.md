# ABAP - Keyword Documentation / ABAP - Reference / Declarations / Typing / typing Addition

Included pages: 3


### abentyping_syntax.htm

---
title: "Syntax"
description: |
  ... generic_type(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm)  complete_type(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm)  ... Effect The addition typing is part of the definition of formal parameters and field sym
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm"
abapFile: "abentyping_syntax.htm"
keywords: ["do", "if", "try", "method", "class", "types", "field-symbol", "abentyping", "syntax"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping.htm) → 

typing Addition

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_shortref.htm)

Syntax

... [generic\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm) *|* [complete\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm)  ...

Effect

The addition typing is part of the definition of formal parameters and field symbols in the following statements:

-   [*\[*CLASS-*\]*METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm)

-   [*\[*CLASS-*\]*EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm)

-   [FORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm)

-   [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm)

The addition allows generic typing with [generic\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm) and full typing with [complete\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm). In positions where the addition typing is not necessary, implicit typing with the generic type [any](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) takes place (if no typing is specified explicitly).

Notes

-   In classes, the formal parameters of methods or events and field symbols must be typed explicitly. The formal parameters of methods or events of global classes and the formal parameters of function modules are typed in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") or [Function Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). Only the types in ABAP Dictionary may be used for typings of public interface parameters visible across the system in Function Builder or Class Builder,

-   More information about typing parameters of function modules can be found under [Function Module Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm).

Continue
[typing Addition - generic\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm)
[typing - Addition - complete\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm)


### abentyping_generic.htm

---
title: "Syntax"
description: |
  ...  TYPE generic_type(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm)    LIKE <generic_fs>generic_para  ... Effect To generically type a formal parameter or a field symbol, -   specify any generic ABAP type generic_type(https://he
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm"
abapFile: "abentyping_generic.htm"
keywords: ["loop", "do", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abentyping", "generic"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm) → 

typing Addition - generic\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE [generic\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) *}*
  *|* *{* LIKE <generic\_fs>*|*generic\_para *}* ...

Effect

To generically type a formal parameter or a field symbol,

-   specify any generic ABAP type [generic\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) (except object) after TYPE.

-   specify a field symbol visible at this position (<generic\_fs>) or a formal parameter (generic\_para) with generic typing, after LIKE. The typing defined is applied when the field symbol/parameter is declared. In method parameters, all generic typings are possible. No complete generic typings are possible in parameters of subroutines and field symbols.

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used as operands anywhere that is not excluded by this typing. The following exceptions apply:

-   [Operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_position_glosry.htm "Glossary Entry") that expect internal tables. Here, only formal parameters or field symbols (as internal tables) with the appropriate table category are allowed.

-   [Reading positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreading_position_glosry.htm "Glossary Entry") in which an [enumerated object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") (known statically) is expected, such as the source field of an assignment to an [enumerated variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are allowed here. In [writing positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry"), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is only made at runtime in reading positions too.

The type attributes specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the attributes of the actual parameter or memory area assigned apply.

If an actual parameter is not specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_type_glosry.htm "Glossary Entry") in accordance with the following rules:

-   any and data are converted to the type c with length 4.

-   c, clike, csequence, and simple are converted to the type c with length 1.

-   n is converted to the type n with length 1.

-   numeric and p are converted to the type p with length 8 without decimal places.

-   x and xsequence are converted to the type x with length 1.

-   ANY TABLE and INDEX TABLE are converted to STANDARD TABLE.

-   For ANY TABLE, INDEX TABLE, *\[*STANDARD*\]* TABLE SORTED TABLE, and HASHED TABLE, the row type is set to c with length 1.

-   For generic table types without specification of a primary table key, the standard key is completed for standard tables and the entire table row (without any table-like parts) is completed as the key specification for sorted tables and hashed tables.

-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.

-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [WITH FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_keydef.htm).

If a replacement parameter is specified, the type attributes of this parameter are applied.

Note

When formal parameters are typed, the addition LIKE can be used to reference formal parameters (in the same procedure) that have already been declared.

Example

In the following example, two generically typed field symbols are used in [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) statement. To avoid syntax errors, <any\_table> must be defined as an internal table. However, the system does not check the type of <any\_object> until runtime, to ensure that the type of the data object assigned to it is compatible with the row type of the table.

FIELD-SYMBOLS: <any\_object> TYPE ANY,
               <any\_table>  TYPE ANY TABLE.
...
LOOP AT <any\_table> INTO <any\_object>.
  ...
ENDLOOP.


### abentyping_complete.htm

---
title: "Syntax"
description: |
  ...  TYPE LINE OF complete_type  REF TO type    LIKE LINE OF dobj  REF TO dobj  ... Effect To completely type a formal parameter or a field symbol, you can -   specify any non-generic type (complete_type) after TYPE. complete_type can b
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm"
abapFile: "abentyping_complete.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abentyping", "complete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm) → 

typing - Addition - complete\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO type*}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

To completely type a formal parameter or a field symbol, you can

-   specify any non-generic type (complete\_type) after TYPE. complete\_type can be a non-generic data type from ABAP Dictionary, a non-generic public data type from a global class, a non-generic program-local type already defined using [TYPES<](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm), or a non-generic [built-in ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm).

-   By specifying a data object dobj after LIKE. dobj is specified based on the rules [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_referring.htm). The bound type of the data object is applied. If field symbols and formal parameters are specified for dobj, they must be fully typed, to make sure that their typing is full.

If complete\_type or the data type of dobj is table-like, LINE OF can be used to reference the appropriate row type.

REF TO types the formal parameter or field symbol as a reference variable. In this case, the same rules apply as for the [definition of reference types in TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_references.htm). Typings with TYPE REF TO data or TYPE REF TO object are also considered as full typings.

If an actual parameter or a memory area is assigned to fully typed formal parameters or field symbols, the technical attributes of the specified data type must match the typing exactly (see [Typing Check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm)), except when passing literals. Completely typed formal parameters and field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type attributes specified by the typing are used during both static and dynamic access to a fully typed formal parameter or field symbol.

Notes

-   The data types in ABAP Dictionary that can be referenced using TYPE also include the [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") ([CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") and [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry")).

-   Complete data types, which can be referenced with TYPE, or indirectly using LIKE, also include [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_enum.htm).

-   LIKE can be used to reference the public attributes of global classes.

-   When formal parameters are typed, the addition LIKE can be used to reference formal parameters (in the same procedure) that have already been declared.

-   In a LIKE reference to an internal table with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"), the header line is used. To reference the table type, \[\] must be appended to the name in the usual way. A formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry")) or a field symbol can be typed only with reference to the header line or to the table type.

-   Outside classes, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm).

-   The predefined generic data type [any](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) cannot currently be specified after REF TO.

Example

In the following example, the field symbol <spfli> is fully typed with the structured data type spfli from ABAP Dictionary, and can therefore be used like a structure of that data type.

FIELD-SYMBOLS <spfli> TYPE spfli.
...
<spfli>-carrid = ...
