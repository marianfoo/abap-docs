  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

rel\_exp - Comparing Reference Variables

It is possible to compare data references with data references and to compare object references with object references, but it is not possible to compare data references with object references. Two reference variables are identical if they point to the same object. Size comparisons are defined internally and always produce similar results in similar situations.

The [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry") in an initial reference variable is always smaller than any non-initial reference. However, a non-initial invalid reference that no longer points to an object cannot be compared. A comparison with a non-initial invalid reference always produces a non-handleable exception.

Notes

-   For data references to be identical, the data type of the referenced objects must be [compatible](javascript:call_link\('abencompatibility.htm'\)) and it is not enough for the operands just to contain the same reference. If, for example, two reference variables have the same memory address, and one points to a structure and the other to the first component of the structure, these variables are not identical since the data type of the operands is incompatible. Reference variables filled using [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) might not be identical, even though they point to the same data object, if GET REFERENCE or the reference operator REF is executed for a field symbol to which the data object was assigned using [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry").

-   The fact that non-initial invalid references cannot be compared affects all operations with internal tables where comparisons take place, for example, WHERE conditions, sorts, or reads using a sorted key. If a comparison with a non-initial invalid reference takes place, this produces a runtime error.

Example

The following comparisons are both true. Although all references created with the reference operator REF point to the same data object in the memory, the reference created using <fs2> is not the same as the other two, because it references another data type.

DATA dobj TYPE d.
ASSIGN dobj TO FIELD-SYMBOL(<fs1>).
IF REF #( dobj ) = REF #( <fs1> ).
  ...
ENDIF.
TYPES text   TYPE c LENGTH 8.
FIELD-SYMBOLS <fs2> TYPE text.
ASSIGN dobj TO <fs2> CASTING.
IF REF #( dobj ) <> REF #( <fs2> ).
  ...
ENDIF.