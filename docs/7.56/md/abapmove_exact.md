  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_move.htm) → 

Lossless Assignments, Rules

A lossless assignment checks the assigned content, before its [conversion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_glosry.htm "Glossary Entry") to an incompatible target object, to determine whether the assignment is possible without losses, that is:

-   whether it is a valid value for the data type of the source
-   whether a conversion to the target field would lead to a loss of values
-   whether the value is valid for the target field after conversion

If the source contains a valid value and no values are lost, the conversion is performed in accordance with the associated [conversion rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_rules.htm). Otherwise no assignment is made. If it is already known statically that one of the prerequisites is violated, a syntax error occurs. If this violation is not identified until the program is executed, a catchable exception is raised whose exception class is generally a subclass of CX\_SY\_CONVERSION\_ERROR.

The following sections outline which rules are used by the operator [EXACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_exact.htm) when checking the content of its argument with respect to the data types involved:

-   [Checks elementary data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_elementary.htm)
-   [Checks structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_structure.htm)
-   [Checks internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_itab.htm)

If an exception is raised as a result of an invalid or inappropriate value, the VALUE attribute of the exception object is assigned this value in character form and this value is generally also included in the exception text.

No checks are made for:

-   compatible data types
    
    The content of the argument is passed to the return value without being converted, even if it already contains an invalid value.
    
-   reference variables
    
    Checks on the content of a reference variable using EXACT are not useful because nothing is converted and the content is either assignable or not assignable, as specified by the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_references.htm).
    

A syntax check warning is produced if it is known statically that no checks are performed for the combination of argument and target type, making EXACT superfluous.

Hint

Since lossless checks are only performed for conversions to incompatible data types, it is best to only use the operator EXACT to fill data objects that should only be given valid objects. Other types of assignments that require a start value to be specified in the declaration using [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_options.htm) can create invalid values that are then not recognized when a lossless assignment is made to a compatible target field.

Executable Example

[Lossless Assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_abexa.htm).

Continue
[Checking Elementary Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_elementary.htm)
[Checking Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_structure.htm)
[Checking Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmove_exact_itab.htm)