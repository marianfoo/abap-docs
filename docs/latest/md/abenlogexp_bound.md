  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20IS%20BOUND%2C%20ABENLOGEXP_BOUND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - IS BOUND

Syntax

... ref IS *\[*NOT*\]* BOUND ...

Effect

This predicate expression checks whether a reference variable contains a valid reference. A [reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_variable_glosry.htm "Glossary Entry") must be specified for ref. This is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   A data reference is valid if it can be dereferenced.
-   An object reference is valid if it points to an object.

With the addition NOT, the expression is true if the reference variable does not contain a valid reference. In this case, the reference variable is either initial and contains the [null reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_reference_glosry.htm "Glossary Entry"), or it is not initial and contains an invalid reference that does not point to an object.

Hint

A non-initial reference variable that contains a [heap reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") is generally always valid since it keeps an object alive. Only [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") that point to lines of internal tables can become invalid when lines are deleted. A data reference variable that contains a [stack reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_reference_glosry.htm "Glossary Entry"), on the other hand, can also become invalid if the referenced data object is removed from the stack.

Example

The logical expression in the IF statement is false. The data reference dref contains a reference to an already deleted table line.

DATA: dref TYPE REF TO data,
      itab TYPE TABLE OF ...
FIELD-SYMBOLS <fs> TYPE ANY.
dref = REF #( itab\[ ... \] ).
...
CLEAR itab.
...
IF dref IS BOUND.
  ASSIGN dref->\* TO <fs>.
ENDIF.

Executable Example

[Predicate Expression IS NOT BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbound_abexa.htm)

Continue
![Example](exa.gif "Example") [rel\_exp - Predicate Expression IS NOT BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbound_abexa.htm)