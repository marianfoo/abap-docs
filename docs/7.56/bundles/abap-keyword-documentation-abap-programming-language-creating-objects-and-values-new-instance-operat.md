# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / NEW, Instance Operator

Included pages: 8


### abenconstructor_expression_new.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

NEW, Instance Operator

Syntax

... NEW type( ... ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the instance operator NEW creates an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") or an [instance](javascript:call_link\('abeninstance_glosry.htm'\) "Glossary Entry") of a class and assigns values to the new object. The result is a reference variable that points to the created object. The following can be specified for type:

-   A non-generic data type dtype.
    
    The operator NEW works in the same way as the statement [CREATE DATA dref TYPE dtype](javascript:call_link\('abapcreate_data_existing.htm'\)), where dref stands for the result that points to the created anonymous data object. The result is a data reference variable of the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") dtype. A constructor expression of this type cannot be extended using a [component selector](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry").
    
-   A class class.
    
    The operator NEW works in the same way as the statement [CREATE OBJECT oref TYPE class](javascript:call_link\('abapcreate_object_explicit.htm'\)), where oref stands for the result that points to the created object. The result is an object reference variable of the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") class. In [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) and [functional positions](javascript:call_link\('abenfunctional_positions.htm'\)), a component selector can be added to such a constructor expression, like an object reference variable with an component selector \-> and can be used in the same operand positions. The following is also possible:
    
    -   [Standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)), including [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry"), can be introduced.
    -   A single expression that points to an attribute of the class using exactly one subsequent object component selector can also be used as the target field of assignments.
-   The # character.
    
    If the data type required in an operand position is unique and can be identified completely, the # character can be used instead of an explicit type specification type and the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry") is used. If the operand type is not known completely, the # character cannot be used, with the following exception: The operand can be evaluated after BASE when a [structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)) or an [internal table](javascript:call_link\('abennew_constructor_params_itab.htm'\)) is constructed.
    

The same descriptions apply as to the CREATE statements. After an object is created successfully, it is supplied with values using the parameters specified in parentheses. The syntax of the parameter passing depends on the type used. There are specialized types of parameter passing for complex types.

-   [Initial value for all types](javascript:call_link\('abennew_constructor_params_initial.htm'\))
-   [Initial value for all data types](javascript:call_link\('abennew_constructor_params_single.htm'\))
-   [Structures](javascript:call_link\('abennew_constructor_params_struct.htm'\))
-   [Internal tables](javascript:call_link\('abennew_constructor_params_itab.htm'\))
-   [Classes](javascript:call_link\('abennew_constructor_params_class.htm'\))

If a constructor expression is [assigned](javascript:call_link\('abenequals_operator.htm'\)) to a reference variable using NEW, the information in the parentheses is evaluated before the created object is bound to the target variable.

Return Code

If an instance of a [class](javascript:call_link\('abennew_constructor_params_class.htm'\)) is created successfully, the instance operator NEW sets sy-subrc to 0. Since non-class-based exceptions of the instance constructor cannot be handled, sy-subrc is never set to a value other than 0. The return code sy-subrc is not set when anonymous data objects are created.

Hints

-   To create the values for a new data object, the instance operator NEW uses mainly the same syntax as the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).
-   The instance operator NEW always creates a new temporary reference variable that points to the created object. The reference variable is used as the operand of a statement and then deleted. It is deleted when the current statement is closed or after the evaluation of a relational expression once the truth value is determined. The created object is passed to the Garbage Collector if it is not received by a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or a field symbol after the temporary reference variable has been deleted.
-   [Assignments](javascript:call_link\('abenequals_operator.htm'\)) to a reference variable also always create a temporary reference variable that is only assigned to the target variable afterwards. This means that the object to which the target variable points before the assignment can be addressed using it throughout the entire expression. This is the difference between NEW and the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

Example

Creation of an anonymous data object of the type i with the value 555 and an instance of a local class cls whereby this is derived implicitly from the static type of oref. In this case, the last statement could be written explicitly as oref = NEW cls( ) or as DATA(oref) = NEW cls( ), using an inline declaration instead of the preceding DATA statement.

CLASS cls DEFINITION.
  ...
ENDCLASS.
DATA: dref TYPE REF TO data,
      oref TYPE REF TO cls.
