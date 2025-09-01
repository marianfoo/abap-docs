  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) → 

ASSIGN

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_shortref.htm)

Syntax

ASSIGN [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) TO <fs> [casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) [range\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm).

Effect

This statement assigns the memory area specified using [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) to the field symbol <fs>. A data object or a memory area calculated from the address of a data object can be assigned. After the assignment, the field symbol refers to the assigned memory area and can be used in operand positions. When used in a statement, it behaves like a dereferenced data reference, meaning that the statement works with the content of the memory area.

The following can be specified for <fs>:

-   An existing field symbol with appropriate typing.
    
-   An inline declaration [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm). The typing depends on the [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) specified.
    

The data type with which the assigned memory area is handled depends on what is specified in [casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm). Either an explicit [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry") can be performed or the field symbol uses the data type of the data object specified in the assignment. In both cases, the data type used must [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check_general.htm) the [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol. A field symbol to which a memory area is assigned, has this data type after the assignment and behaves like a data object of this type.

The assigned memory area mem\_area must be at least as long as the data type specified in casting\_spec and must have at least the same [alignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_glosry.htm "Glossary Entry"). If the data type determined in casting\_spec is [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry"), the deep components with their type and position must appear in the assigned memory area exactly like this.

The information in [range\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm) is used to define the memory area that can be assigned to the field symbol.

System Fields
The return value is set only for the [dynamic variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm) and the [table expression variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm) of [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm). If the constructor operator NEW is used as a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm), this operator sets the return value.

sy-subrc

Meaning

0

Assignment completed.

4

Assignment not completed.

8

A [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm) was not assigned.

If a dynamic assignment or assignment of a table expression could not be performed, the field symbol keeps its previous state. If the static assignment could not be performed, a memory is not assigned to the field symbol after the statement ASSIGN and the assignment can be checked with the [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_assigned.htm). If an assignment were to produce illegal memory accesses, an exception is raised in the case of both static and dynamic ASSIGN statements.

Notes

-   If field symbols are set using ASSIGN, permission to access the assigned data object is only checked at the position of the statement. The field symbol can then be passed on as required and used to access the assigned data object in any position. To prevent access to private and read-only attributes using field symbols outside classes, field symbols for these attributes should not be published externally. A constant or read-only input parameter, however, can never be made modifiable by passing a field symbol.
    
-   One obsolete form of the statement ASSIGN is [ASSIGN LOCAL COPY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_local_copy.htm).
    

Example

Three field symbols are assigned the subfields for year, month, and day of the system field sy-datlo. The subfields can then be addressed using field symbols.

FIELD-SYMBOLS <year>  TYPE n.
FIELD-SYMBOLS <month> TYPE n.
FIELD-SYMBOLS <day>   TYPE n.
ASSIGN sy-datlo+0(4) TO <year>.
ASSIGN sy-datlo+4(2) TO <month>.
ASSIGN sy-datlo+6(2) TO <day>.
cl\_demo\_output=>new(
  )->write(   <year>
  )->write(   <month>
  )->display( <day> ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

-   Cause: The type of the source field and the target type do not match exactly in offset and type in those components that are strings, tables, or references.
    Runtime error: ASSIGN\_CASTING\_ILLEGAL\_CAST
    

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

-   Cause: A type specified dynamically after CASTING is unknown.
    Runtime error: ASSIGN\_CASTING\_UNKNOWN\_TYPE
    

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

-   Cause: The data object in addition RANGE does not contain the assigned data object.
    Runtime error: ASSIGN\_FIELD\_NOT\_IN\_RANGE
    

Non-Handleable Exceptions

-   Cause: The field symbol is structured and the assigned field is shorter than the structure.
    Runtime error: ASSIGN\_BASE\_TOO\_SHORT
    
-   Cause: The alignment for field f is too short for the type of the field symbol.
    Runtime error: ASSIGN\_BASE\_WRONG\_ALIGNMENT
    
-   Cause: Only simple types can be specified for TYPE.
    Runtime error: ASSIGN\_CAST\_COMPLEX\_TYPE
    
-   Cause: The source field is longer than 16 bytes and cannot be interpreted as a type p field.
    Runtime error: ASSIGN\_CAST\_P\_TOO\_LARGE
    
-   Cause: The alignment of field f is too short for the type specified in TYPE.
    Runtime error: ASSIGN\_CAST\_WRONG\_ALIGNMENT
    
-   Cause: The length of field f does not match the type specified in TYPE.
    Runtime error: ASSIGN\_CAST\_WRONG\_LENGTH
    
-   Cause: The type specified in TYPE is unknown.
    Runtime error: ASSIGN\_CAST\_WRONG\_TYPE
    
-   Cause: A maximum of 14 columns is permitted.
    Runtime error: ASSIGN\_DECIMALS\_TOO\_HIGH
    
-   Cause: Decimal places are allowed only for type p.
    Runtime error: ASSIGN\_DECIMALS\_WRONG\_TYPE
    
-   Cause: A length of 0 was specified for field f.
    Runtime error: ASSIGN\_LENGTH\_0
    
-   Cause: A length less than 0 was specified for field f.
    Runtime error: ASSIGN\_LENGTH\_NEGATIVE
    
-   Cause: An offset less than 0 was specified for field f.
    Runtime error: ASSIGN\_OFFSET\_NEGATIVE
    
-   Cause: An offset or length was specified for field f and the data type of the assigning field does not allow partial access. (This is the case for data types I, F, and P.)
    Runtime error: ASSIGN\_OFFSET\_NOTALLOWED
    
-   Cause: The offset specified for field f exceeds the range of the ABAP variable.
    Runtime error: ASSIGN\_OFFSET\_TOOLARGE
    
-   Cause: In the area addressed in the offset and length specifications for field f, deep components exist (data references, object references, strings, internal tables), which may not be overwritten.
    Runtime error: ASSIGN\_OFF+LENGTH\_ILLEGAL\_CAST
    
-   Cause: Offset and length specified for field f exceed the range of the ABAP variable.
    Runtime error: ASSIGN\_OFFSET+LENGTH\_TOOLARGE
    
-   Cause: Field f is not a data reference. However, a data reference was expected.
    Runtime error: ASSIGN\_REFERENCE\_EXPECTED
    
-   Cause: The type of the source field and the target type do not match exactly in offset and type in those components that are strings, tables, or references.
    Runtime error: ASSIGN\_STRUCTURE\_ILLEGAL\_CAST
    
-   Cause: Substrings cannot be assigned to a field symbol.
    Runtime error: ASSIGN\_SUBSTRING\_NOT\_ALLOWED
    
-   Cause: The field symbol is typed and the type of the assigned field is incompatible with it.
    Runtime error: ASSIGN\_TYPE\_CONFLICT
    
-   Cause: The type of the source field contains strings, tables, or references.
    Runtime error: ASSIGN\_TYPE\_ILLEGAL\_CAST
    
-   Cause: The type of the source field is a structure not compatible with the target type.
    Runtime error: ASSIGN\_UC\_STRUCT\_CONFLICT
    

Continue
[ASSIGN - mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm)
[ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm)
[ASSIGN - range\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm)