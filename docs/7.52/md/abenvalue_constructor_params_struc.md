  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) → 

VALUE - Structures

Syntax

... VALUE dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                   *\[*BASE dobj*\]*
                   comp1 = dobj1 comp2 = dobj2 ... ) ...

Effect

If dtype is a structured data type or # stands for a type like this, the individual components can be specified as named arguments comp1, comp2, ... Each component of the return value can be assigned a data object with the same data type as the component (or whose data type can be converted to this data type). This assignment is made for all data types in accordance with the appropriate [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)).

An addition BASE can be specified in front of the individual component assignments, followed by a data object dobj. dobj is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The type of dobj must be convertible to the type of the return value. If BASE is specified, the content of dobj is assigned to the return value before the individual components are assigned. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the VALUE expression, the type of dobj is used for this expression (if known and structured).

dobj1, dobj2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the assignments to define local helper fields that can be used on the right side of the assignments.

If a component is itself structured, either a suitable data object can be assigned to the entire substructure or its components can be specified using the structure component selector (\-). Non-specified components are ignored and keep their type-specific initial value or the value assigned using BASE. It is not possible to assign multiple values to a component, regardless of how the component is addressed. If the addition BASE is used, at least one component must be specified.

If the VALUE operator is used as the source of an assignment to a structure, this structure is first initialized after any [LET](javascript:call_link\('abaplet.htm'\)) expressions are evaluated or the structure is first assigned the data object dobj after BASE. The assignments are then executed directly in the parentheses, with the structure components as target fields.

Notes

-   The assignments can be specified in the parentheses after the optional additions LET ... IN and BASE, in any order.

-   If a component with a complex data type is constructed in an argument position, the value operator VALUE can be used again. Tabular components, for example, are affected by this. This is also possible for structured components but is not necessary since the subcomponents can be addressed using the structure component selector.

-   The rule that a target structure of an assignment is first overwritten in full and then modified directly can produce unexpected results if structure components on the left side are specified as data objects pending assignment on the right side. Instead of the assignments on the right side being evaluated and assigned first, the current value is used in every assignment. If the entire structure or structure components from the left side are needed on the right side, however, they can be saved in local helper variables using a [LET](javascript:call_link\('abaplet.htm'\)) expression, since this expression is evaluated first.

-   If the target table is specified as dobj after BASE in an assignment to an existing structure, no assignment takes place before the component assignments are evaluated, and the target structure just keeps its value instead.

Example

Three different ways of filling a nested structure struct with values. The structure is given the same values each time.

TYPES:  BEGIN OF t\_col2,
           col1 TYPE i,
           col2 TYPE i,
        END OF t\_col2.
TYPES: BEGIN OF t\_struct,
         col1 TYPE i,
         col2 TYPE t\_col2,
       END OF t\_struct.
DATA: struct TYPE t\_struct,
      col2 TYPE t\_col2.
struct = VALUE t\_struct( col1 = 1
                         col2-col1 = 1
                         col2-col2 = 2 ).
col2   = VALUE   t\_col2( col1 = 1
                         col2 = 2 ).
struct = VALUE t\_struct( col1 = 1
                         col2 = col2 ).
struct = VALUE t\_struct( col1 = 1
                         col2 = VALUE #( col1 = 1
                                         col2 = 2 ) ).

Example

This example displays the effects produced if components of a target structure are used as assignment sources. After the assignment to struct1, col1 and col2 have the value 0 and col3 and col4 have the value 5. The original values of col1 and col2 are not switched and col3 is not given the original value of col4. The assignment to struct2 demonstrates how the behavior can be changed by saving the target object to a helper variable x and using this object. In struct2, the original values of col1 and col2 are switched and col3 is given the original value of col4.

DATA:
  BEGIN OF struct,
    col1 TYPE i VALUE 1,
    col2     TYPE i VALUE 2,
    col3 TYPE i VALUE 3,
    col4 TYPE i VALUE 4,
  END OF struct,
  struct1 LIKE struct,
  struct2 LIKE struct.
struct1 = struct2 = struct.
struct1 = VALUE #( col1 = struct1-col2
                   col2 = struct1-col1
                   col4 = 5
                   col3 = struct1-col4 ).
cl\_demo\_output=>write( struct1 ).
struct2 = VALUE #( LET x = struct2 IN
                   col1 = x-col2
                   col2 = x-col1
                   col4 = 5
                   col3 = x-col4 ).
cl\_demo\_output=>display( struct2 ).

Example

Uses BASE. The type of the return value of base1 is applied in the construction of struct1. This is not possible in the construction of struct2, since base2 is not structured. In both results, col1 and col3 have the values xx or zz assigned using BASE, whereas col2 has the directly assigned value BB.

TYPES:
  BEGIN OF struct,
    col1 TYPE c LENGTH 2,
    col2 TYPE c LENGTH 2,
    col3 TYPE c LENGTH 2,
  END OF struct.
DATA(base1)   = VALUE struct( col1 = 'xx' col2 = 'yy' col3 = 'zz' ).
DATA(struct1) = VALUE #( BASE base1 col2 = 'BB' ).
DATA(base2)   = \`xxyyzz\`.
DATA(struct2) = VALUE struct( BASE base2 col2 = 'BB' ).
cl\_demo\_output=>write( struct1 ).
cl\_demo\_output=>display( struct2 ).

Example

Uses BASE with a [CORRESPONDING expression](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) for an assignment between two incompatible structures. struct1 is first assigned the identically named components of struct2 and then the remaining components are filled explicitly. The same can be done for the columns of an internal table by performing an appropriate assignment within an iteration using [FOR](javascript:call_link\('abenfor_itab.htm'\)).

DATA:
  BEGIN OF struct1,
    col1 TYPE i,
    col2 TYPE i,
    col3 TYPE i,
    col4 TYPE i,
    col5 TYPE i,
  END OF struct1,
  BEGIN OF struct2,
    col1 TYPE i VALUE 1,
    col2     TYPE i VALUE 2,
    col3 TYPE i VALUE 3,
  END OF struct2.
struct1 = VALUE #( BASE CORRESPONDING #( struct2 ) col4 = 4 col5 = 5 ).

Examples

See also the examples for the instance operator [NEW](javascript:call_link\('abennew_constructor_params_struct.htm'\)).