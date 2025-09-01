  

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