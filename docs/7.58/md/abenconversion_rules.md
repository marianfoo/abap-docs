  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignment%20and%20Conversion%20Rules%2C%20ABENCONVERSION_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignment and Conversion Rules

When the value of a source object (source) is assigned to a destination object (destination), three cases can be distinguished with respect to the data type:

1.  source and destination are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), which means that all [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") match. The content is transferred from source to destination without being converted. For flat data objects and coherent character-like or byte-like structural areas, a copy of the source object is created down to the exact byte. In the case of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects, a reference is created whose actual byte-like content is not visible externally in the destination object. When entire structures are assigned, the behavior in terms of [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") is undefined. The binary content of an alignment gap in the destination structure can either be copied from the source structure or keep the original value.
2.  source and destination are not compatible but can be [converted](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry"). The content of source is converted in accordance with the conversion rules and then transferred to destination. Two data types are convertible if a conversion rule exists for them. An exception is raised if the content of source cannot be handled in accordance with the conversion rules. After an exception, the content of destination depends on the category of the data type. An assignment where a conversion takes place is always slower than an assignment without conversion.
3.  If the data objects are neither compatible nor convertible, no assignment can take place. If the syntax check recognizes this state, a syntax error is raised, otherwise an uncatchable exception is raised when the program is executed.

The following sections describe the conversion rules. Conversion rules exist for:

-   [Elementary data objects](javascript:call_link\('abenconversion_elementary.htm'\))
-   [Structures](javascript:call_link\('abenconversion_struc.htm'\))
-   [Internal tables](javascript:call_link\('abenconversion_itab.htm'\))
-   [Meshes](javascript:call_link\('abenconversion_mesh.htm'\))
-   [Enumerated types](javascript:call_link\('abenconversion_enumerated.htm'\))

The special [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)) are listed in a separate section.

The conversion rules shown here generally apply to all [assignments](javascript:call_link\('abenequals_operator.htm'\)) and all statements in which the content of data objects is changed. Exceptions to these rules are described in the individual statements.

The [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used in many operand positions to convert a source value to an explicitly specified target data type in accordance with the rules described here. [System classes](javascript:call_link\('abencl_abap_conv.htm'\)) are available for special conversions of character sets and numeric formats.

Hints

-   In the [operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") of many statements, assignments take place internally according to the assignment rules. Whether the exceptions that occur during an assignment can be handled or not depends on the operands and the operand position. The following are some examples:
    -   If [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)) are used in operand positions, exceptions that can be handled when data objects are used directly cannot be handled, and produce runtime errors directly instead.
    -   In [comparisons](javascript:call_link\('abenlogexp.htm'\)), some different [rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) apply than in assignments. Exceptions that are catchable in assignments are either handled implicitly or lead to runtime errors and cannot be handled explicitly in comparisons.
    -   Using [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") in operand positions can make uncatchable exceptions catchable in some cases.
-   The [lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry") [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can be used to perform checks before the conversion is executed that ensure that only valid values are assigned and that no values are lost in assignments.
-   Checks generally are not made on assignments between compatible data objects. If a data object already contains an invalid value, for example an invalid date or time in a date or time field, it is transferred like a valid value if the assignment is being made to a compatible data object.
-   In order to check if two data types are compatible at runtime, the method APPLIES\_TO\_DATA of RTTI class CL\_ABAP\_DATADESCR can be used. This can be helpful to prevent uncatchable exceptions when assigning generically typed data objects that are neither compatible nor convertible.

Programming Guideline

[Avoid unexpected conversion results](javascript:call_link\('abenuse_conversion_rules_guidl.htm'\) "Guideline")

Example

Method APPLIES\_TO\_DATA of RTTI class CL\_ABAP\_DATADESCR is used to check the compatibility of generically typed field symbols pointing to different data objects. Assigning the content of <fs1> to <fs3> would raise an uncatchable exception.

DATA num1 TYPE i.
DATA num2 TYPE i.
DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(o) = cl\_demo\_output=>new( ).
FIELD-SYMBOLS:
  <fs1> TYPE any,
  <fs2> TYPE any,
  <fs3> TYPE any.
ASSIGN num1 TO <fs1>.
ASSIGN num2 TO <fs2>.
ASSIGN itab TO <fs3>.
o->next\_section( 'i vs. i' ).
IF CAST cl\_abap\_datadescr( cl\_abap\_typedescr=>describe\_by\_data( <fs1> )
    )->applies\_to\_data( <fs2> ).
  o->write( 'Compatible' ).
  <fs1> = <fs2>.
ELSE.
  o->write( 'Not compatible' ).
ENDIF.
o->next\_section( 'i vs. itab' ).
IF CAST cl\_abap\_datadescr( cl\_abap\_typedescr=>describe\_by\_data( <fs1> )
    )->applies\_to\_data( <fs3> ).
  o->write( 'Compatible' ).
  <fs1> = <fs3>.
ELSE.
  o->write( 'Not compatible' ).
ENDIF.
o->display( ).

Continue
[Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\))
[Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\))
[Conversion Rules for Internal Tables](javascript:call_link\('abenconversion_itab.htm'\))
[Conversion Rules for Meshes](javascript:call_link\('abenconversion_mesh.htm'\))
[Conversion Rules for Enumerated Types](javascript:call_link\('abenconversion_enumerated.htm'\))
[System Classes for Converting Character Sets and Number Formats](javascript:call_link\('abencl_abap_conv.htm'\))
[Conversions, Performance Notes](javascript:call_link\('abenconversion_perfo.htm'\))