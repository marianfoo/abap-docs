  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparing%20Reference%20Variables%2C%20ABENLOGEXP_RULES_OPERANDS_REF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

rel\_exp - Comparing Reference Variables

It is possible to compare data references with data references and object references with object references, but it is not possible to compare data references with object references. Two reference variables are identical if they point to the same object. Size comparisons are defined internally and always produce similar results in similar situations.

The [null reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_reference_glosry.htm "Glossary Entry") in an initial reference variable is always smaller than any non-initial reference. However, a non-initial invalid reference that no longer points to an object cannot be compared. A comparison with a non-initial invalid reference always produces an uncatchable exception.

Hints

-   For data references to be identical, the data type of the referenced objects must be [compatible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompatibility.htm) and it is not enough for the operands just to contain the same reference. If, for example, two reference variables contain the same memory address, with one pointing to a structure and the other to the first component of the structure, these variables are not identical since the data type of the operands is incompatible. Reference variables filled using [GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm) might not be identical, even though they point to the same data object if GET REFERENCE or the reference operator REF is executed for a field symbol to which the data object was assigned using [casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry").
-   The fact that non-initial invalid references cannot be compared affects all operations with internal tables where comparisons take place, for example, WHERE conditions, sorts, or accesses using a sorted key. If a comparison with a non-initial invalid reference takes place, a runtime error occurs.

Example

The following comparisons are both true. Although all references created with the reference operator REF point to the same data object in the memory, the reference created using <fs2> is not equal to the other two because it references another data type.

DATA dobj TYPE d.
ASSIGN dobj TO FIELD-SYMBOL(<fs1>).
IF REF #( dobj ) = REF #( <fs1> ).
  ...
ENDIF.
TYPES text TYPE c LENGTH 8.
FIELD-SYMBOLS <fs2> TYPE text.
ASSIGN dobj TO <fs2> CASTING.
IF REF #( dobj ) <> REF #( <fs2> ).
  ...
ENDIF.