dref = NEW i( 555 ).
oref = NEW #( ).

Continue
[NEW, Initial Value for All Types](javascript:call_link\('abennew_constructor_params_initial.htm'\))
[NEW, Single Value for All Data Types](javascript:call_link\('abennew_constructor_params_single.htm'\))
[NEW, Structures](javascript:call_link\('abennew_constructor_params_struct.htm'\))
[NEW, Internal Tables](javascript:call_link\('abennew_constructor_params_itab.htm'\))
[NEW, Classes](javascript:call_link\('abennew_constructor_params_class.htm'\))


### abennew_constructor_params_initial.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Initial Value for All Types

Syntax

... NEW dtype*|*class*|*#( ) ...

Effect

If no parameter is specified,

-   an anonymous data object retains its type-specific initial value,
-   no values are passed to the instance constructor of an object.

This is possible for every non-generic data type dtype. The instance constructor of a class class can either have only optional input parameters or no input parameters at all. The # symbol can stand for corresponding types.

Hint

If dtype or # stand for an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), its initial value is created according to its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

Example

After the following program section is executed, dref points to an empty internal table with the line type T100. Both constructor expressions have the same function.

TYPES t\_itab TYPE TABLE OF t100 WITH EMPTY KEY.
DATA dref TYPE REF TO t\_itab.
dref = NEW #( ).
dref = NEW t\_itab( ).


### abennew_constructor_params_single.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Single Value for All Data Types

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj ) ...

Effect

If dtype is a non-generic elementary data type, a structured type, a table type, or a reference type or # is used for a type like this, a single data object dobj can be specified as a unnamed argument that is convertible to or from data type dtype. dobj is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The value of dobj is assigned to the created anonymous data object. The assignment is made in accordance with the applicable [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)). Optionally, a LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the data object to define local helper fields.

Hints

-   In particular, an expression specified for dobj can be a constructor expression itself or contain a constructor expression.
-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed.

Example

Construction of an anonymous data object of the type string, whose value is determined using a string expression.

