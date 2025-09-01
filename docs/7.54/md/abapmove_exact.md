  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) → 

Lossless Assignments - Rules

A lossless assignment checks the assigned content, before its [conversion](javascript:call_link\('abenconversion_glosry.htm'\) "Glossary Entry") to an incompatible target object, to see whether the assignment is possible without data loss. This means:

-   the value is checked to see whether it is a valid value for the data type of the source
    
-   whether a conversion to the target field can produce a loss of values
    
-   The value is valid for the target field after conversion
    

If the source contains a valid value and no values are lost, the conversion is performed in accordance with the associated [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). Otherwise no assignment is made. If it is known statically that one of the prerequisites is not met, a syntax error occurs. If this violation is not identified until the program is executed, a handleable exception is raised. The exception class of this exception is generally a subclass of CX\_SY\_CONVERSION\_ERROR.

The following sections outline which rules are used by the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) when checking the content of its argument with respect to the data types involved:

-   [Checks elementary data objects](javascript:call_link\('abenmove_exact_elementary.htm'\))
    
-   [Checks structures](javascript:call_link\('abenmove_exact_structure.htm'\))
    
-   [Checks internal tables](javascript:call_link\('abenmove_exact_itab.htm'\))
    

If an exception is raised as a result of an invalid or inappropriate value, the VALUE attribute of the exception object is assigned this value in character form; this value is generally also included in the exception text.

No checks are made for:

-   compatible data types

The content of the argument is passed to the return value without being converted, even if it already contains an invalid value.

-   reference variables

Checks on the content of a reference variable using EXACT are not useful. This is because nothing is converted and the content is either assignable or not assignable, as specified by the [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)).

A syntax check warning is produced if it is known statically that no checks are performed for the combination of argument and target type, so making EXACT superfluous.

Note

Since lossless checks are only performed for conversions to incompatible data types, it is best to only use the operator EXACT to fill data objects that should only be given valid objects. Other types of assignments that require a start value to be specified in the declaration using [VALUE](javascript:call_link\('abapdata_options.htm'\)) can create invalid values that are then not recognized when a lossless assignment is made to a compatible target field.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\))
[Checking Structures](javascript:call_link\('abenmove_exact_structure.htm'\))
[Checking Internal Tables](javascript:call_link\('abenmove_exact_itab.htm'\))