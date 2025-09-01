  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping.htm) →  [typing Addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_syntax.htm) → 

typing Addition, generic\_type

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_shortref.htm)

Syntax

... *{* TYPE [generic\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) *}*
  *|* *{* LIKE <generic\_fs>*|*generic\_para *}* ...

Effect

To type a formal parameter or a field symbol generically, the following is possible:

-   specify any generic ABAP type [generic\_type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) (except object) after TYPE.
-   specify a field symbol visible at this position (<generic\_fs>) or a formal parameter (generic\_para) with generic typing, after LIKE. The typing defined in the declaration of the field symbol/parameter is applied. In method parameters, all generic typing is possible. No complete generic typing is possible in parameters of subroutines and field symbols.

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_check.htm) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used at any operand position that is not excluded by this typing. The following exceptions apply:

-   [Operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_position_glosry.htm "Glossary Entry") that expect internal tables. Here, only formal parameters or field symbols typed as internal table types of the corresponding table category are allowed.
-   [Read positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenread_position_glosry.htm "Glossary Entry") in which a statically recognizable [enumerated object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is expected, such as the source field of an assignment to an [enumerated variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are allowed here. In [write positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwrite_position_glosry.htm "Glossary Entry"), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is also only made at runtime in read positions.

The type attributes specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the properties of the assigned actual parameter or memory area assigned apply.

If no actual parameter is specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_type_glosry.htm "Glossary Entry") in accordance with the following rules:

-   any and data are converted to the type c with length 4.
-   c, clike, csequence, and simple are converted to the type c with length 1.
-   n is converted to the type n with length 1.
-   numeric and p are converted to the type p with length 8 without decimal places.
-   x and xsequence are converted to the type x with length 1.
-   ANY TABLE and INDEX TABLE are converted to STANDARD TABLE.
-   For ANY TABLE, INDEX TABLE, *\[*STANDARD*\]* TABLE SORTED TABLE, and HASHED TABLE, the line type is set to c with length 1.
-   For generic table types without specification of a primary table key, the standard key is added for standard tables and the entire table line, except for any table-like parts, is added as the key specification for sorted tables and hashed tables.
-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.
-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [WITH FURTHER SECONDARY KEYS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_keydef.htm).

If a replacement parameter is specified, its type attributes are taken over.

Hint

In typing formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm), it should be noted that no [numeric functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), no [description functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescription_function_glosry.htm "Glossary Entry"), and no [arithmetic expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_conv.htm) to the actual parameter. This restriction does not apply to the generic type any.

Example

In the following example, two generically typed field symbols are used in [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm) statement. To avoid syntax errors, <index\_table> must be typed as an index table. However, the system does not check until runtime for <any\_object> whether the data object assigned to it matches the line type of the table.

FIELD-SYMBOLS: <any\_object>   TYPE any,
               <index\_table>  TYPE index table.
...
READ TABLE <index\_table> INDEX 1
                         INTO <any\_object>.