DATA input TYPE c LENGTH 10 VALUE 'World'.
cl\_demo\_input=>request( CHANGING field = input ).
DATA dref TYPE REF TO string.
dref =  NEW string( \`Hello \` && input && \`!\` ).
cl\_demo\_output=>display( dref->\* ).

Example

For each line read, a structured anonymous data object is created in a SELECT loop, to which the content of the line is assigned. The object is created in the general expression position of the statement APPEND and the created data reference is appended directly to an internal table with the appropriate line type. The result is a table that references all new anonymous data objects.

DATA dref\_tab LIKE TABLE OF REF TO t100 WITH EMPTY KEY.
DATA wa TYPE t100.
SELECT \*
       FROM t100
       WHERE sprsl = @sy-langu
       INTO @wa.
  APPEND NEW #( wa ) TO dref\_tab.
ENDSELECT.


### abennew_constructor_params_struct.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Structures

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                 *\[*BASE dobj*\]*
                 comp1 = dobj1 comp2 = dobj2 ... ) ...

Effect

If dtype is a structured data type or # stands for such a type, the individual components can be specified as named arguments comp1, comp2, ... Each component of the created anonymous data object can be assigned a data object with the same data type as the component, or can be converted to it. The assignment is made for all data types in accordance with the corresponding [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)).

An addition BASE can be specified in front of the individual component assignments, followed by a data object dobj. dobj is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The type of dobj must be convertible to the type of the anonymous data object. If BASE is specified, the content of dobj is assigned to the anonymous data object before the individual components are assigned. If the character # is specified for the type of the anonymous data object and the type cannot be determined from the operand position of the VALUE expression, the type of dobj is used for this expression if it is known and structured.

dobj1, dobj2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). Optionally, a LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the assignments to define local helper fields that can be used on the right side of the assignments.

If a component is structured itself, either a suitable data object can be assigned to the entire substructure or its components can be specified using the structure component selector (\-). Non-specified components are ignored and keep their type-specific initial value, or the value assigned using BASE. If the addition BASE is used, at least one component must also be specified.

It is not possible to assign multiple values to a component if the component is addressed by the same name. In structures that contain [component groups](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry"), the respective components can be addressed as usual as components of the including structures or by using the name of the component group. Then, a component might be assigned more than one value and the latest assignment is respected.

Hints

-   The assignments can be specified in any order in parentheses.
-   If a component with a complex data type is to be constructed in an argument position, the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used. This affects tabular components, for example. This is also possible for structured components but is not necessary since the subcomponents can be addressed using the structure component selector.
-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_struc.htm'\)), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.

Example

Construction of an anonymous data object with a nested structure type and tabular components. The subcomponents of col2 are addressed directly using the structure component selector. [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) must be used to construct the tabular component col3 because the [syntax](javascript:call_link\('abennew_constructor_params_itab.htm'\)) for constructing internal tables cannot be specified directly as an argument.

TYPES: t\_itab TYPE TABLE OF i WITH EMPTY KEY,
       BEGIN OF t\_struct,
         col1 TYPE i,
         BEGIN OF col2,
           col1 TYPE i,
           col2 TYPE t\_itab,
         END OF col2,
         col3 TYPE t\_itab,
       END OF t\_struct.
DATA itab TYPE t\_itab.
DATA dref TYPE REF TO data.
dref = NEW t\_struct( col1 = 1
                     col2-col1 = 2
                     col2-col2 = itab
                     col3 = VALUE #( ( 1 )
                                     ( 2 )
                                     ( 3 ) ) ).

Example

Use of BASE. The type of the return value of base1 is transferred in the construction of ref1. This is not possible in the construction of ref2, since base2 is not structured. In both results, col1 and col3 have the values xx or zz assigned using BASE, whereas col2 has the directly assigned value BB.

TYPES:
  BEGIN OF struct,
    col1 TYPE c LENGTH 2,
    col2 TYPE c LENGTH 2,
    col3 TYPE c LENGTH 2,
  END OF struct.
DATA(base1) = VALUE struct( col1 = 'xx' col2 = 'yy' col3 = 'zz' ).
DATA(ref1)  = NEW #( BASE base1 col2 = 'BB' ).
DATA(base2)   = \`xxyyzz\`.
DATA(ref2)  = NEW struct( BASE base2 col2 = 'BB' ).
cl\_demo\_output=>write(   ref1->\* ).
cl\_demo\_output=>display( ref2->\* ).

Example

See also the examples for the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_struc.htm'\)).


### abennew_constructor_params_itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Internal Tables

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                 *\[*BASE itab*\]*
                 *\[*[FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
                  [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
                  ... *\]*
                 ( [line\_spec1](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                 ( [line\_spec2](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                   ... ) ...

Additions:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for such a type, the table lines of the constructed table are created as follows:

-   The first option is to list a LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) to define local helper fields whose values can be used to construct the table lines.
-   An optional start value for the content can then be specified for the content of the internal table after BASE (see below).
-   One or more optional consecutive [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") can then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) (see below).
-   The table lines are then constructed in one or more sets of internal parentheses by specifying [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)). Each set of inner parentheses constructs one or more lines in accordance with the information in line\_spec and inserts them into the new internal table according to the rules for the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)). The object is inserted in the order of the parentheses.

The constructed lines must meet the requirements of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") where the lines are only appended anyway, the value can be shorter than the line length for line types c and x and then padded on the right with blanks or hexadecimal 0.

Hints

-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.
-   The operand type for [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) in the inner parentheses is the line type of the table type specified using dtype or # and is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using #.

Example

Construction of an anonymous internal table with a structured line type with substructures and tabular components.

TYPES: BEGIN OF t\_struct1,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_struct1,
       BEGIN OF t\_struct2,
         col1 TYPE i,
         col2 TYPE t\_struct1,
         col3 TYPE TABLE OF t\_struct1 WITH EMPTY KEY,
       END OF t\_struct2,
       t\_itab TYPE TABLE OF t\_struct2 WITH EMPTY KEY.
DATA dref TYPE REF TO data.
dref = NEW t\_itab( ( col1 = 1
                     col2-col1 = 1
                     col2-col2 = 2
                     col3 = VALUE #( ( col1 = 1 col2 = 2 )
                                     ( col1 = 3 col2 = 4 ) ) )
                   ( col1 = 2
                     col2-col1 = 2
                     col2-col2 = 4
                     col3 = VALUE #( ( col1 = 2 col2 = 4 )
                                     ( col1 = 6 col2 = 8 ) ) ) ).

Examples

See also the examples for the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).

Addition 1   

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the specification of lines to be inserted. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The line type of itab must be convertible to the line type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual lines are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression if it is known.

Example

Construction of three anonymous internal tables with an elementary line type. The first table is filled with three lines, whereby the second inserted line is initial. The second and third tables are filled with the lines of the first table and three further lines. Using BASE and [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) has the same effect here.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref1) = NEW t\_itab( ( 1 ) (  ) ( 3 ) ).
DATA(dref2) = NEW t\_itab( BASE dref1->\*
                          (   ) ( 5 ) (  ) ).
DATA(dref3) = NEW t\_itab( ( LINES OF dref1->\* )
                          (   ) ( 5 ) (  ) ).
cl\_demo\_output=>write(   dref1->\* ).
cl\_demo\_output=>write(   dref2->\* ).
cl\_demo\_output=>display( dref3->\* ).

Addition 2   

... FOR for\_exp

Effect

If one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") are specified consecutively using [FOR](javascript:call_link\('abenfor.htm'\)), the lines constructed in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) for each iteration of the last FOR expression are inserted into the target table. When constructing table lines in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)), the visible local work areas and field symbols of the iteration expressions can be used to construct table lines.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the new table lines are created in freely definable iteration steps.
-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"), since new table lines are constructed from the lines of existing internal tables.

Hints

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also referred to as "list comprehension".
-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be achieved more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).
-   Conditional iterations and table comprehensions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Example

Construction of an anonymous internal table with an elementary line type and filling it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref) = NEW t\_itab( FOR i = 1 UNTIL i > 10
                         ( ipow( base = i exp = 2 ) ) ).
cl\_demo\_output=>display( dref->\* ).

Executable Examples

[Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))

Continue
[NEW, line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\))


### abennew_constructor_params_lspc.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) →  [NEW, Internal Tables](javascript:call_link\('abennew_constructor_params_itab.htm'\)) → 

NEW, line\_spec

Syntax

... line
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specification of one or more lines to be inserted when constructing an internal table with the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)).

Alternative 1   

... line

Effect

Specification of a line. For line, the exact same specifications can be made as in the parentheses of an expression [NEW line\_type( ... )](javascript:call_link\('abenconstructor_expression_new.htm'\)), where line\_type is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

-   If a data object is specified for line, this object must be compatible with the line type.
-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for line, the result of the expression must be convertible to the line type.
-   The syntax does not allow further parentheses for constructing tabular line types to be nested directly in line.

Short Form for Structured Line Types

If the line type of the internal table is a structured type, the following short form can be used:

NEW dtype*|*#( *\[*let\_exp*\]*
             *\[*BASE itab*\]*
             col1 = dobj11 ... ( col2 = dobj12 col3 = dobj13 ... )
                               ( col2 = dobj22 col3 = dobj23 ... )
                               ...
             col1 = dobj31 col2 = dobj32 ... ( col3 = dobj33 ... )
                                             ( col3 = dobj43 ... )
             ... ).

This has the same semantics as the following form:

NEW dtype*|*#( *\[*let\_exp*\]*
             *\[*BASE itab*\]*
             ( col1 = dobj11 ... col2 = dobj12 col3 = dobj13 ... )
             ( col1 = dobj11 ... col2 = dobj22 col3 = dobj23 ... )
             ...
             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj33 ... )
             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj43 ... )
             ... ).

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Hints

-   The restriction that the content of tabular line types cannot be constructed directly in line applies for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be specified for line to construct the content of a tabular line, where line\_type is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [CONV line\_type( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for the values to be inserted.
-   The short form for structured line types enables columns of internal tables that are to contain an identical value in blocks to be filled more easily.

Example

Construction of an anonymous internal table with a structured line type with a short form for the first column:

TYPES:
  BEGIN OF t\_line,
    col1 TYPE i,
    col2 TYPE i,
  END OF t\_line,
  t\_itab TYPE TABLE OF t\_line WITH EMPTY KEY.
DATA(dref) = NEW t\_itab( col1 = 1 ( col2 = 11 )
                                  ( col2 = 12 )
                                  ( col2 = 13 )
                         col1 = 2 ( col2 = 21 )
                                  ( col2 = 22 )
                                  ( col2 = 23 ) ).
cl\_demo\_output=>display( dref->\* ).

Alternative 2   

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

Specification of multiple lines. The lines are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, and USING KEY as to the addition [LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and the block is inserted in accordance with these rules. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Hints

-   Since the lines from jtab are inserted into the target table using only the table key, jtab must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)).
-   When standard tables are created, the lines of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](javascript:call_link\('abapappend_linespec.htm'\)).

Example

Construction of an internal table itab that contains the first three lines and last three rows of the previously constructed internal table alpha.

DATA:
  alpha TYPE TABLE OF string WITH EMPTY KEY,
  itab  LIKE REF TO alpha.
alpha = VALUE #(  FOR j = 0 UNTIL j >= strlen( sy-abcde )
                  ( substring( val = sy-abcde
                               off = j
                               len = 1  ) ) ).
itab = NEW #( ( LINES OF alpha FROM 1 to 3 )
              ( \`-\` )
              ( LINES OF alpha FROM lines( alpha ) - 2
                               TO   lines( alpha ) ) ).
cl\_demo\_output=>display( itab->\* ).


### abennew_constructor_params_itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Internal Tables

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                 *\[*BASE itab*\]*
                 *\[*[FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
                  [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
                  ... *\]*
                 ( [line\_spec1](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                 ( [line\_spec2](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                   ... ) ...

Additions:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for such a type, the table lines of the constructed table are created as follows:

-   The first option is to list a LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) to define local helper fields whose values can be used to construct the table lines.
-   An optional start value for the content can then be specified for the content of the internal table after BASE (see below).
-   One or more optional consecutive [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") can then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) (see below).
-   The table lines are then constructed in one or more sets of internal parentheses by specifying [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)). Each set of inner parentheses constructs one or more lines in accordance with the information in line\_spec and inserts them into the new internal table according to the rules for the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)). The object is inserted in the order of the parentheses.

The constructed lines must meet the requirements of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") where the lines are only appended anyway, the value can be shorter than the line length for line types c and x and then padded on the right with blanks or hexadecimal 0.

Hints

-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.
-   The operand type for [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) in the inner parentheses is the line type of the table type specified using dtype or # and is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using #.

Example

Construction of an anonymous internal table with a structured line type with substructures and tabular components.

TYPES: BEGIN OF t\_struct1,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_struct1,
       BEGIN OF t\_struct2,
         col1 TYPE i,
         col2 TYPE t\_struct1,
         col3 TYPE TABLE OF t\_struct1 WITH EMPTY KEY,
       END OF t\_struct2,
       t\_itab TYPE TABLE OF t\_struct2 WITH EMPTY KEY.
DATA dref TYPE REF TO data.
dref = NEW t\_itab( ( col1 = 1
                     col2-col1 = 1
                     col2-col2 = 2
                     col3 = VALUE #( ( col1 = 1 col2 = 2 )
                                     ( col1 = 3 col2 = 4 ) ) )
                   ( col1 = 2
                     col2-col1 = 2
                     col2-col2 = 4
                     col3 = VALUE #( ( col1 = 2 col2 = 4 )
                                     ( col1 = 6 col2 = 8 ) ) ) ).

Examples

See also the examples for the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).

Addition 1   

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the specification of lines to be inserted. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The line type of itab must be convertible to the line type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual lines are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression if it is known.

Example

Construction of three anonymous internal tables with an elementary line type. The first table is filled with three lines, whereby the second inserted line is initial. The second and third tables are filled with the lines of the first table and three further lines. Using BASE and [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) has the same effect here.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref1) = NEW t\_itab( ( 1 ) (  ) ( 3 ) ).
DATA(dref2) = NEW t\_itab( BASE dref1->\*
                          (   ) ( 5 ) (  ) ).
DATA(dref3) = NEW t\_itab( ( LINES OF dref1->\* )
                          (   ) ( 5 ) (  ) ).
cl\_demo\_output=>write(   dref1->\* ).
cl\_demo\_output=>write(   dref2->\* ).
cl\_demo\_output=>display( dref3->\* ).

Addition 2   

... FOR for\_exp

Effect

If one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") are specified consecutively using [FOR](javascript:call_link\('abenfor.htm'\)), the lines constructed in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) for each iteration of the last FOR expression are inserted into the target table. When constructing table lines in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)), the visible local work areas and field symbols of the iteration expressions can be used to construct table lines.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the new table lines are created in freely definable iteration steps.
-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"), since new table lines are constructed from the lines of existing internal tables.

Hints

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also referred to as "list comprehension".
-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be achieved more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).
-   Conditional iterations and table comprehensions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Example

Construction of an anonymous internal table with an elementary line type and filling it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref) = NEW t\_itab( FOR i = 1 UNTIL i > 10
                         ( ipow( base = i exp = 2 ) ) ).
cl\_demo\_output=>display( dref->\* ).

Executable Examples

[Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))

Continue
[NEW, line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\))


### abennew_constructor_params_class.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Classes

Syntax

... NEW class*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* p1 = a1 p2 = a2 .. ) ...

Effect

If a class class is specified or # stands for a class like this, the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class must be filled with the type-compliant actual parameters a1 a2 ... The optional input parameters do not need to but can be filled. The description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_parameters.htm'\)) specifies how parameters are passed and which classes can be used. [No parameters](javascript:call_link\('abennew_constructor_params_initial.htm'\)) are passed for a class without an explicit instance constructor. An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the parameter to define local helper fields.

Like an object reference variable of the type class, a constructor expression NEW class( ... ) can be specified in front of the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") \-> and in [chained attribute accesses](javascript:call_link\('abenchained_attribute_acc_glosry.htm'\) "Glossary Entry") and [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry"). A chained method call of this type can be specified as a [standalone statement](javascript:call_link\('abapcall_method_static_chain.htm'\)). The result is then preserved for the duration of the statement. Even a single expression without a subsequent object component selector can be executed as a standalone statement. In this case, only the constructor that has a reference to the created object elsewhere is executed if this object needs to be preserved.

In the special case of an attribute access NEW class( ... )->attr, the following applies:

-   It can be specified as a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").
-   If the data type is suitable, a [specified offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") [+off(len)](javascript:call_link\('abenoffset_length.htm'\)) can be appended unless the chaining uses the statement ASSIGN as a [memory area](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

[Method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") cannot be specified between the constructor expression and the attribute here.

Hints

-   This is a functional call of the instance constructor. As in [function calls](javascript:call_link\('abapcall_method_functional.htm'\)) of [functional methods](javascript:call_link\('abapmethods_functional.htm'\)), no [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) can be handled.
-   When the instance constructor is called, the return code sy-subrc is set to 0. Values other than 0 are not possible, since non-class-based exceptions cannot be handled.

Example

Construction of an instance of the class c1 when the method m2 of the class c2 is called, which requires an input parameter of this type.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS constructor IMPORTING p1 TYPE i p2 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD constructor.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m2 IMPORTING oref TYPE REF TO c1.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c2=>m2( NEW #( p1 = 1 p2 = 2 ) ).

Example

Use of a constructor expression with NEW in various positions. The temporary reference variable created using NEW is persisted during each statement.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA     a1 TYPE i.
    METHODS: m1 RETURNING value(p) TYPE i,
             m2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
  METHOD m2.
    ...
  ENDMETHOD.
ENDCLASS.
DATA num TYPE i.
START-OF-SELECTION.
  num = NEW c1( )->a1.
  NEW c1( )->a1 = num.
  num = NEW c1( )->m1( ).
  NEW c1( )->m2( ).
  NEW c1( ).

Example

Display of a time stamp created in a constructor that only exists while the statement is being executed.

CLASS utc DEFINITION.
  PUBLIC SECTION.
    DATA ts TYPE utclong.
    METHODS constructor.
ENDCLASS.
CLASS utc IMPLEMENTATION.
  METHOD constructor.
    ts = utclong\_current( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display\_text(
    |{ NEW utc( )->ts TIMESTAMP = ISO }| ).

Example

Constructor expression with NEW on the left side of an expression. Although the reference variable only exists during the statement, the reference to the object is assigned to the reference variable oref in the constructor of the class class, thus preserving the object.

CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS constructor.
ENDCLASS.
DATA oref TYPE REF TO class.
CLASS class IMPLEMENTATION.
  METHOD constructor.
    oref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW class( )->attr = 'foo'.
  cl\_demo\_output=>display( oref->attr ).
